import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { getGalleryPhotos, getGalleryVideos } from '../services/contentService';
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

// Gallery Local Image Assets
import collegeCollabImg from '../assets/Gallery/colleg_collab.jpg';
import rkgitCollabImg from '../assets/Gallery/rkjitcoloab.jpg';
import labsCollegeTrainingImg from '../assets/Gallery/labscollegetrainig.jpeg';
import internshipImg1 from '../assets/Gallery/internship.jpeg';
import internshipImg2 from '../assets/Gallery/internship (2).jpeg';
import seminarImg from '../assets/Gallery/IMG_0343.png';
import classroomWorkshopImg from '../assets/Gallery/IMG_1972.jpg';
import systemDesignImg from '../assets/Gallery/IMG_2670.jpeg';
import techDiscussionImg from '../assets/Gallery/IMG20240312113328.jpg';
import labCoding1Img from '../assets/Gallery/IMG_20240913_101218713_HDR.jpeg';
import labCoding2Img from '../assets/Gallery/IMG_20240913_101226441_HDR.jpeg';
import labArchitectureImg from '../assets/Gallery/IMG_20240913_163119530_HDR.jpeg';
import campusOrientationImg from '../assets/Gallery/IMG_20250320_145946832_HDR~3.jpg';
import teamDiscussionImg from '../assets/Gallery/WhatsApp Image 2024-09-27 at 22.58.09.jpeg';
import bootcampImg from '../assets/Gallery/WhatsApp Image 2024-09-27 at 22.58.09 (2).jpeg';

const PHOTO_ITEMS = [
  {
    id: 1,
    title: "College MoU & Institutional Collaboration",
    category: "collab",
    categoryLabel: "College Collaborations",
    caption: "Yukti Software signing institutional MoUs and building innovation labs with premier engineering colleges.",
    image: collegeCollabImg,
    badge: "Institutional MoU"
  },
  {
    id: 2,
    title: "RKGIT College Training & Campus Collaboration",
    category: "collab",
    categoryLabel: "College Collaborations",
    caption: "Technical training and hands-on industrial workshop partnership with engineering students at RKGIT.",
    image: rkgitCollabImg,
    badge: "Campus Collaboration"
  },
  {
    id: 3,
    title: "Hands-On College Laboratory Training Drive",
    category: "collab",
    categoryLabel: "College Collaborations",
    caption: "Live coding, data structures, and full-stack software development sessions in campus computer laboratories.",
    image: labsCollegeTrainingImg,
    badge: "Lab Training"
  },
  {
    id: 4,
    title: "Campus Outreach & Engineering Orientation",
    category: "collab",
    categoryLabel: "College Collaborations",
    caption: "Campus orientation session connecting college engineering students with modern software development standards.",
    image: campusOrientationImg,
    badge: "Campus Outreach"
  },
  {
    id: 5,
    title: "Yukti Software Industrial Internship Batch",
    category: "internship",
    categoryLabel: "Industrial Internships",
    caption: "Interns collaborating on live production software modules, API integrations, and code reviews with senior leads.",
    image: internshipImg1,
    badge: "Live Internship"
  },
  {
    id: 6,
    title: "Internship Project Sprint Review & Mentorship",
    category: "internship",
    categoryLabel: "Industrial Internships",
    caption: "Senior engineering mentors conducting project sprint reviews, code refactoring, and sprint deliverables.",
    image: internshipImg2,
    badge: "Sprint Review"
  },
  {
    id: 7,
    title: "Advanced Practical Classroom Lab Workshop",
    category: "classroom",
    categoryLabel: "Labs & Classrooms",
    caption: "Students coding real-world web applications and backend APIs with dedicated 1-on-1 mentor assistance.",
    image: classroomWorkshopImg,
    badge: "Classroom Lab"
  },
  {
    id: 8,
    title: "Full Stack Lab Coding & Debugging Session",
    category: "classroom",
    categoryLabel: "Labs & Classrooms",
    caption: "1-on-1 practical code execution, live bug resolution, and developer tooling walkthroughs.",
    image: labCoding1Img,
    badge: "Practical Lab"
  },
  {
    id: 9,
    title: "Interactive Lab Practice & Doubt Clearance",
    category: "classroom",
    categoryLabel: "Labs & Classrooms",
    caption: "Dedicated doubt clearing, algorithmic drills, and full-stack project building in our high-tech labs.",
    image: labCoding2Img,
    badge: "Lab Practice"
  },
  {
    id: 10,
    title: "Industrial Software Architecture Training",
    category: "classroom",
    categoryLabel: "Labs & Classrooms",
    caption: "Deep dive into enterprise coding standards, Git version control workflows, and database normalization.",
    image: labArchitectureImg,
    badge: "Architecture Drill"
  },
  {
    id: 11,
    title: "Tech Innovation Seminar & Keynote",
    category: "workshops",
    categoryLabel: "Events & Workshops",
    caption: "Engaging seminar and interactive discussion on emerging software architectures, cloud computing, and AI tools.",
    image: seminarImg,
    badge: "Tech Seminar"
  },
  {
    id: 12,
    title: "Distributed System Design Masterclass",
    category: "workshops",
    categoryLabel: "Events & Workshops",
    caption: "Interactive masterclass exploring distributed backend architectures, microservices, and real-time data flows.",
    image: systemDesignImg,
    badge: "Masterclass"
  },
  {
    id: 13,
    title: "Interactive Technology & Agile Discussion",
    category: "workshops",
    categoryLabel: "Events & Workshops",
    caption: "Students and tech leads brainstorming software solutions, scrum methodologies, and live application logic.",
    image: techDiscussionImg,
    badge: "Agile Workshop"
  },
  {
    id: 14,
    title: "Collaborative Developer Pod Brainstorming",
    category: "workshops",
    categoryLabel: "Events & Workshops",
    caption: "Developer cohorts brainstorming architectural trade-offs, state management, and UI component libraries.",
    image: teamDiscussionImg,
    badge: "Team Collab"
  },
  {
    id: 15,
    title: "Intensive Developer Training Bootcamp",
    category: "workshops",
    categoryLabel: "Events & Workshops",
    caption: "Intensive coding challenges, hands-on debugging sprints, and modern framework implementation.",
    image: bootcampImg,
    badge: "Developer Bootcamp"
  }
];

const VIDEO_ITEMS = [
  {
    id: "vid-1",
    title: "From Non-CS Background to Full Stack Software Engineer",
    student: "Rahul Sharma",
    role: "Full Stack Developer at Infosys",
    duration: "4:25 min",
    category: "testimonials",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
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
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
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
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
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
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    description: "Sneha explains how 5 rigorous mock interview rounds prepared her for real corporate technical screens.",
    badge: "Placement Journey"
  }
];

export default function GalleryPage({ onOpenConsultation }) {
  const [photos, setPhotos] = useState(PHOTO_ITEMS);
  const [videos, setVideos] = useState(VIDEO_ITEMS);
  const [isLoadingDynamic, setIsLoadingDynamic] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');
  const [photoFilter, setPhotoFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.title = "Photo & Video Gallery | Campus, Labs & Events - Yukti Software Greater Noida";
    let isMounted = true;
    async function loadDynamicMedia() {
      try {
        setIsLoadingDynamic(true);
        const [fetchedPhotos, fetchedVideos] = await Promise.all([
          getGalleryPhotos(PHOTO_ITEMS),
          getGalleryVideos(VIDEO_ITEMS)
        ]);
        if (isMounted) {
          if (fetchedPhotos && fetchedPhotos.length > 0) setPhotos(fetchedPhotos);
          if (fetchedVideos && fetchedVideos.length > 0) setVideos(fetchedVideos);
        }
      } catch (err) {
        console.warn('Could not fetch dynamic gallery items:', err);
      } finally {
        if (isMounted) setIsLoadingDynamic(false);
      }
    }
    loadDynamicMedia();
    return () => { isMounted = false; };
  }, []);

  // Lock body scroll and handle Escape key on active modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
        setSelectedVideo(null);
      }
    };

    if (selectedPhoto || selectedVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, selectedVideo]);

  const filteredPhotos = photoFilter === 'all' 
    ? photos 
    : photos.filter(p => p.category === photoFilter);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
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
                <span>Photo Gallery ({photos.length})</span>
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
                <span>Video Stories ({videos.length})</span>
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
                { id: 'collab', label: 'College Collaborations' },
                { id: 'internship', label: 'Industrial Internships' },
                { id: 'workshops', label: 'Events & Workshops' }
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
                  {/* Photo Visual Container */}
                  <div className="h-52 relative flex flex-col justify-between p-5 text-white overflow-hidden bg-slate-900">
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/30 group-hover:from-slate-950/80 transition-colors" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase bg-slate-900/70 backdrop-blur-md text-white border border-white/20">
                        {photo.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="relative z-10 space-y-1">
                      <span className="text-[11px] font-semibold text-brand-300 drop-shadow-sm">{photo.categoryLabel}</span>
                      <h3 className="text-base font-bold text-white leading-snug drop-shadow-md">{photo.title}</h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {photo.caption}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-brand-600 dark:text-brand-400">
                      <span>Click to enlarge photo</span>
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
            {videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="relative h-52 rounded-2xl bg-slate-900 text-white p-5 flex flex-col justify-between overflow-hidden shadow-inner">
                  <img 
                    src={vid.thumbnail} 
                    alt={vid.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-black/40 group-hover:from-slate-950/70 transition-colors" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-brand-600 text-white shadow-md">
                      {vid.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-200 bg-slate-950/70 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/20">
                      ⏱ {vid.duration}
                    </span>
                  </div>

                  {/* Play Button Icon */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-600/90 hover:bg-brand-600 text-white flex items-center justify-center shadow-2xl border-2 border-white/40 group-hover:scale-110 active:scale-95 transition-all">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-xs text-brand-300 font-bold drop-shadow-sm">{vid.student} • {vid.role}</p>
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

      {/* Responsive Lightbox Modal for Photos (Portal to body for flawless overlay) */}
      {selectedPhoto && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 p-2 sm:p-2.5 rounded-full text-white bg-slate-950/80 backdrop-blur-md hover:bg-slate-800 border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Container - Responsive Object Contain */}
            <div className="relative flex-1 min-h-[180px] max-h-[58vh] sm:max-h-[64vh] bg-black flex items-center justify-center overflow-hidden p-2">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title}
                className="max-h-[54vh] sm:max-h-[60vh] w-auto max-w-full object-contain select-none rounded-lg"
              />
              <div className="absolute bottom-3 left-3 sm:left-4 sm:bottom-4 flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase bg-brand-600/90 backdrop-blur-md text-white shadow-md">
                  {selectedPhoto.badge}
                </span>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-900/80 backdrop-blur-md text-slate-200 border border-white/10">
                  📍 Greater Noida Campus
                </span>
              </div>
            </div>

            {/* Photo Details / Caption Footer */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 space-y-1 sm:space-y-1.5 shrink-0">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-brand-400 uppercase tracking-wider">{selectedPhoto.categoryLabel}</span>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-white leading-snug">{selectedPhoto.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[14vh] overflow-y-auto pr-1">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Responsive Video Modal Player Simulator (Portal to body for flawless overlay) */}
      {selectedVideo && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 p-2 sm:p-2.5 rounded-full text-white bg-slate-950/80 backdrop-blur-md hover:bg-slate-800 border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container (16:9 Aspect Ratio) */}
            <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              <img 
                src={selectedVideo.thumbnail} 
                alt={selectedVideo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/80" />

              <div className="relative z-10 space-y-3 flex flex-col items-center px-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-2xl border-2 border-white/40 animate-pulse cursor-pointer hover:scale-110 active:scale-95 transition-transform">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-white ml-1" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-slate-200 font-bold max-w-lg leading-snug">
                    {selectedVideo.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-brand-300 font-semibold">{selectedVideo.student} • {selectedVideo.role}</p>
                </div>
                <span className="text-[9px] sm:text-[10px] px-3 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono">
                  1080p Full HD • Duration: {selectedVideo.duration}
                </span>
              </div>
            </div>

            {/* Video Details Footer */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 space-y-1 sm:space-y-1.5 shrink-0">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-extrabold uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  {selectedVideo.badge}
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-400">⏱ {selectedVideo.duration}</p>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-snug">{selectedVideo.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[14vh] overflow-y-auto pr-1">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
