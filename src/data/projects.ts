export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'freelance' | 'tekab' | 'sofflex';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  year: number;
  client?: string;
}

export const projects: Project[] = [
  {
    id: 'artello',
    title: 'Artello',
    description: 'Creative platform for artists to showcase and sell their work',
    longDescription: 'A comprehensive platform designed for artists to create portfolios, showcase their artwork, and sell pieces directly to collectors. Features include artist profiles, gallery management, secure payment processing, and commission tracking.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
    category: 'freelance',
    featured: true,
    year: 2024,
    client: 'Private Client'
  },
  {
    id: 'lens-life-coach',
    title: 'Lens Life Coach',
    description: 'Life coaching platform with session management and progress tracking',
    longDescription: 'A complete life coaching management system that enables coaches to manage clients, schedule sessions, track progress, and provide personalized coaching programs. Includes video conferencing integration and progress analytics.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'WebRTC'],
    category: 'freelance',
    featured: true,
    year: 2024,
    client: 'Life Coaching Professional'
  },
  {
    id: 'hive-and-bees',
    title: 'Hive and Bees',
    description: 'Beekeeping management system for hive monitoring and honey production tracking',
    longDescription: 'An innovative beekeeping management solution that helps beekeepers monitor hive health, track honey production, manage apiary locations, and receive alerts for potential issues. Includes IoT sensor integration for real-time monitoring.',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'IoT Sensors', 'MQTT'],
    category: 'tekab',
    featured: true,
    year: 2023,
    client: 'Tekab.Dev'
  },
  {
    id: 'swapii',
    title: 'Swapii',
    description: 'Social media aggregation platform with AI-powered content curation',
    longDescription: 'A sophisticated social media aggregator that consolidates multiple social platforms into one dashboard. Features AI-powered content recommendations, sentiment analysis, and automated posting across platforms.',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'GraphQL', 'Redis'],
    category: 'tekab',
    featured: true,
    year: 2023,
    client: 'Tekab.Dev'
  },
  {
    id: 'othentis',
    title: 'Othentis',
    description: 'Identity verification and authentication platform for enterprises',
    longDescription: 'Enterprise-grade identity verification solution providing secure user authentication, document verification, biometric authentication, and compliance management for regulated industries.',
    technologies: ['React', 'Java Spring Boot', 'MySQL', 'Docker', 'JWT'],
    category: 'tekab',
    featured: false,
    year: 2023,
    client: 'Tekab.Dev'
  },
  {
    id: 'urjob',
    title: 'UrJob',
    description: 'Job matching platform with AI-powered candidate recommendations',
    longDescription: 'Intelligent job matching platform that uses machine learning algorithms to connect candidates with suitable positions. Features resume parsing, skill assessment, and predictive matching for recruiters.',
    technologies: ['Angular', 'Node.js', 'Elasticsearch', 'Machine Learning', 'AWS'],
    category: 'tekab',
    featured: false,
    year: 2022,
    client: 'Tekab.Dev'
  },
  {
    id: 'cme-verlag',
    title: 'CME-Verlag',
    description: 'Publishing house management system for medical education content',
    longDescription: 'Comprehensive publishing management system for medical education materials. Handles content creation, peer review, digital publishing, and continuing medical education (CME) credit tracking.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Docker'],
    category: 'sofflex',
    featured: false,
    year: 2022,
    client: 'CME Verlag'
  },
  {
    id: 'pack-tools',
    title: 'Pack Tools',
    description: 'Packaging optimization software for logistics and supply chain management',
    longDescription: 'Advanced packaging optimization tool that helps companies reduce shipping costs, minimize waste, and improve logistics efficiency through intelligent box sizing and weight distribution algorithms.',
    technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'Algorithm Optimization'],
    category: 'sofflex',
    featured: false,
    year: 2021,
    client: 'Sofflex'
  }
];

export const getProjectsByCategory = (category?: Project['category']) => {
  if (!category) return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};
