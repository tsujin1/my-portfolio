import React, { useState, useEffect } from "react";
import { Moon, Sun, Mail, Linkedin } from "lucide-react";

// Type definition for navbar config
type NavbarConfig = {
  logoText: string;
  email: string;
  linkedIn: string;
};

// Navbar configuration constant
const navbar: NavbarConfig = {
  logoText: "justinrich.",
  email: "justindimaandal.work@gmail.com",
  linkedIn: "https://www.linkedin.com/in/justin-rich-dimaandal/",
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = (): void => setDarkMode((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${scrolled
            ? "bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl rounded-full px-8 py-4 scale-110"
            : "bg-transparent py-6 px-8 scale-100"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold font-mono bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              {navbar.logoText}
            </h1>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href={`mailto:${navbar.email}`}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="hidden sm:inline text-sm font-medium">Email</span>
            </a>

            <a
              href={navbar.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline text-sm font-medium">LinkedIn</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
