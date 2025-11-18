import Projects from '@/components/sections/Projects';
import ClientLayout from '@/components/providers/ClientLayout';
import { getAllProjects, getGlobals } from '@/lib/content.server';

export default async function ProjectsPage() {
  const globals = getGlobals();
  const projects = getAllProjects();

  return (
    <ClientLayout globals={globals}>
      <main className="min-h-screen pt-24 bg-background">
        <Projects 
          projects={projects} 
          showFeaturedOnly={false} 
          title={{ fr: 'Tous mes projets', en: 'All My Projects' }} 
        />
      </main>
    </ClientLayout>
  );
}
