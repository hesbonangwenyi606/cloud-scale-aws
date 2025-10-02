import React from 'react';
import { LoadBalancer } from '../types/infrastructure';

interface Props {
  lb: LoadBalancer;
}

export const LoadBalancerCard: React.FC<Props> = ({ lb }) => {
  const statusConfig = {
    active: { color: 'text-green-400', bg: 'bg-green-500/20', dot: 'bg-green-500' },
    degraded: { color: 'text-yellow-400', bg: 'bg-yellow-500/20', dot: 'bg-yellow-500' },
    inactive: { color: 'text-red-400', bg: 'bg-red-500/20', dot: 'bg-red-500' }
  };

  const config = statusConfig[lb.status];
  const healthPercent = Math.round((lb.healthyTargets / lb.targets) * 100);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white font-bold mb-1">{lb.name}</h3>
          <p className="text-sm text-gray-400">{lb.region}</p>
        </div>
        <div className={`${config.bg} ${config.color} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2`}>
          <div className={`w-2 h-2 ${config.dot} rounded-full animate-pulse`}></div>
          <span className="capitalize">{lb.status}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-900/50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Healthy Targets</p>
          <p className="text-2xl font-bold text-white">{lb.healthyTargets}/{lb.targets}</p>
          <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
            <div className="h-1.5 bg-green-500 rounded-full" style={{ width: `${healthPercent}%` }}></div>
          </div>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Requests/min</p>
          <p className="text-2xl font-bold text-orange-400">{lb.requestsPerMin.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
        <div>
          <p className="text-xs text-gray-400">Avg Latency</p>
          <p className="text-lg font-semibold text-white">{lb.latency}ms</p>
        </div>
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-white transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};
