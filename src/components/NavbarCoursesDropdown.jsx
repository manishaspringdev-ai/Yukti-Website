import React, { useState } from 'react';
import { useCustomizer } from '../context/CustomizerContext';
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
  Play
} from 'lucide-react';

export default function NavbarCoursesDropdown({ handleNav, onOpenConsultation }) {
  const { dropdownVariant, setDropdownVariant, DROPDOWN_VARIANTS } = useCustomizer();
  const [activeTab, setActiveTab] = useState('beginner');

  return (
    <div className="absolute top-full left-0 pt-2 z-50 animate-fadeIn">
      
      {/* Dropdown Style Switcher Mini Bar (Client Presentation Quick-Bar) */}
      <div className="mb-2 p-1.5 rounded-xl bg-slate-900/95 border border-slate-800 backdrop-blur-md flex items-center justify-between text-[10px] text-slate-300 shadow-xl max-w-fit space-x-3">
        <span className="font-bold flex items-center space-x-1 text-brand-400 pl-1">
          <Sparkles className="w-3 h-3 text-brand-400" />
          <span>Dropdown Style:</span>
        </span>
        <div className="flex items-center space-x-1">
          {(DROPDOWN_VARIANTS || []).map((d, idx) => {
            const isSelected = (!dropdownVariant && idx === 0) || dropdownVariant === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setDropdownVariant(d.id); 
                }}
                className={'px-2 py-0.5 rounded-md font-bold text-[10px] transition-all ' + (
                  isSelected
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                )}
                title={d.name}
              >
                V{idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STYLE 1: STRIPE 2-COLUMN MEGA MENU + PLACEMENT SPOTLIGHT BANNER */}
      {/* ========================================================================= */}
      {(!dropdownVariant || dropdownVariant === 'v1_megaSplit') && (
        <div className="w-[660px] p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl grid grid-cols-12 gap-4">
          {/* Left Column: 3 Core Tracks */}
          <div className="col-span-7 space-y-2">
            <button
              onClick={() => handleNav('courses')}
              className="w-full p-2.5 rounded-2xl bg-brand-50/80 dark:bg-brand-950/60 hover:bg-brand-100 dark:hover:bg-brand-900/80 flex items-center justify-between border border-brand-200/60 dark:border-brand-800/60 transition-colors text-left group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600">All 4 Career Tracks</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Master Catalog & Placement Record</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-600 dark:text-brand-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="space-y-1.5 pt-1">
              {/* Python */}
              <button
                onClick={() => handleNav('course-python')}
                className="w-full p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/80 flex items-center justify-between group transition-all text-left"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">Python Training</p>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Hot</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Django, REST APIs & Data Analytics • 12 Modules</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">4.5-18 LPA</span>
              </button>

              {/* Java Full Stack */}
              <button
                onClick={() => handleNav('course-java-fullstack')}
                className="w-full p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/80 flex items-center justify-between group transition-all text-left"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">Java Full Stack</p>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">Popular</span>
                    </div>
                    <p className="text-[10px] text-slate-400">React + Spring Boot + Microservices + Cloud</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">6.0-24 LPA</span>
              </button>

              {/* DSA */}
              <button
                onClick={() => handleNav('course-dsa')}
                className="w-full p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/80 flex items-center justify-between group transition-all text-left"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Binary className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">DSA & Algorithms</p>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">FAANG</span>
                    </div>
                    <p className="text-[10px] text-slate-400">350+ LeetCode Problems + System Design</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">12-42 LPA</span>
              </button>
            </div>
          </div>

          {/* Right Column: Placement Spotlight & Demo CTA */}
          <div className="col-span-5 bg-gradient-to-br from-brand-900 to-slate-950 rounded-2xl p-3.5 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-brand-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center space-x-1 text-amber-400 text-[10px] font-bold">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>Greater Noida Top Academy</span>
              </div>
              <h4 className="text-sm font-black mt-1 text-white leading-tight">100% Guaranteed Placement Support</h4>
              <p className="text-[10px] text-slate-300 mt-1 leading-relaxed">
                Learn directly from ex-FAANG engineers with live industry capstone projects and mock interviews.
              </p>

              <div className="mt-3 space-y-1 text-[10px] text-slate-200">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>350+ Corporate Hiring Partners</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Avg Package ₹8.4 LPA (Highest ₹42 LPA)</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-primary hover:from-brand-400 hover:to-accent-primary text-white font-bold text-[11px] shadow-lg flex items-center justify-center space-x-1 transition-all"
              >
                <span>Book 1-on-1 Demo</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 2: SUPABASE 3-CARD BENTO GRID + TECH STACK BADGES */}
      {/* ========================================================================= */}
      {dropdownVariant === 'v2_bentoCards' && (
        <div className="w-[720px] p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Industrial Career Specializations
              </span>
            </div>
            <button
              onClick={() => handleNav('courses')}
              className="text-[11px] font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
            >
              <span>View All 4 Programs</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* Python Card */}
            <div 
              onClick={() => handleNav('course-python')}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/60 dark:text-blue-300">
                    12 Weeks
                  </span>
                </div>
                <h4 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Python Developer
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Core syntax, OOP, Django API framework, MySQL & Data Analytics.
                </p>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-[9px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">Django</span>
                  <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-[9px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">FastAPI</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px] font-bold text-blue-600 dark:text-blue-400">
                <span>₹4.5 - 18 LPA</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Java Full Stack Card */}
            <div 
              onClick={() => handleNav('course-java-fullstack')}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-300">
                    24 Weeks
                  </span>
                </div>
                <h4 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Java Full Stack
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  React.js, Spring Boot microservices, Docker, Kafka, AWS.
                </p>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-[9px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">Spring Boot</span>
                  <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-[9px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">React</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                <span>₹6.0 - 24 LPA</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* DSA Card */}
            <div 
              onClick={() => handleNav('course-dsa')}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Binary className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-300">
                    16 Weeks
                  </span>
                </div>
                <h4 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  DSA & System Design
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  350+ LeetCode patterns, DP, Trees, Graphs, LLD & HLD Architecture.
                </p>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-[9px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">FAANG Prep</span>
                  <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-[9px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">HLD</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                <span>₹12 - 42 LPA</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 3: LINEAR LUXURY MINIMAL LIST + SALARY TIERS */}
      {/* ========================================================================= */}
      {dropdownVariant === 'v3_linearLuxury' && (
        <div className="w-[520px] p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 shadow-2xl backdrop-blur-xl space-y-1">
          <div className="px-3 py-1.5 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
            <span>Career Path</span>
            <span>Target CTC & Batch</span>
          </div>

          <button
            onClick={() => handleNav('courses')}
            className="w-full p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center justify-between text-left group transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">All Courses Master Directory</p>
                <p className="text-[10px] text-slate-400">View 4 complete tracks + syllabus</p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
              Overview
            </span>
          </button>

          <button
            onClick={() => handleNav('course-python')}
            className="w-full p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center justify-between text-left group transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-500">Python Automation & Web</p>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <p className="text-[10px] text-slate-400">Django, Flask, Pandas, SQL</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-extrabold text-slate-900 dark:text-white">₹4.5 - 18 LPA</p>
              <p className="text-[9px] text-emerald-500 font-bold">New Batch: Mon</p>
            </div>
          </button>

          <button
            onClick={() => handleNav('course-java-fullstack')}
            className="w-full p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center justify-between text-left group transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-500">Java Full Stack & Microservices</p>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <p className="text-[10px] text-slate-400">Spring Boot, React, Kafka, Docker</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-extrabold text-slate-900 dark:text-white">₹6.0 - 24 LPA</p>
              <p className="text-[9px] text-emerald-500 font-bold">New Batch: Wed</p>
            </div>
          </button>

          <button
            onClick={() => handleNav('course-dsa')}
            className="w-full p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center justify-between text-left group transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Binary className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500">FAANG Data Structures & Algorithms</p>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <p className="text-[10px] text-slate-400">350+ Problems, Graphs, DP, Trees</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-extrabold text-slate-900 dark:text-white">₹12 - 42 LPA</p>
              <p className="text-[9px] text-emerald-500 font-bold">New Batch: Sat</p>
            </div>
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 4: CYBER TERMINAL + CLI COMMAND ENROLLER */}
      {/* ========================================================================= */}
      {dropdownVariant === 'v4_cyberTerminal' && (
        <div className="w-[580px] p-4 rounded-2xl bg-slate-950 border border-brand-500/40 shadow-2xl font-mono text-slate-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-[11px] text-slate-400 ml-2">yukti-academy-cli v3.2.0</span>
            </div>
            <span className="text-emerald-400 text-[10px]">● PORT: 8080 (READY)</span>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => handleNav('course-python')}
              className="w-full p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-blue-500/60 transition-all text-left group flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold text-blue-400 group-hover:text-blue-300">
                  $ yukti run --course=python-3.12
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  &gt; Django REST, Automation, NumPy, Web Scraping [12 Weeks]
                </p>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                CTC: 18L
              </span>
            </button>

            <button
              onClick={() => handleNav('course-java-fullstack')}
              className="w-full p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/60 transition-all text-left group flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
                  $ yukti run --course=java-spring-cloud
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  &gt; React + Spring Boot 3 + Kafka + Docker + Kubernetes [24 Weeks]
                </p>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                CTC: 24L
              </span>
            </button>

            <button
              onClick={() => handleNav('course-dsa')}
              className="w-full p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/60 transition-all text-left group flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                  $ yukti run --course=faang-dsa-mastery
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  &gt; 350+ LeetCode Patterns + Low Level & High Level Design [16 Weeks]
                </p>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                CTC: 42L
              </span>
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <button
              onClick={() => handleNav('courses')}
              className="text-brand-400 hover:underline flex items-center space-x-1"
            >
              <span>$ cat catalog.md (All Courses)</span>
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
      {/* STYLE 5: PATHWAY ROADMAP EXPLORER + LEVEL SWITCHER TABS */}
      {/* ========================================================================= */}
      {dropdownVariant === 'v5_pathwayTabs' && (
        <div className="w-[620px] p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-3">
          {/* Top Level Switcher Tabs */}
          <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('beginner')}
              className={'flex-1 py-1.5 rounded-xl transition-all ' + (
                activeTab === 'beginner'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              )}
            >
              Beginner Friendly
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('fullstack')}
              className={'flex-1 py-1.5 rounded-xl transition-all ' + (
                activeTab === 'fullstack'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              )}
            >
              Full Stack Industry
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('faang')}
              className={'flex-1 py-1.5 rounded-xl transition-all ' + (
                activeTab === 'faang'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              )}
            >
              FAANG & High Scale
            </button>
          </div>

          {/* Active Tab Showcase Content */}
          {activeTab === 'beginner' && (
            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">Zero to Job-Ready Path</span>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">Python Programming & Data Analytics</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-md">
                  Perfect starting point for freshers & non-IT students. Master Python, SQL, REST APIs, and automated script workflows.
                </p>
                <div className="pt-2 flex items-center space-x-2">
                  <button
                    onClick={() => handleNav('course-python')}
                    className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    View Python Syllabus
                  </button>
                  <button
                    onClick={() => handleNav('courses')}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700"
                  >
                    All Courses
                  </button>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-xs font-bold text-slate-500">Duration</div>
                <div className="text-sm font-black text-blue-600 dark:text-blue-400">12 Weeks</div>
                <div className="text-xs font-bold text-slate-500 mt-2">Placement</div>
                <div className="text-sm font-black text-emerald-600">100% Assist</div>
              </div>
            </div>
          )}

          {activeTab === 'fullstack' && (
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/60 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">High Demand Enterprise Role</span>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">Java Full Stack Development</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-md">
                  Full stack engineering covering React.js, Tailwind, Spring Boot 3, Microservices, Kafka messaging, and AWS cloud deployment.
                </p>
                <div className="pt-2 flex items-center space-x-2">
                  <button
                    onClick={() => handleNav('course-java-fullstack')}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    View Java Syllabus
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-xs font-bold text-slate-500">Duration</div>
                <div className="text-sm font-black text-indigo-600 dark:text-indigo-400">24 Weeks</div>
                <div className="text-xs font-bold text-slate-500 mt-2">Target CTC</div>
                <div className="text-sm font-black text-emerald-600">₹6 - 24 LPA</div>
              </div>
            </div>
          )}

          {activeTab === 'faang' && (
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/60 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Tier-1 Company Preparation</span>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">Data Structures, Algorithms & System Design</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-md">
                  Rigorous interview bootcamp with 350+ LeetCode problems, dynamic programming, tree/graph algorithms, and distributed system design.
                </p>
                <div className="pt-2 flex items-center space-x-2">
                  <button
                    onClick={() => handleNav('course-dsa')}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    View DSA Syllabus
                  </button>
                  <button
                    onClick={() => handleNav('courses')}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700"
                  >
                    Compare All
                  </button>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-xs font-bold text-slate-500">Duration</div>
                <div className="text-sm font-black text-emerald-600">16 Weeks</div>
                <div className="text-xs font-bold text-slate-500 mt-2">Target CTC</div>
                <div className="text-sm font-black text-emerald-600">₹12 - 42 LPA</div>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
