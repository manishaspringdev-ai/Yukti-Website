import { getCourses } from '../services/contentService';

export const DEFAULT_SERVICES_LIST = [
  { id: 'web-dev', name: 'Full Stack Web Development (React, Node, Cloud)', category: 'Web & Cloud' },
  { id: 'mobile-dev', name: 'Mobile App Development (iOS & Android)', category: 'Mobile Apps' },
  { id: 'db-security', name: 'Database & Data Security Architecture', category: 'Databases' },
  { id: 'cloud-devops', name: 'Cloud Integration & Migration (AWS, Azure & GCP)', category: 'Cloud & Infra' },
  { id: 'cicd-automation', name: 'CI/CD & DevOps Automation', category: 'Cloud & Infra' },
  { id: 'ai-solutions', name: 'AI Solutions & LLM Agents Integration', category: 'AI & Intelligence' },
  { id: 'enterprise-custom', name: 'Custom Enterprise Software & ERP Solutions', category: 'Enterprise' },
  { id: 'tech-consultation', name: 'IT Architecture & Tech Advisory', category: 'Advisory' }
];

export const DEFAULT_COURSES_LIST = [
  // Full Stack & Web Engineering
  { id: 'course-software-development', title: 'Software Development & Testing Course', category: 'Programming & Dev', badge: 'Accredited' },
  { id: 'course-ai-fullstack', title: 'AI Full Stack Web Development', category: 'AI & Next-Gen', badge: 'Trending' },
  { id: 'course-java-fullstack', title: 'Java Full Stack Development Course', category: 'Full Stack', badge: 'Enterprise' },
  { id: 'course-mern-stack', title: 'MERN Stack Web Development', category: 'Full Stack', badge: 'High Demand' },
  { id: 'course-python-fullstack', title: 'Python Full Stack Development', category: 'Full Stack', badge: 'Popular' },
  { id: 'course-fullstack', title: 'Full Stack Software Engineering', category: 'Full Stack', badge: 'Job-Ready' },
  { id: 'course-react-js', title: 'React JS Frontend Engineering', category: 'Full Stack', badge: 'Essential' },
  { id: 'course-html-css', title: 'HTML5, CSS3 & Responsive Web', category: 'Full Stack', badge: 'Beginner' },

  // Programming & Enterprise
  { id: 'course-python', title: 'Complete Python Training Course', category: 'Programming & Dev', badge: 'Top Rated' },
  { id: 'course-java', title: 'Core & Advanced Java Training', category: 'Programming & Dev', badge: 'Industry Core' },
  { id: 'course-advanced-java', title: 'Advanced Java Training Institute', category: 'Programming & Dev', badge: 'Enterprise' },
  { id: 'course-spring-boot', title: 'Spring Boot & Microservices', category: 'Programming & Dev', badge: 'Backend Pro' },
  { id: 'course-dsa', title: 'Data Structures & Algorithms (DSA)', category: 'Programming & Dev', badge: 'FAANG Tier' },

  // AI & Data Science
  { id: 'course-ai-ml', title: 'AI & Machine Learning Specialist', category: 'AI & Data Science', badge: 'Next-Gen' },
  { id: 'course-data-analytics', title: 'Data Analytics & Python', category: 'AI & Data Science', badge: 'High Growth' },

  // Databases & SQL
  { id: 'course-dbms', title: 'Database Management System (DBMS) Course', category: 'Databases & SQL', badge: 'Foundation' },
  { id: 'course-sql', title: 'SQL Training & Advanced Labs', category: 'Databases & SQL', badge: 'High Demand' },
  { id: 'course-nosql', title: 'NoSQL Database & MongoDB', category: 'Databases & SQL', badge: 'Cloud DB' },
  { id: 'course-dbms-institute', title: 'Database Management System Institute (Greater Noida)', category: 'Databases & SQL', badge: 'Hands-on Labs' }
];

/**
 * Fetches all available courses combining local master catalog and Firestore dynamic additions.
 */
export async function loadAllAvailableCourses() {
  try {
    const courses = await getCourses(DEFAULT_COURSES_LIST);
    return courses.map(c => ({
      id: c.id || c.key,
      title: c.title || c.name,
      category: c.category || 'General',
      badge: c.badge || c.tag || '',
      isDynamic: Boolean(c.isDynamic)
    }));
  } catch (err) {
    console.warn('[CoursesCatalog] Fallback to default courses:', err);
    return DEFAULT_COURSES_LIST;
  }
}
