'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContent } from '@/hooks/useContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { content } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: { fr: 'Accueil', en: 'Home' }, href: '/' },
    { label: { fr: 'Projets', en: 'Projects' }, href: '/projects' },
    { label: { fr: 'À propos', en: 'About' }, href: '/about' },
    { label: { fr: 'Contact', en: 'Contact' }, href: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 shadow-lg backdrop-blur-md glass border-border-primary'
            : 'py-4 backdrop-blur-md glass border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl flex items-center justify-center">
                <span className="text-text-inverse font-bold text-lg">
                  {content?.globals.siteName.en.split(' ').map((n: string) => n[0]).join('') || 'ON'}
                </span>
              </div>
              <span className="text-text-primary font-semibold font-mono text-sm">
                {content?.globals.siteName.en || 'Omar Neyfar'}
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors relative group"
                >
                  {t(link.label)}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#00C2A8] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              <Link
                href="/contact"
                className="hidden md:block px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md"
              >
                {t({ fr: 'Me contacter', en: 'Contact Me' })}
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-lg bg-bg-surface/60 flex items-center justify-center text-text-secondary hover:text-text-primary border border-border-muted"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-bg-primary shadow-xl border-l border-border-primary"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl flex items-center justify-center">
                      <span className="text-text-inverse font-bold text-lg">
                        {content?.globals.siteName.en.split(' ').map((n: string) => n[0]).join('') || 'ON'}
                      </span>
                    </div>
                    <span className="text-text-primary font-semibold font-mono text-sm">
                      {content?.globals.siteName.en || 'Omar Neyfar'}
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-lg bg-bg-surface/60 flex items-center justify-center text-text-secondary border border-border-muted"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-text-secondary hover:text-text-primary transition-colors py-3 text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(link.label)}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold text-center hover:translate-y-[-2px] transition-transform duration-150 shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t({ fr: 'Me contacter', en: 'Contact Me' })}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
