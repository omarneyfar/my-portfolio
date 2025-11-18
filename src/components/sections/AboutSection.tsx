'use client';

import { ReactNode } from 'react';

interface AboutSectionProps {
  children: ReactNode;
  globals?: any;
}

export default function AboutSection({ children }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {children}
      </div>
    </section>
  );
}
