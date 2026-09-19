import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  BookOpen, 
  Briefcase, 
  Layers, 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Layout, 
  Smartphone, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  CheckCircle,
  HelpCircle,
  Calendar,
  MessageCircle,
  Building2,
  FileCheck,
  UserCheck
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import { siteData } from '../data';

export default function TrainingInstitutePage({ onOpenConsultation, setCurrentPage }) {
  const { brand } = siteData;
  const [openFaq, setOpenFaq] = useState(0);

  const handleNav = (pageKey) => {
    if (setCurrentPage) {
      setCurrentPage(pageKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Yukti Software, I want to inquire about your Software Training Institute in Greater Noida and explore available IT courses.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  // 7 Institute Highlights from Doc
  const highlights = [
    {
      icon: Users,
      title: "Experienced Trainers",
      description: "You will receive classes and guidance from mentors with significant IT industry experience."
    },
    {
      icon: BookOpen,
      title: "Industry-Aligned Curriculum",
      description: "All our Software training courses follow a well-defined course syllabus that is updated to fit the modern job requirements."
    },
    {
      icon: Code2,
      title: "Hands-On Practical Training",
      description: "Learn new concepts and use them to solve real-world problems and gain valuable hands-on experience."
    },
    {
      icon: Award,
      title: "Recognized Certifications",
      description: "Once you successfully complete our IT course, we will reward you with an industry-recognized certificate."
    },
    {
      icon: Briefcase,
      title: "Real-World Projects",
      description: "Build advanced projects to add to your resume and boost your chances of getting shortlisted by recruiters."
    },
    {
      icon: Target,
      title: "Career Counselling",
      description: "Receive professional guidance from our experts to take the right steps and move in the right direction."
    },
    {
      icon: UserCheck,
      title: "Interview and Resume Support",
      description: "Appear in mock interviews and prepare your resume under the supervision of Yukti Software experts."
    }
  ];

  // Why Software Development Training is the Right Career Move (3 Pillars)
  const careerMovePillars = [
    {
      icon: TrendingUp,
      title: "High Demand for IT Skills",
      desc: "The world is going digital; this has led to the integration of software applications and technology into the workplace. Thus, we are seeing a surge in the demand for IT professionals across different roles and profiles. With the right software training and specialization, you can capitalize on this increasing demand and land your dream job."
    },
    {
      icon: Layers,
      title: "Strong Career Growth Potential",
      desc: "IT job roles have a clear growth path, where you start at entry-level roles and move to senior roles. The career growth and time duration depend entirely on your skills and your experience. Therefore, with the right guidance, you can easily carve a career growth path for yourself that aligns with your skill set and goals."
    },
    {
      icon: Sparkles,
      title: "Future-Ready Skill Development",
      desc: "Multiple trends suggest that the software market will take over modern jobs, and the future belongs to advanced software technology. Therefore, enrolling in Yukti Software Training Institute Greater Noida will provide you with the necessary tools to prepare yourself for future job roles."
    }
  ];

  // 3 Course Levels
  const courseLevels = [
    {
      level: "Beginner-Level IT Courses",
      badge: "Foundation Track",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-600 dark:text-blue-400",
      bullets: [
        "Ideal for freshers, students, and career starters.",
        "Suitable for candidates with little or no prior IT knowledge.",
        "Focus on building strong technical fundamentals."
      ]
    },
    {
      level: "Intermediate-Level IT Courses",
      badge: "Skill Acceleration",
      color: "from-brand-500/20 to-indigo-500/20 border-brand-500/30 text-brand-600 dark:text-brand-400",
      bullets: [
        "Suitable for candidates with basic IT knowledge or experience.",
        "Helps strengthen existing technical and practical skills.",
        "Covers more complex concepts and real-world applications."
      ]
    },
    {
      level: "Advanced-Level IT Courses",
      badge: "Enterprise Mastery",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-600 dark:text-purple-400",
      bullets: [
        "Designed for experienced IT professionals.",
        "Focuses on specialized and advanced technical skills.",
        "Helps prepare learners for senior and specialized IT roles."
      ]
    }
  ];

  // What is Included in Our Software Training Courses (8 Stages)
  const trainingIncludes = [
    {
      step: "01",
      title: "Career Counselling",
      points: [
        "Helping you choose the suitable IT domains and career paths.",
        "Helping you select the right course based on skills, interests, and career goals."
      ]
    },
    {
      step: "02",
      title: "Course & Skill Assessment",
      points: [
        "Assess existing technical knowledge.",
        "Determine the appropriate beginner, intermediate, or advanced learning level."
      ]
    },
    {
      step: "03",
      title: "Structured Technical Training",
      points: [
        "Learn concepts through instructor-led sessions.",
        "Follow an industry-relevant curriculum with practical examples."
      ]
    },
    {
      step: "04",
      title: "Hands-On Practical Learning",
      points: [
        "Practice tools, technologies, and software through guided exercises.",
        "Apply concepts to real-world technical scenarios."
      ]
    },
    {
      step: "05",
      title: "Assignments & Projects",
      points: [
        "Complete regular assignments to reinforce learning.",
        "Work on projects to develop practical experience and build a portfolio."
      ]
    },
    {
      step: "06",
      title: "Performance Evaluation",
      points: [
        "Take assessments, tests, and practical evaluations.",
        "Identify knowledge gaps and improve technical proficiency."
      ]
    },
    {
      step: "07",
      title: "Job & Interview Preparation",
      points: [
        "Prepare resumes and professional profiles.",
        "Attend mock interviews and practice technical and HR questions."
      ]
    },
    {
      step: "08",
      title: "Career & Placement Support",
      points: [
        "Receive guidance on suitable job roles and applications.",
        "Get support with interview opportunities and career development."
      ]
    }
  ];

  // Diverse Domains Table Data
  const domains = [
    {
      domain: "Software Development",
      icon: Terminal,
      courses: "Java, Python, C++, .NET",
      jobProfiles: "Software Developer, Application Developer, Backend Developer",
      link: "course-java-fullstack"
    },
    {
      domain: "Web Development",
      icon: Layers,
      courses: "Full Stack Development, MERN Stack, MEAN Stack",
      jobProfiles: "Full Stack Developer, Front-End Developer, Web Developer",
      link: "course-mern-stack"
    },
    {
      domain: "Data Science & Analytics",
      icon: TrendingUp,
      courses: "Data Analytics, Data Science, Python for Data Science, SQL",
      jobProfiles: "Data Analyst, Data Scientist, Data Analytics Specialist",
      link: "course-data-analytics"
    },
    {
      domain: "Database Management",
      icon: Database,
      courses: "SQL, MySQL, Oracle Database, Database Administration",
      jobProfiles: "SQL Developer, Database Administrator, Database Developer",
      link: "course-dbms"
    },
    {
      domain: "AI & Machine Learning",
      icon: Cpu,
      courses: "Artificial Intelligence, Machine Learning, Deep Learning, Generative AI",
      jobProfiles: "AI Engineer, Machine Learning Engineer, AI Developer",
      link: "course-ai-fullstack"
    },
    {
      domain: "UI/UX Design",
      icon: Layout,
      courses: "UI Design, UX Design, Figma",
      jobProfiles: "UI Designer, UX Designer, Product Designer",
      link: "course-html-css"
    },
    {
      domain: "Mobile App Development",
      icon: Smartphone,
      courses: "Android, iOS, Flutter, React Native",
      jobProfiles: "Mobile App Developer, Android Developer, iOS Developer",
      link: "courses"
    }
  ];

  // 7 FAQs from Doc
  const faqs = [
    {
      q: "How do I choose the right software training institute?",
      a: "Look for an institute with experienced trainers, industry-relevant courses, practical learning, recognized certifications, updated curriculum, and career support. You should also consider course duration, fees, student reviews, and the institute’s training methodology."
    },
    {
      q: "Is Yukti Software Training Institute accredited or certified?",
      a: "Yes, absolutely. Yukti Software is an ISO 9001:2015 certified training institute that offers practical IT training. Being a certified institute makes our IT certifications highly valuable and recognized across industries."
    },
    {
      q: "What software courses and certifications does Yukti Software offer?",
      a: "Yukti Software Training Institute Greater Noida offers courses in different programming languages, including Python, JAVA, JavaScript, ReactJS, and many other prominent IT fields. We also prepare students for tough technical interviews and help design the right resume."
    },
    {
      q: "Are software training courses suitable for beginners?",
      a: "Yes. Yukti Software offers beginner-level courses that start with fundamental concepts and gradually introduce advanced topics. You can contact our experts to learn about the prerequisites before enrolling to ensure the program matches your existing knowledge and experience."
    },
    {
      q: "Does the institute provide practical training and hands-on projects?",
      a: "Yes. Our high-quality software training program includes practical exercises, labs, assignments, and real-world projects. Moreover, hands-on training helps students apply theoretical concepts and develop skills relevant to workplace requirements."
    },
    {
      q: "Does a Yukti Software training institute provide placement assistance?",
      a: "Yes, we provide career and placement assistance through resume preparation, mock interviews, job-search guidance, and interview preparation."
    },
    {
      q: "What are the course fees, duration, and class timings?",
      a: "Course fees and duration vary depending on the technology, certification, course level, and training format. If you need complete details on the course, talk to our customer support or schedule a consultation session with Yukti Software mentors."
    }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-slate-950 to-slate-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-brand-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 space-y-8 text-center sm:text-left">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Keyword: Software Training Institute Greater Noida</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none text-white">
              Accredited <span className="bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Software Training Institute</span> Greater Noida
            </h1>
            <p className="text-lg sm:text-xl font-medium text-brand-200">
              Career-Focused Practical IT Training, Live Projects & Complete Placement Assistance
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl max-w-4xl">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Yukti Software is transforming IT education by taking a practical approach and introducing high-level projects along with comprehensive job preparation. Our <strong className="text-white">Software Training Institute Greater Noida</strong> covers all prominent IT courses that are in high demand and taught by experienced mentors. Each course is divided into different phases, providing you with structured learning that is highly efficient. In our training institute, we aim to prepare candidates for the modern job market and help them develop in-demand skills, boosting their employability. Yukti Software's course catalogue includes <span className="text-brand-300 font-semibold">Java, Python, SQL, NoSQL, Data Analytics, Data Science</span>, along with other prominent ones.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:from-brand-500 hover:to-accent-primary text-white font-black text-sm sm:text-base shadow-xl hover:shadow-brand-500/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Career Consultation</span>
            </button>
            <button
              onClick={() => handleNav('courses')}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <GraduationCap className="w-5 h-5 text-brand-400" />
              <span>Explore All 15+ IT Tracks</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center sm:text-left">
              <p className="text-2xl font-black text-brand-400">15+ Tracks</p>
              <p className="text-xs text-slate-400">Industry-Aligned Courses</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center sm:text-left">
              <p className="text-2xl font-black text-emerald-400">100% Practical</p>
              <p className="text-xs text-slate-400">Real-World Project Labs</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center sm:text-left">
              <p className="text-2xl font-black text-amber-400">ISO 9001:2015</p>
              <p className="text-xs text-slate-400">Accredited Institute</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center sm:text-left">
              <p className="text-2xl font-black text-sky-400">4.9 ★ Rating</p>
              <p className="text-xs text-slate-400">Google Verified Reviews</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. HIGHLIGHTS OF OUR SOFTWARE TRAINING INSTITUTE */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 text-xs font-black uppercase tracking-wider">
              Quality IT Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Highlights of Our Software Training Institute
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              At Yukti Software, we believe IT education must prioritise hands-on experience over traditional conceptual learning. This is reflected in our IT training courses, where we introduce advanced real-world projects, practical assignments, and interactive quizzes to facilitate in-depth understanding. Modern recruiters focus on skills and abilities to solve practical problems rather than qualifications. Overall, our Software Training Institute Greater Noida aims to get you job-ready with job-oriented specialized education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-brand-500/50 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold shadow group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. WHY SOFTWARE DEVELOPMENT TRAINING IS THE RIGHT CAREER MOVE */}
      <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider">
              Strategic Career Decision
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Why Software Development Training is the Right Career Move
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Transform from a fresher with potential into a high-demand software engineering professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerMovePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6 hover:translate-y-[-4px] transition-transform duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. BEGINNER, INTERMEDIATE, AND ADVANCED-LEVEL COURSES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-xs font-black uppercase tracking-wider">
              Learning Roadmaps For Every Stage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Beginner, Intermediate, and Advanced-Level Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Our Software Training is divided into multiple courses, and each course falls into one of the three levels, including Beginner, Intermediate, and Advanced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseLevels.map((lvl, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-black border ${lvl.color}`}>
                      {lvl.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Level 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {lvl.level}
                  </h3>

                  <ul className="space-y-3">
                    {lvl.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleNav('courses')}
                  className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-brand-600 hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors flex items-center justify-center space-x-2"
                >
                  <span>View Matching Tracks</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHAT IS INCLUDED IN OUR SOFTWARE TRAINING COURSES (8 PHASES) */}
      <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 text-xs font-black uppercase tracking-wider">
              Comprehensive 360° Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              What is Included in Our Software Training Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              A structured, step-by-step career path from foundational assessment to mock interviews and hiring day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingIncludes.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-brand-500/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-brand-600 dark:text-brand-400 font-mono">
                      {step.step}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                  </div>
                  
                  <h3 className="text-base font-black text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  
                  <ul className="space-y-2 pt-1">
                    {step.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="text-brand-500 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. DIVERSE DOMAINS TAUGHT UNDER YUKTI SOFTWARE IT TRAINING */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-black uppercase tracking-wider">
              Complete IT Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Diverse Domains Taught Under Yukti Software IT Training
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Explore our core training domains, featured courses, and the target industry job profiles you will be prepared for.
            </p>
          </div>

          {/* Table on Large Screens, Cards on Small */}
          <div className="hidden md:block overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700/60 border-b border-slate-200 dark:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  <th className="py-4 px-6">Training Domain</th>
                  <th className="py-4 px-6">Courses</th>
                  <th className="py-4 px-6">Job Profiles</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50 text-xs sm:text-sm">
                {domains.map((row, idx) => {
                  const Icon = row.icon;
                  return (
                    <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-750 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 dark:text-white flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{row.domain}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-600 dark:text-slate-300 font-medium">
                        {row.courses}
                      </td>
                      <td className="py-4 px-6 text-slate-800 dark:text-slate-200 font-semibold">
                        {row.jobProfiles}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => handleNav(row.link)}
                          className="px-3 py-1.5 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white text-xs font-bold transition-all"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Cards for Mobile Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {domains.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white">{row.domain}</h3>
                  </div>
                  <div className="space-y-1 text-xs">
                    <p className="text-slate-500 dark:text-slate-400"><strong className="text-slate-700 dark:text-slate-300">Courses:</strong> {row.courses}</p>
                    <p className="text-slate-500 dark:text-slate-400"><strong className="text-slate-700 dark:text-slate-300">Job Profiles:</strong> {row.jobProfiles}</p>
                  </div>
                  <button
                    onClick={() => handleNav(row.link)}
                    className="w-full py-2 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 font-bold text-xs flex items-center justify-center space-x-1"
                  >
                    <span>Explore Domain</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. JOIN YUKTI SOFTWARE EXPERTS FOR A FREE CONSULTATION (CTA) */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              1-on-1 Personalized Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Join Yukti Software Experts for a Free Consultation
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-brand-800/60 shadow-2xl backdrop-blur-xl space-y-6 text-center sm:text-left">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Receive professional guidance from Yukti Software experts and pick the right software development course. Our experts will help you avoid the confusion and give you personalized advice. Thus, you will be able to pursue the course that aligns with your current skill set and future goals. The consultation is free of cost but is extremely valuable, as your profile will be evaluated by Yukti Software experts who have spent a considerable amount of time in the IT industry.
            </p>

            <div className="p-4 rounded-2xl bg-brand-950/60 border border-brand-800/80 text-xs sm:text-sm text-brand-200">
              💡 <strong>Next Step:</strong> Start your IT journey by scheduling an online consultation or visit our Software Training Institute Greater Noida.
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-primary hover:from-brand-600 hover:to-accent-primary text-white font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                Schedule Free Consultation Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Career Advisor</span>
              </button>
              <a
                href={`tel:${brand.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 shadow-md flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-brand-400" />
                <span>Call {brand.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 text-xs font-black uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Clear answers regarding courses, certifications, placement support, and admission.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4"
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center text-xs shrink-0 font-mono">
                      Q{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-brand-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/50 leading-relaxed animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. GREATER NOIDA CAMPUS & CONTACT STRIP */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 shadow">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 dark:text-white">
                  Visit Software Training Institute Greater Noida
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Alpha 1 Commercial Belt / Knowledge Park Campus, Greater Noida & Sector 62, Noida, NCR, India
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all"
              >
                Book Campus Visit
              </button>
              <button
                onClick={handleWhatsApp}
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
