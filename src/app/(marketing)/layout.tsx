import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { getTranslations } from '../../src/lib/i18n';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const translations = getTranslations('en'); // Default to English

  return (
    <>
      <Header locale="en" translations={translations} />
      <main className="min-h-screen">{children}</main>
      <Footer translations={translations} />
    </>
  );
}
