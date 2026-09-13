import React, { useState } from 'react';
import { 
  Terminal, Sparkles, ArrowRight, ShieldCheck, Cpu, 
  Play, CheckCircle2, Zap, Copy, Check 
} from 'lucide-react';

export default function MainHeroV1({ onOpenConsultation }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('cloud');

  const copyBash = () => {
    navigator.clipboard.writeText('npx yukti-deploy@latest --env=production');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/80 text-brand-700 dark:text-brand-300 text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Next-Gen Enterprise Engineering & Tech Academy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Architecting High-Scale <br />
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-500 bg-clip-text text-transparent">
                Software & Elite Engineers
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              We engineer mission-critical cloud solutions, distributed AI systems, and transform passionate developers into top 1% engineers with guaranteed placement track records.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-600 hover:from-brand-500 hover:to-emerald-500 text-white font-bold text-sm shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => scrollTo('courses')}
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-semibold text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Syllabus & Batches
              </button>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800/80">
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">99.98%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-brand-600 dark:text-brand-400">1,500+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Engineers Placed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">4.9 ★</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Google Verified Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] text-slate-400 font-sans ml-2">yukti-cloud-telemetry</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[10px] text-emerald-400 font-semibold font-sans">LIVE 0.14ms</span>
                </div>
              </div>

              <div className="flex border-b border-slate-800 bg-slate-900/80 px-2 pt-2 gap-1 text-[11px] font-sans">
                <button 
                  onClick={() => setActiveTab('cloud')}
                  className={`px-3 py-1.5 rounded-t-lg font-medium transition-colors ${activeTab === 'cloud' ? 'bg-slate-800 text-brand-400 border-b-2 border-brand-500' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  Architecture.yml
                </button>
                <button 
                  onClick={() => setActiveTab('curriculum')}
                  className={`px-3 py-1.5 rounded-t-lg font-medium transition-colors ${activeTab === 'curriculum' ? 'bg-slate-800 text-brand-400 border-b-2 border-brand-500' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  CareerLaunch.sh
                </button>
              </div>

              <div className="p-4 space-y-2.5 text-left leading-relaxed min-h-[220px]">
                {activeTab === 'cloud' ? (
                  <>
                    <p className="text-slate-500">// Yukti High-Scale Microservice Topology</p>
                    <p className="text-emerald-400 font-semibold">$ yukti init --enterprise-stack</p>
                    <p className="text-slate-300">✔ API Gateway initialized [FastAPI + Go Router]</p>
                    <p className="text-slate-300">✔ Distributed Kafka event bus connected (1.2M msg/sec)</p>
                    <p className="text-slate-300">✔ Vector database indexed [LangChain RAG Pipeline]</p>
                    <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 mt-2 flex items-center justify-between">
                      <span className="text-slate-300">Target SLA: 99.99% • Latency P99: &lt; 140ms</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">READY</span>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-slate-500">// Career Accelerator Pipeline</p>
                    <p className="text-brand-400 font-semibold">$ bash enroll_mastery.sh --batch=weekend</p>
                    <p className="text-slate-300">1. Core Architecture & DSA Mastery (350+ Questions)</p>
                    <p className="text-slate-300">2. Real Production Capstones on AWS & Docker</p>
                    <p className="text-slate-300">3. Resume Optimization & 1-on-1 Mock Panels</p>
                    <div className="p-2.5 bg-emerald-950/30 border border-emerald-800/40 rounded-lg mt-2 text-emerald-300 font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Avg Placed Package: 8.5 - 18.0 LPA</span>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-slate-950 p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <code className="text-slate-400 truncate max-w-[240px]">npx yukti-deploy@latest</code>
                <button 
                  onClick={copyBash}
                  className="flex items-center gap-1 text-slate-300 hover:text-brand-400 transition-colors bg-slate-800/80 px-2 py-1 rounded"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
