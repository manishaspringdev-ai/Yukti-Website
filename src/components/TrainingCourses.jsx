import React, { useState, useEffect } from 'react';
import { docxPagesData } from '../data/pagesDataFromDocs';
import { getCourseImages } from '../data/courseImages';
import { getCourseLogo } from './TechLogos';
import { getCourses } from '../services/contentService';
import classroomTrainingImg from '../assets/Gallery/IMG_1972.jpg';
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Code2, 
  Binary, 
  Globe,
  Database,
  Cpu
} from 'lucide-react';
import { useCourses } from '../context/CoursesContext';

// All Master Courses from DOCX
const allMasterCourses = [
    {
      id: "course-programming",
      docxKey: "programming",
      title: "Programming Course Greater Noida",
      tag: "Practical Labs",
      category: "programming",
      duration: "3 - 4 Months",
      icon: Code2,
      color: "from-cyan-600 to-blue-600",
      description: docxPagesData.courses['programming']?.description || "Master programming fundamentals, logic building, OOPs, Data Structures, File Handling, and database operations with advanced practical lab sessions.",
      modulesCount: docxPagesData.courses['programming']?.curriculum?.length || 15,
      highlights: ["14 Deep Practical Modules", "Data Structures & OOPs", "Databases & CRUD APIs", "100% Practical Lab Training"]
    },
    {
      id: "course-software-development",
      docxKey: "software-development",
      title: "Software Training Course Greater Noida",
      tag: "Accredited Certification",
      category: "programming",
      duration: "4 - 6 Months",
      icon: Code2,
      color: "from-blue-600 to-indigo-600",
      description: docxPagesData.courses['software-development']?.description || "Master software engineering fundamentals, SDLC, OOPs, DBMS, REST APIs, manual & automated testing, Git, and live projects.",
      modulesCount: docxPagesData.courses['software-development']?.curriculum?.length || 14,
      highlights: ["SDLC & Agile Development", "OOPs & Data Structures", "Software Testing & Debugging", "Live Industry Project"]
    },
    {
      id: "course-python",
      docxKey: "python",
      title: "Python Training Institute Greater Noida",
      tag: "Highest Placements",
      category: "python",
      duration: "4 - 6 Months",
      icon: Terminal,
      color: "from-blue-600 to-cyan-500",
      description: docxPagesData.courses['python']?.description || "Master Python programming from zero to advanced web development, task automation, and data analytics with real capstone projects.",
      modulesCount: docxPagesData.courses['python']?.curriculum?.length || 13,
      highlights: ["13 Deep Modules", "Flask & Django Web Dev", "Automation & Web Scraping", "Data Analysis (NumPy/Pandas)"]
    },
    {
      id: "course-java-fullstack",
      docxKey: "java-fullstack",
      title: "Java Full Stack Development Course",
      tag: "Enterprise Standard",
      category: "java",
      duration: "5 - 6 Months",
      icon: Code2,
      color: "from-indigo-600 to-purple-600",
      description: docxPagesData.courses['java-fullstack']?.description || "Become a full-spectrum developer mastering React.js frontend, Core & Advanced Java, Spring Boot microservices, and MySQL.",
      modulesCount: docxPagesData.courses['java-fullstack']?.curriculum?.length || 14,
      highlights: ["React.js & Hooks", "Spring Boot & REST APIs", "Hibernate ORM", "Live E-Commerce Project"]
    },
    {
      id: "course-advanced-java",
      docxKey: "advanced-java",
      title: "Advanced Java Training Institute",
      tag: "Industrial Expert Track",
      category: "java",
      duration: "4 - 5 Months",
      icon: Code2,
      color: "from-orange-600 to-amber-600",
      description: docxPagesData.courses['advanced-java']?.description || "Take your Java skills to the next level with JDBC, Servlets, JSP, Hibernate, Spring Boot 3, REST APIs, Microservices, and Docker.",
      modulesCount: docxPagesData.courses['advanced-java']?.curriculum?.length || 14,
      highlights: ["14 Advanced Modules", "Spring Boot & Microservices", "Hibernate & JPA ORM", "100% Placement Support"]
    },
    {
      id: "course-dsa",
      docxKey: "dsa",
      title: "DSA Course Greater Noida",
      tag: "FAANG & Product Crack",
      category: "dsa",
      duration: "3 - 4 Months",
      icon: Binary,
      color: "from-emerald-600 to-teal-500",
      description: docxPagesData.courses['dsa']?.description || "Crack technical coding rounds. Master problem-solving, algorithmic Big-O optimization, and System Design with 350+ LeetCode problems.",
      modulesCount: docxPagesData.courses['dsa']?.curriculum?.length || 14,
      highlights: ["350+ LeetCode Drills", "Dynamic Programming & Graphs", "System Design & Optimization", "1-on-1 Mock Interviews"]
    },
    {
      id: "course-ai-fullstack",
      docxKey: "ai-fullstack",
      title: "AI Full Stack Web Development",
      tag: "Next-Gen AI Era",
      category: "ai",
      duration: "6 Months",
      icon: Cpu,
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
      icon: Terminal,
      color: "from-sky-600 to-indigo-600",
      description: docxPagesData.courses['python-fullstack']?.description || "Complete frontend to backend mastery with HTML5, CSS3, JavaScript, React.js, Python, Django, and PostgreSQL.",
      modulesCount: docxPagesData.courses['python-fullstack']?.curriculum?.length || 13,
      highlights: ["React.js Frontend", "Django & Flask Backends", "RESTful API Integration", "Full Stack Capstone"]
    },
    {
      id: "course-mern-stack",
      docxKey: "mern-stack",
      title: "MERN Stack Training Institute",
      tag: "Startup & SaaS Favorite",
      category: "fullstack",
      duration: "5 Months",
      icon: Globe,
      color: "from-teal-600 to-emerald-600",
      description: docxPagesData.courses['mern-stack']?.description || "Build end-to-end cloud applications using MongoDB, Express.js, React.js, and Node.js with state management and authentication.",
      modulesCount: docxPagesData.courses['mern-stack']?.curriculum?.length || 15,
      highlights: ["React 19 & Redux Toolkit", "Node.js & Express REST APIs", "MongoDB & Mongoose", "Full Stack Cloud Deployment"]
    },
    {
      id: "course-react-js",
      docxKey: "react-js",
      title: "React JS Training Institute in Greater Noida",
      tag: "UI Architecture",
      category: "fullstack",
      duration: "3 Months",
      icon: Code2,
      color: "from-cyan-600 to-blue-600",
      description: docxPagesData.courses['react-js']?.description || "Master modern component design, hooks, state machines, Tailwind CSS, API caching, and high-performance UI architecture.",
      modulesCount: docxPagesData.courses['react-js']?.curriculum?.length || 16,
      highlights: ["React Hooks Deep Dive", "Tailwind & Glassmorphism UI", "Redux & Context API", "Portfolio Project Development"]
    },
    {
      id: "course-spring-boot",
      docxKey: "spring-boot",
      title: "Spring Boot Training Course",
      tag: "Banking & Fintech",
      category: "java",
      duration: "3 - 4 Months",
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
      icon: Database,
      color: "from-amber-600 to-orange-600",
      description: docxPagesData.courses['data-analytics']?.description || "Transform messy data into actionable business intelligence using Python, Pandas, NumPy, SQL, PowerBI, and Tableau.",
      modulesCount: docxPagesData.courses['data-analytics']?.curriculum?.length || 10,
      highlights: ["Python for Data Science", "Advanced SQL Analytics", "PowerBI & Tableau Dashboards", "Statistical Modeling"]
    },
    {
      id: "course-java",
      docxKey: "java",
      title: "Java Training Institute Greater Noida",
      tag: "Campus to Corporate",
      category: "java",
      duration: "4 Months",
      icon: Code2,
      color: "from-amber-600 to-rose-600",
      description: docxPagesData.courses['java']?.description || "Solidify Java OOPs concepts, multithreading, collections framework, JDBC, and enterprise architecture.",
      modulesCount: docxPagesData.courses['java']?.curriculum?.length || 13,
      highlights: ["Deep OOPs & Collections", "Multithreading & Concurrency", "JDBC & MySQL", "Interview Coding Drills"]
    },
    {
      id: "course-ai-ml",
      docxKey: "ai-ml",
      title: "AI & Machine Learning Course Greater Noida",
      tag: "High Growth",
      category: "ai",
      duration: "5 Months",
      icon: Cpu,
      color: "from-rose-600 to-violet-600",
      description: docxPagesData.courses['ai-ml']?.description || "Master supervised & unsupervised ML, deep neural networks, computer vision, NLP, and model deployment.",
      modulesCount: docxPagesData.courses['ai-ml']?.curriculum?.length || 14,
      highlights: ["Scikit-Learn & PyTorch", "NLP & Computer Vision", "Model Deployment Pipelines", "Real Kaggle Datasets"]
    },
    {
      id: "course-dbms",
      docxKey: "dbms",
      title: "Database Management System Course Greater Noida",
      tag: "Expert-Led & Job-Focused",
      category: "database",
      duration: "2 - 3 Months",
      icon: Database,
      color: "from-blue-700 to-slate-800",
      description: docxPagesData.courses['dbms']?.description || "Master relational database architecture, ER modeling, complex SQL joins, indexing, query optimization, security, and administration.",
      modulesCount: docxPagesData.courses['dbms']?.curriculum?.length || 14,
      highlights: ["14 Comprehensive Modules", "Database Design & Normalization", "Transactions & ACID", "100% Placement Support"]
    },
    {
      id: "course-nosql",
      docxKey: "nosql",
      title: "NoSQL Database & MongoDB",
      tag: "Big Data & Scalability",
      category: "database",
      duration: "2 - 3 Months",
      icon: Database,
      color: "from-emerald-700 to-teal-800",
      description: docxPagesData.courses['nosql']?.description || "Harness high-volume document databases with MongoDB, aggregation pipelines, caching with Redis, and horizontal scaling.",
      modulesCount: docxPagesData.courses['nosql']?.curriculum?.length || 9,
      highlights: ["MongoDB Aggregation Pipelines", "Redis In-Memory Caching", "Replica Sets & Sharding", "Real-Time Data Streaming"]
    },
    {
      id: "course-sql",
      docxKey: "sql",
      title: "SQL Training Course in Greater Noida",
      tag: "High Career Demand",
      category: "database",
      duration: "2 - 3 Months",
      icon: Database,
      color: "from-cyan-600 to-blue-700",
      description: docxPagesData.courses['sql']?.description || "Comprehensive SQL training with experienced faculty, hands-on lab exercises, multi-table joins, subqueries, CTEs, and query optimization.",
      modulesCount: docxPagesData.courses['sql']?.curriculum?.length || 12,
      highlights: ["Experienced Industry Faculty", "Advanced Database Labs", "Window Functions & CTEs", "100% Placement Support"]
    },
    {
      id: "course-html-css",
      docxKey: "html-css",
      title: "HTML5, CSS3 & Responsive Web",
      tag: "Beginner Friendly",
      category: "fullstack",
      duration: "2 Months",
      icon: Globe,
      color: "from-orange-500 to-rose-500",
      description: docxPagesData.courses['html-css']?.description || "Build pixel-perfect responsive websites from scratch with semantic HTML5, modern CSS Grid/Flexbox, animations, and Tailwind CSS.",
      modulesCount: docxPagesData.courses['html-css']?.curriculum?.length || 8,
      highlights: ["CSS Grid & Flexbox Mastery", "Mobile-First Design", "Tailwind CSS Utility UI", "Live Portfolio Website"]
    },
    {
      id: "course-fullstack",
      docxKey: "fullstack",
      title: "Full Stack Development Course Greater Noida",
      tag: "Complete Developer",
      category: "fullstack",
      duration: "6 Months",
      icon: Code2,
      modulesCount: docxPagesData.courses['fullstack']?.curriculum?.length || 16,
      highlights: ["Full Lifecycle Engineering", "CI/CD & DevOps Basics", "System Architecture", "Placement Assurance"]
    },
    {
      id: "course-nosql-institute",
      docxKey: "nosql-institute",
      title: "NoSQL Database Institute Greater Noida",
      tag: "Job Preparations",
      category: "database",
      duration: "2 - 3 Months",
      icon: Database,
      color: "from-teal-600 to-cyan-600",
      description: docxPagesData.courses['nosql-institute']?.description || "Focus on hands-on experience at Yukti Software NoSQL training under the guidance of experienced software engineers with comprehensive job preparation.",
      modulesCount: docxPagesData.courses['nosql-institute']?.curriculum?.length || 7,
      highlights: ["MongoDB & NoSQL Architecture", "Data Modeling & Aggregation", "Cloud & Big Data Specializations", "Mock Interviews & Job Support"]
    }
];

export default function TrainingCourses({ onOpenConsultation, setCurrentPage }) {
  const [showAll, setShowAll] = useState(false);
  const { courses: contextCourses, courseCount } = useCourses();
  const coursesList = contextCourses && contextCourses.length > 0 ? contextCourses : allMasterCourses;

  const displayedCourses = showAll ? coursesList : coursesList.slice(0, 6);

  const handleCourseClick = (courseId) => {
    if (setCurrentPage) {
      setCurrentPage(courseId);
    }
  };

  return (
    <section id="training" className="pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Practical IT Courses & Placement Programs
          </h2>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCourses.map((c) => {
            const courseImages = getCourseImages(c.id);
            const mainImg = courseImages[0];
            return (
              <div
                key={c.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 card-hover-effect hover-shine flex flex-col justify-between overflow-hidden group cursor-pointer"
                onClick={() => handleCourseClick(c.id)}
              >
                {/* Photo Preview in Card */}
                <div className="relative rounded-t-3xl overflow-hidden h-40 w-full shadow-sm">
                  <img 
                    src={mainImg.url} 
                    alt={mainImg.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center text-white">
                    <span className="text-[11px] font-bold text-white drop-shadow truncate">
                      {mainImg.title}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {c.description}
                  </p>
                </div>

                {/* Bottom Footer Actions */}
                <div className="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex gap-3" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => handleCourseClick(c.id)}
                    className="flex-1 py-3 px-3 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-primary text-white font-extrabold text-xs shadow-md hover:shadow-lg btn-spring flex items-center justify-center space-x-1"
                  >
                    <span>Explore Course</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 btn-spring flex items-center space-x-1"
                  >
                    <span>Enroll Now →</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Courses Button */}
        {!showAll && coursesList.length > 6 && (
          <div className="text-center pt-5 sm:pt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white font-extrabold text-sm border border-slate-700 shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center space-x-2"
            >
              <span>Explore All {courseCount} Master Career Tracks</span>
              <ArrowRight className="w-4 h-4 text-brand-400" />
            </button>
          </div>
        )}

        {/* Software Training Courses and Placements for the Youth */}
        <div className="mt-6 sm:mt-8 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 h-full min-h-[300px] sm:min-h-[380px] relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group">
              <img 
                src={classroomTrainingImg} 
                alt="Software Training Courses and Placements at Yukti Software" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-3 py-1 rounded-full bg-brand-600 text-white text-[11px] font-bold shadow">
                  Interactive Learning Hub
                </span>
                <p className="text-xs text-slate-200 font-medium mt-1">Greater Noida Campus</p>
              </div>
            </div>

            {/* Right Content & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <h2 
                  onClick={() => setCurrentPage && setCurrentPage('courses')}
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight cursor-pointer hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  Software Training Courses and Placements for the Youth
                </h2>
                <button
                  onClick={() => setCurrentPage && setCurrentPage('courses')}
                  title="Explore All Master Courses"
                  aria-label="Explore All Master Courses"
                  className="w-10 h-10 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-950/40 text-rose-500 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-sm mt-1 cursor-pointer hover:scale-110 active:scale-95 group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Yukti Software is shaping up the future for young minds, giving them the right guidance to help them develop the right skills and find great career opportunities. The IT courses that we offer are carefully curated to cover the most in-demand programming languages and IT domains to help you start your career on a high note. In addition to offering high-level IT courses, Yukti Software also conducts placement drives that offer job opportunities at top IT companies.
              </p>

              {/* 6 Key Highlights in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Advanced lab sessions for practical education",
                  "Job-oriented courses",
                  "Comprehensive study material for all candidates",
                  "Personalized learning with 1-on-1 doubt sessions",
                  "Career support and guidance by professionals",
                  "No hidden fees"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-row items-center gap-2 sm:gap-3 w-full">
                <button
                  onClick={() => setCurrentPage && setCurrentPage('training-institute')}
                  className="flex-1 sm:flex-none px-3 sm:px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-[11px] sm:text-xs shadow-md transition-all flex items-center justify-center space-x-1 sm:space-x-1.5 whitespace-nowrap text-center"
                >
                  <span><span className="hidden sm:inline">Accredited </span>Institute Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
                <button
                  onClick={() => setCurrentPage && setCurrentPage('courses')}
                  className="flex-1 sm:flex-none px-3 sm:px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-[11px] sm:text-xs border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center space-x-1 sm:space-x-1.5 whitespace-nowrap text-center"
                >
                  <span>Explore {courseCount}+ Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
