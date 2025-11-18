// src/app/page.tsx
import ClientLayout from '@/components/providers/ClientLayout';
import { getGlobals, getPageById, getSectionData } from '@/lib/content.server';
import { renderSection, renderSections } from '@/lib/section-registry';

// Define the sections we want to load for the home page
const HOME_SECTIONS = ['hero', 'skills', 'projects', 'contact'];

export default async function Home() {
  // Fetch all data in parallel
  const [globals, ...sections] = await Promise.all([
    getGlobals(),
    ...getPageById("home").then((page)=> return page.sections.map(section => getSectionData(section)))
  ]);

  // Transform section data for the section registry
  const sectionComponents = sections
    .filter(Boolean)
    .map(section => ({
      type: section?.type || '',
      data: {
        ...(section?.components?.[0]?.variables || {}),
        globals // Pass globals to all sections if needed
      }
    }))
    .filter(section => section.type); // Filter out any invalid sections

  return (
    <ClientLayout globals={globals}>
      <main>
        {renderSection(sectionComponents[0])}
      </main>
    </ClientLayout>
  );
}

// Revalidate the page every 5 minutes
export const revalidate = 300;