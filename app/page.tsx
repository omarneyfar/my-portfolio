import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/sections/ProjectCard';
import Skills from '@/components/sections/Skills';
import Timeline from '@/components/sections/Timeline';
import ContactForm from '@/components/sections/ContactForm';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Omar Naifar - Full-Stack Engineer | Portfolio',
  description: 'Omar Naifar - Full-Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies. 4+ years of experience building scalable SaaS applications and delivering exceptional results.',
  keywords: ['Full-Stack Developer', 'React Developer', 'Next.js', 'Node.js', 'TypeScript', 'SaaS', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Omar Naifar' }],
  openGraph: {
    title: 'Omar Naifar - Full-Stack Engineer',
    description: 'Full-Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies.',
    type: 'website',
    url: 'https://omarnaifar.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omar Naifar - Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Naifar - Full-Stack Engineer',
    description: 'Full-Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  // Filter featured projects for the homepage
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <main className="min-h-screen bg-[#081320]">
      <Hero />
      
      {/* Featured Projects Section */}
      <section id="projects" className="py-24 bg-[#0F1724]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-[#00C2A8]">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A selection of my recent work showcasing modern web development practices and innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="inline-flex items-center gap-2 bg-[#00C2A8] hover:bg-[#00A896] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00C2A8]/25"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Skills />
      <Timeline />
      <ContactForm />
    </main>
  );
}
