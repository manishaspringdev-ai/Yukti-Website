import React from 'react';
import { Building2, GraduationCap } from 'lucide-react';
import MissionVision from '../components/MissionVision';
import FounderMessage from '../components/FounderMessage';
import Promises from '../components/Promises';
import Team from '../components/Team';
import StatsHighlights from '../components/StatsHighlights';
import ContactForm from '../components/ContactForm';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 1. Mission & Vision & Corporate Overview */}
      <MissionVision />

      {/* 2. Message from Our Founder (Hexaware Reference Standard) */}
      <FounderMessage onOpenConsultation={onOpenConsultation} />

      {/* 3. What We Promise to Deliver & Student Assurances (Itransition Style) */}
      <Promises onOpenConsultation={onOpenConsultation} />

      {/* 4. Leadership & Technical Team */}
      <Team />

      {/* 5. Key Highlights & Decades of Experience */}
      <StatsHighlights onOpenConsultation={onOpenConsultation} />

      {/* 6. Align With Your Business Goals & Student Career Counseling (Exact DOCX Section) */}
      <section className="py-20 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Get Software Solutions that Align With Your Business Goals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enterprise Business Solutions Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden h-40 sm:h-44 shadow-md group">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=70" 
                    alt="Enterprise Strategic Consultation at Yukti Software" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white drop-shadow">
                    Executive Strategy & Roadmapping
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold shadow">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    For Businesses & Enterprises
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Partner with Yukti Software for software solutions that are designed specially to address your operational pain points and are built to boost your overall working efficiency. We recommend that you start by scheduling a consultation with our experts. This will provide us with a common communication point so that we understand your requirements. At the same time, we will give you key market insights and guide you with our experience.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-lg transition-all"
              >
                Schedule Business Requirements Evaluation
              </button>
            </div>

            {/* Student Career Counseling Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-950 text-white border border-brand-800/80 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden h-40 sm:h-44 shadow-md group border border-emerald-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=70" 
                    alt="1-on-1 Student Career Counseling at Yukti Software" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2.5 left-3 text-xs font-bold text-emerald-400 drop-shadow">
                    1-on-1 Industry Mentor Guidance
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold shadow">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    For Students & Career Aspirants
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  For students who want to enroll in our software development training courses and are confused about the right way, Yukti Software career counselling is the right move. Sit with our experts and learn what’s in-demand and what recruiters are searching for to boost your chances of landing your dream job.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-black text-xs shadow-lg transition-all"
              >
                Book 1-on-1 Career Counseling Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Consultation & Contact Form */}
      <ContactForm />
    </div>
  );
}
