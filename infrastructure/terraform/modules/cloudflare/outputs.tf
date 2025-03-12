output "dns_records" {
  description = "The created DNS records"
  value       = cloudflare_record.dns_records
}

output "zone_settings" {
  description = "The applied zone settings"
  value       = cloudflare_zone_settings_override.settings
}