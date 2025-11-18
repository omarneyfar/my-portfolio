# Hygraph Setup Guide

## Step 1: Create Hygraph Project

1. **Sign up/Log in** to [Hygraph](https://hygraph.com)
2. **Create New Project**: Choose "Portfolio" template or start from scratch
3. **Get Project URL and Token**: From Settings → API Endpoints

## Step 2: Add Content Models

### Method 1: Use Schema Import
1. Go to your Hygraph project
2. Navigate to **Schema** → **Import**
3. Copy and paste the schema from `HYGRAPH_SCHEMA.md`
4. Review and confirm the import

### Method 2: Manual Creation
Create each content model manually using the schema definitions provided.

## Step 3: Install Dependencies

```bash
npm install @hygraph/react-sdk graphql
npm install -D @graphql-codegen/cli @graphql-codegen/typescript
```

## Step 4: Environment Setup

Create `.env.local`:
```env
HYGRAPH_URL=https://your-project-url.us-east-1.hygraph.com/v2/your-project-id/master
HYGRAPH_TOKEN=your-permanent-auth-token
HYGRAPH_ENV=master
```

## Step 5: Create Hygraph Client

```typescript
// lib/hygraph/client.ts
import { HoudiniClient } from '$houdini';
import { env } from '$env/dynamic/public';

export const client = new HoudiniClient({
  url: env.HYGRAPH_URL,
  fetch: async ({ query, variables }) => {
    const response = await fetch(env.HYGRAPH_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.HYGRAPH_TOKEN}`
      },
      body: JSON.stringify({ query, variables })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }
});
```

## Step 6: Generate Types (Optional but Recommended)

### Setup GraphQL Code Generator
```bash
npx graphql-codegen init
```

### `codegen.yml` Configuration
```yaml
schema: ${HYGRAPH_URL}
documents: './src/lib/hygraph/queries/**/*.ts'
generates:
  src/lib/hygraph/generated.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo
    config:
      withHooks: true
      scalars:
        DateTime: Date
```

### Run Generation
```bash
npm run generate
```

## Step 7: Create GraphQL Queries

### Personal Info Query
```typescript
// lib/hygraph/queries/personal.ts
import { gql } from '@hygraph/react-sdk';

export const GET_PERSONAL_INFO = gql`
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
        width
        height
      }
      socialLinks {
        platform
        url
        icon
        isVisible
      }
      ctaButtons {
        text
        url
        variant
        isVisible
      }
    }
  }
`;
```

### Projects Query
```typescript
// lib/hygraph/queries/projects.ts
import { gql } from '@hygraph/react-sdk';

export const GET_PROJECTS = gql`
  query GetProjects($featured: Boolean, $first: Int, $skip: Int) {
    projects(
      where: { featured: $featured }
      orderBy: order_ASC
      first: $first
      skip: $skip
    ) {
      id
      slug
      title
      description
      excerpt
      featured
      year
      client
      category
      liveUrl
      githubUrl
      caseStudyUrl
      tags
      images(first: 3) {
        url
        altText
        width
        height
      }
      technologies {
        name
        icon
        category
        proficiency
      }
      publishedAt
    }
  }
`;

export const GET_PROJECT_SLUGS = gql`
  query GetProjectSlugs {
    projects {
      slug
    }
  }
`;

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      description
      longDescription
      featured
      year
      client
      category
      liveUrl
      githubUrl
      caseStudyUrl
      tags
      images {
        url
        altText
        width
        height
      }
      technologies {
        name
        icon
        category
        proficiency
        description
      }
      publishedAt
    }
  }
`;
```

### Skills Query
```typescript
// lib/hygraph/queries/skills.ts
import { gql } from '@hygraph/react-sdk';

export const GET_SKILLS = gql`
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
`;
```

### About Page Query
```typescript
// lib/hygraph/queries/about.ts
import { gql } from '@hygraph/react-sdk';

export const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
    aboutPage {
      hero {
        title
        description
        backgroundImage {
          url
          altText
        }
        ctaButtons {
          text
          url
          variant
          isVisible
        }
      }
      bioSections(orderBy: order_ASC) {
        title
        content
        image {
          url
          altText
        }
        imagePosition
      }
      timeline(orderBy: order_ASC) {
        title
        organization
        role
        description
        startDate
        endDate
        isCurrentPosition
        type
      }
      stats(orderBy: order_ASC) {
        value
        label
        description
        icon
      }
    }
  }
`;
```

### Contact Page Query
```typescript
// lib/hygraph/queries/contact.ts
import { gql } from '@hygraph/react-sdk';

export const GET_CONTACT_PAGE = gql`
  query GetContactPage {
    contactPage {
      hero {
        title
        description
        backgroundImage {
          url
          altText
        }
      }
      contactInfo {
        email
        phone
        location
        availability
        socialLinks {
          platform
          url
          icon
          isVisible
        }
        workingHours
      }
      form {
        title
        description
        fields(orderBy: order_ASC) {
          name
          label
          type
          placeholder
          required
          options
        }
        submitButtonText
        successMessage
        errorMessage
      }
    }
  }
`;
```

## Step 8: Create Custom Hooks

```typescript
// hooks/usePersonalInfo.ts
import { useQuery } from '@hygraph/react-sdk';
import { GET_PERSONAL_INFO } from '@/lib/hygraph/queries/personal';
import { PersonalInfo } from '@/types/personal';

export function usePersonalInfo() {
  const { data, loading, error } = useQuery(GET_PERSONAL_INFO);
  
  return {
    personalInfo: data?.personalInfo as PersonalInfo,
    loading,
    error
  };
}
```

```typescript
// hooks/useProjects.ts
import { useQuery } from '@hygraph/react-sdk';
import { GET_PROJECTS, GET_PROJECT_BY_SLUG } from '@/lib/hygraph/queries/projects';
import { Project, ProjectsResponse } from '@/types/projects';

export function useProjects(featured?: boolean, first?: number, skip?: number) {
  const { data, loading, error } = useQuery(GET_PROJECTS, {
    variables: { featured, first, skip }
  });
  
  return {
    projects: data?.projects as Project[],
    loading,
    error
  };
}

export function useProject(slug: string) {
  const { data, loading, error } = useQuery(GET_PROJECT_BY_SLUG, {
    variables: { slug }
  });
  
  return {
    project: data?.project as Project,
    loading,
    error
  };
}
```

## Step 9: Update Components

### Example: Updated Hero Component
```typescript
// components/sections/Hero/Hero.tsx
import { motion } from 'framer-motion';
import { usePersonalInfo } from '@/hooks/usePersonalInfo';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import Header from '@/components/layout/Header';

export default function Hero() {
  const { personalInfo, loading, error } = usePersonalInfo();

  if (loading) return <HeroSkeleton />;
  if (error) return <HeroError error={error} />;
  if (!personalInfo) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary to-bg-secondary pt-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <HeroContent personalInfo={personalInfo} />
          <HeroImage personalInfo={personalInfo} />
        </div>
      </div>
    </section>
  );
}

// Loading state
function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary to-bg-secondary pt-20">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-12 bg-gray-300 rounded w-1/2"></div>
      </div>
    </section>
  );
}

// Error state
function HeroError({ error }: { error: any }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary to-bg-secondary pt-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error Loading Profile</h2>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    </section>
  );
}
```

## Step 10: Add Content in Hygraph

1. **Personal Info**: Add your profile information
2. **Skills**: Create skill categories and individual skills
3. **Projects**: Add your projects with images and details
4. **About Page**: Add bio sections, timeline, and stats
5. **Contact Page**: Configure contact information and form fields

## Step 11: Testing

```bash
# Test the build
npm run build

# Test the development server
npm run dev

# Run tests
npm run test
```

## Step 12: Deploy

1. **Update Environment Variables** in your hosting platform
2. **Configure Webhooks** in Hygraph for content updates
3. **Test Production Build**

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your Hygraph project allows your domain
2. **Authentication**: Check that your token has correct permissions
3. **Type Errors**: Run `npm run generate` if using codegen
4. **Build Failures**: Check environment variables are set correctly

### Debug Mode

```typescript
// lib/hygraph/client.ts
export const client = new HoudiniClient({
  url: env.HYGRAPH_URL,
  fetch: async ({ query, variables }) => {
    console.log('GraphQL Query:', query);
    console.log('Variables:', variables);
    
    const response = await fetch(env.HYGRAPH_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.HYGRAPH_TOKEN}`
      },
      body: JSON.stringify({ query, variables })
    });
    
    const result = await response.json();
    console.log('GraphQL Response:', result);
    
    return result;
  }
});
```

This setup provides a complete headless CMS integration for your portfolio website.
