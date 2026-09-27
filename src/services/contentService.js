import { db } from '../firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

/**
 * Utility to safely fetch documents from a Firestore collection
 * @param {string} collectionName 
 * @param {string} [sortField]
 * @param {'asc' | 'desc'} [sortDirection='desc']
 * @returns {Promise<Array<{ id: string, [key: string]: any }>>}
 */
async function fetchCollectionDocs(collectionName, sortField, sortDirection = 'desc') {
  if (!db) {
    return [];
  }

  try {
    let q;
    if (sortField) {
      try {
        q = query(collection(db, collectionName), orderBy(sortField, sortDirection), limit(100));
      } catch {
        q = collection(db, collectionName);
      }
    } else {
      q = collection(db, collectionName);
    }

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      return [];
    }

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.warn(`[ContentService] Firestore fetch skipped/failed for "${collectionName}":`, error.message || error);
    return [];
  }
}

/**
 * =========================================================================
 * 1. GALLERY PHOTOS
 * Merges Firestore `gallery_photos` (or `gallery` photo docs) with base items
 * =========================================================================
 */
export async function getGalleryPhotos(defaultItems = []) {
  try {
    // Attempt to fetch from 'gallery_photos' or 'gallery'
    let fsPhotos = await fetchCollectionDocs('gallery_photos', 'createdAt', 'desc');
    
    if (fsPhotos.length === 0) {
      const allGallery = await fetchCollectionDocs('gallery', 'createdAt', 'desc');
      fsPhotos = allGallery.filter(item => item.type === 'photo' || item.image || item.imageUrl);
    }

    if (!fsPhotos || fsPhotos.length === 0) {
      return defaultItems;
    }

    const formattedFsPhotos = fsPhotos.map((doc, idx) => ({
      id: doc.id || `fs-photo-${idx}`,
      title: doc.title || doc.name || "Yukti Campus Experience",
      category: (doc.category || 'classroom').toLowerCase(),
      categoryLabel: doc.categoryLabel || doc.categoryName || (
        doc.category === 'collab' ? 'College Collaborations' : 
        doc.category === 'internship' ? 'Industrial Internships' : 
        doc.category === 'workshops' ? 'Events & Workshops' : 
        'Labs & Classrooms'
      ),
      caption: doc.caption || doc.description || doc.desc || "",
      image: doc.image || doc.imageUrl || doc.img || doc.photoUrl || "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      badge: doc.badge || doc.tag || "Yukti Campus",
      isDynamic: true
    }));

    // Deduplicate against defaultItems by id or title
    const existingIds = new Set(formattedFsPhotos.map(p => String(p.id)));
    const existingTitles = new Set(formattedFsPhotos.map(p => p.title.toLowerCase().trim()));

    const filteredDefaults = defaultItems.filter(item => 
      !existingIds.has(String(item.id)) && !existingTitles.has((item.title || '').toLowerCase().trim())
    );

    return [...formattedFsPhotos, ...filteredDefaults];
  } catch (err) {
    console.warn('[ContentService] getGalleryPhotos error:', err);
    return defaultItems;
  }
}

/**
 * =========================================================================
 * 2. GALLERY VIDEOS
 * Merges Firestore `gallery_videos` (or `gallery` video docs) with base items
 * =========================================================================
 */
export async function getGalleryVideos(defaultItems = []) {
  try {
    let fsVideos = await fetchCollectionDocs('gallery_videos', 'createdAt', 'desc');
    
    if (fsVideos.length === 0) {
      const allGallery = await fetchCollectionDocs('gallery', 'createdAt', 'desc');
      fsVideos = allGallery.filter(item => item.type === 'video' || item.videoUrl || item.youtubeUrl);
    }

    if (!fsVideos || fsVideos.length === 0) {
      return defaultItems;
    }

    const formattedFsVideos = fsVideos.map((doc, idx) => ({
      id: doc.id || `fs-video-${idx}`,
      title: doc.title || doc.name || "Yukti Student Testimonial",
      student: doc.student || doc.speaker || doc.author || doc.mentor || "Yukti Candidate",
      role: doc.role || doc.designation || "Software Engineer",
      duration: doc.duration || "5:00 min",
      category: (doc.category || 'testimonials').toLowerCase(),
      thumbnail: doc.thumbnail || doc.image || doc.imageUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      videoUrl: doc.videoUrl || doc.youtubeUrl || doc.url || "",
      description: doc.description || doc.caption || doc.desc || "",
      badge: doc.badge || doc.tag || "Student Story",
      isDynamic: true
    }));

    const existingIds = new Set(formattedFsVideos.map(v => String(v.id)));
    const existingTitles = new Set(formattedFsVideos.map(v => v.title.toLowerCase().trim()));

    const filteredDefaults = defaultItems.filter(item => 
      !existingIds.has(String(item.id)) && !existingTitles.has((item.title || '').toLowerCase().trim())
    );

    return [...formattedFsVideos, ...filteredDefaults];
  } catch (err) {
    console.warn('[ContentService] getGalleryVideos error:', err);
    return defaultItems;
  }
}

/**
 * =========================================================================
 * 3. MEET THE TEAM
 * Merges Firestore `team_members` or `team` with base team data
 * =========================================================================
 */
export async function getTeamMembers(defaultMembers = []) {
  try {
    let fsTeam = await fetchCollectionDocs('team_members', 'order', 'asc');
    
    if (fsTeam.length === 0) {
      fsTeam = await fetchCollectionDocs('team');
    }

    if (!fsTeam || fsTeam.length === 0) {
      return defaultMembers;
    }

    const formattedFsTeam = fsTeam.map((doc, idx) => {
      const name = doc.name || doc.fullName || "Faculty Member";
      const initials = doc.initials || (name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : "YS");

      let stats = doc.stats;
      if (!stats || !Array.isArray(stats)) {
        stats = [
          { label: "Experience", value: doc.experience || "6+ Yrs" },
          { label: "Specialty", value: doc.role || "Architecture" },
          { label: "Mentorship", value: "100% Focus" }
        ];
      }

      let specialties = doc.specialties;
      if (!specialties) {
        specialties = doc.skills ? (Array.isArray(doc.skills) ? doc.skills : doc.skills.split(',').map(s => s.trim())) : ["Software Development", "Industry Mentorship"];
      }

      const defaultMatch = defaultMembers.find(dm => (dm.name || '').toLowerCase().trim() === name.toLowerCase().trim());

      return {
        id: doc.id || `fs-team-${idx}`,
        name: name,
        role: doc.role || doc.designation || defaultMatch?.role || "Senior Technical Mentor",
        education: doc.education || doc.qualification || defaultMatch?.education || "Senior Tech Specialist",
        experience: doc.experience || defaultMatch?.experience || "5+ Years Enterprise IT",
        image: doc.image || doc.photoUrl || doc.imageUrl || doc.avatar || (defaultMatch ? defaultMatch.image : null),
        bio: doc.bio || doc.description || doc.about || defaultMatch?.bio || "",
        quote: doc.quote || defaultMatch?.quote || "",
        avatarBg: doc.avatarBg || defaultMatch?.avatarBg || "from-blue-600 to-indigo-600",
        initials: initials,
        stats: stats,
        specialties: specialties,
        isDynamic: true
      };
    });

    const existingNames = new Set(formattedFsTeam.map(m => m.name.toLowerCase().trim()));

    // Merge: dynamic members first or append
    const filteredDefaults = defaultMembers.filter(m => !existingNames.has((m.name || '').toLowerCase().trim()));

    return [...formattedFsTeam, ...filteredDefaults];
  } catch (err) {
    console.warn('[ContentService] getTeamMembers error:', err);
    return defaultMembers;
  }
}

/**
 * =========================================================================
 * 4. INTERNSHIP ROLES & POSTS (Careers & Internship Pages)
 * Merges Firestore `internship_roles` / `internships` / `careers`
 * =========================================================================
 */
export async function getInternshipRoles(defaultRoles = []) {
  try {
    let fsRoles = await fetchCollectionDocs('internship_roles', 'createdAt', 'desc');
    
    if (fsRoles.length === 0) {
      fsRoles = await fetchCollectionDocs('internships');
    }
    if (fsRoles.length === 0) {
      fsRoles = await fetchCollectionDocs('careers');
    }

    if (!fsRoles || fsRoles.length === 0) {
      return defaultRoles;
    }

    const formattedFsRoles = fsRoles.map((doc, idx) => {
      let keyFocus = doc.keyFocus || doc.responsibilities || doc.highlights;
      if (!Array.isArray(keyFocus)) {
        keyFocus = typeof keyFocus === 'string' ? keyFocus.split('\n').filter(Boolean) : [
          "Hands-on production feature development under senior mentors.",
          "Code reviews, bug troubleshooting, and CI/CD deployment drills.",
          "Real-world enterprise system design and API integrations."
        ];
      }

      let technologies = doc.technologies || doc.skills || doc.stack;
      if (!Array.isArray(technologies)) {
        technologies = typeof technologies === 'string' ? technologies.split(',').map(s => s.trim()) : ["Full Stack", "Git", "REST APIs"];
      }

      return {
        id: doc.id || `fs-intern-${idx}`,
        title: doc.title || doc.role || "Software Intern Track",
        tagline: doc.tagline || doc.summary || "Build scalable modern industry software and gain verified hands-on experience.",
        department: doc.department || doc.domain || "Engineering",
        badge: doc.badge || doc.type || "Live Opening",
        keyFocus: keyFocus,
        technologies: technologies,
        description: doc.description || doc.desc || "",
        isDynamic: true
      };
    });

    const existingTitles = new Set(formattedFsRoles.map(r => r.title.toLowerCase().trim()));
    const filteredDefaults = defaultRoles.filter(r => !existingTitles.has((r.title || '').toLowerCase().trim()));

    return [...formattedFsRoles, ...filteredDefaults];
  } catch (err) {
    console.warn('[ContentService] getInternshipRoles error:', err);
    return defaultRoles;
  }
}

/**
 * =========================================================================
 * 5. INTERNSHIP DOMAINS (Internship Tab Selection)
 * Merges Firestore `internship_domains`
 * =========================================================================
 */
export async function getInternshipDomains(defaultDomains = []) {
  try {
    const fsDomains = await fetchCollectionDocs('internship_domains', 'order', 'asc');
    
    if (!fsDomains || fsDomains.length === 0) {
      return defaultDomains;
    }

    const formattedFsDomains = fsDomains.map((doc, idx) => ({
      id: doc.id || doc.slug || `domain-${idx}`,
      name: doc.name || doc.title || "Software Engineering Track",
      openings: doc.openings || doc.seats || "8 Seats",
      isDynamic: true
    }));

    const existingNames = new Set(formattedFsDomains.map(d => d.name.toLowerCase().trim()));
    const filteredDefaults = defaultDomains.filter(d => !existingNames.has((d.name || '').toLowerCase().trim()));

    return [...formattedFsDomains, ...filteredDefaults];
  } catch (err) {
    console.warn('[ContentService] getInternshipDomains error:', err);
    return defaultDomains;
  }
}

/**
 * =========================================================================
 * 6. DYNAMIC COURSES (Courses Addition / Firestore Courses)
 * Merges Firestore `courses` or `custom_courses` with master courses
 * =========================================================================
 */
export async function getCourses(defaultCourses = []) {
  try {
    let fsCourses = await fetchCollectionDocs('courses', 'createdAt', 'desc');
    
    if (fsCourses.length === 0) {
      fsCourses = await fetchCollectionDocs('custom_courses');
    }

    if (!fsCourses || fsCourses.length === 0) {
      return defaultCourses;
    }

    const formattedFsCourses = fsCourses.map((doc, idx) => {
      const key = doc.key || doc.slug || doc.docxKey || doc.id || `custom-course-${idx}`;
      
      let highlights = doc.highlights;
      if (!Array.isArray(highlights)) {
        highlights = typeof highlights === 'string' ? highlights.split(',').map(s => s.trim()) : [
          "100% Practical Labs",
          "Live Industry Capstone",
          "1-on-1 Mentor Guidance",
          "Placement & Mock Interviews"
        ];
      }

      let topics = doc.topics;
      if (!Array.isArray(topics)) {
        topics = typeof topics === 'string' ? topics.split(',').map(s => s.trim()) : highlights;
      }

      return {
        id: doc.id || `course-${key}`,
        key: key,
        docxKey: key,
        title: doc.title || doc.name || "Professional Tech Course",
        category: (doc.category || 'programming').toLowerCase(),
        badge: doc.badge || doc.tag || "Accredited Certification",
        tag: doc.tag || doc.badge || "Accredited Certification",
        duration: doc.duration || "4 - 6 Months",
        color: doc.color || "from-blue-600 to-indigo-600",
        description: doc.description || doc.desc || "Master industry concepts with hands-on labs and 1-on-1 mentorship.",
        modulesCount: doc.modulesCount || (Array.isArray(doc.modules) ? doc.modules.length : 12),
        highlights: highlights,
        topics: topics,
        isDynamic: true
      };
    });

    // Deduplicate against default courses by key or title
    const existingKeys = new Set(formattedFsCourses.map(c => (c.key || '').toLowerCase().trim()));
    const existingTitles = new Set(formattedFsCourses.map(c => (c.title || '').toLowerCase().trim()));

    const filteredDefaults = defaultCourses.filter(c => 
      !existingKeys.has((c.key || c.docxKey || '').toLowerCase().trim()) &&
      !existingTitles.has((c.title || '').toLowerCase().trim())
    );

    return [...formattedFsCourses, ...filteredDefaults];
  } catch (err) {
    console.warn('[ContentService] getCourses error:', err);
    return defaultCourses;
  }
}
