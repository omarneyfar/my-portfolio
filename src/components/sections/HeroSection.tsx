'use client';

import { ReactNode } from 'react';

interface HeroSectionProps {
  children: ReactNode;
  globals?: any;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary to-bg-secondary md:pt-0 pt-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}
