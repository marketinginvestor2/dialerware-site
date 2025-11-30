
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "DialerWare transformed our SDR team's workflow. The connection rates are unmatched, and the AI handles the mundane tasks so my team can focus on closing.",
    author: "Sarah Jenkins",
    role: "VP of Sales, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "We were skeptical about AI voice agents, but the quality is indistinguishable from human callers. Our lead qualification velocity increased by 400% in month one.",
    author: "Michael Chen",
    role: "Director of Outreach, ScaleUp Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The private label option allowed us to offer this technology to our own clients under our brand. It's been a massive revenue driver for our agency.",
    author: "David Rodriguez",
    role: "Founder, GrowthPartners",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Success Stories</h2>
          <p className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted by High-Velocity Sales Teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
