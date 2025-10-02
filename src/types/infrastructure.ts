export interface Region {
  id: string;
  name: string;
  code: string;
  status: 'healthy' | 'warning' | 'critical';
  instances: number;
  loadBalancers: number;
  lambdaFunctions: number;
  latency: number;
}

export interface ScalingGroup {
  id: string;
  name: string;
  region: string;
  current: number;
  desired: number;
  min: number;
  max: number;
  status: 'scaling-up' | 'scaling-down' | 'stable';
  cpu: number;
  memory: number;
}

export interface LoadBalancer {
  id: string;
  name: string;
  region: string;
  status: 'active' | 'degraded' | 'inactive';
  targets: number;
  healthyTargets: number;
  requestsPerMin: number;
  latency: number;
}

export interface Template {
  id: string;
  name: string;
  type: 'terraform' | 'cloudformation';
  category: string;
  description: string;
  resources: number;
  lastUpdated: string;
}
