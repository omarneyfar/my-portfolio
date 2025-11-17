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
    <div className="min-h-screen bg-[#081320]">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About <span className="text-gradient">Omar Naifar</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate full-stack developer with expertise in building scalable web applications 
              and leading development teams. Committed to creating innovative solutions that drive 
              business growth and enhance user experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Tunis, Tunisia
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                omar.naifar@example.com
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                +216 12 345 678
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0F1724]">
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
                <div className="text-3xl md:text-4xl font-bold text-[#00C2A8] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Journey
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A timeline of my professional and educational experiences that shaped my career
            </p>
            <div className="w-12 h-1 bg-[#00C2A8] mx-auto mt-6 rounded" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10" />

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
                    <div className="bg-[#0B1621] rounded-2xl p-6 border border-white/4">
                      <div className="flex items-center gap-3 mb-3">
                        {event.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-[#00C2A8]" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-[#FFB86B]" />
                        )}
                        <span className="text-[#00C2A8] font-mono text-sm">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 mb-2">{event.company}</p>
                      <p className="text-gray-400 text-sm">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00C2A8] rounded-full border-4 border-[#081320]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[#0F1724]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive skill set covering frontend, backend, and modern development tools
            </p>
            <div className="w-12 h-1 bg-[#00C2A8] mx-auto mt-6 rounded" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B1621] rounded-2xl p-6 border border-white/4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-5 h-5 text-[#00C2A8]" />
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                </div>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-[#00C2A8] rounded-full" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Notable accomplishments and milestones throughout my career
            </p>
            <div className="w-12 h-1 bg-[#00C2A8] mx-auto mt-6 rounded" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B1621] rounded-2xl p-8 border border-white/4 text-center"
              >
                <div className="w-16 h-16 bg-[#00C2A8]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-[#00C2A8]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <span className="text-[#00C2A8] text-sm font-mono">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0F1724]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I&apos;m always interested in discussing new opportunities and exciting projects
            </p>
            <div className="w-12 h-1 bg-[#00C2A8] mx-auto mt-6 rounded" />
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
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00C2A8]/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#00C2A8]" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white">omar.naifar@example.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00C2A8]/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#00C2A8]" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white">+216 12 345 678</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00C2A8]/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00C2A8]" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white">Tunis, Tunisia</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Download CV</h4>
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C2A8] text-white rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md"
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
              className="bg-[#0B1621] rounded-2xl p-8 border border-white/4"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/4 border border-white/4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C2A8] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/4 border border-white/4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C2A8] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/4 border border-white/4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C2A8] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#00C2A8] text-white rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md"
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
