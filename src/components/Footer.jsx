import React, { useState } from 'react';
import yuktiLogo from '../assets/yukti-logo.svg'
import { siteData } from '../data';

import { 
  Code2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Star, 
  GraduationCap, 
  ChevronRight, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Zap, 
  ArrowRight,
  ExternalLink,
  Award,
  Globe
} from 'lucide-react';
import { LinkedInIcon, TwitterIcon, GithubIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer({ setCurrentPage, onOpenConsultation }) {
  const { brand } = siteData;
  const footerVariant = 'v1_rextonEnterprise';
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageKey, hash) => {
    if (pageKey === 'home') {
      setCurrentPage('home');
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        scrollToTop();
      }
    } else {
      setCurrentPage(pageKey);
      scrollToTop();
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Yukti Software, I want to inquire about your software development and training programs.");
    window.open("https://wa.me/919876543210?text=" + text, '_blank');
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSent(true);
      setTimeout(() => {
        setNewsletterSent(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-100/90 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      
      {/* ========================================================================= */}
      {/* VARIANT 1: 4-COLUMN ENTERPRISE PORTAL (REXTON REFERENCE STANDARD) */}
      {/* ========================================================================= */}
      {(!footerVariant || footerVariant === 'v1_rextonEnterprise') && (
        <div className="pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80 dark:border-slate-800/80">
              
              {/* Brand Info & Socials */}
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center">
                  <img src={yuktiLogo} alt="Yukti Software - Enterprise Software Development & IT Training Institute" width="160" height="44" loading="lazy" decoding="async" className="h-10 sm:h-11 w-auto object-contain dark:brightness-0 dark:invert" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                  {brand.tagline}. {brand.subTagline}
                </p>

                {/* Google Rating Badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 shadow-sm">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">4.9/5.0</span>
                  <span className="text-slate-500 dark:text-slate-400 text-[10px]">(128+ Google Reviews)</span>
                </div>

                <div className="pt-2 flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                  <a href={brand.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 dark:hover:text-white shadow-sm transition-colors" aria-label="LinkedIn">
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a href={brand.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 dark:hover:text-white shadow-sm transition-colors" aria-label="Twitter">
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a href={brand.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 dark:hover:text-white shadow-sm transition-colors" aria-label="GitHub">
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <button onClick={handleWhatsApp} className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white shadow-sm transition-colors" aria-label="WhatsApp">
                    <WhatsAppIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* IT Courses & Career Programs */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center space-x-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  <span>Programs & Internships</span>
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <button onClick={() => handleNav('careers')} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center space-x-1 text-left">
                      <ChevronRight className="w-3 h-3 text-emerald-500" />
                      <span>Careers & Paid Internships</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNav('course-python')} className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center space-x-1 text-left">
                      <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      <span>Python Training Track</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNav('course-java-fullstack')} className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center space-x-1 text-left">
                      <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      <span>Java Full Stack Course</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNav('course-dsa')} className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center space-x-1 text-left">
                      <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      <span>Data Structures & Algorithms</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNav('courses')} className="text-brand-600 dark:text-brand-400 hover:underline font-bold pt-1 flex items-center space-x-1">
                      <span>→ View All 15 Career Tracks</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Company & Solutions Links */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">
                  Company & Solutions
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <li><button onClick={() => handleNav('gallery')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Photo & Video Gallery</button></li>
                  <li><button onClick={() => handleNav('careers')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Careers & Hiring</button></li>
                  <li><button onClick={() => handleNav('about')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">About Yukti Software</button></li>
                  <li><button onClick={() => handleNav('home', '#services')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Enterprise Software Services</button></li>
                  <li><button onClick={() => handleNav('home', '#reviews')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Google Reviews (4.9★)</button></li>
                </ul>
              </div>

              {/* Direct Contact & Support */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">
                  Contact & Support
                </h4>
                <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                    <span>Sector 62, Noida & Greater Noida Knowledge Park Campus</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                    <a href={"tel:" + brand.phone} className="hover:text-brand-600 dark:hover:text-white transition-colors">{brand.phone}</a>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                    <a href={"mailto:" + brand.email} className="hover:text-brand-600 dark:hover:text-white transition-colors">{brand.email}</a>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Quick WhatsApp Help</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <p>© {new Date().getFullYear()} {brand.name}. All Rights Reserved. ISO 9001:2015 Certified Software & IT Training Institute.</p>
              <div className="flex items-center space-x-6">
                <button onClick={onOpenConsultation} className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-semibold">
                  Book Free Demo / Consultation
                </button>
                <button onClick={scrollToTop} className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-sm transition-colors flex items-center space-x-1">
                  <span>Back to Top</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 2: ASYMMETRIC BENTO GRID & LIVE TELEMETRY */}
      {/* ========================================================================= */}
      {footerVariant === 'v2_modernBento' && (
        <div className="pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Brand & Vision */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="mb-3 inline-flex items-center">
                    <div className="h-14 px-3.5 py-1.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                      <img src={yuktiLogo} alt="Yukti Software - Enterprise Software Development & IT Training Institute" width="160" height="44" loading="lazy" decoding="async" className="h-10 w-auto object-contain" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Engineering reliable bespoke software architectures and delivering high-yield IT talent to Fortune 500 tech leaders.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>ISO 9001:2015 Enterprise Certified</span>
                </div>
              </div>

              {/* Card 2: Newsletter & Fast Consultation */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-50/50 dark:from-slate-900 dark:via-brand-950/40 dark:to-slate-900 border border-brand-200 dark:border-brand-800/40 space-y-4 shadow-sm">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">Stay Ahead in Tech</span>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">Get Weekly Tech & Batch Insights</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Direct interview guides, salary trends, and tech updates.</p>
                </div>

                <form onSubmit={handleNewsletter} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 shadow-sm"
                    />
                    <button type="submit" className="p-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white transition-colors shadow">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  {newsletterSent && (
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Subscribed successfully!</span>
                    </p>
                  )}
                </form>
              </div>

              {/* Card 3: Live Telemetry & Location */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">System Status</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                      ● Operational (99.9%)
                    </span>
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">Knowledge Park Center:</p>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">{brand.address}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <span className="text-amber-500 font-bold">★ 4.9/5.0 Google Score</span>
                  <button onClick={handleWhatsApp} className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold">WhatsApp Direct &gt;</button>
                </div>
              </div>

            </div>

            {/* Bottom Links Row */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-500 gap-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 font-medium">
                <button onClick={() => handleNav('course-python')} className="hover:text-brand-600 dark:hover:text-brand-400">Python Course</button>
                <span>•</span>
                <button onClick={() => handleNav('course-java-fullstack')} className="hover:text-brand-600 dark:hover:text-brand-400">Java Full Stack</button>
                <span>•</span>
                <button onClick={() => handleNav('course-dsa')} className="hover:text-brand-600 dark:hover:text-brand-400">DSA Track</button>
                <span>•</span>
                <button onClick={() => handleNav('home', '#services')} className="hover:text-brand-600 dark:hover:text-brand-400">Software Services</button>
              </div>
              <button onClick={scrollToTop} className="flex items-center space-x-1 hover:text-brand-600 dark:hover:text-white">
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 3: HIGH-IMPACT ACTION BANNER & MEGA CATALOG */}
      {/* ========================================================================= */}
      {footerVariant === 'v3_splitActionMega' && (
        <div className="pt-12 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* High-Impact CTA Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-700 via-brand-600 to-accent-primary dark:from-brand-900 dark:via-brand-800 dark:to-accent-secondary border border-brand-500/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
                  Ready to Start?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Accelerate Your Software Career or Project Today.
                </h3>
                <p className="text-sm text-brand-100 max-w-xl">
                  Connect directly with Senior Architects and Master Mentors in Greater Noida.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 rounded-2xl bg-white text-brand-900 font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  Book 1-on-1 Free Session
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl flex items-center space-x-2 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Counselor</span>
                </button>
              </div>
            </div>

            {/* 4-Column Directory */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">Top IT Programs</h5>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li><button onClick={() => handleNav('course-python')} className="hover:text-brand-600 dark:hover:text-white">Python Masterclass</button></li>
                  <li><button onClick={() => handleNav('course-java-fullstack')} className="hover:text-brand-600 dark:hover:text-white">Java Spring + React</button></li>
                  <li><button onClick={() => handleNav('course-dsa')} className="hover:text-brand-600 dark:hover:text-white">FAANG Coding & DSA</button></li>
                  <li><button onClick={() => handleNav('courses')} className="text-brand-600 dark:text-brand-400 font-bold">All 4 Programs &gt;</button></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">Engineering Solutions</h5>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li><button onClick={() => handleNav('home', '#services')} className="hover:text-brand-600 dark:hover:text-white">Cloud Architecture</button></li>
                  <li><button onClick={() => handleNav('home', '#services')} className="hover:text-brand-600 dark:hover:text-white">Enterprise Web Dev</button></li>
                  <li><button onClick={() => handleNav('home', '#services')} className="hover:text-brand-600 dark:hover:text-white">Database Optimization</button></li>
                  <li><button onClick={() => handleNav('home', '#services')} className="hover:text-brand-600 dark:hover:text-white">Mobile Engineering</button></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">About & Record</h5>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li><button onClick={() => handleNav('about')} className="hover:text-brand-600 dark:hover:text-white">Company Vision</button></li>
                  <li><button onClick={() => handleNav('home', '#team')} className="hover:text-brand-600 dark:hover:text-white">Leadership Team</button></li>
                  <li><button onClick={() => handleNav('home', '#reviews')} className="hover:text-brand-600 dark:hover:text-white">Google 4.9 Reviews</button></li>
                  <li><button onClick={() => handleNav('home', '#roadmap')} className="hover:text-brand-600 dark:hover:text-white">Delivery Roadmap</button></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">Headquarters</h5>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">{brand.address}</p>
                <p className="text-brand-600 dark:text-brand-400 font-mono font-bold">{brand.phone}</p>
                <p className="text-slate-600 dark:text-slate-400 font-mono">{brand.email}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
              <p>© {new Date().getFullYear()} {brand.name}. Greater Noida Campus.</p>
              <button onClick={scrollToTop} className="hover:text-brand-600 dark:hover:text-white">Back to Top ↑</button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 4: DEVELOPER TERMINAL HUB & TECH STACK BADGES */}
      {/* ========================================================================= */}
      {footerVariant === 'v4_cyberTerminal' && (
        <div className="pt-12 pb-12 font-mono text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Terminal Window Box */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] text-slate-400 pl-2">yukti-software@production:~$ systemctl status academy</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">● ACTIVE (RUNNING)</span>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <span className="text-brand-400 font-bold block mb-2">&gt; DIRECT_ACCESS</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li><button onClick={() => handleNav('course-python')} className="hover:text-emerald-400">./python-course.sh</button></li>
                      <li><button onClick={() => handleNav('course-java-fullstack')} className="hover:text-emerald-400">./java-spring.sh</button></li>
                      <li><button onClick={() => handleNav('course-dsa')} className="hover:text-emerald-400">./dsa-faang.sh</button></li>
                    </ul>
                  </div>

                  <div>
                    <span className="text-brand-400 font-bold block mb-2">&gt; ARCHITECTURE</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li><button onClick={() => handleNav('home', '#services')} className="hover:text-emerald-400">./web-engineering</button></li>
                      <li><button onClick={() => handleNav('home', '#services')} className="hover:text-emerald-400">./cloud-devops</button></li>
                      <li><button onClick={() => handleNav('home', '#roadmap')} className="hover:text-emerald-400">./sprint-roadmap</button></li>
                    </ul>
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <span className="text-brand-400 font-bold block">&gt; VERIFIED_TECH_STACK</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python 3.12', 'React 18', 'Spring Boot 3', 'Docker', 'AWS Cloud', 'PostgreSQL', 'FastAPI', 'Kafka', 'LeetCode 350+'].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-300">
                          [{tech}]
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 flex items-center space-x-3 text-[11px] text-slate-400">
                      <span>Uptime: 99.99%</span>
                      <span>•</span>
                      <span>Reviews: 4.9/5.0 ★</span>
                      <span>•</span>
                      <span>Noida & Greater Noida</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
                  <span>[OK] All services running at optimal throughput.</span>
                  <div className="flex items-center space-x-4">
                    <button onClick={onOpenConsultation} className="text-brand-400 hover:underline">Execute Demo Trigger</button>
                    <button onClick={scrollToTop} className="hover:text-white">Top ^</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 5: APPLE MINIMALIST & CORPORATE CERTIFICATIONS */}
      {/* ========================================================================= */}
      {footerVariant === 'v5_minimalCentered' && (
        <div className="py-16 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
            
            {/* Center Brand Identity */}
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center py-2">
                <img src={yuktiLogo} alt="Yukti Software - Enterprise Software Development & IT Training Institute" width="160" height="44" loading="lazy" decoding="async" className="h-11 sm:h-12 w-auto object-contain dark:brightness-0 dark:invert" />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                {brand.tagline} • Greater Noida Tech Campus
              </p>
            </div>

            {/* Navigation Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
              <button onClick={() => handleNav('home')} className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-white shadow-sm transition-colors">Home</button>
              <button onClick={() => handleNav('about')} className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-white shadow-sm transition-colors">About</button>
              <button onClick={() => handleNav('course-python')} className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-white shadow-sm transition-colors">Python Course</button>
              <button onClick={() => handleNav('course-java-fullstack')} className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-white shadow-sm transition-colors">Java Full Stack</button>
              <button onClick={() => handleNav('course-dsa')} className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-white shadow-sm transition-colors">DSA Prep</button>
              <button onClick={() => handleNav('home', '#services')} className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-white shadow-sm transition-colors">Services</button>
              <button onClick={() => handleNav('home', '#reviews')} className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-white shadow-sm transition-colors">Reviews (4.9★)</button>
            </div>

            {/* Certifications Stamp */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-600 dark:text-slate-400">
              <span className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>ISO 9001:2015 Certified Academy</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.9/5.0 Google Business Rating</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>100% Placement Record</span>
              </span>
            </div>

            {/* Copyright and back to top */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-600 gap-4">
              <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
              <button onClick={scrollToTop} className="hover:text-brand-600 dark:hover:text-slate-300 transition-colors">
                Back to Top ↑
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
}
