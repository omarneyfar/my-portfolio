'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

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
}

// Sample projects data - this would typically come from a data file or API
const projects: Project[] = [
  {
    id: '1',
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
    longDescription: 'Built a comprehensive e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, order management, and payment integration with Stripe.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    category: 'freelance',
    featured: true,
    githubUrl: 'https://github.com/omar/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    year: 2024,
    client: 'Tech Retail Inc.'
  },
  {
    id: '2',
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    longDescription: 'Developed a real-time task management application with drag-and-drop functionality, real-time updates using WebSockets, and comprehensive team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Tailwind CSS'],
    category: 'tekab',
    featured: true,
    githubUrl: 'https://github.com/omar/task-app',
    liveUrl: 'https://taskapp-demo.com',
    year: 2023
  },
  {
    id: '3',
    slug: 'mobile-banking-app',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and transaction management.',
    longDescription: 'Created a secure mobile banking application with React Native, featuring biometric authentication, real-time transaction updates, and comprehensive financial management tools.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth'],
    category: 'sofflex',
    featured: false,
    githubUrl: 'https://github.com/omar/banking-app',
    year: 2023
  },
  {
    id: '4',
    slug: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'AI-powered content generation platform with multiple language models and templates.',
    longDescription: 'Built an AI content generation platform that integrates with multiple language models, provides customizable templates, and includes content optimization features.',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'PostgreSQL'],
    category: 'freelance',
    featured: true,
    githubUrl: 'https://github.com/omar/ai-content',
    liveUrl: 'https://aicontent-demo.com',
    year: 2024
  },
  {
    id: '5',
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization and reporting features.',
    longDescription: 'Developed a comprehensive analytics dashboard with real-time data visualization, custom reports, and advanced filtering capabilities.',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'InfluxDB', 'WebSockets'],
    category: 'tekab',
    featured: false,
    githubUrl: 'https://github.com/omar/analytics',
    year: 2023
  },
  {
    id: '6',
    slug: 'social-media-app',
    title: 'Social Media App',
    description: 'Full-featured social media platform with real-time messaging and content sharing.',
    longDescription: 'Built a complete social media platform with real-time messaging, content sharing, user profiles, and advanced social features.',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'WebRTC'],
    category: 'freelance',
    featured: false,
    githubUrl: 'https://github.com/omar/social-app',
    liveUrl: 'https://social-demo.com',
    year: 2024
  }
]

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const allProjects = projects

  return (
    <section id="projects" className="py-20 bg-[#0F1724]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A selection of recent work showcasing full-stack development, 
            modern technologies, and innovative solutions.
          </p>
          <div className="w-12 h-1 bg-[#00C2A8] mx-auto mt-6 rounded" />
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* All Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">All Projects</h3>
            <p className="text-gray-400">
              Explore the complete collection of work across different categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-white/6 border border-white/4">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Have a project in mind?
              </h3>
              <p className="text-gray-300">
                Let&apos;s discuss how I can help bring your ideas to life
              </p>
            </div>
            <motion.button
              className="px-6 py-3 bg-[#00C2A8] text-white rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
