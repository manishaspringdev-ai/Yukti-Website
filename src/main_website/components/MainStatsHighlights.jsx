import React from 'react';
import { Award, Users, CheckCircle, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function MainStatsHighlights() {
  const stats = [
    { label: 'Uptime & Cloud SLA', value: '99.98%', desc: 'Fault-tolerant distributed microservices', icon: Zap },
    { label: 'Engineers Placed', value: '1,500+', desc: 'In top product firms & global MNCs', icon: Users },
    { label: 'Enterprise Projects', value: '85+', desc: 'Delivered across US, UK & India', icon: Globe },
    { label: 'Average CTC Hike', value: '145%', desc: 'Verified career transformation rate', icon: Award }
  ];

  return (
    <section className="py-14 bg-gradient-to-r from-brand-900 via-slate-900 to-emerald-950 text-white border-y border-brand-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="text-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="inline-flex p-2 rounded-lg bg-brand-500/20 text-brand-300 mb-1">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-brand-300">
                  {s.label}
                </div>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
