import ClientLayout from '@/components/providers/ClientLayout';
import AboutSection from '@/components/sections/AboutSection';
import { getSectionData, getGlobals } from '@/lib/content.server';

export default async function AboutPage() {
  const globals = getGlobals();
  const aboutSection = getSectionData('about-content');
  const aboutData = aboutSection.components[0].variables;

  return (
    <ClientLayout globals={globals}>
      <main className="min-h-screen pt-24 bg-background">
        <AboutSection aboutData={aboutData} />
      </main>
    </ClientLayout>
  );
}
