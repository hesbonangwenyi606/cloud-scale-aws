import { LoadBalancer, Template } from '../types/infrastructure';

export const loadBalancers: LoadBalancer[] = [
  { id: '1', name: 'prod-web-alb', region: 'us-east-1', status: 'active', targets: 8, healthyTargets: 8, requestsPerMin: 12450, latency: 45 },
  { id: '2', name: 'api-gateway-nlb', region: 'us-east-1', status: 'active', targets: 6, healthyTargets: 6, requestsPerMin: 8920, latency: 32 },
  { id: '3', name: 'internal-services-alb', region: 'us-west-2', status: 'active', targets: 10, healthyTargets: 9, requestsPerMin: 6780, latency: 38 },
  { id: '4', name: 'cdn-origin-nlb', region: 'us-west-2', status: 'active', targets: 4, healthyTargets: 4, requestsPerMin: 15230, latency: 28 },
  { id: '5', name: 'eu-web-alb', region: 'eu-west-1', status: 'degraded', targets: 6, healthyTargets: 4, requestsPerMin: 5640, latency: 67 },
  { id: '6', name: 'apac-api-nlb', region: 'ap-northeast-1', status: 'active', targets: 5, healthyTargets: 5, requestsPerMin: 4320, latency: 41 },
];

export const templates: Template[] = [
  { id: '1', name: 'VPC with Multi-AZ', type: 'terraform', category: 'Networking', description: 'Production-ready VPC with public/private subnets across 3 AZs', resources: 24, lastUpdated: '2025-09-28' },
  { id: '2', name: 'ECS Fargate Cluster', type: 'cloudformation', category: 'Compute', description: 'Serverless container cluster with auto-scaling', resources: 18, lastUpdated: '2025-09-30' },
  { id: '3', name: 'Lambda API Gateway', type: 'terraform', category: 'Serverless', description: 'REST API with Lambda functions and DynamoDB', resources: 12, lastUpdated: '2025-10-01' },
  { id: '4', name: 'RDS Multi-Region', type: 'cloudformation', category: 'Database', description: 'PostgreSQL with read replicas and automated backups', resources: 15, lastUpdated: '2025-09-25' },
  { id: '5', name: 'S3 + CloudFront CDN', type: 'terraform', category: 'Storage', description: 'Static website hosting with global CDN', resources: 8, lastUpdated: '2025-09-29' },
  { id: '6', name: 'EKS Kubernetes Cluster', type: 'terraform', category: 'Compute', description: 'Managed Kubernetes with node groups and RBAC', resources: 32, lastUpdated: '2025-09-27' },
];
