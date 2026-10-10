import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { MASTER_COURSES } from '../data/coursesData';
import { getCourses } from '../services/contentService';
import { Code2, Globe, Cpu, Terminal, Layers, Database, Binary, Server, Zap, TrendingUp } from 'lucide-react';

const CoursesContext = createContext({
  courses: MASTER_COURSES,
  courseCount: MASTER_COURSES.length,
  loading: false,
  addCourse: async () => {},
  deleteCourse: async () => {},
  refreshCourses: async () => {}
});

const getCategoryIcon = (category = '') => {
  const cat = category.toLowerCase();
  if (cat.includes('ai') || cat.includes('machine')) return Cpu;
  if (cat.includes('data') && !cat.includes('database')) return TrendingUp;
  if (cat.includes('database') || cat.includes('sql') || cat.includes('dbms')) return Database;
  if (cat.includes('fullstack') || cat.includes('mern') || cat.includes('web')) return Layers;
  if (cat.includes('dsa') || cat.includes('algorithm')) return Binary;
  if (cat.includes('python')) return Terminal;
  return Code2;
};

export function CoursesProvider({ children }) {
  const [courses, setCourses] = useState(MASTER_COURSES);
  const [loading, setLoading] = useState(true);

  // Helper to merge Firestore docs with MASTER_COURSES
  const formatAndMergeCourses = (fsDocs) => {
    if (!fsDocs || fsDocs.length === 0) {
      return MASTER_COURSES;
    }

    const formattedFs = fsDocs.map((docItem, idx) => {
      const data = typeof docItem.data === 'function' ? docItem.data() : docItem;
      const docId = docItem.id || `fs-course-${idx}`;
      const rawKey = data.key || data.slug || data.docxKey || docId;
      const cleanKey = rawKey.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
      const category = (data.category || 'programming').toLowerCase();

      let highlights = data.highlights;
      if (!Array.isArray(highlights)) {
        highlights = typeof highlights === 'string' 
          ? highlights.split(',').map(s => s.trim()).filter(Boolean)
          : [
              "100% Practical Lab Training",
              "Live Enterprise Capstone",
              "Senior Industry Mentorship",
              "Placement & Interview Support"
            ];
      }

      return {
        id: `course-${cleanKey}`,
        key: cleanKey,
        docxKey: cleanKey,
        title: data.title || data.name || "Professional Certification Track",
        category: category,
        badge: data.badge || data.tag || "Accredited Certification",
        tag: data.tag || data.badge || "Accredited Certification",
        duration: data.duration || "4 - 6 Months",
        icon: getCategoryIcon(category),
        color: data.color || "from-blue-600 to-indigo-600",
        description: data.description || data.desc || "Master industry concepts with hands-on labs, real enterprise projects, and 1-on-1 mentorship.",
        modulesCount: data.modulesCount || (Array.isArray(data.curriculum) ? data.curriculum.length : (Array.isArray(data.modules) ? data.modules.length : 12)),
        highlights: highlights,
        topics: data.topics || highlights,
        isDynamic: true,
        firestoreId: docId,
        headline: data.headline,
        fullDescription: data.fullDescription,
        syllabusHeading: data.syllabusHeading,
        curriculum: data.curriculum || data.modules,
        modules: data.modules || data.curriculum,
        differentApproach: data.differentApproach,
        careerBenefitsHeading: data.careerBenefitsHeading,
        careerBenefits: data.careerBenefits,
        whoCanEnroll: data.whoCanEnroll,
        thingsToKnow: data.thingsToKnow,
        showCareerOpportunitiesSection: data.showCareerOpportunitiesSection,
        careerOpportunitiesHeading: data.careerOpportunitiesHeading,
        careerOpportunities: data.careerOpportunities,
        careerRolesHeading: data.careerRolesHeading,
        careerRolesTable: data.careerRolesTable,
        whyChooseYukti: data.whyChooseYukti || data.whyChooseUs,
        whyChooseUs: data.whyChooseUs || data.whyChooseYukti,
        faqs: data.faqs
      };
    });

    // Deduplicate against MASTER_COURSES by key or title
    const existingKeys = new Set(formattedFs.map(c => (c.key || '').toLowerCase().trim()));
    const existingTitles = new Set(formattedFs.map(c => (c.title || '').toLowerCase().trim()));

    const filteredMasters = MASTER_COURSES.filter(m => 
      !existingKeys.has((m.key || m.docxKey || '').toLowerCase().trim()) &&
      !existingTitles.has((m.title || '').toLowerCase().trim())
    );

    return [...formattedFs, ...filteredMasters];
  };

  useEffect(() => {
    let unsubscribe = null;

    if (db) {
      try {
        const q = query(collection(db, 'courses'));
        unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const merged = formatAndMergeCourses(docs);
            setCourses(merged);
            setLoading(false);
          },
          async (error) => {
            console.warn('[CoursesContext] onSnapshot listener warning, falling back to one-time fetch:', error.message || error);
            try {
              const fetched = await getCourses(MASTER_COURSES);
              setCourses(fetched);
            } catch (fetchErr) {
              setCourses(MASTER_COURSES);
            }
            setLoading(false);
          }
        );
      } catch (err) {
        console.warn('[CoursesContext] Setup error, using master courses fallback:', err);
        setCourses(MASTER_COURSES);
        setLoading(false);
      }
    } else {
      setCourses(MASTER_COURSES);
      setLoading(false);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const addCourse = async (newCourseData) => {
    if (!db) {
      // Local addition fallback if Firebase not configured
      const localCourse = {
        id: `course-${newCourseData.key || Date.now()}`,
        key: newCourseData.key || `custom-${Date.now()}`,
        docxKey: newCourseData.key || `custom-${Date.now()}`,
        title: newCourseData.title,
        category: newCourseData.category || 'programming',
        badge: newCourseData.badge || 'New Course',
        duration: newCourseData.duration || '3 - 4 Months',
        icon: getCategoryIcon(newCourseData.category),
        color: newCourseData.color || 'from-blue-600 to-indigo-600',
        description: newCourseData.description || 'Comprehensive training program.',
        modulesCount: newCourseData.modulesCount || 12,
        highlights: Array.isArray(newCourseData.highlights) ? newCourseData.highlights : (newCourseData.highlights || '').split(',').map(s => s.trim()).filter(Boolean),
        isDynamic: true
      };
      setCourses(prev => [localCourse, ...prev]);
      return { id: localCourse.id, ...localCourse };
    }

    try {
      const cleanKey = (newCourseData.key || newCourseData.title || '')
        .toLowerCase()
        .replace(/[^a-z0-9_-]/g, '-');

      const docRef = await addDoc(collection(db, 'courses'), {
        ...newCourseData,
        key: cleanKey,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      return { id: docRef.id, ...newCourseData, key: cleanKey };
    } catch (err) {
      console.error('[CoursesContext] Failed to add course to Firestore:', err);
      throw err;
    }
  };

  const deleteCourse = async (courseId) => {
    if (db && courseId) {
      try {
        await deleteDoc(doc(db, 'courses', courseId));
      } catch (err) {
        console.error('[CoursesContext] Failed to delete course from Firestore:', err);
      }
    }
    setCourses(prev => prev.filter(c => c.firestoreId !== courseId && c.id !== courseId));
  };

  const refreshCourses = async () => {
    try {
      const refreshed = await getCourses(MASTER_COURSES);
      setCourses(refreshed);
    } catch (err) {
      console.warn('[CoursesContext] Manual refresh error:', err);
    }
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        courseCount: courses.length,
        loading,
        addCourse,
        deleteCourse,
        refreshCourses
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CoursesContext);
  if (!context) {
    return {
      courses: MASTER_COURSES,
      courseCount: MASTER_COURSES.length,
      loading: false,
      addCourse: async () => {},
      deleteCourse: async () => {},
      refreshCourses: async () => {}
    };
  }
  return context;
}
