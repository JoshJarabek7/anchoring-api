output "cluster_id" {
  description = "EKS cluster ID"
  value       = aws_eks_cluster.cluster.id
}

output "cluster_arn" {
  description = "EKS cluster ARN"
  value       = aws_eks_cluster.cluster.arn
}

output "cluster_endpoint" {
  description = "Endpoint for the EKS cluster"
  value       = aws_eks_cluster.cluster.endpoint
}

output "cluster_name" {
  description = "Name of the EKS cluster"
  value       = aws_eks_cluster.cluster.name
}

output "cluster_version" {
  description = "Kubernetes version of the EKS cluster"
  value       = aws_eks_cluster.cluster.version
}

output "cluster_security_group_id" {
  description = "Security group ID of the EKS cluster"
  value       = aws_security_group.eks_cluster.id
}

output "node_security_group_id" {
  description = "Security group ID of the EKS node group"
  value       = aws_security_group.eks_nodes.id
}

output "oidc_provider_arn" {
  description = "ARN of the OIDC provider for the EKS cluster"
  value       = aws_iam_openid_connect_provider.cluster.arn
}

output "oidc_provider_url" {
  description = "URL of the OIDC provider for the EKS cluster"
  value       = aws_iam_openid_connect_provider.cluster.url
}

output "aws_lb_controller_role_arn" {
  description = "ARN of the IAM role for the AWS Load Balancer Controller"
  value       = aws_iam_role.aws_lb_controller.arn
}

output "ingress_hostname" {
  description = "DNS hostname for the nginx ingress controller"
  value       = "ingress.${var.cluster_name}.${var.region}.eks.amazonaws.com"
}

output "cluster_auth_token" {
  description = "Authentication token for the EKS cluster"
  value       = data.aws_eks_cluster_auth.cluster.token
  sensitive   = true
}

# Retrieve the authentication token for the EKS cluster
data "aws_eks_cluster_auth" "cluster" {
  name = aws_eks_cluster.cluster.name
}
