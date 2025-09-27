// Skill interface
export interface Skill {
  id: string;
  name: string;
  icon: string;
}

// Stat interface
export interface Stat {
  id: string;
  icon: any; // React icon component
  value: string;
  label: string;
}

// Education interface
export interface Education {
  id: string;
  type: 'degree' | 'certification';
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  icon: any; // React icon component
}

// Project interface
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

// Recommendation interface
export interface Recommendation {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
  date: string;
}

// Contact info interface
export interface ContactInfo {
  id: string;
  icon: any; // React icon component
  title: string;
  value: string;
  link: string | null;
}

// Social link interface
export interface SocialLink {
  id: string;
  icon: any; // React icon component
  href: string;
  label: string;
}
