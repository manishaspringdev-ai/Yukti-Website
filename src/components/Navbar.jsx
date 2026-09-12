import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCustomizer } from '../context/CustomizerContext';
import { siteData } from '../data';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  GraduationCap, 
  Terminal, 
  Binary, 
  Layers,
  PhoneCall,
  Clock
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import NavbarCoursesDropdown from './NavbarCoursesDropdown';

export default function Navbar({ currentPage, setCurrentPage, onOpenConsultation }) {
  const { isDark, toggleTheme } = useTheme();
  const { navbarVariant } = useCustomizer();
  const { brand } = siteData;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (pageKey, hash) => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
    if (pageKey === 'home') {
      setCurrentPage('home');
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      setCurrentPage(pageKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Yukti Software, I want to inquire about your software services and training courses in Greater Noida.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* ========================================================================= */}
      {/* VARIANT 1: REXTON ENTERPRISE STANDARD (TOP CONTACT BAR + DROP-DOWNS) */}
      {/* ========================================================================= */}
      {(!navbarVariant || navbarVariant === 'v1_rextonEnterprise') && (
        <div className="w-full">
          {/* Top Info Bar (Reference Standard) */}
          <div className="hidden md:block bg-slate-950 text-slate-300 py-1.5 px-4 text-[11px] border-b border-slate-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <a href={`tel:${brand.phone}`} className="flex items-center space-x-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-400" />
                  <span>{brand.phone}</span>
                </a>
                <a href={`mailto:${brand.email}`} className="flex items-center space-x-1.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-accent-primary" />
                  <span>{brand.email}</span>
                </a>
                <span className="flex items-center space-x-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sector 62, Noida & Greater Noida Center</span>
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-amber-400 font-bold">★ 4.9/5.0 Google Rated</span>
                <span className="text-slate-600">|</span>
                <button onClick={handleWhatsApp} className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-semibold">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Navigation Bar */}
          <div className={`transition-all duration-300 ${
            isScrolled 
              ? 'glass-panel border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5' 
              : 'bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                
                {/* Brand Logo */}
                <button 
                  onClick={() => handleNav('home')}
                  className="flex items-center group text-left focus:outline-none"
                >
                  <div className="h-14 px-3.5 py-1.5 flex items-center justify-center rounded-2xl bg-white/95 dark:bg-slate-800/90 shadow-sm border border-slate-200/80 dark:border-slate-700/80 group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" 
                      alt="Yukti Software Logo" 
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </button>

                {/* Desktop Navigation Links with Courses Mega Dropdown */}
                <nav className="hidden lg:flex items-center space-x-1">
                  <button
                    onClick={() => handleNav('home')}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                      currentPage === 'home'
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60'
                        : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white'
                    }`}
                  >
                    Home
                  </button>

                  <button
                    onClick={() => handleNav('about')}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                      currentPage === 'about'
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60'
                        : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white'
                    }`}
                  >
                    About Us
                  </button>

                  {/* Courses Direct Link & Mega Dropdown */}
                  <div 
                    className="relative" 
                    onMouseEnter={() => setCoursesDropdownOpen(true)}
                    onMouseLeave={() => setCoursesDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <button
                        onClick={() => handleNav('courses')}
                        className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                          currentPage === 'courses' || currentPage.startsWith('course')
                            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white'
                        }`}
                      >
                        <GraduationCap className="w-4 h-4 text-brand-500" />
                        <span>Courses</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-brand-500' : ''}`} />
                      </button>
                    </div>

                    {coursesDropdownOpen && (
                      <NavbarCoursesDropdown 
                        handleNav={handleNav} 
                        onOpenConsultation={onOpenConsultation} 
                      />
                    )}
                  </div>

                  <button
                    onClick={() => handleNav('home', '#services')}
                    className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white transition-all"
                  >
                    Services
                  </button>

                  <button
                    onClick={() => handleNav('home', '#roadmap')}
                    className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white transition-all"
                  >
                    Roadmap
                  </button>

                  <button
                    onClick={() => handleNav('home', '#team')}
                    className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white transition-all"
                  >
                    Team
                  </button>

                  <button
                    onClick={() => handleNav('home', '#reviews')}
                    className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white transition-all flex items-center space-x-1"
                  >
                    <span>Google Reviews</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </button>
                </nav>

                {/* Action Buttons & Theme Switcher */}
                <div className="flex items-center space-x-3">
                  
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none"
                    title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                    {isDark ? (
                      <Sun className="w-5 h-5 text-amber-400 hover:rotate-90 transition-transform duration-300" />
                    ) : (
                      <Moon className="w-5 h-5 text-brand-600 hover:-rotate-12 transition-transform duration-300" />
                    )}
                  </button>

                  {/* Book Demo CTA (Rexton Reference) */}
                  <button
                    onClick={onOpenConsultation}
                    className="hidden sm:inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:shadow-lg hover:shadow-brand-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <span>Book Free Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Mobile menu toggle */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 2: MODERN FLOATING GLASS PILL */}
      {/* ========================================================================= */}
      {navbarVariant === 'v2_modernFloating' && (
        <div className="max-w-6xl mx-auto px-4 pt-4">
          <div className="p-2.5 sm:p-3 rounded-full glass-panel border border-slate-200/80 dark:border-slate-800 shadow-2xl flex items-center justify-between backdrop-blur-xl">
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center pl-1 group focus:outline-none">
              <div className="h-10 px-3 py-1 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" alt="Yukti Logo" className="h-7 w-auto object-contain" />
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 text-xs font-bold">
              <button 
                onClick={() => handleNav('home')} 
                className={`px-3 py-1.5 rounded-full transition-all ${currentPage === 'home' ? 'bg-brand-500 text-white shadow-md' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')} 
                className={`px-3 py-1.5 rounded-full transition-all ${currentPage === 'about' ? 'bg-brand-500 text-white shadow-md' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                About
              </button>
              <button 
                onClick={() => handleNav('courses')} 
                className={`px-3 py-1.5 rounded-full transition-all ${currentPage.startsWith('course') ? 'bg-brand-500 text-white shadow-md' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                Courses (3 Tracks)
              </button>
              <button 
                onClick={() => handleNav('home', '#services')} 
                className="px-3 py-1.5 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Services
              </button>
              <button 
                onClick={() => handleNav('home', '#reviews')} 
                className="px-3 py-1.5 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1"
              >
                <span>Reviews</span>
                <span className="text-[10px] text-amber-500">★4.9</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 pr-1">
              <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-105 transition-all">
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-600" />}
              </button>
              <button 
                onClick={onOpenConsultation} 
                className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-primary text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                Book Demo
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 3: SYMMETRICAL EDITORIAL SPLIT */}
      {/* ========================================================================= */}
      {navbarVariant === 'v3_centeredBrand' && (
        <div className="bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 px-6 py-3 shadow-md backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left Nav */}
            <div className="hidden lg:flex items-center space-x-6 text-xs font-bold text-slate-700 dark:text-slate-300">
              <button onClick={() => handleNav('home')} className="hover:text-brand-600 transition-colors">Home</button>
              <button onClick={() => handleNav('about')} className="hover:text-brand-600 transition-colors">About Story</button>
              <button onClick={() => handleNav('courses')} className="hover:text-brand-600 transition-colors flex items-center space-x-1">
                <span>IT Courses</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              </button>
            </div>

            {/* Centered Brand Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center group focus:outline-none">
              <div className="h-12 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" alt="Yukti Logo" className="h-8 w-auto object-contain" />
              </div>
            </button>

            {/* Right Nav & Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-6 text-xs font-bold text-slate-700 dark:text-slate-300">
                <button onClick={() => handleNav('home', '#services')} className="hover:text-brand-600 transition-colors">Services</button>
                <button onClick={() => handleNav('home', '#roadmap')} className="hover:text-brand-600 transition-colors">Roadmap</button>
                <button onClick={() => handleNav('home', '#team')} className="hover:text-brand-600 transition-colors">Team</button>
              </div>

              <div className="flex items-center space-x-2">
                <button onClick={toggleTheme} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-600" />}
                </button>
                <button 
                  onClick={onOpenConsultation} 
                  className="px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Book Free Demo
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 4: CYBER COMMAND DOCK & SYSTEM TELEMETRY */}
      {/* ========================================================================= */}
      {navbarVariant === 'v4_commandDock' && (
        <div className="max-w-7xl mx-auto px-4 pt-3">
          <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-brand-500/30 shadow-2xl backdrop-blur-xl flex items-center justify-between text-slate-200">
            {/* Left Console Brand */}
            <div className="flex items-center space-x-3">
              <button onClick={() => handleNav('home')} className="flex items-center space-x-2">
                <div className="h-9 px-2 rounded-lg bg-white/10 border border-brand-400/40 flex items-center justify-center">
                  <img src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" alt="Yukti Logo" className="h-6 w-auto object-contain" />
                </div>
                <div className="text-left font-mono">
                  <span className="text-xs font-black text-white tracking-wider uppercase">YUKTI.CORE</span>
                  <span className="block text-[9px] text-emerald-400 font-bold">● ONLINE: 99.99%</span>
                </div>
              </button>

              {/* Quick Tech Badges */}
              <div className="hidden xl:flex items-center space-x-2 pl-4 border-l border-slate-800 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Python 3.12</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Spring Boot 3</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">DSA 350+</span>
              </div>
            </div>

            {/* Center Navigation Links */}
            <nav className="hidden md:flex items-center space-x-2 text-xs font-mono">
              <button onClick={() => handleNav('home')} className="px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-brand-400 transition-colors">/home</button>
              <button onClick={() => handleNav('about')} className="px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-brand-400 transition-colors">/about</button>
              <button onClick={() => handleNav('courses')} className="px-3 py-1.5 rounded-lg bg-brand-950/80 text-brand-300 border border-brand-800/60">/courses</button>
              <button onClick={() => handleNav('home', '#services')} className="px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-brand-400 transition-colors">/services</button>
              <button onClick={() => handleNav('home', '#reviews')} className="px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-emerald-400 transition-colors">/reviews★4.9</button>
            </nav>

            {/* Right Quick Telemetry Actions */}
            <div className="flex items-center space-x-2">
              <button onClick={handleWhatsApp} className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-emerald-400 text-xs font-mono hover:bg-emerald-900 transition-colors">
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Live Chat</span>
              </button>
              <button onClick={toggleTheme} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-400" />}
              </button>
              <button 
                onClick={onOpenConsultation} 
                className="px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs font-bold shadow-lg shadow-brand-500/30 transition-all"
              >
                Execute Demo &gt;
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 5: BRAND GRADIENT HEADER & LIVE ADMISSIONS TICKER */}
      {/* ========================================================================= */}
      {navbarVariant === 'v5_gradientBanner' && (
        <div className="w-full">
          {/* Top Live Admissions Ribbon */}
          <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-accent-primary text-white py-1 px-4 text-center text-xs font-bold shadow-inner">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <span className="hidden sm:inline">🚀 Admissions Open for 2026 Batches | 100% Placement Assistance</span>
              <span className="sm:hidden">🚀 New Batches Starting This Week!</span>
              <div className="flex items-center space-x-4">
                <button onClick={() => handleNav('course-python')} className="underline hover:text-brand-100 text-[11px]">Python</button>
                <button onClick={() => handleNav('course-java-fullstack')} className="underline hover:text-brand-100 text-[11px]">Java</button>
                <button onClick={() => handleNav('course-dsa')} className="underline hover:text-brand-100 text-[11px]">DSA</button>
              </div>
            </div>
          </div>

          {/* Main Nav Strip */}
          <div className="bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
              {/* Brand Logo */}
              <button onClick={() => handleNav('home')} className="flex items-center group focus:outline-none">
                <div className="h-11 px-3 py-1 rounded-xl bg-white/95 dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" alt="Yukti Logo" className="h-8 w-auto object-contain" />
                </div>
              </button>

              {/* Nav Links */}
              <div className="hidden lg:flex items-center space-x-1 font-semibold text-xs text-slate-700 dark:text-slate-200">
                <button onClick={() => handleNav('home')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">Home</button>
                <button onClick={() => handleNav('about')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">About</button>

                {/* Career Tracks Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                  onMouseLeave={() => setCoursesDropdownOpen(false)}
                >
                  <button 
                    onClick={() => handleNav('courses')} 
                    className={`px-3 py-2 rounded-lg font-bold flex items-center space-x-1.5 transition-all ${
                      currentPage === 'courses' || currentPage.startsWith('course')
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60'
                        : 'text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 text-brand-500" />
                    <span>Career Tracks</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-brand-500' : ''}`} />
                  </button>

                  {coursesDropdownOpen && (
                    <NavbarCoursesDropdown 
                      handleNav={handleNav} 
                      onOpenConsultation={onOpenConsultation} 
                    />
                  )}
                </div>

                <button onClick={() => handleNav('home', '#services')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">Services</button>
                <button onClick={() => handleNav('home', '#team')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">Team</button>
                <button onClick={() => handleNav('home', '#reviews')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">Reviews (4.9★)</button>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button onClick={toggleTheme} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-600" />}
                </button>
                <button 
                  onClick={onOpenConsultation}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary text-white font-bold text-xs shadow-md hover:scale-105 transition-all"
                >
                  Book Free Demo
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => handleNav('home')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Home
          </button>

          <button
            onClick={() => handleNav('about')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            About Us
          </button>

          {/* Mobile Courses Section */}
          <div className="p-3 rounded-2xl bg-brand-50/60 dark:bg-brand-950/40 space-y-2 border border-brand-200/60 dark:border-brand-800/60">
            <p className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">IT Training Courses</p>
            <button
              onClick={() => handleNav('course-python')}
              className="w-full text-left p-2 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900"
            >
              🐍 Python Training (Greater Noida)
            </button>
            <button
              onClick={() => handleNav('course-java-fullstack')}
              className="w-full text-left p-2 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900"
            >
              ☕ Java Full Stack (React + Spring Boot)
            </button>
            <button
              onClick={() => handleNav('course-dsa')}
              className="w-full text-left p-2 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900"
            >
              ⚡ Data Structures & Algorithms (DSA)
            </button>
            <button
              onClick={() => handleNav('courses')}
              className="w-full text-left p-2 rounded-lg text-xs font-bold text-brand-600 dark:text-brand-400"
            >
              → View All Career Courses
            </button>
          </div>

          <button
            onClick={() => handleNav('home', '#services')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Software Services
          </button>

          <button
            onClick={() => handleNav('home', '#roadmap')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Delivery Roadmap
          </button>

          <button
            onClick={() => handleNav('home', '#team')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Meet the Team
          </button>

          <button
            onClick={() => handleNav('home', '#reviews')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Google Reviews (4.9 ★)
          </button>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-3 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md text-center"
            >
              Book Free Demo / Consultation
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md flex items-center justify-center space-x-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
