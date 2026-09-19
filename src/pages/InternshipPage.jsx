import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Award, 
  Clock, 
  Building2, 
  Send, 
  Check, 
  ShieldCheck, 
  Terminal, 
  Code2, 
  Binary, 
  Cpu, 
  Database,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

const INTERNSHIP_DOMAINS = [
  { id: 'fullstack', name: 'Full Stack Web (MERN / Next.js)', icon: Code2, openings: '12 Seats' },
  { id: 'python-ai', name: 'Python, Data Analytics & GenAI', icon: Terminal, openings: '10 Seats' },
  { id: 'java', name: 'Java Full Stack & Spring Boot', icon: Layers, openings: '8 Seats' },
  { id: 'dsa', name: 'DSA & Competitive Programming', icon: Binary, openings: '15 Seats' },
  { id: 'cloud', name: 'Cloud Computing & DevOps (AWS)', icon: Cpu, openings: '6 Seats' }
];

export default function InternshipPage({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('paid');
  const [selectedDomain, setSelectedDomain] = useState('fullstack');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    semester: '6th Semester / Final Year',
    trackType: 'Paid Internship (Stipend-based)',
    domain: 'Full Stack Web (MERN / Next.js)',
    githubOrResume: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          semester: '6th Semester / Final Year',
          trackType: 'Paid Internship (Stipend-based)',
          domain: 'Full Stack Web (MERN / Next.js)',
          githubOrResume: ''
        });
      }, 3000);
    }, 700);
  };

  return (
    <div className="py-10 sm:py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Industrial Internship & Training (Paid & Unpaid)
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Bridge the gap between college academics and corporate expectations. Work on live production deployments with senior software architects.
          </p>
        </div>

        {/* Dual Track Comparison: Paid vs Unpaid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PAID INTERNSHIP TRACK */}
          <div className={`p-8 rounded-3xl transition-all duration-300 relative border-2 flex flex-col justify-between ${
            activeTab === 'paid' 
              ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-2xl scale-[1.01]' 
              : 'bg-white/70 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  <span>💰 Merit / Screening Based</span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">Duration: 3 - 6 Months</span>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Paid Industrial Internship Track</h2>
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-2">
                  ₹8,000 – ₹25,000 <span className="text-sm font-semibold text-slate-500">/ month stipend</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                  Allocated directly to live client projects, enterprise microservices, and client codebases.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">What You Get:</h4>
                {[
                  "Monthly performance-linked stipend (₹8k–₹25k/mo)",
                  "Direct contribution to client SaaS & web products",
                  "1-on-1 Code reviews by Technical Directors",
                  "Pre-Placement Offer (PPO) and full-time career conversion opportunities",
                  "Verified Work Experience Certificate & Letter of Recommendation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('paid');
                setFormData(prev => ({ ...prev, trackType: 'Paid Internship (Stipend-based)' }));
                const formEl = document.querySelector('#internship-form');
                if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all text-center"
            >
              Apply for Paid Internship Track
            </button>
          </div>

          {/* UNPAID / INDUSTRIAL TRAINING TRACK */}
          <div className={`p-8 rounded-3xl transition-all duration-300 relative border-2 flex flex-col justify-between ${
            activeTab === 'unpaid' 
              ? 'bg-white dark:bg-slate-900 border-brand-500 shadow-2xl scale-[1.01]' 
              : 'bg-white/70 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300">
                  <span>🎓 Summer / Winter Training</span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">Duration: 6 Weeks / 6 Months</span>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Industrial Training & Capstone Track</h2>
                <p className="text-3xl font-black text-brand-600 dark:text-brand-400 mt-2">
                  100% Practical <span className="text-sm font-semibold text-slate-500">Classroom + Live Labs</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                  Specially designed for college students completing their mandatory university internship & minor/major projects.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">What You Get:</h4>
                {[
                  "ISO 9001:2015 Recognized Internship Certificate",
                  "Major & Minor Project Report + Source Code + Synopsis",
                  "Daily practical lab coding with industry frameworks",
                  "Dedicated doubt clearance & mock interview preparation",
                  "Direct entry to campus placement drives with 120+ MNCs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('unpaid');
                setFormData(prev => ({ ...prev, trackType: 'Industrial Training / Summer-Winter Track' }));
                const formEl = document.querySelector('#internship-form');
                if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-black text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all text-center"
            >
              Apply for Industrial Training Track
            </button>
          </div>

        </div>

        {/* Domain Tracks Available */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white text-center">
            Available Technology Tracks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INTERNSHIP_DOMAINS.map((domain) => {
              const IconComp = domain.icon;
              return (
                <div
                  key={domain.id}
                  onClick={() => {
                    setSelectedDomain(domain.id);
                    setFormData(prev => ({ ...prev, domain: domain.name }));
                  }}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border text-center space-y-2 ${
                    selectedDomain === domain.id
                      ? 'bg-brand-50 dark:bg-brand-950 border-brand-500 shadow-md scale-105'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{domain.name}</p>
                  <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold">
                    {domain.openings}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Form */}
        <div id="internship-form" className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-black text-brand-600 uppercase tracking-wider">Fast-Track Registration</span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Internship Application Form</h3>
            <p className="text-xs text-slate-500">Apply for the upcoming batch in Greater Noida Center.</p>
          </div>

          {isSubmitted ? (
            <div className="py-10 text-center space-y-3 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white">Internship Application Received!</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                Our internship coordinator will contact you with test syllabus & batch schedules within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">College / University *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Galgotias, Sharda, GL Bajaj, Bennett..."
                    value={formData.college}
                    onChange={(e) => setFormData({...formData, college: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Selected Internship Track</label>
                  <select
                    value={formData.trackType}
                    onChange={(e) => setFormData({...formData, trackType: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  >
                    <option value="Paid Internship (Stipend-based)">💰 Paid Internship (Stipend-based)</option>
                    <option value="Industrial Training / Summer-Winter Track">🎓 Industrial Training / Summer-Winter Track</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Technology Domain</label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({...formData, domain: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  >
                    {INTERNSHIP_DOMAINS.map(d => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">GitHub Profile / Resume Link</label>
                <input
                  type="url"
                  placeholder="https://github.com/username or Drive link (Optional)"
                  value={formData.githubOrResume}
                  onChange={(e) => setFormData({...formData, githubOrResume: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 via-emerald-500 to-accent-primary hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Submitting Application..." : "Submit Internship Application"}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
