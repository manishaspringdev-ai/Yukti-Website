import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Send, 
  Building2, 
  Users, 
  HeartHandshake, 
  TrendingUp,
  Laptop,
  GraduationCap,
  Award,
  Zap,
  Code2
} from 'lucide-react';
import confetti from 'canvas-confetti';

const ALL_POSITIONS = [
  // PAID INTERNSHIPS
  {
    id: "intern-1",
    title: "Full Stack Web Development Intern (Paid)",
    department: "Software Engineering",
    category: "internship",
    location: "Greater Noida / Hybrid",
    type: "Paid Internship",
    experience: "College Students / Freshers",
    compensation: "₹10,000 – ₹20,000 / Month + PPO",
    duration: "3 – 6 Months",
    skills: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Git"],
    description: "Work directly on live client portals and internal SaaS tools. Collaborate with senior architects, write clean modular code, build REST APIs, and receive a guaranteed Pre-Placement Offer (PPO) based on performance.",
    isInternship: true,
    perks: ["Monthly Stipend", "Live Client Projects", "Industry ISO Certificate", "Letter of Recommendation", "PPO Conversion Opportunity"]
  },
  {
    id: "intern-2",
    title: "AI & Machine Learning Engineering Intern (Paid)",
    department: "Enterprise AI Solutions",
    category: "internship",
    location: "Greater Noida / Hybrid",
    type: "Paid Internship",
    experience: "College Students / Freshers",
    compensation: "₹12,000 – ₹25,000 / Month + PPO",
    duration: "3 – 6 Months",
    skills: ["Python", "PyTorch", "LangChain", "Vector DBs", "RAG Pipelines", "FastAPI"],
    description: "Assist our AI research wing in fine-tuning open-source LLMs, building custom RAG pipelines, deploying AI agent workflows, and integrating vector databases into enterprise web applications.",
    isInternship: true,
    perks: ["Monthly Stipend", "GPU Cloud Compute Access", "Enterprise AI Capstones", "PPO Conversion Pathway", "Mentorship from AI Leads"]
  },
  {
    id: "intern-3",
    title: "Java Enterprise Backend Intern (Paid)",
    department: "Backend Engineering",
    category: "internship",
    location: "Greater Noida (On-Site)",
    type: "Paid Internship",
    experience: "College Students / Freshers",
    compensation: "₹10,000 – ₹20,000 / Month + PPO",
    duration: "3 – 6 Months",
    skills: ["Java 17+", "Spring Boot 3", "Hibernate", "PostgreSQL / MySQL", "REST APIs"],
    description: "Develop enterprise-grade microservices, implement JWT security filters, optimize complex SQL queries, and design scalable backend microservices under experienced MNC architects.",
    isInternship: true,
    perks: ["Monthly Stipend", "Live MNC Microservices Architecture", "ISO Experience Certificate", "PPO Conversion Pathway"]
  },
  {
    id: "intern-4",
    title: "Cloud & DevOps Engineering Intern (Paid)",
    department: "Infrastructure & Cloud",
    category: "internship",
    location: "Greater Noida / Remote",
    type: "Paid Internship",
    experience: "College Students / Freshers",
    compensation: "₹10,000 – ₹18,000 / Month + PPO",
    duration: "3 – 6 Months",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Linux", "Nginx"],
    description: "Assist DevOps leads in containerizing applications, writing CI/CD automated deployment pipelines, configuring reverse proxies, and monitoring cloud infrastructure uptime.",
    isInternship: true,
    perks: ["Monthly Stipend", "AWS Sandbox Access", "Real Cloud Deployments", "Placement Assistance"]
  },
  {
    id: "intern-5",
    title: "UI/UX Design & Frontend Intern (Paid)",
    department: "Product & UI Design",
    category: "internship",
    location: "Greater Noida / Hybrid",
    type: "Paid Internship",
    experience: "Designers / Frontends",
    compensation: "₹8,000 – ₹15,000 / Month + PPO",
    duration: "3 – 6 Months",
    skills: ["Figma", "Tailwind CSS", "React.js", "Design Systems", "Prototyping"],
    description: "Design pixel-perfect user flows, component libraries, design systems in Figma, and build responsive web pages in React with sleek animations.",
    isInternship: true,
    perks: ["Monthly Stipend", "Live UI Portfolio Projects", "Figma Design System Mastery", "Direct Client Feedback"]
  },

  // FULL-TIME ROLES
  {
    id: "job-1",
    title: "Senior Full Stack Engineering Mentor",
    department: "IT Training & Development",
    category: "fulltime",
    location: "Greater Noida (On-Site / Hybrid)",
    type: "Full-Time",
    experience: "3 - 6 Years",
    compensation: "₹8.0 – ₹16.0 LPA",
    duration: "Permanent Role",
    skills: ["React.js", "Node.js", "Python / Java", "System Design", "Microservices"],
    description: "Lead classroom training and real-world capstone development for full-stack batches. Mentor aspiring developers through live code audits, architecture reviews, and technical interview prep.",
    isInternship: false,
    perks: ["High Growth Incentives", "Health Insurance", "Flexible Hybrid Schedule", "Annual Tech Allowance"]
  },
  {
    id: "job-2",
    title: "Lead AI & Machine Learning Specialist",
    department: "Enterprise Solutions & AI",
    category: "fulltime",
    location: "Greater Noida / Hybrid",
    type: "Full-Time",
    experience: "4 - 8 Years",
    compensation: "₹12.0 – ₹24.0 LPA",
    duration: "Permanent Role",
    skills: ["Python", "PyTorch", "LLMs & LangChain", "Vector DBs", "Docker"],
    description: "Architect AI software modules for enterprise clients and deliver masterclasses on Generative AI, LangChain agents, and modern predictive pipelines.",
    isInternship: false,
    perks: ["GPU Rigs & Compute Budget", "Conference Sponsorship", "Quarterly Bonuses", "Leadership Equity"]
  },
  {
    id: "job-3",
    title: "Java Spring Boot & Cloud Architect",
    department: "Enterprise Software Services",
    category: "fulltime",
    location: "Greater Noida (On-Site)",
    type: "Full-Time",
    experience: "3 - 7 Years",
    compensation: "₹10.0 – ₹20.0 LPA",
    duration: "Permanent Role",
    skills: ["Java 17+", "Spring Boot 3", "AWS", "Kafka", "Kubernetes", "PostgreSQL"],
    description: "Design high-availability enterprise backend architectures and mentor advanced Java candidates for top Tier-1 MNC placement drives.",
    isInternship: false,
    perks: ["Annual Performance Bonus", "MNC Client Exposure", "Health Coverage", "Relocation Support"]
  },
  {
    id: "job-4",
    title: "Business Development & Corporate Placement Manager",
    department: "Corporate Relations",
    category: "fulltime",
    location: "Greater Noida & NCR",
    type: "Full-Time",
    experience: "2 - 5 Years",
    compensation: "₹6.0 – ₹12.0 LPA + Incentives",
    duration: "Permanent Role",
    skills: ["Corporate Relations", "Campus Hiring", "MNC Partnerships", "Negotiation"],
    description: "Forge tie-ups with Tier-1 IT companies, schedule on-campus placement drives, and expand client software service contracts across Delhi NCR.",
    isInternship: false,
    perks: ["Uncapped Deal Incentives", "Travel Allowance", "Executive Networking", "Rapid Promotion"]
  },
  {
    id: "job-5",
    title: "UI/UX & Frontend Designer (React)",
    department: "Product Design",
    category: "fulltime",
    location: "Greater Noida / Remote",
    type: "Full-Time",
    experience: "2 - 4 Years",
    compensation: "₹5.5 – ₹11.0 LPA",
    duration: "Permanent Role",
    skills: ["Figma", "Tailwind CSS", "React.js", "UI Animation", "Design Systems"],
    description: "Create world-class interfaces, design tokens, and interactive landing pages for Yukti Software products and client web platforms.",
    isInternship: false,
    perks: ["MacBook Pro Provided", "Remote-Friendly", "Design Tool Subscriptions", "Creative Freedom"]
  }
];

export default function CareersPage({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'internship', 'fulltime'
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    applicantType: 'student', // 'student' or 'professional'
    collegeOrCompany: '',
    experienceOrYear: '',
    resumeUrl: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredPositions = ALL_POSITIONS.filter(pos => {
    if (activeFilter === 'all') return true;
    return pos.category === activeFilter;
  });

  const internshipCount = ALL_POSITIONS.filter(p => p.category === 'internship').length;
  const fulltimeCount = ALL_POSITIONS.filter(p => p.category === 'fulltime').length;

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedPosition(null);
        setApplicationData({
          name: '',
          email: '',
          phone: '',
          applicantType: 'student',
          collegeOrCompany: '',
          experienceOrYear: '',
          resumeUrl: '',
          note: ''
        });
      }, 2500);
    }, 700);
  };

  const handleOpenApply = (pos) => {
    setSelectedPosition(pos);
    setApplicationData(prev => ({
      ...prev,
      applicantType: pos.isInternship ? 'student' : 'professional'
    }));
  };

  return (
    <div className="py-10 sm:py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-500 mr-1.5" />
            <span className="font-medium">Hiring Full-Time Roles & Paid Student Interns</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Careers & Paid Internships
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Join Yukti Software in Greater Noida. Whether you are an experienced software engineer looking for high-impact full-time roles or a talented student looking for a <span className="font-bold text-emerald-600 dark:text-emerald-400">stipend-backed industrial internship with PPO</span>, we have a place for you.
          </p>
        </div>

        {/* Culture & Internship Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Paid Internships (₹8k - ₹25k/mo)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every qualified intern receives a guaranteed monthly stipend, real client project exposure, and high-performer Pre-Placement Offers (PPOs).
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Competitive Full-Time Packages</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Industry-leading CTC packages (₹6 LPA – ₹24 LPA), performance bonuses, health insurance, and fast-track leadership promotions.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Modern Tech Stack & Lab Access</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Build with the latest AI agents, PyTorch, LangChain, Spring Boot 3, Next.js, and multi-cloud Kubernetes architectures.
            </p>
          </div>
        </div>

        {/* Filter Controls & List Header */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Open Positions ({filteredPositions.length})
              </h2>
              <p className="text-xs text-slate-500 font-medium">📍 Greater Noida Knowledge Park & Hybrid</p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Positions ({ALL_POSITIONS.length})
              </button>
              
              <button
                onClick={() => setActiveFilter('internship')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeFilter === 'internship'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Paid Internships ({internshipCount})</span>
              </button>

              <button
                onClick={() => setActiveFilter('fulltime')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeFilter === 'fulltime'
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-brand-700 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Full-Time Roles ({fulltimeCount})</span>
              </button>
            </div>
          </div>

          {/* Position Cards Grid */}
          <div className="grid grid-cols-1 gap-5">
            {filteredPositions.map((pos) => (
              <div
                key={pos.id}
                className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group ${
                  pos.isInternship 
                    ? 'border-emerald-200 dark:border-emerald-950/60 hover:border-emerald-500 shadow-sm hover:shadow-emerald-500/10' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-brand-500 shadow-sm hover:shadow-brand-500/10'
                }`}
              >
                <div className="space-y-3.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    {pos.isInternship ? (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 flex items-center space-x-1 border border-emerald-200 dark:border-emerald-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Paid Internship</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                        Full-Time Role
                      </span>
                    )}

                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {pos.department}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {pos.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pos.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pos.isInternship ? pos.duration : pos.experience}</span>
                    </span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>{pos.compensation}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pos.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pos.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col shrink-0">
                  <button
                    onClick={() => handleOpenApply(pos)}
                    className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2 text-white ${
                      pos.isInternship
                        ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20'
                        : 'bg-brand-600 hover:bg-brand-500 shadow-brand-500/20'
                    }`}
                  >
                    <span>{pos.isInternship ? "Apply for Internship" : "Apply for Role"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Application Modal */}
      {selectedPosition && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPosition(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPosition(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className={`text-[10px] font-black uppercase tracking-wider ${
                selectedPosition.isInternship ? 'text-emerald-600 dark:text-emerald-400' : 'text-brand-600 dark:text-brand-400'
              }`}>
                {selectedPosition.isInternship ? '🎓 Internship Application' : '💼 Job Application'}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedPosition.title}</h3>
              <p className="text-xs text-slate-500">{selectedPosition.compensation} • {selectedPosition.location}</p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Application Submitted!</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                  Our talent acquisition team will review your profile and contact you within 24 to 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={applicationData.name}
                    onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      {selectedPosition.isInternship ? 'College / University *' : 'Current Company / Last Role'}
                    </label>
                    <input
                      type="text"
                      required={selectedPosition.isInternship}
                      placeholder={selectedPosition.isInternship ? "e.g., AKTU / Galgotias / Amity" : "e.g., TCS / Infosys / Fresher"}
                      value={applicationData.collegeOrCompany}
                      onChange={(e) => setApplicationData({...applicationData, collegeOrCompany: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      {selectedPosition.isInternship ? 'Current Semester / Batch' : 'Total Experience'}
                    </label>
                    <input
                      type="text"
                      placeholder={selectedPosition.isInternship ? "e.g. 6th Sem / 2025 Batch" : "e.g. 3 Years"}
                      value={applicationData.experienceOrYear}
                      onChange={(e) => setApplicationData({...applicationData, experienceOrYear: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                    LinkedIn / GitHub / Resume Link *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/... or Google Drive / GitHub link"
                    value={applicationData.resumeUrl}
                    onChange={(e) => setApplicationData({...applicationData, resumeUrl: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">Why should we select you?</label>
                  <textarea
                    rows="2"
                    placeholder="Briefly describe your relevant tech skills or project experience..."
                    value={applicationData.note}
                    onChange={(e) => setApplicationData({...applicationData, note: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-white transition-all flex items-center justify-center space-x-2 shadow-md ${
                    selectedPosition.isInternship
                      ? 'bg-emerald-600 hover:bg-emerald-500'
                      : 'bg-brand-600 hover:bg-brand-500'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Submitting Application..." : "Submit Application"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
