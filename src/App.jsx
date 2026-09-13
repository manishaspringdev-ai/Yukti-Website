import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomizerProvider } from './context/CustomizerContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConsultationModal from './components/ConsultationModal';
import FloatingHelpBar from './components/FloatingHelpBar';
import { ArrowUp, Sparkles, Layers, Shield } from 'lucide-react';

// Lazy loaded non-critical routes
const MainWebsiteApp = lazy(() => import('./main_website/MainWebsiteApp'));
const AdminDashboard = lazy(() => import('./main_website/admin/AdminDashboard'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AllCoursesPage = lazy(() => import('./pages/AllCoursesPage'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const ThemeCustomizerModal = lazy(() => import('./components/ThemeCustomizerModal'));

export default function App() {
  const [appView, setAppView] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#admin') return 'admin';
      if (window.location.hash === '#main') return 'main';
      if (window.location.hash === '#studio') return 'studio';
    }
    return 'main';
  });

  const [currentPage, setCurrentPage] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#admin') setAppView('admin');
      else if (hash === '#studio') setAppView('studio');
      else if (hash === '#main' || hash === '') setAppView('main');
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

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

  const switchView = (view) => {
    setAppView(view);
    if (view === 'admin') window.location.hash = 'admin';
    else if (view === 'studio') window.location.hash = 'studio';
    else window.location.hash = 'main';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStudioPage = () => {
    if (currentPage.startsWith('course-')) {
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
            setCurrentPage={handlePageChange} 
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
            <AllCoursesPage onOpenConsultation={() => setIsConsultationOpen(true)} setCurrentPage={handlePageChange} />
          </Suspense>
        );
      case 'home':
      default:
        return <HomePage onOpenConsultation={() => setIsConsultationOpen(true)} setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <ThemeProvider>
      <CustomizerProvider>
        {/* Floating 3-Way Mode Switcher */}
        <div className="fixed top-2.5 left-4 z-50">
          <div className="bg-slate-900/95 text-white backdrop-blur-md rounded-full p-1 border border-slate-700/80 shadow-2xl flex items-center gap-1 text-[11px] font-bold">
            
            <button
              onClick={() => switchView('main')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
                appView === 'main'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Main Production Site</span>
            </button>

            <button
              onClick={() => switchView('studio')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
                appView === 'studio'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Design Studio</span>
            </button>

            <button
              onClick={() => switchView('admin')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
                appView === 'admin'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin CMS</span>
            </button>
          </div>
        </div>

        <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-emerald-400 font-bold">Loading Yukti Software...</div>}>
          {appView === 'admin' ? (
            <AdminDashboard 
              onExitAdmin={() => switchView('main')} 
              onSwitchStudio={() => switchView('studio')} 
            />
          ) : appView === 'main' ? (
            <MainWebsiteApp 
              onOpenAdmin={() => switchView('admin')} 
              currentPage={currentPage}
              setCurrentPage={handlePageChange}
            />
          ) : (
            <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
              <Navbar
                currentPage={currentPage}
                setCurrentPage={handlePageChange}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />

              <main className="flex-grow pt-20">
                {renderStudioPage()}
              </main>

              <Footer
                setCurrentPage={handlePageChange}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />

              <ConsultationModal
                isOpen={isConsultationOpen}
                onClose={() => setIsConsultationOpen(false)}
              />

              <ThemeCustomizerModal 
                currentPage={currentPage}
                setCurrentPage={handlePageChange}
              />

              <FloatingHelpBar onOpenConsultation={() => setIsConsultationOpen(true)} />

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
          )}
        </Suspense>
      </CustomizerProvider>
    </ThemeProvider>
  );
}
