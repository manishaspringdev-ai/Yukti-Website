import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, Calendar, Send } from 'lucide-react';
import { SiteDataService } from '../services/dataService';

export default function MainConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    track: 'Python & AI Cohort',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await SiteDataService.submitContactInquiry(form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-4">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>Free 1-on-1 Discovery</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Book Priority Consultation
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Talk directly to senior architects regarding projects, batch seats, and syllabus.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
            <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300">Appointment Booked!</h4>
            <p className="text-xs text-emerald-700 dark:text-emerald-400">We will call you shortly on {form.phone}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Aditi Rao"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone / WhatsApp</label>
              <input 
                type="tel" 
                required
                placeholder="e.g. +91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Program of Interest</label>
              <select 
                value={form.track}
                onChange={(e) => setForm({ ...form, track: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
              >
                <option>Python & AI Cohort</option>
                <option>Java Full Stack Microservices</option>
                <option>DSA & FAANG System Design</option>
                <option>Enterprise Software Consultation</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm 1-on-1 Consultation</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
