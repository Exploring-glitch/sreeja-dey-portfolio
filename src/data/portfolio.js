export const profile = {
  name: "Sreeja Dey",
  role: "Aspiring Full-Stack Developer",
  education: "BCA student at Techno India University, Kolkata",
  tagline: "I enjoy turning ideas into useful digital products.",
  summary:
    "I'm a BCA student and aspiring software engineer focused on full-stack development, building practical projects, and strengthening my problem-solving skills through DSA.",
  // No public contact email confirmed — keep empty so UI shows a placeholder
  // instead of inventing an address. Set to a real address to enable mailto.
  email: "",
  github: "https://github.com/Exploring-glitch",
  linkedin: "https://www.linkedin.com/in/sreeja-dey-858395317/",
  leetcode: "https://leetcode.com/u/sreeja_solves/",
  // No resume file in repo yet — Navbar hides the button until this is set.
  resumeUrl: "",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DSA", href: "#dsa" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C++", "Python", "C", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases & Tools",
    items: ["MongoDB", "Supabase", "Git", "GitHub"],
  },
  {
    title: "Additional exposure",
    note: "Explored in coursework / side experiments — not core strengths.",
    items: [
      "React Native",
      "NumPy",
      "Pandas",
      "PyTorch",
      "RAG-based apps",
    ],
  },
];

export const projects = [
  {
    name: "Waverly",
    description:
      "A college-focused, LinkedIn-inspired social platform connecting students and alumni. Supports profiles, posts with threaded discussions, connections, real-time notifications, and global search.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Exploring-glitch/Waverly",
    live: "https://waverly-six.vercel.app",
    status: "live",
  },
  {
    name: "Task Manager",
    description:
      "Full-stack task management app with admin and team-member roles. Admins assign and manage tasks; members track progress from a dashboard with analytics, reports, and profile uploads.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/Exploring-glitch/Task-Manager",
    // Verified from the repository's own About/README (not invented).
    live: "https://task-manager-pi-eight-72.vercel.app/",
    status: "live",
  },
  {
    name: "URL Shortener",
    description:
      "MERN URL shortener: shorten links instantly, copy with one click, and — when signed in — manage links, customise slugs, and track clicks.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    // Verified: repo exists as Exploring-glitch/URL-Shortener; frontend URL
    // matches the repo About page. Backend host below was provided directly.
    github: "https://github.com/Exploring-glitch/URL-Shortener",
    live: "https://url-shortener-45vx.vercel.app",
    backend: "https://url-shortener-n4ee.onrender.com",
    status: "live",
  },
  {
    name: "StatiQ",
    description:
      "Job-platform concept inspired by products like Wellfound, intended to support job seekers and employers with company profiles and job listings. Currently in progress — scope and features are still being finalised.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    status: "in-progress",
  },
  {
    name: "ArogyaAi",
    description:
      "Hackathon project: scan packaged-food labels to interpret nutritional information and suggest alternatives. Explored with mobile + OCR + LLM APIs. Prototype scope — not a production launch, no prize claimed.",
    tech: ["React Native", "Expo", "OCR", "Gemini API"],
    techNote: "Stack per hackathon scope; not independently verified here.",
    status: "in-progress",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Techno India University, Kolkata",
    detail:
      "Undergraduate studies with a focus on web development, databases, and programming fundamentals.",
  },
];
