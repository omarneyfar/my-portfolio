'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface AboutSectionProps {
  aboutData: any;
}

export default function AboutSection({ aboutData }: AboutSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t(aboutData.title)}
          </h1>
          <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {t(aboutData.content) && typeof t(aboutData.content) === 'string' 
              ? t(aboutData.content).split('\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-lg text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))
              : aboutData.content[t({ fr: 'fr', en: 'en' })]?.map((paragraph: string, index: number) => (
                  <p key={index} className="text-lg text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))
            }
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-freelance/20 border border-border-muted">
              {aboutData.image ? (
                <img
                  src={aboutData.image}
                  alt={t(aboutData.title)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent to-freelance rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">ON</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
