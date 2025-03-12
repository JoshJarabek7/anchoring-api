# Configure Cloudflare DNS records - free tier
resource "cloudflare_record" "dns_records" {
  for_each = {
    for idx, record in var.dns_records : idx => record
  }

  zone_id = var.zone_id
  name    = each.value.name
  value   = each.value.value
  type    = each.value.type
  proxied = each.value.proxied
  ttl     = each.value.ttl
}

# Configure zone settings - free tier features only
resource "cloudflare_zone_settings_override" "settings" {
  zone_id = var.zone_id

  settings {
    tls_1_3                  = "on"
    automatic_https_rewrites = "on"
    always_use_https         = "on"
    ssl                      = var.ssl_mode
    security_level           = var.security_level
    min_tls_version          = "1.2"
    websockets               = "on"
    opportunistic_encryption = "on"
    minify {
      css  = "on"
      js   = "on"
      html = "on"
    }
    brotli = "on"
  }
}
