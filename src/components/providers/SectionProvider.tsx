// src/components/providers/SectionProvider.tsx
'use client';

import { ReactNode, createContext, useContext } from 'react';
import { ContentData } from '@/lib/content.server';
import { sectionRegistry, registerSections } from '@/lib/section-registry';
import { HeroSection, ProjectsSection, SkillsSection, ContactSection } from '@/components/sections';

// Register all sections when the module loads
registerSections([
  { type: 'hero', component: HeroSection },
  { type: 'projects', component: ProjectsSection },
  { type: 'skills', component: SkillsSection },
  { type: 'contact', component: ContactSection },
]);

type SectionContextType = {
  getSection: (sectionId: string) => ReactNode;
  renderSections: (sections: ContentData['sections']) => ReactNode[];
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const getSection = (sectionId: string) => {
    // In a real implementation, you would fetch the section data here
    // For now, we'll return null and handle the actual data in the page components
    return null;
  };

  const renderSections = (sections: ContentData['sections']) => {
    return Object.entries(sections).map(([sectionId, sectionData]) => {
      const Component = sectionRegistry[sectionData.type];
      if (!Component) {
        console.warn(`No component registered for section type: ${sectionData.type}`);
        return null;
      }
      return <Component key={sectionId} data={sectionData} />;
    });
  };

  return (
    <SectionContext.Provider value={{ getSection, renderSections }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSections() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSections must be used within a SectionProvider');
  }
  return context;
}