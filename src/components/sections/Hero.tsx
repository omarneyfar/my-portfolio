'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink, Star, Zap, Shield, Cpu, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary to-bg-secondary pt-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-accent font-mono text-sm">
              <span>Full-Stack Engineer</span>
              <span>•</span>
              <span>Sfax, Tunisia</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-text-primary">Omar Naifar</span>
              <br />
              <span className="text-gradient">Full-Stack Engineer</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Building scalable web applications with modern technologies. 
                  Specialized in React, Next.js, and Node.js. 
                  Turning ideas into production-ready solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-8 py-4 bg-accent text-text-inverse rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-150 hover:translate-y-[-2px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Hire Omar
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-border-muted text-text-primary bg-transparent rounded-xl font-semibold hover:border-border-secondary transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Projects
              </motion.button>
            </div>

            {/* Microbadge Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-surface/60 border border-border-muted"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5 text-freelance" />
                <div>
                  <div className="font-semibold text-text-primary text-sm">MVP in 1 month</div>
                  <div className="text-xs text-text-muted">Fast delivery</div>
                </div>
              </motion.div>

              <motion.div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-surface/60 border border-border-muted"
                whileHover={{ scale: 1.05 }}
              >
                <Cpu className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold text-text-primary text-sm">AI & Automation</div>
                  <div className="text-xs text-text-muted">Smart solutions</div>
                </div>
              </motion.div>

              <motion.div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-surface/60 border border-border-muted"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-5 h-5 text-freelance" />
                <div>
                  <div className="font-semibold text-text-primary text-sm">End-to-end</div>
                  <div className="text-xs text-text-muted">Full development</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Visual Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Laptop Mockup */}
            <div className="relative max-w-[680px] mx-auto">
              {/* Ribbon */}
              <motion.div
                className="absolute -top-4 -left-4 z-10 bg-freelance text-text-inverse px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
                initial={{ rotate: -15, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
              >
                MVP in 1 month
              </motion.div>

              {/* Laptop Card */}
              <motion.div
                className="relative bg-bg-surface rounded-2xl overflow-hidden shadow-2xl border border-border-muted"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Laptop Screen */}
                <div className="aspect-video bg-gradient-to-br from-bg-secondary to-bg-surface p-8">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-xl mx-auto flex items-center justify-center">
                        <span className="text-text-inverse font-bold text-xl">ON</span>
                      </div>
                      <h3 className="text-text-primary text-xl font-semibold">Project Preview</h3>
                      <p className="text-text-muted text-sm">Modern web application</p>
                    </div>
                  </div>
                </div>

                {/* Laptop Keyboard */}
                <div className="h-12 bg-bg-secondary border-t border-border-muted" />
              </motion.div>

              {/* Mobile Mockup */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-64 bg-bg-surface rounded-2xl shadow-xl border border-border-muted overflow-hidden"
                initial={{ opacity: 0, rotate: 15 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ rotate: 5 }}
              >
                <div className="h-full bg-gradient-to-br from-bg-secondary to-bg-surface p-4">
                  <div className="h-full flex flex-col items-center justify-center space-y-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00C2A8] to-[#FFB86B] rounded-lg flex items-center justify-center">
                      <span className="text-text-inverse font-bold text-xs">ON</span>
                    </div>
                    <div className="w-12 h-1 bg-text-muted/20 rounded" />
                    <div className="w-16 h-1 bg-text-muted/10 rounded" />
                    <div className="w-14 h-1 bg-text-muted/10 rounded" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Code Snippets */}
              <motion.div
                className="absolute top-8 -left-8 w-24 h-16 bg-bg-surface rounded-lg border border-border-muted p-2 opacity-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="space-y-1">
                  <div className="w-full h-1 bg-accent rounded" />
                  <div className="w-3/4 h-1 bg-freelance rounded" />
                  <div className="w-1/2 h-1 bg-text-primary rounded" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-1/4 w-20 h-12 bg-bg-surface rounded-lg border border-border-muted p-2 opacity-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="space-y-1">
                  <div className="w-full h-1 bg-text-primary rounded" />
                  <div className="w-2/3 h-1 bg-accent rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-text-inverse px-4 py-2 rounded-lg"
      >
        Skip to main content
      </a>
    </section>
  )
}
