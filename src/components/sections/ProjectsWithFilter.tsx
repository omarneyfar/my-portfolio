'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Filter, SortAsc } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectsWithFilterProps {
  projects: any[];
  filterOptions: any[];
  sortOptions: any[];
  title: any;
}

export default function ProjectsWithFilter({ projects, filterOptions, sortOptions, title }: ProjectsWithFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSort, setSelectedSort] = useState('newest');
  const { t } = useLanguage();

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    if (selectedFilter !== 'all') {
      result = result.filter(p => p.category === selectedFilter);
    }

    result.sort((a, b) => {
      switch (selectedSort) {
        case 'newest':
          return b.year - a.year;
        case 'oldest':
          return a.year - b.year;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return result;
  }, [projects, selectedFilter, selectedSort]);

  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t(title)}
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t({
              fr: 'Explorez tous mes projets avec des filtres et options de tri.',
              en: 'Explore all my projects with filters and sorting options.',
            })}
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1">
            <label className="flex items-center gap-2 text-text-secondary text-sm mb-2">
              <Filter className="w-4 h-4" />
              {t({ fr: 'Filtrer par catégorie', en: 'Filter by category' })}
            </label>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option: any) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedFilter(option.id)}
                  className={`px-4 py-2 rounded-xl border transition-all ${
                    selectedFilter === option.id
                      ? 'bg-accent text-text-inverse border-accent'
                      : 'bg-bg-surface text-text-secondary border-border-muted hover:border-accent'
                  }`}
                >
                  {t(option.label)}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-64">
            <label className="flex items-center gap-2 text-text-secondary text-sm mb-2">
              <SortAsc className="w-4 h-4" />
              {t({ fr: 'Trier par', en: 'Sort by' })}
            </label>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="w-full px-4 py-2 bg-bg-surface border border-border-muted rounded-xl text-text-primary focus:outline-none focus:border-accent transition-colors"
            >
              {sortOptions.map((option: any) => (
                <option key={option.id} value={option.id} className="bg-bg-surface">
                  {t(option.label)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProjects.map((project: any, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredAndSortedProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">
              {t({ fr: 'Aucun projet trouvé avec ces filtres.', en: 'No projects found with these filters.' })}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
