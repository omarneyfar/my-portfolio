// Common interfaces for multilingual content
type LocaleString = {
  en: string;
  fr: string;
};

type LocaleStringArray = {
  en: string[];
  fr: string[];
};

export interface HeroData {
  title: LocaleString;
  subtitle: LocaleString;
  description: LocaleString;
  ctaPrimary: LocaleString;      // "View Projects"
  ctaSecondary: LocaleString;    // "Download CV"
}

export interface SkillCategory {
  title: LocaleString;
  skills: LocaleString[];
}

export interface SkillsData {
  title: LocaleString;
  subtitle?: LocaleString;
  categories: SkillCategory[];
  additionalExpertise?: LocaleString[];
}

export interface Project {
  slug: string;  // Keep as non-localized for routing
  title: LocaleString;
  shortDescription: LocaleString;
  longDescription: LocaleString;
  technologies: string[];  // Technical terms don't need translation
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ProjectsData {
  title: LocaleString;
  projects: Project[];
}

export interface AboutData {
  title: LocaleString;
  description: LocaleStringArray;
  highlights: LocaleStringArray;
}

export interface ContactData {
  title: LocaleString;
  description: LocaleString;
  email: string;  // Email is the same across languages
  phone?: string;  // Phone is the same across languages
  location: LocaleString;
  form: {
    name: LocaleString;
    email: LocaleString;
    message: LocaleString;
    submit: LocaleString;
    success: LocaleString;
    error: LocaleString;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface CVData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experienceYears: number;
  education: {
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
  }[];
  experience: {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
  }[];
  skills: {
    technical: string[];
    soft: string[];
    languages: Array<{
      language: string;
      proficiency: string;
    }>;
  };
  certifications?: {
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
  }[];
}

export interface AppData {
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  projects: ProjectsData;
  contact: ContactData;
  cv: CVData;
}
