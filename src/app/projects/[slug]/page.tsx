import { notFound } from 'next/navigation';
import ClientLayout from '@/components/providers/ClientLayout';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { getProjectBySlug, getGlobals, getAllProjects } from '@/lib/content.loader';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project: any) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const globals = await getGlobals();
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ClientLayout globals={globals}>
      <main className="min-h-screen pt-24 bg-background">
        <ProjectDetail project={project} />
      </main>
    </ClientLayout>
  );
}
