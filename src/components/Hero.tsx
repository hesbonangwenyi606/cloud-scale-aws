import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-6">
              Enterprise Cloud Infrastructure
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Multi-Region <span className="text-orange-500">AWS</span> Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Auto-scaling, load balancing, and disaster recovery across global regions. Monitor and manage your entire cloud infrastructure from a single dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                View Infrastructure
              </button>
              <button 
                onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-all"
              >
                Browse Templates
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-xl shadow-2xl bg-gradient-to-br from-blue-600 to-purple-700 p-8 flex items-center justify-center h-96">
              <div className="text-center">
                <div className="text-6xl mb-4">☁️</div>
                <p className="text-2xl font-bold">Cloud Infrastructure</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
