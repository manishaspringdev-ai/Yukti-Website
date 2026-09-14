import React from 'react';

// Official & Pixel-Perfect Tech Brand SVG Logos
export function PythonLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M54.2 2C26.5 2 28.2 14 28.2 14l.03 12.4H55v3.7H15.8S2 28.5 2 56.3c0 27.8 12.1 26.8 12.1 26.8h7.2v-12.7s-.7-15.1 14.8-15.1h25.4v-4.6H28.2s-7-.2-7-9.5c0-9.2 8-9.1 8-9.1h39.7s6.8.4 6.8-9.1V11S76.4 2 54.2 2z" fill="url(#py_blue)" />
      <path d="M55.8 108c27.7 0 26-12 26-12l-.03-12.4H55v-3.7h39.2s13.8 1.6 13.8-26.2c0-27.8-12.1-26.8-12.1-26.8h-7.2v12.7s.7 15.1-14.8 15.1H44.5v4.6h31.3s7 .2 7 9.5c0 9.2-8 9.1-8 9.1H35.1s-6.8-.4-6.8 9.1V99s-.7 9 21.5 9h6z" fill="url(#py_yellow)" />
      <circle cx="39" cy="17" r="4.5" fill="#ffffff" />
      <circle cx="71" cy="93" r="4.5" fill="#ffffff" />
      <defs>
        <linearGradient id="py_blue" x1="2" y1="2" x2="65" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py_yellow" x1="55" y1="55" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE873" />
          <stop offset="1" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function JavaLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Steam curves */}
      <path d="M58 20c4-4 8-11 2-17-1 4-3 8-7 10-4 3-7 6-4 12 3-2 6-3 9-5z" fill="#5382A1" />
      <path d="M44 26c3-4 6-11 1-16-1 4-3 7-6 9-3 3-5 5-3 10 3-1 5-1 8-3z" fill="#E76F00" />
      <path d="M70 30c2-3 5-7 1-11-1 3-2 5-4 6-2 2-4 4-2 7 2-1 3-1 5-2z" fill="#5382A1" />
      {/* Cup Body */}
      <path d="M22 44h48c0 0 2 24-24 25-26 1-24-25-24-25z" fill="#E76F00" />
      <path d="M26 47h40c0 0 1 18-20 19-21 1-20-19-20-19z" fill="#F89820" />
      {/* Handle */}
      <path d="M66 47c8 0 14 4 14 11s-6 11-14 11v-4c5 0 9-3 9-7s-4-7-9-7v-3z" fill="#5382A1" />
      {/* Base Saucer */}
      <path d="M15 76c12 7 42 7 58 0 4-2 9 3 4 5-16 6-50 6-66 0-5-2 0-7 4-5z" fill="#5382A1" />
      <path d="M24 85c10 4 32 4 44 0 3-1 6 2 3 3-12 4-38 4-50 0-3-1 0-4 3-3z" fill="#E76F00" />
    </svg>
  );
}

export function ReactLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="-12 -11 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse rx="11" ry="4.2" stroke="#00D8FF" strokeWidth="1.3" />
      <ellipse rx="11" ry="4.2" stroke="#00D8FF" strokeWidth="1.3" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" stroke="#00D8FF" strokeWidth="1.3" transform="rotate(120)" />
      <circle cx="0" cy="0" r="2.3" fill="#00D8FF" />
    </svg>
  );
}

export function SpringBootLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#6DB33F" />
      <path d="M50 18C32 18 18 32 18 50c0 11 5.8 20.8 14.6 26.5l2-3.4C26.5 68.4 21.4 59.8 21.4 50c0-15.8 12.8-28.6 28.6-28.6s28.6 12.8 28.6 28.6c0 8.5-3.7 16.1-9.7 21.4l-11-11c2-2.6 3.2-6 3.2-9.6 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 8.8 7.2 16 16 16 3.6 0 6.9-1.2 9.6-3.2l11.3 11.3C60.6 78.4 55.5 80 50 80c-4.8 0-9.4-1.2-13.4-3.3l-2 3.4C39 82.4 44.3 83.4 50 83.4c18.4 0 33.4-15 33.4-33.4S68.4 18 50 18z" fill="#ffffff" />
      <circle cx="45" cy="50" r="6" fill="#ffffff" />
    </svg>
  );
}

export function MernStackLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#0B1329" />
      {/* MongoDB Leaf */}
      <g transform="translate(18, 16) scale(0.65)">
        <path d="M24 6c-2 0-16 18-16 34 0 14 10 26 16 30 6-4 16-16 16-30 0-16-14-34-16-34z" fill="#13AA52" />
        <path d="M24 6v64c6-4 16-16 16-30 0-16-14-34-16-34z" fill="#108548" />
      </g>
      {/* Express */}
      <g transform="translate(54, 18)">
        <circle cx="16" cy="16" r="14" fill="#334155" />
        <text x="16" y="21" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">ex</text>
      </g>
      {/* React */}
      <g transform="translate(18, 56)">
        <circle cx="16" cy="16" r="3.5" fill="#00D8FF" />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#00D8FF" strokeWidth="1.6" fill="none" transform="rotate(-30 16 16)" />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#00D8FF" strokeWidth="1.6" fill="none" transform="rotate(30 16 16)" />
      </g>
      {/* Node.js */}
      <g transform="translate(54, 56)">
        <path d="M16 2l12 7v14l-12 7-12-7V9l12-7z" fill="#539E43" />
        <text x="16" y="19" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">JS</text>
      </g>
    </svg>
  );
}

export function DsaLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#0F172A" />
      <line x1="50" y1="26" x2="28" y2="52" stroke="#38BDF8" strokeWidth="3" />
      <line x1="50" y1="26" x2="72" y2="52" stroke="#38BDF8" strokeWidth="3" />
      <line x1="28" y1="52" x2="20" y2="78" stroke="#818CF8" strokeWidth="3" />
      <line x1="28" y1="52" x2="40" y2="78" stroke="#818CF8" strokeWidth="3" />
      <line x1="72" y1="52" x2="60" y2="78" stroke="#818CF8" strokeWidth="3" />
      <line x1="72" y1="52" x2="80" y2="78" stroke="#818CF8" strokeWidth="3" />
      <circle cx="50" cy="26" r="12" fill="#0284C7" stroke="#38BDF8" strokeWidth="2.5" />
      <text x="50" y="30" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>
      <circle cx="28" cy="52" r="10" fill="#6366F1" stroke="#A5B4FC" strokeWidth="2" />
      <circle cx="72" cy="52" r="10" fill="#6366F1" stroke="#A5B4FC" strokeWidth="2" />
      <circle cx="20" cy="78" r="7" fill="#10B981" />
      <circle cx="40" cy="78" r="7" fill="#10B981" />
      <circle cx="60" cy="78" r="7" fill="#10B981" />
      <circle cx="80" cy="78" r="7" fill="#10B981" />
    </svg>
  );
}

export function AiMlLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai_bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="0.5" stopColor="#EC4899" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#ai_bg)" />
      <path d="M50 18l5 17 17 5-17 5-5 17-5-17-17-5 17-5 5-17z" fill="#ffffff" />
      <path d="M72 58l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9z" fill="#FDE047" />
      <circle cx="30" cy="70" r="10" fill="#ffffff" fillOpacity="0.25" />
      <circle cx="30" cy="70" r="5" fill="#ffffff" />
    </svg>
  );
}

export function DataAnalyticsLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#0F172A" />
      <rect x="18" y="58" width="12" height="26" rx="3" fill="#38BDF8" />
      <rect x="36" y="42" width="12" height="42" rx="3" fill="#6366F1" />
      <rect x="54" y="28" width="12" height="56" rx="3" fill="#F59E0B" />
      <rect x="72" y="16" width="12" height="68" rx="3" fill="#10B981" />
      <path d="M24 54L42 38L60 24L78 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
      <circle cx="78" cy="12" r="3.5" fill="#EF4444" />
    </svg>
  );
}

export function DbmsSqlLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#1E293B" />
      <ellipse cx="50" cy="28" rx="28" ry="9" fill="#336791" stroke="#60A5FA" strokeWidth="2" />
      <path d="M22 28v18c0 5 12.5 9 28 9s28-4 28-9V28" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="2" />
      <path d="M22 46v18c0 5 12.5 9 28 9s28-4 28-9V46" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2" />
      <path d="M22 64v16c0 5 12.5 9 28 9s28-4 28-9V64" fill="#172554" stroke="#60A5FA" strokeWidth="2" />
      <text x="50" y="76" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">SQL</text>
    </svg>
  );
}

export function MongoDbLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#0A1A12" />
      <path d="M50 12c-2.5 0-20 22-20 42 0 16 12 30 20 34 8-4 20-18 20-34 0-20-17.5-42-20-42z" fill="#13AA52" />
      <path d="M50 12v76c8-4 20-18 20-34 0-20-17.5-42-20-42z" fill="#108548" />
      <path d="M50 82v10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HtmlCssLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#0F172A" />
      <g transform="translate(14, 18) scale(0.65)">
        <path d="M5 5l5 52 18 5 18-5 5-52H5z" fill="#E44D26" />
        <path d="M28 5v54l14-4 4-38H28z" fill="#F16529" />
        <text x="28" y="78" fill="#E44D26" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">HTML</text>
      </g>
      <g transform="translate(54, 18) scale(0.65)">
        <path d="M5 5l5 52 18 5 18-5 5-52H5z" fill="#1572B6" />
        <path d="M28 5v54l14-4 4-38H28z" fill="#33A9DC" />
        <text x="28" y="78" fill="#33A9DC" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">CSS</text>
      </g>
    </svg>
  );
}

export function FullStackLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#1E1B4B" />
      <path d="M50 18L16 35l34 17 34-17-34-17z" fill="#6366F1" />
      <path d="M16 46l34 17 34-17" stroke="#818CF8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 62l34 17 34-17" stroke="#A5B4FC" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 78l34 17 34-17" stroke="#C7D2FE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Services Logos
export function WebDevServiceLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#0284C7" />
      <rect x="16" y="20" width="68" height="56" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="2.5" />
      <circle cx="26" cy="28" r="2.5" fill="#EF4444" />
      <circle cx="34" cy="28" r="2.5" fill="#F59E0B" />
      <circle cx="42" cy="28" r="2.5" fill="#10B981" />
      <path d="M34 46L24 56l10 10M48 66l6-20M66 46l10 10-10 10" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MobileDevServiceLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#4F46E5" />
      <rect x="28" y="14" width="44" height="72" rx="10" fill="#0F172A" stroke="#A5B4FC" strokeWidth="2.5" />
      <rect x="34" y="24" width="32" height="50" rx="3" fill="#1E293B" />
      <circle cx="50" cy="80" r="2.5" fill="#A5B4FC" />
      <path d="M42 42l6 6 12-12" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="60" r="5" fill="#6366F1" />
    </svg>
  );
}

export function DatabaseServiceLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#059669" />
      <ellipse cx="50" cy="28" rx="26" ry="9" fill="#065F46" stroke="#6EE7B7" strokeWidth="2" />
      <path d="M24 28v18c0 5 11.6 9 26 9s26-4 26-9V28" fill="#047857" stroke="#6EE7B7" strokeWidth="2" />
      <path d="M24 46v18c0 5 11.6 9 26 9s26-4 26-9V46" fill="#065F46" stroke="#6EE7B7" strokeWidth="2" />
      <path d="M24 64v14c0 5 11.6 9 26 9s26-4 26-9V64" fill="#064E3B" stroke="#6EE7B7" strokeWidth="2" />
      {/* Security Lock */}
      <circle cx="70" cy="70" r="11" fill="#F59E0B" stroke="#ffffff" strokeWidth="1.5" />
      <rect x="65" y="68" width="10" height="7" rx="1.5" fill="#ffffff" />
      <path d="M67.5 68v-2.5a2.5 2.5 0 015 0v2.5" stroke="#ffffff" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function CloudServiceLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#0284C7" />
      <path d="M68 42a17 17 0 00-32-6 12.5 12.5 0 00-14 12.5c0 1.5.3 3 1 4.2A15.5 15.5 0 0027 78h41a14 14 0 000-28c0-4.5-2.5-9-6-11" fill="#ffffff" />
      <path d="M40 58l10-10 10 10M50 48v22" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DevopsServiceLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#EA580C" />
      <path d="M34 50c-9-11-19 0-9 11s19-11 26 0 17 11 26 0-9-22-17-11-17 11-26 0z" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <circle cx="28" cy="50" r="3" fill="#FED7AA" />
      <circle cx="74" cy="50" r="3" fill="#FED7AA" />
      <circle cx="50" cy="50" r="3" fill="#FED7AA" />
    </svg>
  );
}

// Master resolver function
export function getCourseLogo(courseIdOrKey, className = "w-7 h-7") {
  const id = (courseIdOrKey || '').toLowerCase();
  
  if (id.includes('python')) return <PythonLogo className={className} />;
  if (id.includes('spring')) return <SpringBootLogo className={className} />;
  if (id.includes('java')) return <JavaLogo className={className} />;
  if (id.includes('react')) return <ReactLogo className={className} />;
  if (id.includes('mern')) return <MernStackLogo className={className} />;
  if (id.includes('dsa') || id.includes('algorithm')) return <DsaLogo className={className} />;
  if (id.includes('ai') || id.includes('machine-learning') || id.includes('ml')) return <AiMlLogo className={className} />;
  if (id.includes('analytics') || id.includes('data-analytics')) return <DataAnalyticsLogo className={className} />;
  if (id.includes('nosql') || id.includes('mongodb')) return <MongoDbLogo className={className} />;
  if (id.includes('dbms') || id.includes('sql')) return <DbmsSqlLogo className={className} />;
  if (id.includes('html') || id.includes('css')) return <HtmlCssLogo className={className} />;
  if (id.includes('fullstack')) return <FullStackLogo className={className} />;
  
  return <FullStackLogo className={className} />;
}

export function getServiceLogo(serviceId, className = "w-7 h-7") {
  const id = (serviceId || '').toLowerCase();
  
  if (id.includes('web')) return <WebDevServiceLogo className={className} />;
  if (id.includes('mobile')) return <MobileDevServiceLogo className={className} />;
  if (id.includes('database') || id.includes('data')) return <DatabaseServiceLogo className={className} />;
  if (id.includes('cloud')) return <CloudServiceLogo className={className} />;
  if (id.includes('devops') || id.includes('ci')) return <DevopsServiceLogo className={className} />;
  
  return <WebDevServiceLogo className={className} />;
}

// 7-Stage Software Engineering Delivery Roadmap Brand Logos
export function JiraLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jira_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="#F8FAFC" />
      <path d="M50 16L22 44a8 8 0 0 0 0 12l28 28 28-28a8 8 0 0 0 0-12L50 16z" fill="url(#jira_grad)" />
      <path d="M50 32L34 48a3 3 0 0 0 0 4.2l16 16 16-16a3 3 0 0 0 0-4.2L50 32z" fill="#ffffff" />
    </svg>
  );
}

export function MiroLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#FFD02F" />
      <path d="M23 75V25l16 19-10 31H23z" fill="#050038" />
      <path d="M42 75V25l16 19-10 31H42z" fill="#050038" />
      <path d="M61 75V25l17 19-10 31H61z" fill="#050038" />
    </svg>
  );
}

export function FigmaLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#1E1E1E" />
      <g transform="translate(31, 15) scale(1)">
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
        <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 0 9.5 57 9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5z" fill="#0ACF83" />
      </g>
    </svg>
  );
}

export function VsCodeLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#1E1E1E" />
      <g transform="translate(10, 10) scale(0.8)">
        <path d="M72.4 97.8c3.2 1.6 7.1.6 9-2.3l15-22.3c1.8-2.6 1.8-6.1 0-8.7L81.4 4.5c-1.9-2.9-5.8-3.9-9-2.3L28.6 22.8c-2.4 1.2-3.8 3.7-3.6 6.4.2 2.7 2 5 4.6 5.8l38.2 15-38.2 15c-2.6.8-4.4 3.1-4.6 5.8-.2 2.7 1.2 5.2 3.6 6.4l43.8 20.6z" fill="#0065A9" />
        <path d="M72.4 97.8L28.6 77.2c-2.4-1.2-3.8-3.7-3.6-6.4.2-2.7 2-5 4.6-5.8l38.2-15L23.4 29.5 7.6 42.4c-2.3 1.9-2.8 5.2-1.2 7.7l13.7 21.6 52.3 26.1z" fill="#007ACC" />
        <path d="M72.4 2.2L28.6 22.8c-2.4 1.2-3.8 3.7-3.6 6.4.2 2.7 2 5 4.6 5.8l38.2 15L23.4 70.5 7.6 57.6c-2.3-1.9-2.8-5.2-1.2-7.7L20.1 28.3 72.4 2.2z" fill="#1F9CF0" />
      </g>
    </svg>
  );
}

export function PostmanLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#FF6C37" />
      <g transform="translate(18, 16) scale(0.64)">
        <path d="M78 20c-5-4-12-4-17 0L26 43c-3 2-5 6-4 10l3 12-16 10c-3 2-4 7-2 10l5 9c2 3 7 4 10 2l17-11 7 4c3 2 8 0 10-4l22-35c3-5 3-10-1-14z" fill="#ffffff" />
        <circle cx="36" cy="44" r="6" fill="#FF6C37" />
        <path d="M47 38l18-12M54 50l14-9" stroke="#FF6C37" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function DockerLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#0db7ed" />
      <g fill="#ffffff">
        <rect x="22" y="38" width="9" height="7" rx="1.5" />
        <rect x="33" y="38" width="9" height="7" rx="1.5" />
        <rect x="44" y="38" width="9" height="7" rx="1.5" />
        <rect x="33" y="29" width="9" height="7" rx="1.5" />
        <rect x="44" y="29" width="9" height="7" rx="1.5" />
        <rect x="55" y="38" width="9" height="7" rx="1.5" />
        <rect x="55" y="29" width="9" height="7" rx="1.5" />
        <rect x="66" y="38" width="9" height="7" rx="1.5" />
        <path d="M88 47c-2 0-7 2-10 6-3-1-10-1-15 1-2-5-7-7-7-7H14c-1 4 0 15 6 22 8 9 20 10 33 10 24 0 37-12 40-27 4-1 6-4 6-7 0-4-7-5-11-5z" />
        <circle cx="28" cy="58" r="2.5" fill="#0db7ed" />
      </g>
    </svg>
  );
}

export function DatadogLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#632CA6" />
      <rect x="22" y="24" width="56" height="52" rx="8" fill="#1E1035" stroke="#A78BFA" strokeWidth="2.5" />
      <path d="M22 62h56" stroke="#A78BFA" strokeWidth="1.5" />
      <circle cx="30" cy="70" r="2.5" fill="#10B981" />
      <circle cx="38" cy="70" r="2.5" fill="#10B981" />
      <path d="M26 44h10l5-12 8 24 6-16 5 4h14" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="70" cy="44" r="3" fill="#00F0FF" />
    </svg>
  );
}

export function getRoadmapLogo(stepIdentifier, className = "w-7 h-7") {
  const str = String(stepIdentifier || '').toLowerCase();
  
  if (str === '01' || str === '1' || str.includes('require') || str.includes('jira')) {
    return <JiraLogo className={className} />;
  }
  if (str === '02' || str === '2' || str.includes('strat') || str.includes('plan') || str.includes('miro')) {
    return <MiroLogo className={className} />;
  }
  if (str === '03' || str === '3' || str.includes('ui') || str.includes('ux') || str.includes('figma') || str.includes('design')) {
    return <FigmaLogo className={className} />;
  }
  if (str === '04' || str === '4' || str.includes('soft') || str.includes('dev') || str.includes('code')) {
    return <VsCodeLogo className={className} />;
  }
  if (str === '05' || str === '5' || str.includes('test') || str.includes('qa') || str.includes('postman')) {
    return <PostmanLogo className={className} />;
  }
  if (str === '06' || str === '6' || str.includes('deploy') || str.includes('docker') || str.includes('cloud')) {
    return <DockerLogo className={className} />;
  }
  if (str === '07' || str === '7' || str.includes('maint') || str.includes('support') || str.includes('datadog')) {
    return <DatadogLogo className={className} />;
  }
  
  return <VsCodeLogo className={className} />;
}

// Key Highlights of Our Services Real Logos
export function DeliveredSolutionsLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sol_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#sol_grad)" />
      {/* 3D Stack Layers */}
      <path d="M50 20L82 34 50 48 18 34 50 20z" fill="#ffffff" fillOpacity="0.95" />
      <path d="M18 45L50 59 82 45 74 41 50 51 26 41 18 45z" fill="#E0F2FE" />
      <path d="M18 59L50 73 82 59 74 55 50 65 26 55 18 59z" fill="#BAE6FD" />
      {/* Mini verified check on bottom right */}
      <circle cx="72" cy="72" r="14" fill="#10B981" stroke="#ffffff" strokeWidth="2.5" />
      <path d="M66 72l4 4 8-8" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InHouseToolsLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tools_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#tools_grad)" />
      {/* Terminal window */}
      <rect x="18" y="22" width="64" height="56" rx="10" fill="#0F172A" stroke="#C4B5FD" strokeWidth="2" />
      <circle cx="28" cy="30" r="2.5" fill="#EF4444" />
      <circle cx="36" cy="30" r="2.5" fill="#F59E0B" />
      <circle cx="44" cy="30" r="2.5" fill="#10B981" />
      {/* Code prompt & lightning */}
      <path d="M28 46l8 7-8 7" stroke="#A78BFA" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="42" y1="60" x2="54" y2="60" stroke="#FDE047" strokeWidth="2.8" strokeLinecap="round" />
      {/* Automation gear & lightning badge */}
      <circle cx="68" cy="52" r="14" fill="#F59E0B" stroke="#ffffff" strokeWidth="2" />
      <path d="M69 43l-6 10h5l-1 8 7-11h-5l1-7z" fill="#ffffff" />
    </svg>
  );
}

export function MultiDomainLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="domain_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#domain_grad)" />
      {/* Globe & Network Nodes */}
      <circle cx="50" cy="50" r="28" stroke="#ffffff" strokeWidth="2.5" fill="#047857" fillOpacity="0.4" />
      <ellipse cx="50" cy="50" rx="13" ry="28" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="22" y1="50" x2="78" y2="50" stroke="#ffffff" strokeWidth="2" />
      <line x1="28" y1="36" x2="72" y2="36" stroke="#ffffff" strokeWidth="1.8" />
      <line x1="28" y1="64" x2="72" y2="64" stroke="#ffffff" strokeWidth="1.8" />
      {/* Satellite orbit nodes */}
      <circle cx="30" cy="30" r="5" fill="#38BDF8" stroke="#ffffff" strokeWidth="2" />
      <circle cx="70" cy="30" r="5" fill="#FDE047" stroke="#ffffff" strokeWidth="2" />
      <circle cx="72" cy="68" r="5" fill="#F43F5E" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}

export function DocumentationLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="doc_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#doc_grad)" />
      {/* Document Sheet */}
      <path d="M28 20h30l16 16v44a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V24a4 4 0 0 1 4-4z" fill="#ffffff" />
      <path d="M58 20v14a2 2 0 0 0 2 2h14" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
      {/* Code / Docs Lines */}
      <line x1="34" y1="44" x2="52" y2="44" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
      <line x1="34" y1="52" x2="66" y2="52" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="34" y1="60" x2="60" y2="60" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="34" y1="68" x2="48" y2="68" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      {/* 100% Stamp Badge */}
      <circle cx="68" cy="70" r="12" fill="#10B981" stroke="#ffffff" strokeWidth="2" />
      <path d="M64 70l3 3 6-6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Support247Logo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sup_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D9488" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#sup_grad)" />
      {/* Headset Arc */}
      <path d="M30 52c0-11 9-20 20-20s20 9 20 20v12c0 2-2 4-4 4h-2a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h2V52c0-9-7-16-16-16s-16 7-16 16v4h2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-2c-2 0-4-2-4-4V52z" fill="#ffffff" />
      {/* Mic Boom */}
      <path d="M66 64v6a6 6 0 0 1-6 6H54" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="52" cy="76" r="3" fill="#FDE047" />
      {/* 24/7 text pill */}
      <rect x="22" y="16" width="32" height="15" rx="6" fill="#F59E0B" />
      <text x="38" y="27" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">24/7</text>
    </svg>
  );
}

export function GlobalClientsLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glob_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EA580C" />
          <stop offset="1" stopColor="#C2410C" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#glob_grad)" />
      {/* Worldwide Enterprise Map & Flight Routes */}
      <circle cx="50" cy="50" r="30" fill="#9A3412" stroke="#FED7AA" strokeWidth="2.2" />
      <ellipse cx="50" cy="50" rx="14" ry="30" stroke="#FED7AA" strokeWidth="1.8" strokeDasharray="3 2" />
      <line x1="20" y1="50" x2="80" y2="50" stroke="#FED7AA" strokeWidth="1.8" />
      {/* Connection flight arc */}
      <path d="M32 40Q50 20 68 38" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="4 3" fill="none" />
      <circle cx="32" cy="40" r="4.5" fill="#38BDF8" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="68" cy="38" r="4.5" fill="#FDE047" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="50" cy="62" r="5" fill="#10B981" stroke="#ffffff" strokeWidth="2" />
      <path d="M42 56Q50 68 58 56" stroke="#ffffff" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function getHighlightLogo(indexOrKey, className = "w-7 h-7") {
  const str = String(indexOrKey !== undefined ? indexOrKey : '').toLowerCase();
  
  if (str === '0' || str.includes('50') || str.includes('software') || str.includes('deliver') || str.includes('layers')) {
    return <DeliveredSolutionsLogo className={className} />;
  }
  if (str === '1' || str.includes('20') || str.includes('tool') || str.includes('wrench') || str.includes('efficien')) {
    return <InHouseToolsLogo className={className} />;
  }
  if (str === '2' || str.includes('domain') || str.includes('comprehens') || str.includes('globe')) {
    return <MultiDomainLogo className={className} />;
  }
  if (str === '3' || str.includes('doc') || str.includes('file') || str.includes('100%')) {
    return <DocumentationLogo className={className} />;
  }
  if (str === '4' || str.includes('24/7') || str.includes('support') || str.includes('clock') || str.includes('custom')) {
    return <Support247Logo className={className} />;
  }
  if (str === '5' || str.includes('global') || str.includes('domestic') || str.includes('sparkle') || str.includes('client')) {
    return <GlobalClientsLogo className={className} />;
  }
  
  return <DeliveredSolutionsLogo className={className} />;
}

// 7 Promises to Businesses Real Logos
export function CustomDevPromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cd_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#cd_grad)" />
      {/* Code window with sliders & brackets */}
      <rect x="18" y="22" width="64" height="56" rx="8" fill="#0F172A" stroke="#7DD3FC" strokeWidth="2" />
      <circle cx="28" cy="30" r="2.5" fill="#EF4444" />
      <circle cx="36" cy="30" r="2.5" fill="#F59E0B" />
      <circle cx="44" cy="30" r="2.5" fill="#10B981" />
      <path d="M34 50L26 58l8 8M46 68l8-20M66 50l8 8-8 8" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ScalableCloudPromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sc_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#sc_grad)" />
      {/* Upward Growth Bars & Arrow */}
      <rect x="22" y="56" width="10" height="22" rx="2" fill="#ffffff" fillOpacity="0.8" />
      <rect x="36" y="44" width="10" height="34" rx="2" fill="#ffffff" fillOpacity="0.9" />
      <rect x="50" y="32" width="10" height="46" rx="2" fill="#ffffff" />
      <rect x="64" y="20" width="10" height="58" rx="2" fill="#FDE047" />
      <path d="M22 52L46 32l16 12 18-24M80 20h-12M80 20v12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SecurityShieldPromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sec_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#312E81" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#sec_grad)" />
      {/* Security Shield & Lock */}
      <path d="M50 18L26 28v22c0 16 10 30 24 34 14-4 24-18 24-34V28L50 18z" fill="#1E1B4B" stroke="#A5B4FC" strokeWidth="2.5" />
      <rect x="42" y="48" width="16" height="12" rx="3" fill="#F59E0B" />
      <path d="M46 48v-4a4 4 0 0 1 8 0v4" stroke="#FDE047" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="54" r="1.5" fill="#ffffff" />
    </svg>
  );
}

export function SystemIntegrationPromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="int_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#5B21B6" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#int_grad)" />
      {/* Interconnected System Nodes */}
      <circle cx="50" cy="50" r="12" fill="#ffffff" />
      <circle cx="50" cy="50" r="6" fill="#7C3AED" />
      <circle cx="24" cy="30" r="8" fill="#38BDF8" stroke="#ffffff" strokeWidth="2" />
      <circle cx="76" cy="30" r="8" fill="#F59E0B" stroke="#ffffff" strokeWidth="2" />
      <circle cx="24" cy="70" r="8" fill="#10B981" stroke="#ffffff" strokeWidth="2" />
      <circle cx="76" cy="70" r="8" fill="#EC4899" stroke="#ffffff" strokeWidth="2" />
      <line x1="30" y1="34" x2="42" y2="44" stroke="#C4B5FD" strokeWidth="2.5" strokeDasharray="3 2" />
      <line x1="70" y1="34" x2="58" y2="44" stroke="#C4B5FD" strokeWidth="2.5" strokeDasharray="3 2" />
      <line x1="30" y1="66" x2="42" y2="56" stroke="#C4B5FD" strokeWidth="2.5" strokeDasharray="3 2" />
      <line x1="70" y1="66" x2="58" y2="56" stroke="#C4B5FD" strokeWidth="2.5" strokeDasharray="3 2" />
    </svg>
  );
}

export function UserExperiencePromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ux_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EA580C" />
          <stop offset="1" stopColor="#C2410C" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#ux_grad)" />
      {/* Intuitive UI Wireframe & Cursor */}
      <rect x="20" y="22" width="60" height="56" rx="8" fill="#1E293B" stroke="#FED7AA" strokeWidth="2" />
      <rect x="26" y="28" width="48" height="12" rx="3" fill="#334155" />
      <rect x="26" y="46" width="22" height="24" rx="3" fill="#F97316" />
      <rect x="52" y="46" width="22" height="24" rx="3" fill="#38BDF8" />
      {/* Floating interactive cursor */}
      <path d="M58 56l14 14-4 2 3 6-3 1-3-6-4 4V56z" fill="#ffffff" stroke="#0F172A" strokeWidth="1.5" />
    </svg>
  );
}

export function QualityAssurancePromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="qa_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#qa_grad)" />
      {/* QA Test Board & Green Passed Check */}
      <rect x="22" y="20" width="56" height="60" rx="8" fill="#ffffff" />
      <line x1="32" y1="34" x2="48" y2="34" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="46" x2="52" y2="46" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="58" x2="44" y2="58" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="62" cy="34" r="4.5" fill="#10B981" />
      <circle cx="62" cy="46" r="4.5" fill="#10B981" />
      <circle cx="62" cy="58" r="4.5" fill="#10B981" />
      {/* Verified Stamp Badge */}
      <circle cx="70" cy="70" r="14" fill="#0284C7" stroke="#ffffff" strokeWidth="2" />
      <path d="M64 70l4 4 8-8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SupportMaintenancePromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sm_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#sm_grad)" />
      {/* Continuous Support Lifecycle Gear & Lifebuoy */}
      <circle cx="50" cy="50" r="26" stroke="#ffffff" strokeWidth="8" fill="none" />
      <circle cx="50" cy="50" r="12" fill="#0F172A" />
      <path d="M50 24v8M50 68v8M24 50h8M68 50h8" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="50" r="4" fill="#10B981" />
    </svg>
  );
}

// 4 Student Assurances Real Logos
export function CurriculumStudentPromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cur_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#cur_grad)" />
      {/* Open Syllabus Book with Star */}
      <path d="M22 68c8-6 18-6 28 0V30c-10-6-20-6-28 0v38z" fill="#ffffff" fillOpacity="0.9" />
      <path d="M78 68c-8-6-18-6-28 0V30c10-6 20-6 28 0v38z" fill="#ffffff" />
      <circle cx="50" cy="24" r="8" fill="#FDE047" stroke="#ffffff" strokeWidth="2" />
      <path d="M50 20l2 3.5 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5z" fill="#D97706" />
    </svg>
  );
}

export function PracticalLabStudentPromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lab_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#lab_grad)" />
      {/* Laptop & Live Terminal */}
      <rect x="22" y="24" width="56" height="38" rx="4" fill="#0F172A" stroke="#A7F3D0" strokeWidth="2" />
      <path d="M30 38l6 5-6 5" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="42" y1="48" x2="52" y2="48" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 66h72c2 0 3 2 2 4l-4 6H16l-4-6c-1-2 0-4 2-4z" fill="#E2E8F0" />
    </svg>
  );
}

export function SkillDevelopmentStudentPromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sk_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D97706" />
          <stop offset="1" stopColor="#92400E" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#sk_grad)" />
      {/* Skill Growth Lightning & Trophy */}
      <circle cx="50" cy="50" r="28" fill="#78350F" stroke="#FDE68A" strokeWidth="2" />
      <path d="M52 22L34 50h16l-4 28 22-34H52l4-22z" fill="#FDE047" stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  );
}

export function CareerMentorshipStudentPromiseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cm_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#4C1D95" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#cm_grad)" />
      {/* Career Compass & Navigation */}
      <circle cx="50" cy="50" r="28" stroke="#DDD6FE" strokeWidth="2.5" fill="#2E1065" />
      <path d="M50 26l8 16 16 8-16 8-8 16-8-16-16-8 16-8 8-16z" fill="#F59E0B" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="4" fill="#ffffff" />
    </svg>
  );
}

export function getPromiseLogo(promiseIdOrIndex, isStudent = false, className = "w-7 h-7") {
  const str = String(promiseIdOrIndex !== undefined ? promiseIdOrIndex : '').toLowerCase();

  if (isStudent) {
    if (str === '0' || str.includes('curriculum') || str.includes('industry')) {
      return <CurriculumStudentPromiseLogo className={className} />;
    }
    if (str === '1' || str.includes('practical') || str.includes('training') || str.includes('laptop')) {
      return <PracticalLabStudentPromiseLogo className={className} />;
    }
    if (str === '2' || str.includes('skill') || str.includes('development') || str.includes('zap')) {
      return <SkillDevelopmentStudentPromiseLogo className={className} />;
    }
    if (str === '3' || str.includes('career') || str.includes('guidance') || str.includes('mentor') || str.includes('compass')) {
      return <CareerMentorshipStudentPromiseLogo className={className} />;
    }
    return <CurriculumStudentPromiseLogo className={className} />;
  }

  // Business Promises
  if (str === '0' || str.includes('custom') || str.includes('sliders')) {
    return <CustomDevPromiseLogo className={className} />;
  }
  if (str === '1' || str.includes('scalable') || str.includes('future') || str.includes('trending')) {
    return <ScalableCloudPromiseLogo className={className} />;
  }
  if (str === '2' || str.includes('security') || str.includes('data') || str.includes('lock')) {
    return <SecurityShieldPromiseLogo className={className} />;
  }
  if (str === '3' || str.includes('integration') || str.includes('system') || str.includes('shuffle')) {
    return <SystemIntegrationPromiseLogo className={className} />;
  }
  if (str === '4' || str.includes('user') || str.includes('design') || str.includes('friendly') || str.includes('smile')) {
    return <UserExperiencePromiseLogo className={className} />;
  }
  if (str === '5' || str.includes('timely') || str.includes('quality') || str.includes('delivery') || str.includes('check')) {
    return <QualityAssurancePromiseLogo className={className} />;
  }
  if (str === '6' || str.includes('ongoing') || str.includes('support') || str.includes('maintenance') || str.includes('buoy')) {
    return <SupportMaintenancePromiseLogo className={className} />;
  }

  return <CustomDevPromiseLogo className={className} />;
}

// Infinite Tech Marquee Component for Social Proof & Stacks
export function TechMarqueeTicker({ title = "Trusted by 50+ Enterprises & Powered by Modern Tech Stacks" }) {
  const techItems = [
    { name: "Python", icon: <PythonLogo className="w-5 h-5" />, color: "border-blue-500/30 text-blue-600 dark:text-blue-400" },
    { name: "React.js", icon: <ReactLogo className="w-5 h-5" />, color: "border-cyan-500/30 text-cyan-600 dark:text-cyan-400" },
    { name: "Java", icon: <JavaLogo className="w-5 h-5" />, color: "border-amber-500/30 text-amber-600 dark:text-amber-400" },
    { name: "Spring Boot", icon: <SpringBootLogo className="w-5 h-5" />, color: "border-green-500/30 text-green-600 dark:text-green-400" },
    { name: "Node.js", icon: <MernStackLogo className="w-5 h-5" />, color: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400" },
    { name: "AWS Cloud", icon: <CloudServiceLogo className="w-5 h-5" />, color: "border-orange-500/30 text-orange-600 dark:text-orange-400" },
    { name: "Data Structures", icon: <DsaLogo className="w-5 h-5" />, color: "border-purple-500/30 text-purple-600 dark:text-purple-400" },
    { name: "AI & ML", icon: <AiMlLogo className="w-5 h-5" />, color: "border-pink-500/30 text-pink-600 dark:text-pink-400" },
    { name: "DevOps & CI/CD", icon: <DevopsServiceLogo className="w-5 h-5" />, color: "border-indigo-500/30 text-indigo-600 dark:text-indigo-400" },
    { name: "Database Systems", icon: <DatabaseServiceLogo className="w-5 h-5" />, color: "border-teal-500/30 text-teal-600 dark:text-teal-400" }
  ];

  return (
    <div className="w-full py-6 sm:py-8 overflow-hidden">
      {title && (
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-5">
          {title}
        </p>
      )}
      <div className="marquee-container">
        <div className="marquee-content animate-marquee">
          {techItems.map((tech, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border ${tech.color} shadow-sm backdrop-blur-md shrink-0`}
            >
              {tech.icon}
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="marquee-content animate-marquee" aria-hidden="true">
          {techItems.map((tech, idx) => (
            <div
              key={`dup-${idx}`}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border ${tech.color} shadow-sm backdrop-blur-md shrink-0`}
            >
              {tech.icon}
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
