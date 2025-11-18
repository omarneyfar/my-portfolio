import { ContactData } from "./types";

export const contact: ContactData = {
  title: {
    en: "Contact Me",
    fr: "Contactez-moi"
  },
  description: {
    en: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!",
    fr: "Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, je vous répondrai dès que possible !"
  },
  email: "bonjour@votredomaine.com",
  phone: "+33 6 12 34 56 78",
  location: {
    en: "Paris, France",
    fr: "Paris, France"
  },
  socialLinks: {
    github: "https://github.com/votrenomutilisateur",
    linkedin: "https://linkedin.com/in/votrenomutilisateur",
    twitter: "https://twitter.com/votrenomutilisateur"
  },
  form: {
    name: {
      en: "Name",
      fr: "Nom"
    },
    email: {
      en: "Email",
      fr: "Email"
    },
    message: {
      en: "Your Message",
      fr: "Votre message"
    },
    submit: {
      en: "Send Message",
      fr: "Envoyer"
    },
    success: {
      en: "Thank you! Your message has been sent.",
      fr: "Merci ! Votre message a été envoyé."
    },
    error: {
      en: "There was an error sending your message. Please try again later.",
      fr: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard."
    }
  }
};
