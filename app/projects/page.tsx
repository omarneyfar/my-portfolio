import { Metadata } from 'next';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects - Omar Naifar | Full-Stack Engineer',
  description: 'Explore my portfolio of web development projects including SaaS applications, e-commerce platforms, and innovative solutions built with React, Next.js, Node.js, and modern technologies.',
  keywords: ['Projects', 'Portfolio', 'Web Development', 'SaaS', 'React', 'Next.js', 'Node.js', 'Full-Stack'],
  openGraph: {
    title: 'Projects - Omar Naifar',
    description: 'Explore my portfolio of web development projects and innovative solutions.',
    type: 'website',
    url: 'https://omarnaifar.dev/projects',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Projects - Omar Naifar',
      },
    ],
  },
};

export default function ProjectsPage() {
  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const categoryOrder = ['freelance', 'tekab', 'sofflex', 'personal'];
  const categoryLabels = {
    freelance: 'Freelance Projects',
    tekab: 'Tekab.Dev Projects',
    sofflex: 'Sofflex Projects',
    personal: 'Personal Projects'
  };

  return (
    <main className="min-h-screen bg-[#081320]">
      {/* Header */}
      <section className="py-24 bg-[#0F1724]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-[#00C2A8]">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive collection of my work spanning freelance projects, 
              client collaborations, and personal experiments. Each project represents 
              a unique challenge solved with modern web technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00C2A8] mb-2">{projects.length}</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFB86B] mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-400 text-sm">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00C2A8] mb-2">
                {new Set(projects.map(p => p.category)).size}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFB86B] mb-2">
                {Math.max(...projects.map(p => p.year)) - Math.min(...projects.map(p => p.year)) + 1}
              </div>
              <div className="text-gray-400 text-sm">Years Span</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="py-24 bg-[#081320]">
        <div className="container mx-auto px-6">
          {categoryOrder.map((category, categoryIndex) => {
            const categoryProjects = projectsByCategory[category];
            if (!categoryProjects || categoryProjects.length === 0) return null;

            return (
              <div key={category} className="mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#00C2A8] to-[#FFB86B] rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProjects
                    .sort((a, b) => b.year - a.year)
                    .map((project, projectIndex) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project} 
                        index={categoryIndex * 10 + projectIndex} 
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-24 bg-[#0F1724]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies <span className="text-[#00C2A8]">Used</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The tools and technologies I've worked with across these projects
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {(() => {
              const allTechnologies = Array.from(
                new Set(projects.flatMap(project => project.technologies))
              ).sort();
              
              const techColumns = Math.ceil(allTechnologies.length / 4);
              const columns = Array.from({ length: 4 }, (_, i) => 
                allTechnologies.slice(i * techColumns, (i + 1) * techColumns)
              );

              return (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-2">
                      {column.map((tech, techIndex) => (
                        <div 
                          key={tech}
                          className="flex items-center gap-2 text-gray-300 hover:text-[#00C2A8] transition-colors"
                        >
                          <div className="w-2 h-2 bg-[#00C2A8] rounded-full"></div>
                          <span className="text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </section>
    </main>
  );
}
