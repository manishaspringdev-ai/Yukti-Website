import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomizerProvider } from './context/CustomizerContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PythonCoursePage from './pages/PythonCoursePage';
import JavaFullStackCoursePage from './pages/JavaFullStackCoursePage';
import DsaCoursePage from './pages/DsaCoursePage';
import AllCoursesPage from './pages/AllCoursesPage';
import ConsultationModal from './components/ConsultationModal';
import ThemeCustomizerModal from './components/ThemeCustomizerModal';
import FloatingHelpBar from './components/FloatingHelpBar';
import { ArrowUp, Calendar } from 'lucide-react';

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

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'course-python':
        return (
          <PythonCoursePage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            setCurrentPage={handlePageChange}
          />
        );
      case 'course-java-fullstack':
        return (
          <JavaFullStackCoursePage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            setCurrentPage={handlePageChange}
          />
        );
      case 'course-dsa':
        return (
          <DsaCoursePage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            setCurrentPage={handlePageChange}
          />
        );
      case 'courses':
        return (
          <AllCoursesPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            setCurrentPage={handlePageChange}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            setCurrentPage={handlePageChange}
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <CustomizerProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
          
          {/* Navigation Bar */}
          <Navbar
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />

          {/* Dynamic Main Page Content */}
          <main className="flex-grow pt-20">
            {renderCurrentPage()}
          </main>

          {/* Footer */}
          <Footer
            setCurrentPage={handlePageChange}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />

          {/* Global Consultation Modal */}
          <ConsultationModal
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
          />

          {/* Client Presentation Mode & Live Customizer */}
          <ThemeCustomizerModal 
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
          />

          {/* Floating WhatsApp & Call Bar (PDF Change 11) */}
          <FloatingHelpBar onOpenConsultation={() => setIsConsultationOpen(true)} />

          {/* Floating Action Button (Back to top) */}
          {showBackToTop && (
            <div className="fixed bottom-24 right-6 z-40">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-all"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </CustomizerProvider>
    </ThemeProvider>
  );
}
