'use client';

import { motion } from 'motion/react';
import { getTranslations } from '../../../src/lib/i18n';
import { Mail, Phone, MapPin, Code2, Database, Smartphone, Cloud } from 'lucide-react';

export default function AboutPage() {
  const t = getTranslations('en');

  const skills = [
    { category: 'Mobile', icon: Smartphone, items: ['Flutter', 'Dart'] },
    { category: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', icon: Database, items: ['Node.js', 'Nest.js', 'Hono.js', 'Prisma'] },
    { category: 'Cloud', icon: Cloud, items: ['Firebase', 'Cloudflare', 'Supabase'] },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            {t.about.title}
          </motion.h1>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Contact Snapshot */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1"
            >
              <div className="bg-white dark:bg-[#0f1724] rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
                <h3 className="mb-6">{t.about.contact.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#00c2a8] mb-2">
                      <Mail size={18} />
                      <span className="text-sm">{t.about.contact.email}</span>
                    </div>
                    <a
                      href="mailto:omarneyfar@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-[#00c2a8] transition-colors"
                    >
                      omarneyfar@gmail.com
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#00c2a8] mb-2">
                      <Phone size={18} />
                      <span className="text-sm">{t.about.contact.phone}</span>
                    </div>
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

                  <div>
                    <div className="flex items-center gap-2 text-[#00c2a8] mb-2">
                      <MapPin size={18} />
                      <span className="text-sm">{t.about.contact.location}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{t.about.contact.locationValue}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Summary & Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 space-y-12"
            >
              {/* Summary */}
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.about.summary}
                </p>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="mb-8">{t.about.timeline.title}</h3>
                <div className="space-y-6">
                  {t.about.timeline.items.map((item: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 pb-6 border-l-2 border-[#00c2a8] last:border-l-0 last:pb-0"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 bg-[#00c2a8] rounded-full -translate-x-[9px]" />
                      <p className="text-sm text-[#00c2a8] mb-1">{item.period}</p>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="mb-8">{t.about.skills.title}</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {skills.map((skillSet, index) => (
                    <motion.div
                      key={skillSet.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-[#f6f8fa] dark:bg-[#081320] rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <skillSet.icon size={20} className="text-[#00c2a8]" />
                        <h4 className="text-sm">{skillSet.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillSet.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white dark:bg-[#0f1724] rounded-full text-sm border border-gray-200 dark:border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
