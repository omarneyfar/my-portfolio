'use client';

import { ReactNode } from 'react';

interface ContactSectionProps {
  children: ReactNode;
  globals?: any;
}

export default function ContactSection({ children }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {children}
      </div>
    </section>
  );
}
