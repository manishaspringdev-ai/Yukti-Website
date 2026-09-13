import React from 'react';
import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { useSiteData } from '../hooks/useSiteData';

export default function MainGoogleReviews({ onOpenConsultation }) {
  const { data } = useSiteData();
  const reviews = data.googleReviews || [];

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span>4.9 / 5.0 Google Verified Rating (380+ Reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Real Stories, Real Placements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Read verified feedback from alumni and enterprise partners who accelerated their tech growth with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={rev.id || idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating || 5)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">{rev.date || 'Verified'}</span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white">{rev.author}</h4>
                    <p className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">{rev.role}</p>
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
                      <CheckCircle className="w-3 h-3" /> Google
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
