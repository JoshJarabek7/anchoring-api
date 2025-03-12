variable "cluster_name" {
  description = "Name of the EKS cluster"
  type        = string
  default     = "anchoring-cluster"
}

variable "kubernetes_version" {
  description = "Kubernetes version for the EKS cluster"
  type        = string
  default     = "1.32"
}

variable "region" {
  description = "AWS region where the cluster will be deployed"
  type        = string
}

variable "vpc_id" {
  description = "ID of the VPC where the cluster will be deployed"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs where the cluster and worker nodes will be deployed"
  type        = list(string)
}

variable "endpoint_private_access" {
  description = "Whether the Amazon EKS private API server endpoint is enabled"
  type        = bool
  default     = false
}

variable "endpoint_public_access" {
  description = "Whether the Amazon EKS public API server endpoint is enabled"
  type        = bool
  default     = true
}

variable "public_access_cidrs" {
  description = "List of CIDR blocks that can access the Amazon EKS public API server endpoint"
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

# Node group configuration
variable "node_instance_types" {
  description = "List of instance types for the EKS node group"
  type        = list(string)
  default     = ["t2.xlarge"]
}

variable "node_ami_type" {
  description = "AMI type for the EKS node group"
  type        = string
  default     = "AL2_x86_64"
}

variable "node_disk_size" {
  description = "Disk size in GiB for worker nodes"
  type        = number
  default     = 50
}

variable "node_desired_size" {
  description = "Desired number of worker nodes"
  type        = number
  default     = 2
}

variable "node_max_size" {
  description = "Maximum number of worker nodes"
  type        = number
  default     = 4
}

variable "node_min_size" {
  description = "Minimum number of worker nodes"
  type        = number
  default     = 1
}

variable "node_max_unavailable" {
  description = "Maximum number of worker nodes that can be unavailable during node group updates"
  type        = number
  default     = 1
}

variable "tags" {
  description = "A map of tags to add to all resources"
  type        = map(string)
  default     = {}
}
