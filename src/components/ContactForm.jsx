import React, { useState, useEffect } from 'react';
import { siteData } from '../data';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building2,
  ChevronDown
} from 'lucide-react';
import { submitEnquiry } from '../services/leadService';
import { DEFAULT_SERVICES_LIST, DEFAULT_COURSES_LIST, loadAllAvailableCourses } from '../data/coursesCatalog';

export default function ContactForm() {
  const { brand } = siteData;

  const [availableCourses, setAvailableCourses] = useState(DEFAULT_COURSES_LIST);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'Software Solutions',
    selectedItem: DEFAULT_SERVICES_LIST[0].name,
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
        // Safe fallback
      }
    }
    fetchCourses();
    return () => { isMounted = false; };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'inquiryType') {
      const defaultItem = value === 'IT Training Courses' 
        ? (availableCourses[0]?.title || DEFAULT_COURSES_LIST[0].title)
        : DEFAULT_SERVICES_LIST[0].name;
      setFormData(prev => ({ ...prev, inquiryType: value, selectedItem: defaultItem }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const isCourse = formData.inquiryType === 'IT Training Courses';
      await submitEnquiry({
        type: isCourse ? 'course_enquiry' : 'software_development',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: isCourse ? formData.selectedItem : '',
        service: !isCourse ? formData.selectedItem : '',
        message: formData.message,
        metadata: {
          organization: formData.organization,
          inquiryCategory: formData.inquiryType,
          selectedTarget: formData.selectedItem,
          formSource: 'Homepage Consultation / Contact Form'
        }
      });
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          inquiryType: 'Software Solutions',
          selectedItem: DEFAULT_SERVICES_LIST[0].name,
          message: ''
        });
      }, 500);
    }
  };

  // Group courses by category
  const coursesByCategory = availableCourses.reduce((acc, course) => {
    const cat = course.category || 'General & Custom';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(course);
    return acc;
  }, {});

  return (
    <section id="consultation" className="pt-2 sm:pt-4 pb-6 sm:pb-8 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Exact Content Provided by User */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* H3 Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Connect with Our Experts or Schedule a Consultation
            </h3>

            {/* Primary Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Delivering optimized software solutions that are customised to fit all your requirements. In case you are confused or need more details about our services or the price range, please connect with our customer support staff. They will help you save time and connect you with our experts for further consultation.
            </p>

            {/* Highlight Box: Secondary Consultation Prompt */}
            <div className="p-4 sm:p-5 rounded-2xl bg-brand-50/80 dark:bg-brand-950/50 border border-brand-200/70 dark:border-brand-800/70 shadow-sm flex items-start space-x-3.5">
              <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                Schedule a consultation for a personalized requirements evaluation and gain deeper industrial insights!
              </p>
            </div>

            {/* Direct Contact Details Quick Bar */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Direct Support</p>
                  <p className="font-bold text-slate-900 dark:text-white">{brand.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Email Us</p>
                  <p className="font-bold text-slate-900 dark:text-white truncate">{brand.email}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Us Form */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-7 lg:p-8 shadow-xl relative overflow-hidden">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    Thank You! We Have Received Your Request
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Our software experts will review your details and reach out within 2 hours for your personalized consultation.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-700 transition-colors cursor-pointer shadow"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        Get In Touch
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Fill out the form below for a quick response
                      </p>
                    </div>
                    <span className="self-start sm:self-auto text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold whitespace-nowrap shadow-xs">
                      ⚡ Fast 2-Hour Response
                    </span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Inquiry Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 95828 15419"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Inquiry Category
                      </label>
                      <div className="relative">
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all appearance-none pr-9 font-medium cursor-pointer"
                        >
                          <option value="Software Solutions">Software Solutions & Custom Dev</option>
                          <option value="IT Training Courses">IT Training & Placement Courses</option>
                          <option value="Architecture Consultation">Architecture & Tech Consultation</option>
                          <option value="Other Inquiries">General / Other Inquiries</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Course / Service Selection Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>
                        {formData.inquiryType === 'IT Training Courses' ? 'Select Specific IT Course' : 'Select Specific Service Track'}
                      </span>
                      <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">
                        {formData.inquiryType === 'IT Training Courses' ? `${availableCourses.length} Courses Live` : `${DEFAULT_SERVICES_LIST.length} Services`}
                      </span>
                    </label>

                    {formData.inquiryType === 'IT Training Courses' ? (
                      <div className="relative">
                        <select
                          name="selectedItem"
                          value={formData.selectedItem}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all appearance-none pr-9 font-medium cursor-pointer"
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
                        <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-3.5" />
                      </div>
                    ) : (
                      <div className="relative">
                        <select
                          name="selectedItem"
                          value={formData.selectedItem}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all appearance-none pr-9 font-medium cursor-pointer"
                        >
                          {DEFAULT_SERVICES_LIST.map((srv) => (
                            <option key={srv.id} value={srv.name} className="dark:bg-slate-900">
                              {srv.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Organization Name (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Organization / College Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your Company or Institute"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Tell us about your requirements or goals <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your software project, timeline, or training requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Submitting Request...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <span>Send Message & Schedule Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
