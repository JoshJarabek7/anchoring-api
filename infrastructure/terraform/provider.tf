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
        tls = {
            source = "hashicorp/tls"
            version = "4.0.6"
        }
    }
}

provider "aws" {
    region     = var.aws_region
    access_key = var.aws_access_key
    secret_key = var.aws_secret_key
}

provider "cloudflare" {
    api_token = var.cloudflare_api_token
}