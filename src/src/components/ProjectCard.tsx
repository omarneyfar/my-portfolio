import Link from 'next/link';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  locale?: string;
}

export function ProjectCard({ project, locale = 'en' }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="group block bg-white dark:bg-[#0f1724] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="group-hover:text-[#00c2a8] transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.role}</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#00c2a8] text-white">
            {project.type}
          </span>
        </div>
        
        {project.period && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.period}</p>
        )}
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.short}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#f6f8fa] dark:bg-[#081320] text-xs rounded border border-gray-300 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-xs text-gray-500">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
