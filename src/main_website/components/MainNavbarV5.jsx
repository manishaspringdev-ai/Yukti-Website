import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageSquare, Sparkles, BookOpen, ChevronDown, 
  Terminal, ShieldCheck, ArrowRight, Menu, X, 
  Code, Laptop, Award, ExternalLink, Flame, CheckCircle2
} from 'lucide-react';

export default function MainNavbarV5({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const spotlightCourses = [
    { title: 'Python & Agentic AI', package: '16.0 LPA Top Package', tag: 'High Demand', color: 'from-emerald-600 to-teal-700' },
    { title: 'Java Microservices', package: '18.0 LPA Top Package', tag: 'FinTech Hiring', color: 'from-blue-600 to-indigo-700' },
    { title: 'DSA & System Design', package: '28.0 LPA FAANG Tier', tag: 'Product Tier', color: 'from-purple-600 to-pink-700' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % spotlightCourses.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [spotlightCourses.length]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Gradient Fast Notification & Contact Bar */}
      <div className="bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-600 text-white text-xs font-medium py-1.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-300 fill-amber-300 animate-pulse" /> Live Batch
            </span>
            <span className="truncate hidden sm:inline">
              ⚡ Admissions open for Next-Gen Full Stack & AI Cohort. Limited 15 seats per batch!
            </span>
            <span className="truncate sm:hidden">
              ⚡ New AI & Full Stack Cohort Open!
            </span>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0">
            <a 
              href="tel:+919910244342" 
              className="flex items-center gap-1 text-white/90 hover:text-white hover:underline transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden md:inline">+91 99102 44342</span>
            </a>
            <a 
              href="https://wa.me/919910244342?text=Hello%20Yukti%20Software,%20I%20am%20interested%20in%20courses%20and%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-100 hover:text-white bg-emerald-700/60 px-2 py-0.5 rounded font-semibold transition-all hover:scale-105"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Island */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-slate-200/80 dark:border-slate-800' 
            : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-slate-100 dark:border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Crisp SVG Vector Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="cursor-pointer flex items-center group py-1"
          >
            <img 
              src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" 
              alt="Yukti Software Logo" 
              className="h-10 sm:h-11 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = '/yukti-logo.svg';
              }}
            />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => scrollTo('hero')} 
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Home
            </button>

            <button 
              onClick={() => scrollTo('services')} 
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Services
            </button>

            {/* Course Dropdown V1 (Mega Split + Carousel Spotlight) */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                onClick={() => scrollTo('courses')}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                aria-expanded={dropdownOpen}
              >
                <BookOpen className="w-4 h-4 text-brand-500" />
                <span>Training & Courses</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-brand-600' : ''}`} />
              </button>

              {/* Mega Dropdown Menu V1 */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px] animate-fadeIn z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 grid grid-cols-5 gap-4 overflow-hidden">
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Career Specializations
                        </span>
                        <span className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> 100% Placement
                        </span>
                      </div>

                      <div 
                        onClick={() => scrollTo('courses')} 
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                          <Code className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 flex items-center gap-1.5">
                            Python, Data Science & AI
                            <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold px-1.5 py-0.2 rounded">Hot</span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">16 Weeks • 6.5 - 16 LPA • Agentic LLMs</p>
                        </div>
                      </div>

                      <div 
                        onClick={() => scrollTo('courses')} 
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                          <Laptop className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                            Java Full Stack Microservices
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">20 Weeks • Spring Boot 3 & React 18</p>
                        </div>
                      </div>

                      <div 
                        onClick={() => scrollTo('courses')} 
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                          <Terminal className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                            DSA & System Design
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">14 Weeks • 350+ LeetCode FAANG prep</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 flex flex-col justify-between p-3.5 rounded-xl bg-gradient-to-br from-brand-900 to-slate-900 text-white relative overflow-hidden border border-brand-800/60">
                      <div className="relative z-10">
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-brand-500/30 text-brand-300 px-2 py-0.5 rounded-full border border-brand-400/30">
                          {spotlightCourses[spotlightIndex].tag}
                        </span>
                        <h4 className="font-bold text-sm text-white mt-2 leading-tight">
                          {spotlightCourses[spotlightIndex].title}
                        </h4>
                        <p className="text-xs text-emerald-400 font-semibold mt-1">
                          {spotlightCourses[spotlightIndex].package}
                        </p>
                      </div>

                      <button 
                        onClick={() => { setDropdownOpen(false); onOpenConsultation(); }}
                        className="mt-3 relative z-10 w-full py-1.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1 shadow"
                      >
                        <span>Book 1-on-1 Trial</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-500/20 rounded-full blur-xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollTo('roadmap')} 
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Roadmap
            </button>

            <button 
              onClick={() => scrollTo('team')} 
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Team
            </button>

            <button 
              onClick={() => scrollTo('reviews')} 
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Reviews
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={onOpenConsultation}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
            <button 
              onClick={() => scrollTo('hero')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('services')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo('courses')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Training Courses</span>
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">100% Placement</span>
            </button>
            <button 
              onClick={() => scrollTo('roadmap')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Delivery Roadmap
            </button>
            <button 
              onClick={() => scrollTo('team')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Executive Team
            </button>
            <button 
              onClick={() => scrollTo('reviews')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Google Reviews & Placements
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Contact & Quotation
            </button>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold text-sm shadow-md"
            >
              Book Free 1-on-1 Consultation
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
