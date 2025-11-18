import ClientLayout from '@/components/providers/ClientLayout';
import { getGlobals, getPageById, getSectionData } from '@/lib/content.loader';
import { renderSections } from '@/lib/section-registry';

export default async function ContactPage() {
  const globals = await getGlobals();
  const page = await getPageById('contact');

  if (!page) {
    return <div>Page not found</div>;
  }

  const sections = await Promise.all(
    page.sections.map(async (sectionRef) => {
      const sectionData = await getSectionData(sectionRef.id);
      return sectionData;
    })
  );

  const validSections = sections.filter(Boolean);

  return (
    <ClientLayout globals={globals}>
      <main>
        {renderSections(validSections, globals)}
      </main>
    </ClientLayout>
  );
}

export const revalidate = 300;
