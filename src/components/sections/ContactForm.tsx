'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface FormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        status: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setFormState({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState({
          status: 'success',
          message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
        });
        setFormData({ name: '', email: '', budget: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'omar.naifar@example.com',
      href: 'mailto:omar.naifar@example.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+212 600-000-000',
      href: 'tel:+212600000000'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Morocco (Remote Available)',
      href: '#'
    }
  ];

  const budgetOptions = [
    '< $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Discuss in call'
  ];

  return (
    <section id="contact" className="py-24 bg-[#0F1724]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-[#00C2A8]">Work Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-lg focus:border-[#00C2A8] focus:ring-[#00C2A8]/20"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-lg focus:border-[#00C2A8] focus:ring-[#00C2A8]/20"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border-white/20 text-white rounded-lg px-4 py-3 focus:border-[#00C2A8] focus:ring-[#00C2A8]/20"
                  >
                    <option value="" className="bg-[#0F1724]">Select budget range</option>
                    {budgetOptions.map(option => (
                      <option key={option} value={option} className="bg-[#0F1724]">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-lg focus:border-[#00C2A8] focus:ring-[#00C2A8]/20 resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    required
                  />
                </div>

                {formState.message && (
                  <div className={`flex items-center gap-2 p-4 rounded-lg ${
                    formState.status === 'success' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {formState.status === 'success' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm">{formState.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  className="w-full bg-[#00C2A8] hover:bg-[#00A896] text-white rounded-lg py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00C2A8]/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState.status === 'loading' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-[#00C2A8]/20 rounded-lg text-[#00C2A8]">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.href.startsWith('#') ? (
                        <p className="text-white font-medium">{info.value}</p>
                      ) : (
                        <a 
                          href={info.href}
                          className="text-white font-medium hover:text-[#00C2A8] transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00C2A8]/20 rounded-full flex items-center justify-center text-[#00C2A8] text-sm font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Quick Response</h4>
                    <p className="text-gray-300 text-sm">I'll respond to your message within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00C2A8]/20 rounded-full flex items-center justify-center text-[#00C2A8] text-sm font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Free Consultation</h4>
                    <p className="text-gray-300 text-sm">30-minute call to discuss your project requirements</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00C2A8]/20 rounded-full flex items-center justify-center text-[#00C2A8] text-sm font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Detailed Proposal</h4>
                    <p className="text-gray-300 text-sm">Custom solution with timeline and cost estimate</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00C2A8]/20 rounded-full flex items-center justify-center text-[#00C2A8] text-sm font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Fast Delivery</h4>
                    <p className="text-gray-300 text-sm">MVP typically delivered within 4-6 weeks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-[#00C2A8]/20 to-[#FFB86B]/20 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[#00C2A8] font-semibold">Available for Projects</span>
              </div>
              <p className="text-white text-sm mb-4">
                Currently taking on new projects for Q1 2024. Let's discuss your requirements!
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-white/10 text-white border-white/20">SaaS Development</Badge>
                <Badge className="bg-white/10 text-white border-white/20">Web Applications</Badge>
                <Badge className="bg-white/10 text-white border-white/20">AI Integration</Badge>
                <Badge className="bg-white/10 text-white border-white/20">MVP Development</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
