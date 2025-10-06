export interface Skill {
  id: string;
  name: string;
  icon: string;
}

export interface Stat {
  id: string;
  icon: any;
  value: string;
  label: string;
}

export interface Education {
  id: string;
  type: 'degree' | 'certification';
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  icon: any;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Recommendation {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
  date: string;
}

export interface ContactInfo {
  id: string;
  icon: any;
  title: string;
  value: string;
  link: string | null;
}

export interface SocialLink {
  id: string;
  icon: any;
  href: string;
  label: string;
}
