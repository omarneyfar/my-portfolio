// content.types.ts

import { LucideIcon } from "lucide-react";

// ---------------------------------------------
// GLOBAL LANGUAGE TYPES
// ---------------------------------------------
export type SupportedLanguage = "fr" | "en";

export type MultiLangText = {
  fr: string;
  en: string;
};

export interface Slug {
  fr: string;
  en: string;
}

// ---------------------------------------------
// GLOBALS
// ---------------------------------------------
export interface ThemeColors {
  primaryColor: string;
  secondaryColor: string;
  background: string;
  surface: string;
  text: string;
  accentColor: string;
}

export interface SocialLink {
  url: string;
  label: string;
}

export interface Globals {
  siteName: MultiLangText;
  jobTitle: MultiLangText;
  location: MultiLangText;
  email: string;
  phone: string;
  about: MultiLangText;
  theme: ThemeColors;
  socials: Record<string, SocialLink>;
  resumeUrl: string;
}

// ---------------------------------------------
// PAGE STRUCTURE
// ---------------------------------------------
export interface PageSectionRef {
  id: string;
  type: SectionType;
}

export type SectionType =
  | "HeroSection"
  | "SkillsSection"
  | "ProjectsSection"
  | "AboutSection"
  | "ContactSection"
  | "TimelineSection"
  | "StatsSection"
  | "AchievementsSection";

// A page from the "pages" array
export interface Page {
  id: string;
  slug: Slug;
  title: MultiLangText;
  meta?: {
    description: MultiLangText;
  };
  sections: PageSectionRef[];
}

// ---------------------------------------------
// COMPONENT VARIABLE TYPES
// ---------------------------------------------
export interface CTAButton {
  text: MultiLangText;
  link: string;
}

export interface HeroVariables {
  headline: MultiLangText;
  subtext: MultiLangText;
  eyeBrowText: MultiLangText;
  description: MultiLangText;
  ctaPrimary: CTAButton;
  ctaSecondary: CTAButton;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Expertise {
  title: MultiLangText;
  items: {
    name: string;
    level: number;
    category: string;
  }[];
}
export interface AddtionalExpertises {
  title: MultiLangText;
  items: MultiLangText[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsVariables {
  title: MultiLangText;
  description: MultiLangText;
  categories: SkillCategory[];
  expertise: Expertise;
  additionalExpertise: AddtionalExpertises;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: MultiLangText;
  longDescription?: MultiLangText;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  year: number;
  client?: string;
}

export interface ProjectsVariables {
  title: MultiLangText;
  viewAllText?: MultiLangText;
  viewAllLink?: string;
  projects: ProjectItem[];

  filterOptions?: {
    id: string;
    label: MultiLangText;
  }[];

  sortOptions?: {
    id: string;
    label: MultiLangText;
  }[];

  cta?: {
    title: MultiLangText;
    description: MultiLangText;
    buttonText: MultiLangText;
    buttonLink: string;
  };
}

export interface AboutVariables {
  title: MultiLangText;
  content: {
    fr: string[];
    en: string[];
  };
  image: string;
  contactInfo?: {
    email: string;
    phone: string;
    location: MultiLangText;
  };
}

export interface ContactField {
  name: string;
  type: string;
  label: MultiLangText;
  required: boolean;
}

export interface ContactVariables {
  title: MultiLangText;
  description: MultiLangText;
  formFields: ContactField[];
  submitButton: MultiLangText;
  successMessage: MultiLangText;
  errorMessage: MultiLangText;
  contactInfo: {
    email: string;
    phone: string;
    location: MultiLangText;
  };
  downloadCV?: {
    text: MultiLangText;
    url: string;
  };
}

export interface StatItem {
  value: string;
  label: MultiLangText;
}

export interface StatsVariables {
  stats: StatItem[];
}

export interface TimelineEvent {
  year: string;
  title: MultiLangText;
  company: string;
  description: MultiLangText;
  type: "work" | "education";
}

export interface TimelineVariables {
  title: MultiLangText;
  description: MultiLangText;
  events: TimelineEvent[];
}

export interface AchievementItem {
  icon: string;
  title: MultiLangText;
  description: MultiLangText;
  year: string;
}

export interface AchievementsVariables {
  title: MultiLangText;
  description: MultiLangText;
  achievements: AchievementItem[];
}

// ---------------------------------------------
// COMPONENTS
// ---------------------------------------------
export type ComponentType =
  | "HeroComponent"
  | "HeroComponent"
  | "SkillsGrid"
  | "ProjectGrid"
  | "AboutComponent"
  | "ContactForm"
  | "StatsComponent"
  | "TimelineComponent"
  | "AchievementsComponent";

export interface ComponentBase<TVariables> {
  id: string;
  type: ComponentType;
  variables: TVariables;
}

export type HeroComponent = ComponentBase<HeroVariables>;
export type SkillsComponent = ComponentBase<SkillsVariables>;
export type ProjectsComponent = ComponentBase<ProjectsVariables>;
export type AboutComponent = ComponentBase<AboutVariables>;
export type ContactComponent = ComponentBase<ContactVariables>;
export type StatsComponent = ComponentBase<StatsVariables>;
export type TimelineComponent = ComponentBase<TimelineVariables>;
export type AchievementsComponent = ComponentBase<AchievementsVariables>;

// ---------------------------------------------
// SECTIONS
// ---------------------------------------------
export interface Section<TComponent> {
  type: SectionType;
  components: TComponent[];
}

export interface SectionsMap {
  hero: Section<HeroComponent>;
  skills: Section<SkillsComponent>;
  projects: Section<ProjectsComponent>;
  "about-content": Section<AboutComponent>;
  "contact-form": Section<ContactComponent>;
  "all-projects": Section<ProjectsComponent>;
  stats: Section<StatsComponent>;
  timeline: Section<TimelineComponent>;
  achievements: Section<AchievementsComponent>;
}

// ---------------------------------------------
// ROOT CONTENT.JSON TYPE
// ---------------------------------------------
export interface ContentJSON {
  languages: SupportedLanguage[];
  defaultLanguage: SupportedLanguage;
  globals: Globals;
  pages: Page[];
  sections: SectionsMap;
}

export default ContentJSON;
