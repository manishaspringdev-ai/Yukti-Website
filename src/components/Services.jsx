import React, { useState } from 'react';
import { siteData } from '../data';
import { useCustomizer } from '../context/CustomizerContext';
import VariantSwitcherBar from './VariantSwitcherBar';
import Icon from './Icon';
import { getServiceLogo } from './TechLogos';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  Zap,
  Cpu,
  Layers
} from 'lucide-react';

export default function Services({ onOpenConsultation }) {
  const { servicesSection } = siteData;
  const { servicesVariant, setServicesVariant, SERVICES_VARIANTS } = useCustomizer();
  const [activeService, setActiveService] = useState(servicesSection.services[0].id);
  const [openAccordion, setOpenAccordion] = useState(servicesSection.services[0].id);

  const selectedService = servicesSection.services.find(s => s.id === activeService) || servicesSection.services[0];

  return (
    <section id="services" className="py-12 sm:py-16 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
            <span className="font-medium">{servicesSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {servicesSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {servicesSection.description}
          </p>
        </div>

        {/* 10-Variant Switcher Bar */}
        <VariantSwitcherBar
          currentVariant={servicesVariant}
          setVariant={setServicesVariant}
          variants={SERVICES_VARIANTS}
          label="Services Layout"
        />

        {/* ========================================================================= */}
        {/* V1: INTERACTIVE DEEP TABS */}
        {/* ========================================================================= */}
        {servicesVariant === 'v1_tabs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            <div className="lg:col-span-5 space-y-3">
              {servicesSection.services.map((service) => {
                const isActive = activeService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
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
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{service.shortTitle}</h3>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-brand-600 dark:text-brand-400 translate-x-1' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="flex items-center space-x-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-14 h-14 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-md">
                    {getServiceLogo(selectedService.id, "w-9 h-9")}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest">{selectedService.tag}</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{selectedService.title}</h3>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{selectedService.description}</p>
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-400">Tailored to your business scale</span>
                  <button onClick={onOpenConsultation} className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs flex items-center space-x-1.5 shadow">
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V2: 3D GLASS GRID */}
        {/* ========================================================================= */}
        {servicesVariant === 'v2_3dGrid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {servicesSection.services.map((service) => (
              <div key={service.id} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-7 shadow-sm hover:shadow-2xl hover:border-brand-500/50 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {getServiceLogo(service.id, "w-9 h-9")}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">{service.tag}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">{service.shortTitle}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
                </div>
                <button onClick={onOpenConsultation} className="w-full mt-6 py-2.5 px-4 rounded-xl text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-100 transition-colors flex items-center justify-center space-x-1.5">
                  <span>Request Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V3: ARCHITECTURE ACCORDION */}
        {/* ========================================================================= */}
        {servicesVariant === 'v3_accordion' && (
          <div className="max-w-4xl mx-auto space-y-4 animate-fadeIn">
            {servicesSection.services.map((service) => {
              const isOpen = openAccordion === service.id;
              return (
                <div key={service.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenAccordion(isOpen ? null : service.id)} className="w-full p-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                        {getServiceLogo(service.id, "w-7 h-7")}
                      </div>
                      <div><span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{service.tag}</span><h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{service.title}</h4></div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-brand-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-4">
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
                      <button onClick={onOpenConsultation} className="px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs">Book Strategy Call</button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V4: HORIZONTAL SLIDER */}
        {/* ========================================================================= */}
        {servicesVariant === 'v4_carousel' && (
          <div className="overflow-x-auto pb-6 scrollbar-none animate-fadeIn">
            <div className="flex space-x-6 min-w-[1000px]">
              {servicesSection.services.map((service) => (
                <div key={service.id} className="w-80 flex-shrink-0 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-md flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-14 h-14 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      {getServiceLogo(service.id, "w-8 h-8")}
                    </div>
                    <span className="text-[10px] font-bold text-brand-600 uppercase">{service.tag}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{service.shortTitle}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
                  </div>
                  <button onClick={onOpenConsultation} className="w-full mt-6 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs">Get Proposal</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V5: CAPABILITY MATRIX */}
        {/* ========================================================================= */}
        {servicesVariant === 'v5_matrix' && (
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl animate-fadeIn">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase font-mono text-[11px] border-b border-slate-200 dark:border-slate-700">
                  <tr><th className="p-4">Capability Domain</th><th className="p-4">Engineering Focus</th><th className="p-4">SLA & Security</th><th className="p-4 text-right">Action</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {servicesSection.services.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-4 font-bold text-slate-900 dark:text-white flex items-center space-x-3">
                        <div className="w-8 h-8 p-1 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          {getServiceLogo(s.id, "w-5 h-5")}
                        </div>
                        <span>{s.shortTitle}</span>
                      </td>
                      <td className="p-4">{s.highlights[0]}</td>
                      <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">100% Encrypted & QA Verified</td>
                      <td className="p-4 text-right"><button onClick={onOpenConsultation} className="px-3 py-1.5 rounded-lg bg-brand-600 text-white font-bold text-xs">Inquire</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V6: ASYMMETRIC BENTO MOSAIC */}
        {/* ========================================================================= */}
        {servicesVariant === 'v6_bentoMosaic' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
            <div className="md:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-brand-900 to-slate-950 text-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">{servicesSection.services[0].tag}</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">{servicesSection.services[0].title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{servicesSection.services[0].description}</p>
              </div>
              <button onClick={onOpenConsultation} className="px-6 py-3 bg-white text-slate-950 font-bold text-xs rounded-xl self-start">Request Architecture</button>
            </div>
            <div className="md:col-span-5 grid grid-cols-1 gap-4">
              {servicesSection.services.slice(1, 3).map((s) => (
                <div key={s.id} className="p-6 rounded-3xl glass-card space-y-2">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{s.shortTitle}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V7: DEVELOPER CODE API VIEW */}
        {/* ========================================================================= */}
        {servicesVariant === 'v7_tabbedCode' && (
          <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl font-mono animate-fadeIn">
            <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-800">
              {servicesSection.services.map((s) => (
                <button key={s.id} onClick={() => setActiveService(s.id)} className={`px-3 py-1.5 rounded-xl text-xs font-bold ${activeService === s.id ? 'bg-brand-600 text-white' : 'bg-slate-900 text-slate-400'}`}>
                  {s.id}.ts
                </button>
              ))}
            </div>
            <div className="text-xs text-slate-300 space-y-2">
              <p className="text-slate-500">// Yukti Software Production Interface</p>
              <p><span className="text-purple-400">export interface</span> <span className="text-blue-400">{selectedService.shortTitle.replace(/\s+/g, '')}</span> {'{'}</p>
              <p className="pl-4"><span className="text-emerald-400">scope:</span> <span className="text-amber-400">"{selectedService.title}"</span>;</p>
              <p className="pl-4"><span className="text-emerald-400">deliverables:</span> [{selectedService.highlights.map(h => `"${h}"`).join(', ')}];</p>
              <p className="pl-4"><span className="text-emerald-400">supportSLA:</span> <span className="text-amber-400">"24/7 Monitored"</span>;</p>
              <p>{'}'}</p>
            </div>
            <button onClick={onOpenConsultation} className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold font-sans">
              Initialize Service Contract →
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V8: BORDER-GLOW TECH CARDS */}
        {/* ========================================================================= */}
        {servicesVariant === 'v8_hoverGlow' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {servicesSection.services.map((s, idx) => (
              <div key={s.id} className="p-8 rounded-3xl bg-slate-900 text-white border-2 border-brand-500/30 hover:border-brand-500 transition-all shadow-xl space-y-4">
                <span className="text-xs font-mono font-bold text-brand-400">SERVICE_0{idx + 1}</span>
                <h4 className="text-xl font-bold">{s.shortTitle}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{s.description}</p>
                <button onClick={onOpenConsultation} className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center space-x-1">
                  <span>Learn more</span><ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V9: ENGINEERING LIFECYCLE */}
        {/* ========================================================================= */}
        {servicesVariant === 'v9_lifecycleTimeline' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { phase: "Phase 1: Architecture & Prototyping", desc: "Consultation, requirements discovery, high-fidelity UI/UX and database schema design." },
                { phase: "Phase 2: Agile Engineering & Cloud", desc: "Full stack web & mobile builds, microservices, containerization and automated CI/CD pipelines." },
                { phase: "Phase 3: QA Verification & 24/7 SLA", desc: "Rigorous testing, zero-downtime deployment, continuous monitoring and post-launch maintenance." }
              ].map((p, i) => (
                <div key={i} className="p-8 rounded-3xl glass-card border border-brand-500/20 space-y-3">
                  <span className="text-xs font-bold text-brand-600 uppercase">Step 0{i + 1}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{p.phase}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V10: ENTERPRISE SCOPE TIERS */}
        {/* ========================================================================= */}
        {servicesVariant === 'v10_tierComparison' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {[
              { tier: "Startup Launchpad", desc: "MVP Full Stack Web / Mobile App with rapid time to market and cloud deployment." },
              { tier: "Growth Scaleup", desc: "Database scaling, cloud microservices migration, DevOps CI/CD and security audits." },
              { tier: "Enterprise Suite", desc: "Custom end-to-end software architecture, dedicated engineering pod, and 24/7 SLA support." }
            ].map((t, i) => (
              <div key={i} className={`p-8 rounded-3xl flex flex-col justify-between ${i === 2 ? 'bg-slate-900 text-white border-2 border-brand-500' : 'glass-card'}`}>
                <div className="space-y-4">
                  <span className="text-xs font-bold text-brand-600 uppercase">Tier 0{i + 1}</span>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">{t.tier}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{t.desc}</p>
                </div>
                <button onClick={onOpenConsultation} className="w-full mt-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-xs">
                  Request Custom Proposal
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* DOCX REFERENCE VARIANT: ITRANSITION 5-PILLAR ENTERPRISE SERVICES */}
        {/* ========================================================================= */}
        {servicesVariant === 'v_docx_itransition' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesSection.services.map((srv, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-brand-500/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                        <Icon name={srv.icon} className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                        0{idx + 1} / 05
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {srv.shortDesc}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                      {(srv.highlights || srv.features || []).slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button 
                      onClick={onOpenConsultation}
                      className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
                    >
                      <span>Request Scope & Estimate</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">
                      Enterprise SLA
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-brand-600 shrink-0" />
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <strong>Document Specification:</strong> All services include structured quality assurance, automated CI/CD pipelines, and complimentary 60-day post-launch support.
                </p>
              </div>
              <button onClick={onOpenConsultation} className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shrink-0 shadow">
                Schedule Architecture Call
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
