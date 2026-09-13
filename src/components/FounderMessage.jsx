import React from 'react';
import { siteData } from '../data';
import { Sparkles, Quote, Award, ShieldCheck, ArrowRight, CheckCircle2, UserCheck, HeartHandshake } from 'lucide-react';

export default function FounderMessage({ onOpenConsultation }) {
  const { founderMessageSection, brand } = siteData;

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
      
      {/* Ambient background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Portrait & Credential Badge Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-600 via-accent-primary to-brand-400 opacity-30 blur-lg"></div>
              
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-2xl text-center space-y-6">
                
                {/* Avatar / Portrait */}
                <div className="relative mx-auto w-32 h-32 rounded-3xl bg-gradient-to-tr from-brand-600 to-accent-primary flex items-center justify-center text-white shadow-xl">
                  <span className="text-4xl font-black">MK</span>
                  <div className="absolute -bottom-3 -right-3 p-2 bg-slate-900 text-brand-400 rounded-2xl shadow-lg border border-slate-800">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Ms. Manisha Kumari
                  </h3>
                  <p className="text-sm font-bold text-brand-600 dark:text-brand-400">
                    Founder & Chief Executive Officer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    10+ Years of Enterprise IT Leadership
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80">
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Solutions Delivered</p>
                    <p className="text-base font-black text-slate-900 dark:text-white">50+ Projects</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80">
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Placement Rate</p>
                    <p className="text-base font-black text-emerald-600 dark:text-emerald-400">94% Record</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-brand-500" />
                  <span>Guiding Yukti's Mission & Standard of Excellence</span>
                </div>

              </div>
            </div>
          </div>

          {/* Founder's Letter & Vision Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
              <span className="font-medium">Leadership Vision & Enterprise Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              "We Built Yukti Software to Bridge Enterprise Technology Gaps & Cultivate Next-Gen Talent."
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                When we founded <strong>Yukti Software</strong>, we recognized that organizations are searching for agile, custom-tailored software solutions that elevate profitability, operational speed, and return on investment—without the rigid constraints of generic software.
              </p>
              <p>
                Simultaneously, we realized the acute shortage of practically trained, job-ready engineers. That is why we combined our enterprise development arm with our specialized IT training institute. Every curriculum is vetted by industry architects to guarantee our students learn what modern recruiters actively seek.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: "Security & Quality Assurance", desc: "Rigorous ISO-standard QA & encryption at every layer." },
                { title: "Personalized Client Customization", desc: "Software tailored precisely to your operational workflow." },
                { title: "Hands-on Practical Labs", desc: "Live coding projects for every student batch." },
                { title: "Transparent & Accountable SLA", desc: "No hidden charges, guaranteed post-deployment warranty." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-2.5 p-3 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:shadow-xl hover:shadow-brand-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Schedule a Strategic Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                <HeartHandshake className="w-4 h-4 text-brand-500" />
                <span>Direct Executive Guidance</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
