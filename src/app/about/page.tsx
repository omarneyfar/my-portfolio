import ClientLayout from '@/components/providers/ClientLayout';
import AboutSection from '@/components/sections/AboutSection';
import { getSectionData, getGlobals } from '@/lib/content.server';

export default async function AboutPage() {
  const [globals, ...sections] = await Promise.all([
      getGlobals(),
      ...ABOUT_SECTIONS.map(section => getSectionData(section))
    ]);

  return (
    <ClientLayout globals={globals}>
      <main className="min-h-screen pt-24 bg-background">
        <AboutSection aboutData={aboutData} />
      </main>
    </ClientLayout>
  );
}
