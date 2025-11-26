import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-mono text-gray-900 dark:text-white mb-2">
            justinrich<span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-500">
            © {new Date().getFullYear()} Justin Rich Dimaandal. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-100 dark:bg-slate-900 rounded-full text-gray-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;