import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner@2.0.3';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Omar Naifar – Full-stack Engineer',
  description: 'I design and ship scalable SaaS & web apps fast, clean architecture, measurable results.',
  keywords: ['Full-stack Developer', 'React', 'Next.js', 'TypeScript', 'SaaS', 'Web Development'],
  authors: [{ name: 'Omar Naifar' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omarnaifar.com',
    title: 'Omar Naifar – Full-stack Engineer',
    description: 'I design and ship scalable SaaS & web apps fast, clean architecture, measurable results.',
    siteName: 'Omar Naifar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Naifar – Full-stack Engineer',
    description: 'I design and ship scalable SaaS & web apps fast, clean architecture, measurable results.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
