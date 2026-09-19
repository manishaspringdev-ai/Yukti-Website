import React from 'react';
import { siteData } from '../data';
import Icon from './Icon';
import { getHighlightLogo } from './TechLogos';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Award, Users, Code, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function StatsHighlights({ onOpenConsultation }) {
  const { highlightsSection, storySection } = siteData;
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="pt-2 sm:pt-4 pb-8 sm:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Key Highlights of Our Services */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {highlightsSection.title}
            </h2>
            {highlightsSection.subtitle && (
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {highlightsSection.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {highlightsSection.highlights.map((item, idx) => (
              <div 
                key={idx}
                style={{ transitionDelay: `${idx * 60}ms` }}
                className={`p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 card-hover-effect hover-shine group flex items-center space-x-4 shadow-sm ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center p-2.5 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {getHighlightLogo(item.title, "w-6 h-6")}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Story Banner: Decades of Building Tailored Software Solutions */}
        <div className="bg-gradient-to-r from-brand-600 via-brand-700 to-accent-primary rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden hover-shine">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Content (Title & Paragraphs) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {storySection.title}
              </h3>
              <div className="space-y-3 text-slate-100 text-sm sm:text-base leading-relaxed">
                {storySection.contentParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Side Showcase (One Genuine Side Image + CTA) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {/* Relevant Side Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/20 h-48 sm:h-52 group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Yukti Software Tailored Solutions Engineering Team" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold shadow border border-white/30">
                    Yukti Engineering & Innovation Hub
                  </span>
                </div>
              </div>

              {/* Consultation Glass Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-2xl text-center space-y-2.5 shadow-xl">
                <div className="flex items-center justify-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold text-white">Need Tailored Software or Training?</h4>
                </div>
                <p className="text-xs text-slate-200">
                  Connect with our leadership team for custom architectures and customized curriculums.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-brand-700 font-bold text-xs sm:text-sm hover:bg-slate-100 shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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

