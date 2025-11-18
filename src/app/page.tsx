import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import ClientLayout from '@/components/providers/ClientLayout';
import { getSectionData, getGlobals, getFeaturedProjects } from '@/lib/content.server';

export default async function Home() {
  const globals = getGlobals();
  const heroSection = getSectionData('hero');
  const skillsSection = getSectionData('skills');
  const projects = getFeaturedProjects(10);

  const heroData = heroSection.components[0].variables;
  const skillsData = skillsSection.components[0].variables;

  return (
    <ClientLayout globals={globals}>
      <main>
        <Hero globals={globals} heroData={heroData} />
        <Skills skillsData={skillsData} />
        <Projects projects={projects} showFeaturedOnly={true} title={{ fr: 'Projets Récents', en: 'Recent Projects' }} />
      </main>
    </ClientLayout>
  );
}
