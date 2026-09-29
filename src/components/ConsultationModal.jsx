import React, { useState, useEffect } from 'react';
import { siteData } from '../data';
import { X, Send, CheckCircle2, Building2, GraduationCap, Sparkles, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitEnquiry } from '../services/leadService';
import { DEFAULT_SERVICES_LIST, DEFAULT_COURSES_LIST, loadAllAvailableCourses } from '../data/coursesCatalog';

export default function ConsultationModal({ isOpen, onClose, initialType = 'enterprise', initialCourse = '' }) {
  const [formType, setFormType] = useState(initialType);
  const [availableCourses, setAvailableCourses] = useState(DEFAULT_COURSES_LIST);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceOrCourse: initialCourse || (initialType === 'student' ? DEFAULT_COURSES_LIST[0].title : DEFAULT_SERVICES_LIST[0].name),
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch all available courses from Firestore + built-ins
  useEffect(() => {
    let isMounted = true;
    async function fetchCourses() {
      try {
        const list = await loadAllAvailableCourses();
        if (isMounted && list && list.length > 0) {
          setAvailableCourses(list);
        }
      } catch (e) {
        // Fallback to default
      }
    }
    fetchCourses();
    return () => { isMounted = false; };
  }, []);

  // Update initial choice if changed
  useEffect(() => {
    if (initialType) {
      setFormType(initialType);
    }
    if (initialCourse) {
      setFormData(prev => ({ ...prev, serviceOrCourse: initialCourse }));
    }
  }, [initialType, initialCourse]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitEnquiry({
        type: formType === 'student' ? 'course_enquiry' : 'software_development',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formType === 'student' ? formData.serviceOrCourse : '',
        service: formType === 'enterprise' ? formData.serviceOrCourse : '',
        message: formData.message,
        metadata: {
          category: formType,
          formSource: 'Free Consultation / Book Demo Modal'
        }
      });
    } catch (err) {
      console.error('Consultation submission error:', err);
    } finally {
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
    }
  };

  const enterpriseQuickOptions = [
    "Full Stack Web Development",
    "Mobile App Development",
    "Database & Data Security",
    "Cloud & DevOps Migration",
    "AI Solutions & Agents"
  ];

  const studentQuickOptions = [
    "Software Development & Testing",
    "Java Full Stack",
    "Python Full Stack",
    "AI Full Stack",
    "MERN Stack",
    "DSA & System Design"
  ];

  // Group courses by category for clean dropdown rendering
  const coursesByCategory = availableCourses.reduce((acc, course) => {
    const cat = course.category || 'General & Custom';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(course);
    return acc;
  }, {});

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5 space-y-1">
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
        <div className="flex items-center space-x-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 mb-4">
          <button
            type="button"
            onClick={() => {
              setFormType('enterprise');
              setFormData(prev => ({ ...prev, serviceOrCourse: DEFAULT_SERVICES_LIST[0].name }));
            }}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
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
              setFormData(prev => ({ ...prev, serviceOrCourse: availableCourses[0]?.title || DEFAULT_COURSES_LIST[0].title }));
            }}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
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
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                autoFocus
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Email <span className="text-rose-500">*</span>
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
                  Phone Number <span className="text-rose-500">*</span>
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

            {/* Course / Service Complete Dropdown */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  {formType === 'enterprise' ? 'Select Software Service' : 'Select Career Course Track'} <span className="text-rose-500">*</span>
                </label>
                <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">
                  {formType === 'enterprise' ? `${DEFAULT_SERVICES_LIST.length} Services Available` : `${availableCourses.length} Courses Available`}
                </span>
              </div>

              {formType === 'enterprise' ? (
                <div className="relative">
                  <select
                    value={formData.serviceOrCourse}
                    onChange={(e) => setFormData({ ...formData, serviceOrCourse: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all cursor-pointer appearance-none pr-9"
                  >
                    {DEFAULT_SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.name} className="dark:bg-slate-900">
                        {srv.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-3" />
                </div>
              ) : (
                <div className="relative">
                  <select
                    value={formData.serviceOrCourse}
                    onChange={(e) => setFormData({ ...formData, serviceOrCourse: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all cursor-pointer appearance-none pr-9"
                  >
                    {Object.entries(coursesByCategory).map(([category, courses]) => (
                      <optgroup key={category} label={category} className="dark:bg-slate-900 font-bold text-slate-500">
                        {courses.map((c) => (
                          <option key={c.id} value={c.title} className="dark:bg-slate-900 text-slate-900 dark:text-white font-normal">
                            {c.title} {c.badge ? `(${c.badge})` : ''} {c.isDynamic ? '★' : ''}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-3" />
                </div>
              )}

              {/* Popular Quick-Select Chips */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {(formType === 'enterprise' ? enterpriseQuickOptions : studentQuickOptions).map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      // If it's a student chip, find closest full title if needed
                      if (formType === 'student') {
                        const matched = availableCourses.find(c => c.title.toLowerCase().includes(opt.toLowerCase()));
                        setFormData({ ...formData, serviceOrCourse: matched ? matched.title : opt });
                      } else {
                        const matched = DEFAULT_SERVICES_LIST.find(s => s.name.toLowerCase().includes(opt.toLowerCase()));
                        setFormData({ ...formData, serviceOrCourse: matched ? matched.name : opt });
                      }
                    }}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-all cursor-pointer ${
                      formData.serviceOrCourse.toLowerCase().includes(opt.toLowerCase())
                        ? 'bg-brand-600 text-white shadow-xs'
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
              className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:shadow-lg hover:shadow-brand-500/25 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
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
