import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, User, Building, Tag } from 'lucide-react';
import { projects } from '@/data/projects';
import '@/app/globals.css';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Omar Naifar | Full-Stack Engineer`,
    description: project.description,
    keywords: project.technologies,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'website',
      url: `https://omarnaifar.dev/projects/${slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#081320]">
      {/* Hero Section */}
      <section className="relative h-96 bg-[#0F1724] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#081320]"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-end pb-12">
          <div className="max-w-4xl">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00C2A8] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00C2A8]" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#FFB86B]" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#00C2A8]" />
                <span className="capitalize">{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-[#081320]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    {project.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00C2A8] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Project Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.highlights?.map((highlight, index) => (
                      <div key={index} className="bg-[#0F1724] p-6 rounded-lg border border-gray-800">
                        <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                        <p className="text-gray-400 text-sm">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Technologies */}
                <div className="bg-[#0F1724] p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#00C2A8]/10 text-[#00C2A8] rounded-full text-sm border border-[#00C2A8]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="bg-[#0F1724] p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-300 hover:text-[#00C2A8] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-300 hover:text-[#00C2A8] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="bg-[#0F1724] p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type:</span>
                      <span className="text-white capitalize">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Year:</span>
                      <span className="text-white">{project.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Client:</span>
                      <span className="text-white">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-green-400">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-[#0F1724]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Related <span className="text-[#00C2A8]">Projects</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                More projects from the same category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedProjects.map((relatedProject, index) => (
                <div 
                  key={relatedProject.id}
                  className="bg-[#081320] rounded-lg overflow-hidden border border-gray-800 hover:border-[#00C2A8]/50 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{relatedProject.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                    <Link 
                      href={`/projects/${relatedProject.id}`}
                      className="inline-flex items-center gap-2 text-[#00C2A8] hover:text-[#00A896] transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
