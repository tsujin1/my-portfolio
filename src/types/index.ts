export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  timeline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  images: ProjectImage[];
  livePreview?: string;
  github?: string;
}

export interface CertificationItem {
  id: string;
  logoPath: string;
  title: string;
  issuer: string;
  issued: string;
  skills: string[];
}

export type SkillCategory = 'framework' | 'styling' | 'language' | 'concept' | 'tools' | 'database';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  role: string;
  passion: string;
  tagline: string;
  resumeLink: string;
}

export interface AboutContent {
  roleTitle: string;
  tagline: string;
  description: string;
}