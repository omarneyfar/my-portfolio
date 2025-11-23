'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink, Calendar, User } from 'lucide-react'

interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'freelance' | 'tekab' | 'sofflex'
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  year: number
  client?: string
}

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const categoryColors = {
    freelance: 'bg-freelance/10 text-freelance border-freelance/20',
    tekab: 'bg-tekab/10 text-tekab border-tekab/20',
    sofflex: 'bg-sofflex/10 text-sofflex border-sofflex/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-bg-surface rounded-2xl overflow-hidden border border-border-muted hover:border-border-secondary transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-bg-secondary to-bg-surface overflow-hidden">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-freelance rounded-xl flex items-center justify-center">
                <span className="text-text-inverse font-bold text-xl">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category]}`}>
              {project.category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bg-surface/80 text-text-muted border border-border-muted">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-flex items-center px-2 py-1 rounded-lg bg-bg-surface/60 border border-border-muted text-xs text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center px-2 py-1 rounded-lg bg-bg-surface/60 border border-border-muted text-xs text-text-muted">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code
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
