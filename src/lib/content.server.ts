import { cache } from 'react';

export interface ContentData {
  globals: any;
  pages: any[];
  sections: any;
  languages: string[];
  defaultLanguage: string;
}

// Cache the content data
let cachedContent: ContentData | null = null;

// Fetch content from the API
export const getContent = cache(async (): Promise<ContentData> => {
  if (cachedContent) {
    return cachedContent;
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api`, {
      // Add cache and revalidation settings
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.statusText}`);
    }

    const data = await response.json();
    cachedContent = data;
    return data;
  } catch (error) {
    console.error('Error fetching content:', error);
    // Return a minimal fallback object to prevent complete failure
    return {
      globals: {},
      pages: [],
      sections: {},
      languages: ['en'],
      defaultLanguage: 'en'
    };
  }
});

export async function getPageById(id: string) {
  const content = await getContent();
  return content.pages?.find((page) => page.id === id) || null;
}

export async function getSectionData(sectionId: string) {
  const content = await getContent();
  return content.sections?.[sectionId] || null;
}

export async function getGlobals() {
  const content = await getContent();
  return content.globals || {};
}

export async function getAllProjects() {
  const content = await getContent();
  return content.sections?.['all-projects'] || null;
}

export async function getFeaturedProjects(limit: number = 3) {
  const allProjects = await getAllProjects();
  return allProjects?.components[0]?.variables?.projects?.filter((p: any) => p.featured).slice(0, limit) || [];
}