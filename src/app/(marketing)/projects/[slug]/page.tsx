'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../../../src/data/projects';
import { getTranslations } from '../../../../src/lib/i18n';
import { Button } from '../../../../src/components/Button';

export default function ProjectDetailPage() {
  const params = useParams();
  const t = getTranslations('en');
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4">{t.common.notFound}</h1>
          <Link href="/projects" className="text-[#00c2a8] hover:underline">
            {t.projectDetail.backToProjects}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#00c2a8] hover:underline mb-8"
          >
            <ArrowLeft size={20} />
            {t.projectDetail.backToProjects}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-4">
              <h1>{project.title}</h1>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c2a8] text-white">
                {project.type}
              </span>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300">{project.short}</p>
          </div>

          {/* Meta Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-[#f6f8fa] dark:bg-[#0f1724] rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm text-[#00c2a8] mb-2">{t.projectDetail.role}</h3>
              <p>{project.role}</p>
            </div>
            {project.period && (
              <div className="p-6 bg-[#f6f8fa] dark:bg-[#0f1724] rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-sm text-[#00c2a8] mb-2">{t.projectDetail.period}</h3>
                <p>{project.period}</p>
              </div>
            )}
          </div>

          {/* Responsibilities */}
          <div className="mb-12">
            <h2 className="mb-6">{t.projectDetail.responsibilities}</h2>
            <ul className="space-y-3">
              {project.responsibilities.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 bg-[#00c2a8] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="mb-6">{t.projectDetail.technologies}</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-white dark:bg-[#0f1724] rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          {(project.demoUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <Button
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <ExternalLink size={18} className="mr-2" />
                  {t.projectDetail.demo}
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github size={18} className="mr-2" />
                  {t.projectDetail.github}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
