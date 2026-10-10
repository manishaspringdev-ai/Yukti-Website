// 21 Master Courses Dedicated Image Registry
// Images are loaded from /courseimg/<key>.jpg (stored in public/courseimg/)
// with high-resolution photographic fallbacks for immediate display.

export const COURSE_KEYS_LIST = [
  { key: "programming", title: "Programming Course Greater Noida", filename: "programming.jpg", category: "Programming" },
  { key: "software-development", title: "Software Training Course Greater Noida", filename: "software-development.jpg", category: "Software Development" },
  { key: "python", title: "Python Training Institute Greater Noida", filename: "python.jpg", category: "Python" },
  { key: "ai-ml", title: "AI & Machine Learning Course Greater Noida", filename: "ai-ml.jpg", category: "AI & Data Science" },
  { key: "data-analytics", title: "Data Analytics Course Greater Noida", filename: "data-analytics.jpg", category: "AI & Data Science" },
  { key: "dbms", title: "Database Management System Course Greater Noida", filename: "dbms.jpg", category: "Databases" },
  { key: "dsa", title: "DSA Course Greater Noida", filename: "dsa.jpg", category: "Programming" },
  { key: "fullstack", title: "Full Stack Development Course Greater Noida", filename: "fullstack.jpg", category: "Full Stack" },
  { key: "html-css", title: "HTML and CSS Course Greater Noida", filename: "html-css.jpg", category: "Web Design" },
  { key: "java", title: "Java Training Institute Greater Noida", filename: "java.jpg", category: "Java" },
  { key: "mern-stack", title: "MERN Stack Training Institute Greater Noida", filename: "mern-stack.jpg", category: "Full Stack" },
  { key: "spring-boot", title: "Spring Boot Training Course in Greater Noida", filename: "spring-boot.jpg", category: "Java" },
  { key: "nosql", title: "NoSQL Database & MongoDB Course", filename: "nosql.jpg", category: "Databases" },
  { key: "advanced-java", title: "Advanced Java Training Institute Greater Noida", filename: "advanced-java.jpg", category: "Java" },
  { key: "ai-fullstack", title: "AI Full Stack Development in Greater Noida", filename: "ai-fullstack.jpg", category: "AI & Full Stack" },
  { key: "python-fullstack", title: "Python Full Stack Institute in Greater Noida", filename: "python-fullstack.jpg", category: "Python & Full Stack" },
  { key: "react-js", title: "React JS Training Institute in Greater Noida", filename: "react-js.jpg", category: "Frontend" },
  { key: "java-fullstack", title: "Java Full Stack Course Greater Noida", filename: "java-fullstack.jpg", category: "Java & Full Stack" },
  { key: "sql", title: "SQL Training Course in Greater Noida", filename: "sql.jpg", category: "Databases" },
  { key: "dbms-institute", title: "Database Management System Institute Greater Noida", filename: "dbms-institute.jpg", category: "Databases" },
  { key: "nosql-institute", title: "NoSQL Database Institute Greater Noida", filename: "nosql-institute.jpg", category: "Databases" }
];

export const courseImageGalleries = {
  programming: [
    {
      url: "/courseimg/programming.jpg",
      fallback: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      title: "Core Programming & Software Fundamentals",
      caption: "C, C++, OOP logic and foundational coding practice in Greater Noida.",
      tag: "Programming Track"
    }
  ],
  "software-development": [
    {
      url: "/courseimg/software-development.jpg",
      fallback: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      title: "Software Engineering & Architecture Lab",
      caption: "SDLC, OOP design patterns, software testing, and enterprise development.",
      tag: "Software Engineering"
    }
  ],
  python: [
    {
      url: "/courseimg/python.jpg",
      fallback: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
      title: "Interactive Python Lab & Coding Workstation",
      caption: "Hands-on scripting, OOP concepts, automation & real-time syntax execution.",
      tag: "Python Specialist"
    }
  ],
  "ai-ml": [
    {
      url: "/courseimg/ai-ml.jpg",
      fallback: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      title: "Deep Learning, NLP & AI Workstation",
      caption: "Training Computer Vision, Transformer models, PyTorch & TensorFlow.",
      tag: "AI & ML Specialist"
    }
  ],
  "data-analytics": [
    {
      url: "/courseimg/data-analytics.jpg",
      fallback: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      title: "Data Analytics, Power BI & Business Intelligence",
      caption: "Building corporate reports, DAX functions, predictive models & KPI dashboards.",
      tag: "Data Analytics"
    }
  ],
  dbms: [
    {
      url: "/courseimg/dbms.jpg",
      fallback: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      title: "Database Management Systems (DBMS) Lab",
      caption: "Relational database modeling, SQL queries, normalization & ACID transactions.",
      tag: "DBMS Track"
    }
  ],
  "dbms-institute": [
    {
      url: "/courseimg/dbms-institute.jpg",
      fallback: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      title: "DBMS Institute Professional Database Architecture",
      caption: "Advanced relational database design, query tuning, security & enterprise DBA.",
      tag: "DBMS Institute"
    }
  ],
  dsa: [
    {
      url: "/courseimg/dsa.jpg",
      fallback: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      title: "Data Structures & Algorithmic Problem Solving",
      caption: "Dynamic Programming, Trees, Binary Search, Graphs & LeetCode drills.",
      tag: "DSA Specialist"
    }
  ],
  fullstack: [
    {
      url: "/courseimg/fullstack.jpg",
      fallback: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      title: "Full Stack Web Development & Cloud Architecture",
      caption: "Modern frontend and backend engineering with databases, APIs, and CI/CD.",
      tag: "Full Stack"
    }
  ],
  "html-css": [
    {
      url: "/courseimg/html-css.jpg",
      fallback: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      title: "HTML5, CSS3 & Responsive UI Web Design",
      caption: "Modern flexbox, CSS grid, mobile-first layouts, animations & web accessibility.",
      tag: "Web Design"
    }
  ],
  java: [
    {
      url: "/courseimg/java.jpg",
      fallback: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      title: "Core Java & Object-Oriented Programming Hub",
      caption: "OOPs, multithreading, collections framework, JVM architecture & exception handling.",
      tag: "Java Specialist"
    }
  ],
  "advanced-java": [
    {
      url: "/courseimg/advanced-java.jpg",
      fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      title: "Advanced Java, JDBC, Servlets & Hibernate",
      caption: "Enterprise Java standards, JDBC database connectivity, ORM & Spring foundation.",
      tag: "Advanced Java"
    }
  ],
  "java-fullstack": [
    {
      url: "/courseimg/java-fullstack.jpg",
      fallback: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      title: "Java Full Stack (Core Java + Spring Boot + React)",
      caption: "End-to-end full stack web applications with Spring Boot REST APIs and React.",
      tag: "Java Full Stack"
    }
  ],
  "spring-boot": [
    {
      url: "/courseimg/spring-boot.jpg",
      fallback: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      title: "Spring Boot & Enterprise Microservices",
      caption: "Cloud-native microservices, Spring Security, JWT, Docker & API gateways.",
      tag: "Spring Boot"
    }
  ],
  "mern-stack": [
    {
      url: "/courseimg/mern-stack.jpg",
      fallback: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      title: "MERN Stack (MongoDB, Express, React, Node)",
      caption: "Building production SaaS applications with full-stack JavaScript and MongoDB.",
      tag: "MERN Stack"
    }
  ],
  "react-js": [
    {
      url: "/courseimg/react-js.jpg",
      fallback: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      title: "React JS Frontend Engineering & Component Lab",
      caption: "React hooks, state management, SPA routing, API integration & Tailwind UI.",
      tag: "React JS"
    }
  ],
  nosql: [
    {
      url: "/courseimg/nosql.jpg",
      fallback: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      title: "NoSQL Database & MongoDB Course",
      caption: "Document stores, aggregation pipelines, schema design & high-speed indexing.",
      tag: "NoSQL Database"
    }
  ],
  "nosql-institute": [
    {
      url: "/courseimg/nosql-institute.jpg",
      fallback: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      title: "NoSQL Database Institute Enterprise Architecture",
      caption: "Cassandra, Redis, Neo4j, MongoDB scalability, sharding & cluster tuning.",
      tag: "NoSQL Institute"
    }
  ],
  sql: [
    {
      url: "/courseimg/sql.jpg",
      fallback: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      title: "SQL Query Writing & Database Mastery",
      caption: "Complex joins, stored procedures, window functions, indexing & query tuning.",
      tag: "SQL Mastery"
    }
  ],
  "ai-fullstack": [
    {
      url: "/courseimg/ai-fullstack.jpg",
      fallback: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      title: "AI Full Stack Web Development",
      caption: "Integrating LLMs, LangChain, OpenAI APIs with full-stack React and Python backend.",
      tag: "AI Full Stack"
    }
  ],
  "python-fullstack": [
    {
      url: "/courseimg/python-fullstack.jpg",
      fallback: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
      title: "Python Full Stack (Python + Django / FastAPI + React)",
      caption: "Modern enterprise backend with Django/FastAPI and reactive frontend interfaces.",
      tag: "Python Full Stack"
    }
  ]
};

// Smart fallback resolver for any course key
export function getCourseImages(courseKey = '') {
  let key = (courseKey || '').toLowerCase().trim();
  if (key.startsWith('course-')) {
    key = key.replace('course-', '');
  }

  // Exact match in 21 master courses
  if (courseImageGalleries[key]) {
    return courseImageGalleries[key];
  }

  // Smart partial keyword match
  if (key.includes('nosql-institute')) return courseImageGalleries['nosql-institute'];
  if (key.includes('dbms-institute')) return courseImageGalleries['dbms-institute'];
  if (key.includes('python-fullstack')) return courseImageGalleries['python-fullstack'];
  if (key.includes('java-fullstack')) return courseImageGalleries['java-fullstack'];
  if (key.includes('ai-fullstack')) return courseImageGalleries['ai-fullstack'];
  if (key.includes('advanced-java')) return courseImageGalleries['advanced-java'];
  if (key.includes('spring')) return courseImageGalleries['spring-boot'];
  if (key.includes('react')) return courseImageGalleries['react-js'];
  if (key.includes('mern')) return courseImageGalleries['mern-stack'];
  if (key.includes('html') || key.includes('css')) return courseImageGalleries['html-css'];
  if (key.includes('fullstack')) return courseImageGalleries['fullstack'];
  if (key.includes('dsa') || key.includes('algo')) return courseImageGalleries['dsa'];
  if (key.includes('sql') && !key.includes('nosql')) return courseImageGalleries['sql'];
  if (key.includes('nosql')) return courseImageGalleries['nosql'];
  if (key.includes('dbms') || key.includes('database')) return courseImageGalleries['dbms'];
  if (key.includes('analytic') || key.includes('bi')) return courseImageGalleries['data-analytics'];
  if (key.includes('ai') || key.includes('ml')) return courseImageGalleries['ai-ml'];
  if (key.includes('python')) return courseImageGalleries['python'];
  if (key.includes('java')) return courseImageGalleries['java'];
  if (key.includes('software')) return courseImageGalleries['software-development'];
  if (key.includes('program')) return courseImageGalleries['programming'];

  return courseImageGalleries.programming;
}
