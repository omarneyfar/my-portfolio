'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectDetailProps {
  project: any;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { t } = useLanguage();

  const categoryColors: { [key: string]: string } = {
    freelance: 'bg-freelance/10 text-freelance border-freelance/20',
    tekab: 'bg-tekab/10 text-tekab border-tekab/20',
    sofflex: 'bg-sofflex/10 text-sofflex border-sofflex/20',
    personal: 'bg-accent/10 text-accent border-accent/20',
  };

  return (
    <div className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t({ fr: 'Retour aux projets', en: 'Back to projects' })}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              {project.title}
            </h1>
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${
                categoryColors[project.category] || categoryColors.personal
              }`}
            >
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-6 mb-8 text-text-muted">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t({ fr: 'Code source', en: 'Source code' })}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t({ fr: 'Démo en direct', en: 'Live demo' })}</span>
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-surface">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-freelance rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  {t({ fr: 'Description', en: 'Description' })}
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {t(project.longDescription || project.description)}
                </p>
              </div>

              {project.client && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {t({ fr: 'Client', en: 'Client' })}
                  </h3>
                  <p className="text-text-secondary">{project.client}</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-bg-surface rounded-2xl p-6 border border-border-muted">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {t({ fr: 'Technologies', en: 'Technologies' })}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-bg-surface/60 border border-border-muted text-sm text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="bg-bg-surface rounded-2xl p-6 border border-border-muted space-y-4">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {t({ fr: 'Liens', en: 'Links' })}
                </h3>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-bg-surface/60 border border-border-muted hover:border-accent transition-colors"
                  >
                    <Github className="w-5 h-5 text-accent" />
                    <span className="text-text-primary">
                      {t({ fr: 'Voir le code', en: 'View code' })}
                    </span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-bg-surface/60 border border-border-muted hover:border-accent transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-accent" />
                    <span className="text-text-primary">
                      {t({ fr: 'Visiter le site', en: 'Visit website' })}
                    </span>
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
