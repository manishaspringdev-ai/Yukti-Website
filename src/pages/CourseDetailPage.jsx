import React, { useState, useEffect } from 'react';
import { submitEnquiry } from '../services/leadService';
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
import { getActiveBatches } from '../services/batchService';
import { useCourses } from '../context/CoursesContext';

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

// Helper for balanced, gap-free grid layouts according to item counts
const getCardGridClass = (count = 3) => {
  if (count === 1) return 'grid grid-cols-1 max-w-2xl mx-auto gap-5 sm:gap-6';
  if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-5 sm:gap-6';
  if (count === 4) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6';
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6';
};

export default function CourseDetailPage({ courseKey = 'python', onOpenConsultation, setCurrentPage }) {
  const { courseCount } = useCourses();
  // Find course from docxPagesData
  const course = docxPagesData.courses[courseKey] || docxPagesData.courses['python'] || {};
  const courseImages = getCourseImages(courseKey);

  // Clean headline from any legacy doc prefixes
  const rawHeadline = course.headline || course.title || '';
  const cleanHeadline = rawHeadline
    .replace(/^Web\s*Page\s+for\s+Yukti\s+(Software|Solutions|Tech)?\s*[\|\-:]?\s*/i, '')
    .replace(/^Webpage\s+for\s+Yukti\s+(Software|Solutions|Tech)?\s*[\|\-:]?\s*/i, '')
    .replace(/^Yukti\s+(Software|Solutions)\s*[\|\-:]?\s*/i, '')
    .trim() || course.title;
  
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', mode: 'Classroom Greater Noida' });
  const [relatedBatches, setRelatedBatches] = useState([]);
  const [batchesLoading, setBatchesLoading] = useState(true);

  // Fetch upcoming batches related specifically to this course from Firestore
  useEffect(() => {
    let isMounted = true;
    async function fetchCourseBatches() {
      try {
        setBatchesLoading(true);
        const allBatches = await getActiveBatches();
        if (isMounted) {
          const normKey = (courseKey || '').toLowerCase().replace(/[-_]/g, ' ');
          const normTitle = (course.title || '').toLowerCase();

          const matched = allBatches.filter(b => {
            const bName = (b.courseName || '').toLowerCase();
            return (
              bName.includes(normTitle) ||
              normTitle.includes(bName) ||
              (normKey.length > 2 && bName.includes(normKey))
            );
          });
          setRelatedBatches(matched);
        }
      } catch (err) {
        console.warn('Error fetching course batches:', err);
      } finally {
        if (isMounted) setBatchesLoading(false);
      }
    }
    fetchCourseBatches();
    return () => { isMounted = false; };
  }, [courseKey, course.title]);

  useEffect(() => {
    if (course.title) {
      document.title = `${course.title} in Greater Noida | Practical Training & Placements - Yukti Software`;
    }
  }, [course.title]);

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });

    try {
      await submitEnquiry({
        type: 'course_enquiry',
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone,
        course: course.title || courseKey,
        mode: leadForm.mode,
        message: `Course Enrollment enquiry for ${course.title || courseKey} (${leadForm.mode})`,
        metadata: {
          courseKey,
          formSource: 'Course Detail Page - Batch Enrollment Form'
        }
      });
    } catch (err) {
      console.error('Course lead submit error:', err);
    }

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
    <div className="space-y-8 sm:space-y-10 text-slate-900 dark:text-slate-100 pb-12">
      
      {/* Top Header & Breadcrumb Container */}
      <div className="pt-3 sm:pt-5 space-y-2.5 sm:space-y-3">
        {/* Navigation Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setCurrentPage && setCurrentPage('courses')}
            className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-all group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-3.5 py-1.5 rounded-xl shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All {courseCount} Career Tracks & Courses</span>
          </button>
        </div>

        {/* 1. Hero Header Section */}
        <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-5 sm:pb-8 lg:pb-9 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-800/80 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-xl dark:shadow-2xl">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
            
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              
              <div className="space-y-2.5">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-snug">
                  {cleanHeadline}
                </h1>

                <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {course.description || "Master enterprise-grade engineering with live project capstones, verified mentorship, and 100% placement support."}
                </p>
              </div>

              {/* 4-Stat Compact Metric Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-left px-2">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Duration</p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white mt-0.5">4-6 Months</p>
                </div>
                <div className="text-left px-2 border-l border-slate-200 dark:border-slate-700">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Format</p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white mt-0.5">Labs + Live</p>
                </div>
                <div className="text-left px-2 sm:border-l border-slate-200 dark:border-slate-700">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Batch Size</p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white mt-0.5">Max 15 Seats</p>
                </div>
                <div className="text-left px-2 border-l border-slate-200 dark:border-slate-700">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Placement</p>
                  <p className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">100% Support</p>
                </div>
              </div>

              {/* Quick Key Highlights */}
              <div className="flex flex-wrap gap-1.5 text-xs">
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/60 text-[10px] sm:text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>100% Practical Labs</span>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/60 text-[10px] sm:text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Live Project Capstones</span>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/60 text-[10px] sm:text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>1-on-1 Mentorship</span>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/60 text-[10px] sm:text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Interview Prep & Mocks</span>
                </div>
              </div>

              {/* CTA Buttons - One-liner side-by-side on mobile, flex on desktop */}
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3 pt-0.5">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-600 to-accent-primary text-white font-bold sm:font-extrabold text-[11px] sm:text-sm shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-1 sm:space-x-2 text-center"
                >
                  <span className="truncate">Book Free Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 hidden sm:inline-block" />
                </button>
                <button
                  onClick={() => {
                    const el = document.querySelector('#syllabus-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white font-bold text-[11px] sm:text-sm border border-slate-200 dark:border-white/20 transition-all flex items-center justify-center space-x-1 sm:space-x-2 text-center"
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">View Syllabus</span>
                </button>
              </div>
            </div>

            {/* Quick Enrollment Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-4 sm:p-5 lg:p-6 rounded-3xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl backdrop-blur-xl relative">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">Enroll in Upcoming Batch</h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Limited seats • 1-on-1 Mentorship</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
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
                    <form onSubmit={handleLeadSubmit} className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
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
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
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
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">WhatsApp / Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 95828 15419"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 outline-none placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Training Mode</label>
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
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-primary text-white font-black text-xs sm:text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <span>Enroll Now in Batch</span>
                        <ArrowRight className="w-4 h-4" />
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

      {/* SECTION 2: How This Course Takes a Different Approach */}
      {course.differentApproach ? (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {course.differentApproach.heading}
            </h2>
            {course.differentApproach.intro && (
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-5xl">
                {course.differentApproach.intro}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-2">
            {course.differentApproach.points.map((pt, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-2 flex flex-col justify-start"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-xs shrink-0 border border-brand-200 dark:border-brand-800">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Career Benefits Section (if present) */}
      {course.careerBenefits && course.careerBenefits.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-left space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {course.careerBenefitsHeading || 'Career Benefits of Learning'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 pt-2">
            {course.careerBenefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-2.5 flex flex-col justify-start"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-200 dark:border-emerald-800">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    {b.title.replace(/^\d+\.\s*/, '')}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Fallback Legacy Highlights/Benefits if neither differentApproach nor careerBenefits is provided */}
      {!course.differentApproach && !course.careerBenefits && (
        <>
          {course.courseBenefits && course.courseBenefits.length > 0 && (
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              <div className="text-left space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Benefits of Enrolling in This Course
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Practical skills, industry advantages, and career outcomes guaranteed from this training.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
                  {course.courseBenefits.map((b, idx) => {
                    const isGenericTitle = !b.title || /^key benefit|^benefit/i.test(b.title.trim());
                    const displayTitle = !isGenericTitle && b.title !== b.desc ? b.title : null;
                    const displayText = b.desc || b.title;

                    return (
                      <div key={idx} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800">
                          <ArrowRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">
                          {displayTitle && <strong className="text-slate-900 dark:text-white mr-1.5">{displayTitle}:</strong>}
                          <span>{displayText}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {course.keyHighlights && course.keyHighlights.length > 0 && (
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              <div className="text-left space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Why This Course Takes a Different Approach
                </h2>
              </div>

              <div className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
                  {course.keyHighlights.map((hl, idx) => {
                    const isGenericTitle = !hl.title || /^key highlight|^key benefit|^highlight/i.test(hl.title.trim());
                    const displayTitle = !isGenericTitle && hl.title !== hl.desc ? hl.title : null;
                    const displayText = hl.desc || hl.title;

                    return (
                      <div key={idx} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5 border border-brand-200 dark:border-brand-800">
                          <ArrowRight className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">
                          {displayTitle && <strong className="text-slate-900 dark:text-white mr-1.5">{displayTitle}:</strong>}
                          <span>{displayText}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* SECTION 3: Who Can Consider Enrolling? */}
      {course.whoCanEnroll ? (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center space-x-2.5 text-brand-600 dark:text-brand-400">
              <Target className="w-6 h-6 text-brand-500" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {course.whoCanEnroll.heading}
              </h2>
            </div>
            
            {course.whoCanEnroll.intro && (
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {course.whoCanEnroll.intro}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {course.whoCanEnroll.points.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        course.targetAudience && course.targetAudience.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        )
      )}

      {/* SECTION 4: Things You Need to Know Before Enrolling */}
      {course.thingsToKnow && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center space-x-2.5 text-amber-600 dark:text-amber-400">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {course.thingsToKnow.heading}
              </h2>
            </div>

            {course.thingsToKnow.intro && (
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {course.thingsToKnow.intro}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {course.thingsToKnow.points.map((item, tIdx) => (
                <div key={tIdx} className="flex items-start space-x-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-xs">
                  <CheckCheck className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Deep Curriculum Syllabus Accordions (Strictly M1 to Mn from DOCX) */}
      {course.curriculum && course.curriculum.length > 0 && (
        <section id="syllabus-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {course.syllabusHeading || `${course.title || cleanHeadline} Syllabus`}
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

      {/* 5.5 Course Specific Upcoming Batches Section */}
      <section id="course-batches" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800/80 text-brand-700 dark:text-brand-300 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>BATCH SCHEDULE & SEAT AVAILABILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Upcoming Batches for {cleanHeadline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Choose from flexible weekday morning, evening, or weekend classroom batches at our Greater Noida center or join live interactive online sessions.
          </p>
        </div>

        {/* If Batches Exist in Firestore for this Course */}
        {relatedBatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedBatches.map((batch) => {
              const isFilling = (batch.status || '').toLowerCase().includes('filling');
              return (
                <div 
                  key={batch.id}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-mono font-extrabold text-[10px] tracking-wider border border-brand-200 dark:border-brand-800">
                        {batch.batchCode || 'BATCH'}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold flex items-center space-x-1 ${
                        isFilling
                          ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 animate-pulse'
                          : 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300'
                      }`}>
                        <Flame className="w-3 h-3 text-amber-600" />
                        <span>{batch.status || 'Upcoming - Open'}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-black text-slate-900 dark:text-white">
                      {batch.courseName}
                    </h3>

                    <div className="space-y-2 pt-1 text-xs">
                      <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                        <Calendar className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium">Start Date</span>
                          <span className="font-bold text-slate-900 dark:text-white">{batch.startDate}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                        <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium">Timings</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{batch.timing}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                        <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium">Mode</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{batch.mode}</span>
                        </div>
                      </div>

                      {batch.trainer && (
                        <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                          <Users className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Faculty</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{batch.trainer}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      ● {batch.seatsLeft || 5} Seats Available
                    </span>
                    <button
                      onClick={() => onOpenConsultation && onOpenConsultation({
                        type: 'student',
                        course: course.title || cleanHeadline,
                        batchCode: batch.batchCode
                      })}
                      className="py-2 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-accent-primary hover:from-brand-500 hover:to-accent-primary text-white font-extrabold text-xs shadow-md flex items-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <span>Enroll in this Batch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* General Batch Assistance Card when specific batch is not yet scheduled */
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  New Weekly & Weekend Batches Starting Soon
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                We organize fresh batches for <strong>{cleanHeadline}</strong> every week with max 15 students per cohort. Flexible slots (Morning, Evening, Weekend) are available at our Greater Noida Center & Live Online.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Placement Assistance</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Live Project Labs</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Up to 30% Scholarship</span>
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation && onOpenConsultation({
                type: 'student',
                course: course.title || cleanHeadline
              })}
              className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs shadow-md transition-all shrink-0 cursor-pointer"
            >
              Inquire Batch Timings & Fee
            </button>
          </div>
        )}
      </section>

      {/* 5.5 Career Opportunities Section (Specific to Software Training Course as per document) */}
      {(courseKey === 'software-development' || courseKey === 'software-training' || courseKey === 'software-development-course' || course.showCareerOpportunitiesSection) && course.careerOpportunities && course.careerOpportunities.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center sm:text-left space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {course.careerOpportunitiesHeading || `Career Opportunities after ${cleanHeadline}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              High-growth technical career paths open to our certified graduates across global tech companies and startups.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-1">
            {course.careerOpportunities.map((opportunity, oIdx) => (
              <div
                key={oIdx}
                className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-brand-500/60 hover:shadow-md transition-all flex items-center space-x-2.5 group"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">
                  {opportunity}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Career Roles & Industry Scope (Fully Responsive Mobile Cards & Desktop Table) */}
      {(() => {
        const rawRoles = course.careerRolesTable || course.careerTable || [];
        if (rawRoles.length === 0) return null;

        return (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {course.careerRolesHeading || "Target Job Roles & Industry Scope"}
              </h2>
            </div>

            {/* Desktop Table Layout (md and up) */}
            <div className="hidden md:block overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-extrabold">
                    <th className="p-4 sm:p-5 whitespace-nowrap w-1/4">Target Job Profile</th>
                    <th className="p-4 sm:p-5">Key Responsibilities</th>
                    <th className="p-4 sm:p-5 whitespace-nowrap w-64 text-right pr-6">
                      {rawRoles.some(r => r.skillsOrPackage) ? "Package / Placement Readiness" : "Placement Readiness"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {rawRoles.map((role, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-brand-600 dark:text-brand-400 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 flex-shrink-0 text-amber-500" />
                          <span>{role.role}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {role.responsibilities || role.skills || "Application Development & Architecture"}
                      </td>
                      <td className="p-4 sm:p-5 whitespace-nowrap text-right pr-6">
                        {role.skillsOrPackage ? (
                          <span className="inline-flex items-center whitespace-nowrap px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-extrabold border border-emerald-200 dark:border-emerald-800 text-xs">
                            {role.skillsOrPackage}
                          </span>
                        ) : (
                          <span className="inline-flex items-center whitespace-nowrap px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800 text-xs">
                            High Demand • Job-Ready
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Responsive Cards Layout (below md) */}
            <div className="md:hidden grid grid-cols-1 gap-3.5">
              {rawRoles.map((role, rIdx) => (
                <div 
                  key={rIdx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400">
                      <Award className="w-4 h-4 flex-shrink-0 text-amber-500" />
                      <span>{role.role}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800 text-[10px] shrink-0 whitespace-nowrap">
                      {role.skillsOrPackage || "High Demand • Job-Ready"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                    {role.responsibilities || role.skills || "Application Development & Architecture"}
                  </p>
                </div>
              ))}
            </div>
          </section>
        );
      })()}

      {/* 6.5 Why Choose Yukti Software Section */}
      {(() => {
        const why = course.whyChooseUs || course.whyChooseYukti;
        if (!why || (Array.isArray(why) && why.length === 0)) return null;

        const isObject = typeof why === 'object' && !Array.isArray(why);
        const heading = isObject ? (why.heading || `Why Choose Yukti Software for ${cleanHeadline}`) : `Why Choose Yukti Software`;
        const intro = isObject ? why.intro : null;
        const subheading = isObject ? why.subheading : null;
        const points = isObject ? (why.points || []) : why;

        return (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-brand-200/60 dark:border-brand-900/40 shadow-sm space-y-4">
              <div className="flex items-center space-x-2.5 text-brand-600 dark:text-brand-400">
                <Sparkles className="w-6 h-6 text-brand-500" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {heading}
                </h2>
              </div>

              {intro && (
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {intro}
                </p>
              )}

              {subheading && (
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 pt-1">
                  {subheading}
                </p>
              )}

              {points && points.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })()}

      {/* 7. FAQs Section (from DOCX) */}
      {(() => {
        const rawFaqs = course.faqs || [];
        const normalizedFaqs = rawFaqs.map(f => ({
          question: (f.question || f.q || '').trim(),
          answer: (f.answer || f.a || f.ans || '').trim()
        })).filter(f => f.question && f.answer);

        if (normalizedFaqs.length === 0) return null;

        return (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {normalizedFaqs.map((faq, fIdx) => {
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
        );
      })()}

      {/* 8. Bottom Free Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-800 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
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
              Explore All {courseCount} Career Tracks
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
