import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users } from 'lucide-react';

interface ProjectImage { url: string; alt: string; }
interface ProjectItem {
  id: string;
  title: string;
  role: string;
  timeline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  images: ProjectImage[];
  livePreview?: string;
  github?: string;
}

const Projects: React.FC<{ projects?: ProjectItem[] }> = ({ projects }) => {
  const defaultProjects: ProjectItem[] = [
    {
      id: 'lakbayan',
      title: 'LakBayan',
      role: 'Co-Developer | Academic Project',
      timeline: 'May 2024',
      description: 'An interactive tutoring app teaching Philippine history to preschool–grade 1 students.',
      technologies: ['Python', 'Kivy Framework'],
      highlights: [
        'Storytelling, quizzes, and multimedia to engage students',
        'Collaborative development with team members',
        'Integrated functional modules and interactive learning'
      ],
      images: [
        { url: '/images/lakbayan-1.png', alt: '' },
        { url: '/images/lakbayan-2.png', alt: '' },
        { url: '/images/lakbayan-3.png', alt: '' },
        { url: '/images/lakbayan-4.png', alt: '' },
        { url: '/images/lakbayan-5.png', alt: '' }
      ]
    },
    {
      id: 'one-tingloy',
      title: 'One Tingloy',
      role: 'Co-Developer | Capstone Project',
      timeline: 'July – December 2024',
      description: 'A responsive tourism web platform for Tingloy, Batangas to promote local destinations.',
      technologies: ['HTML', 'Bootstrap', 'JavaScript', 'PHP', 'CodeIgniter', 'MySQL'],
      highlights: [
        'Responsive tourism platform development',
        'Collaborated with Vice Mayor to align goals',
        'Implemented database-driven features for destinations'
      ],
      images: [
        { url: '/images/tingloy-1.png', alt: '' },
        { url: '/images/tingloy-2.png', alt: '' },
        { url: '/images/tingloy-3.png', alt: '' },
        { url: '/images/tingloy-4.png', alt: '' }
      ]
    },
    {
      id: 'acadevmy',
      title: 'Acadevmy',
      role: 'Full-Stack Developer | Personal Project',
      timeline: 'November 2025',
      description: 'Online learning platform connecting students with verified mentors.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Socket.io', 'JWT'],
      highlights: [
        'Structured session flow for mentorship',
        'Real-time chat and notifications using Socket.io',
        'Review gating system for valid feedback',
        'Responsive UI with Tailwind CSS'
      ],
      images: [
        { url: '/images/acadevmy-1.png', alt: '' },
        { url: '/images/acadevmy-2.png', alt: '' },
        { url: '/images/acadevmy-3.png', alt: '' },
        { url: '/images/acadevmy-4.png', alt: '' }
      ],
      livePreview: 'https://acadevmy-platform.vercel.app/',
      github: 'https://github.com/tsujin1/acadevmy'
    }
  ];

  const projectList = projects || defaultProjects;
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>(
    projectList.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
  );

  const nextImage = (id: string, total: number) => setCurrentImageIndex(prev => ({ ...prev, [id]: (prev[id] + 1) % total }));
  const prevImage = (id: string, total: number) => setCurrentImageIndex(prev => ({ ...prev, [id]: prev[id] === 0 ? total - 1 : prev[id] - 1 }));

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map(p => {
          const idx = currentImageIndex[p.id];
          return (
            <div key={p.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10]">
                {p.images.map((img, i) => (
                  <img key={i} src={img.url} alt={img.alt} className={`absolute inset-0 w-full h-full object-contain transition-opacity ${i === idx ? 'opacity-100' : 'opacity-0'}`} />
                ))}
                {p.images.length > 1 && (
                  <>
                    <button onClick={() => prevImage(p.id, p.images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white"><ChevronLeft className="w-5 h-5" /></button>
                    <button onClick={() => nextImage(p.id, p.images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white"><ChevronRight className="w-5 h-5" /></button>
                  </>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                <div className="flex flex-wrap text-sm text-gray-500 mb-2 gap-2">
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />{p.role}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{p.timeline}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.technologies.map(t => <span key={t} className="text-xs bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-full">{t}</span>)}
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-2 space-y-1">
                  {p.highlights.map(h => <li key={h}>• {h}</li>)}
                </ul>
                {(p.livePreview || p.github) && (
                  <div className="mt-auto flex gap-2">
                    {p.livePreview && <a href={p.livePreview} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-xs bg-purple-600 text-white rounded">Live Preview</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-xs bg-gray-800 text-white rounded">GitHub</a>}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
