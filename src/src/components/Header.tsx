'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DarkModeToggle } from './DarkModeToggle';

interface HeaderProps {
  locale?: string;
  translations: any;
}

export function Header({ locale = 'en', translations }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: translations.nav.home },
    { href: '/about', label: translations.nav.about },
    { href: '/projects', label: translations.nav.projects },
    { href: '/contact', label: translations.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#081320]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00c2a8] to-[#ffb86b] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ON</span>
            </div>
            <span className="hidden sm:block font-bold text-lg">Omar Naifar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00c2a8] dark:hover:text-[#00c2a8] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <DarkModeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#00c2a8] dark:hover:text-[#00c2a8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
