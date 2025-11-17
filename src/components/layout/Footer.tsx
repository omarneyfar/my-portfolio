'use client'

import { motion } from 'framer-motion'
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
  Code
} from 'lucide-react'

const footerLinks = {
  'Navigation': [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ],
  'Services': [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Apps', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Consulting', href: '#' }
  ],
  'Resources': [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Resume', href: '#' },
    { name: 'GitHub', href: '#' }
  ]
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-[#0077B5]' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-[#1DA1F2]' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-[#E4405F]' }
]

const contactInfo = [
  { icon: Mail, value: 'omar.naifar@example.com', href: 'mailto:omar.naifar@example.com' },
  { icon: Phone, value: '+216 12 345 678', href: 'tel:+21612345678' },
  { icon: MapPin, value: 'Tunis, Tunisia', href: '#' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0F1724] border-t border-white/4">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">ON</span>
              </div>
              <span className="text-xl font-bold text-white">Omar Naifar</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Passionate full-stack developer building innovative digital solutions 
              with modern technologies. Let's create something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/4 rounded-xl flex items-center justify-center text-gray-400 border border-white/4 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#00C2A8] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <info.icon className="w-4 h-4 text-[#00C2A8]" />
                  <span className="text-sm">{info.value}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Available for freelance work</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#081320] border-t border-white/4">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-[#00C2A8]" />
              <span>by Omar Naifar</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 text-gray-400 text-sm"
            >
              <span>© 2024 All rights reserved</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#00C2A8] text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-[#00C2A8]/90 transition-colors duration-200 z-50"
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
  )
}
