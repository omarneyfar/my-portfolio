'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactSectionProps {
  contactData: any;
  globals: any;
}

export default function ContactSection({ contactData, globals }: ContactSectionProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, value: globals.email, href: `mailto:${globals.email}` },
    { icon: Phone, value: globals.phone, href: `tel:${globals.phone}` },
    { icon: MapPin, value: t(globals.location), href: '#' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t(contactData.title)}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t(contactData.description)}
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-bg-surface rounded-2xl p-6 border border-border-muted hover:border-border-secondary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-text-primary font-medium">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto bg-bg-surface rounded-2xl p-8 border border-border-muted"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {contactData.formFields.map((field: any, index: number) => (
              <div key={field.name}>
                <label className="block text-text-secondary mb-2">
                  {t(field.label)} {field.required && '*'}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    rows={6}
                    className="w-full px-4 py-3 bg-bg-surface/60 border border-border-muted rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder={t(field.label)}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full px-4 py-3 bg-bg-surface/60 border border-border-muted rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder={t(field.label)}
                  />
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-text-inverse border-t-transparent rounded-full animate-spin" />
                  {t({ fr: 'Envoi...', en: 'Sending...' })}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t(contactData.submitButton)}
                </>
              )}
            </motion.button>
          </form>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-500">{t(contactData.successMessage)}</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-500">{t(contactData.errorMessage)}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
