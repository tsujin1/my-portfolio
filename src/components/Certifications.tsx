import React from 'react';
import { Award } from 'lucide-react';

interface CertificationItem {
    id: string;
    logoPath: string;
    title: string;
    issuer: string;
    issued: string;
    skills?: string[];
}

interface CertificationProps {
    certs?: CertificationItem[];
    compact?: boolean;
}

const Certification: React.FC<CertificationProps> = ({ certs, compact = false }) => {
    // Default certification data
    const defaultCerts: CertificationItem[] = [
        {
            id: 'comptia-itf',
            logoPath: '/images/comptia.jpg',
            title: 'CompTIA IT Fundamentals (ITF+)',
            issuer: 'CompTIA',
            issued: 'May 2025',
            skills: ['Troubleshooting']
        },
        {
            id: 'aws-cloud-foundations',
            logoPath: '/images/aws.jpg',
            title: 'AWS Academy Graduate — AWS Academy Cloud Foundations',
            issuer: 'Amazon Web Services (AWS)',
            issued: 'Dec 2024',
            skills: ['Cloud fundamentals']
        },
        {
            id: 'cisco-cybersecurity',
            logoPath: '/images/cisco.jpg',
            title: 'Cybersecurity Essentials',
            issuer: 'Cisco Networking Academy',
            issued: 'May 2024',
            skills: ['Cybersecurity basics']
        }
    ];

    const certifications = certs || defaultCerts;

    return (
        <section className="min-h-screen relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto relative">

                {/* Section Header */}
                <div className="mb-16">
                    <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold rounded-full mb-5 shadow-sm">
                        ACHIEVEMENTS
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
                        Certifications
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                        Professional certifications and credentials earned throughout my journey
                    </p>
                </div>

                {/* Certifications Grid - 3 columns on large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <article
                            key={cert.id}
                            className="group bg-white/70 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 overflow-hidden flex flex-col"
                            tabIndex={0}
                            role="article"
                            aria-label={`${cert.title} certification from ${cert.issuer}`}
                        >
                            {/* Certificate Image - Full Width at Top */}
                            <div className="relative w-full bg-white dark:bg-gray-800">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={cert.logoPath}
                                        alt={`${cert.title} certificate`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Fallback icon when image fails to load */}
                                    <div
                                        className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30"
                                        style={{ display: 'none' }}
                                        aria-hidden="true"
                                    >
                                        <Award className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${compact ? 'p-4' : 'p-6'} flex-1 flex flex-col`}>
                                {/* Title */}
                                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>

                                {/* Issuer */}
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {cert.issuer}
                                </p>

                                {/* Issued Date */}
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                                    Issued: {cert.issued}
                                </p>

                                {/* Skills Pills - Hide in compact mode */}
                                {!compact && cert.skills && cert.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-auto" role="list" aria-label="Skills covered">
                                        {cert.skills.map((skill, index) => (
                                            <span
                                                key={`${cert.id}-skill-${index}`}
                                                role="listitem"
                                                className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-700/40 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certification;