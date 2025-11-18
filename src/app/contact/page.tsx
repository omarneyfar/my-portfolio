import ClientLayout from '@/components/providers/ClientLayout';
import ContactSection from '@/components/sections/ContactSection';
import { getSectionData, getGlobals } from '@/lib/content.server';

export default async function ContactPage() {
  const globals = getGlobals();
  const contactSection = getSectionData('contact-form');
  const contactData = contactSection.components[0].variables;

  return (
    <ClientLayout globals={globals}>
      <main className="min-h-screen pt-24 bg-background">
        <ContactSection contactData={contactData} globals={globals} />
      </main>
    </ClientLayout>
  );
}
