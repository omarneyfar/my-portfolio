'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { HeroVariables } from '@/lib/content.types';

export default function HeroComponent(props: HeroVariables) {
  const { t } = useLanguage();

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          {t(props.headline)}
        </h1>
        <p className="text-xl lg:text-2xl text-blue-400 mb-6">
          {t(props.subtext)}
        </p>
        <p className="text-lg text-gray-300 mb-8">
          {t(props.description)}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={props.ctaPrimary.link}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            aria-label={t(props.ctaPrimary.text)}
          >
            {t(props.ctaPrimary.text)}
          </Link>
          <Link
            href={props.ctaSecondary.link}
            className="px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-lg font-semibold transition-colors"
            aria-label={t(props.ctaSecondary.text)}
          >
            {t(props.ctaSecondary.text)}
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-96 lg:h-[500px]"
      >
        <Image
          src={props.image}
          alt={t(props.headline)}
          fill
          priority
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
