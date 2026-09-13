import React, { useState } from 'react';
import { siteData } from '../data';
import { Sparkles, Star, Quote, Award, Building2, CheckCircle2, UserCheck, MessageSquare, Briefcase, GraduationCap } from 'lucide-react';

export default function Testimonials() {
  const { testimonials, placementRecords } = siteData;
  const testimonialsVariant = 'v_docx_record';
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeFilter);

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-amber-300 transition-all">
            <span className="font-medium">Proven Success & Student Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What Clients & Students Say About Our Services
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Quantifiable ROI for enterprise clients and accelerated tech careers for ambitious students.
          </p>
        </div>

        {/* 10-Variant Switcher Bar */}
        

        {/* ========================================================================= */}
        {/* V1: FILTERABLE CARD GRID */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v1_dualFilter' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="flex justify-center space-x-2">
              {['all', 'client', 'student'].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize ${
                    activeFilter === f ? 'bg-brand-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {f === 'all' ? 'All Reviews' : f === 'client' ? 'Enterprise Clients' : 'Placed Students'}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredTestimonials.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic">"{item.content}"</p>
                  </div>
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-6">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.name}</h4>
                      <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">{item.role} • {item.company}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">{item.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V2: EDITORIAL QUOTE SPOTLIGHT */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v2_spotlightQuote' && (
          <div className="p-10 rounded-3xl bg-gradient-to-br from-brand-900 to-slate-950 text-white shadow-2xl space-y-8 animate-fadeIn">
            <Quote className="w-12 h-12 text-brand-400" />
            <p className="text-xl sm:text-2xl font-medium leading-relaxed max-w-3xl italic">"{testimonials[0].content}"</p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center font-bold">RM</div>
              <div><h4 className="text-base font-bold">{testimonials[0].name}</h4><p className="text-xs text-brand-300">{testimonials[0].role}, {testimonials[0].company}</p></div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V3: PLACEMENT METRIC WALL */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v3_statsWall' && (
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-8 animate-fadeIn">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {placementRecords.stats.map((stat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-3xl font-black text-brand-400">{stat.value}</p>
                  <p className="text-xs text-slate-300 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {placementRecords.hiringPartners.map((p, i) => <span key={i} className="px-3 py-1 bg-white/10 rounded-lg text-xs">{p}</span>)}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V4: MULTI-COLUMN MASONRY */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v4_masonry' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {testimonials.concat(testimonials.slice(0, 2)).map((t, idx) => (
              <div key={idx} className="p-6 rounded-3xl glass-card space-y-3">
                <div className="flex text-amber-400">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}</div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">"{t.content}"</p>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-[10px] text-slate-400">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V5: LIVE VIDEO/AUDIO SIM FEED */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v5_interactiveFeed' && (
          <div className="space-y-4 max-w-3xl mx-auto animate-fadeIn">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0"><UserCheck className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950 px-2 rounded">Verified Review</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{t.content}</p>
                  <p className="text-[10px] text-slate-400">{t.role} • {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V6: CORPORATE PARTNER MARQUEE */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v6_partnerLogos' && (
          <div className="p-8 rounded-3xl glass-card text-center space-y-6 animate-fadeIn">
            <h4 className="text-lg font-bold">Trusted by Top Tech Employers & Corporates</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {placementRecords.hiringPartners.map((p, i) => (
                <div key={i} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-brand-600" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V7: FULL-WIDTH REVIEW CAROUSEL */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v7_fullCarousel' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center space-y-6 animate-fadeIn">
            <p className="text-lg sm:text-xl italic max-w-3xl mx-auto">"{testimonials[1].content}"</p>
            <div>
              <h4 className="font-bold text-white text-base">{testimonials[1].name}</h4>
              <p className="text-xs text-brand-400">{testimonials[1].role} - {testimonials[1].company}</p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V8: CLIENT CASE STUDY MINI-CARDS */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v8_miniCaseStudies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {[
              { title: "Supply Chain ERP Modernization", result: "40% Efficiency Increase & Zero Downtime", client: "Apex Global" },
              { title: "HIPAA Compliant Patient Portal", result: "AES-256 Encryption & Faster Booking", client: "MedVanguard Healthcare" }
            ].map((c, i) => (
              <div key={i} className="p-6 rounded-3xl glass-card space-y-3">
                <span className="text-[10px] font-bold text-brand-600 uppercase">Case Study</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{c.title}</h4>
                <p className="text-xs font-bold text-emerald-600">Verified Result: {c.result}</p>
                <p className="text-xs text-slate-500">Client: {c.client}</p>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V9: RECENT PLACEMENTS FEED */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v9_alumniTicker' && (
          <div className="max-w-3xl mx-auto space-y-3 animate-fadeIn">
            {[
              { student: "Sneha Reddy", package: "9.0 LPA", company: "FinTech Hub" },
              { student: "Pooja Verma", package: "8.5 LPA", company: "CloudMatrix" },
              { student: "Rahul Sharma", package: "12.0 LPA", company: "TCS Digital" },
              { student: "Karan Johar", package: "14.5 LPA", company: "Wipro Enterprise" }
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-brand-600" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">{p.student}</h5>
                    <p className="text-[10px] text-slate-400">Placed at {p.company}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-xs">{p.package}</span>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V10: QUANTIFIABLE ROI STATS GRID */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v10_roiMetricsProof' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fadeIn">
            {[
              { val: "50+", lbl: "Delivered Solutions" },
              { val: "94%", lbl: "Placement Record" },
              { val: "40%", lbl: "Average Cost Cut" },
              { val: "24/7", lbl: "Dedicated SLA" }
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-3xl glass-card space-y-2">
                <p className="text-4xl font-black text-brand-600 dark:text-brand-400">{s.val}</p>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{s.lbl}</p>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* DOCX REFERENCE VARIANT: CLIENT REVIEWS & PLACEMENT RECORD */}
        {/* ========================================================================= */}
        {testimonialsVariant === 'v_docx_record' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Split: Client Reviews (Left) + Placement Record (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Client Reviews Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-brand-600" />
                    <span>What Clients Say About Our Services</span>
                  </h3>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">5.0 ★ Rating</span>
                </div>

                <div className="space-y-4">
                  {testimonials.slice(0, 2).map((t, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                      <div className="flex items-center space-x-1 text-amber-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                        "{t.content}"
                      </p>
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</p>
                          <p className="text-[11px] text-slate-400">{t.role}, {t.company}</p>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600 font-bold">Enterprise Client</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Positive Placement Record Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-emerald-600" />
                    <span>A Positive Placement Record</span>
                  </h3>
                  <span className="text-xs font-bold text-brand-600">Top Tier: 16.0 LPA</span>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 text-white border border-brand-500/30 space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-2xl bg-slate-800/80">
                      <p className="text-3xl font-black text-emerald-400">94%</p>
                      <p className="text-[11px] text-slate-300 font-medium mt-1">Verified Placement Rate</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-800/80">
                      <p className="text-3xl font-black text-brand-400">45+</p>
                      <p className="text-[11px] text-slate-300 font-medium mt-1">Hiring Brand Partners</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Recent Placed Alumni Batch</p>
                    <div className="flex flex-wrap gap-2">
                      {['TCS Digital', 'Infosys Edge', 'Wipro Technologies', 'Cognizant', 'Fintech Labs', 'CloudScale'].map((c, i) => (
                        <span key={i} className="px-3 py-1 rounded-xl bg-white/10 text-xs font-medium text-slate-200">
                          ✓ {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
