import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Naifar - Full-Stack Engineer | Next.js, Vue.js, Node.js",
  description: "Portfolio of Omar Naifar - Full-Stack Engineer specializing in Next.js, Vue.js, React, Node.js, and mobile development. Based in Sfax, Tunisia. Available for freelance projects.",
  keywords: ["Omar Naifar", "Full-Stack Engineer", "Web Developer", "Next.js", "Vue.js", "React", "Node.js", "Nest.js", "Flutter", "Sfax Tunisia", "Freelance Developer"],
  authors: [{ name: "Omar Naifar" }],
  creator: "Omar Naifar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omarnaifar.com",
    title: "Omar Naifar - Full-Stack Engineer",
    description: "Full-Stack Engineer specializing in modern web and mobile development",
    siteName: "Omar Naifar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Naifar - Full-Stack Engineer",
    description: "Full-Stack Engineer specializing in modern web and mobile development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
