
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-6 text-slate-500 text-sm leading-relaxed">
              DialerWare provides enterprise-grade AI telephony solutions. 
              We empower sales teams with the same advanced automation technology used by industry leaders.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Predictive Dialer</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">AI Voice Agents</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Conversation Intelligence</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">CRM Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Acceptable Use Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} DialerWare. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-slate-100 rounded-full hover:bg-blue-100 transition-colors flex items-center justify-center cursor-pointer">
                <span className="sr-only">Twitter</span>
                <div className="w-4 h-4 bg-slate-300 rounded-sm"></div>
             </div>
             <div className="w-8 h-8 bg-slate-100 rounded-full hover:bg-blue-100 transition-colors flex items-center justify-center cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                 <div className="w-4 h-4 bg-slate-300 rounded-sm"></div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
