"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { StatsVariables } from "@/lib/content.types";

export default function StatsComponent(props: StatsVariables) {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-bg-secondary">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {props.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-text-secondary">{t(stat.label)}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
