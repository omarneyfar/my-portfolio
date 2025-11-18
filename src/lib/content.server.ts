import { cache } from 'react';

// Types
export interface ContentData {
  globals: {
    siteName: Record<string, string>;
    jobTitle: Record<string, string>;
    location: Record<string, string>;
    email: string;
    phone: string;
    about: Record<string, string>;
    theme: {
      primaryColor: string;
      secondaryColor: string;
      background: string;
      surface: string;
      text: string;
      accentColor: string;
    };
    socials: Record<string, { url: string; label: string }>;
  };
  pages: Array<{
    id: string;
    title: Record<string, string>;
    path: string;
  }>;
  sections: Record<string, {
    type: string;
    components: Array<{
      id: string;
      type: string;
      variables: Record<string, any>;
    }>;
  }>;
  languages: string[];
  defaultLanguage: string;
}

// Cache the content data with a 5-minute TTL (Time To Live)
let cachedContent: ContentData | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

/**
 * Fetches content from the API with caching and error handling
 */
export const getContent = cache(async (): Promise<ContentData> => {
  const now = Date.now();
  
  // Return cached content if it's still valid
  if (cachedContent && (now - cacheTimestamp) < CACHE_TTL) {
    return cachedContent;
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(`${baseUrl}/api`, {
      signal: controller.signal,
      next: { 
        revalidate: 60, // Revalidate every 60 seconds
        tags: ['content']
      },
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Failed to fetch content: ${response.status} ${response.statusText}` +
        (errorData.message ? ` - ${errorData.message}` : '')
      );
    }

    const data: ContentData = await response.json();
    
    // Validate the response structure
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid content format received from API');
    }

    // Update cache
    cachedContent = data;
    cacheTimestamp = now;
    
    return data;
    
  } catch (error) {
    console.error('Error in getContent:', error);
    
    // If we have stale cache, return it with a warning
    if (cachedContent) {
      console.warn('Using stale content due to fetch error');
      return cachedContent;
    }
    
    // Fallback to default content if no cache is available
    return getDefaultContent();
  }
});

/**
 * Returns default content when the API is not available
 */
function getDefaultContent(): ContentData {
  return {
    globals: {
      siteName: { en: 'Portfolio', fr: 'Portfolio' },
      jobTitle: { en: 'Developer', fr: 'Développeur' },
      location: { en: 'Location', fr: 'Localisation' },
      email: '',
      phone: '',
      about: { en: '', fr: '' },
      theme: {
        primaryColor: '#0ea5e9',
        secondaryColor: '#1e293b',
        background: '#020617',
        surface: '#0f172a',
        text: '#e2e8f0',
        accentColor: '#3b82f6'
      },
      socials: {}
    },
    pages: [],
    sections: {},
    languages: ['en'],
    defaultLanguage: 'en'
  };
}

/**
 * Get a page by its ID
 */
export async function getPageById(id: string) {
  try {
    const content = await getContent();
    return content.pages?.find((page) => page.id === id) || null;
  } catch (error) {
    console.error(`Error getting page ${id}:`, error);
    return null;
  }
}

/**
 * Get section data by section ID
 */
export async function getSectionData(sectionId: string) {
  try {
    const content = await getContent();
    return content.sections?.[sectionId] || null;
  } catch (error) {
    console.error(`Error getting section ${sectionId}:`, error);
    return null;
  }
}

/**
 * Get global content
 */
export async function getGlobals() {
  try {
    const content = await getContent();
    return content.globals || getDefaultContent().globals;
  } catch (error) {
    console.error('Error getting globals:', error);
    return getDefaultContent().globals;
  }
}

/**
 * Get all projects
 */
export async function getAllProjects() {
  try {
    const section = await getSectionData('all-projects');
    return section?.components[0]?.variables?.projects || [];
  } catch (error) {
    console.error('Error getting projects:', error);
    return [];
  }
}

/**
 * Get featured projects with a limit
 */
export async function getFeaturedProjects(limit: number = 3) {
  try {
    const projects = await getAllProjects();
    return projects.filter((p: any) => p.featured).slice(0, limit);
  } catch (error) {
    console.error('Error getting featured projects:', error);
    return [];
  }
}

/**
 * Clear the content cache
 */
export function clearContentCache() {
  cachedContent = null;
  cacheTimestamp = 0;
}