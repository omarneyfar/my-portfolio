"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { SkillsVariables } from "@/lib/content.types";
import useLucideIcons from "@/hooks/use-luicide-icons";
import { CircleStar } from "lucide-react";

export default function SkillsGrid(props: SkillsVariables) {
  const { t } = useLanguage();
  const { getLucideIcon } = useLucideIcons();

  return (
    <section id="skills" className="py-20 bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t(props.title)}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t(props.description)}
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
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
            {props.categories.map(({ name, skills }, categoryIndex) => (
              <div key={name} className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => {
                    const Icon = getLucideIcon(skill.icon);

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
                        {Icon ? (
                          <Icon className="w-4 h-4 text-accent" />
                        ) : (
                          <CircleStar className="w-4 h-4 text-accent" />
                        )}
                        <span className="text-text-primary text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-text-muted text-xs">
                          {skill.level}%
                        </span>
                      </motion.div>
                    );
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
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              {t(props.expertise.title)}
            </h3>
            {props.expertise?.items.map((tech, index) => (
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
                    <span className="text-text-primary font-medium">
                      {tech.name}
                    </span>
                    <span className="text-xs text-text-muted bg-bg-surface/60 px-2 py-1 rounded">
                      {tech.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-text-secondary">
                      {tech.level}%
                    </span>
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-accent text-xs font-bold">
                        {tech.level}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  {/* Background track */}
                  <div className="w-full h-3 bg-bg-surface/60 rounded-full overflow-hidden">
                    {/* Progress bar */}
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + 0.5,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-text-primary/20 to-transparent"
                    initial={{ x: -100 }}
                    whileInView={{ x: 300 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1 + 1,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Additional Skills Summary */}
            <motion.div
              className="mt-8 p-6 rounded-2xl bg-bg-surface/60 border border-border-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                {t(props.additionalExpertise.title)}
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {props.additionalExpertise.items.map((expertise, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <div
                      className={`w-2 h-2 rounded-full ${index % 2 === 0 ? "bg-accent" : "bg-freelance"
                        }`}
                    />
                    <span className="text-text-secondary">{t(expertise)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
