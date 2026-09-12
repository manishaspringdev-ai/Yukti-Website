import React, { useState } from 'react';
import { siteData } from '../data';
import { Phone, MessageCircle, X, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingHelpBar({ onOpenConsultation }) {
  const { brand } = siteData;
  const [showCallPopup, setShowCallPopup] = useState(false);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Yukti Software, I want to inquire about your software development services and IT training courses in Greater Noida.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating Bottom Action Bar for Mobile & Desktop */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center space-x-3">
        
        {/* WhatsApp Direct Chat Trigger */}
        <button
          onClick={handleWhatsAppClick}
          className="group flex items-center space-x-2 px-3.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
          title="Direct WhatsApp Chat"
        >
          <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline font-bold">Chat on WhatsApp</span>
        </button>

        {/* Call Now Button Trigger */}
        <button
          onClick={() => setShowCallPopup(!showCallPopup)}
          className="group flex items-center space-x-2 px-3.5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs sm:text-sm shadow-2xl border border-slate-700/50 hover:scale-105 active:scale-95 transition-all"
          aria-label="Call Now"
          title="Direct Call Support"
        >
          <Phone className="w-4 h-4 text-brand-400 dark:text-brand-600 group-hover:rotate-12 transition-transform" />
          <span className="hidden md:inline font-bold">Call Now</span>
        </button>

      </div>

      {/* Quick Call Modal Popup */}
      {showCallPopup && (
        <div className="fixed bottom-20 left-6 z-50 w-80 p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl animate-fadeIn space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Call Support</p>
                <p className="text-[10px] text-slate-400">Greater Noida & NCR</p>
              </div>
            </div>
            <button
              onClick={() => setShowCallPopup(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Speak directly with our senior course counselor or technical lead:
            </p>
            <a
              href={`tel:${brand.phone}`}
              className="block p-3 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-center text-sm font-black text-brand-700 dark:text-brand-300 hover:scale-102 transition-transform font-mono"
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
