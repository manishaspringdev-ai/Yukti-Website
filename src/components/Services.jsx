import React, { useState } from 'react';
import { siteData } from '../data';
import { getServiceLogo } from './TechLogos';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown 
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
    <section id="services" className="pt-3 sm:pt-4 md:pt-6 pb-6 sm:pb-8 md:pb-10 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/40">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            {servicesSection.title}
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW (< lg): Horizontal Tab Selector + In-Place Accordions */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-4">
          

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
                              <div className="flex items-center">
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
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
          
          {/* Left Service Menu */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 h-full">
            {servicesSection.services.map((service) => {
              const isActive = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full flex-1 text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                    isActive
                      ? 'bg-white dark:bg-slate-800/90 border-brand-500 shadow-xl shadow-brand-500/10 scale-[1.01]'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                      {getServiceLogo(service.id, "w-6 h-6")}
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider block">{service.tag}</span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{service.shortTitle}</h3>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-brand-600 dark:text-brand-400 translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Selected Detail Pane */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-12 h-12 p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-md shrink-0">
                    {getServiceLogo(selectedService.id, "w-7 h-7")}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest">{selectedService.tag}</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{selectedService.title}</h3>
                  </div>
                </div>

                {/* Realistic Photo Banner for Selected Service */}
                {(() => {
                  const img = getServiceImageDetails(selectedService.id);
                  return (
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group h-40 sm:h-44 mt-4">
                      <img 
                        src={img.url} 
                        alt={img.caption} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <div className="flex items-center">
                          <p className="text-xs font-bold text-white drop-shadow">{img.caption}</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-xl bg-white/20 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/30">
                          {img.badge}
                        </span>
                      </div>
                    </div>
                  );
                })()}

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-4">{selectedService.description}</p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4">
                <span className="text-xs text-slate-500 dark:text-slate-400">Tailored to your business scale (Startup to Enterprise)</span>
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

