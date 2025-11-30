
import React from 'react';
import { Phone, PlayCircle, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
         <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
         <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-3xl opacity-60"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-blue-600 text-sm font-semibold mb-8 border border-blue-100 shadow-sm">
          <Zap size={16} className="mr-2 fill-current" />
          Enterprise-Grade AI Voice Automation
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Your Sales Team, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
            Supercharged by AI.
          </span>
        </h1>
        
        <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
          DialerWare provides the infrastructure for high-velocity sales. 
          Leverage our private network of AI voice agents to automate outreach, qualify leads, and book meetings at scale.
        </p>
        
        <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
          <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            <Phone size={20} />
            Start Free Trial
          </button>
          <button className="px-8 py-4 rounded-xl bg-white text-slate-700 border border-slate-200 font-bold text-lg hover:bg-slate-50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-sm">
            <PlayCircle size={20} />
            See How It Works
          </button>
        </div>

        {/* New Visual Picture: Tilted Dashboard */}
        <div className="mt-20 relative mx-auto max-w-6xl perspective-1000">
            <div className="relative transform rotate-x-12 scale-95 transition-transform duration-700 hover:rotate-x-0 hover:scale-100 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl border border-slate-200/60 bg-white shadow-2xl overflow-hidden">
                    <div className="bg-slate-100/50 border-b border-slate-200 p-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                      alt="DialerWare Analytics Dashboard" 
                      className="w-full h-auto object-cover opacity-95"
                    />
                    {/* Floating UI Elements for depth */}
                    <div className="absolute top-1/4 right-10 bg-white p-4 rounded-lg shadow-xl border border-slate-100 animate-pulse-slow hidden md:block">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-semibold text-slate-700">AI Agent Active</span>
                        </div>
                        <div className="mt-2 text-2xl font-bold text-blue-600">1,240 Calls/hr</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-x-12 {
          transform: rotateX(20deg);
        }
        .hover\\:rotate-x-0:hover {
          transform: rotateX(0deg);
        }
      `}</style>
    </section>
  );
};
