import React, { useState } from 'react';
import { 
  Sliders, Users, BookOpen, Layers, MessageSquare, 
  Settings, Plus, Trash2, Edit3, CheckCircle2, 
  ArrowLeft, Sparkles, Shield, RefreshCw, Star, 
  Mail, Phone, ExternalLink, Download, AlertCircle, 
  Check, X, Eye, Laptop, Code, Award 
} from 'lucide-react';
import { SiteDataService } from '../services/dataService';
import { useSiteData } from '../hooks/useSiteData';

export default function AdminDashboard({ onExitAdmin, onSwitchStudio }) {
  const { data, inquiries } = useSiteData();
  const [activeTab, setActiveTab] = useState('versions'); // versions, team, courses, services, reviews, inbox, settings
  const [toastMsg, setToastMsg] = useState('');

  // Modal States
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [editingTeamMember, setEditingTeamMember] = useState(null);
  const [teamForm, setTeamForm] = useState({
    name: '', role: '', exp: '', bio: '', specialty: '', linkedin: 'https://linkedin.com'
  });

  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [courseForm, setCourseForm] = useState({
    title: '', duration: '', avgSalary: '', hiringRate: '95%', badge: 'High Placement', highlight: '', features: ''
  });

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    author: '', role: '', rating: 5, content: '', verified: true
  });

  const [placementModalOpen, setPlacementModalOpen] = useState(false);
  const [placementForm, setPlacementForm] = useState({
    name: '', company: '', package: '', course: ''
  });

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // --- Version / Theme Handlers ---
  const handleVariantChange = (key, val) => {
    SiteDataService.updateVariants({ [key]: val });
    showToast(`Updated ${key} to ${val}`);
  };

  // --- Team Handlers ---
  const handleSaveTeam = (e) => {
    e.preventDefault();
    if (editingTeamMember) {
      SiteDataService.updateTeamMember(editingTeamMember.id, teamForm);
      showToast('Team member updated successfully!');
    } else {
      SiteDataService.addTeamMember(teamForm);
      showToast('New team member added to live site!');
    }
    setTeamModalOpen(false);
    setEditingTeamMember(null);
    setTeamForm({ name: '', role: '', exp: '', bio: '', specialty: '', linkedin: 'https://linkedin.com' });
  };

  const handleEditTeam = (m) => {
    setEditingTeamMember(m);
    setTeamForm({ name: m.name, role: m.role, exp: m.exp, bio: m.bio, specialty: m.specialty, linkedin: m.linkedin || 'https://linkedin.com' });
    setTeamModalOpen(true);
  };

  const handleDeleteTeam = (id) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      SiteDataService.deleteTeamMember(id);
      showToast('Team member removed from live website.');
    }
  };

  // --- Course Handlers ---
  const handleSaveCourse = (e) => {
    e.preventDefault();
    const featuresArr = typeof courseForm.features === 'string' 
      ? courseForm.features.split('\n').filter(f => f.trim().length > 0)
      : courseForm.features;

    const payload = {
      ...courseForm,
      features: featuresArr.length > 0 ? featuresArr : ['Comprehensive Modules', 'Live Project Capstone', '100% Placement Support']
    };

    if (editingCourse) {
      SiteDataService.updateCourse(editingCourse.id, payload);
      showToast('Course updated successfully!');
    } else {
      SiteDataService.addCourse(payload);
      showToast('New course added to curriculum catalog!');
    }
    setCourseModalOpen(false);
    setEditingCourse(null);
    setCourseForm({ title: '', duration: '', avgSalary: '', hiringRate: '95%', badge: 'High Placement', highlight: '', features: '' });
  };

  const handleEditCourse = (c) => {
    setEditingCourse(c);
    setCourseForm({
      title: c.title,
      duration: c.duration,
      avgSalary: c.avgSalary,
      hiringRate: c.hiringRate,
      badge: c.badge || 'Popular',
      highlight: c.highlight || '',
      features: Array.isArray(c.features) ? c.features.join('\n') : c.features
    });
    setCourseModalOpen(true);
  };

  const handleDeleteCourse = (id) => {
    if (confirm('Are you sure you want to delete this course?')) {
      SiteDataService.deleteCourse(id);
      showToast('Course removed.');
    }
  };

  // --- Reviews & Placements Handlers ---
  const handleSaveReview = (e) => {
    e.preventDefault();
    SiteDataService.addReview(reviewForm);
    showToast('New Google Review added!');
    setReviewModalOpen(false);
    setReviewForm({ author: '', role: '', rating: 5, content: '', verified: true });
  };

  const handleSavePlacement = (e) => {
    e.preventDefault();
    SiteDataService.addPlacement(placementForm);
    showToast('New alumni placement record added!');
    setPlacementModalOpen(false);
    setPlacementForm({ name: '', company: '', package: '', course: '' });
  };

  const handleResetData = () => {
    if (confirm('Reset all dynamic data back to factory defaults?')) {
      SiteDataService.resetToDefaults();
      showToast('All data reset to defaults.');
    }
  };

  const variants = data.variants || {};

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="fixed top-4 right-4 z-50 bg-brand-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Admin Navigation Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-40">
        <div className="flex items-center space-x-4">
          <img 
            src="/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg" 
            alt="Yukti Software - Enterprise Software Development & IT Training Institute" 
            className="h-9 w-auto max-w-[150px] object-contain"
            onError={(e) => { e.currentTarget.src = '/yukti-logo.svg'; }}
          />
          <div className="h-6 w-px bg-slate-700 hidden sm:block"></div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-white tracking-wide">YUKTI CONTROL CENTER</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                LIVE CMS v2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Dynamic website data & version orchestrator</p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onExitAdmin}
            className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Back to Live Website</span>
          </button>
        </div>
      </header>

      {/* Main Admin Body: Sidebar + Content Panel */}
      <div className="flex-grow flex flex-col md:flex-row">
        
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-64 bg-slate-900/60 border-r border-slate-800 p-4 space-y-1 flex-shrink-0">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-2">
            CMS Modules
          </div>

          <button
            onClick={() => setActiveTab('versions')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
              activeTab === 'versions' ? 'bg-brand-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Version Matrix & Theme</span>
          </button>

          <button
            onClick={() => setActiveTab('team')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
              activeTab === 'team' ? 'bg-brand-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Meet The Team ({data.team?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
              activeTab === 'courses' ? 'bg-brand-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Courses & Syllabi ({data.courses?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
              activeTab === 'services' ? 'bg-brand-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Software Services ({data.services?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews_placements')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
              activeTab === 'reviews_placements' ? 'bg-brand-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Reviews & Placements</span>
          </button>

          <button
            onClick={() => setActiveTab('inbox')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
              activeTab === 'inbox' ? 'bg-brand-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4" />
              <span>Leads & Inquiries</span>
            </div>
            {inquiries?.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-red-500 text-white font-bold">
                {inquiries.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
              activeTab === 'settings' ? 'bg-brand-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>System Data & Reset</span>
          </button>
        </aside>

        {/* Content View Area */}
        <main className="flex-grow p-6 md:p-8 max-w-6xl">
          
          {/* TAB 1: COMPONENT VERSION & THEME MATRIX */}
          {activeTab === 'versions' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-xl font-black text-white">Component Version Conversion & Theme</h2>
                  <p className="text-xs text-slate-400">Current layout configurations active on the main website.</p>
                </div>
                <span className="text-xs px-3 py-1 bg-brand-500/20 text-brand-400 border border-brand-500/30 rounded-full font-bold">
                  Theme: {variants.themePreset || 'yuktiEmerald (Yukti Vivid Mint)'}
                </span>
              </div>

              {/* Version Controls Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {/* Theme Preset */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Primary Color Preset</span>
                  <select 
                    value={variants.themePreset || 'yuktiEmerald'}
                    onChange={(e) => handleVariantChange('themePreset', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="yuktiEmerald">★ Yukti Vivid Mint (#1bb77d)</option>
                    <option value="yuktiOfficial">★ Yukti Official Brand (Navy to Mint)</option>
                    <option value="yuktiDeepNavy">★ Yukti Royal Navy (#054f98)</option>
                    <option value="indigo">Cyber Indigo (#4f46e5)</option>
                    <option value="cyan">Oceanic Cyan (#0891b2)</option>
                  </select>
                </div>

                {/* Navbar Variant */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Navbar Version</span>
                  <select 
                    value={variants.navbarVariant || 'v5_gradientBanner'}
                    onChange={(e) => handleVariantChange('navbarVariant', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="v5_gradientBanner">V5: Gradient Header & Fast Bar (Current)</option>
                    <option value="v1_rextonEnterprise">V1: Rexton Enterprise Portal</option>
                    <option value="v2_modernFloating">V2: Modern Floating Island Pill</option>
                  </select>
                </div>

                {/* Dropdown Variant */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Course Dropdown Version</span>
                  <select 
                    value={variants.dropdownVariant || 'v1_megaSplit'}
                    onChange={(e) => handleVariantChange('dropdownVariant', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="v1_megaSplit">V1: Stripe 2-Col Mega Menu + Spotlight (Current)</option>
                    <option value="v2_bentoCards">V2: Supabase Bento Cards</option>
                    <option value="v3_linearLuxury">V3: Linear Minimalist List</option>
                  </select>
                </div>

                {/* Hero Variant */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Hero Section Version</span>
                  <select 
                    value={variants.heroVariant || 'v1_neosaas'}
                    onChange={(e) => handleVariantChange('heroVariant', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="v1_neosaas">V1: Neo-SaaS Live Console (Current)</option>
                    <option value="v2_enterprise">V2: Centered Enterprise Hero</option>
                    <option value="v4_bentoGrid">V4: Futuristic Bento Grid</option>
                  </select>
                </div>

                {/* Services Variant */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Services Section Version</span>
                  <select 
                    value={variants.servicesVariant || 'v1_tabs'}
                    onChange={(e) => handleVariantChange('servicesVariant', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="v1_tabs">V1: Interactive Deep Tabs (Current)</option>
                    <option value="v2_3dGrid">V2: 3D Glassmorphism Grid</option>
                    <option value="v6_bentoMosaic">V6: Asymmetric Bento Mosaic</option>
                  </select>
                </div>

                {/* Training Variant */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Training Courses Version</span>
                  <select 
                    value={variants.trainingVariant || 'v1_bento'}
                    onChange={(e) => handleVariantChange('trainingVariant', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="v1_bento">V1: Bento Course Grid + 6 Assurances (Current)</option>
                    <option value="v2_pathway">V2: Career Pathway Stepper</option>
                    <option value="v7_courseCatalog">V7: Course Catalog Showcase</option>
                  </select>
                </div>

                {/* Roadmap Variant */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Roadmap Version</span>
                  <select 
                    value={variants.roadmapVariant || 'v1_timeline'}
                    onChange={(e) => handleVariantChange('roadmapVariant', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="v1_timeline">V1: 7-Step Progress Timeline (Current)</option>
                    <option value="v4_kanban">V4: Agile Sprint Board</option>
                    <option value="v5_verticalDossier">V5: Vertical Milestone Dossier</option>
                  </select>
                </div>

                {/* Team Variant */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Team Version</span>
                  <select 
                    value={variants.teamVariant || 'v2_bentoLeadership'}
                    onChange={(e) => handleVariantChange('teamVariant', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="v2_bentoLeadership">V2: Executive Bento Spotlight (Current)</option>
                    <option value="v1_glassCards">V1: Modern Glass Badges</option>
                    <option value="v6_editorialPortraits">V6: Editorial Portrait Cards</option>
                  </select>
                </div>

                {/* Footer Variant */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Footer Version</span>
                  <select 
                    value={variants.footerVariant || 'v1_rextonEnterprise'}
                    onChange={(e) => handleVariantChange('footerVariant', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-semibold outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="v1_rextonEnterprise">V1: 4-Column Enterprise Portal</option>
                    <option value="v5_minimalCentered">V5: Apple Minimalist & Certifications</option>
                  </select>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: TEAM MANAGEMENT CMS */}
          {activeTab === 'team' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-xl font-black text-white">Team & Leadership Directory</h2>
                  <p className="text-xs text-slate-400">Add, edit, or remove mentors and executives appearing on the website.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingTeamMember(null);
                    setTeamForm({ name: '', role: '', exp: '', bio: '', specialty: '', linkedin: 'https://linkedin.com' });
                    setTeamModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Team Member</span>
                </button>
              </div>

              {/* Team Cards List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.team?.map((m) => (
                  <div key={m.id || m.name} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base text-white">{m.name}</h3>
                        <span className="text-[11px] font-semibold text-brand-400 bg-brand-950 px-2 py-0.5 rounded border border-brand-800/60">
                          {m.exp}
                        </span>
                      </div>
                      <p className="text-xs text-emerald-400 font-semibold mt-0.5">{m.role}</p>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{m.bio}</p>
                      <div className="mt-3">
                        <span className="text-[11px] px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md font-medium">
                          {m.specialty}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline flex items-center gap-1">
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditTeam(m)}
                          className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                          aria-label="Edit Member"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteTeam(m.id)}
                          className="p-1.5 text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-900/60 rounded-lg transition-colors"
                          aria-label="Delete Member"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: COURSES & CURRICULA CMS */}
          {activeTab === 'courses' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-xl font-black text-white">Course Catalog & Syllabi</h2>
                  <p className="text-xs text-slate-400">Manage courses, salary projections, badges, and curriculum modules.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingCourse(null);
                    setCourseForm({ title: '', duration: '', avgSalary: '', hiringRate: '95%', badge: 'High Placement', highlight: '', features: '' });
                    setCourseModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Course</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.courses?.map((c) => (
                  <div key={c.id || c.title} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-500/20 text-brand-400 border border-brand-500/30">
                          {c.badge || 'Featured'}
                        </span>
                        <span className="text-xs text-slate-400">{c.duration}</span>
                      </div>
                      <h3 className="font-bold text-base text-white mt-2">{c.title}</h3>
                      <div className="flex items-center gap-4 my-2 text-xs">
                        <span className="text-emerald-400 font-bold">CTC: {c.avgSalary}</span>
                        <span className="text-brand-400 font-bold">Placement: {c.hiringRate}</span>
                      </div>
                      <div className="space-y-1 mt-2">
                        {c.features?.slice(0, 3).map((f, i) => (
                          <div key={i} className="text-xs text-slate-400 flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleEditCourse(c)}
                        className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCourse(c.id)}
                        className="p-1.5 text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-900/60 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SERVICES & ARCHITECTURE */}
          {activeTab === 'services' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-xl font-black text-white">Enterprise Software Services</h2>
                  <p className="text-xs text-slate-400">Manage engineering capabilities, deliverables, and SLAs.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.services?.map((s) => (
                  <div key={s.id || s.title} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <h3 className="font-bold text-base text-white">{s.title}</h3>
                    <p className="text-xs text-slate-400">{s.shortDesc}</p>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-semibold">
                      SLA: {s.sla}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {s.techStack?.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: REVIEWS & PLACEMENTS */}
          {activeTab === 'reviews_placements' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Reviews Sub-section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white">Google Verified Reviews ({data.googleReviews?.length || 0})</h3>
                    <p className="text-xs text-slate-400">Customer and student testimonials with star ratings.</p>
                  </div>
                  <button
                    onClick={() => setReviewModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Review</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.googleReviews?.map((r) => (
                    <div key={r.id || r.author} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex justify-between space-y-2">
                      <div>
                        <div className="flex text-amber-400">
                          {[...Array(r.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-xs text-slate-300 italic mt-1">"{r.content}"</p>
                        <span className="text-xs font-bold text-white block mt-2">{r.author} • {r.role}</span>
                      </div>
                      <button
                        onClick={() => SiteDataService.deleteReview(r.id)}
                        className="text-red-400 hover:text-red-300 p-1 self-start"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placements Sub-section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white">Alumni Placement Offers ({data.placements?.length || 0})</h3>
                    <p className="text-xs text-slate-400">Recent hiring track record packages.</p>
                  </div>
                  <button
                    onClick={() => setPlacementModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Placement</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {data.placements?.map((p) => (
                    <div key={p.id || p.name} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center relative group">
                      <button
                        onClick={() => SiteDataService.deletePlacement(p.id)}
                        className="absolute top-1 right-1 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                      <div className="text-xs font-black text-emerald-400">{p.package}</div>
                      <div className="text-xs font-bold text-white truncate">{p.name}</div>
                      <div className="text-[10px] text-brand-400 truncate">{p.company}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 6: LEADS & INQUIRIES INBOX */}
          {activeTab === 'inbox' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-xl font-black text-white">Consultation Leads & Inquiries Inbox</h2>
                  <p className="text-xs text-slate-400">Real-time incoming discovery bookings and quotation requests.</p>
                </div>
                <span className="text-xs font-bold text-slate-400">Total Leads: {inquiries?.length || 0}</span>
              </div>

              {inquiries?.length === 0 ? (
                <div className="p-12 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 text-xs">
                  No inquiries received yet. Inquiries submitted via the homepage form will appear here live.
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <h4 className="font-bold text-sm text-white">{inq.name || 'Anonymous Inquiry'}</h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            {inq.status || 'New Lead'}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                          <span>📞 {inq.phone}</span>
                          <span>✉️ {inq.email}</span>
                          <span className="text-brand-400 font-semibold">📌 {inq.inquiryType || inq.track}</span>
                        </div>
                        {inq.message && (
                          <p className="text-xs text-slate-300 italic pt-1 max-w-xl">"{inq.message}"</p>
                        )}
                        <span className="text-[10px] text-slate-500 block">
                          Submitted: {new Date(inq.timestamp).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <select
                          value={inq.status || 'New Lead'}
                          onChange={(e) => SiteDataService.updateInquiryStatus(inq.id, e.target.value)}
                          className="px-2 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                        >
                          <option>New Lead</option>
                          <option>Contacted</option>
                          <option>Enrolled</option>
                          <option>Closed</option>
                        </select>
                        <button
                          onClick={() => SiteDataService.deleteInquiry(inq.id)}
                          className="p-1.5 text-red-400 hover:text-red-300 bg-red-950/40 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 7: SYSTEM SETTINGS & RESET */}
          {activeTab === 'settings' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="pb-4 border-b border-slate-800">
                <h2 className="text-xl font-black text-white">System Data & Factory Reset</h2>
                <p className="text-xs text-slate-400">Export data backup or restore default presets.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <h3 className="font-bold text-sm text-white">Export Site Configuration JSON</h3>
                  <p className="text-xs text-slate-400">Download a full snapshot of your current courses, team, and layout versions.</p>
                  <button
                    onClick={() => {
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `yukti_site_data_${Date.now()}.json`;
                      a.click();
                      showToast('Configuration exported!');
                    }}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/40 space-y-3">
                  <h3 className="font-bold text-sm text-red-400">Restore Factory Defaults</h3>
                  <p className="text-xs text-slate-400">Reset all custom additions, team members, and courses back to the original seed data.</p>
                  <button
                    onClick={handleResetData}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Reset All Site Data</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* MODAL: ADD / EDIT TEAM MEMBER */}
      {teamModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-base text-white">{editingTeamMember ? 'Edit Team Member' : 'Add New Team Member'}</h3>
              <button onClick={() => setTeamModalOpen(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleSaveTeam} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Er. Vivek Sharma"
                  value={teamForm.name}
                  onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Corporate Role</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Principal Cloud & DevOps Architect"
                  value={teamForm.role}
                  onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Experience</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. 12+ Years Industry"
                    value={teamForm.exp}
                    onChange={(e) => setTeamForm({ ...teamForm, exp: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Specialty Tag</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Kubernetes, AWS, SRE"
                    value={teamForm.specialty}
                    onChange={(e) => setTeamForm({ ...teamForm, specialty: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Bio Description</label>
                <textarea 
                  rows="3"
                  required
                  placeholder="Short background summary..."
                  value={teamForm.bio}
                  onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>
              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold rounded-xl shadow">
                  Save to Live Website
                </button>
                <button type="button" onClick={() => setTeamModalOpen(false)} className="px-4 py-2.5 bg-slate-800 text-slate-300 font-semibold rounded-xl">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT COURSE */}
      {courseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-base text-white">{editingCourse ? 'Edit Course' : 'Add New Course'}</h3>
              <button onClick={() => setCourseModalOpen(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleSaveCourse} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Course Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Next-Gen DevOps & Cloud Architecture"
                  value={courseForm.title}
                  onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Duration</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. 4 Months (16 Weeks)"
                    value={courseForm.duration}
                    onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Target Package CTC</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. 10 - 24 LPA"
                    value={courseForm.avgSalary}
                    onChange={(e) => setCourseForm({ ...courseForm, avgSalary: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Syllabus Modules (One per line)</label>
                <textarea 
                  rows="3"
                  placeholder="Module 1: Docker & Containerization&#10;Module 2: Kubernetes Orchestration&#10;Module 3: AWS Terraform CI/CD"
                  value={courseForm.features}
                  onChange={(e) => setCourseForm({ ...courseForm, features: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>
              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold rounded-xl shadow">
                  Save to Course Catalog
                </button>
                <button type="button" onClick={() => setCourseModalOpen(false)} className="px-4 py-2.5 bg-slate-800 text-slate-300 font-semibold rounded-xl">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD REVIEW */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-base text-white">Add Google Verified Review</h3>
              <button onClick={() => setReviewModalOpen(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleSaveReview} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Author Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rohan Mehra"
                  value={reviewForm.author}
                  onChange={(e) => setReviewForm({ ...reviewForm, author: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Designation & Company</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. SRE Engineer at Google"
                  value={reviewForm.role}
                  onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Review Content</label>
                <textarea 
                  rows="3"
                  required
                  placeholder="Write the testimonial content..."
                  value={reviewForm.content}
                  onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none"
                ></textarea>
              </div>
              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2.5 bg-brand-500 text-slate-950 font-bold rounded-xl">Save Review</button>
                <button type="button" onClick={() => setReviewModalOpen(false)} className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-xl">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD PLACEMENT */}
      {placementModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-sm w-full p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-base text-white">Add Alumni Placement</h3>
              <button onClick={() => setPlacementModalOpen(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleSavePlacement} className="space-y-3 text-xs">
              <input 
                type="text" required placeholder="Student Name (e.g. Tanya Sen)"
                value={placementForm.name} onChange={(e) => setPlacementForm({ ...placementForm, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none"
              />
              <input 
                type="text" required placeholder="Hiring Company (e.g. Microsoft)"
                value={placementForm.company} onChange={(e) => setPlacementForm({ ...placementForm, company: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none"
              />
              <input 
                type="text" required placeholder="Package CTC (e.g. 24.5 LPA)"
                value={placementForm.package} onChange={(e) => setPlacementForm({ ...placementForm, package: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none"
              />
              <input 
                type="text" required placeholder="Course (e.g. DSA & System Design)"
                value={placementForm.course} onChange={(e) => setPlacementForm({ ...placementForm, course: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none"
              />
              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl">Save Offer</button>
                <button type="button" onClick={() => setPlacementModalOpen(false)} className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-xl">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
