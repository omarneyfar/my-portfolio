'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Download, Github, Linkedin, Mail } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('EN')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Projects', 'Contact']
  const languages = ['EN', 'FR']

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
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl flex items-center justify-center">
              <span className="text-text-inverse font-bold text-lg">ON</span>
              </div>
              <span className="text-text-primary font-semibold font-mono text-sm">Omar Naifar</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-text-secondary hover:text-text-primary transition-colors relative group"
                >
                  {link}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#00C2A8] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="hidden md:flex items-center gap-1 bg-bg-surface/60 rounded-lg p-1 border border-border-muted">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 rounded text-sm transition-all ${
                      currentLang === lang
                        ? 'bg-accent text-text-inverse'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Button */}
              <button className="hidden md:block px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md">
                Hire Omar
              </button>

              {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl flex items-center justify-center">
                    <span className="text-text-inverse font-bold text-lg">ON</span>
                  </div>
                  <span className="text-text-primary font-semibold font-mono text-sm">Omar Naifar</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-lg bg-bg-surface/60 flex items-center justify-center text-text-secondary border border-border-muted"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-text-secondary hover:text-text-primary transition-colors py-3 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-1 bg-bg-surface/60 rounded-lg p-1 border border-border-muted">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setCurrentLang(lang)}
                      className={`flex-1 px-3 py-2 rounded text-sm transition-all ${
                        currentLang === lang
                          ? 'bg-accent text-text-inverse'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button className="w-full px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md">
                  Hire Omar
                </button>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
