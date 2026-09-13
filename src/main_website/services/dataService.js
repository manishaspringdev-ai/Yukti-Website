import { IS_FIREBASE_ENABLED, getFirebaseDB } from './firebaseConfig';

export const DEFAULT_SITE_DATA = {
  variants: {
    themePreset: 'yuktiEmerald',
    navbarVariant: 'v5_gradientBanner',
    dropdownVariant: 'v1_megaSplit',
    heroVariant: 'v1_neosaas',
    servicesVariant: 'v1_tabs',
    trainingVariant: 'v1_bento',
    roadmapVariant: 'v1_timeline',
    teamVariant: 'v2_bentoLeadership',
    testimonialsVariant: 'v1_dualFilter',
    contactVariant: 'v1_dualMode',
    footerVariant: 'v1_rextonEnterprise'
  },
  company: {
    name: 'Yukti Software Private Limited',
    tagline: 'Enterprise Software Engineering & Career-Accelerating Tech Training',
    address: '2nd Floor, Om Tower, Alpha 1 Commercial Belt, Greater Noida, UP 201308',
    phone: '+91 99102 44342',
    email: 'contact@yuktisoftware.com',
    whatsapp: 'https://wa.me/919910244342',
    rating: 4.9,
    reviewsCount: 380,
    established: '2019'
  },
  stats: [
    { id: 's1', label: 'Uptime & Cloud SLA', value: '99.98%', desc: 'Fault-tolerant distributed microservices' },
    { id: 's2', label: 'Engineers Placed', value: '1,500+', desc: 'In top product firms & global MNCs' },
    { id: 's3', label: 'Enterprise Projects', value: '85+', desc: 'Delivered across US, UK & India' },
    { id: 's4', label: 'Average CTC Hike', value: '145%', desc: 'Verified career transformation rate' }
  ],
  services: [
    {
      id: 'custom-software',
      title: 'Enterprise Custom Software',
      shortDesc: 'Scalable cloud architectures, distributed backend APIs, and microservices.',
      deliverables: ['Cloud-Native Architecture', 'High-Throughput APIs', 'SOC2/ISO Security', 'CI/CD Pipelines'],
      techStack: ['Node.js', 'Go', 'Python', 'AWS', 'Kubernetes', 'PostgreSQL'],
      sla: '< 150ms P99 Latency & 99.99% Availability Commitment'
    },
    {
      id: 'ai-ml-solutions',
      title: 'AI & Data Engineering',
      shortDesc: 'Custom LLM agents, retrieval augmented generation (RAG), and predictive models.',
      deliverables: ['Fine-Tuned LLM Pipelines', 'Vector Embeddings & Semantic Search', 'Automated ETL Data Lakes', 'Model Monitoring'],
      techStack: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Pinecone', 'Docker'],
      sla: '99.2% Inference Accuracy & Automated Retraining Loops'
    },
    {
      id: 'fullstack-web-mobile',
      title: 'Next-Gen Web & Mobile Apps',
      shortDesc: 'Ultra-fast web platforms and native iOS/Android applications built for scale.',
      deliverables: ['React & Next.js Frontends', 'React Native / Flutter Mobile', 'Real-Time WebSockets', 'Sub-Second Page Loads'],
      techStack: ['React', 'Next.js', 'React Native', 'TailwindCSS', 'GraphQL', 'Redis'],
      sla: 'Core Web Vitals 95+ Score & Instant Offline Sync'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps & SRE',
      shortDesc: 'Zero-downtime migrations, infrastructure as code (IaC), and automated security.',
      deliverables: ['Terraform & Pulumi IaC', 'Kubernetes Orchestration', 'Zero-Trust IAM Security', '24/7 SRE Telemetry'],
      techStack: ['AWS', 'GCP', 'Terraform', 'Docker', 'Prometheus', 'Grafana'],
      sla: 'Zero-Downtime Blue/Green Canary Deployments'
    }
  ],
  courses: [
    {
      id: 'python-ai',
      title: 'Python, Data Science & AI Mastery',
      duration: '4 Months (16 Weeks)',
      level: 'Beginner to Advanced',
      avgSalary: '6.5 - 16 LPA',
      hiringRate: '96%',
      badge: 'Bestseller',
      highlight: 'Live Agentic AI & Deep Learning Capstone Projects',
      features: [
        'Core & Advanced Python 3.12 with OOP Architecture',
        'NumPy, Pandas & Exploratory Data Analysis',
        'Scikit-Learn, PyTorch & Deep Neural Networks',
        'Generative AI, LangChain & Agentic LLMs',
        '100% Guaranteed Placement Support & Mock Interviews'
      ]
    },
    {
      id: 'java-fullstack',
      title: 'Java Full Stack & Microservices',
      duration: '5 Months (20 Weeks)',
      level: 'Career Launchpad',
      avgSalary: '7.5 - 18 LPA',
      hiringRate: '98%',
      badge: 'High Placement',
      highlight: 'Enterprise Spring Boot 3 & React 18 Production Architecture',
      features: [
        'Core Java 21, JVM Internals & Multithreading Systems',
        'Spring Boot 3 & Distributed Microservices',
        'React 18, Redux Toolkit & TailwindCSS',
        'Docker, Kubernetes, Kafka & AWS Deployment',
        'Real-World FinTech Banking Engine Capstone'
      ]
    },
    {
      id: 'dsa-system-design',
      title: 'DSA & System Design for FAANG',
      duration: '3.5 Months (14 Weeks)',
      level: 'Intermediate to Pro',
      avgSalary: '12 - 28 LPA',
      hiringRate: '95%',
      badge: 'Top Tier Package',
      highlight: 'Crack Top Tier Product Companies (Google, Amazon, Microsoft)',
      features: [
        '350+ LeetCode Medium/Hard Problem Solving with Optimal Time/Space',
        'Dynamic Programming, Graphs, Tries & Trees',
        'Low Level Design (LLD & SOLID Principles)',
        'High Level Design (HLD: Sharding, Caching, CAP)',
        '1-on-1 Mock Interviews with MAANG Mentors'
      ]
    }
  ],
  team: [
    {
      id: 't1',
      name: 'Er. Sandeep Kumar',
      role: 'Founder & Chief Technology Officer',
      exp: '14+ Years Industry Leadership',
      bio: 'Ex-Principal Cloud Architect leading distributed transformations and mentoring 5,000+ engineers into Tier-1 product firms.',
      specialty: 'Distributed Systems & Cloud Architecture',
      linkedin: 'https://linkedin.com',
      avatarBg: 'from-brand-600 to-emerald-700'
    },
    {
      id: 't2',
      name: 'Er. Priya Sharma',
      role: 'Head of AI & Data Engineering',
      exp: '10+ Years in Machine Learning',
      bio: 'Pioneering LLM agent workflows, production RAG data lakes, and generative AI systems for Fortune 500 enterprises.',
      specialty: 'Deep Learning & Agentic LLMs',
      linkedin: 'https://linkedin.com',
      avatarBg: 'from-purple-600 to-indigo-700'
    },
    {
      id: 't3',
      name: 'Er. Rohit Verma',
      role: 'Lead Full Stack & Microservices Mentor',
      exp: '8+ Years in Spring Boot & React',
      bio: 'Enterprise systems specialist focusing on event-driven streaming, high-throughput microservices, and React performance.',
      specialty: 'Spring Boot 3, React 18 & Kafka',
      linkedin: 'https://linkedin.com',
      avatarBg: 'from-blue-600 to-cyan-700'
    },
    {
      id: 't4',
      name: 'Er. Ananya Gupta',
      role: 'Head of Career Services & Placement',
      exp: '7+ Years in Corporate Hiring',
      bio: 'Connecting talent with 150+ hiring partners across Noida, Gurugram, Bengaluru, Hyderabad, and global tech hubs.',
      specialty: 'FAANG Interview Strategy & Placements',
      linkedin: 'https://linkedin.com',
      avatarBg: 'from-amber-600 to-orange-700'
    }
  ],
  googleReviews: [
    {
      id: 'r1',
      author: 'Aman Deep Singh',
      role: 'Software Engineer at PayTM',
      rating: 5,
      date: '2 weeks ago',
      content: 'Yukti Software completely changed my career trajectory. The Java Full Stack course is directly aligned with what top companies ask in interviews. Cracked PayTM with a 12 LPA package!',
      verified: true
    },
    {
      id: 'r2',
      author: 'Sneha Srivastava',
      role: 'Data Scientist at Fractal Analytics',
      rating: 5,
      date: '1 month ago',
      content: 'The Python & AI curriculum is top notch. Sandeep Sir and Priya Maam explain complex math and neural networks in such an intuitive manner. 10/10 recommend to anyone looking for real practical skills.',
      verified: true
    },
    {
      id: 'r3',
      author: 'Vikas Mishra',
      role: 'Backend Developer at Nagarro',
      rating: 5,
      date: '3 weeks ago',
      content: 'Best tech training institute in Greater Noida. The lab infrastructure, 1-on-1 doubt clearing, and mock interviews gave me the confidence to clear Nagarro in the first attempt.',
      verified: true
    },
    {
      id: 'r4',
      author: 'Pooja Rawat',
      role: 'Cloud Engineer at HCL Tech',
      rating: 5,
      date: '1 month ago',
      content: 'Great mentors and transparent guidance. The real project experience on AWS and Docker was pure gold during corporate selection rounds.',
      verified: true
    }
  ],
  placements: [
    { id: 'p1', name: 'Rahul Joshi', company: 'TCS Digital', package: '8.5 LPA', course: 'Java Full Stack' },
    { id: 'p2', name: 'Kritika Roy', company: 'Infosys Power Programmer', package: '9.5 LPA', course: 'DSA & Python' },
    { id: 'p3', name: 'Deepak Yadav', company: 'Wipro Turbo', package: '7.5 LPA', course: 'Full Stack' },
    { id: 'p4', name: 'Shreya Kapoor', company: 'Zomato', package: '14.0 LPA', course: 'DSA & System Design' },
    { id: 'p5', name: 'Nikhil Chauhan', company: 'Tech Mahindra', package: '6.8 LPA', course: 'Python AI' },
    { id: 'p6', name: 'Anjali Tomar', company: 'Optum HealthTech', package: '11.5 LPA', course: 'Java Microservices' }
  ]
};

const STORAGE_KEY = 'yukti_dynamic_site_data';

export const SiteDataService = {
  getSiteData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Error reading stored site data:', e);
    }
    return DEFAULT_SITE_DATA;
  },

  saveSiteData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('yukti_site_data_updated'));
      }
    } catch (e) {
      console.error('Error saving site data:', e);
    }
  },

  // Team Management
  addTeamMember(member) {
    const data = this.getSiteData();
    const newMember = { ...member, id: 't_' + Date.now() };
    data.team = [...data.team, newMember];
    this.saveSiteData(data);
    return newMember;
  },

  updateTeamMember(id, updated) {
    const data = this.getSiteData();
    data.team = data.team.map(m => m.id === id ? { ...m, ...updated } : m);
    this.saveSiteData(data);
  },

  deleteTeamMember(id) {
    const data = this.getSiteData();
    data.team = data.team.filter(m => m.id !== id);
    this.saveSiteData(data);
  },

  // Courses Management
  addCourse(course) {
    const data = this.getSiteData();
    const newCourse = { ...course, id: 'c_' + Date.now() };
    data.courses = [...data.courses, newCourse];
    this.saveSiteData(data);
    return newCourse;
  },

  updateCourse(id, updated) {
    const data = this.getSiteData();
    data.courses = data.courses.map(c => c.id === id ? { ...c, ...updated } : c);
    this.saveSiteData(data);
  },

  deleteCourse(id) {
    const data = this.getSiteData();
    data.courses = data.courses.filter(c => c.id !== id);
    this.saveSiteData(data);
  },

  // Services Management
  addService(service) {
    const data = this.getSiteData();
    const newService = { ...service, id: 's_' + Date.now() };
    data.services = [...data.services, newService];
    this.saveSiteData(data);
    return newService;
  },

  updateService(id, updated) {
    const data = this.getSiteData();
    data.services = data.services.map(s => s.id === id ? { ...s, ...updated } : s);
    this.saveSiteData(data);
  },

  deleteService(id) {
    const data = this.getSiteData();
    data.services = data.services.filter(s => s.id !== id);
    this.saveSiteData(data);
  },

  // Reviews & Placements
  addReview(review) {
    const data = this.getSiteData();
    const newRev = { ...review, id: 'r_' + Date.now(), date: 'Just now' };
    data.googleReviews = [newRev, ...data.googleReviews];
    this.saveSiteData(data);
    return newRev;
  },

  deleteReview(id) {
    const data = this.getSiteData();
    data.googleReviews = data.googleReviews.filter(r => r.id !== id);
    this.saveSiteData(data);
  },

  addPlacement(placement) {
    const data = this.getSiteData();
    const newPlac = { ...placement, id: 'p_' + Date.now() };
    data.placements = [newPlac, ...data.placements];
    this.saveSiteData(data);
    return newPlac;
  },

  deletePlacement(id) {
    const data = this.getSiteData();
    data.placements = data.placements.filter(p => p.id !== id);
    this.saveSiteData(data);
  },

  // Variants & Theme configuration
  updateVariants(variants) {
    const data = this.getSiteData();
    data.variants = { ...data.variants, ...variants };
    this.saveSiteData(data);
  },

  // Inquiries / Leads inbox
  getInquiries() {
    try {
      return JSON.parse(localStorage.getItem('yukti_inquiries') || '[]');
    } catch {
      return [];
    }
  },

  updateInquiryStatus(id, status) {
    const inqs = this.getInquiries().map(item => item.id === id ? { ...item, status } : item);
    localStorage.setItem('yukti_inquiries', JSON.stringify(inqs));
    if (typeof window !== 'undefined') window.dispatchEvent(new Event('yukti_site_data_updated'));
  },

  deleteInquiry(id) {
    const inqs = this.getInquiries().filter(item => item.id !== id);
    localStorage.setItem('yukti_inquiries', JSON.stringify(inqs));
    if (typeof window !== 'undefined') window.dispatchEvent(new Event('yukti_site_data_updated'));
  },

  submitContactInquiry(formData) {
    const inquiries = this.getInquiries();
    const newInquiry = { 
      ...formData, 
      id: 'inq_' + Date.now(), 
      timestamp: new Date().toISOString(),
      status: 'New Lead'
    };
    inquiries.unshift(newInquiry);
    localStorage.setItem('yukti_inquiries', JSON.stringify(inquiries));
    if (typeof window !== 'undefined') window.dispatchEvent(new Event('yukti_site_data_updated'));
    return { success: true, id: newInquiry.id };
  },

  resetToDefaults() {
    localStorage.removeItem(STORAGE_KEY);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('yukti_site_data_updated'));
    }
    return DEFAULT_SITE_DATA;
  }
};
