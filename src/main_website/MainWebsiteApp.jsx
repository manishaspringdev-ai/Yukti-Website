import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrainingCourses from '../components/TrainingCourses';
import Roadmap from '../components/Roadmap';
import StatsHighlights from '../components/StatsHighlights';
import Team from '../components/Team';
import GoogleReviewsWidget from '../components/GoogleReviewsWidget';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import FloatingHelpBar from '../components/FloatingHelpBar';
import StructuredData from './components/StructuredData';
import { useCustomizer } from '../context/CustomizerContext';
import { ArrowUp, Shield } from 'lucide-react';

// Lazy loaded routes for sub-pages
const AboutPage = lazy(() => import('../pages/AboutPage'));
const AllCoursesPage = lazy(() => import('../pages/AllCoursesPage'));
const CourseDetailPage = lazy(() => import('../pages/CourseDetailPage'));

export default function MainWebsiteApp({ onOpenAdmin, currentPage = 'home', setCurrentPage }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { 
    setColorPreset, 
    setFontPreset,
    setNavbarVariant, 
    setDropdownVariant, 
    setHeroVariant, 
    setServicesVariant, 
    setTrainingVariant, 
    setRoadmapVariant, 
    setTeamVariant, 
    setTestimonialsVariant,
    setContactVariant,
    setFooterVariant,
    setHideVariantSwitchers 
  } = useCustomizer();

  // Enforce the chosen variants on mount for Main Site
  useEffect(() => {
    setColorPreset('yuktiEmerald');
    setFontPreset('spaceGrotesk');
    setNavbarVariant('v5_gradientBanner');
    setDropdownVariant('v1_megaSplit');
    setHeroVariant('v1_neosaas');
    setServicesVariant('v1_tabs');
    setTrainingVariant('v1_bento');
    setRoadmapVariant('v1_timeline');
    setTeamVariant('v2_bentoLeadership');
    setTestimonialsVariant('v_docx_record');
    setContactVariant('v1_dualMode');
    if (setHideVariantSwitchers) setHideVariantSwitchers(true);
    return () => { if (setHideVariantSwitchers) setHideVariantSwitchers(false); };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToServices = () => {
    if (currentPage !== 'home' && setCurrentPage) {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.querySelector('#services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector('#services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToTraining = () => {
    if (currentPage !== 'home' && setCurrentPage) {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.querySelector('#training');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector('#training');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    if (currentPage && currentPage.startsWith('course-')) {
      const docxKey = currentPage.replace('course-', '');
      const keyMap = {
        'python-fullstack': 'python-fullstack',
        'python': 'python',
        'java-fullstack': 'advanced-java',
        'java': 'java',
        'advanced-java': 'advanced-java',
        'dsa': 'dsa',
        'ai-fullstack': 'ai-fullstack',
        'ai-ml': 'ai-ml',
        'fullstack': 'fullstack',
        'mern-stack': 'mern-stack',
        'react-js': 'react-js',
        'spring-boot': 'spring-boot',
        'data-analytics': 'data-analytics',
        'dbms': 'dbms',
        'nosql': 'nosql',
        'html-css': 'html-css'
      };
      return (
        <Suspense fallback={<div className="py-24 text-center text-sm font-bold text-slate-400">Loading syllabus...</div>}>
          <CourseDetailPage 
            courseKey={keyMap[docxKey] || docxKey} 
            onOpenConsultation={() => setIsConsultationOpen(true)} 
            setCurrentPage={setCurrentPage} 
          />
        </Suspense>
      );
    }

    switch (currentPage) {
      case 'about':
        return (
          <Suspense fallback={<div className="py-24 text-center text-sm font-bold text-slate-400">Loading...</div>}>
            <AboutPage onOpenConsultation={() => setIsConsultationOpen(true)} />
          </Suspense>
        );
      case 'courses':
        return (
          <Suspense fallback={<div className="py-24 text-center text-sm font-bold text-slate-400">Loading catalog...</div>}>
            <AllCoursesPage onOpenConsultation={() => setIsConsultationOpen(true)} setCurrentPage={setCurrentPage} />
          </Suspense>
        );
      case 'home':
      default:
        return (
          <>
            <Hero
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onNavigateServices={navigateToServices}
              onNavigateTraining={navigateToTraining}
            />
            
            <Services onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <TrainingCourses onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <Roadmap onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <StatsHighlights onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <Team />
            
            <GoogleReviewsWidget onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <Testimonials />
            
            <ContactForm />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* Schema.org SEO & Agentic Browsing Metadata */}
      <StructuredData />

      {/* Reused Navbar V5 with Dropdown V1 */}
      <Navbar
        currentPage={currentPage || 'home'}
        setCurrentPage={setCurrentPage || (() => {})}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Layout with Reused Rich Components */}
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>

      {/* Reused Footer with Light/Dark and V1/V5 switchable capability */}
      <Footer
        setCurrentPage={setCurrentPage || (() => {})}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Floating WhatsApp & Call Quick Help Bar */}
      <FloatingHelpBar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Floating Action Buttons */}
      {showBackToTop && (
        <div className="fixed bottom-20 right-6 z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
}
