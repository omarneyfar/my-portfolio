'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { AboutVariables } from '@/lib/content.types';

export default function AboutComponent(props: AboutVariables) {
  const { t, language } = useLanguage();
  const content = props.content[language] || props.content.en;

  // Simple logic to split title for gradient effect (first word vs rest)
  // This is a basic approximation to match the "About [Name]" style
  const titleText = t(props.title);
  const firstSpaceIndex = titleText.indexOf(' ');
  const firstPart = firstSpaceIndex !== -1 ? titleText.substring(0, firstSpaceIndex) : titleText;
  const secondPart = firstSpaceIndex !== -1 ? titleText.substring(firstSpaceIndex + 1) : '';

  return (
    <section className="pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            {firstPart} <span className="text-gradient">{secondPart}</span>
          </h1>
          <div className="text-xl text-text-secondary max-w-3xl mx-auto space-y-4">
            {content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {props.contactInfo && (
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin className="w-4 h-4" />
                {t(props.contactInfo.location)}
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Mail className="w-4 h-4" />
                {props.contactInfo.email}
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Phone className="w-4 h-4" />
                {props.contactInfo.phone}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
