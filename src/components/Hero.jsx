import React, { useState } from 'react';
import { siteData } from '../data';


import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Code2, 
  Terminal, 
  Play, 
  Zap, 
  Calculator,
  TrendingUp,
  Cpu,
  Check,
  Radio,
  Globe,
  Database,
  Smartphone,
  Command,
  Search,
  MousePointer,
  Users,
  Laptop,
  Layers,
  Award
} from 'lucide-react';

export default function Hero({ onOpenConsultation, onNavigateServices, onNavigateTraining }) {
  const { hero } = siteData;
  const heroVariant = 'v1_neosaas';

  // Interactive Live Console State for Variant 1
  const [consoleLog, setConsoleLog] = useState([
    "✓ Initializing Yukti Enterprise Architecture v4.2...",
    "✓ 50+ Custom Software Modules Loaded",
    "✓ Zero-Downtime Multi-Cloud Engine: ACTIVE",
    "✓ 24/7 Security Protocols & Encryption: VERIFIED",
    "Ready to scale your business operations."
  ]);

  const runSimulation = (type) => {
    if (type === 'security') {
      setConsoleLog([
        "⚡ Scanning data pipelines...",
        "🔒 End-to-end AES-256 encryption: PASSED",
        "🛡️ OWASP Top 10 vulnerabilities check: 0 ISSUES",
        "✓ Compliance score: 99.8% (Enterprise Ready)"
      ]);
    } else if (type === 'deploy') {
      setConsoleLog([
        "🚀 Triggering automated CI/CD pipeline...",
        "📦 Building Docker containers & assets...",
        "☁️ Deploying to AWS/GCP Kubernetes cluster...",
        "✓ Live in 3.4 seconds with zero downtime!"
      ]);
    } else {
      setConsoleLog([
        "⚡ Yukti Software Performance Benchmark:",
        "🚀 Page Load Speed: 0.42s (99/100 Lighthouse)",
        "📈 Server Cost Optimization: -42% average",
        "✓ Status: All systems performing at peak efficiency"
      ]);
    }
  };

  // Interactive ROI Calculator State for Variant 3
  const [projectScope, setProjectScope] = useState(['web', 'cloud']);
  const [teamSize, setTeamSize] = useState(15);
  const toggleScope = (scope) => {
    setProjectScope(prev => prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]);
  };
  const calculatedRoi = (teamSize * 1.8 * (projectScope.length || 1)).toFixed(0);
  const estimatedWeeks = Math.max(3, 10 - projectScope.length);

  // Device mockup tab for V9
  const [activeDeviceTab, setActiveDeviceTab] = useState('web');

  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-8 sm:pb-14 md:pt-10 md:pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* On-Page 10-Variant Switcher Bar */}
        

        {/* ========================================================================= */}
        {/* V1: NEO-SAAS LIVE CONSOLE */}
        {/* ========================================================================= */}
        {heroVariant === 'v1_neosaas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
                <span className="font-medium">{hero.badge}</span>
                <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                  ISO Certified
                </span>
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  {hero.title}{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary">
                    {hero.titleHighlight}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {hero.subtitle}
                </p>
              </div>
              <div className="space-y-3 pt-2">
                {hero.points.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-left justify-center lg:justify-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">{point.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button onClick={onNavigateServices} className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                  <span>{hero.primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={onNavigateTraining} className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-base text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center space-x-2">
                  <span>{hero.secondaryCta.text}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl glass-card p-6 shadow-2xl transition-all">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-mono font-bold text-slate-400 pl-2">yukti-cloud-engine</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">LIVE</span>
                </div>
                <div className="py-3 flex flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800/80">
                  <button onClick={() => runSimulation('benchmark')} className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 hover:bg-brand-100 flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span>Run Speed Benchmark</span>
                  </button>
                  <button onClick={() => runSimulation('security')} className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Audit Security</span>
                  </button>
                  <button onClick={() => runSimulation('deploy')} className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 flex items-center space-x-1">
                    <Play className="w-3 h-3" />
                    <span>Simulate CI/CD</span>
                  </button>
                </div>
                <div className="py-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5 min-h-[140px] bg-slate-900/5 dark:bg-slate-950/70 p-3.5 rounded-2xl border border-slate-200/50 dark:border-slate-800">
                  {consoleLog.map((log, idx) => (
                    <p key={idx} className={log.startsWith("✓") ? "text-emerald-600 dark:text-emerald-400 font-semibold" : "text-slate-600 dark:text-slate-300"}>{log}</p>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                  {hero.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                      <p className="text-xl sm:text-2xl font-black text-brand-600 dark:text-brand-400">{metric.value}</p>
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V2: CENTERED ENTERPRISE */}
        {/* ========================================================================= */}
        {heroVariant === 'v2_enterprise' && (
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
              <span className="font-medium">{hero.badge}</span>
              <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                ISO Certified
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {hero.title}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary">{hero.titleHighlight}</span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">{hero.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              {hero.points.map((p, i) => (
                <div key={i} className="px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button onClick={onNavigateServices} className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-white bg-brand-600 hover:bg-brand-700 shadow-xl flex items-center justify-center space-x-2">
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onOpenConsultation} className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 border border-slate-200 dark:border-slate-700">
                Schedule Free Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {hero.metrics.map((m, idx) => (
                <div key={idx} className="p-5 rounded-3xl glass-card text-center hover:scale-105 transition-transform">
                  <p className="text-3xl font-black text-brand-600 dark:text-brand-400">{m.value}</p>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-1">{m.label}</p>
                  <p className="text-[10px] text-slate-400">{m.suffix}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V3: LIVE ROI SPOTLIGHT */}
        {/* ========================================================================= */}
        {heroVariant === 'v3_splitRoi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
                <Calculator className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span className="font-medium">Live Interactive ROI & Project Estimator</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
                Transform Operations with <span className="text-brand-600 dark:text-brand-400">{siteData.brand.name}</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{hero.subtitle}</p>
              <div className="pt-4 flex items-center space-x-4">
                <button onClick={onOpenConsultation} className="px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-lg flex items-center space-x-2">
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={onNavigateTraining} className="px-6 py-3.5 rounded-2xl font-bold text-sm text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800">
                  Explore Placements
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl glass-card p-6 sm:p-8 shadow-2xl border border-brand-500/30 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Estimated Project Impact Calculator</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-1 rounded-lg">Real-Time</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span>Target Organization Scale</span>
                    <span className="text-brand-600 dark:text-brand-400 font-mono">{teamSize} Members</span>
                  </div>
                  <input type="range" min="5" max="100" value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))} className="w-full accent-brand-600 cursor-pointer" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Select Desired Capabilities</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[{ id: 'web', label: 'Full Stack Web' }, { id: 'mobile', label: 'Mobile App' }, { id: 'cloud', label: 'Cloud Migration' }, { id: 'devops', label: 'DevOps & CI/CD' }].map((item) => (
                      <button key={item.id} onClick={() => toggleScope(item.id)} className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all ${projectScope.includes(item.id) ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}>
                        <span>{item.label}</span>
                        {projectScope.includes(item.id) && <Check className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-900 text-white">
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Estimated Efficiency Boost</p>
                    <p className="text-2xl font-black text-emerald-400">+{calculatedRoi}%</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Time-to-Production</p>
                    <p className="text-2xl font-black text-accent-primary">{estimatedWeeks} Weeks</p>
                  </div>
                </div>
                <button onClick={onOpenConsultation} className="w-full py-3 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all text-center">
                  Get Verified Custom Proposal for this Scope →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V4: BENTO GRID HERO */}
        {/* ========================================================================= */}
        {heroVariant === 'v4_bentoGrid' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
                <span className="font-medium">Modular Enterprise Architecture</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white">
                {hero.title} <span className="text-brand-600 dark:text-brand-400">{hero.titleHighlight}</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">{hero.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-8 p-8 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-brand-600 text-white">50+ Solutions Delivered</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Custom Web, Mobile & Cloud Infrastructure</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">From intuitive UI/UX prototypes to zero-downtime microservices and 24/7 SLA maintenance.</p>
                </div>
                <div className="pt-6 flex flex-wrap gap-3">
                  <button onClick={onNavigateServices} className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs">Explore Capabilities →</button>
                  <button onClick={onOpenConsultation} className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs">Get Free Quote</button>
                </div>
              </div>
              <div className="md:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-brand-900 to-slate-950 text-white flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Academy</span>
                  <h4 className="text-2xl font-bold">94% Placement Success Record</h4>
                  <p className="text-xs text-slate-300">Job-oriented courses in Data Science, Full Stack & DevOps with 1-on-1 doubt sessions.</p>
                </div>
                <button onClick={onNavigateTraining} className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs mt-6">View Career Tracks</button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V5: CYBER COMMAND DECK */}
        {/* ========================================================================= */}
        {heroVariant === 'v5_cyberDeck' && (
          <div className="relative rounded-3xl bg-slate-950 text-white border border-brand-500/40 p-8 sm:p-12 overflow-hidden shadow-2xl animate-fadeIn">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-500/20 text-brand-300 border border-brand-500/40">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>YUKTI-CYBER-CORE ONLINE</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight font-sans">
                  Next-Generation Software Engineering & Talent Incubation
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl">{hero.subtitle}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button onClick={onOpenConsultation} className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs font-mono shadow-lg shadow-brand-500/30">
                    [ INITIALIZE_CONSULTATION ]
                  </button>
                  <button onClick={onNavigateServices} className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs font-mono border border-white/20">
                    [ VIEW_SERVICES ]
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
                <p className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest">Active Telemetry</p>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between pb-2 border-b border-white/10"><span className="text-slate-400">Enterprise Solutions:</span><span className="font-bold text-emerald-400">50+ Active</span></div>
                  <div className="flex justify-between pb-2 border-b border-white/10"><span className="text-slate-400">Custom Dev Tools:</span><span className="font-bold text-accent-primary">20+ In-House</span></div>
                  <div className="flex justify-between pb-2 border-b border-white/10"><span className="text-slate-400">Placement Rate:</span><span className="font-bold text-amber-400">94.0%</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Support Availability:</span><span className="font-bold text-white">24/7 SLA</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V6: LINEAR MINIMALIST COMMAND */}
        {/* ========================================================================= */}
        {heroVariant === 'v6_linearMinimal' && (
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700">
              <Command className="w-3.5 h-3.5 text-brand-400" />
              <span>Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-white">⌘K</kbd> to launch enterprise architecture</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
              Software engineered for <br /><span className="text-brand-600 dark:text-brand-400">velocity & uncompromised scale.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Yukti Software builds bespoke full-stack applications, secure databases, and cloud migrations with 94% placed tech talent.
            </p>
            <div className="max-w-xl mx-auto p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center space-x-3">
              <Search className="w-5 h-5 text-slate-400 pl-1" />
              <input type="text" placeholder="Type 'web dev', 'mobile app', or 'career training'..." className="flex-1 bg-transparent text-xs sm:text-sm outline-none text-slate-900 dark:text-white" />
              <button onClick={onOpenConsultation} className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl shadow">Explore</button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V7: STRIPE ISOMETRIC GRADIENT */}
        {/* ========================================================================= */}
        {heroVariant === 'v7_stripeIsometric' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fadeIn">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">Financial-Grade Software</span>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                The modern technology infrastructure for your business growth.
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">{hero.subtitle}</p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button onClick={onNavigateServices} className="px-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-lg">Start Project Integration</button>
                <button onClick={onOpenConsultation} className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs">Read Documentation</button>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-3">
              {['Full Stack Web Architecture', 'Zero-Downtime Cloud Migration', 'Automated DevOps CI/CD', '24/7 Security Protocols'].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl glass-card border border-brand-500/20 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V8: COLLABORATIVE FIGMA CANVAS */}
        {/* ========================================================================= */}
        {heroVariant === 'v8_figmaCanvas' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden animate-fadeIn">
            <div className="absolute top-4 right-10 flex items-center space-x-2 bg-emerald-500 text-slate-950 font-bold text-[10px] px-2.5 py-1 rounded-full shadow">
              <MousePointer className="w-3 h-3" />
              <span>Manisha K. (Founder) is reviewing architecture</span>
            </div>
            <div className="absolute bottom-6 right-20 hidden sm:flex items-center space-x-2 bg-brand-500 text-white font-bold text-[10px] px-2.5 py-1 rounded-full shadow">
              <MousePointer className="w-3 h-3" />
              <span>Mithilesh K. (CTO) approved deployment</span>
            </div>
            <div className="max-w-2xl space-y-6 relative z-10">
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Where elite software engineering meets collaborative innovation.
              </h1>
              <p className="text-sm text-slate-300">{hero.subtitle}</p>
              <div className="flex items-center space-x-4">
                <button onClick={onOpenConsultation} className="px-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-lg">Collaborate With Us</button>
                <button onClick={onNavigateTraining} className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/20">Join Academy Batch</button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V9: DUAL DEVICE APP PREVIEW */}
        {/* ========================================================================= */}
        {heroVariant === 'v9_splitAppPreview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase">Cross-Platform Excellence</span>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">Unified Web & Mobile Solutions Built for Speed</h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">{hero.subtitle}</p>
              <div className="flex space-x-3">
                <button onClick={() => setActiveDeviceTab('web')} className={`px-4 py-2 rounded-xl text-xs font-bold ${activeDeviceTab === 'web' ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>Web Application</button>
                <button onClick={() => setActiveDeviceTab('mobile')} className={`px-4 py-2 rounded-xl text-xs font-bold ${activeDeviceTab === 'mobile' ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>iOS / Android App</button>
              </div>
            </div>
            <div className="lg:col-span-6 p-8 rounded-3xl glass-card text-center space-y-4 shadow-2xl">
              {activeDeviceTab === 'web' ? (
                <div className="p-6 rounded-2xl bg-slate-950 text-left font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex space-x-2 pb-2 border-b border-slate-800"><div className="w-2.5 h-2.5 rounded-full bg-red-500"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div><div className="w-2.5 h-2.5 rounded-full bg-green-500"></div></div>
                  <p className="text-brand-400">// High-Speed React / Next.js Microfrontend</p>
                  <p>GET /api/v2/enterprise-analytics 200 OK (14ms)</p>
                  <p className="text-emerald-400">✓ Lighthouse Score: 100/100</p>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-900 text-left text-xs text-white space-y-2">
                  <Smartphone className="w-8 h-8 text-brand-400 mx-auto" />
                  <p className="font-bold text-center">Flutter & React Native Cross-Platform Suite</p>
                  <p className="text-center text-slate-400 text-[11px]">60 FPS native animations • Offline sync • Biometric security</p>
                </div>
              )}
              <button onClick={onOpenConsultation} className="w-full py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs">Request Architecture Spec</button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V10: APPLE EDITORIAL LUXURY */}
        {/* ========================================================================= */}
        {heroVariant === 'v10_editorialLuxury' && (
          <div className="text-center max-w-5xl mx-auto space-y-10 animate-fadeIn">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
              Engineering Mastery. <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary">Customized Without Limits.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              {hero.subtitle} Trusted across 50+ delivered solutions and hundreds of career breakthroughs.
            </p>
            <div className="flex justify-center items-center space-x-6">
              <button onClick={onOpenConsultation} className="px-8 py-4 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm shadow-xl">
                Consult With Founders
              </button>
              <button onClick={onNavigateServices} className="text-sm font-bold text-brand-600 hover:underline">
                Explore 5 Core Services →
              </button>
            </div>
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200 dark:border-slate-800">
              {hero.metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-4xl font-extrabold text-slate-900 dark:text-white">{m.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DOCX REFERENCE VARIANT: ITRANSITION ENTERPRISE HERO */}
        {/* ========================================================================= */}
        {heroVariant === 'v_docx_itransition' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
                <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span className="font-medium">Docx Reference • Itransition Enterprise Standard</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Tailored Software Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-accent-primary">Maximum Business Growth</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Yukti Software delivers bespoke software development tailored to your exact business requirements, backed by an advanced IT training institute that prepares young minds for high-growth tech careers.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onNavigateServices}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 to-accent-primary shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Discover Customised Software Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-slate-800 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 shadow-md transition-all"
                >
                  <span>Connect with Our Experts</span>
                </button>
              </div>

              {/* Verified badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-100 dark:border-slate-800/80">
                {['Custom Web & Mobile', 'Cloud & DevOps', 'Secure Databases', 'Job-Ready Academy'].map((badge, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-mono text-brand-400 font-bold">YUKTI-ENTERPRISE-CORE v4.2</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 font-mono">Live In Production</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                    <p className="text-xs font-bold text-white">50+ Solutions Delivered</p>
                    <p className="text-[11px] text-slate-400">Covering FinTech, EdTech, Healthcare, Logistics & Retail systems.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                    <p className="text-xs font-bold text-white">20+ Custom In-House Tools</p>
                    <p className="text-[11px] text-slate-400">Automated deployment, security audits & zero-downtime microservices.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                    <p className="text-xs font-bold text-white">100% Practical Training</p>
                    <p className="text-[11px] text-slate-400">Hands-on live coding, 1-on-1 mentorship & assured placement drives.</p>
                  </div>
                </div>

                <button onClick={onOpenConsultation} className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg transition-colors">
                  Schedule Free Technical Consultation
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
