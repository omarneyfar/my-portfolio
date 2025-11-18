'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
  Heart,
  Code,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  globals: any;
}

export default function Footer({ globals }: FooterProps) {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Navigation: [
      { name: t({ fr: 'Accueil', en: 'Home' }), href: '/' },
      { name: t({ fr: 'À propos', en: 'About' }), href: '/about' },
      { name: t({ fr: 'Projets', en: 'Projects' }), href: '/projects' },
      { name: t({ fr: 'Contact', en: 'Contact' }), href: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: globals?.socials?.github?.url || '#', color: 'hover:text-text-muted' },
    { name: 'LinkedIn', icon: Linkedin, href: globals?.socials?.linkedin?.url || '#', color: 'hover:text-tekab' },
    { name: 'Twitter', icon: Twitter, href: globals?.socials?.twitter?.url || '#', color: 'hover:text-accent' },
    {
      name: 'Instagram',
      icon: Instagram,
      href: globals?.socials?.instagram?.url || '#',
      color: 'hover:text-freelance',
    },
  ];

  const contactInfo = [
    { icon: Mail, value: globals?.email || 'email@example.com', href: `mailto:${globals?.email}` },
    { icon: Phone, value: globals?.phone || '+000 00 000 000', href: `tel:${globals?.phone}` },
    { icon: MapPin, value: t(globals?.location) || 'Location', href: '#' },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border-muted">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-freelance rounded-xl flex items-center justify-center">
                <span className="text-text-inverse font-bold">
                  {globals?.siteName?.en?.split(' ').map((n: string) => n[0]).join('') || 'ON'}
                </span>
              </div>
              <span className="text-xl font-bold text-text-primary">{globals?.siteName?.en || 'Portfolio'}</span>
            </div>

            <p className="text-text-secondary leading-relaxed">{t(globals?.about)}</p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-bg-surface/60 rounded-xl flex items-center justify-center text-text-muted border border-border-muted transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-text-secondary hover:text-accent transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border-muted"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  <info.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm">{info.value}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-text-muted text-sm">
                {t({ fr: 'Disponible pour du freelance', en: 'Available for freelance work' })}
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-bg-surface border-t border-border-muted">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 text-text-muted text-sm"
            >
              <span>{t({ fr: 'Fait avec', en: 'Made with' })}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>{t({ fr: 'et', en: 'and' })}</span>
              <Code className="w-4 h-4 text-accent" />
              <span>{t({ fr: 'par', en: 'by' })} {globals?.siteName?.en || 'Developer'}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 text-text-muted text-sm"
            >
              <span>© 2024 {t({ fr: 'Tous droits réservés', en: 'All rights reserved' })}</span>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-text-inverse rounded-xl flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors duration-200 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
