# Create security group for the EKS cluster
resource "aws_security_group" "eks_cluster" {
  name        = "${var.cluster_name}-cluster-sg"
  description = "Security group for the EKS cluster"
  vpc_id      = var.vpc_id

  tags = merge(
    var.tags,
    {
      Name = "${var.cluster_name}-cluster-sg"
    }
  )
}

# Allow HTTPS access to the Kubernetes API
resource "aws_security_group_rule" "api_https_inbound" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = var.public_access_cidrs
  security_group_id = aws_security_group.eks_cluster.id
  description       = "Allow HTTPS access to the Kubernetes API"
}

# Allow all outbound traffic
resource "aws_security_group_rule" "cluster_outbound" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1" # All protocols
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.eks_cluster.id
  description       = "Allow all outbound traffic"
}

# Create security group for the worker nodes
resource "aws_security_group" "eks_nodes" {
  name        = "${var.cluster_name}-node-sg"
  description = "Security group for the EKS worker nodes"
  vpc_id      = var.vpc_id

  tags = merge(
    var.tags,
    {
      Name                                      = "${var.cluster_name}-node-sg"
      "kubernetes.io/cluster/${var.cluster_name}" = "owned"
    }
  )
}

# Allow all traffic between the worker nodes in the same cluster
resource "aws_security_group_rule" "nodes_internal" {
  type                     = "ingress"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
  source_security_group_id = aws_security_group.eks_nodes.id
  security_group_id        = aws_security_group.eks_nodes.id
  description              = "Allow all traffic between nodes in the cluster"
}

# Allow worker nodes to access the EKS control plane
resource "aws_security_group_rule" "nodes_to_control_plane" {
  type                     = "ingress"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
  source_security_group_id = aws_security_group.eks_nodes.id
  security_group_id        = aws_security_group.eks_cluster.id
  description              = "Allow nodes to communicate with the control plane"
}

# Allow the EKS control plane to access the worker nodes
resource "aws_security_group_rule" "control_plane_to_nodes" {
  type                     = "egress"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
  source_security_group_id = aws_security_group.eks_nodes.id
  security_group_id        = aws_security_group.eks_cluster.id
  description              = "Allow control plane to communicate with nodes"
}

# Allow HTTP/HTTPS access to the worker nodes for ALB ingress
resource "aws_security_group_rule" "nodes_http_inbound" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.eks_nodes.id
  description       = "Allow HTTP access to worker nodes"
}

resource "aws_security_group_rule" "nodes_https_inbound" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.eks_nodes.id
  description       = "Allow HTTPS access to worker nodes"
}

# Allow all outbound traffic from the worker nodes
resource "aws_security_group_rule" "nodes_outbound" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.eks_nodes.id
  description       = "Allow all outbound traffic from worker nodes"
}
