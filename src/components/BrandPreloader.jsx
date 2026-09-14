import React, { useState, useEffect } from 'react';
import yuktiLogo from '../assets/yukti-logo.svg';

export default function BrandPreloader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Graceful brief splash animation
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShouldRender(false), 500); // Remove from DOM after fade-out transition
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-slate-50/98 dark:bg-slate-950/98 backdrop-blur-2xl transition-opacity duration-500 ease-out ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background Soft Glows */}
      <div className="absolute w-80 h-80 rounded-full bg-brand-500/15 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-accent-primary/10 blur-3xl animate-pulse pointer-events-none -bottom-10" />

      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Animated Brand Logo Container in Crisp Light Card */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand-500/30 to-accent-primary/30 blur-lg animate-pulse" />
          <div className="relative px-7 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-brand-500/10 flex items-center justify-center">
            <img 
              src={yuktiLogo} 
              alt="Yukti Software" 
              className="h-11 w-auto object-contain animate-float"
            />
          </div>
        </div>

        {/* Loading Spinner & Progress Text */}
        <div className="flex flex-col items-center space-y-2.5">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-sans font-bold tracking-wider text-slate-700 dark:text-slate-300">
              Initializing Experience...
            </span>
          </div>
          <div className="w-40 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary rounded-full animate-marquee" />
          </div>
        </div>
      </div>
    </div>
  );
}

