import React, { useState } from 'react';
import { 
  Sparkles, 
  Image as ImageIcon, 
  Video, 
  Play, 
  X, 
  Award, 
  Users, 
  GraduationCap, 
  Calendar, 
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const PHOTO_ITEMS = [
  {
    id: 1,
    title: "Full Stack Practical Lab Session",
    category: "classroom",
    categoryLabel: "Classroom & Labs",
    caption: "Students building live full stack microservices with 1-on-1 mentor guidance.",
    gradient: "from-blue-600 to-cyan-600",
    badge: "Greater Noida Center"
  },
  {
    id: 2,
    title: "Placement Celebration Batch 2026",
    category: "placements",
    categoryLabel: "Placement Drives",
    caption: "Congratulating our 38 placed candidates who received offer letters from top MNCs.",
    gradient: "from-emerald-600 to-teal-600",
    badge: "38 Placements"
  },
  {
    id: 3,
    title: "AI & GenAI 24-Hour Hackathon",
    category: "workshops",
    categoryLabel: "Hackathons & Events",
    caption: "Winning team demonstrating their autonomous LLM-powered enterprise agents.",
    gradient: "from-purple-600 to-indigo-600",
    badge: "Hackathon Winner"
  },
  {
    id: 4,
    title: "Java Microservices Code Review",
    category: "classroom",
    categoryLabel: "Classroom & Labs",
    caption: "Senior architect conducting line-by-line code audits and Docker deployment drills.",
    gradient: "from-amber-600 to-orange-600",
    badge: "Live Code Audit"
  },
  {
    id: 5,
    title: "Google & Microsoft Alumni Mentorship",
    category: "workshops",
    categoryLabel: "Hackathons & Events",
    caption: "Guest lecture on System Design and cracking Tier-1 product company interviews.",
    gradient: "from-rose-600 to-pink-600",
    badge: "FAANG Masterclass"
  },
  {
    id: 6,
    title: "Corporate Campus Recruitment Drive",
    category: "placements",
    categoryLabel: "Placement Drives",
    caption: "Direct on-campus interviews with hiring managers from leading fintech partners.",
    gradient: "from-cyan-600 to-blue-600",
    badge: "Day 1 Recruiters"
  }
];

const VIDEO_ITEMS = [
  {
    id: "vid-1",
    title: "From Non-CS Background to ₹14.5 LPA Software Engineer",
    student: "Rahul Sharma",
    role: "Full Stack Developer at Infosys",
    duration: "4:25 min",
    category: "testimonials",
    description: "Rahul shares how Yukti Software's hands-on Java Full Stack mentorship transformed his career from scratch.",
    badge: "Student Success"
  },
  {
    id: "vid-2",
    title: "How to Build an AI Agent with Python & LangChain",
    student: "Er. Amit Verma",
    role: "Lead AI Specialist Mentor",
    duration: "18:40 min",
    category: "masterclasses",
    description: "Complete walkthrough of building and deploying production-ready AI pipelines with Vector databases.",
    badge: "Masterclass"
  },
  {
    id: "vid-3",
    title: "Cracking FAANG DSA: Dynamic Programming Masterclass",
    student: "Priya Patel",
    role: "DSA & Algorithmic Coach",
    duration: "12:15 min",
    category: "masterclasses",
    description: "Solving complex LeetCode hard graph and memoization problems with optimal time complexity.",
    badge: "DSA Drill"
  },
  {
    id: "vid-4",
    title: "Placed at TCS Digital: My Yukti Experience & Mock Rounds",
    student: "Sneha Gupta",
    role: "Cloud Engineer",
    duration: "3:50 min",
    category: "testimonials",
    description: "Sneha explains how 5 rigorous mock interview rounds prepared her for real corporate technical screens.",
    badge: "Placement Journey"
  }
];

export default function GalleryPage({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('photos');
  const [photoFilter, setPhotoFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredPhotos = photoFilter === 'all' 
    ? PHOTO_ITEMS 
    : PHOTO_ITEMS.filter(p => p.category === photoFilter);

  return (
    <div className="py-10 sm:py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-500 mr-1.5" />
            <span className="font-medium">Life at Yukti Software • Greater Noida Campus</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Photo & Video Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore our state-of-the-art computer labs, hackathons, placement celebrations, and inspiring student career journeys.
          </p>

          {/* Tab Switcher: Photos vs Videos */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'photos'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-md scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Photo Gallery ({PHOTO_ITEMS.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'videos'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-md scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>Video Stories ({VIDEO_ITEMS.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PHOTO GALLERY SECTION */}
        {/* ========================================================================= */}
        {activeTab === 'photos' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'classroom', label: 'Labs & Classrooms' },
                { id: 'placements', label: 'Placement Celebrations' },
                { id: 'workshops', label: 'Hackathons & Events' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setPhotoFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    photoFilter === cat.id
                      ? 'bg-brand-600 text-white shadow-md scale-105'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Decorative Banner Visual with Gradient & Brand Aura */}
                  <div className={`h-48 bg-gradient-to-br ${photo.gradient} p-6 relative flex flex-col justify-between text-white overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase bg-white/20 backdrop-blur-md">
                        {photo.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="relative z-10 space-y-1">
                      <span className="text-[11px] font-medium text-white/80">{photo.categoryLabel}</span>
                      <h3 className="text-lg font-bold text-white leading-snug">{photo.title}</h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {photo.caption}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-brand-600 dark:text-brand-400">
                      <span>Click to view preview</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIDEO GALLERY SECTION */}
        {/* ========================================================================= */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {VIDEO_ITEMS.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="relative h-48 rounded-2xl bg-slate-900 text-white p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                  {/* Decorative mesh background */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-500/30 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-brand-500 text-white shadow">
                      {vid.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      ⏱ {vid.duration}
                    </span>
                  </div>

                  {/* Play Button Icon */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="w-14 h-14 rounded-full bg-white text-brand-700 flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-transform">
                      <Play className="w-6 h-6 fill-brand-700 ml-1" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-xs text-brand-300 font-bold">{vid.student} • {vid.role}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-primary text-white text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black">Want to Experience Our Lab in Person?</h3>
          <p className="text-sm text-slate-100 max-w-xl mx-auto">
            Visit our Greater Noida center for a free live counseling session and 1-day complimentary lab access.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-white text-brand-700 font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Book Free Campus Visit & Counseling
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Photos */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`h-64 rounded-2xl bg-gradient-to-br ${selectedPhoto.gradient} flex items-center justify-center p-6 text-white text-center shadow-lg relative overflow-hidden`}>
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/20 backdrop-blur-sm">
                  {selectedPhoto.badge}
                </span>
                <h3 className="text-2xl font-black">{selectedPhoto.title}</h3>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">{selectedPhoto.categoryLabel}</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Player Simulator */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 rounded-2xl bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center shadow-inner relative space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-xl animate-pulse">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <p className="text-xs text-slate-400">Streaming: <span className="text-white font-bold">{selectedVideo.title}</span></p>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">1080p HD • {selectedVideo.duration}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedVideo.title}</h3>
              <p className="text-xs text-brand-600 dark:text-brand-400 font-bold">{selectedVideo.student} • {selectedVideo.role}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
