import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code2, Calendar, Users } from 'lucide-react';

interface ProjectImage {
    url: string;
    alt: string;
}

interface ProjectItem {
    id: string;
    title: string;
    role: string;
    timeline: string;
    description: string;
    technologies: string[];
    highlights: string[];
    images: ProjectImage[];
}

interface ProjectsProps {
    projects?: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    const defaultProjects: ProjectItem[] = [
        {
            id: 'one-tingloy',
            title: 'One Tingloy',
            role: 'Co-Developer | Capstone Project',
            timeline: 'July – December 2024',
            description: 'A responsive tourism web platform for Tingloy, Batangas, designed to promote local destinations and support the town\'s tourism industry.',
            technologies: ['HTML', 'Bootstrap', 'JavaScript', 'PHP', 'CodeIgniter', 'MySQL'],
            highlights: [
                'Developed a responsive tourism web platform for Tingloy, Batangas using HTML, Bootstrap, JavaScript, PHP (CodeIgniter), and MySQL',
                'Collaborated with the Vice Mayor of Tingloy to ensure the platform aligned with local tourism goals and community engagement efforts.',
                'Implemented database-driven features to manage destinations, accommodations, and attractions efficiently'
            ],

            images: [
                { url: '/images/tingloy-1.png', alt: '' },
                { url: '/images/tingloy-2.png', alt: '' },
                { url: '/images/tingloy-3.png', alt: '' },
                { url: '/images/tingloy-4.png', alt: '' }
            ]
        },
        {
            id: 'lakbayan',
            title: 'LakBayan',
            role: 'Co-Developer | Collaborative Academic Project',
            timeline: 'May 2024',
            description: 'An interactive tutoring app teaching Philippine history to preschool–grade 1 students through storytelling, quizzes, and engaging multimedia.',
            technologies: ['Python', 'Kivy Framework'],
            highlights: [
                'Created using Python (Kivy Framework), an interactive tutoring app teaching Philippine history to preschool–grade 1 students',
                'Implemented storytelling, quizzes, and multimedia to make learning engaging and fun',
                'Collaborated with teammates in developing functional modules and integrating interactive learning.'
            ],
            images: [
                { url: '/images/lakbayan-1.png', alt: '' },
                { url: '/images/lakbayan-2.png', alt: '' },
                { url: '/images/lakbayan-3.png', alt: '' },
                { url: '/images/lakbayan-4.png', alt: '' },
                { url: '/images/lakbayan-5.png', alt: '' },
            ]
        }
    ];

    const projectList = projects || defaultProjects;

    // State to track current image index for each project
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>(
        projectList.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {})
    );

    const nextImage = (projectId: string, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % totalImages
        }));
    };

    const prevImage = (projectId: string, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: prev[projectId] === 0 ? totalImages - 1 : prev[projectId] - 1
        }));
    };

    const goToImage = (projectId: string, index: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: index
        }));
    };

    return (
        <section className="min-h-screen relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto relative">

                {/* Section Header */}
                <div className="mb-16">
                    <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full mb-5 shadow-sm">
                        PORTFOLIO
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
                        Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                        Showcasing collaborative work and hands-on development experience
                    </p>
                </div>

                {/* Projects Grid - 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectList.map((project) => {
                        const currentIndex = currentImageIndex[project.id] || 0;
                        const totalImages = project.images.length;

                        return (
                            <article
                                key={project.id}
                                className="group bg-white/70 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Image Carousel */}
                                <div className="relative w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                    <div className="aspect-[16/10] relative overflow-hidden">
                                        {/* Images */}
                                        {project.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                            >
                                                <img
                                                    src={image.url}
                                                    alt={image.alt}
                                                    className="w-full h-full object-contain"
                                                />
                                                {/* Fallback gradient when image fails to load */}
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
                                                    style={{ display: 'none' }}
                                                >
                                                    <Code2 className="w-20 h-20 text-purple-600 dark:text-purple-400" />
                                                </div>
                                            </div>
                                        ))}

                                        {/* Navigation Arrows */}
                                        {totalImages > 1 && (
                                            <>
                                                <button
                                                    onClick={() => prevImage(project.id, totalImages)}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => nextImage(project.id, totalImages)}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}

                                        {/* Dots Indicator */}
                                        {totalImages > 1 && (
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                                {project.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToImage(project.id, index)}
                                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex
                                                                ? 'bg-white w-6'
                                                                : 'bg-white/50 hover:bg-white/75'
                                                            }`}
                                                        aria-label={`Go to image ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Title and Role */}
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                            <span className="flex items-center gap-1.5">
                                                <Users className="w-4 h-4" />
                                                {project.role}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" />
                                                {project.timeline}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border border-purple-200/50 dark:border-purple-700/40 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="mt-auto">
                                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                            Key Highlights
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                                >
                                                    <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;