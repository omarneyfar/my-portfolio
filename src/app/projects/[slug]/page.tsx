'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb, Trophy } from 'lucide-react'
import Link from 'next/link'

interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'freelance' | 'tekab' | 'sofflex'
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  year: number
  client?: string
  role?: string
  responsibilities?: string[]
  challenges?: string[]
  solutions?: string[]
  results?: string[]
}

// Sample project data - in a real app, this would come from a data file or API
const projectData: Project = {
  id: '1',
  slug: 'e-commerce-platform',
  title: 'E-Commerce Platform',
  description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
  longDescription: 'Built a comprehensive e-commerce platform with React, Node.js, and PostgreSQL. The platform features user authentication, product catalog with advanced filtering, shopping cart functionality, order management system, and secure payment processing integrated with Stripe. The system handles real-time inventory updates, provides admin dashboard for store management, and includes features like wishlist, product reviews, and order tracking.',
  technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'JWT', 'Docker', 'AWS'],
  category: 'freelance',
  featured: true,
  githubUrl: 'https://github.com/omar/ecommerce',
  liveUrl: 'https://ecommerce-demo.com',
  imageUrl: '/api/placeholder/1200/600',
  year: 2024,
  client: 'Tech Retail Inc.',
  role: 'Full-Stack Developer & Tech Lead',
  responsibilities: [
    'Architected the entire application structure and database schema',
    'Implemented user authentication and authorization system',
    'Developed RESTful APIs for all backend functionality',
    'Created responsive frontend components with React',
    'Integrated Stripe payment processing and webhooks',
    'Deployed application using Docker containers on AWS',
    'Implemented real-time inventory management with Redis',
    'Set up CI/CD pipeline for automated testing and deployment'
  ],
  challenges: [
    'Handling concurrent inventory updates during high traffic sales',
    'Implementing secure payment processing with PCI compliance',
    'Designing scalable database architecture for product catalog',
    'Creating responsive design that works across all devices',
    'Implementing real-time notifications for order updates'
  ],
  solutions: [
    'Used Redis for caching and real-time inventory management',
    'Implemented Stripe Elements for secure payment processing',
    'Designed normalized database schema with proper indexing',
    'Created mobile-first responsive design with Tailwind CSS',
    'Integrated WebSocket for real-time order status updates'
  ],
  results: [
    'Successfully processed 10,000+ transactions in first month',
    'Achieved 99.9% uptime during peak shopping seasons',
    'Reduced page load time by 40% through optimization',
    'Increased conversion rate by 25% with improved UX',
    'Scaled to handle 100,000+ concurrent users'
  ]
}

const relatedProjects = [
  {
    id: '2',
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates.',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
    category: 'tekab'
  },
  {
    id: '3',
    slug: 'mobile-banking-app',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking with biometric authentication.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    category: 'sofflex'
  }
]

export default function ProjectDetail() {
  const categoryColors = {
    freelance: 'bg-[#FFB86B]/10 text-[#FFB86B] border-[#FFB86B]/20',
    tekab: 'bg-[#00C2A8]/10 text-[#00C2A8] border-[#00C2A8]/20',
    sofflex: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20',
  }

  return (
    <div className="min-h-screen bg-[#081320]">
      {/* Hero Section with Full-Bleed Screenshot */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] to-[#0f1724]">
          <img
            src={projectData.imageUrl}
            alt={projectData.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {projectData.title}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {projectData.description}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${categoryColors[projectData.category]}`}>
                  {projectData.category}
                </span>
                <span className="inline-flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {projectData.year}
                </span>
                {projectData.client && (
                  <span className="inline-flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    {projectData.client}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Project Overview */}
              <div className="bg-[#0B1621] rounded-2xl p-6 border border-white/4">
                <h2 className="text-xl font-semibold text-white mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  {projectData.longDescription}
                </p>
              </div>

              {/* Role & Links */}
              <div className="bg-[#0B1621] rounded-2xl p-6 border border-white/4">
                <h2 className="text-xl font-semibold text-white mb-4">Role</h2>
                <p className="text-gray-300 mb-6">{projectData.role}</p>
                
                <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                <div className="space-y-3">
                  {projectData.liveUrl && (
                    <a
                      href={projectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {projectData.githubUrl && (
                    <a
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-[#0B1621] rounded-2xl p-6 border border-white/4">
                <h2 className="text-xl font-semibold text-white mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-lg bg-white/6 border border-white/4 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Challenge, Solution, Result */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Challenge */}
              <div className="bg-[#0B1621] rounded-2xl p-8 border border-white/4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FFB86B]/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#FFB86B]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Challenge</h2>
                </div>
                <ul className="space-y-3">
                  {projectData.challenges?.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#FFB86B] rounded-full mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-[#0B1621] rounded-2xl p-8 border border-white/4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#00C2A8]/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-[#00C2A8]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Solution</h2>
                </div>
                <ul className="space-y-3">
                  {projectData.solutions?.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#00C2A8] rounded-full mt-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="bg-[#0B1621] rounded-2xl p-8 border border-white/4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FFB86B]/20 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-[#FFB86B]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Results</h2>
                </div>
                <ul className="space-y-3">
                  {projectData.results?.map((result, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#FFB86B] rounded-full mt-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="bg-[#0B1621] rounded-2xl p-8 border border-white/4">
                <h2 className="text-2xl font-semibold text-white mb-6">Responsibilities</h2>
                <ul className="space-y-3">
                  {projectData.responsibilities?.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#00C2A8] rounded-full mt-2 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#0F1724]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Related Projects</h2>
            <p className="text-gray-300 text-lg">
              Explore similar projects and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#0B1621] rounded-2xl p-6 border border-white/4 hover:border-white/8 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00C2A8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-2 py-1 rounded-lg bg-white/6 border border-white/4 text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors text-sm font-medium"
                >
                  View Project
                  <ArrowLeft className="w-3 h-3 rotate-180" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
