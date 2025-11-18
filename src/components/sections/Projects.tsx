'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { ProjectsData, Project } from '@/data/types'
import { ArrowRight } from 'lucide-react'

interface ProjectsProps {
  data: ProjectsData
  locale: 'en' | 'fr'
}

export default function Projects({ data, locale = 'en' }: ProjectsProps) {
  const featuredProjects = data.projects.filter(project => project.featured)
  const otherProjects = data.projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.title[locale]}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {data?.subtitle?.[locale] || 'A selection of my recent work. Each project comes with its own set of challenges and learning opportunities.'}
          </p>
        </div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              locale={locale}
            />
          ))}
        </motion.div>

        {/* All Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              {locale === 'en' ? 'All Projects' : 'Tous les projets'}
            </h3>
            <p className="text-text-muted">
              {locale === 'en' 
                ? 'Explore the complete collection of work across different categories'
                : 'Explorez la collection complète de travaux à travers différentes catégories'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                locale={locale}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-bg-surface/60 border border-border-muted">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {locale === 'en' ? 'Have a project in mind?' : 'Vous avez un projet en tête ?'}
              </h3>
              <p className="text-text-secondary">
                {locale === 'en' 
                  ? "Let's discuss how I can help bring your ideas to life"
                  : 'Discutons de la façon dont je peux vous aider à concrétiser vos idées'}
              </p>
            </div>
            <motion.button
              className="px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {locale === 'en' ? 'Get in Touch' : 'Contactez-moi'}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
