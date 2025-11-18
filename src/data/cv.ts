import { CVData } from "./types";

export const cv: CVData = {
  name: "[Your Name]",
  role: "[Your Title]",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "[Your Location]",
  summary: "[Your professional summary]",
  experienceYears: 0,
  education: [
    {
      degree: "[Degree Name]",
      school: "[University Name]",
      location: "[Location]",
      startDate: "[Start Year]",
      endDate: "[End Year]",
      description: "[Additional details]"
    }
  ],
  experience: [
    {
      role: "[Job Title]",
      company: "[Company Name]",
      location: "[Location]",
      startDate: "[Start Date]",
      endDate: "[End Date or 'Present']",
      description: [
        "[Responsibility/Achievement 1]",
        "[Responsibility/Achievement 2]"
      ]
    }
  ],
  skills: {
    technical: ["[Skill 1]", "[Skill 2]"],
    soft: ["[Soft Skill 1]", "[Soft Skill 2]"],
    languages: [
      {
        language: "[Language]",
        proficiency: "[Proficiency Level]"
      }
    ]
  },
  certifications: [
    {
      name: "[Certification Name]",
      issuer: "[Issuing Organization]",
      date: "[Date]",
      credentialUrl: "[URL]"
    }
  ]
};
