import React, { useState } from 'react';
import { siteData } from '../data';
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
  ShieldCheck
} from 'lucide-react';

export default function AllCoursesPage({ onOpenConsultation, setCurrentPage }) {
  const [filter, setFilter] = useState('all');

  const courseList = [
    {
      id: "course-python",
      title: "Complete Python Training Course",
      tag: "Highest Placements",
      category: "python",
      duration: "4 - 6 Months",
      avgSalary: "₹4.5 – ₹10 LPA",
      highestSalary: "₹14.0 LPA",
      icon: Terminal,
      color: "from-blue-600 to-cyan-500",
      description: "Master Python programming from zero to advanced web development, task automation, and data analytics with real capstone projects.",
      highlights: ["12 Deep Modules", "Flask & Django Web Dev", "Automation & Web Scraping", "Data Analysis (NumPy/Pandas)"]
    },
    {
      id: "course-java-fullstack",
      title: "Java Full Stack Development Course",
      tag: "Enterprise Standard",
      category: "fullstack",
      duration: "5 - 6 Months",
      avgSalary: "₹5.0 – ₹12 LPA",
      highestSalary: "₹18.0 LPA",
      icon: Code2,
      color: "from-indigo-600 to-purple-600",
      description: "Become a full-spectrum developer mastering React.js frontend, Core & Advanced Java, Spring Boot microservices, and MySQL.",
      highlights: ["React.js & Hooks", "Spring Boot & REST APIs", "Hibernate ORM", "Live E-Commerce Project"]
    },
    {
      id: "course-dsa",
      title: "Data Structures and Algorithms (DSA)",
      tag: "FAANG & Product Crack",
      category: "dsa",
      duration: "3 - 4 Months",
      avgSalary: "₹6.0 – ₹16 LPA",
      highestSalary: "₹24.0 LPA",
      icon: Binary,
      color: "from-emerald-600 to-teal-500",
      description: "Crack technical coding rounds. Master problem-solving, algorithmic Big-O optimization, and System Design with 300+ LeetCode problems.",
      highlights: ["300+ LeetCode Drills", "C++ / Java / Python", "Dynamic Programming & Graphs", "1-on-1 Mock Interviews"]
    },
    {
      id: "course-datascience",
      title: "Data Science & Artificial Intelligence",
      tag: "Future-Ready Tech",
      category: "ai",
      duration: "6 Months",
      avgSalary: "₹6.5 – ₹14 LPA",
      highestSalary: "₹20.0 LPA",
      icon: Database,
      color: "from-amber-600 to-rose-600",
      description: "End-to-end practical data science covering Machine Learning algorithms, Deep Learning, NLP, Power BI dashboards, and model deployment.",
      highlights: ["Pandas & Scikit-Learn", "Deep Learning & NLP", "Power BI / Tableau", "MLOps & Cloud Deploy"]
    }
  ];

  const filteredCourses = filter === 'all' 
    ? courseList 
    : courseList.filter(c => c.category === filter);

  return (
    <div className="pt-24 space-y-20 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-16 lg:py-24 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Job-Ready IT Academy • Greater Noida Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Industry-Oriented Software Training & Placements
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Curated curriculums covering in-demand programming languages, live enterprise projects, 1-on-1 doubt clearing, and guaranteed placement drives.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Course Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'python', label: 'Python Programming' },
            { id: 'fullstack', label: 'Java Full Stack' },
            { id: 'dsa', label: 'Data Structures & Algorithms' },
            { id: 'ai', label: 'Data Science & AI' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => {
            const IconComp = course.icon;
            return (
              <div
                key={course.id}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-brand-500/50 transition-all flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${course.color} text-white flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                      {course.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Duration: {course.duration} • Average Package: <span className="font-bold text-emerald-600">{course.avgSalary}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Curriculum Highlights:</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {course.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      if (course.id.startsWith('course-')) {
                        setCurrentPage(course.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        onOpenConsultation();
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow transition-colors flex items-center space-x-1.5"
                  >
                    <span>View Full Syllabus & Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Book Free Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Trust & Placement Banner */}
      <section className="bg-slate-100/60 dark:bg-slate-900/40 py-16 border-y border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Award className="w-10 h-10 text-brand-600 mx-auto" />
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            100% Placement Support with 45+ Hiring Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our dedicated placement cell conducts weekly resume reviews, mock interviews, and direct recruitment drives with leading MNCs and high-growth tech startups.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-2xl bg-brand-600 text-white font-bold text-xs shadow-xl hover:bg-brand-500 transition-colors"
          >
            Talk to Career Counselor in Greater Noida
          </button>
        </div>
      </section>

    </div>
  );
}
