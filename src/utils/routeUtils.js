/**
 * SEO URL Route Mapping and Navigation Manager
 * Maps human-readable & SEO-friendly URL Slugs to internal Page Keys and vice-versa.
 */

// Primary Canonical Slugs for each Page/Course
export const CANONICAL_ROUTES = {
  // Static Core Pages
  home: '/',
  about: '/about-us/',
  careers: '/carrer-page/',
  gallery: '/gallery/',
  courses: '/courses/',
  verify: '/verify/',
  admin: '/admin-portal/',
  'training-institute': '/software-training-institute-greater-noida/',

  // 19+ Master Courses (Exact matches from Excel Specifications)
  'course-python': '/python-training-institute-greater-noida/',
  'course-java': '/java-training-institute-greater-noida/',
  'course-advanced-java': '/advanced-java-training-institute-greater-noida/',
  'course-dsa': '/dsa-course-greater-noida/',
  'course-java-fullstack': '/java-full-stack-course-greater-noida/',
  'course-python-fullstack': '/python-full-stack-course-greater-noida/',
  'course-mern-stack': '/mern-stack-training-institute-greater-noida/',
  'course-fullstack': '/full-stack-development-course-greater-noida/',
  'course-data-analytics': '/data-analytics-course-greater-noida/',
  'course-ai-ml': '/ai-and-machine-learning-course-greater-noida/',
  'course-html-css': '/html-and-css-course-greater-noida/',
  'course-ai-fullstack': '/ai-full-stack-development-in-greater-noida/',
  'course-react-js': '/react-js-training-institute-in-greater-noida/',
  'course-dbms': '/database-management-system-course-greater-noida/',
  'course-dbms-institute': '/database-management-system-institute-greater-noida/',
  'course-sql': '/sql-training-institute-in-greater-noida/',
  'course-nosql': '/nosql-database-course-greater-noida/',
  'course-nosql-institute': '/nosql-database-institute-greater-noida/',
  'course-spring-boot': '/spring-boot-training-course-in-greater-noida/',
  'course-software-development': '/software-training-course-greater-noida/',
  'course-programming': '/programming-course-greater-noida/'
};

// All Inbound Slugs / Aliases mapping to Page Keys
export const SLUG_TO_PAGE_MAP = {
  // Home
  '': 'home',
  '/': 'home',
  'home': 'home',

  // About
  'about': 'about',
  'about-us': 'about',
  'about-us/': 'about',
  'about/': 'about',

  // Career / Internship
  'carrer-page': 'careers',
  'career-page': 'careers',
  'careers': 'careers',
  'career': 'careers',
  'internship': 'careers',
  'internships': 'careers',
  'industrial-internship': 'careers',

  // Gallery
  'gallery': 'gallery',
  'gallery/': 'gallery',
  'photo-and-video-gallery': 'gallery',
  'videos': 'gallery',
  'photos': 'gallery',

  // Master Courses Catalog
  'courses': 'courses',
  'all-courses': 'courses',
  'it-courses': 'courses',
  'it-training-courses': 'courses',

  // Training Institute Core Landing
  'software-training-institute': 'training-institute',
  'software-training-institute-greater-noida': 'training-institute',
  'training-institute': 'training-institute',
  'institute': 'training-institute',

  // Certificate Verification
  'verify': 'verify',
  'verify/': 'verify',
  'verify-certificate': 'verify',
  'certificate-verification': 'verify',
  'verification': 'verify',

  // Admin Portal & Document Studio
  'admin': 'admin',
  'admin/': 'admin',
  'admin-portal': 'admin',
  'admin-portal/': 'admin',
  'document-studio': 'admin',

  // Specific Courses (SEO Slugs from User Docx / Excel Sheet)
  'java-training-institute-greater-noida': 'course-java',
  'java': 'course-java',
  'core-java': 'course-java',

  'advanced-java-training-institute-greater-noida': 'course-advanced-java',
  'advanced-java': 'course-advanced-java',

  'dsa-course-greater-noida': 'course-dsa',
  'dsa': 'course-dsa',
  'data-structures-and-algorithms': 'course-dsa',

  'python-training-institute-greater-noida': 'course-python',
  'python': 'course-python',
  'python-programming': 'course-python',

  'java-full-stack-course-greater-noida': 'course-java-fullstack',
  'java-fullstack': 'course-java-fullstack',
  'java-full-stack': 'course-java-fullstack',

  'python-full-stack-course-greater-noida': 'course-python-fullstack',
  'python-full-stack-institute-in-greater-noida': 'course-python-fullstack',
  'python-fullstack': 'course-python-fullstack',
  'python-full-stack': 'course-python-fullstack',

  'mern-stack-training-institute-greater-noida': 'course-mern-stack',
  'mern-stack': 'course-mern-stack',
  'mern': 'course-mern-stack',

  'full-stack-development-course-greater-noida': 'course-fullstack',
  'fullstack': 'course-fullstack',
  'full-stack': 'course-fullstack',

  'data-analytics-course-greater-noida': 'course-data-analytics',
  'data-analytics': 'course-data-analytics',
  'data-analytics-python': 'course-data-analytics',

  'ai-and-machine-learning-course-greater-noida': 'course-ai-ml',
  'ai-machine-learning-course-greater-noida': 'course-ai-ml',
  'ai-ml': 'course-ai-ml',
  'ai-machine-learning': 'course-ai-ml',

  'html-and-css-course-greater-noida': 'course-html-css',
  'html-css': 'course-html-css',
  'html5-css3': 'course-html-css',

  'ai-full-stack-development-in-greater-noida': 'course-ai-fullstack',
  'ai-fullstack': 'course-ai-fullstack',
  'ai-full-stack': 'course-ai-fullstack',

  'react-js-training-institute-in-greater-noida': 'course-react-js',
  'react-js': 'course-react-js',
  'react': 'course-react-js',

  'database-management-system-course-greater-noida': 'course-dbms',
  'dbms-course-in-greater-noida': 'course-dbms',
  'dbms': 'course-dbms',

  'database-management-system-institute-greater-noida': 'course-dbms-institute',
  'dbms-institute': 'course-dbms-institute',

  'sql-training-institute-in-greater-noida': 'course-sql',
  'sql-training-course-in-greater-noida': 'course-sql',
  'sql': 'course-sql',
  'advanced-sql': 'course-sql',

  'nosql-database-course-greater-noida': 'course-nosql',
  'nosql-database-institute-greater-noida': 'course-nosql-institute',
  'nosql-institute': 'course-nosql-institute',
  'nosql': 'course-nosql',
  'mongodb': 'course-nosql',

  'spring-boot-training-course-in-greater-noida': 'course-spring-boot',
  'spring-boot': 'course-spring-boot',
  'springboot': 'course-spring-boot',

  'programming-course-greater-noida': 'course-programming',
  'programming-course': 'course-programming',
  'programming': 'course-programming',
  'course-programming': 'course-programming',
  'software-training-course-greater-noida': 'course-software-development',
  'software-development': 'course-software-development',
  'software-development-course': 'course-software-development'
};

/**
 * Normalizes a pathname string to clean slug
 * e.g. "/about-us/" -> "about-us"
 */
export function normalizeSlug(pathname = '') {
  if (!pathname) return '';
  let clean = pathname.trim().toLowerCase();
  // Remove leading and trailing slashes
  clean = clean.replace(/^\/+|\/+$/g, '');
  return clean;
}

/**
 * Resolves current browser URL pathname to internal Page Key
 */
export function getPageKeyFromPath(pathname = window.location.pathname) {
  const clean = normalizeSlug(pathname);
  if (!clean) return 'home';

  // Check direct alias map
  if (SLUG_TO_PAGE_MAP[clean]) {
    return SLUG_TO_PAGE_MAP[clean];
  }

  // Check if starts with "course/" or "courses/"
  if (clean.startsWith('course/')) {
    const sub = clean.replace('course/', '');
    return SLUG_TO_PAGE_MAP[sub] || `course-${sub}`;
  }
  if (clean.startsWith('courses/')) {
    const sub = clean.replace('courses/', '');
    return SLUG_TO_PAGE_MAP[sub] || `course-${sub}`;
  }

  // If slug starts with "course-", test directly
  if (clean.startsWith('course-')) {
    return clean;
  }

  // Fallback: Check if it matches any canonical route
  for (const [pageKey, canonicalPath] of Object.entries(CANONICAL_ROUTES)) {
    if (normalizeSlug(canonicalPath) === clean) {
      return pageKey;
    }
  }

  // Default to dynamic course if unrecognized single slug
  return `course-${clean}`;
}

/**
 * Gets the SEO-friendly URL pathname for a given internal Page Key
 */
export function getUrlPathForPage(pageKey = 'home') {
  if (CANONICAL_ROUTES[pageKey]) {
    return CANONICAL_ROUTES[pageKey];
  }

  // If dynamic course like "course-my-topic"
  if (pageKey.startsWith('course-')) {
    const sub = pageKey.replace('course-', '');
    if (SLUG_TO_PAGE_MAP[sub] && CANONICAL_ROUTES[SLUG_TO_PAGE_MAP[sub]]) {
      return CANONICAL_ROUTES[SLUG_TO_PAGE_MAP[sub]];
    }
    return `/${sub}/`;
  }

  return `/${pageKey}/`;
}

/**
 * Updates browser address bar URL history without triggering full page reload
 */
export function pushPageUrl(pageKey, hash = '') {
  try {
    const targetPath = getUrlPathForPage(pageKey);
    const fullUrl = hash ? `${targetPath}${hash}` : targetPath;
    
    // Only push if URL actually changed
    const currentFull = window.location.pathname + window.location.hash;
    if (currentFull !== fullUrl) {
      window.history.pushState({ pageKey, hash }, '', fullUrl);
    }
  } catch (err) {
    console.warn('[RouteUtils] pushState skipped:', err);
  }
}
