import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import ClientLayout from '@/components/providers/ClientLayout';
import { getSectionData, getGlobals, getAllProjects } from '@/lib/content.server';

export default async function Home() {
  const globals = await getGlobals();
  const heroSection = await getSectionData('hero');
  const skillsSection = await getSectionData('skills');
  const projects = await getAllProjects();

  const heroData = heroSection?.components[0]?.variables;
  const skillsData = skillsSection?.components[0]?.variables;
  console.log({
    globals,
    heroSection,
    skillsSection,
    projects
  })

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
