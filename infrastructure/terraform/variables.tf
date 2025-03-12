# Define variables for Cloudflare credentials
variable "cloudflare_api_token" {
  description = "Cloudflare API Token"
  type        = string
  sensitive   = true # Marks this variable as sensitive
}

variable "cloudflare_account_id" {
  description = "Cloudflare Account ID"
  type        = string
}

variable "cloudflare_zone_id" {
  description = "Cloudflare Zone ID"
  type        = string
}

variable "cloudflare_domain" {
  description = "Cloudflare Domain"
  type        = string
}

# AWS Configuration Variables
variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-2"  # Default region, can be overridden in tfvars
}

variable "aws_profile" {
  description = "AWS CLI profile name"
  type        = string
  default     = "default"    # Default profile name, can be overridden in tfvars
}

variable "aws_access_key" {
  description = "AWS Access Key ID"
  type        = string
  sensitive   = true
  default     = null  # Set to null to make it optional
}

variable "aws_secret_key" {
  description = "AWS Secret Access Key"
  type        = string
  sensitive   = true
  default     = null  # Set to null to make it optional
}

# Additional variables can be declared here
