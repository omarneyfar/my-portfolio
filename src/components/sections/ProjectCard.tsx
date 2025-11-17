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
    freelance: 'bg-[#FFB86B]/10 text-[#FFB86B] border-[#FFB86B]/20',
    tekab: 'bg-[#00C2A8]/10 text-[#00C2A8] border-[#00C2A8]/20',
    sofflex: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-[#0B1621] rounded-2xl overflow-hidden border border-white/4 hover:border-white/8 transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-[#1a2332] to-[#0f1724] overflow-hidden">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">
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
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-semibold text-white group-hover:text-[#00C2A8] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-flex items-center px-2 py-1 rounded-lg bg-white/6 border border-white/4 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center px-2 py-1 rounded-lg bg-white/6 border border-white/4 text-xs text-gray-400">
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
                  className="inline-flex items-center gap-2 text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors text-sm font-medium"
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
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
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
              <ArrowRight className="w-5 h-5 text-[#00C2A8]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#00C2A8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  )
}
