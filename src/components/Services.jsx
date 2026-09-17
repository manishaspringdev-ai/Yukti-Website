import React, { useState } from 'react';
import { siteData } from '../data';
import { getServiceLogo } from './TechLogos';
import { 
  ArrowRight, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Zap, 
  Users, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink 
} from 'lucide-react';

function getServiceImageDetails(serviceId) {
  const id = (serviceId || '').toLowerCase();
  
  if (id.includes('web')) {
    return {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      caption: 'Full-Stack Web, React & Node Engineering Workstation',
      badge: 'Modern Web Stack'
    };
  }
  if (id.includes('mobile')) {
    return {
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      caption: 'Cross-Platform Flutter & Native iOS/Android App Testing',
      badge: 'iOS & Android'
    };
  }
  if (id.includes('database') || id.includes('data')) {
    return {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      caption: 'High-Throughput SQL/NoSQL & End-to-End Encryption',
      badge: 'Data Security'
    };
  }
  if (id.includes('cloud')) {
    return {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      caption: 'AWS, Azure & GCP Cloud Infrastructure & Migration',
      badge: '99.99% Uptime'
    };
  }
  if (id.includes('devops') || id.includes('ci')) {
    return {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      caption: 'Automated CI/CD Pipelines & Kubernetes Deployment',
      badge: 'Continuous Delivery'
    };
  }

  return {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    caption: 'Full-Stack Web & Next.js Architecture Lab',
    badge: 'Enterprise Grade'
  };
}

export default function Services({ onOpenConsultation }) {
  const { servicesSection } = siteData;
  const [activeService, setActiveService] = useState(servicesSection.services[0].id);

  const selectedService = servicesSection.services.find(s => s.id === activeService) || servicesSection.services[0];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/40">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            {servicesSection.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {servicesSection.description}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW (< lg): Horizontal Tab Selector + In-Place Accordions */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-4">
          
          {/* Quick Filter Horizontal Scroll Pill Bar */}
          <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {servicesSection.services.map((service) => {
              const isActive = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 border ${
                    isActive
                      ? 'bg-brand-600 text-white border-brand-600 shadow-md scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="w-4 h-4 shrink-0">
                    {getServiceLogo(service.id, "w-4 h-4")}
                  </div>
                  <span className="whitespace-nowrap">{service.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion Cards Stack for Mobile */}
          <div className="space-y-3 pt-2">
            {servicesSection.services.map((service) => {
              const isOpen = activeService === service.id;
              return (
                <div
                  key={service.id}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? 'bg-white dark:bg-slate-900 border-brand-500 shadow-xl shadow-brand-500/10'
                      : 'bg-white/70 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800/80'
                  }`}
                >
                  <button
                    onClick={() => setActiveService(isOpen ? null : service.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="w-11 h-11 p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center shrink-0">
                        {getServiceLogo(service.id, "w-7 h-7")}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider block">
                          {service.tag}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          {service.shortTitle}
                        </h3>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen 
                        ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 rotate-180' 
                        : 'text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded Mobile Body */}
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-fadeIn">
                      {/* Realistic Service Specific Photo on Mobile */}
                      {(() => {
                        const img = getServiceImageDetails(service.id);
                        return (
                          <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 h-40 group mt-3">
                            <img 
                              src={img.url} 
                              alt={img.caption} 
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                              <div className="flex items-center space-x-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                <p className="text-[11px] font-bold text-white drop-shadow truncate">{img.caption}</p>
                              </div>
                              <span className="px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md text-[9px] font-extrabold uppercase text-white border border-white/30 shrink-0">
                                {img.badge}
                              </span>
                            </div>
                          </div>
                        );
                      })()}

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-2 pt-1">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Key Deliverables & Specifications
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.highlights.map((h, idx) => (
                            <div key={idx} className="flex items-start space-x-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-xs font-medium text-slate-700 dark:text-slate-200 leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          ✓ Custom SLA • 60-Day Post Launch Support
                        </span>
                        <button
                          onClick={onOpenConsultation}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-primary text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                        >
                          <span>Request Free Estimate</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (>= lg): Split Interactive Navigation & Detailed Stage */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start animate-fadeIn">
          
          {/* Left Service Menu */}
          <div className="lg:col-span-5 space-y-3">
            {servicesSection.services.map((service) => {
              const isActive = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                    isActive
                      ? 'bg-white dark:bg-slate-800/90 border-brand-500 shadow-xl shadow-brand-500/10 scale-[1.01]'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-13 h-13 p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {getServiceLogo(service.id, "w-8 h-8")}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider block">{service.tag}</span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{service.shortTitle}</h3>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-brand-600 dark:text-brand-400 translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Selected Detail Pane */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl space-y-6">
              <div className="flex items-center space-x-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-14 h-14 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-md">
                  {getServiceLogo(selectedService.id, "w-9 h-9")}
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest">{selectedService.tag}</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{selectedService.title}</h3>
                </div>
              </div>

              {/* Realistic Photo Banner for Selected Service */}
              {(() => {
                const img = getServiceImageDetails(selectedService.id);
                return (
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group h-48 sm:h-56">
                    <img 
                      src={img.url} 
                      alt={img.caption} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <p className="text-xs font-bold text-white drop-shadow">{img.caption}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-white/20 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/30">
                        {img.badge}
                      </span>
                    </div>
                  </div>
                );
              })()}

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">{selectedService.description}</p>
              
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables & Specifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedService.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Trust Strip */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">ISO 9001:2015 QA Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>2-Week Agile Sprints</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>60-Day Post-Launch SLA</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs text-slate-400">Tailored to your business scale (Startup to Enterprise)</span>
                <button onClick={onOpenConsultation} className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary text-white font-bold text-xs flex items-center space-x-2 shadow-lg hover:scale-105 active:scale-95 transition-all">
                  <span>Schedule Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

