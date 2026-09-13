import React, { useState } from 'react';
import { docxPagesData } from '../data/pagesDataFromDocs';
import { useCustomizer } from '../context/CustomizerContext';
import VariantSwitcherBar from './VariantSwitcherBar';
import Icon from './Icon';
import { getCourseLogo } from './TechLogos';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Check,
  GraduationCap,
  Briefcase,
  Layers,
  Terminal,
  Code2,
  Binary,
  Database,
  Search,
  Zap,
  Globe
} from 'lucide-react';

export default function TrainingCourses({ onOpenConsultation, setCurrentPage }) {
  const { trainingVariant, setTrainingVariant, TRAINING_VARIANTS } = useCustomizer();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // All 15 Master Courses from DOCX
  const allMasterCourses = [
    {
      id: "course-python",
      docxKey: "python",
      title: "Complete Python Training Course",
      tag: "Highest Placements",
      category: "python",
      duration: "4 - 6 Months",
      avgSalary: "₹4.5 – ₹12 LPA",
      icon: Terminal,
      color: "from-blue-600 to-cyan-500",
      description: docxPagesData.courses['python']?.description || "Master Python programming from zero to advanced web development, task automation, and data analytics with real capstone projects.",
      modulesCount: docxPagesData.courses['python']?.curriculum?.length || 12,
      highlights: ["12 Deep Modules", "Flask & Django Web Dev", "Automation & Web Scraping", "Data Analysis (NumPy/Pandas)"]
    },
    {
      id: "course-java-fullstack",
      docxKey: "advanced-java",
      title: "Java Full Stack Development Course",
      tag: "Enterprise Standard",
      category: "java",
      duration: "5 - 6 Months",
      avgSalary: "₹6.0 – ₹18 LPA",
      icon: Code2,
      color: "from-indigo-600 to-purple-600",
      description: docxPagesData.courses['advanced-java']?.description || "Become a full-spectrum developer mastering React.js frontend, Core & Advanced Java, Spring Boot microservices, and MySQL.",
      modulesCount: docxPagesData.courses['advanced-java']?.curriculum?.length || 14,
      highlights: ["React.js & Hooks", "Spring Boot & REST APIs", "Hibernate ORM", "Live E-Commerce Project"]
    },
    {
      id: "course-dsa",
      docxKey: "dsa",
      title: "Data Structures and Algorithms (DSA)",
      tag: "FAANG & Product Crack",
      category: "dsa",
      duration: "3 - 4 Months",
      avgSalary: "₹8.0 – ₹28 LPA",
      icon: Binary,
      color: "from-emerald-600 to-teal-500",
      description: docxPagesData.courses['dsa']?.description || "Crack technical coding rounds. Master problem-solving, algorithmic Big-O optimization, and System Design with 350+ LeetCode problems.",
      modulesCount: docxPagesData.courses['dsa']?.curriculum?.length || 12,
      highlights: ["350+ LeetCode Drills", "Dynamic Programming & Graphs", "System Design & Optimization", "1-on-1 Mock Interviews"]
    },
    {
      id: "course-ai-fullstack",
      docxKey: "ai-fullstack",
      title: "AI Full Stack Web Development",
      tag: "Next-Gen AI Era",
      category: "ai",
      duration: "6 Months",
      avgSalary: "₹7.0 – ₹24 LPA",
      icon: Sparkles,
      color: "from-purple-600 to-pink-600",
      description: docxPagesData.courses['ai-fullstack']?.description || "Future-proof your career by building full stack applications powered by Generative AI, LLMs, AI Agents, and Vector DBs.",
      modulesCount: docxPagesData.courses['ai-fullstack']?.curriculum?.length || 12,
      highlights: ["GenAI & Prompt Engineering", "AI Agent Workflows", "Vector DB & LangChain", "AI-Powered Full Stack Apps"]
    },
    {
      id: "course-python-fullstack",
      docxKey: "python-fullstack",
      title: "Python Full Stack Development",
      tag: "Certified Track",
      category: "python",
      duration: "6 Months",
      avgSalary: "₹5.5 – ₹16 LPA",
      icon: Terminal,
      color: "from-sky-600 to-indigo-600",
      description: docxPagesData.courses['python-fullstack']?.description || "Complete frontend to backend mastery with HTML5, CSS3, JavaScript, React.js, Python, Django, and PostgreSQL.",
      modulesCount: docxPagesData.courses['python-fullstack']?.curriculum?.length || 13,
      highlights: ["React.js Frontend", "Django & Flask Backends", "RESTful API Integration", "Full Stack Capstone"]
    },
    {
      id: "course-mern-stack",
      docxKey: "mern-stack",
      title: "MERN Stack Web Development",
      tag: "Startup & SaaS Favorite",
      category: "fullstack",
      duration: "5 Months",
      avgSalary: "₹5.0 – ₹15 LPA",
      icon: Globe,
      color: "from-teal-600 to-emerald-600",
      description: docxPagesData.courses['mern-stack']?.description || "Build end-to-end cloud applications using MongoDB, Express.js, React.js, and Node.js with state management and authentication.",
      modulesCount: docxPagesData.courses['mern-stack']?.curriculum?.length || 12,
      highlights: ["React 19 & Redux Toolkit", "Node.js & Express REST APIs", "MongoDB & Mongoose", "Full Stack Cloud Deployment"]
    },
    {
      id: "course-react-js",
      docxKey: "react-js",
      title: "React JS Frontend Engineering",
      tag: "UI Architecture",
      category: "fullstack",
      duration: "3 Months",
      avgSalary: "₹4.5 – ₹12 LPA",
      icon: Code2,
      color: "from-cyan-600 to-blue-600",
      description: docxPagesData.courses['react-js']?.description || "Master modern component design, hooks, state machines, Tailwind CSS, API caching, and high-performance UI architecture.",
      modulesCount: docxPagesData.courses['react-js']?.curriculum?.length || 16,
      highlights: ["React Hooks Deep Dive", "Tailwind & Glassmorphism UI", "Redux & Context API", "Portfolio Project Development"]
    },
    {
      id: "course-spring-boot",
      docxKey: "spring-boot",
      title: "Spring Boot & Microservices",
      tag: "Banking & Fintech",
      category: "java",
      duration: "3 - 4 Months",
      avgSalary: "₹6.0 – ₹18 LPA",
      icon: Code2,
      color: "from-green-600 to-emerald-700",
      description: docxPagesData.courses['spring-boot']?.description || "Architect robust cloud-native microservices, secure RESTful APIs with OAuth2/JWT, and configure Kafka message brokers.",
      modulesCount: docxPagesData.courses['spring-boot']?.curriculum?.length || 12,
      highlights: ["Microservices Architecture", "Spring Security & OAuth2", "Kafka & RabbitMQ Messaging", "Cloud Kubernetes Deploy"]
    },
    {
      id: "course-data-analytics",
      docxKey: "data-analytics",
      title: "Data Analytics & Python",
      tag: "Business Intelligence",
      category: "ai",
      duration: "4 Months",
      avgSalary: "₹5.0 – ₹14 LPA",
      icon: Database,
      color: "from-amber-600 to-orange-600",
      description: docxPagesData.courses['data-analytics']?.description || "Transform messy data into actionable business intelligence using Python, Pandas, NumPy, SQL, PowerBI, and Tableau.",
      modulesCount: docxPagesData.courses['data-analytics']?.curriculum?.length || 10,
      highlights: ["Python for Data Science", "Advanced SQL Analytics", "PowerBI & Tableau Dashboards", "Statistical Modeling"]
    },
    {
      id: "course-java",
      docxKey: "java",
      title: "Core & Advanced Java Training",
      tag: "Campus to Corporate",
      category: "java",
      duration: "4 Months",
      avgSalary: "₹4.5 – ₹10 LPA",
      icon: Code2,
      color: "from-amber-600 to-rose-600",
      description: docxPagesData.courses['java']?.description || "Solidify Java OOPs concepts, multithreading, collections framework, JDBC, and enterprise architecture.",
      modulesCount: docxPagesData.courses['java']?.curriculum?.length || 10,
      highlights: ["Deep OOPs & Collections", "Multithreading & Concurrency", "JDBC & MySQL", "Interview Coding Drills"]
    },
    {
      id: "course-ai-ml",
      docxKey: "ai-ml",
      title: "AI & Machine Learning Specialist",
      tag: "High Growth",
      category: "ai",
      duration: "5 Months",
      avgSalary: "₹6.5 – ₹20 LPA",
      icon: Sparkles,
      color: "from-rose-600 to-violet-600",
      description: docxPagesData.courses['ai-ml']?.description || "Master supervised & unsupervised ML, deep neural networks, computer vision, NLP, and model deployment.",
      modulesCount: docxPagesData.courses['ai-ml']?.curriculum?.length || 11,
      highlights: ["Scikit-Learn & PyTorch", "NLP & Computer Vision", "Model Deployment Pipelines", "Real Kaggle Datasets"]
    },
    {
      id: "course-dbms",
      docxKey: "dbms",
      title: "Relational DBMS & SQL Mastery",
      tag: "Core Backend Foundation",
      category: "database",
      duration: "2 - 3 Months",
      avgSalary: "₹4.0 – ₹9 LPA",
      icon: Database,
      color: "from-blue-700 to-slate-800",
      description: docxPagesData.courses['dbms']?.description || "Master relational database architecture, ER modeling, complex SQL joins, indexing, query optimization, and transactions.",
      modulesCount: docxPagesData.courses['dbms']?.curriculum?.length || 8,
      highlights: ["SQL Query Optimization", "ACID & Transactions", "Indexing & Sharding", "PostgreSQL & MySQL"]
    },
    {
      id: "course-nosql",
      docxKey: "nosql",
      title: "NoSQL Database & MongoDB",
      tag: "Big Data & Scalability",
      category: "database",
      duration: "2 - 3 Months",
      avgSalary: "₹4.5 – ₹11 LPA",
      icon: Database,
      color: "from-emerald-700 to-teal-800",
      description: docxPagesData.courses['nosql']?.description || "Harness high-volume document databases with MongoDB, aggregation pipelines, caching with Redis, and horizontal scaling.",
      modulesCount: docxPagesData.courses['nosql']?.curriculum?.length || 9,
      highlights: ["MongoDB Aggregation Pipelines", "Redis In-Memory Caching", "Replica Sets & Sharding", "Real-Time Data Streaming"]
    },
    {
      id: "course-html-css",
      docxKey: "html-css",
      title: "HTML5, CSS3 & Responsive Web",
      tag: "Beginner Friendly",
      category: "fullstack",
      duration: "2 Months",
      avgSalary: "₹3.5 – ₹7 LPA",
      icon: Globe,
      color: "from-orange-500 to-rose-500",
      description: docxPagesData.courses['html-css']?.description || "Build pixel-perfect responsive websites from scratch with semantic HTML5, modern CSS Grid/Flexbox, animations, and Tailwind CSS.",
      modulesCount: docxPagesData.courses['html-css']?.curriculum?.length || 8,
      highlights: ["CSS Grid & Flexbox Mastery", "Mobile-First Design", "Tailwind CSS Utility UI", "Live Portfolio Website"]
    },
    {
      id: "course-fullstack",
      docxKey: "fullstack",
      title: "Full Stack Software Engineering",
      tag: "Complete Developer",
      category: "fullstack",
      duration: "6 Months",
      avgSalary: "₹6.0 – ₹18 LPA",
      icon: Code2,
      color: "from-indigo-600 to-teal-600",
      description: docxPagesData.courses['fullstack']?.description || "Comprehensive software engineering program covering frontend, backend, databases, testing, CI/CD pipelines, and cloud hosting.",
      modulesCount: docxPagesData.courses['fullstack']?.curriculum?.length || 14,
      highlights: ["Full Lifecycle Engineering", "CI/CD & DevOps Basics", "System Architecture", "Placement Assurance"]
    }
  ];

  const filteredCourses = allMasterCourses.filter(c => {
    const matchesFilter = filter === 'all' || c.category === filter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6);

  const handleCourseClick = (courseId) => {
    if (setCurrentPage) {
      setCurrentPage(courseId);
    }
  };

  return (
    <section id="training" className="py-12 sm:py-16 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-emerald-300 transition-all">
            <span className="font-medium">Job-Oriented Training • 15 Master Career Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Practical IT Courses & Placement Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Learn from senior engineers with live production capstone projects, 1-on-1 mentor code audits, and guaranteed interview opportunities.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All 15 Courses' },
              { id: 'python', label: 'Python Programming', logoId: 'python' },
              { id: 'java', label: 'Java Full Stack', logoId: 'java' },
              { id: 'dsa', label: 'Data Structures & Algorithms', logoId: 'dsa' },
              { id: 'ai', label: 'Data Science & AI', logoId: 'ai' },
              { id: 'fullstack', label: 'MERN & Web Development', logoId: 'mern' },
              { id: 'database', label: 'SQL & NoSQL Databases', logoId: 'dbms' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => { setFilter(btn.id); setShowAll(true); }}
                className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
                  filter === btn.id
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 hover:bg-slate-50'
                }`}
              >
                {btn.logoId && (
                  <span className="w-4 h-4 flex items-center justify-center shrink-0">
                    {getCourseLogo(btn.logoId, "w-4 h-4")}
                  </span>
                )}
                <span>{btn.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 10-Variant Switcher Bar */}
        <VariantSwitcherBar
          currentVariant={trainingVariant}
          setVariant={setTrainingVariant}
          variants={TRAINING_VARIANTS}
          label="Training Layout"
        />

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((c) => {
            const IconComp = c.icon;
            return (
              <div
                key={c.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-brand-500/50 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 p-2.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                      {getCourseLogo(c.id, "w-9 h-9")}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {c.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold">Duration: {c.duration}</span>
                    <span>•</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{c.avgSalary}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {c.description}
                  </p>

                  {/* Highlights Pill List */}
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Curriculum Highlights:</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {c.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center space-x-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-brand-500 flex-shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Actions */}
                <div className="p-6 bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                  <button
                    onClick={() => handleCourseClick(c.id)}
                    className="flex-1 py-3 px-3 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-primary text-white font-extrabold text-xs shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-1"
                  >
                    <span>View Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all"
                  >
                    Book Free Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All 15 Courses Button */}
        {!showAll && filteredCourses.length > 6 && (
          <div className="text-center pt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white font-extrabold text-sm border border-slate-700 shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center space-x-2"
            >
              <span>Explore All 15 Master Career Tracks</span>
              <ArrowRight className="w-4 h-4 text-brand-400" />
            </button>
          </div>
        )}

        {/* 6 Core Student Assurances Bento */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              The Yukti 6-Pillar Student Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Every student enrolled in our career programs is backed by our proven training methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '100% Placement Assurance', desc: 'Unlimited interview drives with 150+ hiring partners until you sign your offer letter.' },
              { title: 'Live Production Capstones', desc: 'Push real code to production GitHub repos with code reviews by senior architects.' },
              { title: '1-on-1 Senior Mentorship', desc: 'Direct access to architects with 10+ years experience in top MNCs & product firms.' },
              { title: 'Small Batch Size (Max 15)', desc: 'Guaranteed personalized attention, interactive live labs, and weekly doubt sprints.' },
              { title: 'ISO 9001:2015 Certification', desc: 'Recognized industry certification to elevate your corporate resume credibility.' },
              { title: 'Lifetime Alumni Access', desc: 'Free access to curriculum updates, community hackathons, and lifetime job referrals.' }
            ].map((ass, aIdx) => (
              <div key={aIdx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-2 hover:border-brand-500/40 transition-all">
                <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900 dark:text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>{ass.title}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{ass.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
