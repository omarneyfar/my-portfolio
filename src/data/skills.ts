import { SkillsData } from "./types";

// Helper function to create LocaleString for skills
const createSkill = (en: string, fr: string) => ({
  en,
  fr
});

export const skills: SkillsData = {
  title: {
    en: "My Skills",
    fr: "Mes Compétences"
  },
  subtitle: {
    en: "Technologies & Tools I Work With",
    fr: "Technologies & Outils que j'utilise"
  },
  categories: [
    {
      title: {
        en: "Frontend",
        fr: "Frontend"
      },
      skills: [
        createSkill("React", "React"),
        createSkill("Next.js", "Next.js"),
        createSkill("TypeScript", "TypeScript"),
        createSkill("JavaScript", "JavaScript"),
        createSkill("HTML5", "HTML5"),
        createSkill("CSS3", "CSS3"),
        createSkill("TailwindCSS", "TailwindCSS"),
        createSkill("Redux", "Redux")
      ]
    },
    {
      title: {
        en: "Backend",
        fr: "Backend"
      },
      skills: [
        createSkill("Node.js", "Node.js"),
        createSkill("Express", "Express"),
        createSkill("NestJS", "NestJS"),
        createSkill("GraphQL", "GraphQL"),
        createSkill("REST APIs", "API REST"),
        createSkill("MongoDB", "MongoDB"),
        createSkill("PostgreSQL", "PostgreSQL")
      ]
    },
    {
      title: {
        en: "DevOps & Tools",
        fr: "DevOps & Outils"
      },
      skills: [
        createSkill("Docker", "Docker"),
        createSkill("Git", "Git"),
        createSkill("GitHub Actions", "GitHub Actions"),
        createSkill("AWS", "AWS"),
        createSkill("Vercel", "Vercel"),
        createSkill("Netlify", "Netlify"),
        createSkill("Jest", "Jest"),
        createSkill("Cypress", "Cypress")
      ]
    }
  ],
  additionalExpertise: [
    createSkill("Responsive Web Design", "Conception Web Réactive"),
    createSkill("Progressive Web Apps (PWA)", "Applications Web Progressives (PWA)"),
    createSkill("Performance Optimization", "Optimisation des Performances"),
    createSkill("Cross-browser Compatibility", "Compatibilité Multi-navigateurs"),
    createSkill("Agile/Scrum Methodology", "Méthodologie Agile/Scrum")
  ]
};
