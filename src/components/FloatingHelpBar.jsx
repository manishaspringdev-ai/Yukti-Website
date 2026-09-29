import React, { useState, useEffect, useRef } from 'react';
import { siteData } from '../data';
import { Phone, MessageCircle, X, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingHelpBar({ onOpenConsultation }) {
  const { brand } = siteData;
  const [showCallPopup, setShowCallPopup] = useState(false);
  const popupRef = useRef(null);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Yukti Software, I want to inquire about your software development services and IT training courses in Greater Noida.");
    window.open(`https://wa.me/919582815419?text=${text}`, '_blank');
  };

  // Close call popup on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowCallPopup(false);
      }
    };
    if (showCallPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCallPopup]);

  return (
    <>
      {/* Floating Right Action Bar for Mobile & Desktop */}
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center space-x-1.5 sm:space-x-3">
        
        {/* WhatsApp Direct Chat Trigger */}
        <button
          onClick={handleWhatsAppClick}
          className="group flex items-center space-x-1 sm:space-x-2 px-2.5 py-2 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all border border-emerald-500/40"
          aria-label="Chat on WhatsApp"
          title="Direct WhatsApp Chat"
        >
          <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform shrink-0" />
          <span className="hidden md:inline whitespace-nowrap">Chat on WhatsApp</span>
          <span className="md:hidden text-[11px] font-bold">Chat</span>
        </button>

        {/* Call Now Button Trigger */}
        <button
          onClick={() => setShowCallPopup(!showCallPopup)}
          className="group flex items-center space-x-1 sm:space-x-2 px-2.5 py-2 sm:px-4 sm:py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs sm:text-sm shadow-xl border border-slate-700/60 hover:scale-105 active:scale-95 transition-all"
          aria-label="Call Now"
          title="Direct Call Support"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 group-hover:rotate-12 transition-transform shrink-0" />
          <span className="hidden md:inline whitespace-nowrap">Call Now</span>
          <span className="md:hidden text-[11px] font-bold">Call</span>
        </button>

      </div>

      {/* Quick Call Modal Popup */}
      {showCallPopup && (
        <div 
          ref={popupRef}
          className="fixed bottom-18 right-3 sm:bottom-22 sm:right-6 z-50 w-76 sm:w-80 p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl animate-fadeIn space-y-4"
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-sm">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Direct Advisory Call</p>
                <p className="text-[10px] text-slate-400">Greater Noida & NCR Center</p>
              </div>
            </div>
            <button
              onClick={() => setShowCallPopup(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
              aria-label="Close popup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Speak directly with our senior course counselor or technical lead:
            </p>
            <a
              href={`tel:${brand.phone}`}
              className="block p-3 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-center text-sm font-black text-brand-700 dark:text-brand-300 hover:scale-[1.02] transition-transform font-mono shadow-sm"
            >
              📞 {brand.phone}
            </a>
          </div>

          <button
            onClick={() => { setShowCallPopup(false); onOpenConsultation(); }}
            className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors text-center"
          >
            Or Request Free Callback
          </button>
        </div>
      )}
    </>
  );
}

