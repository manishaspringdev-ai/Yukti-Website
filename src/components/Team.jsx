import React, { useState, useRef, useEffect } from 'react';
import { siteData } from '../data';
import { Sparkles, Mail, Award, ShieldCheck, ChevronRight, Quote, UserCheck } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';
import { getTeamMembers } from '../services/contentService';

export default function Team() {
  const { teamSection } = siteData;
  const teamVariant = 'v2_bentoLeadership';
  const [members, setMembers] = useState(teamSection.members || []);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    async function loadTeam() {
      try {
        const dynamicMembers = await getTeamMembers(teamSection.members);
        if (isMounted && dynamicMembers && dynamicMembers.length > 0) {
          setMembers(dynamicMembers);
        }
      } catch (err) {
        console.warn('Could not fetch dynamic team members:', err);
      }
    }
    loadTeam();
    return () => { isMounted = false; };
  }, [teamSection.members]);

  const currentMember = members[selectedMemberIndex] || members[0] || {};

  const handleSelectMember = (idx) => {
    setSelectedMemberIndex(idx);
    if (spotlightRef.current) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const rect = spotlightRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: scrollTop + rect.top - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="team" className="pt-2 sm:pt-4 pb-6 sm:pb-8 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            {teamSection.title}
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* V2: BENTO LEADERSHIP SPOTLIGHT */}
        {/* ========================================================================= */}
        {teamVariant === 'v2_bentoLeadership' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn items-start">
            
            {/* Dynamic Spotlight Card (Active Member) */}
            <div ref={spotlightRef} className="md:col-span-6 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col space-y-4 relative overflow-hidden group card-hover-effect md:sticky md:top-24">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-brand-500/30 flex-shrink-0 shadow-md group-hover:ring-brand-500/60 transition-all duration-300">
                    {currentMember.image ? (
                      <img 
                        src={currentMember.image} 
                        alt={currentMember.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-tr ${currentMember.avatarBg || 'from-slate-700 to-slate-900'} flex items-center justify-center text-white font-black text-2xl shadow-inner`}>
                        {currentMember.initials || (currentMember.name ? currentMember.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase() : 'YS')}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold border border-brand-200/60 dark:border-brand-800/60">
                        {currentMember.role}
                      </span>
                      {currentMember.education && (
                        <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200/60 dark:border-emerald-800/60">
                          🎓 {currentMember.education}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {currentMember.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {currentMember.experience}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {currentMember.bio}
                </p>

                {/* Member Leadership / Philosophy Quote */}
                {currentMember.quote && (
                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3.5 border border-slate-100 dark:border-slate-800 flex items-start space-x-2.5">
                    <Quote className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium italic leading-snug">
                      "{currentMember.quote}"
                    </p>
                  </div>
                )}

                {/* 3-Column Credential Highlights Strip to eliminate empty whitespace */}
                {currentMember.stats && (
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {currentMember.stats.map((stat, i) => (
                      <div key={i} className="px-2.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 text-center">
                        <p className="text-xs sm:text-sm font-extrabold text-brand-600 dark:text-brand-400 leading-tight">
                          {stat.value}
                        </p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5 truncate">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialties Badges */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {currentMember.specialties.map((s, i) => (
                  <span key={i} className="text-[11px] font-semibold bg-brand-50/70 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 px-2.5 py-1 rounded-lg border border-brand-200/50 dark:border-brand-800/50">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Team Members List (Click to switch spotlight) */}
            <div className="md:col-span-6 grid grid-cols-1 gap-3 md:max-h-[495px] max-h-[500px] overflow-y-auto pr-1 sm:pr-2 scrollbar-thin">
              {members.map((m, idx) => {
                const isSelected = selectedMemberIndex === idx;
                return (
                  <div 
                    key={idx} 
                    onClick={() => handleSelectMember(idx)}
                    className={`p-4 rounded-3xl border transition-all duration-300 flex items-center space-x-4 shadow-sm cursor-pointer group ${
                      isSelected 
                        ? 'bg-brand-50/40 dark:bg-brand-950/30 border-brand-500 dark:border-brand-500 ring-2 ring-brand-500/20 shadow-md' 
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700'
                    }`}
                  >
                    <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden ring-2 flex-shrink-0 shadow transition-all ${
                      isSelected ? 'ring-brand-500' : 'ring-slate-200 dark:ring-slate-700 group-hover:ring-brand-400'
                    }`}>
                      {m.image ? (
                        <img 
                          src={m.image} 
                          alt={m.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-tr ${m.avatarBg || 'from-slate-700 to-slate-900'} flex items-center justify-center text-white font-bold text-base shadow-inner`}>
                          {m.initials || (m.name ? m.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase() : 'YS')}
                        </div>
                      )}
                    </div>
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? 'text-brand-600 dark:text-brand-400' : 'text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400'
                        }`}>
                          {m.name}
                        </h4>
                        {isSelected ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-brand-600 text-white shadow-xs">
                            <span>View Profile</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="text-[11px] text-brand-600 dark:text-brand-400 font-bold opacity-75 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-0.5">
                            <span>View Profile</span>
                            <ChevronRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-brand-600 dark:text-brand-400 font-bold">
                        {m.role}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {m.experience}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* V3: 3D FLIP CARDS */}
        {/* ========================================================================= */}
        {teamVariant === 'v3_flipCards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {members.map((member, idx) => {
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
            {members.map((m, idx) => (
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
              {members.map((m, idx) => (
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
            {members.map((m, i) => (
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
            {members.map((m, i) => (
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
            {members.map((m, i) => (
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
            {members.map((m, i) => (
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
              {members.map((member, idx) => (
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
