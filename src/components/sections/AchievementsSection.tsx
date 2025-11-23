"use client";

import { ReactNode } from "react";

interface AchievementsSectionProps {
    children: ReactNode;
    globals?: any;
}

export default function AchievementsSection({ children }: AchievementsSectionProps) {
    return <>{children}</>;
}
