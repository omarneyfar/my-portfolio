'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', projectType: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'omar.naifar@example.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+216 12 345 678',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tunis, Tunisia',
      description: 'Available for remote work'
    }
  ]

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'E-Commerce',
    'API Development',
    'UI/UX Design',
    'Consulting',
    'Other'
  ]

  return (
    <div className="min-h-screen bg-[#081320]">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life. 
              I'm always interested in hearing about new opportunities and exciting challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-[#0F1724]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B1621] rounded-2xl p-6 border border-white/4 hover:border-white/8 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00C2A8]/20 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#00C2A8]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-white mb-1">{info.value}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#0B1621] rounded-2xl p-8 border border-white/4">
                <h2 className="text-2xl font-semibold text-white mb-6">Send Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/4 border border-white/4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C2A8] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/4 border border-white/4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C2A8] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/4 border border-white/4 rounded-xl text-white focus:outline-none focus:border-[#00C2A8] transition-colors"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type} className="bg-[#0B1621]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/4 border border-white/4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C2A8] transition-colors"
                      placeholder="Project discussion"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/4 border border-white/4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C2A8] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        I'll respond within 24 hours
                      </span>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C2A8] text-white rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-500">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-500">Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Right Column - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Response Time */}
              <div className="bg-[#0B1621] rounded-2xl p-8 border border-white/4">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-[#00C2A8]" />
                  <h3 className="text-xl font-semibold text-white">What to Expect</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C2A8] rounded-full mt-2" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Quick Response</h4>
                      <p className="text-gray-300 text-sm">I typically respond within 24 hours during business days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C2A8] rounded-full mt-2" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Project Consultation</h4>
                      <p className="text-gray-300 text-sm">Free 30-minute consultation to discuss your project requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C2A8] rounded-full mt-2" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Detailed Proposal</h4>
                      <p className="text-gray-300 text-sm">Receive a comprehensive proposal with timeline and cost estimate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-[#0B1621] rounded-2xl p-8 border border-white/4">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-[#FFB86B]" />
                  <h3 className="text-xl font-semibold text-white">Working Hours</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-3 border-t border-white/4">
                    <p className="text-gray-400 text-sm">
                      All times are in GMT+1 (Tunis Time)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#0B1621] rounded-2xl p-8 border border-white/4">
                <h3 className="text-xl font-semibold text-white mb-6">Connect on Social</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'LinkedIn', url: '#', color: 'bg-[#0077B5]/20 text-[#0077B5]' },
                    { name: 'GitHub', url: '#', color: 'bg-white/20 text-white' },
                    { name: 'Twitter', url: '#', color: 'bg-[#1DA1F2]/20 text-[#1DA1F2]' },
                    { name: 'Instagram', url: '#', color: 'bg-[#E4405F]/20 text-[#E4405F]' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-4 rounded-xl border border-white/4 hover:border-white/8 transition-all duration-300 text-center ${social.color}`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
