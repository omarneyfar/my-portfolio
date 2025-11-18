import fs from 'fs';
import path from 'path';
import { cache } from 'react';

export interface ContentData {
  globals: any;
  pages: any[];
  sections: any;
  languages: string[];
  defaultLanguage: string;
}

export const getContent = cache((): ContentData => {
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
});

export function getPageById(id: string) {
  const content = getContent();
  return content.pages.find((page) => page.id === id);
}

export function getSectionData(sectionId: string) {
  const content = getContent();
  return content.sections[sectionId];
}

export function getGlobals() {
  const content = getContent();
  return content.globals;
}

export function getAllProjects() {
  const content = getContent();
  const projectsSection = content.sections['all-projects'];
  return projectsSection?.components[0]?.variables?.projects || [];
}

export function getFeaturedProjects(limit: number = 3) {
  const allProjects = getAllProjects();
  return allProjects.filter((p: any) => p.featured).slice(0, limit);
}
