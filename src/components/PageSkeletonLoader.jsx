import React from 'react';

export default function PageSkeletonLoader({ type = 'courses' }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10 animate-pulse">
      
      {/* Header Skeleton Banner */}
      <div className="h-44 sm:h-52 rounded-3xl bg-slate-200 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center space-y-4">
        <div className="w-40 h-6 rounded-full bg-slate-300 dark:bg-slate-700" />
        <div className="w-3/4 sm:w-1/2 h-10 rounded-2xl bg-slate-300 dark:bg-slate-700" />
        <div className="w-1/2 sm:w-1/3 h-4 rounded-xl bg-slate-300 dark:bg-slate-700" />
      </div>

      {/* Filter Tabs Skeleton */}
      <div className="flex flex-wrap justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-24 sm:w-32 h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
        ))}
      </div>

      {/* Grid Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800" />
              <div className="w-20 h-5 rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="w-3/4 h-6 rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="w-1/2 h-4 rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="space-y-2 pt-2">
              <div className="w-full h-3 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="w-5/6 h-3 rounded bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div className="w-20 h-4 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="w-24 h-8 rounded-xl bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
