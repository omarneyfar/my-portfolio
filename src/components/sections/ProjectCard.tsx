'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { Project } from '@/data/types'

interface ProjectCardProps {
  project: Project
  index?: number
  locale: 'en' | 'fr'
}

export default function ProjectCard({ project, index = 0, locale = 'en' }: ProjectCardProps) {
  const categoryColors = {
    freelance: 'bg-freelance/10 text-freelance border-freelance/20',
    tekab: 'bg-tekab/10 text-tekab border-tekab/20',
    sofflex: 'bg-sofflex/10 text-sofflex border-sofflex/20',
  }
  
  // Get the correct text based on locale
  const getLocalizedText = (text: any) => 
    typeof text === 'string' ? text : text[locale];
    
  // Get the first letter of the title for the fallback icon
  const getTitleInitial = (title: any) => 
    typeof title === 'string' ? title.charAt(0) : title[locale].charAt(0);
    
  // Determine the category class based on project slug or other criteria
  const getCategoryClass = (slug: string) => {
    if (slug.includes('freelance')) return 'freelance';
    if (slug.includes('tekab')) return 'tekab';
    if (slug.includes('sofflex')) return 'sofflex';
    return 'freelance'; // default
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full flex flex-col"
    >
      <div className="relative bg-bg-surface rounded-2xl overflow-hidden border border-border-muted hover:border-border-secondary transition-all duration-300 flex-1 flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-bg-secondary to-bg-surface overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-tertiary to-bg-surface/50">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-freelance/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-text-primary/50">
                {getTitleInitial(project.title)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category and Title */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[getCategoryClass(project.slug)]}`}>
              {getCategoryClass(project.slug).charAt(0).toUpperCase() + getCategoryClass(project.slug).slice(1)}
            </span>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
              {getLocalizedText(project.title)}
            </h3>
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-4 line-clamp-2 flex-1">
            {getLocalizedText(project.shortDescription)}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs rounded bg-bg-secondary text-text-secondary">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs text-text-tertiary self-center">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-2 mt-auto">
            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  {locale === 'en' ? 'Live Demo' : 'Démo'}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  {locale === 'en' ? 'Code' : 'Code source'}
                </a>
              )}
            </div>
            
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRight className="w-5 h-5 text-accent" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  )
}
