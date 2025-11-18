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

interface SkillCategory {
  id: string;
  name: { [key: string]: string };
  icon: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

interface SkillsSectionProps {
  data: {
    title: { [key: string]: string };
    description?: { [key: string]: string };
    categories: SkillCategory[];
  };
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  const { t } = useLanguage();

  if (!data?.categories?.length) return null;

  return (
    <section id="skills" className="py-20 bg-bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t(data.title)}
          </h2>
          {data.description && (
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t(data.description)}
            </p>
          )}
          <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-secondary p-6 rounded-xl border border-border-muted"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {t(category.name)}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-primary">{skill.name}</span>
                        <span className="text-text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
