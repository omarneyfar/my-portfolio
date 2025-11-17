'use client';

import { motion } from 'motion/react';
import { Hero } from '../../src/components/Hero';
import { ProjectCard } from '../../src/components/ProjectCard';
import { Button } from '../../src/components/Button';
import { getTranslations } from '../../src/lib/i18n';
import { projects } from '../../src/data/projects';
import { Zap, Code, TrendingUp, Calendar } from 'lucide-react';

export default function HomePage() {
  const t = getTranslations('en');
  const featuredProjects = projects.filter(p => p.featured);

  const sellingPoints = [
    {
      icon: Zap,
      title: t.sellingPoints.speed.title,
      description: t.sellingPoints.speed.description,
    },
    {
      icon: Code,
      title: t.sellingPoints.architecture.title,
      description: t.sellingPoints.architecture.description,
    },
    {
      icon: TrendingUp,
      title: t.sellingPoints.results.title,
      description: t.sellingPoints.results.description,
    },
  ];

  return (
    <>
      <Hero translations={t} />

      {/* Selling Points */}
      <section className="py-20 bg-white dark:bg-[#0f1724]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {t.sellingPoints.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {sellingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#f6f8fa] dark:bg-[#081320] border border-gray-200 dark:border-gray-800"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00c2a8] to-[#ffb86b] rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="text-white" size={24} />
                </div>
                <h3 className="mb-3">{point.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Band */}
      <section className="py-4 bg-gradient-to-r from-[#00c2a8] to-[#ffb86b] text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3">
            <Calendar size={20} />
            <p className="text-lg">
              {t.deliveryBand.text} <strong>December 2025</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#f6f8fa] dark:bg-[#081320]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.featuredProjects.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} locale="en" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/projects'}
            >
              {t.featuredProjects.viewAll}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-[#081320] to-[#0f1724] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">{t.contactCta.title}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.contactCta.description}
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              {t.contactCta.button}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
