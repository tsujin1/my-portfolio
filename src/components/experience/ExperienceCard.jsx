const ExperienceCard = ({ exp, isDark, themeClasses }) => {
    const periodBadgeClasses = `
      ${themeClasses.textSecondary} 
      ${isDark ? 'bg-gray-700' : 'bg-gray-100'} 
      px-4 py-2 rounded-lg mt-2 md:mt-0 text-sm font-medium
    `.trim();
  
    const techBadgeClasses = `
      ${isDark
        ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
        : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
      } 
      px-3 py-1 rounded-full text-sm border transition-colors duration-200
    `.trim();
  
    return (
      <div
        className={`rounded-2xl shadow-lg p-6 mb-8 ${themeClasses.cardBg} ${themeClasses.border} w-full max-w-6xl mx-auto transition-all duration-500 hover:shadow-xl`}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex-1">
            <h3 className={`text-2xl font-semibold ${themeClasses.text} mb-2`}>
              {exp.title}
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg font-medium`}>
              {exp.company}
            </p>
          </div>
          
          <span className={periodBadgeClasses}>
            {exp.period}
          </span>
        </div>
  
        {/* Description */}
        <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed text-base`}>
          {exp.description}
        </p>
  
        {/* Technologies */}
        {exp.technologies && exp.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={techBadgeClasses}
                title={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default ExperienceCard;