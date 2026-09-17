import React from 'react';
import { siteData } from '../data';
import { Sparkles, Star, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';

export default function GoogleReviewsWidget({ onOpenConsultation }) {
  const { googleReviews, brand } = siteData;

  return (
    <section id="reviews" className="py-12 sm:py-14 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header with Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {googleReviews.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              {googleReviews.subtitle}
            </p>
          </div>

          {/* Rating Summary Box (Like Rexton Reference) */}
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md shrink-0">
            <div className="text-center pr-4 border-r border-slate-200 dark:border-slate-700">
              <p className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                {googleReviews.overallScore}
              </p>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-xs text-slate-900 dark:text-white">Google Rating</span>
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {googleReviews.totalReviews}+ Verified Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleReviews.reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 card-hover-effect hover-shine flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Author Info & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={rev.avatar} 
                      alt={rev.author} 
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-500/20 group-hover:ring-brand-500/50 group-hover:scale-110 transition-all duration-300 shadow-sm" width="44" height="44" loading="lazy" decoding="async"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {rev.author}
                      </h4>
                      <div className="flex items-center space-x-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Google Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Google G mark */}
                  <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>
                </div>

                {/* Star Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 group-hover:scale-105 transition-transform">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Review Category Tag */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                  {rev.tag}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {brand.name} Greater Noida
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-bold">
              ★
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                Join 500+ Placed Students and 50+ Satisfied Enterprise Clients
              </p>
              <p className="text-[11px] text-slate-500">
                Direct classroom training in Greater Noida with dedicated placement support.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all flex items-center space-x-2 shrink-0"
          >
            <span>Book Free Demo Class</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
