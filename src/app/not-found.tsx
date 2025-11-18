import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { getGlobals } from '@/lib/content.loader';
import ClientLayout from '@/components/providers/ClientLayout';

export default async function NotFound() {
  let globals = { theme: {} };
  
  try {
    const data = await getGlobals();
    if (data) {
      globals = data;
    }
  } catch (error) {
    console.error('Error loading globals:', error);
  }

  return (
    <ClientLayout globals={globals}>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-4xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg" className="px-8">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
