import React from 'react';
import { siteData } from '../data';
import Icon from './Icon';
import { getHighlightLogo } from './TechLogos';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Award, Users, Code, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

function CounterMetric({ value, label, prefix = '', suffix = '', decimals = 0, isVisible }) {
  const count = useCountUp(value, 1800, isVisible, decimals);
  return (
    <div className="p-5 rounded-2xl bg-white/50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md text-center hover:scale-105 transition-transform duration-300">
      <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary bg-clip-text text-transparent">
        {prefix}{count}{suffix}
      </div>
      <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">{label}</p>
    </div>
  );
}

export default function StatsHighlights({ onOpenConsultation }) {
  const { highlightsSection, storySection } = siteData;
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Animated Key Metrics Banner */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <CounterMetric value={50} suffix="+" label="Software Solutions Delivered" isVisible={isInView} />
          <CounterMetric value={98.4} suffix="%" decimals={1} label="Student Placement Success" isVisible={isInView} />
          <CounterMetric value={15} suffix="+" label="Industry Career Tracks" isVisible={isInView} />
          <CounterMetric value={4.9} suffix="/5.0" decimals={1} label="Google Verified Rating" isVisible={isInView} />
        </div>

        {/* Key Highlights of Our Services */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
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
                style={{ transitionDelay: `${idx * 80}ms` }}
                className={`p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 card-hover-effect hover-shine group flex flex-col justify-between ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center p-2.5 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {getHighlightLogo(item.title, "w-7 h-7")}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">{item.tagline}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Banner: Decades of Building Tailored Software Solutions */}
        <div className="bg-gradient-to-r from-brand-600 via-brand-700 to-accent-primary rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden hover-shine">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {storySection.title}
              </h3>
              <div className="space-y-3 text-slate-100 text-sm sm:text-base leading-relaxed">
                {storySection.contentParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Photo Showcase Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-md group h-28 sm:h-36">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=70" 
                    alt="Engineering Development Hub at Yukti Software" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold text-white drop-shadow">
                    Core Engineering Hub
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-md group h-28 sm:h-36">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=70" 
                    alt="Placement & Career Induction at Yukti Software" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold text-white drop-shadow">
                    Student Career Induction
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-center space-y-4 w-full max-w-sm shadow-xl">
                <ShieldCheck className="w-10 h-10 text-white mx-auto" />
                <h4 className="text-lg font-bold text-white">Need Tailored Software or Training?</h4>
                <p className="text-xs text-slate-200">
                  Connect with our leadership team for custom architectures and customized curriculums.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-xl bg-white text-brand-700 font-bold text-sm hover:bg-slate-100 shadow-lg transition-transform hover:scale-105 active:scale-95"
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

