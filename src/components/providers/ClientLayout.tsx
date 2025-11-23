"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";

interface ClientLayoutProps {
  children: ReactNode;
  globals: any;
}

export default function ClientLayout({ children, globals }: ClientLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header globals={globals} />
      {children}
      <Footer globals={globals} />
    </div>
  );
}
