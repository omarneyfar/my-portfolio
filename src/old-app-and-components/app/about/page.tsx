'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Users,
  Target
} from 'lucide-react'

const timelineEvents = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
    type: 'work'
  },
  {
    year: '2023',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    type: 'work'
  },
  {
    year: '2022',
    title: 'Computer Science Degree',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in Software Engineering and AI.',
    type: 'education'
  },
  {
    year: '2021',
    title: 'Frontend Developer Intern',
    company: 'StartupHub',
    description: 'Built responsive user interfaces and collaborated with design team.',
    type: 'work'
  },
  {
    year: '2020',
    title: 'Web Development Bootcamp',
    company: 'Code Academy',
    description: 'Completed intensive full-stack development program.',
    type: 'education'
  }
]

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  'Backend': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  'Tools': ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma'],
  'Soft Skills': ['Team Leadership', 'Problem Solving', 'Communication', 'Agile/Scrum']
}

const achievements = [
  {
    icon: Award,
    title: 'Best Developer Award',
    description: 'Recognized for outstanding contribution to open-source projects',
    year: '2023'
  },
  {
    icon: Target,
    title: '100+ Projects Delivered',
    description: 'Successfully completed over 100 client projects with 5-star ratings',
    year: '2022-2024'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Led teams of 5-10 developers on enterprise-level projects',
    year: '2023-2024'
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
              About <span className="text-gradient">Omar Naifar</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Passionate full-stack developer with expertise in building scalable web applications 
              and leading development teams. Committed to creating innovative solutions that drive 
              business growth and enhance user experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin className="w-4 h-4" />
                Tunis, Tunisia
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Mail className="w-4 h-4" />
                omar.naifar@example.com
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Phone className="w-4 h-4" />
                +216 12 345 678
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '15+', label: 'Technologies' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              My Journey
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A timeline of my professional and educational experiences that shaped my career
            </p>
            <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border-muted" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-bg-surface rounded-2xl p-6 border border-border-muted">
                      <div className="flex items-center gap-3 mb-3">
                        {event.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-accent" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-freelance" />
                        )}
                        <span className="text-accent font-mono text-sm">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary mb-2">{event.company}</p>
                      <p className="text-text-muted text-sm">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Skills & Expertise
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Comprehensive skill set covering frontend, backend, and modern development tools
            </p>
            <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bg-surface rounded-2xl p-6 border border-border-muted"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
                </div>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-text-secondary text-sm"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Notable accomplishments and milestones throughout my career
            </p>
            <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bg-surface rounded-2xl p-8 border border-border-muted text-center"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {achievement.title}
                </h3>
                <p className="text-text-secondary mb-4">{achievement.description}</p>
                <span className="text-accent text-sm font-mono">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              I&apos;m always interested in discussing new opportunities and exciting projects
            </p>
            <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm">Email</div>
                    <div className="text-text-primary">omar.naifar@example.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm">Phone</div>
                    <div className="text-text-primary">+216 12 345 678</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm">Location</div>
                    <div className="text-text-primary">Tunis, Tunisia</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Download CV</h4>
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-bg-surface rounded-2xl p-8 border border-border-muted"
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-bg-surface/60 border border-border-muted rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-bg-surface/60 border border-border-muted rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-bg-surface/60 border border-border-muted rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
