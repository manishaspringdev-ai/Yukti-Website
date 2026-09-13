import React, { useState } from 'react';
import { 
  Send, MessageSquare, Bot, Calculator, Phone, Mail, 
  MapPin, Clock, Sparkles, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { SiteDataService } from '../services/dataService';

export default function MainContactHybrid() {
  const [activeMode, setActiveMode] = useState('form'); // 'form' or 'bot'
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Corporate Enterprise Project',
    message: ''
  });

  // Bot Simulator State
  const [botStep, setBotStep] = useState(0);
  const [botAnswers, setBotAnswers] = useState({ type: '', timeline: '', budget: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await SiteDataService.submitContactInquiry(formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', inquiryType: 'Corporate Enterprise Project', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation & Contact Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start Your Transformation Today
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Connect directly with our engineering architects or calculate your instant project quotation below.
          </p>

          {/* Mode Switcher Pill (Mix of V1 & V4) */}
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mt-4">
            <button
              onClick={() => setActiveMode('form')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'form' 
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Enterprise & Student Form (V1)
            </button>
            <button
              onClick={() => setActiveMode('bot')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeMode === 'bot' 
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Instant AI Quotation Bot (V4)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Office Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Yukti Software Headquarters
              </h3>
              
              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span>2nd Floor, Om Tower, Alpha 1 Commercial Belt, Greater Noida, UP 201308</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <a href="tel:+919910244342" className="hover:text-brand-600 font-semibold">+91 99102 44342</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <a href="mailto:contact@yuktisoftware.com" className="hover:text-brand-600 font-semibold">contact@yuktisoftware.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>Mon - Sat: 9:30 AM - 7:30 PM IST</span>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="https://wa.me/919910244342?text=Hello%20Yukti%20Software,%20I%20want%20to%20visit%20your%20office%20in%20Greater%20Noida" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="p-4 bg-brand-50 dark:bg-brand-950/40 rounded-xl border border-brand-200 dark:border-brand-800 text-xs text-brand-800 dark:text-brand-300 space-y-1">
              <span className="font-bold block">15-Minute Priority Response</span>
              <p>All enterprise and student inquiries are reviewed directly by our senior consulting architects.</p>
            </div>
          </div>

          {/* Right Column: Switchable Interactive Panel */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            
            {activeMode === 'form' ? (
              /* V1 Dual-Mode Form */
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                {formSubmitted && (
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Inquiry submitted successfully! Our architect will contact you shortly.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Inquiry Purpose</label>
                    <select 
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
                      <option>Corporate Enterprise Project</option>
                      <option>Python & AI Training Track</option>
                      <option>Java Full Stack Course</option>
                      <option>DSA & FAANG Prep</option>
                      <option>Hire Yukti Alumni / Placements</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Message / Scope Details</label>
                  <textarea 
                    rows="3"
                    placeholder="Describe your project requirements or training goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-600 hover:from-brand-500 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Priority Consultation Request</span>
                </button>
              </form>
            ) : (
              /* V4 Instant Interactive Quotation Bot Simulator */
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <Bot className="w-5 h-5 text-brand-500" />
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Live Project Estimator Assistant</h4>
                </div>

                {botStep === 0 && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      What type of project or training do you require?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {['Custom Web & Mobile App', 'Enterprise Cloud & DevOps', 'Generative AI Solution', 'Student Career Cohort'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setBotAnswers({ ...botAnswers, type: opt }); setBotStep(1); }}
                          className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-left hover:border-brand-500 transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {botStep === 1 && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      What is your expected timeline?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {['Urgent (Under 4 Weeks)', 'Standard (1 - 3 Months)', 'Flexible / Long Term', 'Immediate Next Batch'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setBotAnswers({ ...botAnswers, timeline: opt }); setBotStep(2); }}
                          className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-left hover:border-brand-500 transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {botStep === 2 && (
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-3 text-left">
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase">Estimated Scope Summary:</span>
                    <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <p>• Scope: <span className="font-bold text-brand-600">{botAnswers.type}</span></p>
                      <p>• Timeline: <span className="font-bold text-brand-600">{botAnswers.timeline}</span></p>
                      <p>• Deliverable Model: <span className="font-bold text-emerald-600">Dedicated Sprint Pod & SLA</span></p>
                    </div>
                    <button 
                      onClick={() => { setActiveMode('form'); setBotStep(0); }}
                      className="w-full py-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow"
                    >
                      Confirm & Schedule Discovery Call
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
