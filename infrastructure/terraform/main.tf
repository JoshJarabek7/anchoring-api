# Define common variables to reduce duplication
locals {
  cluster_name = "anchoring-cluster"
  common_tags = {
    Environment = "production"
    Project     = "anchoring-api"
  }
}

# Create VPC for the EKS cluster
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.19.0"

  name = "anchoring-vpc"
  cidr = "10.0.0.0/16"
  
  azs             = ["${var.aws_region}a", "${var.aws_region}b", "${var.aws_region}c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  
  # Using single NAT Gateway for cost savings
  enable_nat_gateway     = true
  single_nat_gateway     = true
  one_nat_gateway_per_az = false
  enable_vpn_gateway     = false
  
  # Tags required for EKS
  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = 1
    "kubernetes.io/cluster/${local.cluster_name}" = "owned"
  }
  
  public_subnet_tags = {
    "kubernetes.io/role/elb" = 1
    "kubernetes.io/cluster/${local.cluster_name}" = "owned"
  }

  tags = local.common_tags
}

# Deploy the EKS cluster
module "eks" {
  source = "./modules/eks"
  
  cluster_name       = local.cluster_name
  kubernetes_version = "1.32"
  region             = var.aws_region
  vpc_id             = module.vpc.vpc_id
  subnet_ids         = module.vpc.private_subnets
  
  endpoint_private_access = true
  endpoint_public_access  = true
  public_access_cidrs     = ["0.0.0.0/0"] # Restrict this in production
  
  # Using t2.xlarge for 16GB memory per node
  node_instance_types = ["t2.xlarge"]
  node_disk_size      = 50
  node_desired_size   = 2
  node_max_size       = 3
  node_min_size       = 1
  
  tags = local.common_tags
}

# Get current AWS account ID
data "aws_caller_identity" "current" {}

# AWS Secrets Manager access for the EKS cluster
resource "aws_iam_policy" "secrets_manager_access" {
  name        = "${local.cluster_name}-secrets-manager-access"
  description = "Provides access to Secrets Manager for EKS pods"
  
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "secretsmanager:GetResourcePolicy",
          "secretsmanager:GetSecretValue",
          "secretsmanager:DescribeSecret",
          "secretsmanager:ListSecretVersionIds"
        ],
        Resource = "arn:aws:secretsmanager:${var.aws_region}:${data.aws_caller_identity.current.account_id}:secret:anchoring-*"
      },
      {
        Effect = "Allow",
        Action = "secretsmanager:ListSecrets",
        Resource = "*"
      }
    ]
  })
  
  tags = local.common_tags
}

# Create IAM role for the service account to access Secrets Manager
resource "aws_iam_role" "eks_secrets_manager" {
  name = "${local.cluster_name}-secrets-manager-role"
  
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Federated = module.eks.oidc_provider_arn
        },
        Action = "sts:AssumeRoleWithWebIdentity",
        Condition = {
          StringEquals = {
            "${replace(module.eks.oidc_provider_url, "https://", "")}:sub": "system:serviceaccount:default:secrets-manager-sa"
          }
        }
      }
    ]
  })
  
  tags = local.common_tags
}

# Attach the policy to the role
resource "aws_iam_role_policy_attachment" "secrets_manager_attachment" {
  role       = aws_iam_role.eks_secrets_manager.name
  policy_arn = aws_iam_policy.secrets_manager_access.arn
}

# Configure Cloudflare DNS and SSL for the domain
module "cloudflare" {
  source = "./modules/cloudflare"
  
  domain       = var.cloudflare_domain
  account_id   = var.cloudflare_account_id
  zone_id      = var.cloudflare_zone_id
  cluster_name = local.cluster_name
  
  # DNS records for API and frontend
  dns_records = [
    {
      name    = "api"
      value   = module.eks.ingress_hostname
      type    = "CNAME"
      proxied = true
      ttl     = 1
    },
    {
      name    = ""  # Apex domain
      value   = module.eks.ingress_hostname
      type    = "CNAME"
      proxied = true
      ttl     = 1
    }
  ]
  
  # SSL configuration
  ssl_mode = "full"
  
  # Minimal security settings for programming documentation site
  security_level = "essentially_off"
}
