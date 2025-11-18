import React, { ComponentType, ReactNode } from 'react';
import type { SectionType, ComponentType as JsonComponentType } from './content.types';

import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

import HeroComponent from '@/components/dynamic/HeroComponent';
import SkillsGrid from '@/components/dynamic/SkillsGrid';
import ProjectGrid from '@/components/dynamic/ProjectGrid';
import AboutComponent from '@/components/dynamic/AboutComponent';
import ContactForm from '@/components/dynamic/ContactForm';

export const sectionRegistry: Record<SectionType, ComponentType<any>> = {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
};

export const componentRegistry: Record<JsonComponentType, ComponentType<any>> = {
  HeroComponent,
  SkillsGrid,
  ProjectGrid,
  AboutComponent,
  ContactForm,
};

export const getSectionComponent = (type: SectionType): ComponentType<any> | null => {
  return sectionRegistry[type] || null;
};

export const getDynamicComponent = (type: JsonComponentType): ComponentType<any> | null => {
  return componentRegistry[type] || null;
};

export const renderSection = (section: any, globals?: any): ReactNode => {
  if (!section || !section.type) {
    console.error('Invalid section object:', section);
    return null;
  }

  const SectionWrapper = getSectionComponent(section.type);
  if (!SectionWrapper) {
    console.error(`Section type "${section.type}" not registered.`);
    return null;
  }

  return (
    <SectionWrapper key={section.type} globals={globals}>
      {section.components?.map((component: any, idx: number) => {
        const Component = getDynamicComponent(component.type);

        if (!Component) {
          console.error(`Component "${component.type}" is not registered.`);
          return null;
        }

        return (
          <Component
            key={`${component.id}-${idx}`}
            {...component.variables}
          />
        );
      })}
    </SectionWrapper>
  );
};

export const renderSections = (sections: any[], globals?: any): ReactNode[] => {
  if (!Array.isArray(sections)) {
    console.error('renderSections expected an array');
    return [];
  }

  return sections
    .map((section) => renderSection(section, globals))
    .filter(Boolean) as ReactNode[];
};
