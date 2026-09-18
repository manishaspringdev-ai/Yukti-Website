import React, { useState } from 'react';
import { docxPagesData } from '../data/pagesDataFromDocs';
import { 
  Sparkles, 
  Terminal, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Clock, 
  Award, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Calendar,
  Layers,
  Zap,
  HelpCircle,
  Briefcase,
  Code2,
  Database,
  ArrowLeft,
  TrendingUp,
  Flame,
  Target,
  Laptop,
  Cpu,
  CheckCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getCourseImages } from '../data/courseImages';

// Helper to get smart icons for benefits
const getBenefitIcon = (title = '', desc = '', idx = 0) => {
  const t = (title + ' ' + desc).toLowerCase();
  if (t.includes('mentor') || t.includes('trainer') || t.includes('faculty')) return Users;
  if (t.includes('project') || t.includes('real-world') || t.includes('web page')) return Laptop;
  if (t.includes('code') || t.includes('syntax') || t.includes('function')) return Code2;
  if (t.includes('concept') || t.includes('fundamental') || t.includes('foundation')) return BookOpen;
  if (t.includes('placement') || t.includes('job') || t.includes('career') || t.includes('interview')) return Briefcase;
  if (t.includes('algorithm') || t.includes('logic') || t.includes('data structure')) return Cpu;
  if (t.includes('database') || t.includes('sql') || t.includes('mongodb')) return Database;
  if (t.includes('certif') || t.includes('award') || t.includes('recogni')) return Award;
  if (t.includes('speed') || t.includes('perform') || t.includes('scale')) return Zap;
  if (t.includes('practice') || t.includes('assignment') || t.includes('exercise')) return Terminal;
  
  const fallbackIcons = [Target, TrendingUp, Sparkles, ShieldCheck, Flame, Layers];
  return fallbackIcons[idx % fallbackIcons.length];
};

export default function CourseDetailPage({ courseKey = 'python', onOpenConsultation, setCurrentPage }) {
  // Find course from docxPagesData
  const course = docxPagesData.courses[courseKey] || docxPagesData.courses['python'] || {};
  const courseImages = getCourseImages(courseKey);

  // Clean headline from any legacy doc prefixes
  const rawHeadline = course.headline || course.title || '';
  const cleanHeadline = rawHeadline
    .replace(/^Webpage for Yukti Software\s*[\|\-:]?\s*/i, '')
    .trim() || course.title;
  
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

  const toggleModule = (idx) => {
    setOpenModuleIndex(openModuleIndex === idx ? -1 : idx);
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  return (
    <div className="pt-0 sm:pt-1 space-y-8 sm:space-y-10 animate-fadeIn text-slate-900 dark:text-slate-100 pb-12">
      
      {/* Top Header & Breadcrumb Container */}
      <div className="space-y-2 sm:space-y-2.5">
        {/* Navigation Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setCurrentPage && setCurrentPage('courses')}
            className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All 15 Career Tracks & Courses</span>
          </button>
        </div>

        {/* 1. Hero Header Section */}
        <section className="relative overflow-hidden py-8 sm:py-12 lg:py-14 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-800/80 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-xl dark:shadow-2xl">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {cleanHeadline}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {course.description || "Master enterprise-grade engineering with live project capstones, verified mentorship, and 100% placement support."}
              </p>

              {course.keywords && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {course.keywords.split(',').slice(0, 4).map((kw, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      🏷️ {kw.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Quick Assurances */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>100% Practical Labs</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Interview Prep & Mocks</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Placement Assurance</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 sm:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-primary text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-brand-500/25 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
                >
                  <span>Book Free 1-on-1 Demo Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.querySelector('#syllabus-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 sm:px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white font-bold text-xs sm:text-sm border border-slate-200 dark:border-white/20 transition-all flex items-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Full Syllabus ({course.curriculum?.length || 12} Modules)</span>
                </button>
              </div>
            </div>

            {/* Quick Enrollment Card */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-7 rounded-3xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl backdrop-blur-xl relative">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">Enroll in Upcoming Batch</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Limited seats • 1-on-1 Faculty Mentorship</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 animate-pulse">
                      Admissions Open
                    </span>
                  </div>

                  {enquirySuccess ? (
                    <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/40 text-center space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Request Received!</h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">Our senior career counselor will call you within 15 minutes with syllabus PDF & scholarship details.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Manish Sharma"
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 outline-none placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="manish@example.com"
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 outline-none placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">WhatsApp / Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 outline-none placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Training Mode</label>
                        <select
                          value={leadForm.mode}
                          onChange={(e) => setLeadForm({ ...leadForm, mode: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-brand-500 outline-none"
                        >
                          <option value="Classroom Greater Noida">Classroom (Greater Noida Center)</option>
                          <option value="Live Online Interactive">Live Online Interactive (Global)</option>
                          <option value="Weekend Fast-Track">Weekend Professional Batch</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-primary text-white font-black text-xs shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        Get Syllabus PDF & Claim Scholarship
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      </div>

      {/* 3-Image Real Lab & Mentorship Showcase Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Hands-On Experience & Career Environment
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Real interactive coding labs, senior 1-on-1 code reviews, and guaranteed placement drives in Greater Noida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group h-64 sm:h-72 flex flex-col justify-end p-5"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              
              <div className="relative z-10 space-y-1.5 text-white">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-xl bg-brand-500/30 backdrop-blur-md text-[10px] font-bold text-brand-300 border border-brand-400/40">
                    {img.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300">
                    Photo 0{idx + 1}/03
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white drop-shadow leading-snug">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-300 drop-shadow line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. REAL COURSE BENEFITS SECTION (Parsed from DOCX) */}
      {course.courseBenefits && course.courseBenefits.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <Flame className="w-3.5 h-3.5 text-emerald-500" />
              <span>Real Career Impact</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Benefits of Enrolling in This Course
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Detailed breakdown of practical skills, industry advantages, and career outcomes guaranteed from this training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.courseBenefits.map((b, idx) => {
              const IconComp = getBenefitIcon(b.title, b.desc, idx);
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all space-y-4 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm border border-emerald-200/60 dark:border-emerald-800/60">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-black text-slate-400 dark:text-slate-500 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                        0{idx + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {b.title}
                    </h3>
                    
                    {b.desc && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {b.desc}
                      </p>
                    )}
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Outcome</span>
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                      Skill Module
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. Key Highlights & Approach Section (from DOCX) */}
      {course.keyHighlights && course.keyHighlights.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
              <Zap className="w-3.5 h-3.5" />
              <span>Standout Advantages</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Why This Course Takes a Different Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.keyHighlights.map((hl, idx) => {
              const IconComp = getBenefitIcon(hl.title, hl.desc, idx + 3);
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/40 transition-all space-y-3.5 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm border border-brand-200/60 dark:border-brand-800/60">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {hl.title}
                    </h3>
                    {hl.desc && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {hl.desc}
                      </p>
                    )}
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-1.5 text-[11px] font-bold text-brand-600 dark:text-brand-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Yukti Pedagogical Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. Target Audience / Who Can Enroll Section (from DOCX) */}
      {course.targetAudience && course.targetAudience.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400">
              <Target className="w-5 h-5 text-brand-500" />
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Who Can Consider Enrolling?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.targetAudience.map((aud, aIdx) => (
                <div key={aIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{aud}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Deep Curriculum Syllabus Accordions (Strictly M1 to Mn from DOCX) */}
      {course.curriculum && course.curriculum.length > 0 && (
        <section id="syllabus-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Complete Step-by-Step Curriculum</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Industry Curated Training Syllabus ({course.curriculum.length} Modules)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Every module is accompanied by hands-on laboratory exercises, coding assignments, and real-world capstones.
            </p>
          </div>

          <div className="space-y-3">
            {course.curriculum.map((mod, idx) => {
              const isOpen = openModuleIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'border-brand-500 bg-white dark:bg-slate-900 shadow-lg' 
                      : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleModule(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                        isOpen ? 'bg-brand-600 text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        M{idx + 1}
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                        {mod.moduleTitle}
                      </h3>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-brand-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>

                  {isOpen && mod.topics && mod.topics.length > 0 && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {mod.topics.map((top, tIdx) => (
                          <li key={tIdx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5" />
                            <span>{top}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. Career Roles & Salary Packages Table (from DOCX) */}
      {course.careerRolesTable && course.careerRolesTable.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Opportunities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Target Job Roles & Salary Packages
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-extrabold">
                  <th className="p-4 sm:p-5">Target Job Profile</th>
                  <th className="p-4 sm:p-5">Key Responsibilities</th>
                  <th className="p-4 sm:p-5">Skills & Packages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {course.careerRolesTable.map((role, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-brand-600 dark:text-brand-400 flex items-center space-x-2">
                      <Award className="w-4 h-4 flex-shrink-0 text-amber-500" />
                      <span>{role.role}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300">
                      {role.responsibilities}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-slate-800 dark:text-slate-200">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
                        {role.skillsOrPackage || "₹5.0 - ₹18 LPA"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 7. FAQs Section (from DOCX) */}
      {course.faqs && course.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {course.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div 
                  key={fIdx}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'border-brand-500 bg-white dark:bg-slate-900 shadow-md' 
                      : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand-600 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                  </button>

                  {isOpen && faq.answer && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 8. Bottom Free Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-800 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <Sparkles className="absolute -top-10 -left-10 w-40 h-40 text-white/10" />
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Ready to Accelerate Your Career with Yukti Software?
          </h2>
          <p className="text-sm sm:text-base text-brand-100 max-w-2xl mx-auto">
            Book a free career counseling and live demo session with our senior faculty. Get your personalized roadmap today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-2xl bg-white text-slate-950 font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Schedule Free 1-on-1 Consultation
            </button>
            <button
              onClick={() => setCurrentPage && setCurrentPage('courses')}
              className="px-6 py-4 rounded-2xl bg-black/20 hover:bg-black/30 text-white font-bold text-sm border border-white/30 transition-all"
            >
              Explore Other 14 Courses
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
