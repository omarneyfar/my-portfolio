'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from '../../../src/components/ProjectCard';
import { getTranslations } from '../../../src/lib/i18n';
import { projects, Project } from '../../../src/data/projects';

export default function ProjectsPage() {
  const t = getTranslations('en');
  const [filter, setFilter] = useState<string>('All');

  const filters = ['All', 'Freelance', 'Company', 'Mobile', 'Personal'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">{t.projects.title}</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A collection of my work across different domains
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === filterOption
                  ? 'bg-[#00c2a8] text-white'
                  : 'bg-white dark:bg-[#0f1724] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-[#00c2a8]'
              }`}
            >
              {t.projects[`filter${filterOption}` as keyof typeof t.projects] || filterOption}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProjectCard project={project} locale="en" />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
