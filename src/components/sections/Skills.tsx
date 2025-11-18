'use client';

import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Brain, Cloud, Cpu, Database, GitBranch, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap: { [key: string]: any } = {
  Code,
  Server,
  Smartphone,
  Brain,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Palette,
};

interface SkillsProps {
  skillsData: any;
}

export default function Skills({ skillsData }: SkillsProps) {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t(skillsData.title)}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t({
              fr: 'Compétences complètes en développement full stack, technologies web modernes, développement mobile et intégration IA.',
              en: 'Full-stack development capabilities spanning modern web technologies, mobile development, and AI integration.',
            })}
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {skillsData.categories.map((category: any, categoryIndex: number) => (
              <div key={category.name} className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: any, skillIndex: number) => {
                    const Icon = iconMap[skill.icon] || Code;
                    return (
                      <motion.div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-bg-surface/60 border border-border-muted hover:bg-bg-surface/80 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon className="w-4 h-4 text-accent" />
                        <span className="text-text-primary text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-text-muted text-xs">{skill.level}%</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-bg-surface/60 border border-border-muted rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                {t({ fr: 'Niveaux de compétence', en: 'Proficiency Levels' })}
              </h3>
              {skillsData.categories.slice(0, 3).flatMap((cat: any) => 
                cat.skills.slice(0, 2)
              ).map((skill: any, index: number) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between mb-2">
                    <span className="text-text-primary font-medium">{skill.name}</span>
                    <span className="text-text-muted text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-bg-primary rounded-full h-2">
                    <motion.div
                      className="bg-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
