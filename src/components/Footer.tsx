import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">CloudOps</h3>
            <p className="text-gray-400 text-sm">Enterprise cloud infrastructure management platform for AWS, powered by Terraform and CloudFormation.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Auto Scaling</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Load Balancing</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Disaster Recovery</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Cost Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 CloudOps. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
