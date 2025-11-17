'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#081320] via-[#0F1724] to-[#081320] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00C2A8] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFB86B] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#00C2A8] bg-clip-text text-transparent">
              Omar Naifar
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-[#FFB86B] mb-4">
              Full-Stack Engineer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I design and ship scalable SaaS & web apps with speed and reliability. 
            From MVP to production: fast delivery, clean architecture, and measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-[#00C2A8] hover:bg-[#00A896] text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00C2A8]/25"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Omar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#FFB86B] text-[#FFB86B] hover:bg-[#FFB86B] hover:text-[#081320] rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              See Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Selling Points Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-[#00C2A8] mb-2">SaaS MVP in ~1 month</h3>
              <p className="text-gray-300">Rapid development from concept to launch with modern tech stack</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-[#00C2A8] mb-2">AI & Automation</h3>
              <p className="text-gray-300">ChatGPT API integrations and intelligent workflow automation</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-[#00C2A8] mb-2">End-to-End Solutions</h3>
              <p className="text-gray-300">Frontend / Backend / Mobile / Cloud / CI/CD - complete project delivery</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-sm flex flex-col items-center"
        >
          <span>Scroll down</span>
          <ArrowRight className="h-4 w-4 mt-1 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
