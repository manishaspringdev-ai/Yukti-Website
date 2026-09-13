import React from 'react';
import { siteData } from '../data';
import Icon from './Icon';
import { Sparkles, Target, Eye, Quote, CheckCircle2 } from 'lucide-react';

export default function MissionVision() {
  const { aboutPageData } = siteData;

  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Main Header Narrative */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
            <span className="font-medium">{aboutPageData.hero.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {aboutPageData.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {aboutPageData.hero.story}
          </p>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed bg-brand-50/50 dark:bg-brand-950/30 p-6 rounded-2xl border border-brand-100 dark:border-brand-900/50">
            {aboutPageData.hero.trainingMission}
          </p>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {aboutPageData.mission.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {aboutPageData.mission.description}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cyan/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shadow">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {aboutPageData.vision.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {aboutPageData.vision.description}
              </p>
            </div>
          </div>

        </div>

        {/* Message from Our Founder */}
        <div className="bg-gradient-to-br from-indigo-900 via-brand-950 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <Quote className="absolute -bottom-10 -right-10 w-52 h-52 text-white/5 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-300 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{aboutPageData.founderMessage.title}</span>
            </div>
            
            <p className="text-xl sm:text-2xl font-medium text-slate-100 italic leading-relaxed">
              "{aboutPageData.founderMessage.quote}"
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-500 to-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-md">
                MK
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {aboutPageData.founderMessage.author}
                </h4>
                <p className="text-xs text-brand-300">
                  {aboutPageData.founderMessage.position}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
