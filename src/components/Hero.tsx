import { useState, useEffect } from 'react';
import { Code2, Terminal, Sparkles, Download, ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/profile';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = HERO_CONTENT.name;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [fullText]);

  const codeSnippet = `const developer = {
  name: "${HERO_CONTENT.name}",
  role: "${HERO_CONTENT.role}",
  skills: [
    "React",
    "TypeScript",
    "MERN Stack"
  ],
  hardWorker: true,
  quickLearner: true,
  
  code: function() {
    return "Writing clean, scalable code";
  }
};

export default developer;`;

  const renderCodeLine = (line: string, i: number) => {
    const getColor = (text: string) => {
      if (text.includes('const') || text.includes('export') || text.includes('default') || text.includes('return') || text.includes('function')) return 'text-purple-400';
      if (text.includes('true') || text.includes('false')) return 'text-orange-400';
      if (text.includes('"')) return 'text-green-400';
      if (text.includes(':')) return 'text-blue-300';
      return 'text-gray-300';
    };

    return (
      <div key={i} className="flex font-mono text-sm leading-6">
        <span className="w-8 text-gray-600 select-none text-right mr-4">{i + 1}</span>
        <span className={getColor(line)}>{line}</span>
      </div>
    );
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full">
              <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                Welcome to my portfolio
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
                {HERO_CONTENT.greeting} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  {typedText}
                </span>
                <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-slate-400 font-medium">
                {HERO_CONTENT.role}
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              <span className="flex items-center justify-center lg:justify-start gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                <Terminal size={18} className="text-blue-500" />
                {HERO_CONTENT.passion}
              </span>
              {HERO_CONTENT.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={HERO_CONTENT.resumeLink}
                download="Justin_Dimaandal_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-40 animate-pulse"></div>
            
            <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 transition-transform duration-500 hover:scale-[1.02]">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center space-x-2 text-slate-400 text-xs font-mono">
                  <Code2 size={14} />
                  <span>profile.ts</span>
                </div>
              </div>

              <div className="p-6 overflow-x-auto">
                {codeSnippet.split('\n').map((line, i) => renderCodeLine(line, i))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;