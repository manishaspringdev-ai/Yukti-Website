import React, { useState } from 'react';
import { siteData } from '../data';
import { Sparkles, Mail, Award, ShieldCheck, ChevronRight, Quote, UserCheck } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export default function Team() {
  const { teamSection } = siteData;
  const teamVariant = 'v2_bentoLeadership';
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section id="team" className="py-12 sm:py-16 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:border-brand-300 transition-all">
            <span className="font-medium">{teamSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {teamSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {teamSection.subtitle}
          </p>
        </div>

        {/* 10-Variant Switcher Bar */}
        

        {/* ========================================================================= */}
        {/* V1: MODERN GLASS BADGES */}
        {/* ========================================================================= */}
        {teamVariant === 'v1_glassCards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn">
            {teamSection.members.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between group">
                <div className="space-y-5">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${member.avatarBg} text-white flex items-center justify-center font-extrabold text-2xl shadow-lg group-hover:scale-105 transition-transform`}>
                      {member.initials}
                    </div>
                    <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white dark:bg-brand-500 shadow">Verified</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{member.name}</h3>
                    <p className="text-xs font-bold text-brand-600 dark:text-brand-400 mt-0.5">{member.role}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{member.experience}</p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{member.bio}</p>
                </div>
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-slate-400">
                  <span className="text-[11px] font-medium text-slate-500">Leadership</span>
                  <div className="flex items-center space-x-2">
                    <a href={siteData.brand.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors" aria-label="LinkedIn"><LinkedInIcon className="w-4 h-4" /></a>
                    <a href={`mailto:${siteData.brand.email}`} className="hover:text-brand-600 transition-colors" aria-label="Email"><Mail className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V2: BENTO LEADERSHIP SPOTLIGHT */}
        {/* ========================================================================= */}
        {teamVariant === 'v2_bentoLeadership' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
            <div className="md:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-brand-900 via-slate-900 to-slate-950 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold">Founder & Visionary</span>
                <h3 className="text-3xl font-black">{teamSection.members[0].name}</h3>
                <p className="text-xs font-bold text-accent-primary">{teamSection.members[0].role} • {teamSection.members[0].experience}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{teamSection.members[0].bio}</p>
              </div>
              <div className="pt-4 flex flex-wrap gap-2 border-t border-white/10">
                {teamSection.members[0].specialties.map((s, i) => <span key={i} className="text-xs bg-white/10 px-2.5 py-1 rounded-lg">{s}</span>)}
              </div>
            </div>
            <div className="md:col-span-6 grid grid-cols-1 gap-4">
              {teamSection.members.slice(1).map((m, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">{m.initials}</div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{m.name}</h4>
                    <p className="text-xs text-brand-600 dark:text-brand-400 font-bold">{m.role} • {m.experience}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V3: 3D FLIP CARDS */}
        {/* ========================================================================= */}
        {teamVariant === 'v3_flipCards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {teamSection.members.map((member, idx) => {
              const isFlipped = flippedIndex === idx;
              return (
                <div key={idx} onClick={() => setFlippedIndex(isFlipped ? null : idx)} className="cursor-pointer p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all space-y-4 min-h-[300px] flex flex-col justify-between">
                  {!isFlipped ? (
                    <div className="space-y-4 text-center">
                      <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr ${member.avatarBg} text-white flex items-center justify-center font-black text-2xl shadow-lg`}>{member.initials}</div>
                      <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">{member.name}</h4>
                      <p className="text-xs font-bold text-brand-600 dark:text-brand-400">{member.role}</p>
                      <p className="text-[10px] text-brand-600 font-bold pt-4">Click to flip & view full bio →</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">Executive Bio</span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{member.bio}</p>
                      <p className="text-[10px] text-slate-400 pt-2 text-center">Click to flip back</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V4: CORPORATE LIST VIEW */}
        {/* ========================================================================= */}
        {teamVariant === 'v4_compactList' && (
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 shadow-xl animate-fadeIn">
            {teamSection.members.map((m, idx) => (
              <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0">{m.initials}</div>
                  <div><h4 className="text-base font-bold text-slate-900 dark:text-white">{m.name}</h4><p className="text-xs text-brand-600 dark:text-brand-400 font-medium">{m.role} • {m.experience}</p></div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md">{m.bio}</p>
                <a href={`mailto:${siteData.brand.email}`} className="px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-xs font-bold self-start md:self-auto">Contact Leader</a>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V5: CAROUSEL DECK */}
        {/* ========================================================================= */}
        {teamVariant === 'v5_carouselDeck' && (
          <div className="overflow-x-auto pb-4 scrollbar-none animate-fadeIn">
            <div className="flex space-x-6 min-w-[900px]">
              {teamSection.members.map((m, idx) => (
                <div key={idx} className="w-72 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-md space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white font-bold text-xl flex items-center justify-center">{m.initials}</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{m.name}</h4>
                  <p className="text-xs font-bold text-brand-600 dark:text-brand-400">{m.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V6: EDITORIAL PORTRAITS */}
        {/* ========================================================================= */}
        {teamVariant === 'v6_editorialPortraits' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            {teamSection.members.map((m, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-brand-600 text-white font-black text-2xl flex items-center justify-center">{m.initials}</div>
                  <div><h4 className="text-xl font-black text-slate-900 dark:text-white">{m.name}</h4><p className="text-xs font-bold text-brand-600">{m.role}</p></div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">"{m.bio}"</p>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V7: ENGINEERING DOMAIN LEADS */}
        {/* ========================================================================= */}
        {teamVariant === 'v7_domainLead' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-fadeIn">
            {teamSection.members.map((m, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono text-emerald-400 font-bold">DOMAIN LEAD 0{i + 1}</span>
                <h4 className="text-lg font-bold">{m.name}</h4>
                <p className="text-xs text-brand-400 font-semibold">{m.role}</p>
                <p className="text-xs text-slate-400">{m.experience}</p>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V8: TECH BADGES CARDS */}
        {/* ========================================================================= */}
        {teamVariant === 'v8_techBadges' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {teamSection.members.map((m, i) => (
              <div key={i} className="p-6 rounded-3xl glass-card space-y-4">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{m.name}</h4>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300 font-bold">{m.role}</span>
                <div className="flex flex-wrap gap-1">
                  {m.specialties.map((s, idx) => <span key={idx} className="text-[10px] p-1 bg-slate-100 dark:bg-slate-800 rounded">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V9: SOCIAL DIRECT PODS */}
        {/* ========================================================================= */}
        {teamVariant === 'v9_socialDirect' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fadeIn">
            {teamSection.members.map((m, i) => (
              <div key={i} className="p-6 rounded-3xl glass-card text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center">{m.initials}</div>
                <h4 className="font-bold text-slate-900 dark:text-white">{m.name}</h4>
                <p className="text-xs text-brand-600">{m.role}</p>
                <a href={`mailto:${siteData.brand.email}`} className="block w-full py-2 bg-brand-50 dark:bg-brand-950 text-brand-600 text-xs font-bold rounded-xl">Email Directly</a>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* V10: EXECUTIVE PRINCIPLE QUOTES */}
        {/* ========================================================================= */}
        {teamVariant === 'v10_quoteCards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            {teamSection.members.slice(0, 2).map((m, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
                <Quote className="w-10 h-10 text-brand-400" />
                <p className="text-base text-slate-200 leading-relaxed italic">"{m.bio}"</p>
                <div className="pt-2 border-t border-white/10">
                  <h4 className="font-bold text-white">{m.name}</h4>
                  <p className="text-xs text-slate-400">{m.role}, Yukti Software</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* DOCX REFERENCE VARIANT: ITRANSITION LEADERSHIP EXPERTS DOSSIER */}
        {/* ========================================================================= */}
        {teamVariant === 'v_docx_itransition' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamSection.members.map((member, idx) => (
                <div 
                  key={idx} 
                  className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-brand-500/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${member.avatarBg} text-white flex items-center justify-center font-black text-2xl shadow-xl group-hover:scale-105 transition-transform`}>
                        {member.initials}
                      </div>
                      <span className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-600 text-white shadow">
                        Leadership
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {member.name}
                      </h4>
                      <p className="text-xs font-bold text-brand-600 dark:text-brand-400 mt-0.5">
                        {member.role}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        {member.experience}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <a 
                      href={`mailto:${siteData.brand.email}`} 
                      className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Direct Connect</span>
                    </a>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">
                      Verified Leader
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-900 to-slate-900 text-white border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Decades of Building Tailored Software Solutions</h4>
                <p className="text-xs text-slate-300">Our engineering leads directly supervise every project milestone and student batch.</p>
              </div>
              <a href={`mailto:${siteData.brand.email}`} className="px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs shrink-0 shadow">
                Email Engineering Leads
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
