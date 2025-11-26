import { Mail, Linkedin, Code, Layers, Zap } from 'lucide-react';
import { ABOUT_CONTENT, SKILLS, SOCIAL_LINKS } from '../data/profile';
import type { Skill } from '../types';

const VALUE_CARDS = [
  {
    icon: <Code className="w-6 h-6 text-yellow-500" />,
    title: "Problem Solving",
    description: "Breaking down challenges into effective solutions"
  },
  {
    icon: <Layers className="w-6 h-6 text-green-500" />,
    title: "Collaboration",
    description: "Working seamlessly with teams to deliver results"
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    title: "Project Management",
    description: "Prioritizing and delivering projects on time"
  }
];

const getSkillStyle = (category: Skill['category']) => {
  const styles = {
    framework: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    styling: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    language: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
    database: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    tools: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800',
    concept: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
  };
  return styles[category];
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative group mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative aspect-[2/3] w-full rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-xl">
              <img
                src="/images/profile.png" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
                {ABOUT_CONTENT.roleTitle}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                {ABOUT_CONTENT.tagline}
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                {ABOUT_CONTENT.description}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition-opacity font-medium shadow-lg hover:shadow-xl"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-md text-xs font-medium border ${getSkillStyle(skill.category)}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
              {VALUE_CARDS.map((card, index) => (
                <div key={index} className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
                  <div className="p-2 w-fit rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;