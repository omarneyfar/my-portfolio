"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { HeroVariables } from "@/lib/content.types";
import { ArrowRight } from "lucide-react";

export default function HeroComponent(props: HeroVariables) {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
          <span className="text-text-primary">{t(props.headline)}</span>
          {/* <span span className="text-gradient">Full-Stack Engineer</span> */}
        </h1>
        <div className="flex items-center gap-2 text-accent font-mono text-sm">
          <span>{t(props.eyeBrowText)}</span>
        </div>
        <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
          {t(props.description)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            className="px-8 py-4 bg-accent text-text-inverse rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-150 hover:translate-y-[-2px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={props.ctaPrimary.link}
              aria-label={t(props.ctaPrimary.text)}
            >
              {t(props.ctaPrimary.text)}
            </Link>
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-border-muted text-text-primary bg-transparent rounded-xl font-semibold hover:border-border-secondary transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={props.ctaSecondary.link}
              aria-label={t(props.ctaSecondary.text)}
            >
              {t(props.ctaSecondary.text)}
            </Link>
          </motion.button>
        </div>
      </motion.div>

      {/* <motion.div
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
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Main Laptop Mockup */}
        <div className="relative max-w-[680px] mx-auto">
          {/* Ribbon */}
          <motion.div
            className="absolute -top-4 -left-4 z-10 bg-freelance text-text-inverse px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
            initial={{ rotate: -15, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            MVP in 1 month
          </motion.div>

          {/* Laptop Card */}
          <motion.div
            className="relative bg-bg-surface rounded-2xl overflow-hidden shadow-2xl border border-border-muted"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Laptop Screen */}
            <div className="aspect-video bg-gradient-to-br from-bg-secondary to-bg-surface p-8">
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl mx-auto flex items-center justify-center">
                    <span className="text-text-inverse font-bold text-xl">
                      ON
                    </span>
                  </div>
                  <h3 className="text-text-primary text-xl font-semibold">
                    Project Preview
                  </h3>
                  <p className="text-text-muted text-sm">
                    Modern web application
                  </p>
                </div>
              </div>
            </div>

            {/* Laptop Keyboard */}
            <div className="h-12 bg-bg-secondary border-t border-border-muted" />
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            className="absolute -bottom-8 -right-8 w-32 h-64 bg-bg-surface rounded-2xl shadow-xl border border-border-muted overflow-hidden"
            initial={{ opacity: 0, rotate: 15 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ rotate: 5 }}
          >
            <div className="h-full bg-gradient-to-br from-bg-secondary to-bg-surface p-4">
              <div className="h-full flex flex-col items-center justify-center space-y-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-lg flex items-center justify-center">
                  <span className="text-text-inverse font-bold text-xs">
                    ON
                  </span>
                </div>
                <div className="w-12 h-1 bg-text-muted/20 rounded" />
                <div className="w-16 h-1 bg-text-muted/10 rounded" />
                <div className="w-14 h-1 bg-text-muted/10 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Floating Code Snippets */}
          <motion.div
            className="absolute top-8 -left-8 w-24 h-16 bg-bg-surface rounded-lg border border-border-muted p-2 opacity-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="space-y-1">
              <div className="w-full h-1 bg-accent rounded" />
              <div className="w-3/4 h-1 bg-freelance rounded" />
              <div className="w-1/2 h-1 bg-text-primary rounded" />
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 left-1/4 w-20 h-12 bg-bg-surface rounded-lg border border-border-muted p-2 opacity-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <div className="space-y-1">
              <div className="w-full h-1 bg-text-primary rounded" />
              <div className="w-2/3 h-1 bg-accent rounded" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
