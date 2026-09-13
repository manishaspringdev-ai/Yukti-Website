import React, { useState, useEffect } from 'react';
import { siteData } from '../data';


import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  Calendar,
  MessageCircle,
  Bot,
  User,
  ShieldCheck,
  Zap,
  Calculator,
  UploadCloud,
  FileText,
  ChevronDown,
  ChevronUp,
  Globe2,
  Check,
  ArrowRight,
  Headphones
} from 'lucide-react';

export default function ContactForm() {
  const { consultationSection, brand } = siteData;
  const [contactVariant, setContactVariant] = useState('v1_dualMode');

  const [formType, setFormType] = useState('enterprise');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizationOrCollege: '',
    serviceOrCourse: 'Full Stack Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Wizard state for V3
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    goal: 'Enterprise Full Stack Web',
    timeline: '1 - 3 Months',
    name: '',
    email: '',
    phone: ''
  });

  // Chat simulator state for V4
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! I am the Yukti AI Consultation Concierge. Are you inquiring for Enterprise Software Development or Career Training?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // 60-Second Callback state for V6
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackTimer, setCallbackTimer] = useState(null);
  const [callbackActive, setCallbackActive] = useState(false);

  // Scope Configurator for V7
  const [selectedScopes, setSelectedScopes] = useState(['Enterprise Web Application', 'Cloud & DevOps']);

  // FAQ state for V9
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // RFP file upload state for V10
  const [rfpFileName, setRfpFileName] = useState('');
  const [rfpBudget, setRfpBudget] = useState('$10k - $25k');

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { sender: 'bot', text: `Got it! I have queued your request for "${userMsg}". Our engineering leadership will contact you shortly.` }
      ]);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    }, 600);
  };

  const handleStart60sCallback = (e) => {
    e.preventDefault();
    if (!callbackPhone) return;
    setCallbackActive(true);
    setCallbackTimer(60);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
  };

  useEffect(() => {
    let interval = null;
    if (callbackActive && callbackTimer > 0) {
      interval = setInterval(() => {
        setCallbackTimer(t => t - 1);
      }, 1000);
    } else if (callbackTimer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [callbackActive, callbackTimer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          organizationOrCollege: '',
          serviceOrCourse: 'Full Stack Web Development',
          message: ''
        });
      }, 500);
    }, 800);
  };

  const toggleScope = (item) => {
    if (selectedScopes.includes(item)) {
      setSelectedScopes(selectedScopes.filter(i => i !== item));
    } else {
      setSelectedScopes([...selectedScopes, item]);
    }
  };

  const scopePriceMap = {
    'Enterprise Web Application': 4500,
    'Cloud Architecture & DevOps': 3000,
    'Mobile Application (iOS & Android)': 5000,
    'AI & Automation Integration': 4000,
    'Custom ERP / CRM System': 6500,
    'QA & Security Audit': 2000
  };

  const totalEstimatedBudget = selectedScopes.reduce((acc, curr) => acc + (scopePriceMap[curr] || 2500), 0);

  const faqs = [
    {
      q: "What is your typical project turnaround time?",
      a: "Depending on scale, MVP prototypes launch in 3–4 weeks, while full enterprise web platforms and mobile ecosystems are delivered in 8–12 weeks with milestone sprint demos."
    },
    {
      q: "Do you offer post-deployment maintenance and SLA support?",
      a: "Yes! Every enterprise delivery includes 60 days of complimentary warranty support, followed by tiered 24/7 SLA maintenance, server monitoring, and continuous security patching."
    },
    {
      q: "How does the training course placement guarantee work?",
      a: "Students enrolled in our Job-Ready Tracks undergo 50+ hours of live coding, 4 portfolio capstone projects, and 5 mock technical rounds with active industry mentors until successfully placed."
    },
    {
      q: "Can we hire dedicated engineering pods from Yukti Software?",
      a: "Absolutely. We offer dedicated developer pods (Full Stack, Cloud, AI, QA) with agile sprint managers on monthly or quarterly staff-augmentation retainers."
    }
  ];

  return (
    <section id="consultation" className="py-12 sm:py-16 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
            <span className="font-medium">{consultationSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {consultationSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {consultationSection.subtitle}
          </p>
        </div>

        {/* Smart Category Switcher: Software Business (V1) vs Training Courses (V4) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fadeIn">
          <button
            type="button"
            onClick={() => setContactVariant('v1_dualMode')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 shadow-sm ${
              contactVariant === 'v1_dualMode'
                ? 'bg-brand-600 text-white shadow-brand-500/25 scale-105 ring-2 ring-brand-400/30'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
            }`}
          >
            <Building2 className="w-4 h-4 text-brand-400" />
            <span>🏢 Software & Business Inquiries (Form V1)</span>
          </button>

          <button
            type="button"
            onClick={() => setContactVariant('v4_instantChat')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 shadow-sm ${
              contactVariant === 'v4_instantChat'
                ? 'bg-emerald-600 text-white shadow-emerald-500/25 scale-105 ring-2 ring-emerald-400/30'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
            }`}
          >
            <Bot className="w-4 h-4 text-emerald-400" />
            <span>🎓 Training & Career Counseling (AI Concierge V4)</span>
          </button>
        </div>

        {/* 10-Variant Switcher Bar */}
        

        {/* ========================================================================= */}
        {/* VARIANT 1: DUAL-MODE ENTERPRISE & STUDENT FORM */}
        {/* ========================================================================= */}
        {contactVariant === 'v1_dualMode' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fadeIn">
            <div className="lg:col-span-5 space-y-8">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
                <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400 font-bold text-sm">
                  <Building2 className="w-5 h-5" />
                  <span>For Business & Enterprise Inquiries</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {consultationSection.description}
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/80 shadow-sm space-y-3">
                <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                  <GraduationCap className="w-5 h-5" />
                  <span>For Students & Career Counseling</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {consultationSection.studentNote}
                </p>
              </div>

              <div className="space-y-4 pt-2 text-slate-700 dark:text-slate-300">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Customer Support Staff</p>
                    <p className="text-sm font-bold">{brand.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email Consultation</p>
                    <p className="text-sm font-bold">{brand.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xl relative">
                <div className="flex items-center space-x-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 mb-8">
                  <button
                    type="button"
                    onClick={() => setFormType('enterprise')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                      formType === 'enterprise'
                        ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Software Solutions Inquiry</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('student')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                      formType === 'student'
                        ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Student Training Counseling</span>
                  </button>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">Request Received!</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Our team will contact you within 2 business hours.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm"
                      />
                      <input
                        type="text"
                        placeholder={formType === 'enterprise' ? 'Company Name' : 'Qualification / College'}
                        value={formData.organizationOrCollege}
                        onChange={(e) => setFormData({...formData, organizationOrCollege: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm"
                      />
                    </div>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your requirements or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm resize-none"
                    ></textarea>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Sending Request..." : "Schedule Free Consultation"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 2: CALENDAR SCHEDULER SIMULATOR */}
        {/* ========================================================================= */}
        {contactVariant === 'v2_splitCalendar' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl max-w-4xl mx-auto space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-brand-400" />
              <div>
                <h4 className="text-xl font-bold">Pick Consultation Date & Time Slot</h4>
                <p className="text-xs text-slate-400">Direct 30-min strategy session with Yukti Software Engineering Leads.</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">1. Select Preferred Day</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {['Today', 'Tomorrow', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((d, i) => (
                  <button key={i} className={`p-3 rounded-xl text-xs font-bold border transition-all ${i === 0 ? 'bg-brand-600 border-brand-500 text-white shadow-lg' : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">2. Select Time Window (IST)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['10:00 AM - 10:30 AM', '02:00 PM - 02:30 PM', '04:30 PM - 05:00 PM', '06:00 PM - 06:30 PM'].map((t, i) => (
                  <button key={i} className={`p-2.5 rounded-xl border text-xs transition-all ${i === 1 ? 'bg-accent-primary/20 border-accent-primary text-accent-primary font-bold' : 'bg-slate-800 border-slate-700 text-slate-200 hover:border-brand-500'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <input type="text" placeholder="Your Name *" className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white" />
              <input type="email" placeholder="Your Work Email *" className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white" />
            </div>

            <button onClick={handleSubmit} className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-xl transition-all flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Confirm 30-Min Strategy Call Reservation</span>
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 3: 3-STEP PROJECT WIZARD */}
        {/* ========================================================================= */}
        {contactVariant === 'v3_wizard' && (
          <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl glass-card border border-brand-500/30 shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">{wizardStep}</span>
                <span className="text-xs font-bold text-brand-600">Step {wizardStep} of 3</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {wizardStep === 1 ? '1. Scope & Goals' : wizardStep === 2 ? '2. Estimated Timeline' : '3. Stakeholder Info'}
              </span>
            </div>

            {wizardStep === 1 && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">What is your primary project goal?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'Enterprise Full Stack Web', desc: 'Scalable SaaS, React, Node, microservices' },
                    { title: 'Custom Mobile Application', desc: 'iOS & Android native & React Native' },
                    { title: 'Cloud Migration & DevOps', desc: 'AWS/Azure pipelines, Kubernetes, Docker' },
                    { title: 'IT Talent Placement Training', desc: 'Career tracks for engineering students' }
                  ].map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => { setWizardData({...wizardData, goal: opt.title}); setWizardStep(2); }} 
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-left hover:border-brand-500 hover:bg-brand-50/50 dark:hover:bg-brand-950/40 transition-all group"
                    >
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">{opt.title} →</p>
                      <p className="text-[10px] text-slate-400 mt-1">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {wizardStep === 2 && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Target Launch Timeline</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: '< 1 Month (Urgent)', desc: 'Rapid MVP sprint' },
                    { label: '1 - 3 Months', desc: 'Standard production build' },
                    { label: '3 - 6 Months', desc: 'Enterprise architecture' }
                  ].map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => { setWizardData({...wizardData, timeline: opt.label}); setWizardStep(3); }} 
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-center hover:border-brand-500 hover:bg-brand-50/50 dark:hover:bg-brand-950/40 transition-all"
                    >
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{opt.label}</p>
                      <p className="text-[10px] text-slate-400 mt-1">{opt.desc}</p>
                    </button>
                  ))}
                </div>
                <div className="flex justify-start">
                  <button onClick={() => setWizardStep(1)} className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white">
                    ← Back to Step 1
                  </button>
                </div>
              </div>
            )}

            {wizardStep === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800 text-xs text-slate-700 dark:text-slate-300">
                  <p><strong>Goal:</strong> {wizardData.goal} | <strong>Timeline:</strong> {wizardData.timeline}</p>
                </div>
                <input required type="text" placeholder="Your Name *" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs" />
                <input required type="email" placeholder="Work Email *" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs" />
                <input required type="tel" placeholder="Phone Number *" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs" />
                <button type="submit" className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all">
                  Finish & Request Tailored Proposal
                </button>
                <div className="flex justify-start">
                  <button type="button" onClick={() => setWizardStep(2)} className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white">
                    ← Back to Step 2
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 4: LIVE QUOTATION BOT SIMULATOR */}
        {/* ========================================================================= */}
        {contactVariant === 'v4_instantChat' && (
          <div className="max-w-2xl mx-auto rounded-3xl bg-slate-900 text-white border border-slate-800 overflow-hidden shadow-2xl animate-fadeIn">
            <div className="p-4 bg-brand-600 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="w-6 h-6 text-white" />
                <div>
                  <p className="text-xs font-bold">Yukti AI Quotation Concierge</p>
                  <p className="text-[10px] text-brand-200">Online • Instant response</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] bg-white/20 text-white font-mono">v2.4 AI Active</span>
            </div>
            
            <div className="p-6 space-y-3 min-h-[220px] max-h-[300px] overflow-y-auto">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl text-xs max-w-[80%] ${msg.sender === 'user' ? 'bg-brand-600 text-white' : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick chips */}
            <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 flex items-center space-x-2 overflow-x-auto text-[10px]">
              <span className="text-slate-400 shrink-0">Quick Ask:</span>
              {['Need Full Stack Web App', 'MERN Stack Training Fee', 'Cloud Migration SLA', 'Book 15-Min Strategy Call'].map((chip, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setChatInput(chip);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white shrink-0 transition-colors border border-slate-700"
                >
                  {chip}
                </button>
              ))}
            </div>

            <form onSubmit={handleSendChat} className="p-3 bg-slate-950 border-t border-slate-800 flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your question or project scope..."
                className="flex-1 p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-500"
              />
              <button type="submit" className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-colors">
                Send
              </button>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 5: EXECUTIVE DIRECT CONNECT */}
        {/* ========================================================================= */}
        {contactVariant === 'v5_executiveContact' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fadeIn">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>Priority Hotline</span>
              </span>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">Call Leadership Directly</h4>
              <p className="text-xs text-slate-500">For enterprise RFPs, urgent deployments, and institutional placement drives.</p>
              <div className="p-4 rounded-2xl bg-brand-50 dark:bg-brand-950/60 font-mono text-sm font-bold text-brand-700 dark:text-brand-300 flex items-center justify-between">
                <span>{brand.phone}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-brand-200 dark:bg-brand-800 text-brand-900 dark:text-brand-100 font-sans">Mon-Sat</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <span className="text-xs font-bold text-accent-primary uppercase tracking-widest flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Email SLA</span>
              </span>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">Executive Inbox</h4>
              <p className="text-xs text-slate-500">Guaranteed 2-hour SLA response on business days with engineering lead review.</p>
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 font-mono text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                <span>{brand.email}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-sans">2h SLA</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 6: 60-SECOND PRIORITY CALLBACK */}
        {/* ========================================================================= */}
        {contactVariant === 'v6_callback60s' && (
          <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 text-white border border-brand-500/40 shadow-2xl space-y-6 animate-fadeIn text-center">
            <div className="w-16 h-16 rounded-3xl bg-brand-500/20 text-brand-400 flex items-center justify-center mx-auto shadow-inner">
              <Zap className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Need Urgent Technical Counsel?</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Enter your direct phone number below. Our senior solution architect will trigger a callback within 60 seconds.
              </p>
            </div>

            {callbackActive ? (
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-brand-500/50 space-y-3">
                <p className="text-xs text-brand-400 uppercase font-bold tracking-widest">Routing Priority Call...</p>
                <div className="text-4xl font-black font-mono text-white">
                  00:{callbackTimer < 10 ? `0${callbackTimer}` : callbackTimer}
                </div>
                <p className="text-xs text-slate-400">Connecting to {callbackPhone} • Please keep your line open.</p>
              </div>
            ) : (
              <form onSubmit={handleStart60sCallback} className="space-y-4 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="tel"
                    required
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Enter Your Phone Number (e.g. +91 98765 43210)"
                    className="flex-1 p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-500"
                  />
                  <button
                    type="submit"
                    className="py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Call Me Now</span>
                  </button>
                </div>
                <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-400">
                  <span className="flex items-center space-x-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> <span>100% Confidential</span></span>
                  <span>•</span>
                  <span>Direct Architect Call</span>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 7: SCOPE & BUDGET CONFIGURATOR */}
        {/* ========================================================================= */}
        {contactVariant === 'v7_scopeConfigurator' && (
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-3">
                <Calculator className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Interactive Scope & Budget Configurator</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Select your required technical pillars for an instant cost estimation.</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400">Est. Investment</span>
                <p className="text-xl font-black text-brand-600 dark:text-brand-400">${totalEstimatedBudget.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(scopePriceMap).map(([scopeName, price], i) => {
                const isSelected = selectedScopes.includes(scopeName);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleScope(scopeName)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50/60 dark:bg-brand-950/50 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : '+'}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">~${price}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{scopeName}</p>
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <input required type="text" placeholder="Your Name" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
              <input required type="email" placeholder="Your Email" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
              <button type="submit" className="py-3 px-4 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-500 shadow-md">
                Lock In Estimation & Request SOW
              </button>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 8: GLOBAL TECH HUB & MAP DECK */}
        {/* ========================================================================= */}
        {contactVariant === 'v8_hubLocations' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fadeIn">
            {[
              {
                city: 'Delhi NCR Hub',
                role: 'Headquarters & Delivery Center',
                address: brand.location,
                phone: brand.phone,
                badge: 'Primary HQ'
              },
              {
                city: 'Bengaluru CoE',
                role: 'Cloud & AI Innovation Lab',
                address: 'Indiranagar 100ft Road, Bengaluru, KA',
                phone: '+91 80 4120 5990',
                badge: 'R&D Center'
              },
              {
                city: 'Global Remote Support',
                role: 'North America & EMEA Clients',
                address: '24/7 Managed Cloud & DevOps Operations',
                phone: brand.email,
                badge: '24/7 Global SLA'
              }
            ].map((hub, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                      {hub.badge}
                    </span>
                    <Globe2 className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{hub.city}</h4>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">{hub.role}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{hub.address}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <p className="text-xs font-mono text-slate-700 dark:text-slate-300 font-bold">{hub.phone}</p>
                  <button onClick={handleSubmit} className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-bold transition-all">
                    Book On-Site Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 9: FAQ ACCORDION + QUICK FORM */}
        {/* ========================================================================= */}
        {contactVariant === 'v9_faqSplit' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto animate-fadeIn">
            {/* FAQs Accordion */}
            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h3>
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : i)}
                      className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white hover:text-brand-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-brand-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Still have questions? Let's talk</h4>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input required type="text" placeholder="Your Name *" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
                <input required type="email" placeholder="Your Email *" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
                <textarea rows="3" placeholder="How can our engineers help you?" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs resize-none"></textarea>
                <button type="submit" className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md">
                  Send Question to Solution Lead
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VARIANT 10: ENTERPRISE RFP SUBMISSION */}
        {/* ========================================================================= */}
        {contactVariant === 'v10_rfpUpload' && (
          <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Submit Enterprise Request for Proposal (RFP)</h4>
                <p className="text-xs text-slate-500">Attach project specs, SRS documents, or architecture RFPs under strict NDA.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Enterprise / Organization Name *" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
                <input required type="text" placeholder="Authorizing Officer Name *" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="email" placeholder="Official Corporate Email *" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
                <select 
                  value={rfpBudget} 
                  onChange={(e) => setRfpBudget(e.target.value)}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs"
                >
                  <option value="$10k - $25k">$10k - $25k (Growth Tier)</option>
                  <option value="$25k - $50k">$25k - $50k (Mid-Market Scale)</option>
                  <option value="$50k - $100k+">$50k - $100k+ (Enterprise Architecture)</option>
                </select>
              </div>

              {/* Simulated Upload Dropzone */}
              <div 
                onClick={() => setRfpFileName('Enterprise_Yukti_Project_Scope_RFP.pdf')}
                className="p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-brand-500 text-center cursor-pointer transition-colors space-y-2 bg-slate-50/50 dark:bg-slate-800/40"
              >
                <UploadCloud className="w-8 h-8 text-brand-500 mx-auto" />
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {rfpFileName ? `Attached: ${rfpFileName}` : "Drag and drop your RFP / SRS document here or click to browse"}
                </p>
                <p className="text-[10px] text-slate-400">Supported formats: PDF, DOCX, XLSX (Max 50MB)</p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>All documents are automatically encrypted & covered under standard Mutual NDA.</span>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Submit RFP For Formal Commercial Bid</span>
              </button>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DOCX REFERENCE VARIANT: EXPERT CONSULTATION & SOW DECK */}
        {/* ========================================================================= */}
        {contactVariant === 'v_docx_consultation' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto animate-fadeIn">
            
            {/* Left Column: Direct Document Text & Guidance */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Document Consultation Reference</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                  Connect with Our Experts or Schedule a Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Delivering optimized software solutions that are customised to fit all your requirements. In case you are confused or need more details about our services or the price range, please connect with our customer support staff.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  They will help you save time and connect you with our experts for further consultation. Schedule a consultation for a personalized requirements evaluation and gain deeper industrial insights!
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/30 text-brand-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Customer Support Staff</p>
                    <p className="text-xs font-bold text-white font-mono">{brand.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/30 text-brand-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Official Communication</p>
                    <p className="text-xs font-bold text-white font-mono">{brand.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Fast Form */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Personalized Requirements Evaluation</h4>
              <p className="text-xs text-slate-500">Fill in your details below for a dedicated session with our solution architect.</p>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white">Evaluation Booked!</h5>
                  <p className="text-xs text-slate-500">Our customer support staff will connect you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs">
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input required type="text" placeholder="Full Name *" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
                  <input required type="email" placeholder="Corporate / Student Email *" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
                  <input required type="tel" placeholder="Phone Number *" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs" />
                  <textarea rows="3" placeholder="Brief about your business software requirement or career goal..." className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs resize-none"></textarea>
                  <button type="submit" className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Schedule Personalized Consultation</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
