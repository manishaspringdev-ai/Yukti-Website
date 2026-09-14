import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrainingCourses from './components/TrainingCourses';
import Roadmap from './components/Roadmap';
import StatsHighlights from './components/StatsHighlights';
import Team from './components/Team';
import GoogleReviewsWidget from './components/GoogleReviewsWidget';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingHelpBar from './components/FloatingHelpBar';
import StructuredData from './components/StructuredData';
import ScrollProgressBar from './components/ScrollProgressBar';
import BrandPreloader from './components/BrandPreloader';
import PageSkeletonLoader from './components/PageSkeletonLoader';
import { ArrowUp } from 'lucide-react';

// Lazy loaded sub-pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AllCoursesPage = lazy(() => import('./pages/AllCoursesPage'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToServices = () => {
    if (currentPage !== 'home') {
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
    if (currentPage !== 'home') {
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
        <Suspense fallback={<PageSkeletonLoader type="detail" />}>
          <CourseDetailPage 
            courseKey={keyMap[docxKey] || docxKey} 
            onOpenConsultation={() => setIsConsultationOpen(true)} 
            setCurrentPage={handlePageChange} 
          />
        </Suspense>
      );
    }

    switch (currentPage) {
      case 'about':
        return (
          <Suspense fallback={<PageSkeletonLoader type="about" />}>
            <AboutPage onOpenConsultation={() => setIsConsultationOpen(true)} />
          </Suspense>
        );
      case 'courses':
        return (
          <Suspense fallback={<PageSkeletonLoader type="courses" />}>
            <AllCoursesPage onOpenConsultation={() => setIsConsultationOpen(true)} setCurrentPage={handlePageChange} />
          </Suspense>
        );
      case 'gallery':
      case 'videos':
        return (
          <Suspense fallback={<PageSkeletonLoader type="courses" />}>
            <GalleryPage onOpenConsultation={() => setIsConsultationOpen(true)} />
          </Suspense>
        );
      case 'careers':
      case 'internship':
      case 'internships':
        return (
          <Suspense fallback={<PageSkeletonLoader type="courses" />}>
            <CareersPage onOpenConsultation={() => setIsConsultationOpen(true)} />
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
            
            <TrainingCourses 
              onOpenConsultation={() => setIsConsultationOpen(true)}
              setCurrentPage={handlePageChange}
            />
            
            <Roadmap onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <StatsHighlights onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <Team onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <GoogleReviewsWidget onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <Testimonials onOpenConsultation={() => setIsConsultationOpen(true)} />
            
            <ContactForm />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      {/* Brand Initial Splash Preloader */}
      <BrandPreloader />

      {/* Top Window Scroll Progress Bar */}
      <ScrollProgressBar />

      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
        
        {/* Schema.org SEO & Metadata */}
        <StructuredData />

        {/* Top Navbar */}
        <Navbar
          currentPage={currentPage || 'home'}
          setCurrentPage={handlePageChange}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Main Content */}
        <main className="flex-grow pt-20">
          {renderContent()}
        </main>

        {/* Footer */}
        <Footer
          setCurrentPage={handlePageChange}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Global Consultation Booking Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />

        {/* WhatsApp & Call Quick Floating Bar */}
        <FloatingHelpBar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Back To Top Action */}
        {showBackToTop && (
          <div className="fixed bottom-18 right-4 sm:bottom-22 sm:right-6 z-30 animate-fadeIn">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xl hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </ThemeProvider>
  );
}
