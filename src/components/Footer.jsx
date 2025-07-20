import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = ({ isDark, themeClasses }) => {
  const socialLinks = [
    {
      Icon: Mail,
      href: 'mailto:your.email@example.com',
      label: 'Get In Touch',
      className: `${
        isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-900 hover:bg-gray-800'
      } text-white`,
    },
    {
      Icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
      className: `${themeClasses.cardBg} hover:opacity-80 ${themeClasses.text} ${themeClasses.border} border`,
    },
    {
      Icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
      className: `${
        isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
      } text-white`,
    },
  ];

  return (
    <footer className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} py-8 md:py-12`}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h3 className={`text-xl md:text-2xl font-bold ${themeClasses.text} mb-4`}>
          Let's Connect
        </h3>
        <p className={`${themeClasses.textSecondary} mb-6 max-w-md mx-auto text-sm md:text-base`}>
          I'm always open to discussing new opportunities and learning experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 mb-8">
          {socialLinks.map(({ Icon, href, label, className }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={`flex items-center justify-center space-x-2 w-full sm:w-auto px-4 md:px-6 py-3 rounded-lg transition-colors min-w-[140px] ${className}`}
              aria-label={label}
            >
              <Icon size={16} className="md:w-[18px] md:h-[18px]" />
              <span className="text-sm md:text-base">{label}</span>
            </a>
          ))}
        </div>
        
        <div className={`pt-6 md:pt-8 border-t ${themeClasses.border}`}>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs md:text-sm`}>
            © 2025 Justin's Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;