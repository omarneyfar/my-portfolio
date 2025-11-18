'use client';

import { ReactNode } from 'react';

interface HeroSectionProps {
  children: ReactNode;
  globals?: any;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
