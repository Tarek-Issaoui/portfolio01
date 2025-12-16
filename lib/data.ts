import { Project, SkillCategory, ContactInfo, ProjectMedia } from '@/types';
import { Microscope, Building2, BarChart3, Car, Briefcase, Hospital, Mail, Linkedin, Github, Phone } from 'lucide-react';

export const projects: Project[] = [
  // {
  //   id: 6,
  //   title: 'EquimedSud Platform',
  //   description: 'Enterprise healthcare equipment management system providing comprehensive asset tracking, preventive maintenance scheduling, compliance monitoring, vendor management, and real-time inventory optimization for medical facilities and healthcare organizations.',
  //   icon: Hospital,
  //   technologies: ['Typescript','Angular', 'Node.js', 'Express.js', 'PostgreSQL' ],
  //   liveUrl: 'https://www.equimed-sud.com',
  //   githubUrl: '#',
  //   status : 'In Progress ',
  // },
  {
    id: 5,
    title: 'AdvISO',
    description: 'Comprehensive ISO quality management system featuring advanced dashboard analytics, document control workflows, audit management, compliance tracking, and automated certification processes. Built with modern React architecture for enterprise-scale quality assurance operations.',
    icon: Briefcase,
    media: [
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 101219 - Copie.png', alt: 'AdvISO Dashboard' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 101445 - Copie.png', alt: 'AdvISO Management' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 101823 - Copie.png', alt: 'AdvISO Workflow' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 101947.png', alt: 'AdvISO Reports' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102026.png', alt: 'AdvISO Analytics' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102041.png', alt: 'AdvISO Settings' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102118.png', alt: 'AdvISO Users' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102244.png', alt: 'AdvISO Documents' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102326 - Copie.png', alt: 'AdvISO Certifications' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102326.png', alt: 'AdvISO Process' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102359.png', alt: 'AdvISO Quality' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102425.png', alt: 'AdvISO Audit' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102453.png', alt: 'AdvISO Compliance' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102506.png', alt: 'AdvISO Overview' },
      { type: 'image', url: '/projects/adviso-media/Capture d\'écran 2025-12-14 102659.png', alt: 'AdvISO Interface' },
      { type: 'image', url: '/projects/adviso-media/image.png', alt: 'AdvISO Interface' }
    ],
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Django'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'In Progress | Confidential'
  },
  
  {
    id: 3,
    title: 'AnyCase',
    description: 'Full-featured enterprise content management platform with sophisticated campaign orchestration, multi-media asset management, granular access controls, real-time analytics dashboard, and comprehensive user administration. Designed for large-scale marketing operations with advanced workflow automation.',
    icon: BarChart3,
    media: [
      // { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115100.png', alt: 'AnyCase Dashboard' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115118.png', alt: 'AnyCase Campaign Management' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115130.png', alt: 'AnyCase Content Tools' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115151.png', alt: 'AnyCase File Management' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115249.png', alt: 'AnyCase Analytics' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115403.png', alt: 'AnyCase Access Control' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115418.png', alt: 'AnyCase Settings' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115514.png', alt: 'AnyCase Reports' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115551.png', alt: 'AnyCase Users' },
      { type: 'image', url: '/projects/anycase-media/Capture d\'écran 2025-12-14 115625.png', alt: 'AnyCase Interface' }
    ],
    technologies: ['Angular', 'TypeScript', 'SpringBoot', 'NgRx'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'In Progress | Confidential'
  },
  {
    id: 4,
    title: 'GMS',
    description: 'Advanced AI-powered inventory management system featuring intelligent email document processing, automated stock tracking, predictive analytics, real-time order management, and machine learning-driven insights. Integrates seamlessly with existing ERP systems for comprehensive supply chain optimization.',
    icon: Car,
    media: [
      { type: 'image', url: '/projects/gms-media/Capture d\'écran 2025-12-14 115659.png', alt: 'GMS Dashboard' },
      { type: 'image', url: '/projects/gms-media/Capture d\'écran 2025-12-14 115717.png', alt: 'GMS Stock Management' },
      { type: 'image', url: '/projects/gms-media/Capture d\'écran 2025-12-14 115752.png', alt: 'GMS Order Processing' },
      { type: 'image', url: '/projects/gms-media/Capture d\'écran 2025-12-14 115907.png', alt: 'GMS AI Analytics' },
      { type: 'image', url: '/projects/gms-media/Capture d\'écran 2025-12-14 115944.png', alt: 'GMS Email Extraction' }
    ],
    technologies: ['Angular', 'TypeScript', 'SpringBoot', 'PostgreSQL', 'Python'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'In Progress | Confidential'
  },
  {
    id: 1,
    title: 'Smart Research Guide (SRG)',
    description: 'Innovative mobile research platform connecting academic researchers with faculty mentors through intelligent matching algorithms. Features integrated Google Scholar and Scopus APIs, comprehensive research project management, publication tracking, collaboration tools, and academic networking capabilities.',
    icon: Microscope,
    media: [
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.16 AM.jpeg', alt: 'SRG Dashboard' },
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.16 AM (1).jpeg', alt: 'SRG Mobile Interface' },
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.17 AM.jpeg', alt: 'SRG Research Features' },
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.17 AM (1).jpeg', alt: 'SRG User Profile' },
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.18 AM.jpeg', alt: 'SRG Search Results' },
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.18 AM (1).jpeg', alt: 'SRG Navigation' },
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.19 AM.jpeg', alt: 'SRG Settings' },
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.19 AM (1).jpeg', alt: 'SRG Analytics' },
      { type: 'image', url: '/projects/srg-media/WhatsApp Image 2025-12-14 at 9.18.19 AM (2).jpeg', alt: 'SRG Mobile App' }
    ],
    technologies: ['React Native', 'Expo', 'Redux', 'Django REST Framework', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Delivered | Confidential'
  },
  {
    id: 2,
    title: 'Cepex Platform',
    description: 'Government-grade digital transformation platform for Tunisia Export Promotion Center, featuring secure document management, automated administrative workflows, digital signature integration, compliance tracking, and enterprise-level security protocols for export promotion services.',
    icon: Building2,
    media: [
      { type: 'image', url: '/projects/cepex-media/image.png', alt: 'Cepex Platform Homepage' },
      // { type: 'video', url: '/projects/cepex-demo.mp4', alt: 'Cepex Platform Demo' }
    ],
    technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'SpringBoot', 'FileNet'],
    liveUrl: 'https://foprodex.e-cepex.tn/',
    githubUrl: '#',
    status: 'Delivered'
  },
  
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 95 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 95 },
      { name: 'NestJS', level: 85 },
      { name: 'FastAPI', level: 85 },
      { name: 'Django', level: 75 },
      { name: 'SpringBoot', level: 75 },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'Prisma ORM', level: 80 },
      { name: 'Redis', level: 75 }
    ]
  },
  {
    title: 'DevOps & CI/CD',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'GitLab CI/CD', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Nginx', level: 80 }
    ]
  },
  {
    title: 'Cloud & Deployment',
    skills: [
      { name: 'AWS EC2, S3', level: 80 },
      { name: 'Cloudflare R2', level: 85 },
      { name: 'Ubuntu Server', level: 85 },
      { name: 'Domain Management', level: 80 },

    ]
  },
  {
    title: 'Tools & Testing',
    skills: [
      { name: 'Jest', level: 85 },
      {name : "swagger" , level : 90},
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Linux Terminal', level: 85 },
      { name: 'Mocha', level: 80 }
    ]
  }
];

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    value: 'Tarek9.9issaoui@gmail.com',
    link: 'mailto:Tarek9.9issaoui@gmail.com'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/tarek-issaoui99/',
    link: 'https://linkedin.com/in/tarek-issaoui99/'
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'github.com/Tarek-Issaoui/',
    link: 'https://github.com/Tarek-Issaoui/'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+216 54 422 280',
    link: 'tel:+21654422280'
  }
];