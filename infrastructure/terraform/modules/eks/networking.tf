# Create open-source nginx-ingress controller instead of AWS Load Balancer
resource "aws_iam_role" "nginx_ingress" {
  name = "${var.cluster_name}-nginx-ingress-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRoleWithWebIdentity"
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.cluster.arn
        }
        Condition = {
          StringEquals = {
            "${replace(aws_iam_openid_connect_provider.cluster.url, "https://", "")}:sub" = "system:serviceaccount:ingress-nginx:ingress-nginx-controller"
          }
        }
      }
    ]
  })

  tags = var.tags
}

# Basic permissions for nginx-ingress to use node ports
resource "aws_iam_policy" "nginx_ingress" {
  name        = "${var.cluster_name}-nginx-ingress-policy"
  description = "Policy for nginx-ingress controller"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "ec2:DescribeInstances",
          "ec2:DescribeSecurityGroups"
        ]
        Resource = "*"
        Effect   = "Allow"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "nginx_ingress" {
  role       = aws_iam_role.nginx_ingress.name
  policy_arn = aws_iam_policy.nginx_ingress.arn
}

# Security group for ingress controller nodes
resource "aws_security_group" "ingress" {
  name        = "${var.cluster_name}-ingress-sg"
  description = "Security group for nginx-ingress controller"
  vpc_id      = var.vpc_id

  tags = merge(
    var.tags,
    {
      Name = "${var.cluster_name}-ingress-sg"
    }
  )
}

# Allow HTTP/HTTPS access to the ingress controller
resource "aws_security_group_rule" "ingress_http" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.ingress.id
  description       = "Allow HTTP access to ingress controller"
}

resource "aws_security_group_rule" "ingress_https" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.ingress.id
  description       = "Allow HTTPS access to ingress controller"
}

# Allow all outbound traffic from the ingress controller
resource "aws_security_group_rule" "ingress_outbound" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.ingress.id
  description       = "Allow all outbound traffic from ingress controller"
}

# Allow nodes to reach ingress controller
resource "aws_security_group_rule" "nodes_to_ingress" {
  type                     = "ingress"
  from_port                = 0
  to_port                  = 65535
  protocol                 = "tcp"
  source_security_group_id = aws_security_group.eks_nodes.id
  security_group_id        = aws_security_group.ingress.id
  description              = "Allow nodes to communicate with ingress controller"
}
