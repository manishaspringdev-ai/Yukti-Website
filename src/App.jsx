import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CoursesProvider } from './context/CoursesContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrainingCourses from './components/TrainingCourses';
import UpcomingBatches from './components/UpcomingBatches';
import Roadmap from './components/Roadmap';
import StatsHighlights from './components/StatsHighlights';
import Team from './components/Team';
import GoogleReviewsWidget from './components/GoogleReviewsWidget';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingHelpBar from './components/FloatingHelpBar';
import StructuredData from './components/StructuredData';
import ScrollProgressBar from './components/ScrollProgressBar';
import PageSkeletonLoader from './components/PageSkeletonLoader';
import { ArrowUp } from 'lucide-react';

import { getPageKeyFromPath, pushPageUrl, getUrlPathForPage } from './utils/routeUtils';

// Lazy loaded sub-pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AllCoursesPage = lazy(() => import('./pages/AllCoursesPage'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const TrainingInstitutePage = lazy(() => import('./pages/TrainingInstitutePage'));
const VerificationPage = lazy(() => import('./pages/VerificationPage'));

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageKeyFromPath(window.location.pathname));
  const [consultationModal, setConsultationModal] = useState({
    isOpen: false,
    type: 'enterprise',
    initialCourse: ''
  });
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Synchronize on browser Back/Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const pageKey = getPageKeyFromPath(window.location.pathname);
      setCurrentPage(pageKey);
      if (window.location.hash) {
        setTimeout(() => {
          const el = document.querySelector(window.location.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initial load canonical URL synchronization
  useEffect(() => {
    try {
      const initialKey = getPageKeyFromPath(window.location.pathname);
      const canonicalPath = getUrlPathForPage(initialKey);
      const currentFull = window.location.pathname;
      if (canonicalPath !== '/' && currentFull !== canonicalPath && !currentFull.includes('.')) {
        window.history.replaceState({ pageKey: initialKey }, '', canonicalPath + window.location.hash);
      }
    } catch (e) {
      console.warn('Initial URL sync error:', e);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page, hash = '') => {
    setCurrentPage(page);
    pushPageUrl(page, hash);
    if (page === 'home' && hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (options = {}) => {
    if (typeof options === 'string') {
      // If a course name was passed as a string
      setConsultationModal({
        isOpen: true,
        type: 'student',
        initialCourse: options
      });
    } else if (options && typeof options === 'object' && !options.nativeEvent) {
      setConsultationModal({
        isOpen: true,
        type: options.type || (options.course ? 'student' : 'enterprise'),
        initialCourse: options.course || ''
      });
    } else {
      setConsultationModal(prev => ({
        ...prev,
        isOpen: true
      }));
    }
  };

  const handleCloseConsultation = () => {
    setConsultationModal(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  const navigateToServices = () => {
    if (currentPage !== 'home') {
      handlePageChange('home', '#services');
    } else {
      const el = document.querySelector('#services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      try {
        window.history.pushState({ pageKey: 'home', hash: '#services' }, '', '/#services');
      } catch (e) {}
    }
  };

  const navigateToTraining = () => {
    if (currentPage !== 'home') {
      handlePageChange('home', '#training');
    } else {
      const el = document.querySelector('#training');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      try {
        window.history.pushState({ pageKey: 'home', hash: '#training' }, '', '/#training');
      } catch (e) {}
    }
  };

  const renderContent = () => {
    if (currentPage && currentPage.startsWith('course-')) {
      const docxKey = currentPage.replace('course-', '');
      const keyMap = {
        'python-fullstack': 'python-fullstack',
        'python': 'python',
        'java-fullstack': 'java-fullstack',
        'java': 'java',
        'advanced-java': 'advanced-java',
        'dsa': 'dsa',
        'ai-fullstack': 'ai-fullstack',
        'ai-ml': 'ai-ml',
        'fullstack': 'fullstack',
        'software-development': 'software-development',
        'software-training': 'software-development',
        'software-development-course': 'software-development',
        'mern-stack': 'mern-stack',
        'react-js': 'react-js',
        'spring-boot': 'spring-boot',
        'data-analytics': 'data-analytics',
        'sql': 'sql',
        'dbms': 'dbms',
        'dbms-institute': 'dbms-institute',
        'database-management-system-institute': 'dbms-institute',
        'dbms-training': 'dbms-institute',
        'nosql': 'nosql',
        'html-css': 'html-css',
        'programming': 'programming',
        'programming-course': 'programming'
      };
      return (
        <Suspense fallback={<PageSkeletonLoader type="detail" />}>
          <CourseDetailPage 
            courseKey={keyMap[docxKey] || docxKey} 
            onOpenConsultation={handleOpenConsultation} 
            setCurrentPage={handlePageChange} 
          />
        </Suspense>
      );
    }

    switch (currentPage) {
      case 'about':
        return (
          <Suspense fallback={<PageSkeletonLoader type="about" />}>
            <AboutPage onOpenConsultation={handleOpenConsultation} />
          </Suspense>
        );
      case 'courses':
        return (
          <Suspense fallback={<PageSkeletonLoader type="courses" />}>
            <AllCoursesPage onOpenConsultation={handleOpenConsultation} setCurrentPage={handlePageChange} />
          </Suspense>
        );
      case 'gallery':
      case 'videos':
        return (
          <Suspense fallback={<PageSkeletonLoader type="courses" />}>
            <GalleryPage onOpenConsultation={handleOpenConsultation} />
          </Suspense>
        );
      case 'careers':
      case 'internship':
      case 'internships':
        return (
          <Suspense fallback={<PageSkeletonLoader type="courses" />}>
            <CareersPage onOpenConsultation={handleOpenConsultation} />
          </Suspense>
        );
      case 'training-institute':
      case 'institute':
      case 'software-training-institute':
      case 'software-training-institute-greater-noida':
        return (
          <Suspense fallback={<PageSkeletonLoader type="about" />}>
            <TrainingInstitutePage 
              onOpenConsultation={handleOpenConsultation} 
              setCurrentPage={handlePageChange} 
            />
          </Suspense>
        );
      case 'verify':
      case 'verify-certificate':
      case 'certificate-verification':
        return (
          <Suspense fallback={<PageSkeletonLoader type="about" />}>
            <VerificationPage onOpenConsultation={handleOpenConsultation} />
          </Suspense>
        );
      case 'home':
      default:
        return (
          <>
            <Hero
              onOpenConsultation={handleOpenConsultation}
              onNavigateServices={navigateToServices}
              onNavigateTraining={navigateToTraining}
            />
            
            <Services onOpenConsultation={handleOpenConsultation} />
            
            <TrainingCourses 
              onOpenConsultation={handleOpenConsultation}
              setCurrentPage={handlePageChange}
            />

            <UpcomingBatches
              onOpenConsultation={handleOpenConsultation}
              setCurrentPage={handlePageChange}
            />
            
            <Roadmap onOpenConsultation={handleOpenConsultation} />
            
            <StatsHighlights onOpenConsultation={handleOpenConsultation} />
            
            <Team onOpenConsultation={handleOpenConsultation} />
            
            <GoogleReviewsWidget onOpenConsultation={handleOpenConsultation} />
            
            <ContactForm />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <CoursesProvider>
        {/* Top Window Scroll Progress Bar */}
        <ScrollProgressBar />

        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
          
          {/* Schema.org SEO & Metadata */}
          <StructuredData />

          {/* Top Navbar */}
          <Navbar
            currentPage={currentPage || 'home'}
            setCurrentPage={handlePageChange}
            onOpenConsultation={handleOpenConsultation}
          />

          {/* Main Content */}
          <main className="flex-grow pt-16 sm:pt-20 lg:pt-24">
            {renderContent()}
          </main>

          {/* Footer */}
          <Footer
            setCurrentPage={handlePageChange}
            onOpenConsultation={handleOpenConsultation}
          />

          {/* Global Consultation Booking Modal with All Dynamic Courses & Services */}
          <ConsultationModal
            isOpen={consultationModal.isOpen}
            initialType={consultationModal.type}
            initialCourse={consultationModal.initialCourse}
            onClose={handleCloseConsultation}
          />

          {/* WhatsApp & Call Quick Floating Bar */}
          <FloatingHelpBar onOpenConsultation={handleOpenConsultation} />

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
      </CoursesProvider>
    </ThemeProvider>
  );
}
