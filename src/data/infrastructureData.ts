import { Region, ScalingGroup, LoadBalancer, Template } from '../types/infrastructure';

export const regions: Region[] = [
  { id: '1', name: 'US East (N. Virginia)', code: 'us-east-1', status: 'healthy', instances: 48, loadBalancers: 6, lambdaFunctions: 23, latency: 12 },
  { id: '2', name: 'US West (Oregon)', code: 'us-west-2', status: 'healthy', instances: 36, loadBalancers: 4, lambdaFunctions: 18, latency: 15 },
  { id: '3', name: 'EU (Ireland)', code: 'eu-west-1', status: 'warning', instances: 42, loadBalancers: 5, lambdaFunctions: 20, latency: 28 },
  { id: '4', name: 'Asia Pacific (Tokyo)', code: 'ap-northeast-1', status: 'healthy', instances: 30, loadBalancers: 3, lambdaFunctions: 15, latency: 45 },
];

export const scalingGroups: ScalingGroup[] = [
  { id: '1', name: 'web-app-asg-prod', region: 'us-east-1', current: 8, desired: 8, min: 4, max: 16, status: 'stable', cpu: 45, memory: 62 },
  { id: '2', name: 'api-gateway-asg', region: 'us-east-1', current: 6, desired: 8, min: 4, max: 12, status: 'scaling-up', cpu: 78, memory: 71 },
  { id: '3', name: 'worker-queue-asg', region: 'us-west-2', current: 10, desired: 8, min: 2, max: 20, status: 'scaling-down', cpu: 32, memory: 48 },
  { id: '4', name: 'db-replica-asg', region: 'us-west-2', current: 4, desired: 4, min: 2, max: 8, status: 'stable', cpu: 56, memory: 82 },
  { id: '5', name: 'cache-cluster-asg', region: 'eu-west-1', current: 6, desired: 6, min: 3, max: 12, status: 'stable', cpu: 41, memory: 55 },
  { id: '6', name: 'ml-inference-asg', region: 'eu-west-1', current: 3, desired: 4, min: 2, max: 10, status: 'scaling-up', cpu: 85, memory: 89 },
  { id: '7', name: 'analytics-asg', region: 'ap-northeast-1', current: 5, desired: 5, min: 2, max: 10, status: 'stable', cpu: 38, memory: 44 },
  { id: '8', name: 'cdn-origin-asg', region: 'ap-northeast-1', current: 4, desired: 4, min: 2, max: 8, status: 'stable', cpu: 52, memory: 58 },
];
