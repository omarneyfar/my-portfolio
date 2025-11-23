"use client";

import { ReactNode } from "react";

interface StatsSectionProps {
    children: ReactNode;
    globals?: any;
}

export default function StatsSection({ children }: StatsSectionProps) {
    return <>{children}</>;
}
