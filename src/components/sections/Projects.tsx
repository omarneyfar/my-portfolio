'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectsProps {
  projects: any[];
  showFeaturedOnly?: boolean;
  title?: any;
}

export default function Projects({ projects, showFeaturedOnly = false, title }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const featuredProjects = projects.filter((p: any) => p.featured).slice(0, 3);
  const displayedProjects = showFeaturedOnly ? (showAll ? projects : featuredProjects) : projects;

  const defaultTitle = showFeaturedOnly 
    ? { fr: 'Projets Récents', en: 'Recent Projects' }
    : { fr: 'Tous mes projets', en: 'All My Projects' };

  return (
    <section id="projects" className="py-20 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t(title || defaultTitle)}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t({
              fr: 'Une sélection de projets récents présentant le développement full stack, les technologies modernes et des solutions innovantes.',
              en: 'A selection of recent work showcasing full-stack development, modern technologies, and innovative solutions.',
            })}
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project: any, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {showFeaturedOnly && !showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md"
            >
              {t({ fr: 'Voir plus de projets', en: 'Show More Projects' })}
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </motion.div>
        )}

        {showFeaturedOnly && showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-block px-8 py-4 border-2 border-border-muted text-text-primary rounded-xl font-semibold hover:border-border-secondary transition-all"
            >
              {t({ fr: 'Voir tous les projets', en: 'View All Projects' })}
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
