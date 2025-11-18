import { ProjectsData } from "./types";

export const projects: ProjectsData = {
  title: {
    en: "My Projects",
    fr: "Mes Projets"
  },
  projects: [
    {
      slug: "ecommerce-platform",
      title: {
        en: "E-commerce Platform",
        fr: "Plateforme E-commerce"
      },
      shortDescription: {
        en: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
        fr: "Une plateforme e-commerce complète avec panier, paiement et intégration de paiement."
      },
      longDescription: {
        en: "A comprehensive e-commerce solution built with Next.js, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, secure checkout with Stripe, order management, and admin dashboard.",
        fr: "Une solution e-commerce complète développée avec Next.js, Node.js et MongoDB. Fonctionnalités : authentification utilisateur, catalogue de produits, panier d'achat, paiement sécurisé avec Stripe, gestion des commandes et tableau de bord d'administration."
      },
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      image: "/images/projects/ecommerce.jpg",
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.example.com",
      featured: true
    },
    {
      slug: "task-management-app",
      title: {
        en: "Task Management App",
        fr: "Application de Gestion des Tâches"
      },
      shortDescription: {
        en: "A collaborative task management application with real-time updates.",
        fr: "Une application collaborative de gestion des tâches avec des mises à jour en temps réel."
      },
      longDescription: {
        en: "A real-time task management application built with React, Node.js, and Socket.io. Features include task creation, assignment, due dates, priority levels, and real-time collaboration.",
        fr: "Une application de gestion des tâches en temps réel développée avec React, Node.js et Socket.io. Fonctionnalités : création de tâches, attribution, dates d'échéance, niveaux de priorité et collaboration en temps réel."
      },
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      image: "/images/projects/taskapp.jpg",
      github: "https://github.com/yourusername/task-management-app",
      demo: "https://taskapp-demo.example.com"
    },
    {
      slug: "portfolio-website",
      title: {
        en: "Portfolio Website",
        fr: "Site Web Portfolio"
      },
      shortDescription: {
        en: "A personal portfolio website to showcase my work and skills.",
        fr: "Un site web portfolio personnel pour présenter mon travail et mes compétences."
      },
      longDescription: {
        en: "A responsive portfolio website built with Next.js and TypeScript, featuring a clean and modern design. Includes sections for projects, skills, about me, and contact information.",
        fr: "Un site web portfolio réactif développé avec Next.js et TypeScript, présentant un design épuré et moderne. Comprend des sections pour les projets, les compétences, à propos de moi et les coordonnées."
      },
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      image: "/images/projects/portfolio.jpg",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.example.com",
      featured: true
    }
  ]
};
