
import React from 'react';
import { Check, Zap } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Standard",
    price: "$297",
    features: [
      "Up to 3 AI Voice Agents",
      "Unlimited Inbound Calls",
      "SMS Automation",
      "Standard CRM Integration",
      "Email Support",
      "Basic Call Analytics"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$497",
    features: [
      "Up to 10 AI Voice Agents",
      "Advanced Objection Handling",
      "Custom Voice Cloning",
      "Priority CRM Sync (2-way)",
      "Live Transfer Capability",
      "Priority Support",
      "Sentiment Analysis"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Agency",
    price: "$997",
    features: [
      "Unlimited AI Agents",
      "White Label Dashboard",
      "Sub-Account Management",
      "API & Webhook Access",
      "Dedicated Account Manager",
      "Custom LLM Training",
      "Wholesale Usage Rates"
    ],
    cta: "Contact Sales"
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Pricing</h2>
          <p className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Simple, Transparent Pricing
          </p>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Choose the plan that fits your growth. Usage is billed separately based on connection minutes to ensure you only pay for performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 bg-white border transition-all duration-300 ${
                tier.popular 
                  ? 'border-blue-600 shadow-2xl scale-105 z-10 ring-1 ring-blue-600/20' 
                  : 'border-slate-200 shadow-lg hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 -mt-3 mr-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white uppercase tracking-wide shadow-lg shadow-blue-500/30">
                    <Zap size={12} className="mr-1 fill-current" /> Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="ml-1 text-slate-500">/month</span>}
                </div>
                <p className="mt-2 text-sm text-slate-500">+ usage fees</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="ml-3 text-sm text-slate-600">{feature}</p>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
