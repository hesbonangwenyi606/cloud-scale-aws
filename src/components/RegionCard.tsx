import React from 'react';
import { Region } from '../types/infrastructure';

interface Props {
  region: Region;
  onClick: () => void;
}

export const RegionCard: React.FC<Props> = ({ region, onClick }) => {
  const statusColors = {
    healthy: 'bg-green-500',
    warning: 'bg-yellow-500',
    critical: 'bg-red-500'
  };

  const statusBorders = {
    healthy: 'border-green-500/30',
    warning: 'border-yellow-500/30',
    critical: 'border-red-500/30'
  };

  return (
    <div 
      onClick={onClick}
      className={`bg-gray-800 border ${statusBorders[region.status]} rounded-xl p-6 hover:bg-gray-750 transition-all cursor-pointer hover:scale-105 hover:shadow-xl`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{region.name}</h3>
          <p className="text-sm text-gray-400">{region.code}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${statusColors[region.status]} rounded-full animate-pulse`}></div>
          <span className="text-xs text-gray-400 capitalize">{region.status}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-900/50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">EC2 Instances</p>
          <p className="text-2xl font-bold text-white">{region.instances}</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Load Balancers</p>
          <p className="text-2xl font-bold text-white">{region.loadBalancers}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div>
          <p className="text-gray-400">Lambda Functions</p>
          <p className="text-white font-semibold">{region.lambdaFunctions}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400">Latency</p>
          <p className="text-orange-400 font-semibold">{region.latency}ms</p>
        </div>
      </div>
    </div>
  );
};
