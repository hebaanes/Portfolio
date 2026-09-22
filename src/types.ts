export interface ExperienceItem {
  id: string;
  role: string;
  lab: string;
  institution: string;
  period: string;
  isCurrent: boolean;
  type: 'appointment' | 'master_project';
  focus: string[];
  responsibilities: string[];
}

export interface ResearchProject {
  id: string;
  title: string;
  status: string;
  objective: string;
  laserSystem: {
    name: string;
    wavelength: string;
    method: string;
    safety: string;
  };
  materials: {
    host: string;
    dopant: string;
    nanomaterialClass: string;
  };
  characterization: string[];
  application: {
    target: string;
    mechanism: string;
  };
  keyContributions: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  statusOrYear: string;
  isOngoing?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  badge: string;
  skills: {
    name: string;
    detail: string;
    tag?: string;
  }[];
}

export interface ConferenceItem {
  id: string;
  title: string;
  category?: 'training' | 'workshop' | 'conference' | string;
  location?: string;
  year: string;
  role: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: 'Native' | 'Fluent';
}

export interface ContactInfo {
  name: string;
  legalName: string;
  title: string;
  location: string;
  phone: string;
  emails: {
    address: string;
    label: string;
    type: 'AUC' | 'NILES';
  }[];
  orcid: {
    id: string;
    url: string;
  };
  researchGate: {
    name: string;
    url: string;
  };
}
