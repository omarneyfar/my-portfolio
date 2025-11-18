# Component Organization Plan

## Current vs Proposed Structure

### Current Issues
- Components mixed with data logic
- Hard-coded content in components
- No clear separation between UI and data fetching
- Components not co-located with their pages

### Proposed Organization

## 1. Page-Specific Components

### About Page (`src/app/about/`)
```
src/app/about/
├── page.tsx                    # Main about page
├── components/
│   ├── AboutHero.tsx          # Hero section for about page
│   ├── BioSection.tsx         # Individual bio section
│   ├── Timeline.tsx           # Work/education timeline
│   ├── Stats.tsx              # Statistics display
│   └── index.ts               # Exports
└── types.ts                   # About page specific types
```

### Contact Page (`src/app/contact/`)
```
src/app/contact/
├── page.tsx                    # Main contact page
├── components/
│   ├── ContactHero.tsx        # Hero section
│   ├── ContactForm.tsx        # Contact form component
│   ├── ContactInfo.tsx        # Contact information display
│   └── index.ts
└── types.ts
```

### Projects Pages (`src/app/projects/`)
```
src/app/projects/
├── page.tsx                    # Projects listing page
├── [slug]/
│   ├── page.tsx               # Individual project page
│   └── components/
│       ├── ProjectDetail.tsx  # Full project details
│       ├── ProjectGallery.tsx # Image gallery
│       ├── ProjectTech.tsx    # Technologies used
│       └── ProjectMeta.tsx    # Project metadata
└── components/
    ├── ProjectGrid.tsx        # Grid of projects
    ├── ProjectFilters.tsx    # Filter controls
    └── index.ts
```

## 2. Shared Sections (Home Page)

### Home Page Sections (`src/components/sections/`)
```
src/components/sections/
├── Hero/
│   ├── Hero.tsx               # Main hero component
│   ├── HeroContent.tsx        # Text content
│   ├── HeroImage.tsx          # Profile image
│   └── types.ts               # Hero-specific types
├── Skills/
│   ├── Skills.tsx             # Main skills section
│   ├── SkillCategory.tsx      # Individual category
│   ├── SkillItem.tsx          # Individual skill
│   └── types.ts
├── Projects/
│   ├── Projects.tsx           # Projects showcase
│   ├── FeaturedProjects.tsx   # Featured projects grid
│   └── types.ts
└── index.ts
```

## 3. Layout Components

### Layout (`src/components/layout/`)
```
src/components/layout/
├── Header/
│   ├── Header.tsx             # Main header
│   ├── Navigation.tsx         # Navigation menu
│   ├── MobileMenu.tsx         # Mobile navigation
│   └── types.ts
├── Footer/
│   ├── Footer.tsx             # Main footer
│   ├── FooterLinks.tsx        # Footer links
│   └── types.ts
└── index.ts
```

## 4. UI Components

### UI Library (`src/components/ui/`)
```
src/components/ui/
├── Button/
│   ├── Button.tsx             # Button component
│   ├── Button.stories.tsx     # Storybook stories
│   ├── Button.test.tsx        # Tests
│   └── types.ts
├── Card/
│   ├── Card.tsx               # Card container
│   ├── CardHeader.tsx         # Card header
│   ├── CardContent.tsx        # Card content
│   └── types.ts
├── Badge/
│   ├── Badge.tsx              # Badge component
│   └── types.ts
├── Modal/
│   ├── Modal.tsx              # Modal overlay
│   ├── ModalContent.tsx       # Modal content
│   └── types.ts
├── Form/
│   ├── Input.tsx              # Input field
│   ├── Textarea.tsx           # Textarea
│   ├── Select.tsx             # Select dropdown
│   └── types.ts
└── index.ts
```

## 5. Data Layer

### Types (`src/types/`)
```
src/types/
├── personal.ts                # Personal info types
├── skills.ts                  # Skills-related types
├── projects.ts                # Project types
├── about.ts                   # About page types
├── contact.ts                 # Contact page types
├── common.ts                  # Shared/common types
└── index.ts                   # Type exports
```

### Data Fetching (`src/lib/data/`)
```
src/lib/data/
├── hygraph/
│   ├── client.ts              # Hygraph client setup
│   ├── queries/
│   │   ├── personal.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── about.ts
│   │   └── contact.ts
│   ├── fragments/
│   │   ├── project.ts
│   │   ├── skill.ts
│   │   └── common.ts
│   └── mutations/
│       ├── contact.ts         # Contact form submission
│       └── index.ts
├── api/
│   ├── contact.ts             # Contact API route
│   └── projects.ts            # Projects API (if needed)
└── utils/
    ├── cache.ts               # Caching utilities
    ├── validation.ts          # Data validation
    └── helpers.ts             # Helper functions
```

## 6. Hooks

### Custom Hooks (`src/hooks/`)
```
src/hooks/
├── usePersonalInfo.ts         # Personal info data
├── useSkills.ts               # Skills data
├── useProjects.ts             # Projects data
├── useAbout.ts                # About page data
├── useContact.ts              # Contact data
├── useTheme.ts                # Theme management
├── useAnimation.ts            # Animation helpers
└── index.ts
```

## Migration Strategy

### Phase 1: Extract Types
1. Create type definitions in `src/types/`
2. Export types from individual components
3. Update component imports

### Phase 2: Reorganize Components
1. Create page-specific component directories
2. Move components to appropriate locations
3. Update import paths

### Phase 3: Data Layer
1. Set up Hygraph client
2. Create GraphQL queries
3. Implement custom hooks
4. Replace static data with API calls

### Phase 4: Testing & Optimization
1. Update tests for new structure
2. Add Storybook stories
3. Optimize bundle size
4. Add error boundaries

## Benefits of This Structure

1. **Co-location**: Components live near where they're used
2. **Separation of Concerns**: Clear separation between UI, data, and logic
3. **Reusability**: Shared components in `/ui`, page-specific in page folders
4. **Maintainability**: Easier to find and update related code
5. **Scalability**: Easy to add new pages and features
6. **Testing**: Each component can have its own tests
7. **Type Safety**: Centralized type definitions

## File Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `ProjectCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`usePersonalInfo.ts`)
- **Types**: camelCase (`personal.ts`, `projects.ts`)
- **Utilities**: camelCase (`helpers.ts`, `validation.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)

## Import Organization

```typescript
// 1. React/Next.js imports
import React from 'react'
import { useRouter } from 'next/router'

// 2. Third-party libraries
import { motion } from 'framer-motion'
import { GraphQLClient } from 'graphql-request'

// 3. Internal imports (absolute paths)
import { Button } from '@/components/ui/Button'
import { usePersonalInfo } from '@/hooks/usePersonalInfo'
import { Project } from '@/types/projects'

// 4. Relative imports (for page-specific components)
import { BioSection } from './components/BioSection'
```

This organization will make your portfolio more maintainable, scalable, and easier to work with as you integrate Hygraph.
