import React, { useState, useEffect } from 'react';
import type { JSX } from 'react';
import { Code2, Terminal, Sparkles } from 'lucide-react';

interface DeveloperProfile {
  name: string;
  role: string;
  skills: string[];
  passion: string;
  availability: string;
}

interface HeroContent {
  greeting: string;
  fullName: string;
  title: string;
  badge: string;
  description: string;
  roleTag: string;
  button: {
    primary: string;
  };
}

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState<string>('');

  const heroContent: HeroContent = {
    greeting: "Hello,",
    fullName: "I'm Justin Rich",
    title: "Software Developer",
    badge: "Welcome to my portfolio",
    roleTag: "Designing Interfaces | Building Digital Futures",
    description: "Crafting intuitive, visually appealing interfaces that enhance user interaction while delivering seamless and modern web experiences.",
    button: {
      primary: "Download Resume",
    }
  };
  const fullText: string = heroContent.fullName;

  const developerProfile: DeveloperProfile = {
    name: "Justin Rich",
    role: "Web Developer",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    passion: "Building elegant solutions",
    availability: "Open to opportunities"
  };

  useEffect(() => {
    let index: number = 0;
    const timer: number = window.setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const codeSnippet: string = `const developer = {
  name: "${developerProfile.name}",
  role: "${developerProfile.role}",
  skills: ${JSON.stringify(developerProfile.skills)},
  passion: "${developerProfile.passion}",
  availability: "${developerProfile.availability}",
  
  code() {
    return this.passion + " with clean code";
  }
};

export default developer;`;

  const renderCodeLine = (line: string, index: number): JSX.Element => (
    <div key={index} className="flex">
      <span className="text-gray-500 select-none w-8 text-right mr-4">
        {index + 1}
      </span>
      <span className="text-gray-300">
        {line.includes('const') && (
          <span className="text-purple-400">const developer = &#123;</span>
        )}
        {line.includes('name:') && (
          <><span className="text-blue-400">name</span><span className="text-gray-300">: </span><span className="text-green-400">"{line.split('"')[1]}"</span></>
        )}
        {line.includes('role:') && (
          <><span className="text-blue-400">role</span><span className="text-gray-300">: </span><span className="text-green-400">"{line.split('"')[1]}"</span></>
        )}
        {line.includes('skills:') && (
          <><span className="text-blue-400">skills</span><span className="text-gray-300">: {line.split(':')[1]}</span></>
        )}
        {line.includes('passion:') && (
          <><span className="text-blue-400">passion</span><span className="text-gray-300">: </span><span className="text-green-400">"{line.split('"')[1]}"</span></>
        )}
        {line.includes('availability:') && (
          <><span className="text-blue-400">availability</span><span className="text-gray-300">: </span><span className="text-green-400">"{line.split('"')[1]}"</span></>
        )}
        {line.includes('code()') && (
          <><span className="text-yellow-400">code</span><span className="text-gray-300">() {'{'}</span></>
        )}
        {line.includes('return') && (
          <><span className="text-purple-400">return </span><span className="text-blue-400">this</span><span className="text-gray-300">.passion + </span><span className="text-green-400">"{line.split('"')[1]}"</span><span className="text-gray-300">;</span></>
        )}
        {line.includes('export') && (
          <><span className="text-purple-400">export default </span><span className="text-yellow-400">developer</span><span className="text-gray-300">;</span></>
        )}
        {!line.includes('const') && !line.includes('name:') && !line.includes('role:') && !line.includes('skills:') && !line.includes('passion:') && !line.includes('availability:') && !line.includes('code()') && !line.includes('return') && !line.includes('export') && line.trim() && (
          <span className="text-gray-300">{line}</span>
        )}
      </span>
    </div>
  );

  return (
    <section className="min-h-screen relative py-20 px-4 sm:px-6 lg:px-8">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {heroContent.badge}
              </span>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                {heroContent.greeting}
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                {typedText}
                <span className="inline-block w-1 h-12 bg-blue-600 ml-1 animate-pulse" />
              </h2>
            </div>

            <div className="inline-block px-6 py-3 bg-gray-900 dark:bg-gray-100 rounded-lg">
              <span className="text-sm font-semibold text-white dark:text-gray-900 tracking-wide">
                {heroContent.title}
              </span>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              <span className="flex items-center gap-2 mb-2">
                <Terminal size={20} className="text-blue-600 dark:text-blue-400" />
                <span className="font-semibold text-gray-900 dark:text-white">{heroContent.roleTag}</span>
              </span>
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/files/Justin-Rich-Dimaandal-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {heroContent.button.primary}
                </button>
              </a>
            </div>
          </div>

          {/* Right side - Code snippet */}
          <div className="relative" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl" />

            <div className="relative bg-gray-800 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Window controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-700 dark:bg-gray-800 border-b border-gray-600">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-xs">
                  <Code2 size={14} />
                  <span>developer.jsx</span>
                </div>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                {codeSnippet.split('\n').map((line, i) => renderCodeLine(line, i))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;