/**
 * Omar Naifar Portfolio - Main Entry Point
 * 
 * This is a Next.js 14 App Router application.
 * The main app pages are located in /app/(marketing)/
 * 
 * To run the application:
 * 1. Install dependencies: pnpm install
 * 2. Set up environment variables (see .env.example)
 * 3. Run development server: pnpm dev
 * 
 * For more information, see README.md
 */

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#081320] to-[#0f1724] text-white p-6">
      <div className="max-w-2xl text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-[#00c2a8] to-[#ffb86b] rounded-2xl mx-auto flex items-center justify-center">
          <span className="text-4xl font-bold">ON</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c2a8] to-[#ffb86b]">
          Omar Naifar Portfolio
        </h1>
        
        <p className="text-xl text-gray-300">
          Welcome! This is a Next.js 14 application.
        </p>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-left border border-white/10">
          <p className="text-gray-300 mb-4">
            <strong className="text-[#00c2a8]">Getting Started:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Set up your environment variables (see <code className="bg-white/10 px-2 py-1 rounded">.env.example</code>)</li>
            <li>Create the Supabase database table using <code className="bg-white/10 px-2 py-1 rounded">supabase-setup.sql</code></li>
            <li>Run <code className="bg-white/10 px-2 py-1 rounded">pnpm dev</code> to start the development server</li>
            <li>Navigate to the pages in <code className="bg-white/10 px-2 py-1 rounded">/app/(marketing)/</code></li>
          </ol>
        </div>

        <div className="flex flex-wrap gap-3 justify-center text-sm">
          <a 
            href="/about" 
            className="px-6 py-2 bg-[#00c2a8] hover:bg-[#00a994] rounded-lg transition-colors"
          >
            About
          </a>
          <a 
            href="/projects" 
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
          >
            Projects
          </a>
          <a 
            href="/contact" 
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
          >
            Contact
          </a>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-sm text-gray-400">
            Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase
          </p>
        </div>
      </div>
    </div>
  );
}
