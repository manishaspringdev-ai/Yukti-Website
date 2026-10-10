import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Filter, 
  Search, 
  Layers,
  GraduationCap, 
  ShieldCheck, 
  Zap, 
  PhoneCall,
  RefreshCw
} from 'lucide-react';
import { getActiveBatches } from '../services/batchService';
import { useCourses } from '../context/CoursesContext';

export default function UpcomingBatches({ onOpenConsultation, setCurrentPage }) {
  const { courseCount } = useCourses();
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeModeFilter, setActiveModeFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setLoading(true);
        const data = await getActiveBatches();
        if (isMounted) {
          setBatches(data || []);
        }
      } catch (err) {
        console.warn('Batch fetch error:', err);
        if (isMounted) setBatches([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  const modeFilters = ['All', 'Classroom', 'Live Online', 'Hybrid'];

  const filteredBatches = batches.filter((b) => {
    const mode = (b.mode || '').toLowerCase();
    const matchesFilter = 
      activeModeFilter === 'All' ||
      (activeModeFilter === 'Classroom' && mode.includes('classroom')) ||
      (activeModeFilter === 'Live Online' && (mode.includes('online') || mode.includes('live'))) ||
      (activeModeFilter === 'Hybrid' && mode.includes('hybrid'));

    if (!matchesFilter) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      (b.courseName || '').toLowerCase().includes(q) ||
      (b.batchCode || '').toLowerCase().includes(q) ||
      (b.trainer || '').toLowerCase().includes(q) ||
      (b.timing || '').toLowerCase().includes(q)
    );
  });

  const handleEnroll = (batch) => {
    if (onOpenConsultation) {
      onOpenConsultation({
        type: 'student',
        course: batch.courseName,
        batchCode: batch.batchCode
      });
    }
  };

  return (
    <section id="batches" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 transition-colors relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent-primary/5 dark:bg-accent-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800/80 text-brand-700 dark:text-brand-300 text-xs font-bold shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>LIVE TRAINING BATCH SCHEDULE 2026</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Upcoming & Ongoing <span className="bg-gradient-to-r from-brand-600 to-accent-primary bg-clip-text text-transparent">Course Batches</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Enroll in upcoming classroom and interactive online cohorts in Greater Noida. Small batch sizes (max 15-20 students) ensure 1-on-1 mentor guidance and guaranteed placement support.
          </p>
        </div>

        {/* Loading State Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-3xl bg-slate-200 dark:bg-slate-800/50 p-6 space-y-4">
                <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/3"></div>
                <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded w-3/4"></div>
                <div className="h-20 bg-slate-300 dark:bg-slate-700 rounded w-full"></div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State (When no batches exist in Firestore) */}
        {!loading && batches.length === 0 && (
          <div className="text-center bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-5 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto shadow-xs">
              <Calendar className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                New Batches Starting Next Week
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                Admissions are currently open for all {courseCount} career tracks. Reserve your seat early to claim up to 30% scholarship and custom slot timings.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenConsultation && onOpenConsultation({ type: 'student' })}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-primary hover:from-brand-500 hover:to-accent-primary text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
              >
                Inquire Batch Timings / Book Free Demo
              </button>
            </div>
          </div>
        )}

        {/* Filters and Batches Grid (Rendered when batches exist in Firestore) */}
        {!loading && batches.length > 0 && (
          <>
            {/* Filters and Search Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              
              {/* Mode Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                {modeFilters.map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setActiveModeFilter(mode)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeModeFilter === mode
                        ? 'bg-brand-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search course, mentor, timing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
            </div>

            {/* Batches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBatches.map((batch) => {
                const isFillingFast = (batch.status || '').toLowerCase().includes('filling');
                return (
                  <div 
                    key={batch.id}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative group"
                  >
                    {/* Top Badge Row */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 font-mono font-extrabold text-[10px] tracking-wider border border-brand-200 dark:border-brand-800">
                          {batch.batchCode || 'BATCH'}
                        </span>

                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold flex items-center space-x-1 ${
                          isFillingFast
                            ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700 animate-pulse'
                            : 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                        }`}>
                          <Flame className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                          <span>{batch.status || 'Upcoming'}</span>
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {batch.courseName}
                      </h3>

                      {/* Schedule Details List */}
                      <div className="space-y-2 pt-2 text-xs">
                        {/* Start Date */}
                        <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                          <Calendar className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Batch Start Date</span>
                            <span className="font-bold text-slate-900 dark:text-white">{batch.startDate}</span>
                          </div>
                        </div>

                        {/* Timings */}
                        <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                          <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Class Timing</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{batch.timing}</span>
                          </div>
                        </div>

                        {/* Mode & Venue */}
                        <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                          <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Delivery Mode</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{batch.mode}</span>
                          </div>
                        </div>

                        {/* Mentor */}
                        {batch.trainer && (
                          <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                            <Users className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                            <div>
                              <span className="text-[10px] text-slate-400 block font-medium">Mentor / Faculty</span>
                              <span className="font-semibold text-slate-800 dark:text-slate-200">{batch.trainer}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Highlights Bullet */}
                      {batch.highlights && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 italic bg-brand-50/40 dark:bg-brand-950/20 p-2.5 rounded-xl border border-brand-100 dark:border-brand-900">
                          ⚡ {batch.highlights}
                        </p>
                      )}
                    </div>

                    {/* Bottom CTA Row: Seats Left & Reserve Button */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                          Duration: <strong className="text-slate-800 dark:text-slate-200">{batch.duration || '4 Months'}</strong>
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-extrabold text-[10px] border border-emerald-200 dark:border-emerald-800">
                          ● {batch.seatsLeft || 5} Seats Left
                        </span>
                      </div>

                      <button
                        onClick={() => handleEnroll(batch)}
                        className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary hover:from-brand-500 hover:to-accent-primary text-white font-extrabold text-xs shadow-md shadow-brand-600/20 flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <span>Reserve Seat / Claim Scholarship</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Bottom Fast Booking Support Note */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-brand-800/60 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-black flex items-center justify-center sm:justify-start space-x-2">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span>Need a Custom Batch Timing or Fast-Track 1-on-1 Weekend Slot?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We offer personalized corporate batches, college group batches and flexible timings for working professionals.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => onOpenConsultation && onOpenConsultation({ type: 'student' })}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer"
            >
              Talk to Batch Counselor
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
