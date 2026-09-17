import React, { useState } from 'react';
import { docxPagesData } from '../data/pagesDataFromDocs';
import { getCourseLogo } from '../components/TechLogos';
import { getCourseImages } from '../data/courseImages';
import { 
  Sparkles, 
  GraduationCap, 
  ArrowRight, 
  Terminal, 
  Code2, 
  Binary, 
  Database, 
  CheckCircle2, 
  Award,
  Users,
  ShieldCheck,
  Search,
  Layers,
  Cpu,
  Globe,
  Server,
  Zap,
  TrendingUp,
  Clock,
  BookOpen
} from 'lucide-react';

const MASTER_COURSES = [
  {
    id: "course-ai-fullstack",
    key: "ai-fullstack",
    title: "AI Full Stack Development Course",
    category: "ai",
    badge: "Next-Gen AI",
    duration: "6 Months",
    avgSalary: "₹7.0 – ₹24 LPA",
    highestSalary: "₹32.0 LPA",
    icon: Sparkles,
    color: "from-purple-600 to-indigo-600",
    description: "Build intelligent full stack web applications integrating Generative AI, LLMs, LangChain, AI Agents, React.js and modern backend APIs.",
    highlights: ["GenAI & Prompt Engineering", "AI Agent Automations", "React.js + Fast API", "Live AI Capstones"]
  },
  {
    id: "course-java-fullstack",
    key: "java-fullstack",
    title: "Java Full Stack Development & Microservices",
    category: "fullstack",
    badge: "Enterprise Standard",
    duration: "5 - 6 Months",
    avgSalary: "₹6.0 – ₹24 LPA",
    highestSalary: "₹28.0 LPA",
    icon: Code2,
    color: "from-indigo-600 to-blue-600",
    description: "Become an enterprise developer mastering React.js frontend, Core & Advanced Java, Spring Boot 3, Microservices, Kafka, Docker and AWS cloud.",
    highlights: ["React.js & Tailwind CSS", "Spring Boot 3 REST APIs", "Hibernate / JPA & MySQL", "Cloud Microservices Capstone"]
  },
  {
    id: "course-mern-stack",
    key: "mern-stack",
    title: "MERN Stack Development Course",
    category: "fullstack",
    badge: "High Job Demand",
    duration: "4 - 6 Months",
    avgSalary: "₹5.0 – ₹16 LPA",
    highestSalary: "₹20.0 LPA",
    icon: Layers,
    color: "from-teal-600 to-emerald-600",
    description: "Master full stack JavaScript from scratch with MongoDB database, Express.js backend, React.js UI, Node.js runtime, and cloud deployment.",
    highlights: ["MongoDB & Aggregations", "Express.js REST APIs", "React Hooks & Redux", "JWT Auth & AWS Deploy"]
  },
  {
    id: "course-python-fullstack",
    key: "python-fullstack",
    title: "Python Full Stack Developer Course",
    category: "fullstack",
    badge: "Most Popular",
    duration: "4 - 6 Months",
    avgSalary: "₹5.0 – ₹18 LPA",
    highestSalary: "₹22.0 LPA",
    icon: Terminal,
    color: "from-blue-600 to-cyan-600",
    description: "Comprehensive end-to-end full stack training featuring Python 3, Django REST framework, Flask, React.js frontend, and PostgreSQL databases.",
    highlights: ["Django & Flask Backends", "React.js Integration", "PostgreSQL & ORM", "Live Full Stack Portal"]
  },
  {
    id: "course-fullstack",
    key: "fullstack",
    title: "Full Stack Web Engineering Course",
    category: "fullstack",
    badge: "Job-Ready",
    duration: "4 - 6 Months",
    avgSalary: "₹5.0 – ₹15 LPA",
    highestSalary: "₹18.0 LPA",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    description: "Full spectrum web engineering covering modern HTML5, CSS3, JavaScript ES6+, React.js, Node.js, REST APIs, Git version control, and CI/CD.",
    highlights: ["Responsive UI Systems", "Full Stack Node APIs", "Database Modeling", "Production Deployments"]
  },
  {
    id: "course-dsa",
    key: "dsa",
    title: "Data Structures & Algorithms (FAANG Mastery)",
    category: "dsa",
    badge: "FAANG Tier",
    duration: "3 - 4 Months",
    avgSalary: "₹8.0 – ₹28 LPA",
    highestSalary: "₹42.0 LPA",
    icon: Binary,
    color: "from-emerald-600 to-teal-500",
    description: "Crack product company and FAANG coding rounds. Master algorithmic optimization, DP, Trees, Graphs, and System Design with 350+ LeetCode patterns.",
    highlights: ["350+ LeetCode Problems", "Dynamic Programming & Graphs", "Low & High Level Design", "1-on-1 Mock Interviews"]
  },
  {
    id: "course-python",
    key: "python",
    title: "Python Core & Advanced Programming",
    category: "programming",
    badge: "Top Rated",
    duration: "3 - 4 Months",
    avgSalary: "₹4.5 – ₹14 LPA",
    highestSalary: "₹18.0 LPA",
    icon: Terminal,
    color: "from-sky-600 to-indigo-600",
    description: "Master Python programming from syntax basics to OOP, multi-threading, automated scripting, web scraping, and database integrations.",
    highlights: ["Core OOPs & Modularity", "File Handling & Multithreading", "Web Scraping & APIs", "MySQL & SQLite Integration"]
  },
  {
    id: "course-java",
    key: "java",
    title: "Core & Enterprise Java Programming",
    category: "programming",
    badge: "Industry Core",
    duration: "3 - 4 Months",
    avgSalary: "₹5.0 – ₹14 LPA",
    highestSalary: "₹18.0 LPA",
    icon: Code2,
    color: "from-amber-600 to-orange-600",
    description: "Build robust enterprise fundamentals with Core Java, OOP architecture, Exception Handling, Collections Framework, JDBC, and multithreading.",
    highlights: ["OOP Design Patterns", "Collections & Streams API", "JDBC Database Connectivity", "Enterprise Capstone"]
  },
  {
    id: "course-spring-boot",
    key: "spring-boot",
    title: "Spring Boot & Microservices Course",
    category: "programming",
    badge: "Backend Pro",
    duration: "3 - 4 Months",
    avgSalary: "₹6.0 – ₹22 LPA",
    highestSalary: "₹26.0 LPA",
    icon: Server,
    color: "from-emerald-600 to-green-600",
    description: "Master enterprise backend engineering with Spring Boot 3, Spring Data JPA, Hibernate ORM, Spring Security with JWT, and Microservices architecture.",
    highlights: ["RESTful API Architecture", "Spring Security & OAuth2", "Microservices & Docker", "Cloud Native Deployments"]
  },
  {
    id: "course-react-js",
    key: "react-js",
    title: "React JS & Modern Frontend Development",
    category: "fullstack",
    badge: "Essential UI",
    duration: "2 - 3 Months",
    avgSalary: "₹4.5 – ₹14 LPA",
    highestSalary: "₹16.0 LPA",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    description: "Master the most popular UI library with React 19, Hooks, Redux Toolkit, Context API, Tailwind CSS, TypeScript, and modern SPA architecture.",
    highlights: ["Component Architecture", "Custom Hooks & Redux Toolkit", "API Integration & Routing", "High-Performance SPAs"]
  },
  {
    id: "course-html-css",
    key: "html-css",
    title: "HTML5, Modern CSS3 & UI/UX Foundations",
    category: "fullstack",
    badge: "Beginner Friendly",
    duration: "2 Months",
    avgSalary: "₹3.5 – ₹8 LPA",
    highestSalary: "₹10.0 LPA",
    icon: Globe,
    color: "from-rose-500 to-orange-500",
    description: "Start your web journey mastering modern semantic HTML5, CSS Grid, Flexbox, responsive layouts, Tailwind CSS, CSS animations, and UI best practices.",
    highlights: ["Semantic HTML5 Layouts", "Flexbox & CSS Grid Mastery", "Responsive Mobile-First UI", "Portfolio Website Capstone"]
  },
  {
    id: "course-ai-ml",
    key: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    category: "ai",
    badge: "High Growth",
    duration: "5 - 6 Months",
    avgSalary: "₹7.5 – ₹26 LPA",
    highestSalary: "₹34.0 LPA",
    icon: Cpu,
    color: "from-violet-600 to-purple-600",
    description: "Deep dive into Supervised & Unsupervised ML algorithms, Neural Networks, Deep Learning with TensorFlow & PyTorch, NLP, and Computer Vision.",
    highlights: ["Predictive ML Models", "Deep Neural Networks", "Computer Vision & NLP", "Model Deployment & APIs"]
  },
  {
    id: "course-data-analytics",
    key: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    category: "ai",
    badge: "Top Placement",
    duration: "4 Months",
    avgSalary: "₹5.0 – ₹16 LPA",
    highestSalary: "₹20.0 LPA",
    icon: TrendingUp,
    color: "from-emerald-600 to-cyan-600",
    description: "Transform business data into insights using Advanced Excel, SQL queries, Python for Data Analysis (Pandas/NumPy), Power BI, and Tableau dashboards.",
    highlights: ["Advanced SQL & ETL", "Python Analytics (Pandas)", "Power BI & Tableau Dashboards", "Live Business Case Studies"]
  },
  {
    id: "course-dbms",
    key: "dbms",
    title: "Database Management Systems (DBMS) & SQL",
    category: "databases",
    badge: "Core Foundation",
    duration: "2 - 3 Months",
    avgSalary: "₹4.5 – ₹14 LPA",
    highestSalary: "₹16.0 LPA",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    description: "Master relational database architecture, ER modeling, complex SQL joins, indexing, query optimization, transactions, stored procedures, and triggers.",
    highlights: ["Relational Database Design", "Complex SQL & Subqueries", "Indexing & Optimization", "ACID & Stored Procedures"]
  },
  {
    id: "course-nosql",
    key: "nosql",
    title: "NoSQL & MongoDB Distributed Database",
    category: "databases",
    badge: "Cloud Scale",
    duration: "2 - 3 Months",
    avgSalary: "₹5.0 – ₹15 LPA",
    highestSalary: "₹18.0 LPA",
    icon: Database,
    color: "from-emerald-600 to-teal-600",
    description: "Master modern document and NoSQL databases with MongoDB CRUD operations, aggregation pipelines, schema modeling, indexing, Redis caching, and scaling.",
    highlights: ["Document Data Modeling", "Aggregation Pipelines", "Redis In-Memory Caching", "NoSQL Integration in Node/Python"]
  }
];

export default function AllCoursesPage({ onOpenConsultation, setCurrentPage }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterTabs = [
    { id: 'all', label: `All 15 Tracks (${MASTER_COURSES.length})` },
    { id: 'fullstack', label: 'Full Stack & MERN' },
    { id: 'programming', label: 'Programming & Java' },
    { id: 'dsa', label: 'DSA & FAANG' },
    { id: 'ai', label: 'AI & Data Analytics' },
    { id: 'databases', label: 'Database Systems' }
  ];

  const filteredCourses = MASTER_COURSES.filter(c => {
    const matchesFilter = filter === 'all' || c.category === filter;
    const matchesSearch = searchTerm === '' || 
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-4 sm:pt-6 space-y-10 sm:space-y-12 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-10 sm:py-12 lg:py-14 border-b border-slate-800 text-center rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Master Career Catalog & Syllabus
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore 15 industry-crafted software training programs with 100% practical lab sessions, live enterprise capstones, and dedicated placement support.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses by skill (e.g. Python, React, AI, SQL)..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-800/90 border border-slate-700 text-white text-xs placeholder-slate-400 focus:ring-2 focus:ring-brand-500 outline-none shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Course Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Count Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
          <p>Showing <span className="font-extrabold text-slate-900 dark:text-white">{filteredCourses.length}</span> of {MASTER_COURSES.length} Career Tracks</p>
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-brand-600 dark:text-brand-400 font-bold hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* 15 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const IconComp = course.icon || Code2;
            const docxCourse = docxPagesData.courses[course.key] || {};
            const moduleCount = docxCourse.curriculum?.length || 12;
            const courseImages = getCourseImages(course.key);
            const mainImg = courseImages[0];

            return (
              <div
                key={course.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-brand-500/50 hover-shine transition-all duration-300 flex flex-col justify-between group space-y-5"
              >
                <div className="space-y-4">
                  {/* Photo Preview in Course Card */}
                  <div className="relative rounded-2xl overflow-hidden h-36 w-full shadow-sm group-hover:shadow-md transition-all">
                    <img 
                      src={mainImg.url} 
                      alt={mainImg.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                      <span className="text-[10px] font-bold text-white drop-shadow truncate">
                        {mainImg.title}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md text-[9px] font-extrabold uppercase text-white border border-white/30 shrink-0">
                        {mainImg.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {getCourseLogo(course.id, "w-7 h-7")}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </span>
                      <span>•</span>
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{course.avgSalary}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>Curriculum Highlights</span>
                      <span className="text-brand-600 dark:text-brand-400">{moduleCount} Modules</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {course.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      if (setCurrentPage) {
                        setCurrentPage(course.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-primary text-white font-black text-xs shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-1"
                  >
                    <span>View Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Trust & Placement Banner */}
      <section className="bg-slate-100/60 dark:bg-slate-900/40 py-14 border-y border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Award className="w-10 h-10 text-brand-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            100% Placement Support with 350+ Hiring Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our dedicated placement cell conducts weekly resume reviews, mock interviews, and direct recruitment drives with leading MNCs and high-growth tech startups.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs shadow-xl transition-all"
          >
            Talk to Senior Career Counselor in Greater Noida
          </button>
        </div>
      </section>

    </div>
  );
}
