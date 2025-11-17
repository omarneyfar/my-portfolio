'use client';

import { motion } from 'framer-motion';
import { Star, Code, Database, Cloud, Smartphone, Cpu } from 'lucide-react';
import { skills, SkillCategory } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="h-6 w-6" />;
      case 'backend':
        return <Cpu className="h-6 w-6" />;
      case 'database':
        return <Database className="h-6 w-6" />;
      case 'devops':
        return <Cloud className="h-6 w-6" />;
      case 'mobile':
        return <Smartphone className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  const getSkillLevel = (level: string) => {
    switch (level) {
      case 'expert':
        return 100;
      case 'advanced':
        return 80;
      case 'intermediate':
        return 60;
      case 'beginner':
        return 40;
      default:
        return 50;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-[#00C2A8]';
      case 'advanced':
        return 'bg-[#FFB86B]';
      case 'intermediate':
        return 'bg-blue-500';
      case 'beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0F1724]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-[#00C2A8]">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Full-stack expertise with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category: SkillCategory, categoryIndex: number) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#00C2A8]/20 rounded-lg text-[#00C2A8]">
                  {getSkillIcon(category.skills[0]?.category || 'other')}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        {skill.yearsOfExperience && (
                          <Badge variant="secondary" className="text-xs">
                            {skill.yearsOfExperience}y
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(getSkillLevel(skill.level) / 20)
                                ? 'text-[#FFB86B] fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <Progress
                      value={getSkillLevel(skill.level)}
                      className="h-2 bg-white/10"
                      style={{
                        background: `linear-gradient(to right, ${getLevelColor(skill.level)} ${getSkillLevel(skill.level)}%, rgba(255,255,255,0.1) ${getSkillLevel(skill.level)}%)`
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00C2A8] mb-2">6+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFB86B] mb-2">40+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00C2A8] mb-2">8+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFB86B] mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
