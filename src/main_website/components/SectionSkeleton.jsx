import React from 'react';

export default function SectionSkeleton({ lines = 4, height = 'h-72', title = 'Loading Section...' }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse" aria-busy="true">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        <div className="h-6 w-24 bg-brand-500/20 rounded-full"></div>
      </div>
      <div className={`${height} w-full bg-slate-100 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-center space-y-4`}>
        <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
        <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="h-28 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
          <div className="h-28 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
          <div className="h-28 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
