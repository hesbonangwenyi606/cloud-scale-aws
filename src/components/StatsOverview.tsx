import React from 'react';

export const StatsOverview: React.FC = () => {
  const stats = [
    { label: 'Total Instances', value: '156', change: '+12%', trend: 'up' },
    { label: 'Active Load Balancers', value: '18', change: '+3', trend: 'up' },
    { label: 'Lambda Invocations', value: '2.4M', change: '+18%', trend: 'up' },
    { label: 'Monthly Cost', value: '$12,450', change: '-8%', trend: 'down' },
    { label: 'Avg Response Time', value: '42ms', change: '-15%', trend: 'down' },
    { label: 'Uptime', value: '99.98%', change: '+0.02%', trend: 'up' },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Infrastructure Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trend === 'up' ? 'text-green-400' : 'text-blue-400'}`}>
                <span>{stat.trend === 'up' ? '↑' : '↓'}</span>
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
