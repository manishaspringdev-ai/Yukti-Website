import React, { useState } from 'react';
import { siteData } from '../data';
import { TechMarqueeTicker } from './TechLogos';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  GraduationCap, 
  Building2, 
  TrendingUp, 
  Users, 
  Award, 
  MapPin, 
  Briefcase, 
  Laptop, 
  Play, 
  Check,
  Zap,
  PhoneCall
} from 'lucide-react';

export default function Hero({ onOpenConsultation, onNavigateServices, onNavigateTraining }) {
  const { hero } = siteData;
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'services', 'training'

  return (
    <section id="hero" className="relative pt-6 pb-6 sm:pt-8 sm:pb-8 lg:py-6 xl:py-8 lg:min-h-[calc(100vh-70px)] lg:flex lg:flex-col lg:justify-between overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-6 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-6 w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Main Grid: Left Copy & Right Multi-Image Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Heading, Value Props & CTAs */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-center lg:text-left">

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-2.5">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[46px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.14]">
                Empowering Businesses & Launching High-Growth{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary">
                  Tech Careers
                </span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Yukti Software delivers <span className="font-semibold text-slate-900 dark:text-white">custom enterprise software solutions</span> for modern organizations while providing <span className="font-semibold text-slate-900 dark:text-white">100% practical, live-project training</span> with guaranteed placement support for aspiring developers in Greater Noida & NCR.
              </p>
            </div>

            {/* Interactive Domain Filter Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTab === 'all'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-400'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>All Capabilities</span>
              </button>
              
              <button
                onClick={() => setActiveTab('training')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTab === 'training'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-emerald-400'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
                <span>Courses & Placements</span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTab === 'services'
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-brand-400'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-brand-500" />
                <span>Software Services</span>
              </button>
            </div>

            {/* Dynamic Real-World Value Points */}
            <div className="space-y-2 pt-1 text-left">
              {(activeTab === 'all' || activeTab === 'training') && (
                <div className="flex items-start space-x-2.5 sm:space-x-3 justify-start">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                    <strong className="text-slate-900 dark:text-white">94% Placement Success:</strong> Highest package ₹24.0 LPA • 45+ hiring partners including TCS, Infosys, Cognizant.
                  </p>
                </div>
              )}

              {(activeTab === 'all' || activeTab === 'services') && (
                <div className="flex items-start space-x-2.5 sm:space-x-3 justify-start">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                    <strong className="text-slate-900 dark:text-white">50+ Enterprise Deployments:</strong> Full Stack Web, Mobile Apps, Cloud Microservices & AI Integrations.
                  </p>
                </div>
              )}

              <div className="flex items-start space-x-2.5 sm:space-x-3 justify-start">
                <div className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <strong className="text-slate-900 dark:text-white">On-Premise Interactive Labs:</strong> Knowledge Park III, Greater Noida with 1-on-1 industry mentorship.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20"
              >
                <span>Book Free Career / Project Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateTraining}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-slate-800 dark:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-brand-500 transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-brand-500" />
                <span>Explore 15+ Career Tracks</span>
              </button>
            </div>

            {/* Social Proof & Avatar Stack */}
            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2.5">
                <img 
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=72&q=70" 
                  alt="Placed Student Alumni" 
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                />
                <img 
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=72&q=70" 
                  alt="Placed Student Alumni" 
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                />
                <img 
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=72&q=70" 
                  alt="Placed Student Alumni" 
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                />
                <img 
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=72&q=70" 
                  alt="Placed Student Alumni" 
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white dark:ring-slate-900 bg-brand-600 text-white font-extrabold text-[10px] sm:text-[11px]">
                  +1.5k
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-900 dark:text-white pl-1">4.9 / 5.0</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Verified Google Reviews • 1,500+ Placed Students
                </p>
              </div>
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
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=640&q=75" 
                  alt="Yukti Software Live Coding Classroom and Mentorship Lab in Greater Noida"
                  className="w-full h-[220px] sm:h-[300px] lg:h-[320px] xl:h-[350px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
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
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400">Live Lab Session</p>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white drop-shadow">Full Stack Microservices & AI Workstation</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-white border border-white/30">
                    Greater Noida
                  </span>
                </div>
              </div>

              {/* Floating Top-Right Secondary Photo: Placement Celebration */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-3 w-24 sm:w-36 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 group hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=280&q=70" 
                  alt="Student Placement Drive and Offer Letters at Yukti Software"
                  className="w-full h-14 sm:h-22 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="144"
                  height="88"
                />
                <div className="p-1 sm:p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-[8px] sm:text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-400">Placement Drive</p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 dark:text-slate-200">Offer Handover</p>
                </div>
              </div>

              {/* Floating Bottom-Left Secondary Photo: Software Engineers Coding */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-3 w-28 sm:w-40 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 group hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=280&q=70" 
                  alt="Enterprise Software Engineering Team at Yukti Software"
                  className="w-full h-14 sm:h-22 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="88"
                />
                <div className="p-1 sm:p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-[8px] sm:text-[9px] font-black uppercase text-brand-600 dark:text-brand-400">Enterprise Core</p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 dark:text-slate-200">50+ Apps Delivered</p>
                </div>
              </div>

              {/* Floating Badge: Package Record */}
              <div className="absolute top-1/2 -left-2 sm:-left-4 -translate-y-1/2 p-2 sm:p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl space-y-0.5 hidden md:block">
                <div className="flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Top Package</span>
                </div>
                <p className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400">₹24.0 LPA</p>
                <p className="text-[9px] font-medium text-slate-600 dark:text-slate-300">Tier-1 MNC Placement</p>
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
        <div className="pt-4 sm:pt-6 border-t border-slate-200/80 dark:border-slate-800/80 mt-4 sm:mt-6">
          <TechMarqueeTicker title="Trusted by 50+ Enterprise Clients & Alumni Placed Across Leading Tech Giants" />
        </div>

      </div>
    </section>
  );
}
