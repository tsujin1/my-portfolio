import React from 'react';
import { Mail, Linkedin, Code, Layers, Zap } from 'lucide-react'; 

interface Skill {
  name: string;
  category: 'framework' | 'styling' | 'language' | 'concept' | 'tools' | 'database';
}

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AboutContent {
  role: string;
  tagline: string;
  description: string;
  email: string;
  linkedin: string;
}

const AboutSection: React.FC = () => {
  const aboutContent: AboutContent = {
    role: "SOFTWARE DEVELOPER",
    tagline: "Building elegant solutions for a connected world.",
    description: "Passionate about creating clean, efficient, and scalable web applications that deliver great user experiences.",
    email: "justindimaandal.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/justin-rich-dimaandal/"
  };

  const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Java", category: "language" },
  { name: "Python", category: "language" },

  // Frameworks
  { name: "React", category: "framework" },
  { name: "CodeIgniter", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Express", category: "framework" },
  { name: "Socket.io", category: "framework" },

  // Styling
  { name: "Tailwind CSS", category: "styling" },
  { name: "Bootstrap", category: "styling" },

  // Databases
  { name: "MongoDB", category: "database" },
  { name: "SQL", category: "database" },

  // Tools
  { name: "Microsoft Sharepoint", category: "tools" },
  { name: "Power Apps", category: "tools" },
  { name: "Power Automate", category: "tools" },

  // Concepts
  { name: "UI/UX Design", category: "concept" },
  { name: "Responsive Design", category: "concept" }
];


  const valueCards: ValueCard[] = [
    {
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      title: "Problem Solving",
      description: "Breaking down challenges into effective solutions"
    },
    {
      icon: <Layers className="w-8 h-8 text-green-500" />,
      title: "Collaboration",
      description: "Working seamlessly with teams to deliver results"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "Project Management",
      description: "Organizing, prioritizing, and delivering projects on time"
    }
  ];

  return (
    <section className="min-h-screen relative py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Profile Card */}
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 order-2 lg:order-1">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-full h-full sm:w-10/12 sm:h-10/12 object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Header with Social Icons */}
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold rounded-full mb-5 shadow-sm">
                  {aboutContent.role}
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
                  {aboutContent.tagline}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                  {aboutContent.description}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href={`mailto:${aboutContent.email}`}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={aboutContent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Expertise Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium border shadow-sm transition-all duration-300 hover:scale-105 ${skill.category === 'framework'
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200/50 dark:border-blue-700/40'
                        : skill.category === 'styling'
                          ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200/50 dark:border-purple-700/40'
                          : skill.category === 'language'
                            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200/50 dark:border-green-700/40'
                            : skill.category === 'tools'
                              ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200/50 dark:border-orange-700/40'
                              : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200/50 dark:border-gray-700'
                      }`}

                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Skills Timeline */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative">
              {valueCards.map((card, index) => (
                <div key={index} className="flex flex-col items-center text-center max-w-[200px]">
                  {/* Skill Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-2xl mb-3">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
