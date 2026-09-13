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
      "streetAddress": "2nd Floor, Om Tower, Alpha 1 Commercial Belt",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201308",
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
        "name": "Python, Data Science & AI Mastery",
        "description": "Comprehensive 16-week industrial Python and Artificial Intelligence training with placement assistance.",
        "provider": {
          "@type": "Organization",
          "name": "Yukti Software",
          "sameAs": "https://yuktisoftware.com"
        }
      },
      {
        "@type": "Course",
        "position": 2,
        "name": "Java Full Stack & Microservices",
        "description": "Production-grade Java 21, Spring Boot 3, React 18, and Cloud Microservices program with 100% placement assurance.",
        "provider": {
          "@type": "Organization",
          "name": "Yukti Software",
          "sameAs": "https://yuktisoftware.com"
        }
      },
      {
        "@type": "Course",
        "position": 3,
        "name": "Data Structures, Algorithms & System Design",
        "description": "Advanced problem solving and architecture design curriculum tailored for FAANG and Tier-1 product companies.",
        "provider": {
          "@type": "Organization",
          "name": "Yukti Software",
          "sameAs": "https://yuktisoftware.com"
        }
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
