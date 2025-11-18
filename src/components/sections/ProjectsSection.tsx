'use client';

import { ReactNode } from 'react';

interface ProjectsSectionProps {
  children: ReactNode;
  globals?: any;
}

export default function ProjectsSection({ children }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {children}
      </div>
    </section>
  );
}
