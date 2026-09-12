import React from 'react';
import { siteData } from '../data';
import Icon from './Icon';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function StatsHighlights({ onOpenConsultation }) {
  const { highlightsSection, storySection } = siteData;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Key Highlights of Our Services */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 border border-brand-200 text-brand-700 dark:bg-brand-950/70 dark:border-brand-800 dark:text-brand-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{highlightsSection.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {highlightsSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              {highlightsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightsSection.highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={item.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Banner: Decades of Building Tailored Software Solutions */}
        <div className="bg-gradient-to-r from-brand-600 via-brand-700 to-accent-primary rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{storySection.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {storySection.title}
              </h3>
              <div className="space-y-4 text-slate-100 text-sm sm:text-base leading-relaxed">
                {storySection.contentParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-center space-y-4 w-full max-w-sm">
                <ShieldCheck className="w-10 h-10 text-white mx-auto" />
                <h4 className="text-lg font-bold text-white">Need Tailored Software or Training?</h4>
                <p className="text-xs text-slate-200">
                  Connect with our leadership team for custom architectures and customized curriculums.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-xl bg-white text-brand-700 font-bold text-sm hover:bg-slate-100 shadow-lg transition-transform hover:scale-105"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
