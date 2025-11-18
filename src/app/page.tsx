import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/layout/Footer'
import { hero as heroData } from '@/data/hero'
import { skills as skillsData } from '@/data/skills'
import { projects as projectsData } from '@/data/projects'

export default function Home() {
  // Default to English for now, will be dynamic later
  const locale = 'en';
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero data={heroData} locale={locale} />
        <Skills data={skillsData} locale={locale} />
        <Projects data={projectsData} locale={locale} />
      </main>
      <Footer />
    </div>
  );
}
