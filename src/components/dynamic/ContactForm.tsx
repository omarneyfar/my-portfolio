"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, FileText, X, Download, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ContactVariables } from "@/lib/content.types";

export default function ContactForm(props: ContactVariables) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCVModal, setShowCVModal] = useState(false);
  const [cvFormData, setCvFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [cvStatus, setCvStatus] = useState<"idle" | "submitting" | "success">("idle");

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({});
    setErrors({});
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleCVRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setCvStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCvStatus("success");
    setTimeout(() => {
      setShowCVModal(false);
      setCvStatus("idle");
      setCvFormData({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-freelance/20 to-freelance/5 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-tekab/20 to-tekab/5 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-tekab" />
              </div>
              <div className="text-text-muted text-xs sm:text-sm mb-1">Location</div>
              <div className="text-text-primary font-medium text-sm sm:text-base">
                {t(props.contactInfo.location)}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Calendly Meeting Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 md:mb-12"
        >
          <div className="bg-linear-to-br from-bg-surface/80 via-bg-surface/60 to-bg-surface/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-muted shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-accent to-freelance rounded-2xl mb-4 shadow-lg shadow-accent/25">
              <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
              {t({ en: "Schedule a Meeting", fr: "Planifier une réunion" })}
            </h3>
            <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto mb-6">
              {t({
                en: "Book a free 30-minute consultation to discuss your project.",
                fr: "Réservez une consultation gratuite de 30 minutes pour discuter de votre projet."
              })}
            </p>
            <a
              href="https://calendly.com/omarneyfar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00C2A8] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Calendar className="w-5 h-5" />
              {t({ en: "Book a Meeting", fr: "Réserver une réunion" })}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Two Column Layout: Contact Form + CV Request */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-bg-surface/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-muted shadow-2xl h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
                {t({ en: "Send a Message", fr: "Envoyer un message" })}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {props.formFields.slice(0, 2).map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-text-primary mb-2">
                        {t(field.label)}
                        {field.required && <span className="text-accent ml-1">*</span>}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-bg-primary border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-text-primary ${errors[field.name] ? "border-red-500" : "border-border-muted"
                          }`}
                      />
                      {errors[field.name] && <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>}
                    </div>
                  ))}
                </div>

                {props.formFields.slice(2).map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-text-primary mb-2">
                      {t(field.label)}
                      {field.required && <span className="text-accent ml-1">*</span>}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 bg-bg-primary border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-text-primary resize-none ${errors[field.name] ? "border-red-500" : "border-border-muted"
                          }`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-bg-primary border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-text-primary ${errors[field.name] ? "border-red-500" : "border-border-muted"
                          }`}
                      />
                    )}
                    {errors[field.name] && <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>}
                  </div>
                ))}

                <motion.button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  whileHover={{ scale: status === "submitting" || status === "success" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "submitting" || status === "success" ? 1 : 0.98 }}
                  className={`w-full px-6 py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2 ${status === "success" ? "bg-green-500 text-white" : "bg-[#00C2A8] text-white hover:shadow-xl"
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
                      {t({ en: "Message Sent!", fr: "Message envoyé !" })}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t({ en: "Send Message", fr: "Envoyer" })}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* CV Request Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col"
          >
            <div className="bg-linear-to-br from-accent/10 via-bg-surface/60 to-freelance/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-muted shadow-2xl flex-1 flex flex-col">
              <div className="flex-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-accent to-freelance rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/25">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
                  {t({ en: "Request My CV", fr: "Demander mon CV" })}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base mb-6 leading-relaxed">
                  {t({
                    en: "Interested in working together? Request my detailed CV and I'll send it to your email within 24 hours.",
                    fr: "Intéressé par une collaboration ? Demandez mon CV détaillé et je vous l'enverrai par email dans les 24 heures."
                  })}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-text-secondary text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{t({ en: "Complete work history", fr: "Historique professionnel complet" })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-freelance" />
                    <span>{t({ en: "Detailed project descriptions", fr: "Descriptions détaillées des projets" })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-tekab" />
                    <span>{t({ en: "Technical skills & certifications", fr: "Compétences techniques & certifications" })}</span>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => setShowCVModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-[#00C2A8] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                {t({ en: "Request CV", fr: "Demander le CV" })}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CV Request Modal */}
      <AnimatePresence>
        {showCVModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCVModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-bg-surface rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-border-muted relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCVModal(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-bg-primary hover:bg-border-muted transition-colors"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>

              <div className="w-16 h-16 bg-linear-to-br from-accent to-freelance rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/25">
                <FileText className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {t({ en: "Request CV", fr: "Demander le CV" })}
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                {t({
                  en: "Fill in your details and I'll send you my CV via email.",
                  fr: "Remplissez vos coordonnées et je vous enverrai mon CV par email."
                })}
              </p>

              {cvStatus === "success" ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    {t({ en: "Request Sent!", fr: "Demande envoyée !" })}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {t({ en: "I'll send you my CV within 24 hours.", fr: "Je vous enverrai mon CV dans les 24 heures." })}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleCVRequest} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t({ en: "Your Name", fr: "Votre nom" })} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={cvFormData.name}
                      onChange={(e) => setCvFormData({ ...cvFormData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-primary border border-border-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t({ en: "Email Address", fr: "Adresse email" })} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={cvFormData.email}
                      onChange={(e) => setCvFormData({ ...cvFormData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-primary border border-border-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t({ en: "Company (Optional)", fr: "Entreprise (Optionnel)" })}
                    </label>
                    <input
                      type="text"
                      value={cvFormData.company}
                      onChange={(e) => setCvFormData({ ...cvFormData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-primary border border-border-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t({ en: "Message (Optional)", fr: "Message (Optionnel)" })}
                    </label>
                    <textarea
                      value={cvFormData.message}
                      onChange={(e) => setCvFormData({ ...cvFormData, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-bg-primary border border-border-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-text-primary resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={cvStatus === "submitting"}
                    whileHover={{ scale: cvStatus === "submitting" ? 1 : 1.02 }}
                    whileTap={{ scale: cvStatus === "submitting" ? 1 : 0.98 }}
                    className="w-full px-6 py-4 bg-[#00C2A8] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {cvStatus === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t({ en: "Sending...", fr: "Envoi..." })}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t({ en: "Send Request", fr: "Envoyer la demande" })}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
