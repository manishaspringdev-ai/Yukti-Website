import React from 'react';

export default function StructuredData() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Yukti Software Private Limited",
    "url": "https://yuktisoftware.com",
    "logo": "https://yuktisoftware.com/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg",
    "description": "Premier Software Development Company and Leading IT Training Institute in Greater Noida.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "503, MSX Tower 1, Alpha-1 Commercial Belt",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201310",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4744,
      "longitude": 77.5040
    },
    "telephone": "+919910244342",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "380"
    },
    "sameAs": [
      "https://www.linkedin.com/company/yukti-software",
      "https://wa.me/919910244342"
    ]
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Course",
        "position": 1,
        "name": "Python Training Institute Greater Noida",
        "description": "Comprehensive industrial Python programming and web development training with placement assistance in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 2,
        "name": "Java Full Stack Course Greater Noida",
        "description": "Production-grade Java, Spring Boot microservices, React.js, and Cloud program with 100% placement assurance in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 3,
        "name": "DSA Course Greater Noida",
        "description": "Data Structures & Algorithms problem solving and system design curriculum tailored for FAANG and Tier-1 product companies in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 4,
        "name": "AI full stack development in greater Noida",
        "description": "Next-Gen Generative AI, LLMs, LangChain, and full stack web development course in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 5,
        "name": "Python Full Stack Course Greater Noida",
        "description": "Full stack Python, Django, Flask, React.js and PostgreSQL training institute in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 6,
        "name": "MERN Stack training institute Greater Noida",
        "description": "Full stack JavaScript, MongoDB, Express, React and Node.js development in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 7,
        "name": "React JS Training Institute in Greater Noida",
        "description": "Advanced React JS, Redux Toolkit, Tailwind CSS and modern frontend UI architecture in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 8,
        "name": "Spring Boot Training Course in Greater Noida",
        "description": "Enterprise Spring Boot, Microservices, Spring Security and Cloud Kubernetes deployments in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 9,
        "name": "Data Analytics course Greater Noida",
        "description": "Business intelligence, Python for data science, Pandas, SQL, PowerBI and Tableau in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 10,
        "name": "Advanced Java Training Institute Greater Noida",
        "description": "Core and Advanced Java, multithreading, JDBC, collections framework and corporate interview training in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 11,
        "name": "AI & Machine Learning Course Greater Noida",
        "description": "Machine learning algorithms, deep neural networks, computer vision, NLP and TensorFlow training in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 12,
        "name": "Database Management System Course Greater Noida",
        "description": "Relational DBMS, ER modeling, SQL indexing, query optimization and ACID transactions in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 13,
        "name": "NoSQL Database Course Greater Noida",
        "description": "NoSQL database, MongoDB aggregation pipelines, Redis caching and distributed data architecture in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 14,
        "name": "HTML and CSS Course Greater Noida",
        "description": "Responsive web design, semantic HTML5, CSS Grid, Flexbox and Tailwind CSS course in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      },
      {
        "@type": "Course",
        "position": 15,
        "name": "Full Stack Development Course Greater Noida",
        "description": "Complete full stack software engineering program covering frontend, backend, databases and cloud hosting in Greater Noida.",
        "provider": { "@type": "Organization", "name": "Yukti Software", "sameAs": "https://yuktisoftware.com" }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
    </>
  );
}
