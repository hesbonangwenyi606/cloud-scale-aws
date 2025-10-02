import React, { useState } from 'react';
import { Hero } from './Hero';
import { StatsOverview } from './StatsOverview';
import { RegionCard } from './RegionCard';
import { ScalingGroupCard } from './ScalingGroupCard';
import { LoadBalancerCard } from './LoadBalancerCard';
import { TemplateCard } from './TemplateCard';
import { DisasterRecovery } from './DisasterRecovery';
import { Footer } from './Footer';
import { regions, scalingGroups } from '../data/infrastructureData';
import { loadBalancers, templates } from '../data/loadBalancersData';

const AppLayout: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [templateFilter, setTemplateFilter] = useState<string>('all');

  const filteredTemplates = templateFilter === 'all' 
    ? templates 
    : templates.filter(t => t.type === templateFilter);

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <StatsOverview />
      
      {/* Regions Section */}
      <section id="regions" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Multi-Region Infrastructure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map(region => (
              <RegionCard 
                key={region.id} 
                region={region} 
                onClick={() => setSelectedRegion(region.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Auto-Scaling Groups */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Auto-Scaling Groups</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scalingGroups.map(group => (
              <ScalingGroupCard key={group.id} group={group} />
            ))}
          </div>
        </div>
      </section>

      {/* Load Balancers */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Load Balancers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadBalancers.map(lb => (
              <LoadBalancerCard key={lb.id} lb={lb} />
            ))}
          </div>
        </div>
      </section>

      {/* Disaster Recovery */}
      <DisasterRecovery />

      {/* Templates Library */}
      <section id="templates" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">Infrastructure Templates</h2>
            <div className="flex gap-2">
              <button onClick={() => setTemplateFilter('all')} className={`px-4 py-2 rounded-lg font-semibold transition-all ${templateFilter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>All</button>
              <button onClick={() => setTemplateFilter('terraform')} className={`px-4 py-2 rounded-lg font-semibold transition-all ${templateFilter === 'terraform' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Terraform</button>
              <button onClick={() => setTemplateFilter('cloudformation')} className={`px-4 py-2 rounded-lg font-semibold transition-all ${templateFilter === 'cloudformation' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>CloudFormation</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppLayout;
