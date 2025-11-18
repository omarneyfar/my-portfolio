# Hygraph Schema for Portfolio Website

## Overview
This document outlines the Hygraph CMS schema for your portfolio website, organizing content models to match your current component structure.

## Content Models

### 1. Personal Information (Hero Section)
**Model Name**: `PersonalInfo`
```graphql
type PersonalInfo {
  id: ID!
  name: String!
  title: String!
  subtitle: String
  description: String!
  location: String!
  profileImage: Asset
  socialLinks: [SocialLink!]!
  ctaButtons: [CTAButton!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SocialLink {
  id: ID!
  platform: SocialPlatform!
  url: String!
  icon: String
  isVisible: Boolean! @default(true)
}

enum SocialPlatform {
  GITHUB
  LINKEDIN
  TWITTER
  EMAIL
  INSTAGRAM
}

type CTAButton {
  id: ID!
  text: String!
  url: String!
  variant: ButtonVariant! @default(PRIMARY)
  isVisible: Boolean! @default(true)
}

enum ButtonVariant {
  PRIMARY
  SECONDARY
  OUTLINE
}
```

### 2. Skills Section
**Model Name**: `SkillsSection`
```graphql
type SkillsSection {
  id: ID!
  title: String!
  description: String!
  isVisible: Boolean! @default(true)
  skillCategories: [SkillCategory!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SkillCategory {
  id: ID!
  name: String!
  description: String
  icon: String
  skills: [Skill!]!
  order: Int @default(0)
}

type Skill {
  id: ID!
  name: String!
  level: SkillLevel!
  yearsOfExperience: Int
  icon: String
  description: String
  projects: [Project!]! @relation(link: INLINE)
  order: Int @default(0)
}

enum SkillLevel {
  BEGINNER
  INTERMEDIATE
  ADVANCED
  EXPERT
}
```

### 3. Projects
**Model Name**: `Project`
```graphql
type Project {
  id: ID!
  slug: String!
  title: String!
  description: String!
  longDescription: String
  excerpt: String
  featured: Boolean! @default(false)
  status: ProjectStatus! @default(COMPLETED)
  year: Int
  client: String
  category: ProjectCategory!
  technologies: [Technology!]! @relation(link: INLINE)
  images: [Asset!]!
  liveUrl: String
  githubUrl: String
  caseStudyUrl: String
  tags: [String!]
  order: Int @default(0)
  publishedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum ProjectStatus {
  PLANNING
  IN_PROGRESS
  COMPLETED
  MAINTENANCE
}

enum ProjectCategory {
  FREELANCE
  TEKAB
  SOFFLEX
  PERSONAL
  OPEN_SOURCE
}

type Technology {
  id: ID!
  name: String!
  icon: String
  category: TechCategory!
  proficiency: SkillLevel!
  description: String
  projects: [Project!]! @relation(link: INLINE)
}

enum TechCategory {
  FRONTEND
  BACKEND
  DATABASE
  DEVOPS
  MOBILE
  AI_ML
  DESIGN
  TESTING
}
```

### 4. About Page Content
**Model Name**: `AboutPage`
```graphql
type AboutPage {
  id: ID!
  hero: AboutHero!
  bioSections: [BioSection!]!
  timeline: [TimelineItem!]!
  stats: [Stat!]!
  publishedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AboutHero {
  id: ID!
  title: String!
  description: String!
  backgroundImage: Asset
  ctaButtons: [CTAButton!]!
}

type BioSection {
  id: ID!
  title: String!
  content: String!
  image: Asset
  imagePosition: ImagePosition! @default(LEFT)
  order: Int @default(0)
}

enum ImagePosition {
  LEFT
  RIGHT
}

type TimelineItem {
  id: ID!
  title: String!
  organization: String!
  role: String!
  description: String!
  startDate: DateTime!
  endDate: DateTime
  isCurrentPosition: Boolean! @default(false)
  type: TimelineType!
  order: Int @default(0)
}

enum TimelineType {
  WORK
  EDUCATION
  CERTIFICATION
  ACHIEVEMENT
}

type Stat {
  id: ID!
  value: String!
  label: String!
  description: String
  icon: String
  order: Int @default(0)
}
```

### 5. Contact Page
**Model Name**: `ContactPage`
```graphql
type ContactPage {
  id: ID!
  hero: ContactHero!
  contactInfo: ContactInfo!
  form: ContactForm!
  publishedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ContactHero {
  id: ID!
  title: String!
  description: String!
  backgroundImage: Asset
}

type ContactInfo {
  id: ID!
  email: String!
  phone: String
  location: String!
  availability: String
  socialLinks: [SocialLink!]!
  workingHours: String
}

type ContactForm {
  id: ID!
  title: String!
  description: String!
  fields: [FormField!]!
  submitButtonText: String!
  successMessage: String!
  errorMessage: String!
}

type FormField {
  id: ID!
  name: String!
  label: String!
  type: FieldType!
  placeholder: String
  required: Boolean! @default(false)
  options: [String!] # For select fields
  order: Int @default(0)
}

enum FieldType {
  TEXT
  EMAIL
  TEXTAREA
  SELECT
  PHONE
  SUBJECT
}
```

### 6. SEO & Meta Data
**Model Name**: `SEOSettings`
```graphql
type SEOSettings {
  id: ID!
  siteName: String!
  siteDescription: String!
  siteUrl: String!
  ogImage: Asset
  favicon: Asset
  twitterHandle: String
  googleAnalyticsId: String
  googleSearchConsole: String
  defaultMeta: DefaultMeta!
}

type DefaultMeta {
  id: ID!
  title: String!
  description: String!
  keywords: [String!]
  ogImage: Asset
}
```

## Component Organization

### Updated File Structure
```
src/
├── app/
│   ├── about/
│   │   ├── page.tsx              # About page component
│   │   └── components/           # About-specific components
│   │       ├── BioSection.tsx
│   │       ├── Timeline.tsx
│   │       └── Stats.tsx
│   ├── contact/
│   │   ├── page.tsx              # Contact page component
│   │   └── components/           # Contact-specific components
│   │       ├── ContactForm.tsx
│   │       └── ContactInfo.tsx
│   ├── projects/
│   │   ├── page.tsx              # Projects listing
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual project
│   │   └── components/           # Project-specific components
│   │       ├── ProjectDetail.tsx
│   │       ├── ProjectGallery.tsx
│   │       └── ProjectTech.tsx
│   ├── layout.tsx
│   └── page.tsx                  # Home page
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx              # Uses PersonalInfo
│   │   ├── Skills.tsx            # Uses SkillsSection
│   │   ├── Projects.tsx          # Uses Project[]
│   │   └── ProjectCard.tsx       # Uses Project
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── index.ts
│   └── providers/
│       └── ThemeProvider.tsx
├── lib/
│   ├── hygraph/
│   │   ├── client.ts             # Hygraph client setup
│   │   ├── queries/
│   │   │   ├── getPersonalInfo.ts
│   │   │   ├── getSkills.ts
│   │   │   ├── getProjects.ts
│   │   │   ├── getAboutPage.ts
│   │   │   └── getContactPage.ts
│   │   └── fragments/
│   │       ├── project.ts
│   │       ├── skill.ts
│   │       └── socialLink.ts
│   └── types/
│       ├── personal.ts
│       ├── skills.ts
│       ├── projects.ts
│       ├── about.ts
│       └── contact.ts
```

## GraphQL Queries

### Get Personal Info (Hero)
```graphql
query GetPersonalInfo {
  personalInfo {
    id
    name
    title
    subtitle
    description
    location
    profileImage {
      url
      altText
    }
    socialLinks {
      platform
      url
      icon
    }
    ctaButtons {
      text
      url
      variant
    }
  }
}
```

### Get Projects
```graphql
query GetProjects($featured: Boolean) {
  projects(where: { featured: $featured }, orderBy: order_ASC) {
    id
    slug
    title
    description
    excerpt
    featured
    year
    client
    category
    images(first: 1) {
      url
      altText
    }
    liveUrl
    githubUrl
    technologies {
      name
      icon
    }
    tags
  }
}
```

### Get Skills
```graphql
query GetSkills {
  skillsSection {
    title
    description
    skillCategories(orderBy: order_ASC) {
      name
      description
      icon
      skills(orderBy: order_ASC) {
        name
        level
        yearsOfExperience
        icon
        description
      }
    }
  }
}
```

## Implementation Steps

1. **Set up Hygraph Project**
   - Create new project
   - Add the above content models
   - Configure permissions and webhooks

2. **Install Dependencies**
   ```bash
   npm install @hygraph/react-sdk graphql
   ```

3. **Create Hygraph Client**
   ```typescript
   // lib/hygraph/client.ts
   import { HoudiniClient } from '$houdini';
   
   export const client = new HoudiniClient({
     url: process.env.HYGRAPH_URL,
     fetch: async (query, variables) => {
       const response = await fetch(process.env.HYGRAPH_URL!, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
         },
         body: JSON.stringify({ query, variables })
       });
       
       return response.json();
     }
   });
   ```

4. **Update Components**
   - Replace static data with GraphQL queries
   - Add loading states
   - Implement error handling

5. **Environment Variables**
   ```env
   HYGRAPH_URL=your-hygraph-url
   HYGRAPH_TOKEN=your-hygraph-token
   ```

This schema provides a comprehensive content management system that matches your current portfolio structure while making it fully manageable through Hygraph.
