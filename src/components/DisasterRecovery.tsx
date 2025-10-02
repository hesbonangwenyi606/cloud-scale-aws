import React, { useState } from 'react';

export const DisasterRecovery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'backups' | 'failover'>('backups');

  const backups = [
    { region: 'us-east-1', lastBackup: '2 hours ago', rpo: '1 hour', rto: '15 min', status: 'healthy' },
    { region: 'us-west-2', lastBackup: '1 hour ago', rpo: '1 hour', rto: '15 min', status: 'healthy' },
    { region: 'eu-west-1', lastBackup: '3 hours ago', rpo: '1 hour', rto: '20 min', status: 'warning' },
    { region: 'ap-northeast-1', lastBackup: '1 hour ago', rpo: '2 hours', rto: '30 min', status: 'healthy' },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Disaster Recovery Center</h2>
        
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('backups')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'backups' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            Backup Status
          </button>
          <button
            onClick={() => setActiveTab('failover')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'failover' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            Failover Plans
          </button>
        </div>

        {activeTab === 'backups' && (
          <div className="grid md:grid-cols-2 gap-6">
            {backups.map((backup, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold">{backup.region}</h3>
                  <div className={`w-3 h-3 rounded-full ${backup.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Backup</span>
                    <span className="text-white font-semibold">{backup.lastBackup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RPO</span>
                    <span className="text-orange-400 font-semibold">{backup.rpo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RTO</span>
                    <span className="text-orange-400 font-semibold">{backup.rto}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'failover' && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <p className="text-gray-300 mb-6">Automated failover procedures are configured for all critical services.</p>
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold text-white transition-colors">
              Initiate Manual Failover
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
