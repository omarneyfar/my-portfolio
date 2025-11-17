'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'freelance':
        return 'bg-[#00C2A8] text-white';
      case 'tekab':
        return 'bg-[#FFB86B] text-[#081320]';
      case 'sofflex':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-[#00C2A8]/10 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
            {project.client && (
              <span>• {project.client}</span>
            )}
          </div>
        </div>
        <Badge className={getCategoryColor(project.category)}>
          {project.category}
        </Badge>
      </div>

      <p className="text-gray-300 mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge variant="secondary" className="text-xs">
            +{project.technologies.length - 4} more
          </Badge>
        )}
      </div>

      <div className="flex gap-3">
        {project.liveUrl && (
          <Button
            size="sm"
            className="bg-[#00C2A8] hover:bg-[#00A896] text-white rounded-lg"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" />
              Live
            </a>
          </Button>
        )}
        
        {project.githubUrl && (
          <Button
            size="sm"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 rounded-lg"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" />
              Code
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
