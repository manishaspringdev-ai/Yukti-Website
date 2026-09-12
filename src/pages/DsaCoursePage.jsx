import React, { useState } from 'react';
import { siteData } from '../data';
import { 
  Sparkles, 
  Cpu, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Download, 
  Users, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Binary,
  Layers,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DsaCoursePage({ onOpenConsultation, setCurrentPage }) {
  const dsa = siteData.coursesData.dsa;
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', mode: 'Classroom Greater Noida' });

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      setLeadForm({ name: '', email: '', phone: '', mode: 'Classroom Greater Noida' });
    }, 500);
  };

  return (
    <div className="pt-24 space-y-20 animate-fadeIn">
      
      {/* 1. Hero Header Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                <Binary className="w-3.5 h-3.5" />
                <span>{dsa.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {dsa.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {dsa.heroDesc}
              </p>

              {/* Quick Stat Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Course Duration</p>
                  <p className="text-sm font-black text-white">{dsa.duration}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Average SDE CTC</p>
                  <p className="text-sm font-black text-emerald-400">{dsa.avgSalary}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 col-span-2 sm:col-span-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Highest Package</p>
                  <p className="text-sm font-black text-brand-300">{dsa.highestSalary}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 to-accent-primary hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
                >
                  <span>Book Free 2-Day Trial Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#curriculum"
                  className="px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-slate-300 bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>View 12-Module Syllabus</span>
                </a>
              </div>
            </div>

            {/* Fast Application Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-2xl space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">Interview Crack Batch</span>
                  <h3 className="text-xl font-black">Reserve Next DSA Batch</h3>
                  <p className="text-xs text-slate-500">C++ / Java / Python • 300+ LeetCode Drills • System Design</p>
                </div>

                {enquirySuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 text-center space-y-3 animate-fadeIn">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Query Received!</h4>
                    <p className="text-xs text-slate-500">Our senior coding mentor will call you with details.</p>
                    <button onClick={() => setEnquirySuccess(false)} className="text-xs text-brand-600 font-bold underline">
                      Submit another query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <input 
                      required 
                      type="text" 
                      placeholder="Your Full Name *" 
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                    <input 
                      required 
                      type="email" 
                      placeholder="Email Address *" 
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                    <input 
                      required 
                      type="tel" 
                      placeholder="WhatsApp / Phone Number *" 
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({...leadForm, phone: e.target.value})}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                    <select
                      value={leadForm.mode}
                      onChange={(e) => setLeadForm({...leadForm, mode: e.target.value})}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    >
                      <option value="Classroom Greater Noida">Classroom Batch (Greater Noida Center)</option>
                      <option value="Live Online Interactive">Live Online Interactive Batch</option>
                      <option value="Weekend Professional Batch">Weekend Professional Batch</option>
                    </select>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Apply For Scholarship & Free Demo</span>
                    </button>
                  </form>
                )}

                <div className="flex items-center justify-center space-x-3 text-[11px] text-slate-400">
                  <span className="flex items-center space-x-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> <span>FAANG Curriculum</span></span>
                  <span>•</span>
                  <span>1-on-1 Mock Interviews</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Overview & Unique Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 border border-brand-200 text-brand-700 dark:bg-brand-950/70 dark:border-brand-800 dark:text-brand-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Algorithmic Excellence</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Why Master DSA with Yukti Software?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {dsa.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dsa.uniqueFeatures.map((feat, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                0{i + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{feat.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Who Can Enroll & Prerequisites */}
      <section className="bg-slate-100/60 dark:bg-slate-900/40 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-brand-600" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Who Can Enroll in This Course?</h3>
              </div>
              <div className="space-y-3">
                {dsa.whoCanEnroll.map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-accent-primary" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">What You Need to Know</h3>
              </div>
              <div className="space-y-3">
                {dsa.prerequisites.map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-xs text-brand-700 dark:text-brand-300 font-medium">
                💡 <strong>Language Agnostic:</strong> You can code in C++, Java, or Python. We focus on building problem-solving intuition and algorithmic logic.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Complete 12-Module Curriculum */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 border border-brand-200 text-brand-700 dark:bg-brand-950/70 dark:border-brand-800 dark:text-brand-300">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete 12-Module DSA Master Plan</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            DSA Course Curriculum & Problem Patterns
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From Big-O analysis to advanced Dynamic Programming, Graphs, and System Design interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dsa.modules.map((mod, idx) => {
            const isOpen = openModuleIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenModuleIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {mod.num}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{mod.name}</h4>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-brand-500" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 bg-slate-50/50 dark:bg-slate-950/40">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Topics Covered:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {mod.topics.map((t, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Career Opportunities & Salary Table */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black">High-Paying Career Opportunities in Top Tech</h2>
            <p className="text-xs sm:text-sm text-slate-300">SDE-1, SDE-2, and Product Engineering packages at leading tech firms.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <thead>
                <tr className="bg-slate-800 text-slate-300 font-bold border-b border-slate-700">
                  <th className="p-4">Job Role</th>
                  <th className="p-4">Key Responsibilities</th>
                  <th className="p-4">Average Salary in India</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {dsa.careerOpportunities.map((job, i) => (
                  <tr key={i} className="hover:bg-slate-900/60 transition-colors">
                    <td className="p-4 font-bold text-brand-400">{job.role}</td>
                    <td className="p-4 text-slate-300">{job.desc}</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">{job.salaryIndia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-brand-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500">Everything you need to know about the DSA Course in Greater Noida.</p>
        </div>

        <div className="space-y-3">
          {dsa.faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : i)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-brand-600"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-brand-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-8 text-center">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-2xl bg-brand-600 text-white font-bold text-xs shadow-xl hover:bg-brand-500 transition-colors"
          >
            Schedule 1-on-1 Profile Evaluation & Demo
          </button>
        </div>
      </section>

    </div>
  );
}
