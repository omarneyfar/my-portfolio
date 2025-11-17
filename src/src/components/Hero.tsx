'use client';

import { motion } from 'motion/react';
import { Button } from './Button';
import { ArrowRight, Zap, Code2, Sparkles } from 'lucide-react';

interface HeroProps {
  translations: any;
}

export function Hero({ translations }: HeroProps) {
  const badges = [
    { icon: Zap, text: translations.hero.badges.saas },
    { icon: Code2, text: translations.hero.badges.react },
    { icon: Sparkles, text: translations.hero.badges.ai },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f6f8fa] via-white to-[#f6f8fa] dark:from-[#081320] dark:via-[#0f1724] dark:to-[#081320]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#00c2a8] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#ffb86b] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00c2a8] to-[#ffb86b]">
              {translations.hero.headline}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {translations.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              {translations.hero.primaryCta}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/projects'}
            >
              {translations.hero.secondaryCta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-[#0f1724]/60 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700"
              >
                <badge.icon size={18} className="text-[#00c2a8]" />
                <span className="text-sm">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
