export const profile = {
  name: "Sreeja Dey",
  role: "Aspiring Full-Stack Developer",
  education: "BCA student at Techno India University, Kolkata",
  tagline: "I enjoy turning ideas into useful digital products.",
  summary:
    "I'm a BCA student and aspiring software engineer focused on full-stack development, building practical projects, and strengthening my problem-solving skills through DSA.",
  // Public contact details — intentionally published on the site.
  email: "sreejadey2007@gmail.com",
  phone: "+91 9064574884",
  // Served from public/ — works on dev and on Vercel production builds.
  photo: "/sreeja-profile.jpg",
  github: "https://github.com/Exploring-glitch",
  linkedin: "https://www.linkedin.com/in/sreeja-dey-858395317/",
  leetcode: "https://leetcode.com/u/sreeja_solves/",
  resumeUrl: "/sreeja-dey-resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DSA", href: "#dsa" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "React Native", "Node.js", "Express.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases & Tools",
    items: ["MongoDB", "Supabase", "Git", "GitHub", "REST APIs", "Cursor"],
  },
  {
    title: "AI/ML & Data",
    items: ["PyTorch", "NumPy", "Pandas", "RAG", "Public APIs"],
  },
];

export const projects = [
  {
    name: "StatiQ — Startup Hiring Marketplace",
    tagline: "Wellfound-style hiring marketplace connecting job seekers with startups",
    description:
      "Wellfound-style hiring marketplace connecting job seekers with startups, enabling job discovery, company profiles, applications, saved jobs, and job alerts through a dark-themed responsive interface.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    highlights: [
      "Independently engineered a hiring marketplace with job discovery, company profiles, applications, saved jobs, and job alerts.",
      "Developed JWT-based authentication with seeker/employer roles and protected routes, powering profiles, résumé uploads, notifications, and personalized dashboards.",
      "Built employer workflows for posting and managing jobs (draft/publish/close) with an applicant pipeline (New → Shortlisted → Interview → Offer → Rejected) and rich company brand pages with logo uploads and WYSIWYG content.",
      "Designed RESTful APIs with Express and MongoDB for jobs, applications, companies, alerts, and notifications — with input validation, rate limiting, and secured file serving.",
    ],
    live: "https://stati-q.vercel.app/",
    status: "live",
  },
  {
    name: "Waverly",
    tagline: "Cross-platform social networking app for college students",
    description:
      "Cross-platform social networking app enabling college students to build professional profiles, showcase projects, share experiences, and discover career opportunities.",
    tech: ["React.js", "JavaScript", "Node.js", "MongoDB"],
    period: "Sep 2024 – May 2028",
    location: "Kolkata, India",
    highlights: [
      "Engineered a cross-platform social networking app with React, enabling college students to build professional profiles, showcase projects, share experiences, and discover career opportunities.",
      "Developed a Node.js/JavaScript backend with RESTful APIs and MongoDB, powering user profiles, posts, connections, and personalized content workflows.",
      "Implemented social networking features including user discovery, connection management, profile interactions, and content sharing.",
      "Integrated React Native frontend workflows with backend services and authentication APIs for a scalable cross-platform experience.",
    ],
    github: "https://github.com/Exploring-glitch/Waverly",
    live: "https://waverly-six.vercel.app",
    status: "live",
  },
  {
    name: "Shortly — URL Shortener Platform",
    tagline: "Full-stack URL shortening platform",
    description:
      "Full-stack URL shortening platform (MERN) enabling users to generate, customize, and manage short links through a responsive web interface.",
    tech: ["React.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
    highlights: [
      "Engineered a full-stack URL shortening platform using MERN, enabling users to generate, customize, and manage short links.",
      "Implemented JWT-based authentication and protected user dashboards with secure login/signup workflows.",
      "Built a persistent link-management system supporting custom aliases, click tracking, URL deletion, and historical URL retrieval.",
      "Designed RESTful APIs with Express and MongoDB for URL creation, redirection, analytics, and user operations.",
    ],
    github: "https://github.com/Exploring-glitch/URL-Shortener",
    live: "https://url-shortener-45vx.vercel.app",
    backend: "https://url-shortener-n4ee.onrender.com",
    status: "live",
  },
  {
    name: "ClickUp — Task Management Platform",
    tagline: "Full-stack task management platform",
    description:
      "Full-stack task management platform enabling admins to assign, monitor, and manage team workflows through a centralized dashboard.",
    tech: ["React.js", "Node.js", "Express", "Tailwind CSS", "MongoDB", "Cloudinary", "JWT"],
    highlights: [
      "Engineered a full-stack task management platform with React, Node.js, Express, and MongoDB, enabling admins to assign, monitor, and manage team workflows.",
      "Implemented JWT-based authentication, bcrypt password hashing, protected routes, and role-based access control (RBAC) for Admin/Team Member permissions.",
      "Built RESTful APIs for task assignment, CRUD operations, progress tracking, checklist updates, and team management.",
      "Developed an analytics and reporting layer with Recharts, ExcelJS, Cloudinary, and MongoDB, enabling real-time insights, downloadable reports, and profile image management.",
    ],
    github: "https://github.com/Exploring-glitch/Task-Manager",
    live: "https://task-manager-pi-eight-72.vercel.app/",
    status: "live",
  },
];

export const education = [
  {
    degree: "Bachelors in Computer Applications (BCA)",
    school: "Techno India University",
    location: "Kolkata, India",
    period: "September 2024 – May 2028",
    detail:
      "CGPA: 9.3/10 (through semester 4). Undergraduate studies with a focus on web development, databases, and programming fundamentals.",
  },
  {
    degree: "Class 1 to 10",
    school: "Don Bosco School, Oodlabari",
    board: "ICSE board",
    period: "2012 – 2022",
    detail: "Completed primary and secondary schooling (Class 1–10) under ICSE board.",
  },
  {
    degree: "Class 11 and 12",
    school: "Delhi Public School, Fulbari",
    board: "CBSE board",
    period: "2022 – 2024",
    detail: "Completed higher secondary schooling (Class 11–12) under CBSE board.",
  },
];

export const hackathons = [
  {
    event: "Smart India Hackathon 2026 — Aarogya AI",
    location: "Kolkata",
    period: "August 2026",
    highlights: [
      "Engineered Aarogya AI, a native mobile application that analyzes packaged-food ingredients through barcode/image scanning and identifies healthier alternatives based on nutritional composition.",
      "Ranked among the Top 10 teams at Smart India Hackathon 2026 by engineering Aarogya AI.",
    ],
  },
];

export const coursework = [
  "Data Structures and Algorithms",
  "Computer Networks",
  "Database Management System",
  "Machine Learning",
  "Neural Networks",
  "Mathematics",
];
