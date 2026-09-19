import React, { useState } from 'react';

import { getCourseLogo } from './TechLogos';
import { 
  GraduationCap, 
  Terminal, 
  Code2, 
  Binary, 
  ArrowRight, 
  Star, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Flame,
  ChevronRight,
  Layers,
  BookOpen,
  Briefcase,
  Zap,
  Play,
  Database,
  Cpu,
  Globe,
  Server
} from 'lucide-react';

const ALL_15_COURSES = [
  // Full Stack & Web
  { id: 'course-software-development', name: 'Software Development & Testing', category: 'Programming', badge: 'Accredited', mode: 'Job-Ready Track', icon: Code2, desc: 'SDLC, OOPs, DBMS, APIs, Testing, Git & Cloud' },
  { id: 'course-ai-fullstack', name: 'AI Full Stack Development', category: 'AI & Next-Gen', badge: 'Trending', mode: 'Live Practical', icon: Sparkles, desc: 'GenAI, LLMs, AI Agents, React & Node.js' },
  { id: 'course-java-fullstack', name: 'Java Full Stack & Microservices', category: 'Full Stack', badge: 'High Demand', mode: 'Enterprise Standard', icon: Code2, desc: 'React, Spring Boot 3, Kafka, Docker & AWS' },
  { id: 'course-mern-stack', name: 'MERN Stack Development', category: 'Full Stack', badge: 'Hot', mode: 'Full Stack JavaScript', icon: Layers, desc: 'MongoDB, Express, React, Node.js & Next.js' },
  { id: 'course-python-fullstack', name: 'Python Full Stack Developer', category: 'Full Stack', badge: 'Popular', mode: 'Web & APIs', icon: Terminal, desc: 'Python, Django REST, React & PostgreSQL' },
  { id: 'course-fullstack', name: 'Full Stack Web Engineering', category: 'Full Stack', badge: 'Job-Ready', mode: 'Production Capstone', icon: Globe, desc: 'HTML, CSS, JS, React, Node & Live Capstone' },
  { id: 'course-react-js', name: 'React JS & Modern Frontend', category: 'Frontend', badge: 'Essential', mode: 'Modern UI/UX', icon: Zap, desc: 'React 19, Redux Toolkit, Tailwind & APIs' },
  { id: 'course-html-css', name: 'HTML5 & Modern CSS3 UI', category: 'Frontend', badge: 'Beginner', mode: 'Responsive Design', icon: Globe, desc: 'Responsive Design, Flexbox, Grid & Animation' },

  // Programming & Core
  { id: 'course-python', name: 'Python Core & Advanced', category: 'Programming', badge: 'Top Rated', mode: 'Core to Advanced', icon: Terminal, desc: 'Core Python, OOP, Automation & REST APIs' },
  { id: 'course-java', name: 'Core & Enterprise Java', category: 'Programming', badge: 'Core', mode: 'Enterprise Java', icon: Code2, desc: 'OOP, Multithreading, JDBC & Collections' },
  { id: 'course-spring-boot', name: 'Spring Boot & Microservices', category: 'Programming', badge: 'Enterprise', mode: 'Cloud Microservices', icon: Server, desc: 'REST APIs, Hibernate, Security & Cloud' },
  { id: 'course-dsa', name: 'DSA & System Design', category: 'Programming', badge: 'FAANG Tier', mode: 'Interview Focused', icon: Binary, desc: '350+ LeetCode Patterns, DP, Trees & Graphs' },

  // AI & Data
  { id: 'course-ai-ml', name: 'AI & Machine Learning', category: 'AI & Data', badge: 'Next-Gen', mode: 'AI Specialist', icon: Cpu, desc: 'ML Algorithms, Deep Learning & PyTorch' },
  { id: 'course-data-analytics', name: 'Data Analytics & BI', category: 'AI & Data', badge: 'High Growth', mode: 'Business Intelligence', icon: TrendingUp, desc: 'SQL, Python, Power BI, Excel & Tableau' },

  // Databases
  { id: 'course-dbms', name: 'DBMS & Advanced SQL', category: 'Databases', badge: 'Foundation', mode: 'Database Architecture', icon: Database, desc: 'Relational DBs, Query Optimization & Stored Procs' },
  { id: 'course-nosql', name: 'NoSQL & MongoDB Database', category: 'Databases', badge: 'Cloud DB', mode: 'Distributed NoSQL', icon: Database, desc: 'Document DBs, Aggregations, Redis & Scaling' }
];

export default function NavbarCoursesDropdown({ handleNav, onOpenConsultation }) {
  const dropdownVariant = 'v1_megaSplit';
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Programming', 'AI & Data', 'Databases'];

  const filteredCourses = activeCategory === 'All' 
    ? ALL_15_COURSES 
    : ALL_15_COURSES.filter(c => c.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="absolute top-full left-0 pt-2 z-50 animate-fadeIn">

      {/* ========================================================================= */}
      {/* STYLE 1: STRIPE MEGA MENU (ALL 15 COURSES IN DYNAMIC GRID + SPOTLIGHT) */}
      {/* ========================================================================= */}
      {(!dropdownVariant || dropdownVariant === 'v1_megaSplit') && (
        <div className="w-[840px] p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl grid grid-cols-12 gap-5 max-h-[85vh] overflow-hidden">
          
          {/* Left Column: Category Filter Pills + All 15 Courses Grid */}
          <div className="col-span-8 flex flex-col space-y-3">
            
            {/* Header with All Courses Gateway */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    All 15 Professional Career Tracks
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Classroom Greater Noida & Live Online</p>
                </div>
              </div>

              <button
                onClick={() => handleNav('courses')}
                className="px-2.5 py-1 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-[11px] font-extrabold hover:bg-brand-100 dark:hover:bg-brand-900 transition-all flex items-center space-x-1"
              >
                <span>Master Catalog</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Course List Scrollable Grid */}
            <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
              {filteredCourses.map((c) => {
                const Icon = c.icon || Code2;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleNav(c.id)}
                    className="p-2.5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 hover:border-brand-500/50 hover:shadow-md transition-all text-left group flex items-start space-x-2.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-sm p-1">
                      {getCourseLogo(c.id, "w-5 h-5")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-[11px] font-bold text-slate-900 dark:text-white truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {c.name}
                        </p>
                      </div>
                      <p className="text-[9px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {c.desc}
                      </p>
                      <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-200/40 dark:border-slate-700/40 text-[9px]">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{c.mode}</span>
                        <span className="text-slate-400 group-hover:text-brand-600 flex items-center space-x-0.5">
                          <span>Syllabus</span>
                          <ChevronRight className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Placement Spotlight & Demo CTA */}
          <div className="col-span-4 bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 rounded-2xl p-4 text-white flex flex-col justify-between relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3">
              <div className="flex items-center space-x-1.5 text-amber-400 text-[10px] font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>Greater Noida Top Tech Academy</span>
              </div>
              
              <h4 className="text-sm font-black text-white leading-snug">
                Industry-Aligned Practical Curriculum
              </h4>
              
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Industry-aligned syllabus, real software capstones, and direct interview drives with 350+ hiring partners.
              </p>

              <div className="space-y-1.5 pt-1 text-[10px] text-slate-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>15 Master Career Tracks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>100% Practical Training & Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>1-on-1 Faculty Mentorship</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-primary hover:from-brand-400 hover:to-accent-primary text-white font-bold text-xs shadow-lg flex items-center justify-center space-x-1.5 transition-all active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Free 1-on-1 Demo</span>
              </button>
              
              <button
                onClick={() => handleNav('training-institute')}
                className="w-full py-2 rounded-xl bg-brand-600/30 hover:bg-brand-600/50 border border-brand-500/30 text-brand-200 font-bold text-[11px] text-center transition-all flex items-center justify-center space-x-1"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Accredited Institute Overview</span>
              </button>

              <button
                onClick={() => handleNav('courses')}
                className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-[11px] text-center transition-all"
              >
                View Full 15-Course Directory
              </button>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 2: BENTO CARDS (CATEGORIZED 15 COURSES) */}
      {/* ========================================================================= */}
      {dropdownVariant === 'v2_bentoCards' && (
        <div className="w-[820px] p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                All 15 Master Career Tracks
              </span>
            </div>
            <button
              onClick={() => handleNav('courses')}
              className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
            >
              <span>Explore Master Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {ALL_15_COURSES.map((c) => {
              const Icon = c.icon || Code2;
              return (
                <div
                  key={c.id}
                  onClick={() => handleNav(c.id)}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-brand-500 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300">
                        {c.badge}
                      </span>
                    </div>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                      {c.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {c.desc}
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    <span>{c.ctc}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 3: LINEAR LUXURY MINIMAL LIST (ALL 15 COURSES) */}
      {/* ========================================================================= */}
      {dropdownVariant === 'v3_linearLuxury' && (
        <div className="w-[600px] p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 shadow-2xl backdrop-blur-xl space-y-1 max-h-[80vh] overflow-y-auto">
          <div className="px-3 py-1.5 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
            <span>All 15 Career Tracks</span>
            <span>Target CTC</span>
          </div>

          <button
            onClick={() => handleNav('courses')}
            className="w-full p-2.5 rounded-xl bg-brand-50/80 dark:bg-brand-950/60 hover:bg-brand-100 flex items-center justify-between text-left group transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-brand-700 dark:text-brand-300">All 15 Courses Master Directory</p>
                <p className="text-[10px] text-slate-500">View complete curriculum and syllabus</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-600" />
          </button>

          {ALL_15_COURSES.map((c) => {
            const Icon = c.icon || Code2;
            return (
              <button
                key={c.id}
                onClick={() => handleNav(c.id)}
                className="w-full p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center justify-between text-left group transition-all"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{c.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{c.ctc}</p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 4: CYBER TERMINAL (ALL 15 COURSES) */}
      {/* ========================================================================= */}
      {dropdownVariant === 'v4_cyberTerminal' && (
        <div className="w-[640px] p-4 rounded-2xl bg-slate-950 border border-brand-500/40 shadow-2xl font-mono text-slate-200 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs text-slate-400 sticky top-0 bg-slate-950/90 backdrop-blur z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-[11px] text-slate-400 ml-2">yukti-academy-cli --all-15-tracks</span>
            </div>
            <span className="text-emerald-400 text-[10px]">● 15 TRACKS LOADED</span>
          </div>

          <div className="space-y-1.5">
            {ALL_15_COURSES.map((c) => (
              <button
                key={c.id}
                onClick={() => handleNav(c.id)}
                className="w-full p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800/80 hover:border-brand-500/60 transition-all text-left group flex items-center justify-between text-xs"
              >
                <div>
                  <p className="font-bold text-brand-400 group-hover:text-brand-300">
                    $ yukti run --course={c.id.replace('course-', '')}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    &gt; {c.name} • {c.desc}
                  </p>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  {c.ctc}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <button
              onClick={() => handleNav('courses')}
              className="text-brand-400 hover:underline flex items-center space-x-1"
            >
              <span>$ cat master_catalog.md</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1 rounded bg-brand-600 hover:bg-brand-500 text-white font-bold"
            >
              $ exec book_demo
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 5: PATHWAY ROADMAP EXPLORER (CATEGORIZED 15 COURSES) */}
      {/* ========================================================================= */}
      {dropdownVariant === 'v5_pathwayTabs' && (
        <div className="w-[720px] p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-3">
          <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-bold">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={'flex-1 py-1.5 rounded-xl transition-all ' + (
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 max-h-[360px] overflow-y-auto">
            {filteredCourses.map((c) => {
              const Icon = c.icon || Code2;
              return (
                <div
                  key={c.id}
                  onClick={() => handleNav(c.id)}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-brand-500 transition-all cursor-pointer group flex items-start space-x-2.5"
                >
                  <div className="w-7 h-7 rounded-xl bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">
                      {c.name}
                    </h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {c.desc}
                    </p>
                    <p className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                      {c.ctc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <button
              onClick={() => handleNav('courses')}
              className="font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
            >
              <span>Explore All 15 Tracks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-xl bg-brand-600 text-white font-bold text-xs"
            >
              Book 1-on-1 Demo
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
