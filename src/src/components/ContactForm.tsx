'use client';

import { useState, FormEvent } from 'react';
import { Button } from './Button';
import { toast } from 'sonner@2.0.3';

interface ContactFormProps {
  translations: any;
}

export function ContactForm({ translations }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    preferred_start_date: '',
    honeypot: '', // Anti-spam field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
          preferred_start_date: formData.preferred_start_date,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      toast.success(translations.contact.form.success);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
        preferred_start_date: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(translations.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">
          {translations.contact.form.name} *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={translations.contact.form.namePlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f1724] focus:ring-2 focus:ring-[#00c2a8] focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">
          {translations.contact.form.email} *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={translations.contact.form.emailPlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f1724] focus:ring-2 focus:ring-[#00c2a8] focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="company" className="block mb-2 text-gray-700 dark:text-gray-300">
          {translations.contact.form.company}
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder={translations.contact.form.companyPlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f1724] focus:ring-2 focus:ring-[#00c2a8] focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block mb-2 text-gray-700 dark:text-gray-300">
          {translations.contact.form.budget} *
        </label>
        <select
          id="budget"
          required
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f1724] focus:ring-2 focus:ring-[#00c2a8] focus:border-transparent outline-none transition-all"
        >
          <option value="">Select a budget range</option>
          <option value="< $2,000">{translations.contact.form.budgetOptions.small}</option>
          <option value="$2,000 - $10,000">{translations.contact.form.budgetOptions.medium}</option>
          <option value="$10,000+">{translations.contact.form.budgetOptions.large}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">
          {translations.contact.form.message} *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={translations.contact.form.messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f1724] focus:ring-2 focus:ring-[#00c2a8] focus:border-transparent outline-none transition-all resize-none"
        />
      </div>

      <div>
        <label htmlFor="start_date" className="block mb-2 text-gray-700 dark:text-gray-300">
          {translations.contact.form.startDate}
        </label>
        <input
          type="date"
          id="start_date"
          value={formData.preferred_start_date}
          onChange={(e) => setFormData({ ...formData, preferred_start_date: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f1724] focus:ring-2 focus:ring-[#00c2a8] focus:border-transparent outline-none transition-all"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? translations.contact.form.sending : translations.contact.form.submit}
      </Button>
    </form>
  );
}
