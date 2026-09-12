import React, { useState } from 'react';
import { siteData } from '../data';
import { useCustomizer } from '../context/CustomizerContext';
import VariantSwitcherBar from './VariantSwitcherBar';
import Icon from './Icon';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Check,
  GraduationCap,
  Briefcase,
  Layers,
  Calendar,
  DollarSign
} from 'lucide-react';

export default function TrainingCourses({ onOpenConsultation }) {
  const { trainingSection } = siteData;
  const { trainingVariant, setTrainingVariant, TRAINING_VARIANTS } = useCustomizer();
  const [activeCourseTab, setActiveCourseTab] = useState(trainingSection.courses[0].id);

  const selectedCourse = trainingSection.courses.find(c => c.id === activeCourseTab) || trainingSection.courses[0];

  return (
    <section id="training" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{trainingSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {trainingSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {trainingSection.description}
          </p>
        </div>

        {/* 10-Variant Switcher Bar */}
        <VariantSwitcherBar
          currentVariant={trainingVariant}
          setVariant={setTrainingVariant}
          variants={TRAINING_VARIANTS}
          label="Training Layout"
        />

        {/* ========================================================================= */}
        {/* V1: BENTO COURSE GRID */}
        {/* ========================================================================= */}
        {trainingVariant === 'v1_bento' && (
          <div className="space-y-16 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingSection.features.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feat.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">Industry Curated Modules</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Featured Career Trajectories</h3>
                </div>
                <p className="text-sm text-slate-300 max-w-md">Live practical project work, 1-on-1 mentor guidance, and placement drives at top tech firms.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {trainingSection.courses.map((course) => (
                  <div key={course.id} className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-3xl p-6 backdrop-blur-md transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">{course.tag}</span>
                      <h4 className="text-lg font-bold text-white leading-snug">{course.name}</h4>
                      <div className="space-y-2 py-2 border-y border-white/10 text-xs text-slate-300">
                        <div className="flex justify-between"><span className="text-slate-400">Duration:</span><span className="font-bold text-white">{course.duration}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Target Package:</span><span className="font-bold text-emerald-400">{course.avgPackage}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Placement Record:</span><span className="font-bold text-accent-primary">{course.placementStat}</span></div>
                      </div>
                    </div>
                    <button onClick={onOpenConsultation} className="w-full mt-4 py-2.5 px-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-brand-50 flex items-center justify-center space-x-1.5 shadow">
                      <span>Free Career Counseling</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V2: CAREER PATHWAY STEPPER */}
        {/* ========================================================================= */}
        {trainingVariant === 'v2_pathway' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Foundation & Core", desc: "Python / JS / DSA logic building with advanced lab sessions" },
                { step: "02", title: "Live Enterprise Project", desc: "Build industry-scale production full stack or ML applications" },
                { step: "03", title: "1-on-1 Mentor Audits", desc: "Mock interviews, code reviews, and resume polishing by CTOs" },
                { step: "04", title: "Placement Drives", desc: "Direct interview access at 45+ partnered tech enterprises" },
              ].map((p, idx) => (
                <div key={idx} className="p-6 rounded-3xl glass-card border border-brand-500/20 text-center space-y-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-600 text-white font-extrabold text-sm inline-flex items-center justify-center">{p.step}</span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{p.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Confused about which tech track fits you best?</h4>
                <p className="text-xs text-slate-500 mt-1">Book a 1-on-1 profile evaluation call with our senior engineering mentors.</p>
              </div>
              <button onClick={onOpenConsultation} className="px-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-xs flex-shrink-0">
                Book Free Profile Evaluation Call
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V3: SALARY COMPARISON DECK */}
        {/* ========================================================================= */}
        {trainingVariant === 'v3_salaryCompare' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            {trainingSection.courses.map((course) => (
              <div key={course.id} className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-brand-600 dark:text-brand-400">{course.duration} Intensive Track</span>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{course.name}</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-xs">{course.placementStat}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 text-white flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase">Target Salary Range</p>
                      <p className="text-2xl font-black text-emerald-400">{course.avgPackage}</p>
                    </div>
                    <Award className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {course.topics.map((t, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <button onClick={onOpenConsultation} className="w-full mt-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-xs">
                  Apply for Next Batch & Scholarships
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V4: DEEP CURRICULUM EXPLORER */}
        {/* ========================================================================= */}
        {trainingVariant === 'v4_curriculumTabs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            <div className="lg:col-span-5 space-y-2">
              {trainingSection.courses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setActiveCourseTab(course.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    activeCourseTab === course.id
                      ? 'bg-brand-600 text-white border-brand-600 shadow-md'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <p className="text-xs font-bold uppercase">{course.tag}</p>
                  <h4 className="text-base font-black">{course.name}</h4>
                </button>
              ))}
            </div>
            <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white">{selectedCourse.name}</h4>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs">{selectedCourse.avgPackage}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Designed by enterprise mentors covering modern frameworks, automated testing pipelines, and real-world deployment on cloud servers.
              </p>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum Modules</p>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCourse.topics.map((t, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center space-x-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                      <Check className="w-4 h-4 text-brand-600" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={onOpenConsultation} className="w-full py-3 rounded-xl bg-brand-600 text-white font-bold text-xs">Download Full Syllabus & Register</button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V5: 1-ON-1 MENTORSHIP PODS */}
        {/* ========================================================================= */}
        {trainingVariant === 'v5_mentorshipSpotlight' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {[
              { title: "Practical Lab Sessions", desc: "Live coding with real production server instances and cloud sandbox environments.", icon: "Terminal" },
              { title: "Personalized 1-on-1 Mentorship", desc: "Direct daily doubt sessions with senior architects to ensure zero confusion.", icon: "Users" },
              { title: "Placement Drive Assurance", desc: "Interview scheduling and corporate referrals with no hidden costs.", icon: "Award" }
            ].map((p, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center"><Icon name={p.icon} className="w-6 h-6 text-white" /></div>
                  <h4 className="text-xl font-bold">{p.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
                <button onClick={onOpenConsultation} className="w-full py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/10">Speak with Faculty Mentor</button>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V6: TECH SKILL RADAR MATRIX */}
        {/* ========================================================================= */}
        {trainingVariant === 'v6_skillRadar' && (
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-fadeIn">
            <h4 className="text-xl font-black text-slate-900 dark:text-white text-center">Tech Stack Mastery & Recruiter Demand Matrix</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Full Stack React/Node', 'Data Science & Python', 'AWS & Cloud DevOps', 'Database & API Security'].map((s, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-center space-y-2">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{s}</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-600 h-full rounded-full" style={{ width: `${85 + i * 4}%` }}></div>
                  </div>
                  <p className="text-[10px] text-emerald-600 font-bold">{85 + i * 4}% Job Match</p>
                </div>
              ))}
            </div>
            <button onClick={onOpenConsultation} className="w-full py-3 rounded-xl bg-brand-600 text-white font-bold text-xs">Run Your Free Skill Gap Assessment</button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V7: COURSE CATALOG SHOWCASE */}
        {/* ========================================================================= */}
        {trainingVariant === 'v7_courseCatalog' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {trainingSection.courses.map((c) => (
              <div key={c.id} className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold text-brand-600 uppercase">{c.duration}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{c.name}</h4>
                  <p className="text-xs text-emerald-600 font-bold">{c.avgPackage}</p>
                </div>
                <button onClick={onOpenConsultation} className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl shadow">Enroll</button>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V8: UPCOMING BATCHES & DEADLINES */}
        {/* ========================================================================= */}
        {trainingVariant === 'v8_liveBatches' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {[
              { batch: "Weekend Fast-Track", date: "Starts Next Saturday", seats: "4 Seats Left" },
              { batch: "Full-Time Immersive", date: "Starts Monday", seats: "2 Seats Left" },
              { batch: "Evening Pro Track", date: "Starts 1st of Next Month", seats: "Filling Fast" }
            ].map((b, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-900 text-white border border-brand-500/30 space-y-4 text-center">
                <Calendar className="w-8 h-8 text-brand-400 mx-auto" />
                <h4 className="text-lg font-bold">{b.batch}</h4>
                <p className="text-xs text-slate-400">{b.date}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">{b.seats}</span>
                <button onClick={onOpenConsultation} className="w-full py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl">Reserve Seat</button>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V9: DAY IN LIFE OF STUDENT */}
        {/* ========================================================================= */}
        {trainingVariant === 'v9_studentJourney' && (
          <div className="max-w-3xl mx-auto space-y-4 animate-fadeIn">
            {[
              { time: "10:00 AM", title: "Live Lab Session & Concept Deep Dive" },
              { time: "02:00 PM", title: "Hands-on Code Sprint on Real Server Projects" },
              { time: "05:00 PM", title: "1-on-1 Doubt Clearing with Senior CTO" },
              { time: "07:00 PM", title: "Mock Technical Interview & Placement Drill" }
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-2xl glass-card flex items-center space-x-4">
                <span className="px-3 py-1 bg-brand-600 text-white font-mono text-xs font-bold rounded-lg">{s.time}</span>
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{s.title}</p>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V10: TUITION VS CAREER ROI CALCULATOR */}
        {/* ========================================================================= */}
        {trainingVariant === 'v10_tuitionRoi' && (
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center space-y-6 shadow-2xl animate-fadeIn">
            <DollarSign className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-2xl font-black">Zero Hidden Fees. Exponential Career ROI.</h4>
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950">
              <div><p className="text-xs text-slate-400">Average Starting Salary</p><p className="text-2xl font-black text-emerald-400">₹6.8 LPA</p></div>
              <div><p className="text-xs text-slate-400">Highest Salary Tier</p><p className="text-2xl font-black text-brand-400">₹16.0 LPA</p></div>
            </div>
            <button onClick={onOpenConsultation} className="w-full py-3 bg-brand-600 text-white font-bold text-xs rounded-xl">
              Calculate Your Expected Package & Apply
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DOCX REFERENCE VARIANT: ITRANSITION 6-CORE ASSURANCES & COURSES */}
        {/* ========================================================================= */}
        {trainingVariant === 'v_docx_itransition' && (
          <div className="space-y-12 animate-fadeIn">
            
            {/* 6 Core Assurances Grid directly from Document */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Advanced Lab Sessions for Practical Education", desc: "Hands-on coding terminals and live sandbox servers for real-world development.", icon: "Terminal" },
                { title: "Job-Oriented Curriculums", desc: "Syllabus aligned with modern recruiter demands and industry frameworks.", icon: "Briefcase" },
                { title: "Comprehensive Study Material for All Candidates", desc: "Curated documentation, code repositories, cheatsheets, and interview problem sets.", icon: "BookOpen" },
                { title: "Personalized Learning with 1-on-1 Doubt Sessions", desc: "Dedicated faculty touchpoints to clear architectural and coding blockers.", icon: "Users" },
                { title: "Career Support & Guidance by Professionals", desc: "Resume reviews, mock technical interviews, and direct placement assistance.", icon: "GraduationCap" },
                { title: "100% Transparent Structure - No Hidden Fees", desc: "Clear upfront fee schedule with zero surprise costs and scholarship opportunities.", icon: "ShieldCheck" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start space-x-3.5 group hover:border-brand-500/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Flagship Tracks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainingSection.courses.map((course, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                      {course.duration} • {course.level}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{course.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{course.description}</p>
                  </div>
                  <button onClick={onOpenConsultation} className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow transition-colors">
                    Enroll in Job-Ready Track
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
