import React, { useState } from 'react';
import { siteData } from '../data';
import Icon from './Icon';
import { getRoadmapLogo } from './TechLogos';
import { Sparkles, CheckCircle2, ArrowRight, GitCommit, LayoutGrid, Check, Clock, ChevronDown, Layers, Milestone } from 'lucide-react';

export default function Roadmap({ onOpenConsultation }) {
  const { roadmapSection } = siteData;
  const roadmapVariant = 'v1_timeline';
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="roadmap" className="py-12 sm:py-16 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
            <span className="font-medium">{roadmapSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {roadmapSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {roadmapSection.subtitle}
          </p>
        </div>

        {/* 10-Variant Switcher Bar */}
        

        {/* ========================================================================= */}
        {/* V1: HORIZONTAL INTERACTIVE TIMELINE */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v1_timeline' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="overflow-x-auto pb-4 scrollbar-none">
              <div className="flex items-center justify-between min-w-[720px] relative px-4">
                <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 -z-0"></div>
                {roadmapSection.steps.map((step, idx) => {
                  const isSelected = activeStep === idx;
                  const isCompleted = idx < activeStep;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className="relative z-10 flex flex-col items-center group focus:outline-none"
                    >
                      <div className={`w-13 h-13 rounded-2xl flex items-center justify-center p-2 transition-all duration-300 ${
                        isSelected
                          ? 'bg-white dark:bg-slate-800 shadow-xl shadow-brand-500/20 scale-110 ring-4 ring-brand-500/20 border-2 border-brand-500'
                          : isCompleted
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-400 dark:border-emerald-600 shadow-sm'
                          : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-400'
                      }`}>
                        {getRoadmapLogo(step.stepNumber, "w-7 h-7")}
                      </div>
                      <span className={`text-xs font-bold mt-2 transition-colors ${
                        isSelected ? 'text-brand-600 dark:text-brand-400 font-extrabold' : 'text-slate-600 dark:text-slate-400'
                      }`}>
                        {step.title.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              {(() => {
                const current = roadmapSection.steps[activeStep];
                return (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xl relative overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-2.5 shadow-md flex-shrink-0">
                          {getRoadmapLogo(current.stepNumber, "w-10 h-10")}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest">Stage {current.stepNumber} of 07</span>
                            <span className="text-slate-300 dark:text-slate-700">•</span>
                            <span className="text-xs font-medium text-slate-500">{current.subtitle}</span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{current.title}</h3>
                        </div>
                      </div>
                      <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                        <span>Deliverable: {current.deliverable}</span>
                      </div>
                    </div>
                    <div className="py-6">
                      <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{current.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center space-x-2">
                        <button disabled={activeStep === 0} onClick={() => setActiveStep(prev => Math.max(0, prev - 1))} className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 disabled:opacity-40 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">← Previous</button>
                        <button disabled={activeStep === roadmapSection.steps.length - 1} onClick={() => setActiveStep(prev => Math.min(roadmapSection.steps.length - 1, prev + 1))} className="px-4 py-2 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-slate-700 disabled:opacity-40 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">Next →</button>
                      </div>
                      <button onClick={onOpenConsultation} className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center space-x-1 hover:underline">
                        <span>Discuss with engineering team</span><ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V2: STAGE MATRIX GRID */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v2_matrix' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {roadmapSection.steps.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-7 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 flex items-center justify-center shadow-sm">
                      {getRoadmapLogo(step.stepNumber, "w-7 h-7")}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.subtitle}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-2 text-[11px] font-bold text-brand-600 dark:text-brand-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span className="truncate">Deliverable: {step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V3: CIRCULAR PROCESS WHEEL */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v3_circular' && (
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 animate-fadeIn space-y-8">
            <div className="flex flex-wrap justify-center gap-2">
              {roadmapSection.steps.map((step, idx) => (
                <button key={idx} onClick={() => setActiveStep(idx)} className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${activeStep === idx ? 'bg-brand-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>
                  {getRoadmapLogo(step.stepNumber, "w-4 h-4")}
                  <span>Step {step.stepNumber}: {step.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            <div className="max-w-2xl mx-auto text-center space-y-4 py-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 p-2.5 flex items-center justify-center shadow-lg">
                  {getRoadmapLogo(roadmapSection.steps[activeStep].stepNumber, "w-10 h-10")}
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-accent-primary uppercase">Stage {roadmapSection.steps[activeStep].stepNumber}</span>
              <h3 className="text-3xl font-black text-white">{roadmapSection.steps[activeStep].title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{roadmapSection.steps[activeStep].description}</p>
              <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-xs font-bold text-emerald-400">Guaranteed: {roadmapSection.steps[activeStep].deliverable}</div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V4: AGILE KANBAN SPRINT */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v4_kanban' && (
          <div className="overflow-x-auto pb-4 scrollbar-none animate-fadeIn">
            <div className="flex space-x-4 min-w-[1100px]">
              {roadmapSection.steps.map((step, idx) => (
                <div key={idx} className="w-64 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                      <div className="flex items-center space-x-2">
                        {getRoadmapLogo(step.stepNumber, "w-5 h-5")}
                        <span>SPRINT 0{step.stepNumber}</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{step.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">{step.description}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-brand-600 dark:text-brand-400">{step.deliverable}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V5: VERTICAL DOSSIER */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v5_verticalDossier' && (
          <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            {roadmapSection.steps.map((step, idx) => (
              <div key={idx} className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 flex items-center justify-center shadow">
                    {getRoadmapLogo(step.stepNumber, "w-7 h-7")}
                  </div>
                  {idx !== roadmapSection.steps.length - 1 && <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 my-2"></div>}
                </div>
                <div className="flex-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h4>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">{step.deliverable}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V6: SPRINT GANTT CHART */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v6_ganttChart' && (
          <div className="p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 overflow-x-auto animate-fadeIn">
            <div className="min-w-[700px] space-y-3 font-mono text-xs">
              <div className="flex justify-between text-slate-500 pb-2 border-b border-slate-800">
                <span>Phase / Milestone</span>
                <span>Sprint Duration</span>
              </div>
              {roadmapSection.steps.map((s, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-slate-900">
                  <div className="flex items-center space-x-2">
                    {getRoadmapLogo(s.stepNumber, "w-5 h-5")}
                    <span className="text-slate-200">{s.stepNumber}. {s.title}</span>
                  </div>
                  <div className="w-48 bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-brand-500 h-full rounded-full" style={{ width: `${(i + 1) * 14}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V7: 3-PHASE MACRO PIPELINE */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v7_splitPhases' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {[
              { phase: "Phase 1: Inception & Prototype", steps: "Requirement Analysis + Strategy & UI/UX" },
              { phase: "Phase 2: Core Engineering", steps: "Software Development + Rigorous QA Testing" },
              { phase: "Phase 3: Production & SLA", steps: "Deployment Go-Live + 24/7 Continuous Maintenance" }
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card border border-brand-500/30 space-y-3">
                <span className="text-xs font-bold text-brand-600 uppercase">Stage 0{i + 1}</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{p.phase}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{p.steps}</p>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V8: ACCORDION MILESTONE LIST */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v8_accordionSteps' && (
          <div className="max-w-3xl mx-auto space-y-3 animate-fadeIn">
            {roadmapSection.steps.map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  {getRoadmapLogo(s.stepNumber, "w-6 h-6")}
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{s.stepNumber}. {s.title}</span>
                </div>
                <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">{s.deliverable}</span>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V9: SWIPEABLE MILESTONE DECK */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v9_cardDeck' && (
          <div className="overflow-x-auto pb-4 scrollbar-none animate-fadeIn">
            <div className="flex space-x-4 min-w-[900px]">
              {roadmapSection.steps.map((s, i) => (
                <div key={i} className="w-72 p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-400 font-mono">0{i + 1} / 07</span>
                    {getRoadmapLogo(s.stepNumber, "w-6 h-6")}
                  </div>
                  <h4 className="text-base font-bold">{s.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V10: CONNECTED NODE FLOWCHART */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v10_nodeFlowchart' && (
          <div className="p-8 rounded-3xl glass-card border border-brand-500/20 text-center space-y-6 animate-fadeIn">
            <div className="flex flex-wrap justify-center items-center gap-3">
              {roadmapSection.steps.map((s, i) => (
                <React.Fragment key={i}>
                  <div className="px-4 py-2.5 rounded-2xl bg-brand-600 text-white text-xs font-bold shadow-md flex items-center space-x-2">
                    {getRoadmapLogo(s.stepNumber, "w-4 h-4")}
                    <span>{s.title}</span>
                  </div>
                  {i !== roadmapSection.steps.length - 1 && <span className="text-slate-400 font-bold">→</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs text-slate-500">Every milestone backed by formal deliverables and verified QA signatures.</p>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DOCX REFERENCE VARIANT: 011BQ 7-STAGE PROCESS FLOW */}
        {/* ========================================================================= */}
        {roadmapVariant === 'v_docx_011bq' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="relative">
              
              {/* Central connecting horizontal line (desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-brand-500 via-accent-primary to-brand-600 -translate-y-1/2 z-0 opacity-40"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
                {roadmapSection.steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-brand-500/50 transition-all flex flex-col justify-between group text-left"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          {getRoadmapLogo(step.stepNumber, "w-7 h-7")}
                        </div>
                        <span className="text-[10px] font-mono font-bold text-brand-600 dark:text-brand-400">
                          STAGE {step.stepNumber}
                        </span>
                      </div>

                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-brand-600 transition-colors">
                        {step.title}
                      </h4>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-4">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Key Output</p>
                      <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 truncate">{step.deliverable}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">011BQ Document Reference Standard</h4>
                <p className="text-xs text-slate-400">Full transparency across every sprint demo with sign-off before production go-live.</p>
              </div>
              <button onClick={onOpenConsultation} className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shrink-0 shadow">
                Start Stage 01 Analysis
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
