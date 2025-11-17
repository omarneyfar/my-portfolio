'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'work' | 'education';
  description: string[];
  current?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: 'freelance-current',
    title: 'Full-Stack Engineer',
    organization: 'Freelance',
    location: 'Remote',
    period: '2022 - Present',
    type: 'work',
    current: true,
    description: [
      'Developing scalable SaaS applications and web platforms for clients worldwide',
      'Specializing in React, Next.js, Node.js, and modern cloud technologies',
      'Delivering MVPs in ~1 month with clean architecture and best practices',
      'Implementing AI integrations and automation solutions'
    ]
  },
  {
    id: 'tekab',
    title: 'Full-Stack Developer',
    organization: 'Tekab.Dev',
    location: 'Remote',
    period: '2022 - 2023',
    type: 'work',
    description: [
      'Built and maintained multiple web applications using React, Vue.js, and Angular',
      'Developed RESTful APIs and GraphQL endpoints with Node.js and Express',
      'Implemented database solutions with PostgreSQL, MongoDB, and Redis',
      'Worked on AI-powered social media aggregation and job matching platforms'
    ]
  },
  {
    id: 'sofflex',
    title: 'Full-Stack Developer',
    organization: 'Sofflex',
    location: 'Remote',
    period: '2021 - 2022',
    type: 'work',
    description: [
      'Developed packaging optimization software for logistics companies',
      'Created publishing house management system for medical education content',
      'Implemented algorithm optimization for cost reduction and efficiency',
      'Worked with PHP, Laravel, React, and Python Flask'
    ]
  },
  {
    id: 'cme-verlag',
    title: 'Junior Developer',
    organization: 'CME Verlag',
    location: 'Remote',
    period: '2020 - 2021',
    type: 'work',
    description: [
      'Assisted in developing medical education content management system',
      'Implemented features for continuing medical education (CME) credit tracking',
      'Worked on peer review and digital publishing workflows',
      'Gained experience in enterprise software development'
    ]
  },
  {
    id: 'education',
    title: 'Computer Science Degree',
    organization: 'University',
    location: 'Morocco',
    period: '2017 - 2021',
    type: 'education',
    description: [
      'Bachelor\'s degree in Computer Science',
      'Specialized in software engineering and web development',
      'Graduated with honors',
      'Relevant coursework: Algorithms, Data Structures, Database Systems, Web Development'
    ]
  }
];

const Timeline = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="h-5 w-5" />;
      case 'education':
        return <GraduationCap className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#081320]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#00C2A8]">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            4+ years of experience building scalable web applications and delivering exceptional results
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#00C2A8] to-[#FFB86B]"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#00C2A8] rounded-full border-4 border-[#081320] z-10">
                  {item.current && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-[#00C2A8] rounded-full opacity-50"
                    />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#00C2A8]/20 rounded-lg text-[#00C2A8]">
                          {getIcon(item.type)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-[#FFB86B] font-medium">{item.organization}</p>
                        </div>
                      </div>
                      {item.current && (
                        <Badge className="bg-[#00C2A8] text-white">
                          Current
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#00C2A8] mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#00C2A8]/20 to-[#FFB86B]/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Why Work With Me?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="text-lg font-semibold text-[#00C2A8] mb-2">Fast Delivery</h4>
                <p className="text-gray-300 text-sm">MVPs delivered in ~1 month with modern tech stack</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏗️</div>
                <h4 className="text-lg font-semibold text-[#FFB86B] mb-2">Clean Architecture</h4>
                <p className="text-gray-300 text-sm">Scalable, maintainable code following best practices</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="text-lg font-semibold text-[#00C2A8] mb-2">Measurable Results</h4>
                <p className="text-gray-300 text-sm">Focus on business outcomes and user success</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
