'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  description: { fr: string; en: string } | string;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  year: number;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useLanguage();

  const categoryColors: { [key: string]: string } = {
    freelance: 'bg-freelance/10 text-freelance border-freelance/20',
    tekab: 'bg-tekab/10 text-tekab border-tekab/20',
    sofflex: 'bg-sofflex/10 text-sofflex border-sofflex/20',
    personal: 'bg-accent/10 text-accent border-accent/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-bg-surface rounded-2xl overflow-hidden border border-border-muted hover:border-border-secondary transition-all duration-300">
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

          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                categoryColors[project.category] || categoryColors.personal
              }`}
            >
              {project.category}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bg-surface/80 text-text-muted border border-border-muted">
              {project.year}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-text-secondary line-clamp-3">{t(project.description)}</p>

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
                +{project.technologies.length - 4} {t({ fr: 'autres', en: 'more' })}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border-muted">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <Link
              href={`/projects/${project.id}`}
              className="ml-auto text-accent hover:text-accent/80 transition-colors font-medium text-sm flex items-center gap-1"
            >
              {t({ fr: 'Voir détails', en: 'View details' })}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
