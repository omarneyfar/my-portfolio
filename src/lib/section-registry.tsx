// src/lib/section-registry.ts

import React, { ComponentType, ReactNode } from "react";
import { Section, SectionType, ComponentType as JsonComponentType } from "@/types/content.types";

// Sections (wrappers)
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";



// -----------------------------------------------
// REGISTRY: SECTION WRAPPERS
// -----------------------------------------------
export const sectionRegistry: Record<SectionType, ComponentType<any>> = {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
};

// -----------------------------------------------
// REGISTRY: INNER COMPONENTS
// -----------------------------------------------
export const componentRegistry: Record<JsonComponentType, ComponentType<any>> = {
  HeroComponent,
  SkillsGrid,
  ProjectGrid,
  AboutComponent,
  ContactForm,
};

// -----------------------------------------------
// HELPERS
// -----------------------------------------------
export const getSectionComponent = (type: SectionType): ComponentType<any> | null => {
  return sectionRegistry[type] || null;
};

export const getDynamicComponent = (type: JsonComponentType): ComponentType<any> | null => {
  return componentRegistry[type] || null;
};

// -----------------------------------------------
// RENDER A SINGLE SECTION
// -----------------------------------------------
export const renderSection = (section: Section<any>): ReactNode => {
  if (!section || !section.type) {
    console.error("Invalid section object:", section);
    return null;
  }

  const SectionWrapper = getSectionComponent(section.type);
  if (!SectionWrapper) {
    console.error(`Section type "${section.type}" not registered.`);
    return null;
  }

  return (
    <SectionWrapper key={section.type}>
      {section.components.map((component, idx) => {
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

// -----------------------------------------------
// RENDER MULTIPLE SECTIONS (page.sections)
// -----------------------------------------------
export const renderSections = (sections: Section<any>[]): ReactNode[] => {
  if (!Array.isArray(sections)) {
    console.error("renderSections expected an array");
    return [];
  }

  return sections
    .map((section) => renderSection(section))
    .filter(Boolean) as ReactNode[];
};
