import type { CertificationItem } from '../types';

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'comptia-itf',
    logoPath: '/images/comptia.jpg',
    title: 'CompTIA IT Fundamentals (ITF+)',
    issuer: 'CompTIA',
    issued: 'May 2025',
    skills: ['IT Infrastructure', 'Software Development', 'Database Fundamentals']
  },
  {
    id: 'aws-cloud-foundations',
    logoPath: '/images/aws.jpg',
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Dec 2024',
    skills: ['Cloud Concepts', 'AWS Core Services', 'Security & Architecture']
  },
  {
    id: 'cisco-cybersecurity',
    logoPath: '/images/cisco.jpg',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    issued: 'May 2024',
    skills: ['Network Security', 'Threat Detection', 'Cyber Ethics']
  }
];