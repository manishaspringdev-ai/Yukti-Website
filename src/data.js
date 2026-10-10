import { docxPagesData } from './data/pagesDataFromDocs';

// Team Member Assets
import founderImg from './assets/Team/founder.png';
import ctoImg from './assets/Team/cto1.jpg';
import sanjaySirImg from './assets/Team/sanjaySir.fe65690bca6d0465ee61.jpg';
import dev1Img from './assets/Team/developer1.png';
import dev2Img from './assets/Team/developer2.jpeg';
import utkarshImg from './assets/Team/utkarsh.dfbe1ae535f996acbaa2.jpg';
import nileshImg from './assets/Team/nilesh.fe4955ba947ac207c6a0.png';
import diptiImg from './assets/Team/dipti.8eefdb34cb4ba96b203e.png';
import santhoshImg from './assets/Team/SanthoshShankarImage.ca78a23dd42492ac0278.jpeg';
import ashuImg from './assets/Team/ashu_rai.331749747d877ccc11ff.jpeg';

export { 
  docxPagesData, 
  founderImg, 
  ctoImg, 
  sanjaySirImg, 
  dev1Img, 
  dev2Img, 
  utkarshImg, 
  nileshImg, 
  diptiImg, 
  santhoshImg, 
  ashuImg 
};

export const siteData = {
  brand: {
    name: "Yukti Software",
    shortName: "Yukti",
    logo: "/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg",
    logoFull: "/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg",
    logoSvg: "/Yukti_Logo.e50a033331c232b30a3976a6b8518a52.svg",
    tagline: "Optimized Software Solutions and Advanced Training",
    subTagline: "Bringing Efficiency, Profitability, and Better ROI Through Customized Software Solutions.",
    foundedYear: "2014",
    email: "contact@yuktisoftware.com",
    phone: "+91 95828 15419",
    whatsapp: "+919582815419",
    address: "503, MSX Tower 1, Alpha-1 Commercial Belt, Greater Noida, Uttar Pradesh 201310, India",
    shortAddress: "503, MSX Tower 1, Alpha 1, Greater Noida",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM (24/7 Dedicated Tech Support)",
    googleRating: 4.9,
    googleReviewCount: 128,
    socials: {
      linkedin: "https://linkedin.com/company/yukti-software",
      twitter: "https://twitter.com/yuktisoftware",
      github: "https://github.com/yukti-software",
      instagram: "https://instagram.com/yuktisoftware",
      facebook: "https://facebook.com/yuktisoftware"
    }
  },

  navigation: [
    { name: "Home", href: "#hero", page: "home" },
    { name: "About Us", href: "#about", page: "about" },
    { 
      name: "IT Courses", 
      page: "courses",
      hasDropdown: true,
      subItems: [
        { name: "Python Training (Greater Noida)", page: "course-python", badge: "Hot" },
        { name: "Java Full Stack Development", page: "course-java-fullstack", badge: "Popular" },
        { name: "Data Structures & Algorithms (DSA)", page: "course-dsa", badge: "Interview Prep" },
        { name: "All Career Tracks & Placements", page: "courses", badge: "94% Placed" }
      ]
    },
    { name: "Software Services", href: "#services", page: "home" },
    { name: "Delivery Roadmap", href: "#roadmap", page: "home" },
    { name: "Our Team", href: "#team", page: "home" },
    { name: "Google Reviews", href: "#reviews", page: "home" },
    { name: "Contact", href: "#consultation", page: "home" }
  ],

  hero: {
    badge: "Premier Software Solutions & IT Training Institute",
    title: "Software Solutions and Training by",
    titleHighlight: "Yukti Software",
    subtitle: "Bringing Efficiency, Profitability, and Better ROI Through Customized Software Solutions.",
    points: [
      { text: "Shaping the Future with Practical Courses and Placements", icon: "GraduationCap" },
      { text: "Proceed in the Right Direction with Our Expert Consultancy!", icon: "Compass" },
      { text: "Over 50+ Enterprise Software Solutions Delivered Globally", icon: "CheckCircle2" }
    ],
    primaryCta: { text: "Explore Software Services", href: "#services" },
    secondaryCta: { text: "Explore Job-Ready Courses", href: "#training" },
    consultationCta: { text: "Schedule Free Consultation", href: "#consultation" },
    metrics: [
      { label: "Solutions Delivered", value: "50+", suffix: "Projects" },
      { label: "Custom In-House Tools", value: "20+", suffix: "Efficiency Tools" },
      { label: "Placement Success", value: "94%", suffix: "Record" },
      { label: "Client Support", value: "24/7", suffix: "Dedicated" }
    ]
  },

  servicesSection: {
    badge: "Enterprise Grade Capabilities",
    title: "Software Development Services for Small, Medium, and Large Scale Businesses",
    description: "From modern frontend design to secure, high-speed backends and automated pipelines, we engineer software that propels your business forward.",
    services: [
      {
        id: "web-dev",
        title: "Web Development Services (Full Stack)",
        shortTitle: "Full Stack Web Development",
        tag: "Frontend & Backend",
        icon: "Globe",
        gradient: "from-blue-500 to-indigo-600",
        shortDesc: "End-to-end web applications with modern UI/UX, robust REST/GraphQL APIs, and high scalability.",
        description: "We offer web development services that are designed for elevating business and ensure your brand image is projected to your audience in the most time- and cost-efficient manner. From modern frontend design to highly secure and faster backend, get end-to-end web development solutions by Yukti Software.",
        highlights: [
          "Modern React, Next.js & Vue.js interfaces",
          "High-performance REST & GraphQL APIs",
          "Ultra-fast loading & SEO optimized architecture",
          "Scalable microservices backend"
        ]
      },
      {
        id: "mobile-dev",
        title: "Mobile App Development",
        shortTitle: "Mobile App Development",
        tag: "iOS & Android",
        icon: "Smartphone",
        gradient: "from-indigo-500 to-purple-600",
        shortDesc: "Cross-platform and native mobile apps tailored for high speed, sleek animations, and offline sync.",
        description: "Boost your business reach with our scalable mobile app development services. We build mobile applications for you that are personalized for your specific requirements and business model. Every mobile app at Yukti Software is designed and built following modern architecture to ensure high speed and performance.",
        highlights: [
          "Cross-platform Flutter & React Native apps",
          "Native iOS (Swift) & Android (Kotlin) development",
          "Offline-first sync & push notification systems",
          "Strict App Store & Play Store compliance"
        ]
      },
      {
        id: "database-services",
        title: "Database Services",
        shortTitle: "Database & Data Security",
        tag: "High Availability & Encryption",
        icon: "Database",
        gradient: "from-emerald-500 to-teal-600",
        shortDesc: "Encrypted, high-throughput SQL and NoSQL database architecture with automated failover.",
        description: "Let us assist you in keeping your confidential information secure and safe from malicious cyberattacks. Also, leverage the experience of Yukti Software to boost the speed of data processing by adopting modern data manipulation software tools. Focus on your core operations, while we handle the database configuration.",
        highlights: [
          "End-to-end database encryption & compliance",
          "High throughput indexing & query optimization",
          "Automated backup & disaster recovery routines",
          "SQL (PostgreSQL, MySQL) & NoSQL (MongoDB, Redis)"
        ]
      },
      {
        id: "cloud-integration",
        title: "Faster and Safer Cloud Integration",
        shortTitle: "Cloud Integration & Migration",
        tag: "AWS, Azure & GCP",
        icon: "Cloud",
        gradient: "from-cyan-500 to-blue-600",
        shortDesc: "Zero-downtime cloud migration, serverless design, dynamic autoscaling, and containerization.",
        description: "Cloud is the move forward, and Yukti Software is here to assist businesses in adopting cloud services with professional guidance and customized cloud integration services. Our experts will configure the cloud infrastructure according to the size, strength, and goals of your organization without disrupting your core operations.",
        highlights: [
          "Zero-downtime cloud migration roadmap",
          "Serverless architecture & containerization (Docker, K8s)",
          "Cost optimization & dynamic auto-scaling",
          "Multi-cloud resilience and disaster failover"
        ]
      },
      {
        id: "devops-services",
        title: "DevOps Services",
        shortTitle: "CI/CD & DevOps Automation",
        tag: "Continuous Delivery",
        icon: "Cpu",
        gradient: "from-amber-500 to-orange-600",
        shortDesc: "Automated CI/CD pipelines, Infrastructure as Code, 24/7 monitoring, and SLA maintenance.",
        description: "We have helped countless businesses and organizations improve their software delivery speed, along with improving the overall quality by a significant margin. Additionally, we will help you lower the operational cost, which directly impacts profitability. Our end-to-end DevOps services cover post-installation troubleshooting for long-term benefits.",
        highlights: [
          "Automated CI/CD pipelines (GitHub Actions, GitLab, Jenkins)",
          "Infrastructure as Code (Terraform, Ansible)",
          "Real-time monitoring, alerts & log aggregation",
          "Post-installation troubleshooting & SLA support"
        ]
      }
    ]
  },

  trainingSection: {
    badge: "Career Elevation & Skill Building",
    title: "Software Training Courses and Placements for the Youth",
    subtitle: "Giving young minds the right guidance to develop in-demand technical skills and secure dream career opportunities at top IT companies.",
    description: "Yukti Software is shaping up the future for young minds, giving them the right guidance to help them develop the right skills and find great career opportunities. The IT courses that we offer are carefully curated to cover the most in-demand programming languages and IT domains to help you start your career on a high note. In addition to offering high-level IT courses, Yukti Software also conducts placement drives that offer job opportunities at top IT companies.",
    features: [
      {
        title: "Advanced Lab Sessions",
        desc: "Advanced lab sessions for practical, hands-on education with real industry datasets and live servers.",
        icon: "Terminal"
      },
      {
        title: "Job-Oriented Courses",
        desc: "Curriculums mapped precisely to modern IT recruitment requirements and in-demand skills.",
        icon: "Briefcase"
      },
      {
        title: "Comprehensive Study Material",
        desc: "Exhaustive documentation, cheatsheets, code repositories, and project blueprints for all candidates.",
        icon: "BookOpen"
      },
      {
        title: "1-on-1 Doubt Sessions",
        desc: "Personalized mentorship and dedicated doubt-clearing sessions with senior software engineers.",
        icon: "Users"
      },
      {
        title: "Career Support & Placement",
        desc: "Profile evaluation, resume building, mock interviews, and guaranteed placement drive access.",
        icon: "Award"
      },
      {
        title: "Transparent & No Hidden Fees",
        desc: "Clear upfront fee structure with flexible installment options and zero hidden costs.",
        icon: "ShieldCheck"
      }
    ],
    courses: [
      {
        id: "python-training",
        name: "Complete Python Training Course (Greater Noida)",
        title: "Complete Python Training Course",
        duration: "4 - 6 Months",
        level: "Beginner to Advanced",
        tag: "Highest Placements",
        pageKey: "course-python",
        description: "Hands-on Python training covering OOP, Data Structures, Flask/Django, Automation, and Data Analytics.",
        topics: ["Python Fundamentals", "OOP Concepts", "Data Structures", "Flask & Django", "Automation & Web Scraping", "Data Analysis (NumPy/Pandas)"],
        placementStat: "95% Placed",
        avgPackage: "₹4.5 - ₹10 LPA"
      },
      {
        id: "java-fullstack",
        name: "Java Full Stack Development Course",
        title: "Java Full Stack Development",
        duration: "5 - 6 Months",
        level: "Beginner to Pro",
        tag: "Enterprise Standard",
        pageKey: "course-java-fullstack",
        description: "Master React.js frontend, Spring Boot backend, Microservices, Hibernate ORM, and MySQL database architecture.",
        topics: ["HTML5/CSS3 & React.js", "Core & Advanced Java", "Spring Boot & REST APIs", "Hibernate ORM", "MySQL Database", "Cloud Deployment"],
        placementStat: "96% Placed",
        avgPackage: "₹5.0 - ₹12 LPA"
      },
      {
        id: "dsa-course",
        name: "Data Structures and Algorithms (DSA) Course",
        title: "Data Structures & Algorithms (DSA)",
        duration: "3 - 4 Months",
        level: "All Levels (Interview Focused)",
        tag: "Product & FAANG Crack",
        pageKey: "course-dsa",
        description: "Comprehensive problem solving across Arrays, Trees, Dynamic Programming, Graphs, and System Design interviews.",
        topics: ["Time/Space Complexity", "Recursion & Backtracking", "Trees & Graphs", "Dynamic Programming", "System Design", "LeetCode Mock Drills"],
        placementStat: "94% Placed",
        avgPackage: "₹6.0 - ₹16 LPA"
      },
      {
        id: "data-science-ai",
        name: "Data Science & Artificial Intelligence",
        title: "Data Science & AI / ML",
        duration: "6 Months",
        level: "Beginner to Advanced",
        tag: "Future-Ready Tech",
        pageKey: "courses",
        description: "Practical data science covering Machine Learning, Deep Learning, NLP, Power BI, and real-time model deployment.",
        topics: ["Python & Statistics", "Pandas & Scikit-Learn", "Deep Learning & Neural Networks", "NLP & LLM Prompting", "Power BI / Tableau", "MLOps"],
        placementStat: "96% Placed",
        avgPackage: "₹6.5 - ₹14 LPA"
      }
    ]
  },

  /* ========================================================================= */
  /* NEW DEDICATED COURSE DETAILED DATA (FROM 3 NEW DOCS) */
  /* ========================================================================= */
  coursesData: {
    python: {
      id: "course-python",
      metaTitle: "Python Training Institute in Greater Noida | Yukti Software",
      title: "Complete Python Training Course in Greater Noida",
      badge: "Industry Certified Track • 100% Placement Support",
      heroDesc: "Master Python programming from scratch to advanced web development, automation, and data analytics with live industry projects and personalized mentorship at the leading Python training institute in Greater Noida.",
      duration: "4 to 6 Months (Flexible Weekday & Weekend Batches)",
      batchTimings: "Morning (10:00 AM), Afternoon (02:00 PM), Evening (06:00 PM)",
      avgSalary: "₹4.5 – ₹10 LPA",
      highestSalary: "₹14.0 LPA",
      mode: "Classroom (Greater Noida) & Live Interactive Online",
      overview: "At Yukti Software, we strongly believe that learning Python should be practical, interactive, and focused on building your career rather than being theoretical in nature. The Python Training Course offered by our Python training institute Greater Noida aims to equip you with the necessary Python programming skills required to undertake real-life Python programming projects.",
      uniqueFeatures: [
        { title: "Curriculum Focused on Industry Needs", desc: "Updated syllabus covering modern Python concepts and enterprise business applications." },
        { title: "Trained Python Mentors", desc: "Learn from highly experienced professionals giving practical examples and live demos." },
        { title: "Project-Based Learning", desc: "Build capstone projects that enhance your GitHub portfolio and developer profile." },
        { title: "Daily Practice & Doubt Sessions", desc: "Become a better problem solver with coding assignments and 1-on-1 doubt clearing." },
        { title: "Career Guidance & Placements", desc: "Resume building, mock technical interviews, and placement assistance with top hiring brands." }
      ],
      whoCanEnroll: [
        "College students preparing for internships or beginner-level software development jobs.",
        "Working professionals switching to software engineering, automation, or data science.",
        "Recent graduates seeking industry-recognized certification to boost job prospects.",
        "Entrepreneurs and freelancers aiming to build web applications or automated scripts."
      ],
      prerequisites: [
        "No prior coding knowledge required — starts from ground zero.",
        "Step-by-step practical explanations for every topic.",
        "Hands-on exercises and coding sandboxes included."
      ],
      modules: [
        { num: "01", name: "Introduction to Python & IDEs", topics: ["About Python & Ecosystem", "Installation & Setup", "PyCharm, VS Code, Jupyter", "First Python Script", "Coding Standards (PEP 8)"] },
        { num: "02", name: "Python Basics & Control Flow", topics: ["Variables & Data Types", "Operators & Expressions", "Input/Output Formatting", "Conditional Statements (if/elif/else)", "Loops (for, while, range)"] },
        { num: "03", name: "Object-Oriented Programming (OOP)", topics: ["Classes and Objects", "Constructors (__init__) & Methods", "Inheritance & Polymorphism", "Encapsulation & Abstraction", "Magic Dunder Methods"] },
        { num: "04", name: "Data Structures in Python", topics: ["Lists, Tuples, Sets, Dictionaries", "List & Dict Comprehensions", "String Manipulation", "Nested Data Structures", "Built-in Higher-Order Functions"] },
        { num: "05", name: "Exception Handling & File Management", topics: ["Try, Except, Else, Finally", "Custom Exceptions", "Reading & Writing Text Files", "Handling CSV & JSON Data Formats"] },
        { num: "06", name: "Advanced Python Engineering", topics: ["Lambda Functions", "Iterators & Generators (yield)", "Decorators (@wraps)", "Regular Expressions (Regex)", "Virtual Environments (venv) & pip"] },
        { num: "07", name: "Database Connectivity (SQL)", topics: ["Introduction to RDBMS", "Integration with MySQL & SQLite", "CRUD Operations with Python", "Parameterized Queries & Security"] },
        { num: "08", name: "Web Development with Flask & Django", topics: ["Introduction to Flask Framework", "Routing & Jinja Templates", "REST API Development", "Django Framework Architecture", "ORM & Admin Panel"] },
        { num: "09", name: "Automation & Web Scraping", topics: ["Operating System & File Automation", "Email & Notification Bots", "Web Scraping with BeautifulSoup", "API Integration & Cron Jobs"] },
        { num: "10", name: "Data Analysis & Visualization", topics: ["NumPy Array Computations", "Pandas DataFrames & Cleaning", "Visualization with Matplotlib/Seaborn", "Exploratory Data Analysis (EDA)"] },
        { num: "11", name: "Testing, Git & Deployment", topics: ["Unit Testing with unittest", "Debugging & Logging", "Version Control with Git/GitHub", "Cloud Hosting Basics"] },
        { num: "12", name: "Live Capstone Project", topics: ["Full Scale Web Application", "Database-Driven Automation System", "REST API Backend Project", "Final Presentation & Code Review"] }
      ],
      careerOpportunities: [
        { role: "Python Developer", salaryIndia: "₹4.5 – ₹8.5 LPA", globalSalary: "$65,000 – $95,000", desc: "Build backend logic, APIs, and microservices." },
        { role: "Backend Web Developer", salaryIndia: "₹5.0 – ₹10.0 LPA", globalSalary: "$70,000 – $105,000", desc: "Develop web portals with Django and Flask." },
        { role: "Automation Engineer", salaryIndia: "₹4.5 – ₹9.0 LPA", globalSalary: "$60,000 – $90,000", desc: "Automate manual workflows and system scripts." },
        { role: "Data Analyst (Python)", salaryIndia: "₹4.5 – ₹8.5 LPA", globalSalary: "$65,000 – $95,000", desc: "Extract insights using Pandas and data visualization." },
        { role: "Junior Machine Learning Engineer", salaryIndia: "₹6.0 – ₹12.0 LPA", globalSalary: "$80,000 – $120,000", desc: "Build foundational ML models and predictive algorithms." }
      ],
      faqs: [
        { q: "Which is the best Python training institute in Greater Noida?", a: "Yukti Software is recognized for practical, project-based Python training with live mentor support, 1-on-1 doubt clearing, and verified placement assistance." },
        { q: "Is prior coding experience required to join?", a: "No, the course starts from absolute basics and progresses step-by-step to advanced enterprise concepts." },
        { q: "What career options are available after completing this course?", a: "You can apply for roles like Python Developer, Backend Engineer, Automation Specialist, and Data Analyst." },
        { q: "Are live capstone projects included in the curriculum?", a: "Yes, you will develop multiple live projects including web applications, automated scraping bots, and database systems." },
        { q: "Are weekend and flexible batches available for college students and working professionals?", a: "Yes, we provide flexible morning, evening, and weekend batches with lifetime access to revision classes." }
      ]
    },

    javaFullStack: {
      id: "course-java-fullstack",
      metaTitle: "Java Full Stack Development Course in Greater Noida | Yukti Software",
      title: "Complete Java Full Stack Course in Greater Noida",
      badge: "Enterprise Standard • Frontend + Backend + Database + Cloud",
      heroDesc: "Become a high-earning Full Stack Developer. Master React.js, Core & Advanced Java, Spring Boot, Microservices, Hibernate, and MySQL with enterprise project mentorship.",
      duration: "5 to 6 Months",
      batchTimings: "Flexible Regular & Weekend Batches",
      avgSalary: "₹5.0 – ₹12 LPA",
      highestSalary: "₹18.0 LPA",
      mode: "Classroom (Greater Noida) & Live Online",
      overview: "At Yukti Software, our Java Full Stack Training Course is specially designed for beginners and aspiring developers interested in starting their careers in software development. We have created this course such that it includes Java basics and goes on to include advanced full stack technologies through projects, mentorship, and job-oriented training.",
      uniqueFeatures: [
        { title: "End-to-End Full Stack Mastery", desc: "Covers React.js frontend, Spring Boot backend, and MySQL database." },
        { title: "Enterprise Microservices Architecture", desc: "Learn distributed microservices, REST APIs, and authentication." },
        { title: "Live Real-World E-Commerce Capstone", desc: "Build complex admin dashboards and customer web applications." },
        { title: "Interview Drills & Placement Guarantee", desc: "Mock technical rounds, resume review, and direct corporate interviews." }
      ],
      whoCanEnroll: [
        "Students and fresh graduates aiming to launch a software development career.",
        "Working professionals switching from manual testing or support to development.",
        "Core Java programmers wanting to upgrade to Full Stack & Spring Boot.",
        "Anyone preparing for Java developer interviews with hands-on projects."
      ],
      prerequisites: [
        "No strict prerequisites — we start from programming fundamentals.",
        "Basic computer knowledge is sufficient.",
        "Instructors guide you through every coding exercise."
      ],
      modules: [
        { num: "01", name: "Introduction to Full Stack & SDLC", topics: ["Client-Server Architecture", "SDLC & Agile Workflow", "IDE Setup (Eclipse, IntelliJ, VS Code)", "Git & GitHub Basics"] },
        { num: "02", name: "Front-End Development (HTML, CSS, JS)", topics: ["HTML5 & Semantic Elements", "CSS3 & Responsive Design", "Bootstrap / Tailwind Framework", "JavaScript ES6+ & DOM Manipulation"] },
        { num: "03", name: "Advanced React.js Frontend", topics: ["Components, JSX & Props", "State Management & React Hooks", "React Router Navigation", "REST API Integration with Axios", "Responsive UI Development"] },
        { num: "04", name: "Core Java Programming", topics: ["Java Fundamentals & Syntax", "Control Statements & Loops", "Arrays & String Handling", "Object-Oriented Programming (OOPs)", "Exception Handling & Collections"] },
        { num: "05", name: "Advanced Java & Multithreading", topics: ["Collections Framework Deep Dive", "Multithreading & Concurrency", "Java I/O & File Operations", "Lambda Expressions & Stream API", "Generics"] },
        { num: "06", name: "Database Management (SQL & MySQL)", topics: ["RDBMS Architecture", "SQL Queries (DML, DDL, DCL)", "Joins, Subqueries & Indexes", "Stored Procedures & Transactions", "MySQL Schema Design"] },
        { num: "07", name: "JDBC (Java Database Connectivity)", topics: ["JDBC Architecture & Drivers", "PreparedStatement & ResultSet", "Transaction Management", "CRUD-Based Applications"] },
        { num: "08", name: "Hibernate ORM Framework", topics: ["ORM Concepts & Configuration", "Entity Mapping (@Entity, @Table)", "HQL (Hibernate Query Language)", "CRUD Operations with Hibernate"] },
        { num: "09", name: "Spring Framework Core", topics: ["Dependency Injection (DI)", "Inversion of Control (IoC)", "Spring Beans Lifecycle", "Spring MVC Architecture", "Validation & Exception Handling"] },
        { num: "10", name: "Spring Boot & REST API Development", topics: ["Spring Boot Starters & Auto-Config", "Building Production RESTful APIs", "Postman API Testing", "JWT Authentication & Security", "Exception Handling in REST"] },
        { num: "11", name: "Version Control & Cloud Deployment", topics: ["Git Branching & PR Workflows", "Docker Containerization Basics", "Hosting Java Applications on Cloud", "CI/CD Pipeline Fundamentals"] },
        { num: "12", name: "Live Projects & Industry Capstone", topics: ["E-Commerce Web Application", "Admin Dashboard & Authentication", "Employee Management Microservice", "Project Presentation & Review"] }
      ],
      careerOpportunities: [
        { role: "Java Full Stack Developer", salaryIndia: "₹5.0 – ₹12.0 LPA", desc: "Develop end-to-end frontend and backend applications." },
        { role: "Spring Boot Developer", salaryIndia: "₹6.0 – ₹12.0 LPA", desc: "Engineer high-performance enterprise microservices." },
        { role: "Java Backend Developer", salaryIndia: "₹5.0 – ₹10.0 LPA", desc: "Design secure RESTful APIs, data logic, and servers." },
        { role: "Microservices Developer", salaryIndia: "₹7.0 – ₹15.0 LPA", desc: "Build cloud-native distributed enterprise systems." },
        { role: "Full Stack Software Engineer", salaryIndia: "₹6.0 – ₹14.0 LPA", desc: "Handle product architecture from UI to database." }
      ],
      faqs: [
        { q: "Which is the best Java Full Stack course in Greater Noida?", a: "Yukti Software offers the most comprehensive Java Full Stack training with live Spring Boot + React projects, industry mentors, and guaranteed placement drives." },
        { q: "Is this course suitable for complete beginners?", a: "Yes, the training begins with Java fundamentals and front-end basics before advancing to enterprise Spring Boot microservices." },
        { q: "What career options exist after completing Java Full Stack?", a: "Roles include Java Full Stack Developer, Spring Boot Specialist, Backend Engineer, and Technical Consultant in top IT firms." },
        { q: "Are live enterprise projects included?", a: "Yes, you will construct multiple projects including an E-Commerce portal, Admin dashboard, and REST API microservices." }
      ]
    },

    dsa: {
      id: "course-dsa",
      metaTitle: "Data Structures & Algorithms (DSA) Course Greater Noida | Yukti Software",
      title: "Complete Data Structures and Algorithms (DSA) Course",
      badge: "FAANG & Top Product Company Interview Preparation",
      heroDesc: "Crack coding interviews at Google, Amazon, Microsoft, and top tech firms. Master problem-solving, algorithmic efficiency, and System Design with 300+ LeetCode problems.",
      duration: "3 to 4 Months",
      batchTimings: "Weekend & Evening Coding Batches",
      avgSalary: "₹6.0 – ₹16 LPA",
      highestSalary: "₹24.0 LPA",
      mode: "Classroom (Greater Noida) & Live Interactive Online",
      overview: "Data Structures and Algorithms (DSA) is the backbone of computer science and the primary assessment criteria for technical interviews at top software companies. At Yukti Software, our DSA course is designed to build deep problem-solving intuition and code optimization skills.",
      uniqueFeatures: [
        { title: "300+ Curated Problems", desc: "Practice easy, medium, and hard LeetCode / GeeksforGeeks problems." },
        { title: "Language Flexibility", desc: "Learn concepts with implementation in C++, Java, or Python." },
        { title: "Time & Space Complexity Intuition", desc: "Master Big-O analysis and write ultra-optimized algorithms." },
        { title: "Mock Technical Interview Rounds", desc: "1-on-1 whiteboard and live coding drills with FAANG mentors." }
      ],
      whoCanEnroll: [
        "Computer science students preparing for campus placements.",
        "Software engineers aiming to switch to top product companies.",
        "Competitive programming enthusiasts.",
        "Anyone wanting to master algorithmic problem-solving."
      ],
      prerequisites: [
        "Basic understanding of any programming language (C++, Java, or Python).",
        "Enthusiasm for problem solving and analytical thinking."
      ],
      modules: [
        { num: "01", name: "Algorithmic Complexity & Big-O", topics: ["Time Complexity Analysis", "Space Complexity Analysis", "Best, Average & Worst Case", "Asymptotic Notations"] },
        { num: "02", name: "Arrays & String Algorithms", topics: ["Two Pointers Technique", "Sliding Window", "Prefix Sums & Kadane's Algorithm", "Binary Search & Variations", "String Matching Algorithms"] },
        { num: "03", name: "Recursion & Backtracking", topics: ["Recursion Tree Analysis", "Subsets & Subsequences", "N-Queens & Sudoku Solver", "Permutations & Combinations"] },
        { num: "04", name: "Linked Lists (Single, Doubly, Circular)", topics: ["Reversal Techniques", "Fast & Slow Pointer (Cycle Detection)", "Merge Two Sorted Lists", "LRU Cache Implementation"] },
        { num: "05", name: "Stacks & Queues", topics: ["Monotonic Stack Pattern", "Next Greater Element", "Queue using Stacks", "Circular Queue & Deque"] },
        { num: "06", name: "Trees & Binary Search Trees (BST)", topics: ["Tree Traversals (Inorder, Preorder, Postorder, BFS)", "Height & Diameter of Tree", "BST Insertion, Deletion & Search", "Lowest Common Ancestor (LCA)"] },
        { num: "07", name: "Heaps & Priority Queues", topics: ["Min Heap & Max Heap Construction", "Top K Frequent Elements", "Kth Largest Element", "Median from Data Stream"] },
        { num: "08", name: "Hashing & HashMaps", topics: ["Collision Resolution Techniques", "Subarray Sum Equals K", "Longest Consecutive Sequence", "Custom Hash Functions"] },
        { num: "09", name: "Graph Algorithms", topics: ["BFS & DFS Traversals", "Cycle Detection in Graphs", "Dijkstra's Shortest Path", "Bellman-Ford & Floyd-Warshall", "Disjoint Set Union (DSU) & Kruskal's"] },
        { num: "10", name: "Dynamic Programming (DP)", topics: ["Memoization vs Tabulation", "0/1 Knapsack & Unbounded Knapsack", "Longest Common Subsequence (LCS)", "Longest Increasing Subsequence (LIS)", "Matrix Chain Multiplication & DP on Trees"] },
        { num: "11", name: "Greedy Algorithms & Bit Manipulation", topics: ["Activity Selection & Fractional Knapsack", "Huffman Coding", "Bitwise Operators & Tricks", "Count Set Bits & Power of Two"] },
        { num: "12", name: "System Design Basics & Mock Interviews", topics: ["Low-Level Design (LLD) Principles", "Object-Oriented Design Patterns", "Live Mock Coding Interviews", "FAANG Interview Strategy"] }
      ],
      careerOpportunities: [
        { role: "Software Development Engineer (SDE-1)", salaryIndia: "₹8.0 – ₹18.0 LPA", desc: "Crack coding rounds at top tech product firms." },
        { role: "Backend Algorithm Engineer", salaryIndia: "₹7.0 – ₹16.0 LPA", desc: "Build high-throughput algorithms and low-latency systems." },
        { role: "Competitive Programmer / Problem Solver", salaryIndia: "₹6.0 – ₹14.0 LPA", desc: "Excel in global coding contests and hackathons." }
      ],
      faqs: [
        { q: "Is DSA necessary for cracking IT interviews?", a: "Yes, almost all product-based companies and leading IT recruiters use DSA coding rounds as their primary elimination criteria." },
        { q: "Which programming language will be used in this DSA course?", a: "You can write your solutions in C++, Java, or Python. All concepts and problem patterns are explained language-agnostic." },
        { q: "How many coding problems will be solved during the course?", a: "Over 300+ standard problems covering Easy, Medium, and Hard LeetCode patterns with step-by-step intuition." }
      ]
    }
  },

  /* ========================================================================= */
  /* GOOGLE BUSINESS PROFILE REVIEWS INTEGRATION (FROM PDF CHANGE 9) */
  /* ========================================================================= */
  googleReviews: {
    badge: "Verified Google Reviews",
    title: "What Our Clients & Students Say on Google",
    subtitle: "Real 5-Star Reviews from Verified Google Business Profile Users across Greater Noida & NCR.",
    overallScore: 4.9,
    totalReviews: 128,
    reviews: [
      {
        author: "Rahul Sharma",
        avatar: dev1Img,
        rating: 5,
        date: "1 week ago",
        review: "Yukti Software is the best Python & Java training institute in Greater Noida! The faculty explains everything practically on live servers. Got placed in TCS Digital with 8 LPA package!",
        verified: true,
        tag: "Student Placement"
      },
      {
        author: "Siddharth Mehra",
        avatar: ashuImg,
        rating: 5,
        date: "2 weeks ago",
        review: "We partnered with Yukti Software for our custom ERP and Cloud Migration. Mithilesh and his team delivered the entire web platform within 8 weeks. Unbelievable speed and 24/7 SLA support!",
        verified: true,
        tag: "Enterprise Client"
      },
      {
        author: "Ananya Gupta",
        avatar: diptiImg,
        rating: 5,
        date: "3 weeks ago",
        review: "The DSA course at Yukti Software is gold standard. Learned how to approach complex LeetCode hard problems intuitively. Cracked my dream SDE role at an MNC!",
        verified: true,
        tag: "DSA Alumni"
      },
      {
        author: "Vikas Chauhan",
        avatar: dev2Img,
        rating: 5,
        date: "1 month ago",
        review: "Best training institute for beginners. Zero hidden charges, 1-on-1 doubt clearing, and practical lab sessions. Strongly recommend Ms. Manisha Kumari's institute.",
        verified: true,
        tag: "Student Career"
      },
      {
        author: "Pooja Verma",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "1 month ago",
        review: "Completed Java Full Stack course. Built real React and Spring Boot capstones. The mock interviews gave me massive confidence during recruitment drives.",
        verified: true,
        tag: "Full Stack Placed"
      },
      {
        author: "Gaurav Trivedi",
        avatar: utkarshImg,
        rating: 5,
        date: "2 months ago",
        review: "High quality software development company. They built our secure mobile application with end-to-end encryption. Great communication from the engineering team.",
        verified: true,
        tag: "Enterprise Client"
      }
    ]
  },

  roadmapSection: {
    badge: "Structured Execution",
    title: "Software Solution Delivery Roadmap",
    subtitle: "Our proven 7-step engineering framework guarantees transparency, high performance, and timely delivery.",
    steps: [
      {
        stepNumber: "01",
        title: "Requirement Analysis",
        subtitle: "Deep Dive & Assessment",
        description: "Our software experts will sit with you to understand your requirements and your business goals. We will also evaluate your profile during this initial consultation, which will help us configure customizations as required.",
        icon: "SearchCode",
        deliverable: "Scope Document & Functional Spec"
      },
      {
        stepNumber: "02",
        title: "Strategy & Planning",
        subtitle: "Architecture & Milestones",
        description: "After the initial consultation, we move to the planning phase, where we use the insights and the intel we gathered during the consultation to design highly effective and cost-efficient strategies.",
        icon: "Compass",
        deliverable: "Project Architecture & Sprint Plan"
      },
      {
        stepNumber: "03",
        title: "UI/UX Design",
        subtitle: "User-Centric Prototypes",
        description: "We will create intuitive wireframes, prototypes, and user-friendly interfaces all according to what’s right for your business and what fits best. You will also receive the prototypes for review and feedback.",
        icon: "Layout",
        deliverable: "Figma Prototypes & Design Tokens"
      },
      {
        stepNumber: "04",
        title: "Software Development",
        subtitle: "Clean Code & Scalability",
        description: "Now comes the most important part: based on the finalized UI and your requirements, we will build scalable, secure, and high-performance software solutions.",
        icon: "Code2",
        deliverable: "Production Codebase & API Suite"
      },
      {
        stepNumber: "05",
        title: "Testing & Quality Assurance",
        subtitle: "Rigorous Verification",
        description: "In order to ensure reliability and long-term solutions, we conduct testing through rigorous methods. Automated tools and software are used to reduce time and ensure maximum accuracy.",
        icon: "ShieldAlert",
        deliverable: "QA Test Matrix & Security Report"
      },
      {
        stepNumber: "06",
        title: "Deployment & Go-Live",
        subtitle: "Zero-Downtime Release",
        description: "After strict testing and fixing the bugs, your project is deployed. Our deployment services are designed for maximum security and minimum errors to ensure that neither your time nor money is wasted.",
        icon: "Rocket",
        deliverable: "Production Release & Live Monitoring"
      },
      {
        stepNumber: "07",
        title: "Maintenance & Support",
        subtitle: "Continuous Optimization",
        description: "Our services do not end with the software deployment. At Yukti Software, we cover post-deployment maintenance and offer continuous support to ensure the software solutions are working as intended.",
        icon: "Headphones",
        deliverable: "24/7 SLA & Performance Upgrades"
      }
    ]
  },

  highlightsSection: {
    badge: "Why Businesses & Students Trust Us",
    title: "Key Highlights of Our Services",
    subtitle: "",
    highlights: [
      {
        title: "Over 50 Successful Software Solutions Delivered",
        desc: "Proven track record delivering reliable, custom software across healthcare, retail, fintech, and education sectors.",
        icon: "Layers",
        stat: "50+ Delivered"
      },
      {
        title: "Using Over 20 Custom-Designed Tools for Higher Efficiency",
        desc: "In-house productivity frameworks, automation bots, and boilerplates that drastically cut project development time.",
        icon: "Wrench",
        stat: "20+ In-House Tools"
      },
      {
        title: "Comprehensive Solutions Covering Multiple Domains",
        desc: "Cross-domain expertise across web, mobile, cloud infrastructure, AI, analytics, and enterprise data management.",
        icon: "Globe2",
        stat: "Multi-Domain"
      },
      {
        title: "Detailed Documentation for All Software Products",
        desc: "Exhaustive architectural blueprints, code docs, API specifications, and user manuals for effortless maintenance.",
        icon: "FileText",
        stat: "100% Documented"
      },
      {
        title: "24/7 Customer & Technical Support",
        desc: "Always-on proactive monitoring and instant technical support to guarantee maximum uptime for your business.",
        icon: "Clock",
        stat: "24/7 Dedicated"
      },
      {
        title: "Experience with Both Domestic & International Clients",
        desc: "Trusted by Indian startups, established national enterprises, and international clients seeking cost-efficient engineering.",
        icon: "Sparkles",
        stat: "Global & Domestic"
      }
    ]
  },

  storySection: {
    badge: "Our Heritage",
    title: "Yukti Software – Decades of Building Tailored Software Solutions",
    contentParagraphs: [
      "Yukti Software is a renowned name and a trusted supplier of software solutions, covering small, medium, and large-scale businesses. We have built a positive reputation among our clients by delivering high-performance software solutions at a significantly reduced cost. On top of that, we have delivered software solutions for numerous clients from different sectors, which further proves our versatility and flexibility.",
      "We are also expanding our services for the youth in order to nurture their future and provide them with the right direction. Our IT courses are designed by experts and cover all the most in-demand programming languages and domains. Moreover, all our courses are job-oriented, which means that once you have completed the course, you can start applying for jobs right away. And with our certification, the chances of your shortlisting go significantly higher."
    ]
  },

  teamSection: {
    badge: "Executive Leadership & Tech Masters",
    title: "Meet the Team",
    subtitle: "Experienced industry veterans guiding our engineering vision and shaping the next generation of tech talent in Greater Noida.",
    members: [
      {
        name: "Manisha Kumari",
        role: "Founder & CEO",
        education: "NIT Alumna",
        experience: "10+ Years IT & Business Leadership",
        image: founderImg,
        bio: "A visionary leader with 10+ years of enterprise IT experience. She drives Yukti Software's global delivery standards, corporate client alliances, and high-impact student placement programs.",
        quote: "Committed to delivering enterprise-grade software solutions while empowering the youth with career-defining IT education.",
        avatarBg: "from-rose-500 to-indigo-600",
        initials: "MK",
        stats: [
          { label: "Leadership", value: "10+ Yrs" },
          { label: "Solutions Delivered", value: "50+ Built" },
          { label: "Mentorship", value: "100% Focus" }
        ],
        specialties: ["Strategic Leadership", "Enterprise Alliances", "Product Innovation", "Career Mentorship"]
      },
      {
        name: "Mithilesh Kumar",
        role: "Chief Technology Officer (CTO)",
        education: "Enterprise Architect",
        experience: "14+ Years Large-Scale Enterprise Architecture",
        image: ctoImg,
        bio: "Our technical architect with 14+ years designing high-throughput distributed systems for Fortune 500 clients. Leads architecture reviews, Spring Boot microservices, and AI cloud pipelines.",
        quote: "Architecting zero-downtime distributed systems with resilient microservices and automated cloud pipelines.",
        avatarBg: "from-blue-600 to-cyan-500",
        initials: "MK",
        stats: [
          { label: "Architecture", value: "14+ Yrs" },
          { label: "Enterprise Scale", value: "Fortune 500" },
          { label: "System Uptime", value: "99.99%" }
        ],
        specialties: ["Enterprise Microservices", "Cloud Systems (AWS/GCP)", "DevOps & CI/CD", "System Design"]
      },
      {
        name: "Sanjay Gairola",
        role: "Head of Big Data & AI Systems",
        education: "Big Data & AI Architect",
        experience: "16+ Years Storage, Big Data & Analytics",
        image: sanjaySirImg,
        bio: "Veteran data architect with 16+ years designing petabyte-scale storage, distributed databases, and high-performance predictive analytics for enterprise clients.",
        quote: "Transforming complex enterprise data streams into actionable intelligence and high-performance database clusters.",
        avatarBg: "from-purple-600 to-pink-500",
        initials: "SG",
        stats: [
          { label: "Data Systems", value: "16+ Yrs" },
          { label: "Cluster Scale", value: "Petabyte" },
          { label: "AI Pipelines", value: "Production" }
        ],
        specialties: ["Big Data Architecture", "Distributed Databases", "Machine Learning Pipelines", "Data Security"]
      },
      {
        name: "Intekhab Ashraf",
        role: "Lead Full Stack & DevOps Engineer",
        education: "Cloud & DevOps Specialist",
        experience: "Full Stack & Cloud Specialist",
        image: dev1Img,
        bio: "Mentors full stack cohorts and oversees live client deliverables across React, Node.js, Next.js, and containerized Docker/Kubernetes deployments.",
        quote: "Bridging modern reactive frontend architectures with scalable containerized deployments and high-quality codebases.",
        avatarBg: "from-emerald-500 to-teal-600",
        initials: "IA",
        stats: [
          { label: "Engineering", value: "Lead Dev" },
          { label: "Deployment", value: "Kubernetes" },
          { label: "Core Stack", value: "MERN / Next" }
        ],
        specialties: ["Full Stack MERN", "REST & GraphQL APIs", "Kubernetes & Docker", "Code Quality Audits"]
      },
      {
        name: "Hind Sinha",
        role: "Full Stack & AI Developer",
        education: "B.Tech — Electrical & Computer Engineering",
        experience: "Full Stack Developer & AI Enthusiast",
        image: dev2Img,
        bio: "Builds modern full stack applications using React, Next.js, Node.js, Firebase, and AI tools, with a strong focus on scalable architectures, developer productivity, and real-world software products.",
        quote: "Building practical software by combining modern full stack engineering with AI-powered development workflows.",
        avatarBg: "from-blue-500 to-indigo-600",
        initials: "HS",
        stats: [
          { label: "Domain", value: "Full Stack" },
          { label: "Backend", value: "Firebase / Node" },
          { label: "AI", value: "AI Tools & Dev" }
        ],
        specialties: [
          "React & Next.js",
          "Node.js & REST APIs",
          "Firebase & Firestore",
          "AI-Powered Development",
          "Data Science",
          "Docker & Cloud",
          "TypeScript",
          "Full Stack Development"
        ]
      },
      {
        name: "Utkarsh Mehta",
        role: "Frontend Developer",
        education: "Frontend Specialist",
        experience: "3 Years Experience",
        image: utkarshImg,
        bio: "Creative web developer with 3 years of experience a passion for crafting seamless, high-performance web experiences that blend innovation with functionality.",
        quote: "Crafting seamless, high-performance web experiences that blend innovation with functionality.",
        avatarBg: "from-cyan-500 to-blue-600",
        initials: "UM",
        stats: [
          { label: "Experience", value: "3 Yrs" },
          { label: "Role", value: "Frontend" },
          { label: "Focus", value: "Web UI/UX" }
        ],
        specialties: ["Frontend Development", "React.js", "Web Performance", "Modern UI/UX"]
      },
      {
        name: "Nilesh Prashant",
        role: "Backend Developer",
        education: "Backend Specialist",
        experience: "3 Years Experience",
        image: nileshImg,
        bio: "Backend developer with 3 years of experience a knack for building robust, scalable, and efficient server-side solutions that power seamless digital experiences.",
        quote: "Building robust, scalable, and efficient server-side solutions that power seamless digital experiences.",
        avatarBg: "from-indigo-500 to-purple-600",
        initials: "NP",
        stats: [
          { label: "Experience", value: "3 Yrs" },
          { label: "Role", value: "Backend" },
          { label: "Focus", value: "APIs & DB" }
        ],
        specialties: ["Backend Development", "Node.js", "Server Architecture", "Database Systems"]
      },
      {
        name: "Dipti Chaudhary",
        role: "HR & Student-Client Relations",
        education: "HR Management",
        experience: "7 Years Experience",
        image: diptiImg,
        bio: "Dipti leads HR operations and serves with 7 years of experience as a trusted point of contact for students and clients, supporting clear communication, smooth coordination, and a positive experience throughout their journey with Yukti Software.",
        quote: "Supporting clear communication, smooth coordination, and a positive experience throughout your journey.",
        avatarBg: "from-pink-500 to-rose-600",
        initials: "DC",
        stats: [
          { label: "Experience", value: "7 Yrs" },
          { label: "Role", value: "HR Lead" },
          { label: "Focus", value: "Relations" }
        ],
        specialties: ["HR Operations", "Student Relations", "Client Coordination", "Talent Management"]
      },
      {
        name: "Rohan Goel",
        role: "Mobile Developer",
        education: "Mobile Specialist",
        experience: "1 Year Experience",
        image: null,
        bio: "A mobile developer with 1 year of experience building reliable, user-focused applications and contributing to smooth mobile experiences.",
        quote: "Building reliable, user-focused applications and contributing to smooth mobile experiences.",
        avatarBg: "from-slate-700 to-slate-900",
        initials: "RG",
        stats: [
          { label: "Experience", value: "1 Yr" },
          { label: "Role", value: "Mobile Dev" },
          { label: "Focus", value: "Apps" }
        ],
        specialties: ["Mobile App Development", "Flutter / React Native", "Android & iOS", "App Optimization"]
      },
      {
        name: "Narayan Singh",
        role: "Frontend Developer",
        education: "Frontend Specialist",
        experience: "1 Year Experience",
        image: null,
        bio: "A frontend developer with 1 year of experience creating responsive, accessible, and engaging user interfaces.",
        quote: "Creating responsive, accessible, and engaging user interfaces for modern web applications.",
        avatarBg: "from-slate-700 to-slate-900",
        initials: "NS",
        stats: [
          { label: "Experience", value: "1 Yr" },
          { label: "Role", value: "Frontend" },
          { label: "Focus", value: "Responsive UI" }
        ],
        specialties: ["Frontend Development", "HTML/CSS/JS", "Responsive UI", "Web Standards"]
      },
      {
        name: "Santhosh Shankar",
        role: "Backend Developer",
        education: "Backend Specialist",
        experience: "1 Year Experience",
        image: santhoshImg,
        bio: "A backend developer with 1 year of experience developing dependable server-side functionality and supporting scalable software solutions.",
        quote: "Developing dependable server-side functionality and supporting scalable software solutions.",
        avatarBg: "from-emerald-500 to-teal-600",
        initials: "SS",
        stats: [
          { label: "Experience", value: "1 Yr" },
          { label: "Role", value: "Backend" },
          { label: "Focus", value: "Server Logic" }
        ],
        specialties: ["Backend Development", "REST APIs", "Database Design", "Node.js"]
      },
      {
        name: "Ashu Rai",
        role: "Backend Developer",
        education: "Backend Specialist",
        experience: "1 Year Experience",
        image: ashuImg,
        bio: "A backend developer with 1 year of experience working on secure, maintainable services and reliable application workflows.",
        quote: "Working on secure, maintainable services and reliable application workflows.",
        avatarBg: "from-amber-500 to-orange-600",
        initials: "AR",
        stats: [
          { label: "Experience", value: "1 Yr" },
          { label: "Role", value: "Backend" },
          { label: "Focus", value: "Secure APIs" }
        ],
        specialties: ["Backend Development", "Secure Services", "Database Management", "API Workflows"]
      }
    ]
  },

  aboutPageData: {
    hero: {
      badge: "Move Forward with Yukti Software",
      title: "Optimized Software Solutions and Advanced Training",
      story: "Yukti Software is a leading software solutions provider and IT training institute with highly positive reviews and clients from every prominent section. We started this journey because we realized that businesses now need modernized IT solutions to boost profitability, efficiency, and ROI. Thus, we began our journey, where we committed ourselves to designing and delivering customized software solutions that not only match, but exceed your expectations. With over 50 software solutions delivered, we are always looking forward to the next challenge.",
      trainingMission: "At Yukti Software, we cover the prominent job-driven courses that include Data Science, along with the most in-demand programming languages. Each course is carefully selected by our mentors and management to ensure that we teach students what’s important for their future. The modern job market and recruiting process are highly efficient; they look for skills and hands-on experience in programming languages. That is precisely why we have updated our teaching methods so that they align with modern recruitment methods and the dynamic job market."
    },
    founderMessage: {
      title: "Message from Our Founder",
      quote: "Technology should not be a barrier, but the strongest catalyst for business growth and youthful ambitions. At Yukti Software, our constant endeavor is to craft software that elevates operational intelligence while mentoring young talent into high-performing industry leaders.",
      author: "Manisha Kumari",
      position: "Founder & CEO, Yukti Software",
      image: founderImg
    },
    mission: {
      title: "Our Mission",
      description: "At Yukti Software, our mission is to deliver software solutions that meet market standards, are highly secure, are built at the right cost, and work to improve overall profitability. And, we are continuously improving ourselves to keep working towards fulfilling this mission. Our founder, Ms. Manisha Kumari, through her experienced guidance, ensures that this mission is conveyed to everyone associated with Yukti Software.",
      icon: "Target"
    },
    vision: {
      title: "Our Vision",
      description: "The vision of Yukti Software is to build an ecosystem that makes software solutions convenient for businesses regardless of their operational industry. We want to be an organization that makes software solutions easily accessible. And we are working towards this vision by simplifying software solutions and personalizing them to suit every business’s requirements, scale, and goals.",
      icon: "Eye"
    },
    promisesBusiness: {
      badge: "Our Enterprise Commitments",
      title: "What We Promise to Deliver to Businesses",
      subtitle: "Seven core pillars that govern our software development and delivery standard.",
      promises: [
        {
          id: "custom-dev",
          title: "Customized Software Development",
          desc: "At Yukti Software, we are fully aware that every organization has a unique set of requirements. As a trusted software solutions provider, we develop customized applications that align with your workflows and are aimed at improving productivity and solving specific business challenges instead of relying on generic software.",
          icon: "Sliders"
        },
        {
          id: "scalable-solutions",
          title: "Scalable and Future-Ready Solutions",
          desc: "Businesses grow with time, and this brings the requirement for scalable solutions that can adapt to the growing business requirements. Modern software solutions by Yukti Software are designed with scalability in mind, allowing new features, users, and integrations to be added without affecting performance. To be more specific, we help businesses leverage advanced AI tools and applications, promising higher efficiency and lower cost.",
          icon: "TrendingUp"
        },
        {
          id: "data-security",
          title: "Strong Data Security",
          desc: "Protecting sensitive business and customer information is a top priority at Yukti Software. As a reliable and trusted software provider, we implement best security practices, including data encryption, secure authentication, regular updates, and compliance with relevant industry standards. This ensures data security at every level, promising you peace of mind.",
          icon: "Lock"
        },
        {
          id: "seamless-integration",
          title: "Seamless System Integration",
          desc: "Software should work efficiently with your existing tools and platforms and must be integrated without disrupting our on-going core operations. This is where Yukti Software, an experienced software solutions provider, comes into the picture. We ensure smooth integration with CRMs, ERPs, payment gateways, cloud services, and other third-party applications to create a connected digital ecosystem.",
          icon: "Shuffle"
        },
        {
          id: "user-friendly",
          title: "User-Friendly Design",
          desc: "An intuitive interface should be detailed but simple enough so that the user can get the required information without struggle. Thus, we focus on creating applications that are easy to navigate, reducing training time and encouraging higher user adoption.",
          icon: "Smile"
        },
        {
          id: "timely-delivery",
          title: "Timely Delivery and Quality Assurance",
          desc: "Yukti Software follows structured development processes, rigorous testing, and quality assurance practices to deliver reliable software on schedule while minimizing bugs and performance issues.",
          icon: "CheckSquare"
        },
        {
          id: "ongoing-support",
          title: "Ongoing Support and Maintenance",
          desc: "Yukti Software services extend beyond the software deployment with regular maintenance and security updates. We offer continuous technical support, performance monitoring, bug fixes, and feature enhancements to ensure the solution continues to meet business needs over time.",
          icon: "LifeBuoy"
        }
      ]
    },
    promisesStudents: {
      badge: "Our Student Commitments",
      title: "Our Promise to Students",
      subtitle: "Four fundamental assurances to launch your tech career into high trajectory.",
      promises: [
        {
          title: "An Industry-relevant Curriculum",
          desc: "Every course at Yukti Software contains the latest curriculum that is relevant to the demand in modern IT job roles. Every course module and chapter is chosen carefully by experts with years of experience in relevant industries.",
          icon: "BookCheck"
        },
        {
          title: "Practical Training for Every Course",
          desc: "Practical learning is the core of every course at Yukti Software training institute. Students gain hands-on experience through live projects, coding exercises, and real-world projects that help them build confidence and job-ready technical skills.",
          icon: "Laptop"
        },
        {
          title: "Focus on Skill Development",
          desc: "Yukti Software focuses on developing industry-ready skills rather than taking the conventional route of cramming theory. Every training program strengthens technical knowledge, problem-solving abilities, and professional competencies required to excel in today's competitive IT sector.",
          icon: "Zap"
        },
        {
          title: "Career Guidance by Experts",
          desc: "Experienced mentors at Yukti Software provide personalized career guidance to help students based on their profile evaluation. From selecting the right career path to interview preparation, students receive expert support throughout their learning journey.",
          icon: "Compass"
        }
      ]
    }
  },

  testimonials: [
    {
      name: "Rajiv Malhotra",
      role: "Director of Operations",
      company: "Apex Global Logistics",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      content: "Yukti Software revamped our entire supply chain ERP and automated our tracking pipeline. Our team efficiency rose by 40% and server costs dropped significantly. Truly a top-tier software engineering partner!",
      rating: 5,
      type: "client",
      badge: "Enterprise Client • ERP Modernization"
    },
    {
      name: "Sneha Reddy",
      role: "Data Analyst",
      company: "Placed at FinTech Hub (Batch 2025)",
      package: "₹9.2 LPA",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      content: "The Data Science practical training at Yukti Software transformed my career. The 1-on-1 mentorship, live project training, and placement support helped me secure a 9.2 LPA package right after finishing the course!",
      rating: 5,
      type: "student",
      badge: "Student Placement • ₹9.2 LPA"
    },
    {
      name: "Amitabh Sen",
      role: "CTO & Co-Founder",
      company: "MedVanguard Healthcare",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      content: "Security and reliability were non-negotiable for our patient portal. Mithilesh and the team at Yukti Software implemented end-to-end HIPAA-level encryption and delivered the platform ahead of schedule.",
      rating: 5,
      type: "client",
      badge: "Enterprise Client • Healthcare SaaS"
    },
    {
      name: "Pooja Verma",
      role: "Full Stack Engineer",
      company: "Placed at CloudMatrix (Batch 2026)",
      package: "₹14.5 LPA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      content: "Yukti Software doesn't teach boring theory. We built real full-stack web apps from scratch. The interview prep and live code reviews by senior mentors gave me immense confidence during recruitment drives.",
      rating: 5,
      type: "student",
      badge: "Student Placement • ₹14.5 LPA"
    }
  ],

  placementRecords: {
    title: "A Positive Placement Record",
    subtitle: "Over 500+ successful alumni thriving in leading technology firms & high-growth startups.",
    stats: [
      { label: "Placement Success Rate", value: "94%" },
      { label: "Top Package Offered", value: "16 LPA" },
      { label: "Average Package", value: "6.8 LPA" },
      { label: "Hiring Corporate Partners", value: "45+" }
    ],
    hiringPartners: [
      "Tata Consultancy Services", "Infosys", "Wipro", "HCLTech", "Cognizant", 
      "Tech Mahindra", "Capgemini", "Accenture", "Zoho", "Paytm", "LTIMindtree"
    ]
  },

  consultationSection: {
    badge: "Get In Touch",
    title: "Connect with Our Experts or Schedule a Consultation",
    subtitle: "Delivering optimized software solutions that are customised to fit all your requirements.",
    description: "In case you are confused or need more details about our services or the price range, please connect with our customer support staff. They will help you save time and connect you with our experts for further consultation. Schedule a consultation for a personalized requirements evaluation and gain deeper industrial insights!",
    studentNote: "For students who want to enroll in our software development training courses and are confused about the right way, Yukti Software career counselling is the right move. Sit with our experts and learn what’s in-demand and what recruiters are searching for to boost your chances of landing your dream job."
  }
};
