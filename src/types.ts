export interface ResearchExperience {
  id: string;
  institution: string;
  location: string;
  role: string;
  period: string;
  summary?: string;
  details?: string[];
  tags?: string[];
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface Publication {
  id: string;
  key: string; // e.g., J.1, C.1, I.1
  authors: string;
  title: string;
  source: string;
  date: string;
  type: 'journal' | 'conference' | 'intellectual_property';
  url?: string;
  status: string; // e.g. "Published", "Accepted", "Granted", "Filed"
  doi?: string;
  subtitle?: string;
  description?: string;
  technology?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  highlights: string[];
  projectNum?: string;
  imageUrl?: string;
  githubUrl?: string;
  blogUrl?: string;
  status?: string;
  linkUrl?: string;
}

export interface HonorAward {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface LeadershipActivity {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface Workshop {
  id: string;
  title: string;
  organizer: string;
  date: string;
  location?: string;
}

export interface Snapshot {
  id: string;
  title: string;
  location: string;
  tag: string;
  desc: string;
  symbol: string; // We can use elegant structured designs as mock snapshots
}
