"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { StatsVariables } from "@/lib/content.types";

export default function StatsComponent(props: StatsVariables) {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-freelance rounded-full blur-3xl" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {props.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative">
                                {/* Animated background circle */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-accent/10 to-freelance/10 rounded-2xl blur-xl"
                                    animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                />

                                <div className="relative bg-bg-surface/60 backdrop-blur-sm rounded-2xl p-8 border border-border-muted group-hover:border-accent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
                                    <AnimatedCounter
                                        value={stat.value}
                                        isInView={isInView}
                                        delay={index * 0.1}
                                    />
                                    <div className="text-text-secondary mt-3 font-medium">
                                        {t(stat.label)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Animated counter component
function AnimatedCounter({ value, isInView, delay }: { value: string; isInView: boolean; delay: number }) {
    const [count, setCount] = useState(0);

    // Extract number from string (e.g., "5+" -> 5, "100+" -> 100)
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const suffix = value.replace(/\d/g, '');

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    setCount(numericValue);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [isInView, numericValue, delay]);

    return (
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-freelance bg-clip-text text-transparent">
            {count}{suffix}
        </div>
    );
}
