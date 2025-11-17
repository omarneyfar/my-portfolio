'use client';

import { motion } from 'motion/react';
import { ContactForm } from '../../../src/components/ContactForm';
import { getTranslations } from '../../../src/lib/i18n';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const t = getTranslations('en');

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="mb-4">{t.contact.title}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="mb-6">Get in touch</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00c2a8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#00c2a8]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm mb-1">Email</h4>
                      <a
                        href="mailto:omarneyfar@gmail.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-[#00c2a8] transition-colors"
                      >
                        omarneyfar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00c2a8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#00c2a8]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm mb-1">Phone</h4>
                      <a
                        href="tel:+21644785090"
                        className="text-gray-700 dark:text-gray-300 hover:text-[#00c2a8] transition-colors block"
                      >
                        +216 44 785 090
                      </a>
                      <a
                        href="tel:+21655117837"
                        className="text-gray-700 dark:text-gray-300 hover:text-[#00c2a8] transition-colors block"
                      >
                        +216 55 117 837
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00c2a8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#00c2a8]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm mb-1">Location</h4>
                      <p className="text-gray-700 dark:text-gray-300">Sfax, Tunisia</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3"
            >
              <div className="bg-white dark:bg-[#0f1724] rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <ContactForm translations={t} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
