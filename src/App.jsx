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
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingHelpBar from './components/FloatingHelpBar';
import StructuredData from './components/StructuredData';
import ScrollProgressBar from './components/ScrollProgressBar';
import PageSkeletonLoader from './components/PageSkeletonLoader';
import { ArrowUp } from 'lucide-react';

// Lazy loaded sub-pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AllCoursesPage = lazy(() => import('./pages/AllCoursesPage'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const TrainingInstitutePage = lazy(() => import('./pages/TrainingInstitutePage'));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [consultationModal, setConsultationModal] = useState({
    isOpen: false,
    type: 'enterprise',
    initialCourse: ''
  });
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
        'html-css': 'html-css'
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
        <main className="flex-grow pt-24 sm:pt-28 lg:pt-24">
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
    </ThemeProvider>
  );
}
