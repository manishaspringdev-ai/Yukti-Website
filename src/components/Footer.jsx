import React from 'react';
import yuktiLogo from '../assets/yukti-logo.svg';
import { siteData } from '../data';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ChevronRight, 
  Clock, 
  GraduationCap, 
  Code2, 
  Headphones,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { LinkedInIcon, TwitterIcon, GithubIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer({ setCurrentPage, onOpenConsultation }) {
  const { brand } = siteData;

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

  const coursesCol1 = [
    { name: "Complete Python Training", pageKey: "course-python" },
    { name: "Java Full Stack Development", pageKey: "course-java-fullstack" },
    { name: "Data Structures & Algorithms (DSA)", pageKey: "course-dsa" },
    { name: "AI Full Stack Web Development", pageKey: "course-ai-fullstack" },
    { name: "Python Full Stack Development", pageKey: "course-python-fullstack" },
    { name: "MERN Stack Web Development", pageKey: "course-mern-stack" },
    { name: "React JS Frontend Engineering", pageKey: "course-react-js" },
    { name: "Spring Boot & Microservices", pageKey: "course-spring-boot" },
  ];

  const coursesCol2 = [
    { name: "Data Analytics & Python", pageKey: "course-data-analytics" },
    { name: "Core & Advanced Java Training", pageKey: "course-java" },
    { name: "AI & Machine Learning Specialist", pageKey: "course-ai-ml" },
    { name: "Relational DBMS & SQL Mastery", pageKey: "course-dbms" },
    { name: "NoSQL Database & MongoDB", pageKey: "course-nosql" },
    { name: "HTML5, CSS3 & Responsive Web", pageKey: "course-html-css" },
    { name: "Full Stack Software Engineering", pageKey: "course-fullstack" },
    { name: "Software Development & Testing", pageKey: "course-software-development" },
  ];

  const services = [
    { name: "Full Stack Web Development", hash: "#services" },
    { name: "Mobile App Development", hash: "#services" },
    { name: "Database & Cloud Architecture", hash: "#services" },
    { name: "Custom Enterprise Software", hash: "#services" },
    { name: "API & Microservices Engineering", hash: "#services" },
    { name: "Quality Assurance & Testing", hash: "#services" },
    { name: "24/7 SLA Maintenance & Support", hash: "#services" },
    { name: "Delivery Roadmap & Milestones", hash: "#roadmap" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      
      {/* Main 4-Column Section */}
      <div className="pt-8 sm:pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-slate-200/80 dark:border-slate-800">
            
            {/* Section 1: Our Courses (Part 1) */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  Our Courses
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs">
                {coursesCol1.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => handleNav(item.pageKey)} 
                      className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:translate-x-1 transition-all duration-200 flex items-center space-x-1.5 text-left group w-full font-medium"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2: Our Courses (Part 2) */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  Our Courses
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs">
                {coursesCol2.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => handleNav(item.pageKey)} 
                      className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:translate-x-1 transition-all duration-200 flex items-center space-x-1.5 text-left group w-full font-medium"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </button>
                  </li>
                ))}
                <li className="pt-2 space-y-2">
                  <button 
                    onClick={() => handleNav('training-institute')} 
                    className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
                  >
                    <span>🏢 Software Training Institute Greater Noida</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div>
                    <button 
                      onClick={() => handleNav('courses')} 
                      className="inline-flex items-center space-x-1 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors group"
                    >
                      <span>Explore All 15 Career Tracks</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 3: Our Services */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                <Code2 className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  Our Services
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs">
                {services.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => handleNav('home', item.hash)} 
                      className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:translate-x-1 transition-all duration-200 flex items-center space-x-1.5 text-left group w-full font-medium"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4: Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                <Headphones className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  Contact Details
                </h3>
              </div>
              
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Alpha 1 Commercial Belt / Knowledge Park Campus, Greater Noida & Sector 62, Noida, NCR, India
                  </span>
                </li>
                
                <li className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                  <a href={`tel:${brand.phone}`} className="hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">
                    {brand.phone}
                  </a>
                </li>
                
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                  <a href={`mailto:${brand.email}`} className="hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">
                    {brand.email}
                  </a>
                </li>

                <li className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM<br/><span className="text-emerald-600 dark:text-emerald-400 font-semibold">24/7 Dedicated Tech Support</span></span>
                </li>
              </ul>

              {/* Socials & WhatsApp */}
              <div className="pt-2 flex flex-col space-y-3">
                <div className="flex items-center space-x-2.5">
                  <a 
                    href={brand.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:bg-brand-600 hover:border-brand-600 text-slate-600 hover:text-white dark:text-slate-300 dark:hover:text-white transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href={brand.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:bg-brand-600 hover:border-brand-600 text-slate-600 hover:text-white dark:text-slate-300 dark:hover:text-white transition-all shadow-sm"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href={brand.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:bg-brand-600 hover:border-brand-600 text-slate-600 hover:text-white dark:text-slate-300 dark:hover:text-white transition-all shadow-sm"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <button 
                    onClick={handleWhatsApp} 
                    className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:bg-emerald-600 hover:border-emerald-600 text-slate-600 hover:text-white dark:text-slate-300 dark:hover:text-white transition-all shadow-sm"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <p>© {new Date().getFullYear()} {brand.name} Private Limited. All Rights Reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={onOpenConsultation} 
                className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-semibold transition-colors"
              >
                Book Free Consultation
              </button>
              <button 
                onClick={scrollToTop} 
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all flex items-center space-x-1.5"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
