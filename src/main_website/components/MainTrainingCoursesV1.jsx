import React, { useState } from 'react';
import { 
  BookOpen, CheckCircle2, Award, Clock, ArrowRight, 
  Sparkles, ShieldCheck, Flame, Users, FileText, Download 
} from 'lucide-react';
import { useSiteData } from '../hooks/useSiteData';

export default function MainTrainingCoursesV1({ onOpenConsultation }) {
  const { data } = useSiteData();
  const courses = data.courses || [];
  const [selectedCourse, setSelectedCourse] = useState(null);

  const assurances = [
    { title: '100% Placement Assurance', desc: 'Unlimited interview drives with 150+ hiring partners until you sign your offer letter.' },
    { title: 'Live Production Capstones', desc: 'Push real code to production GitHub repos with code reviews by senior architects.' },
    { title: '1-on-1 Senior Mentorship', desc: 'Direct access to architects with 10+ years experience in top MNCs & product firms.' },
    { title: 'Small Batch Size (Max 15)', desc: 'Guaranteed personalized attention, interactive live labs, and weekly doubt sprints.' },
    { title: 'ISO 9001:2015 Certification', desc: 'Recognized industry certification to elevate your corporate resume credibility.' },
    { title: 'Lifetime Alumni Access', desc: 'Free access to curriculum updates, community hackathons, and lifetime job referrals.' }
  ];

  return (
    <section id="courses" className="py-20 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Industrial Training V1</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Career Accelerator Training Tracks
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Industry-crafted curricula designed to take you from foundational syntax to cracking 6 - 28 LPA job roles.
          </p>
        </div>

        {/* Dynamic Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id || course.title}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-xl hover:border-brand-500/50 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                    {course.badge || 'Bestseller'}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {course.title}
                </h3>

                <div className="my-4 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Salary Bracket</span>
                    <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">{course.avgSalary}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Placement Rate</span>
                    <span className="text-sm font-black text-brand-600 dark:text-brand-400">{course.hiringRate}</span>
                  </div>
                </div>

                <div className="space-y-2.5 my-4">
                  {course.features?.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <button 
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Enroll in Next Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => setSelectedCourse(course)}
                  className="w-full py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  <span>View Full Syllabus</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Core Student Assurances Grid */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              The Yukti 6-Pillar Student Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Every student enrolled in our career programs is backed by our proven training methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assurances.map((ass, aIdx) => (
              <div key={aIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-500" />
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">{ass.title}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{ass.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">{selectedCourse.title}</h4>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2 text-xs text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-brand-600 dark:text-brand-400">Complete Syllabus Breakdown & Modules:</p>
                {selectedCourse.features?.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-800">
                    Module {idx + 1}: {item}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 pt-3">
                <button 
                  onClick={() => { setSelectedCourse(null); onOpenConsultation(); }}
                  className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs rounded-xl shadow"
                >
                  Download Syllabus PDF & Apply
                </button>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
