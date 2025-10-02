import React, { useState } from 'react';
import { Template } from '../types/infrastructure';

interface Props {
  template: Template;
}

export const TemplateCard: React.FC<Props> = ({ template }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const typeConfig = {
    terraform: { color: 'text-purple-400', bg: 'bg-purple-500/20', icon: '⚡' },
    cloudformation: { color: 'text-orange-400', bg: 'bg-orange-500/20', icon: '☁️' }
  };

  const config = typeConfig[template.type];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <div className={`${config.bg} ${config.color} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
          <span>{config.icon}</span>
          <span className="capitalize">{template.type}</span>
        </div>
        <span className="text-xs text-gray-500 bg-gray-900/50 px-2 py-1 rounded">{template.category}</span>
      </div>

      <h3 className="text-white font-bold text-lg mb-2">{template.name}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{template.description}</p>

      <div className="flex items-center justify-between mb-4 text-sm">
        <div>
          <span className="text-gray-400">Resources: </span>
          <span className="text-white font-semibold">{template.resources}</span>
        </div>
        <div>
          <span className="text-gray-400">Updated: </span>
          <span className="text-white font-semibold">{template.lastUpdated}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button 
          onClick={handleCopy}
          className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm text-white font-semibold transition-colors"
        >
          {copied ? 'Copied!' : 'Copy Template'}
        </button>
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-white transition-colors">
          Preview
        </button>
      </div>
    </div>
  );
};
