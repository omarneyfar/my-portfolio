"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TimelineVariables } from "@/lib/content.types";

export default function TimelineComponent(props: TimelineVariables) {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-bg-secondary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-tekab rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
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

                <div className="relative">
                    {/* Timeline Line with gradient */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-freelance to-tekab rounded-full opacity-30" />

                    {/* Timeline Events */}
                    <div className="space-y-12">
                        {props.events.map((event, index) => {
                            const isWork = event.type === "work";
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                                        }`}
                                >
                                    <div
                                        className={`w-full md:w-1/2 ${isLeft ? "pr-8 md:pr-12" : "pl-8 md:pl-12"
                                            }`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            className={`bg-bg-surface/80 backdrop-blur-sm rounded-2xl p-6 border ${isWork ? "border-accent/30" : "border-freelance/30"
                                                } hover:border-${isWork ? "accent" : "freelance"} transition-all duration-300 shadow-lg hover:shadow-xl group`}
                                        >
                                            {/* Header with icon and year */}
                                            <div
                                                className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-end" : "md:justify-start"
                                                    } justify-start`}
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${isWork
                                                            ? "bg-gradient-to-br from-accent/20 to-accent/5"
                                                            : "bg-gradient-to-br from-freelance/20 to-freelance/5"
                                                        } group-hover:scale-110 transition-transform`}
                                                >
                                                    {isWork ? (
                                                        <Briefcase className="w-5 h-5 text-accent" />
                                                    ) : (
                                                        <GraduationCap className="w-5 h-5 text-freelance" />
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-text-muted" />
                                                    <span className={`font-mono text-sm font-semibold ${isWork ? "text-accent" : "text-freelance"
                                                        }`}>
                                                        {event.year}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className={`${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
                                                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                                                    {t(event.title)}
                                                </h3>
                                                <p className="text-text-secondary font-medium mb-3 flex items-center gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start">
                                                    <span className={`px-3 py-1 rounded-full text-xs ${isWork
                                                            ? "bg-accent/10 text-accent"
                                                            : "bg-freelance/10 text-freelance"
                                                        }`}>
                                                        {event.company}
                                                    </span>
                                                </p>
                                                <p className="text-text-muted leading-relaxed">
                                                    {t(event.description)}
                                                </p>
                                            </div>

                                            {/* Type badge */}
                                            <div className={`mt-4 flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                                                <span className={`text-xs px-2 py-1 rounded ${isWork
                                                        ? "bg-accent/5 text-accent"
                                                        : "bg-freelance/5 text-freelance"
                                                    }`}>
                                                    {isWork ? t({ en: "Work", fr: "Travail" }) : t({ en: "Education", fr: "Éducation" })}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Timeline Dot - Enhanced */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                        className="absolute left-1/2 transform -translate-x-1/2"
                                    >
                                        <div className="relative">
                                            {/* Pulsing ring */}
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                                className={`absolute inset-0 w-6 h-6 rounded-full ${isWork ? "bg-accent" : "bg-freelance"
                                                    }`}
                                            />
                                            {/* Main dot */}
                                            <div
                                                className={`relative w-6 h-6 rounded-full border-4 border-bg-primary ${isWork
                                                        ? "bg-gradient-to-br from-accent to-accent/80"
                                                        : "bg-gradient-to-br from-freelance to-freelance/80"
                                                    } shadow-lg`}
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
