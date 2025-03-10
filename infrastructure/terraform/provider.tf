terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "5.90.1"
        }
        cloudflare = {
            source = "cloudflare/cloudflare"
            version = "5.1.0"
        }
    }
}

provider "aws" {
    # Configuration options
}

provider "cloudflare" {
    # Only the API token is required in the provider block
    api_token = var.cloudflare_api_token
}

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

# Zone ID and domain are typically defined per resource rather than in the provider block
# For example:
# resource "cloudflare_record" "example" {
#   zone_id = var.cloudflare_zone_id
#   name    = "example"
#   value   = "192.0.2.1"
#   type    = "A"
#   ttl     = 3600
# }
#
# resource "cloudflare_page_rule" "example" {
#   zone_id = var.cloudflare_zone_id
#   target  = "*.${var.cloudflare_domain}/*"
#   actions {
#     cache_level = "bypass"
#   }
# }
#
# resource "cloudflare_zone_settings_override" "example" {
#   zone_id = var.cloudflare_zone_id
#   settings {
#     # Zone settings
#   }
# }
#
# For account-level resources:
# resource "cloudflare_workers_kv_namespace" "example" {
#   account_id = var.cloudflare_account_id
#   title      = "example-namespace"
# }

variable "cloudflare_zone_id" {
  description = "Cloudflare Zone ID"
  type        = string
}

variable "cloudflare_domain" {
  description = "Cloudflare Domain"
  type        = string
}