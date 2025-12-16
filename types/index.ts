export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  media?: ProjectMedia[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ContactInfo {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  link: string;
}