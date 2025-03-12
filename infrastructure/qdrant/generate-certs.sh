#!/bin/bash
set -e

# Create the TLS directory if it doesn't exist
mkdir -p tls

# Generate CA key and certificate
openssl genrsa -out tls/ca.key 4096
openssl req -new -x509 -key tls/ca.key -sha256 -subj "/CN=QdrantCA" -out tls/cacert.pem -days 365

# Generate server key
openssl genrsa -out tls/key.pem 2048

# Generate server CSR (Certificate Signing Request)
openssl req -new -key tls/key.pem -out tls/server.csr -subj "/CN=qdrant" -addext "subjectAltName = DNS:qdrant,DNS:localhost,IP:127.0.0.1"

# Sign the CSR with our CA
openssl x509 -req -in tls/server.csr -CA tls/cacert.pem -CAkey tls/ca.key -CAcreateserial -out tls/cert.pem -days 365 -sha256 -extfile <(printf "subjectAltName=DNS:qdrant,DNS:localhost,IP:127.0.0.1")

# Clean up intermediate files
rm tls/server.csr tls/ca.key tls/ca.srl

echo "Certificate generation complete!"
echo "cert.pem - Server certificate"
echo "key.pem - Server private key"
echo "cacert.pem - CA certificate (for client verification)"

# Set appropriate permissions
chmod 644 tls/cert.pem tls/cacert.pem
chmod 600 tls/key.pem