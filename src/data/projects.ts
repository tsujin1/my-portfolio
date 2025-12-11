import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'resetnow',
    title: 'ResetNow',
    role: 'Full-Stack Developer | Personal',
    timeline: 'Dec 2025',
    description: 'A modern clinical workflow system for managing patients, prescriptions, and medical certificates.',
    technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT', 'EmailJS'],
    highlights: [
      'Patient management with history tracking and analytics',
      'Prescription management with print-ready templates',
      'Medical certificate generation with digital signature support'
    ],
    images: [
      { url: '/images/resetanow-1.png', alt: 'Login' },
      { url: '/images/resetanow-2.png', alt: 'Dashboard' },
      { url: '/images/resetanow-3.png', alt: 'Patient' },
      { url: '/images/resetanow-4.png', alt: 'Prescription' },
      { url: '/images/resetanow-5.png', alt: 'MedCert' },
      { url: '/images/resetanow-6.png', alt: 'Settings' }
    ],
    github: 'https://github.com/tsujin1/resetanow'
  },
  {
    id: 'puzzlify',
    title: 'Puzzlify',
    role: 'Full-Stack Developer | Personal',
    timeline: 'Nov 2025',
    description: 'A dynamic web application that turns any uploaded image into an interactive, playable sliding puzzle game with shareable capabilities.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Instant custom puzzle generation from image uploads',
      'Multiple difficulty settings (3x3 to 6x6 grids)',
      'Generated shareable links for challenge mode'
    ],
    images: [
      { url: '/images/puzzlify-1.png', alt: 'Puzzlify Upload Screen' },
      { url: '/images/puzzlify-2.png', alt: 'Puzzlify Ready Screen' },
      { url: '/images/puzzlify-3.png', alt: 'Puzzle Gameplay Interface' }
    ],
    livePreview: 'https://puzzlify-play.vercel.app/',
    github: 'https://github.com/tsujin1/puzzlify'
  },
  {
    id: 'acadevmy',
    title: 'Acadevmy',
    role: 'Full-Stack Developer | Personal',
    timeline: 'Nov 2025',
    description: 'A comprehensive online learning platform connecting students with verified mentors for structured guidance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Socket.io', 'JWT'],
    highlights: [
      'Real-time chat & notifications via Socket.io',
      'Secure authentication with JWT',
      'Review gating system for feedback'
    ],
    images: [
      { url: '/images/acadevmy-1.png', alt: 'Acadevmy Dashboard' },
      { url: '/images/acadevmy-2.png', alt: 'Session View' },
      { url: '/images/acadevmy-3.png', alt: 'Chat Interface' },
      { url: '/images/acadevmy-4.png', alt: 'Profile Setup' }
    ],
    livePreview: 'https://acadevmy-platform.vercel.app/',
    github: 'https://github.com/tsujin1/acadevmy'
  },
  {
    id: 'one-tingloy',
    title: 'One Tingloy',
    role: 'Co-Developer | Capstone',
    timeline: 'Jul – Dec 2024',
    description: 'A dedicated tourism portal for Tingloy, Batangas, designed to promote local destinations and streamline visitor information.',
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'JavaScript'],
    highlights: [
      'Collaborated with local government (LGU)',
      'Database-driven destination catalog',
      'Responsive information portal'
    ],
    images: [
      { url: '/images/tingloy-1.png', alt: 'Homepage' },
      { url: '/images/tingloy-2.png', alt: 'Destination Map' },
      { url: '/images/tingloy-3.png', alt: 'Admin Dashboard' },
      { url: '/images/tingloy-4.png', alt: 'Mobile View' }
    ]
  },
  {
    id: 'lakbayan',
    title: 'LakBayan',
    role: 'Co-Developer | Academic',
    timeline: 'May 2024',
    description: 'An interactive educational application teaching Philippine history to early childhood students through gamification.',
    technologies: ['Python', 'Kivy'],
    highlights: [
      'Gamified history modules',
      'Interactive quizzes & storytelling',
      'Cross-platform desktop compatibility'
    ],
    images: [
      { url: '/images/lakbayan-1.png', alt: 'Menu Screen' },
      { url: '/images/lakbayan-2.png', alt: 'Story Mode' },
      { url: '/images/lakbayan-3.png', alt: 'Quiz Module' },
      { url: '/images/lakbayan-4.png', alt: 'Character Select' },
      { url: '/images/lakbayan-5.png', alt: 'Progress Tracker' }
    ]
  }
];