import React, { useState } from 'react';
import { 
  Code, Cpu, Globe, Cloud, CheckCircle2, Shield, 
  ArrowRight, Sparkles, Layers, Zap 
} from 'lucide-react';

export default function MainServicesV1({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'custom-software',
      icon: Code,
      title: 'Enterprise Custom Software',
      shortDesc: 'Scalable cloud architectures, distributed backend APIs, and microservices.',
      deliverables: ['Cloud-Native Architecture', 'High-Throughput APIs', 'SOC2/ISO Security Compliance', 'Automated CI/CD Pipelines'],
      techStack: ['Node.js', 'Go', 'Python', 'AWS', 'Kubernetes', 'PostgreSQL'],
      sla: '< 150ms P99 Latency & 99.99% Availability Commitment'
    },
    {
      id: 'ai-ml-solutions',
      icon: Cpu,
      title: 'AI & Data Engineering',
      shortDesc: 'Custom LLM agents, retrieval augmented generation (RAG), and predictive models.',
      deliverables: ['Fine-Tuned LLM Pipelines', 'Vector Embeddings & Semantic Search', 'Automated ETL Data Lakes', 'Model Drift Telemetry'],
      techStack: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Pinecone', 'Docker'],
      sla: '99.2% Inference Accuracy & Automated Retraining Loops'
    },
    {
      id: 'fullstack-web-mobile',
      icon: Globe,
      title: 'Next-Gen Web & Mobile Apps',
      shortDesc: 'Ultra-fast web platforms and native iOS/Android applications built for scale.',
      deliverables: ['React & Next.js Frontends', 'React Native / Flutter Mobile', 'Real-Time WebSockets', 'Sub-Second Page Loads'],
      techStack: ['React', 'Next.js', 'React Native', 'TailwindCSS', 'GraphQL', 'Redis'],
      sla: 'Core Web Vitals 95+ Score & Instant Offline Sync'
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud DevOps & SRE',
      shortDesc: 'Zero-downtime cloud migrations, infrastructure as code (IaC), and automated security.',
      deliverables: ['Terraform & Pulumi IaC', 'Kubernetes Orchestration', 'Zero-Trust IAM Security', '24/7 SRE Telemetry & Alerting'],
      techStack: ['AWS', 'GCP', 'Terraform', 'Docker', 'Prometheus', 'Grafana'],
      sla: 'Zero-Downtime Blue/Green Canary Deployments'
    }
  ];

  const current = services[activeTab];
  const IconComponent = current.icon;

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Enterprise Services V1</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Performance Engineering Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From greenfield architecture to high-load scaling, we design robust software tailored for modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-2">
            {services.map((item, idx) => {
              const ItemIcon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-50 to-emerald-50/50 dark:from-brand-950/60 dark:to-slate-900 border-brand-500 shadow-md ring-1 ring-brand-500/20'
                      : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                    isActive 
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${isActive ? 'text-brand-700 dark:text-brand-300' : 'text-slate-800 dark:text-slate-200'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {item.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {current.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Production-Ready Deliverables</span>
                </div>
              </div>
              <span className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-100 dark:bg-brand-900/60 px-3 py-1 rounded-full">
                SLA Guaranteed
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Core Engineering Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Primary Architecture Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {current.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-lg border border-slate-200 dark:border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-medium">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{current.sla}</span>
              </div>
            </div>

            <button 
              onClick={onOpenConsultation}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow"
            >
              <span>Schedule Architecture Review for {current.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
