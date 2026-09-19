import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Send, 
  Users, 
  TrendingUp,
  Laptop,
  GraduationCap,
  Award,
  Zap,
  Code2,
  Database,
  Layers,
  HeartHandshake,
  FolderGit2,
  Globe,
  Check,
  Star,
  Quote
} from 'lucide-react';
import confetti from 'canvas-confetti';

const INTERNSHIP_ROLES = [
  {
    id: "role-frontend",
    title: "1. Frontend Development Intern",
    tagline: "Make a seamless, user-friendly interface that is easy to navigate for modern web applications.",
    department: "Frontend Engineering",
    icon: Code2,
    badge: "UI / Web Track",
    keyFocus: [
      "Bring UI/UX design to life by coding interactive and responsive web components.",
      "Make websites responsive, so they are compatible across several devices and browsers.",
      "Make the websites lightweight with optimized loading times and improved performance."
    ],
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js", "Material-UI"],
    description: "In the Frontend Development Intern role, you’ll be working with a modern tech stack that the industry is using to build responsive and seamless user interfaces. With the use of HTML5 for structure, CSS3 for styling and layouts, Material UI and Tailwind CSS for faster UI development, and React.js and JavaScript for building dynamic and interactive experiences, you’ll gain practical experience in developing intuitive web applications."
  },
  {
    id: "role-backend",
    title: "2. Backend Development Intern",
    tagline: "Build robust server-side solutions that are secure and power real-world applications.",
    department: "Backend & Systems",
    icon: Database,
    badge: "APIs & Databases",
    keyFocus: [
      "Building and implementing scalable APIs for smooth and efficient data exchange.",
      "Working with databases to maintain data integrity and effective retrieval.",
      "Building application security with authentication and authorization, while optimizing server performance."
    ],
    technologies: ["Java", "JDBC", "SpringBoot", "Node.js", "Express.js", "MongoDB", "PostgreSQL / SQL", "RESTful APIs"],
    description: "In this role, you will work on building reliable server-side solutions to ensure fast, secure, and scalable performance. Using Node.js and Express.js to build scalable backend systems, while MongoDB ensures a flexible NoSQL database solution and PostgreSQL maintains data with relational storage. This stack combined allows you to provide authentication, effective server performance, and manage data, while seamlessly integrating with the frontend."
  },
  {
    id: "role-fullstack",
    title: "3. Full Stack Development Intern",
    tagline: "Combined the knowledge and skills of both frontend and backend to master end-to-end solutions.",
    department: "Full Stack Engineering",
    icon: Layers,
    badge: "End-to-End MERN / Java",
    keyFocus: [
      "Building a complete solution from a user-friendly webpage to its backend management.",
      "Managing deployment pipelines to ensure smooth releases and application stability.",
      "Working with other teams such as designers and developers for holistic solutions."
    ],
    technologies: ["MERN Stack", "Java Full-Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "GraphQL"],
    description: "In this Full-Stack Development Intern role, you’ll be working with both frontend and backend technologies to build the application end-to-end. The MERN stack used here (MongoDB, Express.js, React.js, Node.js) will help in building user interfaces and server-side logic. With GraphQL, you’ll be able to streamline data fetching, while Next.js will help with server-side rendering and application performance. Together, these technologies will give you practical experience in handling the complete application flow and building smooth, integrated web applications."
  }
];

const GROWTH_PILLARS = [
  {
    icon: Laptop,
    title: "Industry / Practical Experience",
    desc: "Collaborate on a live project to be a part of it from design to development. Gain practical skills in the latest technology."
  },
  {
    icon: Users,
    title: "Mentorship & Support",
    desc: "Get support and guidance with senior expertise every step of the way."
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Culture / Team-Based Learning",
    desc: "Grow and nurture in a supportive environment surrounded by experts who value creativity and knowledge sharing."
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    desc: "Advance your career immensely with networking events, expert development resources, and career counselling with top leaders."
  },
  {
    icon: Globe,
    title: "Diverse Learning Opportunities",
    desc: "Dive into various branches of the tech world, from UI/UX design and software development to cloud solutions."
  },
  {
    icon: FolderGit2,
    title: "Showcase Your Work",
    desc: "Build a solid portfolio by showcasing the projects you contributed to, earning a competitive edge in the job market."
  }
];

const INTERN_TESTIMONIALS = [
  {
    name: "Aditya Verma",
    role: "Full Stack Intern → SDE-1",
    college: "AKTU Noida",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    quote: "Working on Yukti Software's live production microservices helped me master React and Spring Boot. I converted my internship into a full-time software engineering role with 100% confidence!"
  },
  {
    name: "Rhea Sharma",
    role: "Frontend Development Intern",
    college: "Galgotias University",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    quote: "The 1-on-1 code reviews from senior leads transformed my UI development skills. I built 3 verified GitHub capstones and learned how real software development teams collaborate."
  },
  {
    name: "Saurabh Mishra",
    role: "Backend Engineering Intern",
    college: "Sharda University",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "Handling database indexing, REST APIs, and JWT authentication on actual client projects gave me practical exposure that college theory never taught. Highly recommend Yukti Software!"
  }
];

export default function CareersPage({ onOpenConsultation }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    rolePreference: 'Frontend Development Intern',
    githubOrPortfolio: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
      setTimeout(() => {
        setIsSubmitted(false);
        if (selectedRole) setSelectedRole(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          rolePreference: 'Frontend Development Intern',
          githubOrPortfolio: '',
          message: ''
        });
      }, 3500);
    }, 1000);
  };

  const handleApplyClick = (roleTitle) => {
    setFormData(prev => ({ ...prev, rolePreference: roleTitle }));
    const formEl = document.getElementById('apply-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-2 sm:pt-4 pb-14 space-y-10 sm:space-y-12 animate-fadeIn text-slate-900 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-900 via-slate-900 to-indigo-950 text-white overflow-hidden shadow-2xl border border-brand-500/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-black uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Yukti Software • Career & Internship Program</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Internship Opportunities at Yukti Software – <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-emerald-300 to-teal-200">Learn, Grow, and Advance</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-medium">
              Be a part of Yukti’s software team and start your journey under the guidance of industry experts and their mentorship, while working on real-world live projects.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold text-emerald-300 flex items-center space-x-2.5">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Start with an internship in your dream job role and level up by improving your skills!</span>
            </div>

            <div className="flex flex-row items-center gap-2 sm:gap-3 pt-1 w-full max-w-lg">
              <button
                onClick={() => handleApplyClick('Full Stack Development Intern')}
                className="flex-1 sm:flex-none px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-[11px] sm:text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center space-x-1.5 sm:space-x-2 hover:scale-105 active:scale-95 whitespace-nowrap text-center"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>
              <button
                onClick={() => {
                  const roleEl = document.getElementById('roles-section');
                  if (roleEl) roleEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 sm:flex-none px-2.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] sm:text-sm border border-white/20 transition-all backdrop-blur-sm whitespace-nowrap text-center flex items-center justify-center"
              >
                <span>Explore Tracks</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIMITLESS GROWTH WITH OUR INTERNSHIP PROGRAM (6 PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Why Choose Yukti Software</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Limitless Growth with Our Internship Program
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            With us, you don’t just intern! You learn and implement skills that transform you from a fresher with potential into a software expert. Let’s explore why Yukti Software is your gateway to tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROWTH_PILLARS.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/40 transition-all space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm border border-brand-200/60 dark:border-brand-800/60">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Yukti Professional Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ROLE-BASED INTERNSHIP PROGRAMS FOR SPECIALIZED SKILL DEVELOPMENT */}
      <section id="roles-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Specialized Skill Development</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Role-based Internship Programs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Apply today to be a part of the Yukti Software team as an Intern. Here, you learn, grow, and get your first industry experience to kickstart your journey with professional guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {INTERNSHIP_ROLES.map((role) => {
            const IconComp = role.icon;
            return (
              <div 
                key={role.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-brand-500/50 transition-all flex flex-col justify-between h-full group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center border border-brand-200 dark:border-brand-800 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {role.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                      {role.tagline}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Focus:</h4>
                    <ul className="space-y-1.5">
                      {role.keyFocus.map((focus, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Technologies:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {role.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Job Description:</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {role.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleApplyClick(role.title)}
                    className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-95"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. HEAR FROM OUR INTERNS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Intern Success Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Hear From Our Interns
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Real feedback from graduates who started with our internship program and accelerated into IT careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {INTERN_TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <Quote className="w-7 h-7 text-brand-500/30" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border border-brand-500/30 shadow-sm" 
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">{item.role}</p>
                  <p className="text-[10px] text-slate-400">{item.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GET CERTIFIED FOR INDUSTRY RECOGNITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-800 text-white shadow-xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold border border-white/20">
                <Award className="w-4 h-4 text-amber-300" />
                <span>ISO 9001:2015 Recognized Credential</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Get Certified for Industry Recognition
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Upon completion of your internship, you will receive an industry-recognized professional certificate. It will prove your skills and contributions, enhancing your portfolio and becoming a stepping stone in your career prospects.
              </p>
            </div>

            <div className="shrink-0 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-1 shadow-lg">
              <Award className="w-10 h-10 text-amber-300 mx-auto" />
              <p className="text-xs font-bold text-white uppercase tracking-wider">Professional</p>
              <p className="text-[10px] text-emerald-200">Internship Credential</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WE LOOK FORWARD TO HAVING YOU – APPLY NOW! (RICH 2-COLUMN FULL-SPACE APPLICATION SECTION) */}
      <section id="apply-form-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Internship Perks & What Happens Next (Fills Space) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-950 text-white border border-brand-800/60 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Join Yukti Software Team</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Fast-Track Your Tech Career
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Submit your application to collaborate directly with our engineering teams on client-grade software products.
                </p>
              </div>

              {/* Step-by-Step Selection Flow */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-brand-300">
                  What Happens After You Apply:
                </h4>
                
                <div className="space-y-3 text-xs">
                  <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="w-6 h-6 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-white">Profile & Resume Screening</p>
                      <p className="text-slate-400 text-[11px] mt-0.5">Our hiring mentors review your technical interest within 24-48 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-white">Technical 1-on-1 Discussion</p>
                      <p className="text-slate-400 text-[11px] mt-0.5">Short discussion on project aspirations, coding concepts, and goals.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="w-6 h-6 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                      3
                    </span>
                    <div>
                      <p className="font-bold text-white">Offer Letter & Live Project Allocation</p>
                      <p className="text-slate-400 text-[11px] mt-0.5">Immediate onboarding with senior architect guidance and live sprints.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights Pill Box */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-sm font-black text-emerald-400">100% Practical</p>
                  <p className="text-[10px] text-slate-400">Live Client Systems</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-sm font-black text-amber-400">PPO Option</p>
                  <p className="text-[10px] text-slate-400">Full-Time Conversion</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>📍 Greater Noida & Sector 62</span>
              <span className="text-emerald-400 font-bold">● Active 2026 Hiring</span>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                <Send className="w-3.5 h-3.5" />
                <span>Fast-Track Application</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                We Look Forward to Having You – Apply Now!
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fill out the form below to submit your profile for review by our talent acquisition team.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white">Application Received!</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                  Thank you for applying. Our talent coordinator will review your profile and reach out via Email / WhatsApp with interview details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rohit Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      College / University / Qualification *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., AKTU / Galgotias / B.Tech CSE"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      Role Preference *
                    </label>
                    <select
                      value={formData.rolePreference}
                      onChange={(e) => setFormData({ ...formData, rolePreference: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
                      <option value="Frontend Development Intern">Frontend Development Intern</option>
                      <option value="Backend Development Intern">Backend Development Intern</option>
                      <option value="Full Stack Development Intern">Full Stack Development Intern</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      GitHub / LinkedIn / Resume Link
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/... or Google Drive link"
                      value={formData.githubOrPortfolio}
                      onChange={(e) => setFormData({ ...formData, githubOrPortfolio: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                    Why do you want to intern at Yukti Software?
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Share a short note about your coding experience, current projects, or learning goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-brand-500/20 transition-all flex items-center justify-center space-x-2 hover:scale-[1.01] active:scale-95 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Application..." : "Submit Internship Application"}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
