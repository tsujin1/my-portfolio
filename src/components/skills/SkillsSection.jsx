// SkillsSection.jsx
import { useState } from 'react';
import SkillCategory from './SkillCategory';

const SkillsSection = ({ skills, themeClasses }) => {
  const [animateOnView, setAnimateOnView] = useState(false);

  return (
    <section className="my-16" id="skills">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${themeClasses.text}`}>
          Skills & Technologies
        </h2>
        <p className={`text-center ${themeClasses.textSecondary} mb-10 max-w-2xl mx-auto`}>
          Here are the technologies and tools I work with to bring ideas to life
        </p>
        
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory
              key={category} // Use category name instead of index
              title={category}
              items={items}
              themeClasses={themeClasses}
              delay={index * 100} // Stagger animations
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;