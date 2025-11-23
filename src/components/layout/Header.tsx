'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  globals: any;
}

export default function Header({ globals }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
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
                  {globals?.siteName?.en?.split(' ').map((n: string) => n[0]).join('') || 'ON'}
                </span>
              </div>
              <span className="text-text-primary font-semibold font-mono text-sm">
                {globals?.siteName?.en || 'Omar Neyfar'}
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
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-bg-primary shadow-2xl border-l border-border-primary overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-8">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-10">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                      <span className="text-text-inverse font-bold text-xl">
                        {globals?.siteName?.en?.split(' ').map((n: string) => n[0]).join('') || 'ON'}
                      </span>
                    </div>
                    <span className="text-text-primary font-semibold font-mono text-base">
                      {globals?.siteName?.en || 'Omar Neyfar'}
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-12 h-12 rounded-xl bg-bg-surface/80 flex items-center justify-center text-text-secondary hover:text-text-primary border border-border-muted hover:border-accent transition-all active:scale-95"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-border-muted mb-8" />

                {/* Navigation Links */}
                <nav className="space-y-2 mb-10">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="block text-text-secondary hover:text-text-primary hover:bg-bg-surface/60 transition-all py-4 px-4 text-lg font-medium rounded-xl active:scale-98"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t(link.label)}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="h-px bg-border-muted mb-8" />

                {/* Settings & Actions */}
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <LanguageToggle />
                    </div>
                    <div className="flex-1">
                      <ThemeToggle />
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-accent to-accent/90 text-text-inverse rounded-xl font-semibold text-center text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 active:scale-98 transition-all"
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
