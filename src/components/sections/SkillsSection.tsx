'use client';

import { ReactNode } from 'react';

interface SkillsSectionProps {
  children: ReactNode;
  globals?: any;
}

export default function SkillsSection({ children }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}
