
import React from 'react';
import { Mic, BarChart3, Users, Clock, ShieldCheck, Globe } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Conversational AI Agents",
    description: "Deploy hyper-realistic voice bots that navigate complex conversations, handle objections, and qualify leads without human intervention.",
    icon: <Mic className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Predictive Intelligence",
    description: "Our proprietary algorithm eliminates downtime by filtering voicemails and busy signals, ensuring your agents only speak to live prospects.",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Real-Time Telemetry",
    description: "Gain granular visibility into campaign performance. Track sentiment analysis, conversion rates, and agent efficiency in real-time.",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Seamless CRM Sync",
    description: "Two-way synchronization with Salesforce, HubSpot, and others ensures your pipeline data remains pristine and actionable.",
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Compliance Core",
    description: "Enterprise-grade security with automated DNC scrubbing and TCPA compliance protocols built directly into the dialing infrastructure.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Local Presence Global",
    description: "Dynamic caller ID adaptation across 50+ countries increases answer rates by up to 40% by establishing local trust.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Platform Capabilities</h2>
          <p className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            The Engine Behind High-Growth Sales Teams
          </p>
          <p className="mt-4 text-xl text-slate-500">
            DialerWare delivers the same robust technology infrastructure used by industry giants, private-labeled for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-2xl p-8 hover:bg-white transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-xl group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
