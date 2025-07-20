import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

const Header = ({ isDark, toggleTheme, themeClasses }) => {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.headerBg} backdrop-blur-lg ${themeClasses.border} border-b`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${themeClasses.text}`}>
          Justin's Portfolio
        </h1>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${themeClasses.cardBg} ${themeClasses.text} hover:opacity-80 transition-opacity`}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors`}
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;