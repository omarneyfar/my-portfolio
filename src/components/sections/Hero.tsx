'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Cpu, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  globals: any;
  heroData: any;
}

export default function Hero({ globals, heroData }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary to-bg-secondary pt-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2 text-accent font-mono text-sm">
              <span>{t(globals.jobTitle)}</span>
              <span>•</span>
              <span>{t(globals.location)}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-text-primary">{t(heroData.headline)}</span>
              <br />
              <span className="text-gradient">{t(heroData.subtext)}</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              {t(heroData.description)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={heroData.ctaPrimary.link}>
                <motion.button
                  className="px-8 py-4 bg-accent text-text-inverse rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-150 hover:translate-y-[-2px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t(heroData.ctaPrimary.text)}
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>

              <Link href={heroData.ctaSecondary.link}>
                <motion.button
                  className="px-8 py-4 border-2 border-border-muted text-text-primary bg-transparent rounded-xl font-semibold hover:border-border-secondary transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t(heroData.ctaSecondary.text)}
                </motion.button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-surface/60 border border-border-muted"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5 text-freelance" />
                <div>
                  <div className="font-semibold text-text-primary text-sm">
                    {t({ fr: 'MVP en 1 mois', en: 'MVP in 1 month' })}
                  </div>
                  <div className="text-xs text-text-muted">
                    {t({ fr: 'Livraison rapide', en: 'Fast delivery' })}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-surface/60 border border-border-muted"
                whileHover={{ scale: 1.05 }}
              >
                <Cpu className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold text-text-primary text-sm">
                    {t({ fr: 'IA & Automation', en: 'AI & Automation' })}
                  </div>
                  <div className="text-xs text-text-muted">
                    {t({ fr: 'Solutions intelligentes', en: 'Smart solutions' })}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-surface/60 border border-border-muted"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-5 h-5 text-freelance" />
                <div>
                  <div className="font-semibold text-text-primary text-sm">
                    {t({ fr: 'Bout en bout', en: 'End-to-end' })}
                  </div>
                  <div className="text-xs text-text-muted">
                    {t({ fr: 'Développement complet', en: 'Full development' })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-[680px] mx-auto">
              <motion.div
                className="absolute -top-4 -left-4 z-10 bg-freelance text-text-inverse px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
                initial={{ rotate: -15, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
              >
                {t({ fr: 'MVP en 1 mois', en: 'MVP in 1 month' })}
              </motion.div>

              <motion.div
                className="relative bg-bg-surface rounded-2xl overflow-hidden shadow-2xl border border-border-muted"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video bg-gradient-to-br from-bg-secondary to-bg-surface p-8">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl mx-auto flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {globals.siteName.en.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-text-primary font-semibold">
                        {t({ fr: 'Prêt à transformer vos idées', en: 'Ready to transform your ideas' })}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
