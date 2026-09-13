import React from 'react';
import { Award, Briefcase, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { useSiteData } from '../hooks/useSiteData';

export default function MainPlacementRecords({ onOpenConsultation }) {
  const { data } = useSiteData();
  const placements = data.placements || [];

  const companies = [
    'TCS', 'Infosys', 'Wipro', 'HCL Tech', 'Nagarro', 
    'PayTM', 'Zomato', 'Fractal', 'Optum', 'Tech Mahindra'
  ];

  return (
    <section className="py-16 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Placement Track Record</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Recent Alumni Placement Records
            </h3>
          </div>
          <button 
            onClick={onOpenConsultation}
            className="self-start md:self-auto px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-brand-600 dark:hover:bg-brand-500 text-white font-bold text-xs rounded-xl transition-colors shadow"
          >
            Apply for Next Placement Drive
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {placements.map((p, idx) => (
            <div 
              key={p.id || idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1.5 hover:scale-105 transition-transform shadow-sm"
            >
              <div className="text-sm font-black text-emerald-600 dark:text-emerald-400 font-mono">
                {p.package}
              </div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                {p.name}
              </h4>
              <p className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 truncate">
                {p.company}
              </p>
              <span className="text-[9px] text-slate-400 block truncate">
                {p.course}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-4">
            Alumni Hired Across 150+ Top Tech Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {companies.map((comp, cIdx) => (
              <span 
                key={cIdx} 
                className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
