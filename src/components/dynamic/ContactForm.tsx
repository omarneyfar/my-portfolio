"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ContactVariables } from "@/lib/content.types";

export default function ContactForm(props: ContactVariables) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({});
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t(props.title)}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t(props.description)}
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              {t({ fr: "Coordonnées", en: "Contact Information" })}
            </h3>

            <div className="space-y-6">
              {props.contactInfo && (
                <>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-text-muted text-sm">Email</div>
                      <a
                        href={`mailto:${props.contactInfo.email}`}
                        className="text-text-primary hover:text-accent transition-colors"
                      >
                        {props.contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-text-muted text-sm">Phone</div>
                      <a
                        href={`tel:${props.contactInfo.phone}`}
                        className="text-text-primary hover:text-accent transition-colors"
                      >
                        {props.contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-text-muted text-sm">Location</div>
                      <div className="text-text-primary">
                        {t(props.contactInfo.location)}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {props.downloadCV && (
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  {t({ fr: "Télécharger CV", en: "Download CV" })}
                </h4>
                <motion.a
                  href={props.downloadCV.url}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:translate-y-[-2px] transition-transform duration-150 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  {t(props.downloadCV.text)}
                </motion.a>
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-bg-surface rounded-2xl p-8 border border-border-muted"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {props.formFields.map((field) => (
                <div key={field.name}>
                  <label className="block text-text-secondary mb-2 text-sm font-medium">
                    {t(field.label)}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                      rows={4}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg-surface/60 border border-border-muted rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg-surface/60 border border-border-muted rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-6 py-3 bg-accent text-text-inverse rounded-xl font-semibold hover:bg-accent/90 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    {t(props.submitButton)}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center text-sm"
                >
                  {t(props.successMessage)}
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center text-sm"
                >
                  {t(props.errorMessage)}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
