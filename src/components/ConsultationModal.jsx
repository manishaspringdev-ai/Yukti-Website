import React, { useState, useEffect } from 'react';
import { siteData } from '../data';
import { X, Send, CheckCircle2, Building2, GraduationCap, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formType, setFormType] = useState('enterprise');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceOrCourse: 'Full Stack Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }

      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2500);
    }, 700);
  };

  const enterpriseQuickOptions = [
    "Full Stack Web Development",
    "Mobile App Development",
    "Cloud & DevOps Migration",
    "Database Architecture"
  ];

  const studentQuickOptions = [
    "Python Programming",
    "Java Full Stack",
    "Data Structures (DSA)",
    "AI & Machine Learning"
  ];

  const currentQuickOptions = formType === 'enterprise' ? enterpriseQuickOptions : studentQuickOptions;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 dark:text-brand-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Priority Consultation & Advisory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Schedule a Free Consultation
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Connect directly with our engineering leadership & senior career mentors.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center space-x-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 mb-5">
          <button
            type="button"
            onClick={() => {
              setFormType('enterprise');
              setFormData(prev => ({ ...prev, serviceOrCourse: enterpriseQuickOptions[0] }));
            }}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
              formType === 'enterprise'
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Software Solution</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setFormType('student');
              setFormData(prev => ({ ...prev, serviceOrCourse: studentQuickOptions[0] }));
            }}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
              formType === 'student'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Career Counseling</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Request Confirmed!</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
              Our technical director / senior counselor will call you within 1 business hour.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                autoFocus
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91..."
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
              </div>
            </div>

            {/* Quick-Select Topic Chips */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                {formType === 'enterprise' ? 'Select Service Domain' : 'Select Career Track'}
              </label>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {currentQuickOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFormData({...formData, serviceOrCourse: opt})}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      formData.serviceOrCourse === opt
                        ? 'bg-brand-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                Short Note / Queries
              </label>
              <textarea
                rows="2"
                placeholder="Tell us about your project requirements or career goals..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:shadow-lg hover:shadow-brand-500/25 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Confirming..." : "Confirm Free Advisory Session"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

