resource "aws_eks_cluster" "cluster" {
  name     = var.cluster_name
  role_arn = aws_iam_role.eks_cluster_role.arn
  version  = var.kubernetes_version

  vpc_config {
    subnet_ids              = var.subnet_ids
    endpoint_private_access = var.endpoint_private_access
    endpoint_public_access  = var.endpoint_public_access
    security_group_ids      = [aws_security_group.eks_cluster.id]
  }

  # Minimal logs to save costs, but keeping audit for security
  enabled_cluster_log_types = ["api", "audit"]

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
    aws_cloudwatch_log_group.eks_cluster
  ]

  tags = var.tags
}

# CloudWatch Log Group for EKS logs - reduced retention for cost savings
resource "aws_cloudwatch_log_group" "eks_cluster" {
  name              = "/aws/eks/${var.cluster_name}/cluster"
  retention_in_days = 7 # Reduced from 30 days to save costs
  tags              = var.tags
}

# EKS Node Group
resource "aws_eks_node_group" "main" {
  cluster_name    = aws_eks_cluster.cluster.name
  node_group_name = "${var.cluster_name}-nodes"
  node_role_arn   = aws_iam_role.eks_node_role.arn
  subnet_ids      = var.subnet_ids
  instance_types  = var.node_instance_types
  disk_size       = var.node_disk_size
  ami_type        = var.node_ami_type
  capacity_type   = "ON_DEMAND" # Using on-demand instances for stability

  scaling_config {
    desired_size = var.node_desired_size
    min_size     = var.node_min_size
    max_size     = var.node_max_size
  }

  update_config {
    max_unavailable = var.node_max_unavailable
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_node_policy,
    aws_iam_role_policy_attachment.eks_cni_policy,
    aws_iam_role_policy_attachment.eks_container_registry
  ]

  tags = var.tags
}

# Create an IAM OIDC provider for the cluster
data "tls_certificate" "cluster" {
  url = aws_eks_cluster.cluster.identity[0].oidc[0].issuer
}

resource "aws_iam_openid_connect_provider" "cluster" {
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [data.tls_certificate.cluster.certificates[0].sha1_fingerprint]
  url             = aws_eks_cluster.cluster.identity[0].oidc[0].issuer
  tags            = var.tags
}

# We'll deploy Memcached ourselves inside Kubernetes instead of using AWS ElastiCache

# AWS Load Balancer Controller IAM Role only (no attachment)
# We'll use nginx-ingress instead which is free and open-source
resource "aws_iam_role" "aws_lb_controller" {
  name = "${var.cluster_name}-aws-lb-controller"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRoleWithWebIdentity"
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.cluster.arn
        }
        Condition = {
          StringEquals = {
            "${replace(aws_iam_openid_connect_provider.cluster.url, "https://", "")}:sub" = "system:serviceaccount:kube-system:aws-load-balancer-controller"
          }
        }
      }
    ]
  })

  tags = var.tags
}
