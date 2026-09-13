import React, { useState } from 'react';
import { 
  GitCommit, CheckCircle, ArrowRight, Clock, ShieldCheck, 
  Layers, Terminal, Rocket 
} from 'lucide-react';

export default function MainRoadmapV1({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { step: '01', title: 'Architecture Discovery', duration: 'Week 1', desc: 'In-depth scope definition, system topology blueprints, and technical milestone planning.', deliverables: ['Software Requirements Spec (SRS)', 'High-Level Architecture Diagram', 'Milestone & Cost Estimates'] },
    { step: '02', title: 'UI/UX & Prototyping', duration: 'Week 2-3', desc: 'High-fidelity Figma wireframes, interactive user flows, and brand design alignment.', deliverables: ['Interactive Figma Prototype', 'Design System & Component Tokens', 'User Journey Validation'] },
    { step: '03', title: 'Agile Sprint Dev', duration: 'Week 4-8', desc: 'Modular microservice development with test-driven code and weekly staging builds.', deliverables: ['Bi-Weekly Sprint Releases', 'Automated Test Coverage > 85%', 'Live Staging Previews'] },
    { step: '04', title: 'QA & Security Audit', duration: 'Week 9', desc: 'Automated unit, integration, load testing, and OWASP Top 10 penetration audits.', deliverables: ['Penetration Test Report', 'Load Benchmark Simulation', 'Zero Critical Vulnerability Signoff'] },
    { step: '05', title: 'Cloud Deployment', duration: 'Week 10', desc: 'Zero-downtime CI/CD containerization on AWS/GCP with automated rollback guards.', deliverables: ['Docker & Kubernetes Manifests', 'Automated Blue/Green CI/CD', 'SSL & DNS Hardening'] },
    { step: '06', title: 'Telemetry & Tuning', duration: 'Week 11', desc: 'Real-time Datadog/Prometheus metric monitoring and query optimization.', deliverables: ['Grafana Dashboards', 'Sub-150ms Query Optimization', 'Automated Error Alerting'] },
    { step: '07', title: '24/7 SLA Support', duration: 'Ongoing', desc: 'Continuous patch management, uptime guarantees, and scalable feature rollouts.', deliverables: ['99.98% Uptime SLA', '15-Minute Emergency Response', 'Continuous Feature Upgrades'] }
  ];

  const current = steps[activeStep];

  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5" />
            <span>Delivery Lifecycle V1</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The 7-Stage Software Development Process
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Structured, transparent, and battle-tested execution pipeline ensuring predictable on-time delivery.
          </p>
        </div>

        <div className="overflow-x-auto pb-4 mb-8">
          <div className="flex items-center min-w-[700px] justify-between relative px-4">
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-200 dark:bg-slate-800 z-0"></div>

            {steps.map((s, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = idx < activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    isSelected 
                      ? 'bg-brand-500 text-slate-950 ring-4 ring-brand-500/30 scale-110 shadow-lg' 
                      : isPassed
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-2 border-slate-300 dark:border-slate-700'
                  }`}>
                    {s.step}
                  </div>
                  <span className={`text-[11px] font-semibold mt-2 whitespace-nowrap ${
                    isSelected ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {s.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black px-2.5 py-1 rounded bg-brand-500/20 text-brand-600 dark:text-brand-400 font-mono">
                STAGE {current.step}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {current.duration}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {current.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {current.desc}
            </p>

            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Key Milestone Deliverables
              </h4>
              <div className="space-y-1.5">
                {current.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 mx-auto flex items-center justify-center font-bold text-lg">
              {current.step}
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Ready for Stage {current.step}?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Get an expert estimate tailored to your product scope.</p>
            </div>
            <button 
              onClick={onOpenConsultation}
              className="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow"
            >
              Consult On This Phase
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
