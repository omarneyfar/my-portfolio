"use client";

import { ReactNode } from "react";

interface TimelineSectionProps {
    children: ReactNode;
    globals?: any;
}

export default function TimelineSection({ children }: TimelineSectionProps) {
    return <>{children}</>;
}
