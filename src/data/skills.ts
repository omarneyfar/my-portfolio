export interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'other';
  yearsOfExperience?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 'expert', category: 'frontend', yearsOfExperience: 5 },
      { name: 'Next.js', level: 'expert', category: 'frontend', yearsOfExperience: 4 },
      { name: 'TypeScript', level: 'expert', category: 'frontend', yearsOfExperience: 4 },
      { name: 'Tailwind CSS', level: 'expert', category: 'frontend', yearsOfExperience: 3 },
      { name: 'Vue.js', level: 'advanced', category: 'frontend', yearsOfExperience: 2 },
      { name: 'Angular', level: 'intermediate', category: 'frontend', yearsOfExperience: 1 },
      { name: 'HTML5/CSS3', level: 'expert', category: 'frontend', yearsOfExperience: 6 },
      { name: 'JavaScript', level: 'expert', category: 'frontend', yearsOfExperience: 6 },
      { name: 'Framer Motion', level: 'advanced', category: 'frontend', yearsOfExperience: 2 }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 'expert', category: 'backend', yearsOfExperience: 5 },
      { name: 'Express.js', level: 'expert', category: 'backend', yearsOfExperience: 5 },
      { name: 'Python', level: 'advanced', category: 'backend', yearsOfExperience: 3 },
      { name: 'Java', level: 'intermediate', category: 'backend', yearsOfExperience: 2 },
      { name: 'PHP', level: 'intermediate', category: 'backend', yearsOfExperience: 2 },
      { name: 'GraphQL', level: 'advanced', category: 'backend', yearsOfExperience: 3 },
      { name: 'REST APIs', level: 'expert', category: 'backend', yearsOfExperience: 5 },
      { name: 'Serverless Functions', level: 'advanced', category: 'backend', yearsOfExperience: 3 }
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'expert', category: 'database', yearsOfExperience: 4 },
      { name: 'MongoDB', level: 'advanced', category: 'database', yearsOfExperience: 3 },
      { name: 'MySQL', level: 'advanced', category: 'database', yearsOfExperience: 3 },
      { name: 'Supabase', level: 'expert', category: 'database', yearsOfExperience: 3 },
      { name: 'Redis', level: 'intermediate', category: 'database', yearsOfExperience: 2 },
      { name: 'Elasticsearch', level: 'intermediate', category: 'database', yearsOfExperience: 1 }
    ]
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', level: 'advanced', category: 'devops', yearsOfExperience: 3 },
      { name: 'Docker', level: 'advanced', category: 'devops', yearsOfExperience: 3 },
      { name: 'Vercel', level: 'expert', category: 'devops', yearsOfExperience: 4 },
      { name: 'Git/GitHub', level: 'expert', category: 'devops', yearsOfExperience: 6 },
      { name: 'CI/CD', level: 'advanced', category: 'devops', yearsOfExperience: 3 },
      { name: 'Linux', level: 'intermediate', category: 'devops', yearsOfExperience: 2 },
      { name: 'Nginx', level: 'intermediate', category: 'devops', yearsOfExperience: 2 }
    ]
  },
  {
    name: 'Mobile',
    skills: [
      { name: 'React Native', level: 'intermediate', category: 'mobile', yearsOfExperience: 2 },
      { name: 'Flutter', level: 'beginner', category: 'mobile', yearsOfExperience: 1 },
      { name: 'Progressive Web Apps', level: 'advanced', category: 'mobile', yearsOfExperience: 3 }
    ]
  },
  {
    name: 'Other Technologies',
    skills: [
      { name: 'Machine Learning', level: 'intermediate', category: 'other', yearsOfExperience: 2 },
      { name: 'TensorFlow', level: 'beginner', category: 'other', yearsOfExperience: 1 },
      { name: 'WebRTC', level: 'advanced', category: 'other', yearsOfExperience: 2 },
      { name: 'Socket.io', level: 'expert', category: 'other', yearsOfExperience: 4 },
      { name: 'MQTT', level: 'intermediate', category: 'other', yearsOfExperience: 1 },
      { name: 'Blockchain', level: 'beginner', category: 'other', yearsOfExperience: 1 }
    ]
  }
];

export const getSkillsByCategory = (category: string) => {
  return skills.find(skillCategory => skillCategory.name.toLowerCase() === category.toLowerCase());
};

export const getAllSkills = () => {
  return skills.flatMap(category => category.skills);
};

export const getSkillsByLevel = (level: Skill['level']) => {
  return getAllSkills().filter(skill => skill.level === level);
};
