import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, Heart, Shield, 
  Sparkles, ExternalLink, ArrowUp, Star, CheckCircle 
} from 'lucide-react';

export default function MainFooterSwitchable({ onOpenConsultation }) {
  const [footerMode, setFooterMode] = useState('v1'); // 'v1' (Enterprise) or 'v5' (Minimalist)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/90 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      
      {/* Switcher Pill Bar for User (V1 vs V5 switchable) */}
      <div className="max-w-7xl mx-auto px-4 pt-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-4">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Footer Layout:</span>
          <div className="inline-flex p-0.5 bg-slate-200 dark:bg-slate-800 rounded-lg text-[11px]">
            <button
              onClick={() => setFooterMode('v1')}
              className={`px-3 py-1 rounded-md font-bold transition-all ${
                footerMode === 'v1' 
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              V1: 4-Col Enterprise
            </button>
            <button
              onClick={() => setFooterMode('v5')}
              className={`px-3 py-1 rounded-md font-bold transition-all ${
                footerMode === 'v5' 
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              V5: Apple Minimalist
            </button>
          </div>
        </div>

        <button 
          onClick={scrollToTop}
          className="text-xs font-semibold text-slate-500 hover:text-brand-600 flex items-center gap-1"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {footerMode === 'v1' ? (
        /* V1: 4-Column Enterprise Portal */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Col 1: Brand & Logo */}
            <div className="space-y-4">
              <img 
                src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" 
                alt="Yukti Software Logo" 
                className="h-10 w-auto max-w-[170px] object-contain"
                onError={(e) => { e.currentTarget.src = '/yukti-logo.svg'; }}
              />
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Premier custom software development engineering firm and leading career accelerator institute in Greater Noida.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 / 5.0 Google Rating (380+ Reviews)</span>
              </div>
            </div>

            {/* Col 2: Services & Architecture */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                Engineering Services
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li><button onClick={() => scrollTo('services')} className="hover:text-brand-600 transition-colors">Custom Cloud Microservices</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-brand-600 transition-colors">Generative AI & Agentic LLMs</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-brand-600 transition-colors">Next.js & React Native Apps</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-brand-600 transition-colors">Cloud DevOps & SRE Telemetry</button></li>
              </ul>
            </div>

            {/* Col 3: Career Specializations */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                Career Specializations
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li><button onClick={() => scrollTo('courses')} className="hover:text-brand-600 transition-colors">Python, Data Science & AI (16 Wks)</button></li>
                <li><button onClick={() => scrollTo('courses')} className="hover:text-brand-600 transition-colors">Java Full Stack Spring Boot (20 Wks)</button></li>
                <li><button onClick={() => scrollTo('courses')} className="hover:text-brand-600 transition-colors">DSA & FAANG System Design (14 Wks)</button></li>
                <li><button onClick={onOpenConsultation} className="hover:text-brand-600 text-brand-600 dark:text-brand-400 font-semibold">100% Placement Assurance Cell</button></li>
              </ul>
            </div>

            {/* Col 4: Corporate Contact */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                Corporate Office
              </h4>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span>2nd Floor, Om Tower, Alpha 1 Commercial Belt, Greater Noida, UP 201308</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                  <a href="tel:+919910244342" className="hover:text-brand-600 font-semibold">+91 99102 44342</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                  <a href="mailto:contact@yuktisoftware.com" className="hover:text-brand-600 font-semibold">contact@yuktisoftware.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* V5: Apple Minimalist & Centered Certifications */
        <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
          <img 
            src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" 
            alt="Yukti Software Logo" 
            className="h-10 w-auto mx-auto object-contain"
            onError={(e) => { e.currentTarget.src = '/yukti-logo.svg'; }}
          />

          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <button onClick={() => scrollTo('hero')} className="hover:text-brand-600">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-brand-600">Services</button>
            <button onClick={() => scrollTo('courses')} className="hover:text-brand-600">Training Courses</button>
            <button onClick={() => scrollTo('roadmap')} className="hover:text-brand-600">Roadmap</button>
            <button onClick={() => scrollTo('team')} className="hover:text-brand-600">Team</button>
            <button onClick={() => scrollTo('reviews')} className="hover:text-brand-600">Reviews</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-brand-600">Contact</button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 text-[11px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
              ISO 9001:2015 Certified
            </span>
            <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-800">
              100% Placement Assurance
            </span>
          </div>
        </div>
      )}

      {/* Bottom Legal Copyright */}
      <div className="border-t border-slate-200 dark:border-slate-800/80 py-4 px-4 text-center text-[11px] text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Yukti Software Private Limited. All Rights Reserved. Engineered for Excellence.
      </div>
    </footer>
  );
}
