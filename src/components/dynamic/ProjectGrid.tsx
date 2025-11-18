'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ProjectsVariables } from '@/lib/content.types';

export default function ProjectGrid(props: ProjectsVariables) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = props.projects
    .filter((project) => filter === 'all' || project.category === filter)
    .sort((a, b) => {
      if (sortBy === 'newest') return b.year - a.year;
      if (sortBy === 'oldest') return a.year - b.year;
      if (sortBy === 'name-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'name-desc') return b.title.localeCompare(a.title);
      return 0;
    });

  const displayedProjects = showAll || !props.viewAllLink
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">{t(props.title)}</h2>

        {props.filterOptions && (
          <div className="flex flex-wrap gap-4">
            {props.filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setFilter(option.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === option.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label={`Filter by ${t(option.label)}`}
              >
                {t(option.label)}
              </button>
            ))}
          </div>
        )}

        {props.sortOptions && (
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            aria-label="Sort projects"
          >
            {props.sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {t(option.label)}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                {t(project.description)}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {props.viewAllLink && !showAll && filteredProjects.length > 3 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            aria-label="Show all projects"
          >
            {props.viewAllText ? t(props.viewAllText) : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
}
