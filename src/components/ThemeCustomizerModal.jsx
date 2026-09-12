import React from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';
import { 
  Palette, 
  X, 
  Check, 
  Sun, 
  Moon, 
  Sparkles, 
  Dices,
  Layers,
  GraduationCap,
  GitCommit,
  Users,
  MessageSquare,
  Send,
  Sliders,
  CheckCircle2
} from 'lucide-react';

export default function ThemeCustomizerModal() {
  const { 
    colorPreset, 
    setColorPreset, 
    navbarVariant,
    setNavbarVariant,
    dropdownVariant,
    setDropdownVariant,
    heroVariant, 
    setHeroVariant, 
    servicesVariant, 
    setServicesVariant, 
    trainingVariant, 
    setTrainingVariant, 
    roadmapVariant, 
    setRoadmapVariant, 
    teamVariant, 
    setTeamVariant, 
    testimonialsVariant, 
    setTestimonialsVariant, 
    contactVariant, 
    setContactVariant, 
    footerVariant,
    setFooterVariant,
    isCustomizerOpen, 
    setIsCustomizerOpen,
    randomizeAllVariants,
    COLOR_PRESETS,
    NAVBAR_VARIANTS,
    DROPDOWN_VARIANTS,
    HERO_VARIANTS,
    SERVICES_VARIANTS,
    TRAINING_VARIANTS,
    ROADMAP_VARIANTS,
    TEAM_VARIANTS,
    TESTIMONIALS_VARIANTS,
    CONTACT_VARIANTS,
    FOOTER_VARIANTS
  } = useCustomizer();

  const { isDark, toggleTheme } = useTheme();

  const handleRandomize = () => {
    randomizeAllVariants();
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 }
    });
  };

  if (!isCustomizerOpen) {
    return (
      <button
        onClick={() => setIsCustomizerOpen(true)}
        className="fixed top-24 right-4 z-40 px-3.5 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xl backdrop-blur-xl flex items-center space-x-2 text-xs font-bold text-slate-800 dark:text-white hover:scale-105 active:scale-95 transition-all group"
        title="Client Demo Studio"
      >
        <div className="w-5 h-5 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-primary flex items-center justify-center text-white">
          <Palette className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
        </div>
        <span className="hidden sm:inline font-black">Design Studio</span>
        <span className="px-1.5 py-0.5 rounded-full text-[9px] bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300 font-extrabold">
          28 Themes • 90+ Layouts
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Presentation Design Studio
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  28 Color Palettes & 90+ Layout Variations Across All 9 Sections
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCustomizerOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Randomizer Shuffle Button */}
          <button
            onClick={handleRandomize}
            className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Dices className="w-4 h-4" />
            <span>Shuffle 1-Click Unique Layout Combo!</span>
          </button>

          {/* 28 Theme Color Presets Grid */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>28 Theme Palettes (Yukti Logo Presets)</span>
              </label>
              <span className="text-[11px] text-brand-600 dark:text-brand-400 font-bold capitalize truncate max-w-[140px]">
                {colorPreset}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-56 overflow-y-auto p-1 border border-slate-100 dark:border-slate-800/80 rounded-2xl">
              {COLOR_PRESETS.map((preset) => {
                const isSelected = colorPreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setColorPreset(preset.id)}
                    className={`p-2 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50/70 dark:bg-brand-950/60 ring-2 ring-brand-500/20 shadow'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-1">
                        <span className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: preset.color }} />
                        <span className="w-2.5 h-2.5 rounded-full shadow-sm -ml-1.5" style={{ backgroundColor: preset.accent }} />
                      </div>
                      {isSelected && <Check className="w-3 h-3 text-brand-600 dark:text-brand-400" />}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-900 dark:text-white leading-tight truncate">{preset.name}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Light / Dark Mode Toggle */}
          <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {isDark ? <Moon className="w-4 h-4 text-brand-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {isDark ? "Dark Theme Active" : "Light Theme Active"}
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-xl bg-white dark:bg-slate-900 text-xs font-bold shadow-sm hover:scale-105 transition-all"
            >
              Toggle
            </button>
          </div>

          {/* Component Variants Dropdowns */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Component Layout Selector (9 Sections)
              </label>
              <span className="text-[10px] text-slate-400">90+ Combinations</span>
            </div>

            {/* Navbar */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">1. Navbar Header (5 Variants)</span>
              <select
                value={navbarVariant}
                onChange={(e) => setNavbarVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {NAVBAR_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Courses Dropdown Style */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">✨ Courses Dropdown Design (5 Styles)</span>
              <select
                value={dropdownVariant || 'v1_megaSplit'}
                onChange={(e) => setDropdownVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {(DROPDOWN_VARIANTS || []).map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Hero */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">2. Hero Section (10+ Variants)</span>
              <select
                value={heroVariant}
                onChange={(e) => setHeroVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {HERO_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Services */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">3. Services Section (10+ Variants)</span>
              <select
                value={servicesVariant}
                onChange={(e) => setServicesVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {SERVICES_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Training */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">4. Training & Courses (10+ Variants)</span>
              <select
                value={trainingVariant}
                onChange={(e) => setTrainingVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {TRAINING_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Roadmap */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">5. Delivery Roadmap (10+ Variants)</span>
              <select
                value={roadmapVariant}
                onChange={(e) => setRoadmapVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {ROADMAP_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Team */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">6. Leadership & Team (10+ Variants)</span>
              <select
                value={teamVariant}
                onChange={(e) => setTeamVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {TEAM_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Testimonials */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">7. Reviews & Placement (10+ Variants)</span>
              <select
                value={testimonialsVariant}
                onChange={(e) => setTestimonialsVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {TESTIMONIALS_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Contact */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">8. Consultation & Contact (10+ Variants)</span>
              <select
                value={contactVariant}
                onChange={(e) => setContactVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {CONTACT_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>

            {/* Footer */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">9. Footer Portal (5 Variants)</span>
              <select
                value={footerVariant}
                onChange={(e) => setFooterVariant(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium"
              >
                {FOOTER_VARIANTS.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
            </div>
          </div>

        </div>

        {/* Bottom apply */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow transition-all text-center"
          >
            Close & Present
          </button>
        </div>

      </div>
    </div>
  );
}
