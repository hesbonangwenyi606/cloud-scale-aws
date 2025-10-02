import React from 'react';
import { ScalingGroup } from '../types/infrastructure';

interface Props {
  group: ScalingGroup;
}

export const ScalingGroupCard: React.FC<Props> = ({ group }) => {
  const statusConfig = {
    'scaling-up': { color: 'text-blue-400', bg: 'bg-blue-500/20', icon: '↑' },
    'scaling-down': { color: 'text-purple-400', bg: 'bg-purple-500/20', icon: '↓' },
    'stable': { color: 'text-green-400', bg: 'bg-green-500/20', icon: '=' }
  };

  const config = statusConfig[group.status];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white font-bold mb-1">{group.name}</h3>
          <p className="text-sm text-gray-400">{group.region}</p>
        </div>
        <div className={`${config.bg} ${config.color} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
          <span>{config.icon}</span>
          <span className="capitalize">{group.status.replace('-', ' ')}</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Current</p>
          <p className="text-xl font-bold text-white">{group.current}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Desired</p>
          <p className="text-xl font-bold text-orange-400">{group.desired}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Min</p>
          <p className="text-xl font-bold text-gray-500">{group.min}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Max</p>
          <p className="text-xl font-bold text-gray-500">{group.max}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">CPU Usage</span>
            <span className="text-white font-semibold">{group.cpu}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className={`h-2 rounded-full ${group.cpu > 70 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${group.cpu}%` }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Memory Usage</span>
            <span className="text-white font-semibold">{group.memory}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className={`h-2 rounded-full ${group.memory > 70 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${group.memory}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
