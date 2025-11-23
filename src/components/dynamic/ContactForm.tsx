"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ContactVariables } from "@/lib/content.types";

export default function ContactForm(props: ContactVariables) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    props.formFields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = t({
          en: "This field is required",
          fr: "Ce champ est requis"
        });
      }

      if (field.type === "email" && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = t({
            en: "Please enter a valid email",
            fr: "Veuillez entrer un email valide"
          });
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({});
    setErrors({});
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-freelance rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4">
            {t(props.title)}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            {t(props.description)}
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 md:mt-6 rounded" />
        </motion.div>

        {/* Contact Info Cards */}
        {props.contactInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-12"
          >
            <motion.a
              href={`mailto:${props.contactInfo.email}`}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-bg-surface/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-border-muted hover:border-accent transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-text-muted text-xs sm:text-sm mb-1">Email</div>
              <div className="text-text-primary font-medium text-sm sm:text-base group-hover:text-accent transition-colors break-all">
                {props.contactInfo.email}
              </div>
            </motion.a>

            <motion.a
              href={`tel:${props.contactInfo.phone}`}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-bg-surface/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-border-muted hover:border-freelance transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-freelance/20 to-freelance/5 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-freelance" />
              </div>
              <div className="text-text-muted text-xs sm:text-sm mb-1">Phone</div>
              <div className="text-text-primary font-medium text-sm sm:text-base group-hover:text-freelance transition-colors">
                {props.contactInfo.phone}
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-bg-surface/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-border-muted hover:border-tekab transition-all group sm:col-span-2 md:col-span-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-tekab/20 to-tekab/5 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-tekab" />
              </div>
              <div className="text-text-muted text-xs sm:text-sm mb-1">Location</div>
              <div className="text-text-primary font-medium text-sm sm:text-base">
                {t(props.contactInfo.location)}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-bg-surface/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-border-muted shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {props.formFields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label className="block text-text-primary mb-2 text-sm font-semibold">
                      {t(field.label)}
                      {field.required && <span className="text-accent ml-1">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-bg-primary/50 border ${errors[field.name] ? 'border-red-500' : 'border-border-muted'
                        } rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all`}
                      placeholder={t(field.label)}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
              </div>

              {props.formFields.slice(2).map((field) => (
                <div key={field.name}>
                  <label className="block text-text-primary mb-2 text-sm font-semibold">
                    {t(field.label)}
                    {field.required && <span className="text-accent ml-1">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                      rows={5}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-bg-primary/50 border ${errors[field.name] ? 'border-red-500' : 'border-border-muted'
                        } rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none`}
                      placeholder={t(field.label)}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-bg-primary/50 border ${errors[field.name] ? 'border-red-500' : 'border-border-muted'
                        } rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all`}
                      placeholder={t(field.label)}
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                whileHover={{ scale: status === "submitting" || status === "success" ? 1 : 1.02 }}
                whileTap={{ scale: status === "submitting" || status === "success" ? 1 : 0.98 }}
                className={`w-full px-6 py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2 ${status === "success"
                  ? "bg-green-500 text-white"
                  : "bg-[#00C2A8]  from-accent to-freelance text-text-inverse hover:shadow-xl hover:shadow-accent/20"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t({ en: "Sending...", fr: "Envoi..." })}
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    {t({ en: "Sent!", fr: "Envoyé!" })}
                  </>
                ) : (
                  <>
                    {t(props.submitButton)}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center"
                >
                  {t(props.successMessage)}
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center"
                >
                  {t(props.errorMessage)}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
