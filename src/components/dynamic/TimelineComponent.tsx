"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TimelineVariables } from "@/lib/content.types";

export default function TimelineComponent(props: TimelineVariables) {
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

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border-muted" />

                    {/* Timeline Events */}
                    <div className="space-y-12">
                        {props.events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
                                    }`}
                            >
                                <div
                                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                                        }`}
                                >
                                    <div className="bg-bg-surface rounded-2xl p-6 border border-border-muted">
                                        <div
                                            className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "justify-end" : "justify-start"
                                                }`}
                                        >
                                            {event.type === "work" ? (
                                                <Briefcase className="w-5 h-5 text-accent" />
                                            ) : (
                                                <GraduationCap className="w-5 h-5 text-freelance" />
                                            )}
                                            <span className="text-accent font-mono text-sm">
                                                {event.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                                            {t(event.title)}
                                        </h3>
                                        <p className="text-text-secondary mb-2">{event.company}</p>
                                        <p className="text-text-muted text-sm">
                                            {t(event.description)}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
