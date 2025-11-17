export interface Project {
  slug: string;
  title: string;
  role: string;
  period?: string;
  short: string;
  responsibilities: string[];
  tech: string[];
  type: 'Freelance' | 'Mobile' | 'Company' | 'Personal';
  featured?: boolean;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'artello',
    title: 'Artello',
    role: 'Full-stack Developer (Freelance)',
    period: 'Mar 2025 – Present',
    short: 'Creative marketplace for customizable posters.',
    responsibilities: [
      'Responsive e-commerce frontend',
      'Custom Fabric.js editor',
      'Admin panel',
      'Supabase uploads',
    ],
    tech: ['Next.js', 'Hono.js', 'Fabric.js', 'Tailwind', 'Prisma', 'Cloudflare D1', 'NextAuth', 'Supabase'],
    type: 'Freelance',
    featured: true,
  },
  {
    slug: 'lens-life-coach',
    title: 'Lens Life Coach',
    role: 'Mobile Developer',
    period: 'Feb 2025 – Present',
    short: 'Mobile app for lens schedules.',
    responsibilities: [
      'Flutter UI',
      'Firebase Auth/Firestore',
      'Smart notifications',
    ],
    tech: ['Flutter', 'Dart', 'Firebase'],
    type: 'Mobile',
    featured: true,
  },
  {
    slug: 'hive-and-bees',
    title: 'Hive And Bees',
    role: 'Full-Stack Developer – Tekab',
    period: 'Jan 2024 – Feb 2025',
    short: 'SaaS CRM for delegates.',
    responsibilities: [
      'Requirements → Tasks',
      'Vue.js + Nest.js + Prisma',
      'GitLab CI',
    ],
    tech: ['Vue.js', 'Nest.js', 'Prisma', 'GitLab CI', 'Cloudflare'],
    type: 'Company',
    featured: true,
  },
  {
    slug: 'swapii',
    title: 'Swapii',
    role: 'Full-Stack Developer',
    period: '2024',
    short: 'Exchange platform for goods and services.',
    responsibilities: [
      'Built real-time messaging system',
      'Implemented user matching algorithm',
      'Created responsive UI',
    ],
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    type: 'Personal',
  },
  {
    slug: 'othentis',
    title: 'Othentis',
    role: 'Frontend Developer',
    period: '2023',
    short: 'Authentication and identity verification platform.',
    responsibilities: [
      'Designed modern authentication flows',
      'Integrated biometric verification',
      'Optimized performance',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    type: 'Company',
  },
  {
    slug: 'urjob',
    title: 'UrJob',
    role: 'Full-Stack Developer',
    period: '2023',
    short: 'Job marketplace connecting employers and candidates.',
    responsibilities: [
      'Built job posting and search features',
      'Implemented application tracking',
      'Created admin dashboard',
    ],
    tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'Redis'],
    type: 'Freelance',
  },
];
