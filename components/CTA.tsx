
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to revolutionize your sales process?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join hundreds of high-growth teams using DialerWare to automate outreach and book more meetings.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            Get Started Now
            <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-transparent border border-slate-600 hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center">
            Talk to Sales
          </button>
        </div>
        
        <p className="mt-6 text-sm text-slate-500">
          No credit card required for trial • Cancel anytime • GDPR Compliant
        </p>
      </div>
    </section>
  );
};
