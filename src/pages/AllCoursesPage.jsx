import React, { useState, useEffect } from 'react';
import { docxPagesData } from '../data/pagesDataFromDocs';
import { getCourseLogo } from '../components/TechLogos';
import { getCourseImages } from '../data/courseImages';
import { getCourses } from '../services/contentService';
import UpcomingBatches from '../components/UpcomingBatches';
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
  BookOpen,
  X
} from 'lucide-react';

import { MASTER_COURSES } from '../data/coursesData';
import { useCourses } from '../context/CoursesContext';

export default function AllCoursesPage({ onOpenConsultation, setCurrentPage }) {
  const { courses: contextCourses, courseCount } = useCourses();
  const courses = contextCourses && contextCourses.length > 0 ? contextCourses : MASTER_COURSES;
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = `All ${courses.length} IT Training Courses & Master Tracks | Yukti Software Greater Noida`;
  }, [courses.length]);

  const filterTabs = [
    { id: 'all', label: `All Tracks (${courses.length})` },
    { id: 'fullstack', label: 'Full Stack & MERN' },
    { id: 'programming', label: 'Programming & Java' },
    { id: 'dsa', label: 'DSA & FAANG' },
    { id: 'ai', label: 'AI & Data Analytics' },
    { id: 'databases', label: 'Database Systems' }
  ];

  const popularTags = [
    'Python',
    'Java Full Stack',
    'MERN Stack',
    'React.js',
    'DSA',
    'AI & ML',
    'Spring Boot',
    'SQL'
  ];

  const trimmedSearch = searchTerm.trim().toLowerCase();
  
  // Aliases mapping for common student queries
  const getNormalizedQuery = (str) => {
    return str
      .replace(/react\.?js/g, 'react')
      .replace(/node\.?js/g, 'node')
      .replace(/springboot/g, 'spring boot')
      .replace(/fullstack/g, 'full stack')
      .replace(/deep learning/g, 'deep neural')
      .replace(/genai|generative ai/g, 'genai prompt llm');
  };

  const expandedQuery = getNormalizedQuery(trimmedSearch);
  const searchTokens = expandedQuery.split(/\s+/).filter(tok => tok.length > 0);

  // Search and filter algorithm
  const filteredCourses = courses.filter(c => {
    const docxCourse = docxPagesData.courses[c.key] || {};
    
    // Check category filter
    const matchesFilter = filter === 'all' || c.category === filter;
    if (!matchesFilter) return false;
    if (!trimmedSearch) return true;

    // Searchable text corpus for this course
    const title = (c.title || '').toLowerCase();
    const key = (c.key || '').toLowerCase();
    const desc = (c.description || '').toLowerCase();
    const highlights = (c.highlights || []).join(' ').toLowerCase();
    const badge = (c.badge || '').toLowerCase();
    const category = (c.category || '').toLowerCase();
    const keywords = (docxCourse.keywords || '').toLowerCase();
    const headline = (docxCourse.headline || '').toLowerCase();
    const curriculum = (docxCourse.curriculum || [])
      .map(m => `${m.moduleTitle || ''} ${(m.topics || []).join(' ')}`)
      .join(' ')
      .toLowerCase();

    const corpus = `${title} ${key} ${desc} ${highlights} ${badge} ${category} ${keywords} ${headline} ${curriculum}`;

    // Match either full search phrase OR each token in the query
    if (corpus.includes(trimmedSearch) || corpus.includes(expandedQuery)) return true;
    return searchTokens.every(tok => corpus.includes(tok));
  }).sort((a, b) => {
    if (!trimmedSearch) return 0;

    const getScore = (c) => {
      const docxCourse = docxPagesData.courses[c.key] || {};
      const title = (c.title || '').toLowerCase();
      const key = (c.key || '').toLowerCase();
      const highlights = (c.highlights || []).join(' ').toLowerCase();
      const desc = (c.description || '').toLowerCase();
      const curriculum = (docxCourse.curriculum || [])
        .map(m => `${m.moduleTitle || ''} ${(m.topics || []).join(' ')}`)
        .join(' ')
        .toLowerCase();

      let score = 0;
      if (title === trimmedSearch) score += 500;
      if (title.startsWith(trimmedSearch)) score += 300;
      if (title.includes(trimmedSearch)) score += 200;
      if (key.includes(trimmedSearch)) score += 150;
      if (highlights.includes(trimmedSearch)) score += 80;
      if (desc.includes(trimmedSearch)) score += 40;
      if (curriculum.includes(trimmedSearch)) score += 30;

      searchTokens.forEach(tok => {
        if (title.includes(tok)) score += 60;
        if (key.includes(tok)) score += 40;
        if (highlights.includes(tok)) score += 20;
        if (curriculum.includes(tok)) score += 15;
      });

      return score;
    };

    return getScore(b) - getScore(a);
  });

  // Total matches across all categories (used if a specific category is active with 0 results)
  const totalMatchesAcrossAll = trimmedSearch 
    ? MASTER_COURSES.filter(c => {
        const docxCourse = docxPagesData.courses[c.key] || {};
        const title = (c.title || '').toLowerCase();
        const key = (c.key || '').toLowerCase();
        const desc = (c.description || '').toLowerCase();
        const highlights = (c.highlights || []).join(' ').toLowerCase();
        const curriculum = (docxCourse.curriculum || [])
          .map(m => `${m.moduleTitle || ''} ${(m.topics || []).join(' ')}`)
          .join(' ')
          .toLowerCase();
        const corpus = `${title} ${key} ${desc} ${highlights} ${curriculum}`;
        return corpus.includes(trimmedSearch) || searchTokens.every(tok => corpus.includes(tok));
      }).length 
    : MASTER_COURSES.length;

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
            Explore {courses.length} industry-crafted software training programs with 100% practical lab sessions, live enterprise capstones, and dedicated placement support.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto pt-2 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchTerm(val);
                  if (val && filter !== 'all') {
                    setFilter('all');
                  }
                }}
                placeholder="Search courses by skill (e.g. Python, React, Java, AI, SQL, DSA)..."
                className="w-full pl-10 pr-10 py-3 rounded-2xl bg-slate-800/90 border border-slate-700 text-white text-xs sm:text-sm placeholder-slate-400 focus:ring-2 focus:ring-brand-500 outline-none shadow-inner transition-all"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Popular Searches */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px]">
              <span className="text-slate-400 font-medium mr-1">Popular:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSearchTerm(tag);
                    setFilter('all');
                  }}
                  className={`px-2.5 py-1 rounded-lg border transition-all ${
                    searchTerm.toLowerCase() === tag.toLowerCase()
                      ? 'bg-brand-600 border-brand-500 text-white font-bold'
                      : 'bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
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
          <p>
            {searchTerm ? (
              <span>Found <span className="font-extrabold text-brand-600 dark:text-brand-400">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''} matching "<span className="text-slate-900 dark:text-white font-semibold">{searchTerm}</span>"</span>
            ) : (
              <span>Showing <span className="font-extrabold text-slate-900 dark:text-white">{filteredCourses.length}</span> of {courses.length} Career Tracks</span>
            )}
          </p>
          {searchTerm && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
              className="text-brand-600 dark:text-brand-400 font-bold hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* 16 Courses Grid / Empty Search State */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
            <Search className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No matching courses found for "{searchTerm}" {filter !== 'all' ? `in this category` : ''}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              {filter !== 'all' && totalMatchesAcrossAll > 0 ? (
                `There are ${totalMatchesAcrossAll} matching course(s) in other categories.`
              ) : (
                `Try searching for Python, Java, React, MERN, AI, DSA, or SQL.`
              )}
            </p>
            <div className="flex justify-center gap-3 pt-2">
              {filter !== 'all' && totalMatchesAcrossAll > 0 && (
                <button
                  onClick={() => setFilter('all')}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  Show All {totalMatchesAcrossAll} Results Across Tracks
                </button>
              )}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilter('all');
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs shadow-md transition-all"
              >
                Reset & View All {courses.length} Courses
              </button>
            </div>
          </div>
        ) : (
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
                    <div className="absolute bottom-2 left-2 right-2 flex items-center text-white">
                      <span className="text-[10px] font-bold text-white drop-shadow truncate">
                        {mainImg.title}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
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
                    <span>Explore Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Enroll Now →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        )}

      </section>

      {/* Upcoming & Ongoing Batches Schedule */}
      <UpcomingBatches onOpenConsultation={onOpenConsultation} setCurrentPage={setCurrentPage} />

      {/* Trust & Placement Banner */}
      <section className="bg-slate-100/60 dark:bg-slate-900/40 py-14 border-y border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Award className="w-10 h-10 text-brand-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Placement Assistance with 20+ Hiring Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our dedicated placement cell provides resume preparation, mock interview drills, and career guidance after course completion.
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
