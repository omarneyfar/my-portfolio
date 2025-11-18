'use client';

import { ReactNode } from 'react';

interface SkillsSectionProps {
  children: ReactNode;
  globals?: any;
}

export default function SkillsSection({ children }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 bg-gray-900/50">
      <div className="max-w-[1200px] mx-auto">
        {children}
      </div>
    </section>
  );
}
