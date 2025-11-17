'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Server, 
  Smartphone, 
  Brain, 
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Palette,
  Globe,
  Shield,
  Zap
} from 'lucide-react'

const skillCategories = {
  Frontend: [
    { name: 'React', icon: Cpu, level: 90 },
    { name: 'Next.js', icon: Code, level: 85 },
    { name: 'TypeScript', icon: Code, level: 88 },
    { name: 'Tailwind CSS', icon: Palette, level: 92 },
    { name: 'Framer Motion', icon: Brain, level: 80 },
  ],
  Backend: [
    { name: 'Node.js', icon: Server, level: 85 },
    { name: 'Express', icon: Server, level: 82 },
    { name: 'Prisma', icon: Database, level: 78 },
    { name: 'PostgreSQL', icon: Database, level: 75 },
    { name: 'REST APIs', icon: Server, level: 88 },
  ],
  Mobile: [
    { name: 'React Native', icon: Smartphone, level: 75 },
    { name: 'Flutter', icon: Smartphone, level: 70 },
    { name: 'iOS Development', icon: Smartphone, level: 65 },
  ],
  DevOps: [
    { name: 'Docker', icon: Cloud, level: 72 },
    { name: 'CI/CD', icon: GitBranch, level: 78 },
    { name: 'AWS', icon: Cloud, level: 70 },
    { name: 'Vercel', icon: Cloud, level: 85 },
  ],
  AI: [
    { name: 'OpenAI APIs', icon: Brain, level: 80 },
    { name: 'LangChain', icon: Brain, level: 75 },
    { name: 'Python ML', icon: Brain, level: 70 },
  ]
}

const proficiencyTech = [
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Prisma', level: 78, category: 'Backend' },
  { name: 'Flutter', level: 70, category: 'Mobile' },
  { name: 'Firebase', level: 82, category: 'Backend' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#081320]">
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
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Full-stack development capabilities spanning modern web technologies, 
            mobile development, and AI integration.
          </p>
          <div className="w-12 h-1 bg-[#00C2A8] mx-auto mt-6 rounded" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/6 border border-white/4 hover:bg-white/10 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon className="w-4 h-4 text-[#00C2A8]" />
                        <span className="text-white text-sm font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Proficiency Bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Core Technologies</h3>
            {proficiencyTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-xs text-gray-400 bg-white/6 px-2 py-1 rounded">
                      {tech.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-300">{tech.level}%</span>
                    <div className="w-8 h-8 bg-[#00C2A8]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#00C2A8] text-xs font-bold">{tech.level}</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  {/* Background track */}
                  <div className="w-full h-3 bg-white/6 rounded-full overflow-hidden">
                    {/* Progress bar */}
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00C2A8] to-[#00C2A8]/80 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1, 
                        delay: index * 0.1 + 0.5,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: -100 }}
                    whileInView={{ x: 300 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.1 + 1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Additional Skills Summary */}
            <motion.div
              className="mt-8 p-6 rounded-2xl bg-white/6 border border-white/4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Additional Expertise</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C2A8] rounded-full" />
                  <span className="text-gray-300">Agile Methodologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFB86B] rounded-full" />
                  <span className="text-gray-300">Code Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C2A8] rounded-full" />
                  <span className="text-gray-300">Performance Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFB86B] rounded-full" />
                  <span className="text-gray-300">Security Best Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C2A8] rounded-full" />
                  <span className="text-gray-300">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFB86B] rounded-full" />
                  <span className="text-gray-300">Testing & QA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
