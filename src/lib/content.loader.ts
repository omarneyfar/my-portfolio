import { readFile } from 'fs/promises';
import { join } from 'path';
import { cache } from 'react';
import type { ContentJSON, SupportedLanguage } from './content.types';

const CONTENT_PATH = join(process.cwd(), 'data', 'content.json');

export const getContent = cache(async (): Promise<ContentJSON> => {
  try {
    const fileContent = await readFile(CONTENT_PATH, 'utf-8');
    const content: ContentJSON = JSON.parse(fileContent);
    
    if (!content || !content.globals || !content.pages || !content.sections) {
      throw new Error('Invalid content.json structure');
    }
    
    return content;
  } catch (error) {
    console.error('Error loading content.json:', error);
    throw new Error('Failed to load content');
  }
});

export async function getGlobals() {
  const content = await getContent();
  return content.globals;
}

export async function getPageById(id: string) {
  const content = await getContent();
  return content.pages.find((page) => page.id === id) || null;
}

export async function getSectionData(sectionId: string) {
  const content = await getContent();
  return content.sections[sectionId as keyof typeof content.sections] || null;
}

export async function getAllProjects() {
  const content = await getContent();
  const allProjectsSection = content.sections['all-projects'];
  return allProjectsSection?.components[0]?.variables?.projects || [];
}

export async function getFeaturedProjects(limit: number = 3) {
  const projects = await getAllProjects();
  return projects.filter((p) => p.featured).slice(0, limit);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getAllProjects();
  return projects.find((p) => p.id === slug) || null;
}

export async function getDefaultLanguage(): Promise<SupportedLanguage> {
  const content = await getContent();
  return content.defaultLanguage;
}

export async function getSupportedLanguages(): Promise<SupportedLanguage[]> {
  const content = await getContent();
  return content.languages;
}
