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
  Shield,
  Zap,
  Code2,
  CpuIcon,
  ServerIcon,
  SmartphoneIcon,
  CloudIcon,
  BrainIcon,
  GitBranchIcon,
  DatabaseIcon,
  PaletteIcon
} from 'lucide-react'
import { SkillsData, SkillCategory } from '@/data/types'

interface SkillsProps {
  data: SkillsData
  locale: 'en' | 'fr'
}

// Map skill names to icons
const getSkillIcon = (skillName: string) => {
  const lowerName = skillName.toLowerCase()
  if (lowerName.includes('react')) return Cpu
  if (lowerName.includes('next')) return Code2
  if (lowerName.includes('typescript') || lowerName.includes('javascript')) return Code
  if (lowerName.includes('tailwind') || lowerName.includes('css')) return Palette
  if (lowerName.includes('node') || lowerName.includes('express')) return Server
  if (lowerName.includes('mongo') || lowerName.includes('postgre') || lowerName.includes('sql')) return Database
  if (lowerName.includes('docker') || lowerName.includes('aws') || lowerName.includes('vercel')) return Cloud
  if (lowerName.includes('git')) return GitBranch
  if (lowerName.includes('ai') || lowerName.includes('ml') || lowerName.includes('python')) return Brain
  return Code // Default icon
}

// Map category titles to icons
const getCategoryIcon = (categoryTitle: string) => {
  if (!categoryTitle) return Code2;
  const lowerTitle = categoryTitle.toLowerCase();
  if (lowerTitle.includes('front')) return CpuIcon;
  if (lowerTitle.includes('back') || lowerTitle.includes('api')) return ServerIcon;
  if (lowerTitle.includes('mobile')) return SmartphoneIcon;
  if (lowerTitle.includes('devops') || lowerTitle.includes('cloud')) return CloudIcon;
  if (lowerTitle.includes('ai') || lowerTitle.includes('ml')) return BrainIcon;
  if (lowerTitle.includes('design') || lowerTitle.includes('ui/ux')) return PaletteIcon;
  if (lowerTitle.includes('database')) return DatabaseIcon;
  return Code2;
}

export default function Skills({ data, locale = 'en' }: SkillsProps) {
  // Helper function to get localized text with fallback
  const getLocalizedText = (text: any, fallback: string = '') => {
    if (!text) return fallback;
    return typeof text === 'string' ? text : text?.[locale] || fallback;
  };

  // Helper function to create a deterministic number from a string
  const hashString = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  // Safe access to data with fallbacks
  const title = getLocalizedText(data?.title, 'My Skills');
  const subtitle = getLocalizedText(
    data?.subtitle, 
    'Technologies and tools I work with on a daily basis'
  );
  const categories = data?.categories || [];

  // Use additional expertise from data with fallback
  const expertiseItems = data.additionalExpertise || [
    { en: 'Agile Methodologies', fr: 'Méthodologies Agile' },
    { en: 'Code Architecture', fr: 'Architecture de code' },
    { en: 'Performance Optimization', fr: 'Optimisation des performances' },
    { en: 'Security Best Practices', fr: 'Bonnes pratiques de sécurité' },
    { en: 'UI/UX Design', fr: 'Conception UI/UX' },
    { en: 'Testing & QA', fr: 'Tests & Assurance Qualité' }
  ];

  if (!data || !categories) {
    return (
      <section id="skills" className="py-20 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-bg-secondary rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-bg-tertiary rounded-lg">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">No skills data available</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const categoryTitle = getLocalizedText(category?.title, 'Category');
            const Icon = getCategoryIcon(categoryTitle);
            if (!categoryTitle || !Icon) return null;

            return (
              <motion.div
                key={`${categoryTitle}-${index}`}
                className="bg-bg-secondary rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-bg-tertiary rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{categoryTitle}</h3>
                </div>
                
                <div className="space-y-3">
                  {(category?.skills || []).map((skill, skillIndex) => {
                    const skillName = getLocalizedText(skill, 'Skill');
                    const SkillIcon = getSkillIcon(skillName);
                    if (!skillName || !SkillIcon) return null;

                    // Create a deterministic level based on skill name (between 70-100%)
                    const level = 70 + (hashString(skillName) % 31); // 70-100
                    
                    return (
                      <div key={`${categoryTitle}-${skillName}`} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="w-5 h-5 text-text-secondary" />
                            <span className="font-medium">{skillName}</span>
                          </div>
                          <span className="text-sm text-text-tertiary">{level}%</span>
                        </div>
                        <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-12 p-6 rounded-2xl bg-bg-surface/60 border border-border-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-text-primary mb-4">
            {locale === 'en' ? 'Additional Expertise' : 'Expertise supplémentaire'}
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {expertiseItems.map((item, index) => {
              const skillText = getLocalizedText(item, '');
              if (!skillText) return null;
              return (
                <div key={`${skillText}-${index}`} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-accent' : 'bg-freelance'}`} />
                  <span className="text-text-secondary">{skillText}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
