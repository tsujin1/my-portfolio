import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "../data/profile";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      
      <div
        className={`
          w-full max-w-7xl mx-auto px-6 
          transition-all duration-300 ease-in-out
          flex items-center justify-between
          ${scrolled 
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg rounded-full py-2.5 ring-1 ring-gray-200 dark:ring-white/10" 
            : "bg-transparent py-4"
          }
        `}
      >
        
        <a href="#" className="flex-shrink-0 group">
          <span className="text-xl sm:text-2xl font-bold font-mono text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            justinrich<span className="text-blue-600 dark:text-blue-400">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-3 border-r border-gray-200 dark:border-slate-700 pr-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white transition-colors"><Github size={18} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors"><Mail size={18} /></a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 dark:text-yellow-400"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 p-6 flex flex-col space-y-4 animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-gray-100 dark:bg-slate-800 my-2" />
          <div className="flex justify-center space-x-8">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-slate-400"><Github size={20} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-slate-400"><Linkedin size={20} /></a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-500 dark:text-slate-400"><Mail size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;