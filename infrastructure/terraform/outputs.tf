# VPC outputs
output "vpc_id" {
  description = "ID of the VPC"
  value       = module.vpc.vpc_id
}

output "vpc_cidr" {
  description = "CIDR block of the VPC"
  value       = module.vpc.vpc_cidr_block
}

output "private_subnets" {
  description = "List of IDs of the private subnets"
  value       = module.vpc.private_subnets
}

output "public_subnets" {
  description = "List of IDs of the public subnets"
  value       = module.vpc.public_subnets
}

# EKS outputs
output "cluster_endpoint" {
  description = "Endpoint for the EKS cluster"
  value       = module.eks.cluster_endpoint
}

output "cluster_name" {
  description = "Name of the EKS cluster"
  value       = module.eks.cluster_name
}

output "cluster_version" {
  description = "Kubernetes version of the EKS cluster"
  value       = module.eks.cluster_version
}

output "cluster_security_group_id" {
  description = "Security group ID of the EKS cluster"
  value       = module.eks.cluster_security_group_id
}

output "ingress_hostname" {
  description = "DNS hostname of the nginx ingress controller"
  value       = module.eks.ingress_hostname
}

# Cloudflare outputs
output "cloudflare_dns_records" {
  description = "The created Cloudflare DNS records"
  value       = module.cloudflare.dns_records
}

output "cloudflare_zone_settings" {
  description = "The applied Cloudflare zone settings"
  value       = module.cloudflare.zone_settings
}

# AWS Secrets Manager outputs
output "secrets_manager_role_arn" {
  description = "ARN of the IAM role for Secrets Manager access"
  value       = aws_iam_role.eks_secrets_manager.arn
}

output "secrets_manager_role_name" {
  description = "Name of the IAM role for Secrets Manager access"
  value       = aws_iam_role.eks_secrets_manager.name
}

# Generate kubeconfig instructions
output "kubeconfig_command" {
  description = "Command to configure kubectl to use the EKS cluster"
  value       = "aws eks update-kubeconfig --name ${module.eks.cluster_name} --region ${var.aws_region}"
}
