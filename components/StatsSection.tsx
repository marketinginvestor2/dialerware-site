
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { StatData } from '../types';

const callVolumeData: StatData[] = [
  { name: 'Mon', Traditional: 40, DialerWare: 140 },
  { name: 'Tue', Traditional: 45, DialerWare: 165 },
  { name: 'Wed', Traditional: 35, DialerWare: 155 },
  { name: 'Thu', Traditional: 50, DialerWare: 180 },
  { name: 'Fri', Traditional: 42, DialerWare: 160 },
];

const connectionRateData = [
  { name: 'Week 1', Traditional: 5, DialerWare: 12 },
  { name: 'Week 2', Traditional: 6, DialerWare: 19 },
  { name: 'Week 3', Traditional: 5, DialerWare: 28 },
  { name: 'Week 4', Traditional: 7, DialerWare: 35 },
];

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
              Proven Performance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Outpace the competition by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">300%</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Manual dialing is obsolete. DialerWare's AI-driven orchestration removes the friction from sales outreach, allowing your team to focus solely on closing deals.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg mt-1 shadow-lg shadow-blue-500/30">1</div>
                <div className="ml-5">
                  <h4 className="text-xl font-semibold text-white">Maximize Daily Output</h4>
                  <p className="text-slate-400 mt-2">Skyrocket from 40 to 150+ effective conversations per agent, per day. Our predictive engine ensures zero idle time.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-bold text-lg mt-1 shadow-lg shadow-cyan-500/30">2</div>
                <div className="ml-5">
                  <h4 className="text-xl font-semibold text-white">Superior Connection Rates</h4>
                  <p className="text-slate-400 mt-2">Intelligent routing and local presence dialing drastically improve pick-up rates compared to standard VoIP solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Chart 1: Call Volume */}
            <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Daily Interactions per Agent</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={callVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1E293B', borderRadius: '8px', border: '1px solid #334155', color: '#F8FAFC' }}
                      cursor={{fill: '#334155', opacity: 0.4}}
                    />
                    <Legend />
                    <Bar dataKey="Traditional" fill="#475569" radius={[4, 4, 0, 0]} name="Manual Dialing" />
                    <Bar dataKey="DialerWare" fill="#2563EB" radius={[4, 4, 0, 0]} name="DialerWare AI" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Connection Rate Growth */}
            <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Connection Rate Velocity (%)</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={connectionRateData}>
                     <defs>
                      <linearGradient id="colorDialer" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1E293B', borderRadius: '8px', border: '1px solid #334155', color: '#F8FAFC' }}
                    />
                    <Area type="monotone" dataKey="DialerWare" stroke="#06B6D4" strokeWidth={3} fillOpacity={1} fill="url(#colorDialer)" name="DialerWare" />
                    <Area type="monotone" dataKey="Traditional" stroke="#475569" strokeWidth={2} strokeDasharray="5 5" fill="transparent" name="Industry Avg" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
