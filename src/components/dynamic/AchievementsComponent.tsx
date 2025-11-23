"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, Trophy, Star, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { AchievementsVariables } from "@/lib/content.types";

// Icon mapping
const iconMap: Record<string, any> = {
    Award,
    Target,
    Users,
    Trophy,
    Star,
    Zap,
};

export default function AchievementsComponent(props: AchievementsVariables) {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-gradient-to-b from-bg-secondary to-bg-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-20 w-80 h-80 bg-freelance rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-20 w-72 h-72 bg-tekab rounded-full blur-3xl" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {props.achievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon] || Award;
                        const colors = [
                            { bg: "from-accent/20 to-accent/5", text: "text-accent", border: "border-accent/30", glow: "shadow-accent/20" },
                            { bg: "from-freelance/20 to-freelance/5", text: "text-freelance", border: "border-freelance/30", glow: "shadow-freelance/20" },
                            { bg: "from-tekab/20 to-tekab/5", text: "text-tekab", border: "border-tekab/30", glow: "shadow-tekab/20" },
                        ];
                        const color = colors[index % colors.length];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group"
                            >
                                <div className={`relative h-full bg-bg-surface/80 backdrop-blur-sm rounded-2xl p-8 border ${color.border} hover:border-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:${color.glow}`}>
                                    {/* Animated background glow */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${color.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        animate={{
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color.bg} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                                        >
                                            <Icon className={`w-8 h-8 ${color.text}`} />
                                        </motion.div>

                                        {/* Year badge */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${color.text} bg-gradient-to-r ${color.bg}`}>
                                                {achievement.year}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-xl font-bold text-text-primary mb-3 group-hover:${color.text} transition-colors`}>
                                            {t(achievement.title)}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-text-muted leading-relaxed">
                                            {t(achievement.description)}
                                        </p>

                                        {/* Decorative corner accent */}
                                        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${color.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                        <div className={`absolute bottom-4 left-4 w-2 h-2 rounded-full ${color.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 via-freelance/10 to-tekab/10 border border-border-muted">
                        <Trophy className="w-5 h-5 text-accent" />
                        <span className="text-text-secondary font-medium">
                            {t({ en: "And many more achievements to come!", fr: "Et bien d'autres réalisations à venir !" })}
                        </span>
                        <Star className="w-5 h-5 text-freelance" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
