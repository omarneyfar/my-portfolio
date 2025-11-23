'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MailIcon,
  ArrowUp,
  Heart,
  Code,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
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
    [t({ fr: 'Navigation', en: 'Navigation' })]: [
      { name: t({ fr: 'Accueil', en: 'Home' }), href: '/' },
      { name: t({ fr: 'À propos', en: 'About' }), href: '/about' },
      { name: t({ fr: 'Projets', en: 'Projects' }), href: '/projects' },
      { name: t({ fr: 'Contact', en: 'Contact' }), href: '/contact' },
    ],
    [t({ fr: 'Services', en: 'Services' })]: [
      { name: t({ fr: 'Développement Web', en: 'Web Development' }), href: '/contact?service=web' },
      { name: t({ fr: 'Applications Mobile', en: 'Mobile Apps' }), href: '/contact?service=mobile' },
      { name: t({ fr: 'Solutions SaaS', en: 'SaaS Solutions' }), href: '/contact?service=saas' },
      { name: t({ fr: 'Consulting', en: 'Consulting' }), href: '/contact?service=consulting' },
    ],
    [t({ fr: 'Technologies', en: 'Technologies' })]: [
      { name: 'Next.js / React', href: '/projects' },
      { name: 'Vue.js / Nuxt', href: '/projects' },
      { name: 'Node.js / Nest.js', href: '/projects' },
      { name: 'Flutter / React Native', href: '/projects' },
    ],
  };


  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: globals?.socials?.github?.url || 'https://github.com/omarneyfar',
      color: 'hover:text-text-primary'
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: globals?.socials?.linkedin?.url || 'https://linkedin.com/in/omarneyfar',
      color: 'hover:text-[#0077B5]'
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      href: globals?.socials?.instagram?.url || 'https://instagram.com/omarneyfar',
      color: 'hover:text-freelance',
    }, {
      name: 'Email',
      icon: MailIcon,
      href: `mailto:${globals?.email || 'omarneyfar@gmail.com'}`,
      color: 'hover:text-accent',
    },
  ];


  const contactInfo = [
    { icon: Mail, value: globals?.email || 'omarneyfar@gmail.com', href: `mailto:${globals?.email || 'omarneyfar@gmail.com'}`, label: t({ fr: 'Email', en: 'Email' }) },
    { icon: Phone, value: globals?.phone || '+216 44 78 50 90', href: `tel:${globals?.phone || '+216447850 90'}`, label: t({ fr: 'Téléphone', en: 'Phone' }) },
    { icon: MapPin, value: t(globals?.location) || t({ fr: 'Sfax, Tunisie', en: 'Sfax, Tunisia' }), href: '#', label: t({ fr: 'Localisation', en: 'Location' }) },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border-muted">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-freelance rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                <span className="text-text-inverse font-bold text-lg">
                  {globals?.siteName?.en?.split(' ').map((n: string) => n[0]).join('') || 'ON'}
                </span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-text-primary to-accent bg-clip-text text-transparent">
                {globals?.siteName?.en || 'Omar Naifar'}
              </span>
            </div>

            <p className="text-text-secondary leading-relaxed text-sm">
              {t({
                fr: 'Ingénieur Full-Stack passionné par la création de solutions web et mobile innovantes.',
                en: 'Full-Stack Engineer passionate about creating innovative web and mobile solutions.',
              })}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  {...(social.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`w-10 h-10 bg-bg-surface/60 rounded-xl flex items-center justify-center text-text-muted border border-border-muted transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-500 text-sm font-medium">
                {t({ fr: 'Disponible pour du freelance', en: 'Available for freelance' })}
              </span>
            </div>
          </motion.div>

          {/* Footer Links */}
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

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border-muted"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-start gap-3 p-4 bg-bg-surface/40 rounded-xl border border-border-muted hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-text-muted mb-1">{info.label}</p>
                  <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
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
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>{t({ fr: 'et', en: 'and' })}</span>
              <Code className="w-4 h-4 text-accent" />
              <span>
                {t({ fr: 'par', en: 'by' })} {globals?.siteName?.en || 'Omar Naifar'}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 text-text-muted text-sm"
            >
              <span>
                © 2025 {globals?.siteName?.en || 'Omar Naifar'}. {t({ fr: 'Tous droits réservés', en: 'All rights reserved' })}.
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-accent to-freelance text-text-inverse rounded-xl flex items-center justify-center shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, rotate: 360 }}
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
