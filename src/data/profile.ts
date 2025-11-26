import type { AboutContent, HeroContent, Skill, SocialLinks } from '../types';

export const SOCIAL_LINKS: SocialLinks = {
  email: "justindimaandal.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/justin-rich-dimaandal/",
  github: "https://github.com/tsujin1"
};

export const HERO_CONTENT: HeroContent = {
  greeting: "Hello, I'm",
  name: "Justin Rich",
  role: "Software Developer",
  passion: "Building Digital Futures",
  tagline: "Crafting intuitive, visually appealing interfaces that enhance user interaction while delivering seamless and modern web experiences.",
  resumeLink: "/files/Justin_Dimaandal_Resume.pdf"
};

export const ABOUT_CONTENT: AboutContent = {
  roleTitle: "SOFTWARE DEVELOPER",
  tagline: "Building elegant solutions for a connected world.",
  description: "Passionate about creating clean, efficient, and scalable web applications that deliver great user experiences. With a focus on the MERN stack and modern styling, I turn complex problems into user-friendly interfaces."
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Java", category: "language" },
  { name: "Python", category: "language" },

  // Frameworks
  { name: "React", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Express", category: "framework" },
  { name: "Socket.io", category: "framework" },
  { name: "CodeIgniter", category: "framework" },

  // Styling
  { name: "Tailwind CSS", category: "styling" },
  { name: "Bootstrap", category: "styling" },

  // Databases
  { name: "MongoDB", category: "database" },
  { name: "SQL", category: "database" },

  // Tools
  { name: "Microsoft Sharepoint", category: "tools" },
  { name: "Power Apps", category: "tools" },

  // Concepts
  { name: "UI/UX Design", category: "concept" },
  { name: "Responsive Design", category: "concept" }
];