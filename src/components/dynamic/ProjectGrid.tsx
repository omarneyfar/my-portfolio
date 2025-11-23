"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ProjectsVariables } from "@/lib/content.types";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid(props: ProjectsVariables) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = props.projects
    .filter((project) => filter === "all" || project.category === filter)
    .sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "oldest") return a.year - b.year;
      if (sortBy === "name-asc") return a.title.localeCompare(b.title);
      if (sortBy === "name-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  const displayedProjects =
    showAll || !props.viewAllLink
      ? filteredProjects
      : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 ">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4">
            {t(props.title)}
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 md:mt-6 rounded" />
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-4 md:gap-6">
          {props.filterOptions && (
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto">
              {props.filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setFilter(option.id)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${filter === option.id
                      ? "bg-accent text-text-inverse"
                      : "bg-bg-surface border border-border-muted text-text-secondary hover:bg-bg-surface/80 active:scale-95"
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
              className="w-full lg:w-auto px-3 sm:px-4 py-2 bg-bg-surface border border-border-muted rounded-lg focus:outline-none focus:border-accent text-text-primary text-sm sm:text-base"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {props.viewAllLink && !showAll && (
          <div className="mt-12 text-center">
            <Link
              href={props.viewAllLink}
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-text-inverse rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-accent/25"
            >
              {props.viewAllText ? t(props.viewAllText) : "View All Projects"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {!props.viewAllLink && !showAll && filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-bg-surface border border-accent/20 hover:border-accent/50 text-text-primary rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              Show More
            </button>
          </div>
        )}

        {props.cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 md:mt-20 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-bg-surface/60 border border-border-muted w-full max-w-2xl">
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                  {t(props.cta.title)}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base">
                  {t(props.cta.description)}
                </p>
              </div>
              <Link href={props.cta.buttonLink}>
                <motion.button
                  className="px-5 sm:px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md flex items-center gap-2 text-sm sm:text-base active:scale-95 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t(props.cta.buttonText)}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
