# Portfolio Website

## Overview

This is a professional portfolio website built with Next.js 15, showcasing a full-stack developer's work, skills, and experience. The application features a modern, responsive design with dark/light theme support, smooth animations, and a component-based architecture. The portfolio includes sections for hero introduction, skills showcase, project gallery, about page, and contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with React 19
- Uses the App Router architecture for file-based routing
- Server Components by default with Client Components (`'use client'`) for interactive features
- TypeScript for type safety across the application

**Styling Strategy**: Tailwind CSS v4 with CSS Custom Properties
- Custom color system using CSS variables for theme support (light/dark modes)
- Theme colors defined in `globals.css` with semantic naming (`--color-bg-primary`, `--color-text-primary`, etc.)
- Brand colors: Primary accent `#00C2A8` (teal), with additional category colors (Freelance: `#FFB86B`, Tekab: `#00C2A8`, Sofflex: `#8B5CF6`)
- Global styles use Tailwind v4's `@import "tailwindcss"` syntax

**Animation Library**: Framer Motion
- Used throughout for page transitions, scroll animations, and micro-interactions
- Motion components wrap standard HTML elements for declarative animations
- AnimatePresence for enter/exit transitions

**Component Structure**:
- Layout components: `Header`, `Footer` (global navigation and site structure)
- Section components: `Hero`, `Skills`, `Projects`, `ProjectCard` (page content blocks)
- UI components: `Button`, `ThemeToggle` (reusable interface elements)
- Provider components: `ThemeProvider` (context-based state management)

**Design Patterns**:
- Composition pattern for reusable UI components
- Compound components for complex UI (theme provider wrapping app)
- Props-based customization with TypeScript interfaces for type safety

### State Management

**Theme Management**: Custom Context API implementation
- `ThemeProvider` uses React Context to manage theme state globally
- Persists theme preference to localStorage
- Supports 'light', 'dark', and 'system' themes
- Handles system preference detection via `matchMedia`
- Prevents hydration mismatches by checking `mounted` state

**Data Flow**:
- Currently uses local JSON data structure for content (`data/content.json`)
- Project data is defined inline in components (ready for migration to CMS or API)
- Form state managed with React `useState` hooks

### Routing Structure

**Pages**:
- `/` - Home page with Hero, Skills, and Projects sections
- `/about` - Detailed about page with timeline and personal info
- `/contact` - Contact form page with contact information
- `/projects/[slug]` - Dynamic project detail pages

**Navigation**: Fixed header with scroll-based styling changes and mobile responsive menu

### Testing Infrastructure

**Testing Framework**: Jest with React Testing Library
- Jest configured for Next.js with `next/jest`
- Custom setup file (`setupTests.ts`) for global test utilities
- Mocks for `IntersectionObserver`, `matchMedia`, and `framer-motion`
- Component tests in `__tests__` directories co-located with components
- Test scripts: `test`, `test:watch`, `test:coverage`

**Testing Approach**:
- Unit tests for individual components (Button, ProjectCard)
- Tests verify rendering, props, user interactions, and accessibility
- Mock external dependencies to isolate component logic

### Font Strategy

**Typography**: Google Fonts via `next/font`
- Geist Sans (variable font) for general UI text
- Geist Mono (variable font) for code and technical content
- Automatic optimization and self-hosting by Next.js

### Development Configuration

**Build Tools**:
- TypeScript with strict mode enabled
- ESLint with Next.js recommended configuration
- Path aliases: `@/*` maps to `src/*` for cleaner imports

**Development Server**: Configured to run on port 5000 and bind to `0.0.0.0` for external access

## External Dependencies

### Core Framework Dependencies

- **next** (15.5.6) - React framework with App Router, server components, and optimizations
- **react** (19.1.0) & **react-dom** (19.1.0) - UI library and rendering engine

### UI & Animation Libraries

- **framer-motion** (^12.23.24) - Production-ready animation library for smooth transitions and interactions
- **lucide-react** (^0.554.0) - Icon library providing consistent SVG icons across the application
- **next-themes** (^0.4.6) - Theme management utility for Next.js applications

### Styling

- **tailwindcss** (^4) - Utility-first CSS framework
- **@tailwindcss/postcss** (^4) - PostCSS integration for Tailwind v4

### Development Tools

- **TypeScript** (^5) - Type safety and developer experience
- **ESLint** (^9) with **eslint-config-next** - Code quality and consistency
- **Jest** (^30.2.0) with **jest-environment-jsdom** - Testing framework
- **@testing-library/react** (^16.3.0) & **@testing-library/jest-dom** (^6.9.1) - Testing utilities

### Font Resources

- **Geist** and **Geist_Mono** - Loaded via Next.js `next/font/google` integration (no external dependency)

### Planned Integrations

The application structure suggests readiness for:
- Content Management System (CMS) integration for project and content data
- Email service for contact form submissions
- Analytics platform for user tracking
- Database for dynamic content (structure supports future ORM integration like Drizzle or Prisma)