import React from 'react';
import { Users, Award, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { useSiteData } from '../hooks/useSiteData';

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
  </svg>
);

export default function MainTeamV2() {
  const { data } = useSiteData();
  const team = data.team || [];
  const spotlight = team[0];
  const otherMembers = team.slice(1);

  return (
    <section id="team" className="py-20 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Executive Leadership V2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meet the Architects Behind Yukti
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Seasoned software architects and corporate mentors with over a decade of real industry delivery experience.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Spotlight Founder Card */}
          {spotlight && (
            <div className="lg:col-span-7 bg-gradient-to-br from-brand-900 via-slate-900 to-emerald-950 rounded-2xl p-8 text-white border border-brand-800/60 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-[11px] font-bold border border-brand-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Executive Spotlight</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {spotlight.name}
                </h3>
                <p className="text-brand-400 font-semibold text-sm">
                  {spotlight.role} • {spotlight.exp}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  {spotlight.bio}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-medium backdrop-blur-sm text-slate-200">
                    {spotlight.specialty}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                    5,000+ Engineers Mentored
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="text-xs text-slate-400">Guiding tech standards across all client projects</span>
                <a 
                  href={spotlight.linkedin || "https://linkedin.com"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-300 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          )}

          {/* Dynamic Members Grid */}
          {otherMembers.map((m, idx) => (
            <div 
              key={m.id || idx} 
              className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm ${
                idx === 0 ? 'lg:col-span-5' : 'lg:col-span-6'
              }`}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-600 text-white font-black text-lg flex items-center justify-center shadow">
                  {m.name ? m.name.split(' ').map(n=>n[0]).join('').slice(0,2) : 'YS'}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {m.name}
                </h3>
                <p className="text-xs font-bold text-brand-600 dark:text-brand-400">
                  {m.role} • {m.exp}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {m.bio}
                </p>
                <div className="pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold">
                    {m.specialty}
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Industry Mentor</span>
                <a href={m.linkedin || "https://linkedin.com"} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400">
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
