import ClientLayout from '@/components/providers/ClientLayout';
import ProjectsWithFilter from '@/components/sections/ProjectsWithFilter';
import { getAllProjects, getGlobals, getSectionData } from '@/lib/content.server';

export default async function ProjectsPage() {
  const globals = getGlobals();
  const projects = getAllProjects();
  const allProjectsSection = getSectionData('all-projects');
  const projectsData = allProjectsSection.components[0].variables;

  return (
    <ClientLayout globals={globals}>
      <main className="min-h-screen pt-24 bg-background">
        <ProjectsWithFilter 
          projects={projectsData.projects} 
          filterOptions={projectsData.filterOptions}
          sortOptions={projectsData.sortOptions}
          title={projectsData.title}
        />
      </main>
    </ClientLayout>
  );
}
