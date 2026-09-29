import React from 'react';
import { siteData } from '../data';
import { TechMarqueeTicker } from './TechLogos';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  Award
} from 'lucide-react';

// Authentic Hero Images (Main Classroom & Indian IT Mentorship/Dev Pods)
import heroMainImg from '../assets/Gallery/hero.png';
import heroTopRightImg from '../assets/hero/placement_assist.jpg';
import heroBottomLeftImg from '../assets/hero/software_dev.jpg';

export default function Hero({ onOpenConsultation, onNavigateServices, onNavigateTraining }) {
  const { hero } = siteData;

  return (
    <section id="hero" className="relative pt-2 pb-2 sm:pt-6 sm:pb-3 lg:pt-6 lg:pb-4 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-6 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-6 w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Main Grid: Left Copy & Right Multi-Image Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Heading, Value Props & CTAs */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-center lg:text-left">

            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-2.5">
              <h1 className="text-[23px] sm:text-3xl lg:text-[40px] xl:text-[46px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.14]">
                Empowering Businesses & Launching High-Growth{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary">
                  Tech Careers
                </span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Yukti Software delivers <span className="font-semibold text-slate-900 dark:text-white">custom enterprise software solutions</span> for modern organizations while providing <span className="font-semibold text-slate-900 dark:text-white">100% practical, live-project training</span> with guaranteed placement support for aspiring developers in Greater Noida & NCR.
              </p>
            </div>

            {/* Real-World Value Points */}
            <div className="space-y-2 sm:space-y-2.5 pt-0.5 text-left">
              <div className="flex items-start space-x-2.5 sm:space-x-3 justify-start">
                <div className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <strong className="text-slate-900 dark:text-white">Placement Assistance:</strong> Placement assistance & interview preparation provided after course completion.
                </p>
              </div>

              <div className="flex items-start space-x-2.5 sm:space-x-3 justify-start">
                <div className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <strong className="text-slate-900 dark:text-white">15+ Enterprise Deployments:</strong> Full Stack Web, Mobile Apps, Cloud Microservices & AI Integrations.
                </p>
              </div>

              <div className="flex items-start space-x-2.5 sm:space-x-3 justify-start">
                <div className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <strong className="text-slate-900 dark:text-white">On-Premise Interactive Labs:</strong> Alpha 1, Greater Noida with 1-on-1 industry mentorship.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20 whitespace-nowrap cursor-pointer"
              >
                <span className="whitespace-nowrap">Book Free Counselling / Demo</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={onNavigateTraining}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-slate-800 dark:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-brand-500 transition-all flex items-center justify-center space-x-2 shadow-sm whitespace-nowrap cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="whitespace-nowrap">Explore 16+ Career Tracks</span>
              </button>
            </div>

          </div>

          {/* Right Column: Multi-Image Realistic Photographic Composition */}
          <div className="lg:col-span-6 relative px-1 sm:px-4 py-4 sm:py-6">
            
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Ambient Aura */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-brand-600/20 via-accent-primary/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none"></div>

              {/* Main Center Image: Modern Coding Lab & Mentor Guidance */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 dark:border-slate-800 bg-slate-900 group">
                <img 
                  src={heroMainImg} 
                  alt="Yukti Software Live Coding Classroom and Mentorship Lab in Greater Noida"
                  className="w-full h-[220px] sm:h-[300px] lg:h-[320px] xl:h-[350px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  width="640"
                  height="350"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>
                
                {/* Overlay Text on Main Image */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between text-white">
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400">Live Lab Session</p>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white drop-shadow">Full Stack Microservices & AI Workstation</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-white border border-white/30">
                    Greater Noida
                  </span>
                </div>
              </div>

              {/* Floating Top-Right Secondary Photo: Placement / Internship */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-3 w-24 sm:w-36 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 group hover:scale-105 transition-transform duration-300">
                <img 
                  src={heroTopRightImg} 
                  alt="Placement Assistance and Mock Interviews at Yukti Software"
                  className="w-full h-14 sm:h-22 object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width="144"
                  height="88"
                />
                <div className="p-1 sm:p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-[8px] sm:text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-400">Placement Assist</p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 dark:text-slate-200">Mock Interviews</p>
                </div>
              </div>

              {/* Floating Bottom-Left Secondary Photo: Software Engineers Coding */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-3 w-28 sm:w-40 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 group hover:scale-105 transition-transform duration-300">
                <img 
                  src={heroBottomLeftImg} 
                  alt="Enterprise Software Engineering Team at Yukti Software"
                  className="w-full h-14 sm:h-22 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="88"
                />
                <div className="p-1 sm:p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-[8px] sm:text-[9px] font-black uppercase text-brand-600 dark:text-brand-400">Enterprise Core</p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 dark:text-slate-200">15+ Apps Delivered</p>
                </div>
              </div>

              {/* Floating Badge: Placement Record */}
              <div className="absolute top-1/2 -left-2 sm:-left-4 -translate-y-1/2 p-2 sm:p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl space-y-0.5 hidden md:block">
                <div className="flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Career Drives</span>
                </div>
                <p className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400">20+ Partners</p>
                <p className="text-[9px] font-medium text-slate-600 dark:text-slate-300">Active Hiring Network</p>
              </div>

              {/* Floating Badge: ISO Certification */}
              <div className="absolute bottom-6 -right-2 sm:-right-4 p-2 sm:p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl space-y-0.5 hidden md:block">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Quality Verified</span>
                </div>
                <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">ISO 9001:2015</p>
                <p className="text-[9px] font-medium text-emerald-600 dark:text-emerald-400">Certified Curriculum</p>
              </div>

            </div>

          </div>

        </div>

        {/* Continuous Tech Stack & Hiring Partner Marquee */}
        <div className="pt-2 sm:pt-3 border-t border-slate-200/80 dark:border-slate-800/80 mt-2 sm:mt-3">
          <TechMarqueeTicker title="Trusted by 15+ Enterprise Clients & Alumni Placed Across Leading Tech Giants" />
        </div>

      </div>
    </section>
  );
}
