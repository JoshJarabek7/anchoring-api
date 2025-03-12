variable "domain" {
  description = "The domain name to configure in Cloudflare"
  type        = string
}

variable "account_id" {
  description = "Cloudflare account ID"
  type        = string
}

variable "zone_id" {
  description = "Cloudflare zone ID for the domain"
  type        = string
}

variable "cluster_name" {
  description = "Name of the Kubernetes cluster"
  type        = string
}

variable "dns_records" {
  description = "List of DNS records to create"
  type = list(object({
    name    = string
    value   = string
    type    = string
    proxied = bool
    ttl     = number
  }))
  default = []
}

variable "ssl_mode" {
  description = "SSL mode for the zone (off, flexible, full, strict, origin_pull)"
  type        = string
  default     = "full_strict"
}

variable "security_level" {
  description = "Security level for the zone (essentially_off, low, medium, high, under_attack)"
  type        = string
  default     = "medium"
}