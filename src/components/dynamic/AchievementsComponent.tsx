"use client";

import { motion } from "framer-motion";
import { Award, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { AchievementsVariables } from "@/lib/content.types";

const iconMap = {
    Award,
    Target,
    Users,
};

export default function AchievementsComponent(props: AchievementsVariables) {
    const { t } = useLanguage();

    return (
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
                        {t(props.title)}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        {t(props.description)}
                    </p>
                    <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {props.achievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon as keyof typeof iconMap] || Award;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-bg-surface rounded-2xl p-8 border border-border-muted text-center"
                            >
                                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold text-text-primary mb-3">
                                    {t(achievement.title)}
                                </h3>
                                <p className="text-text-secondary mb-4">
                                    {t(achievement.description)}
                                </p>
                                <span className="text-accent text-sm font-mono">
                                    {achievement.year}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
