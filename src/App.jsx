// React & Hooks
import { useState } from 'react';

// Custom Hooks
import useThemeClasses from './hooks/useThemeClasses';

// Data
import skills from './data/skills';
import experiences from './data/experiences';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/skills/SkillsSection';
import ExperienceSection from './components/experience/ExperienceSection';
import Footer from './components/Footer';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const themeClasses = useThemeClasses(isDark);
  
  const toggleTheme = () => setIsDark(!isDark);

  // Common props to reduce repetition
  const themeProps = { isDark, themeClasses };

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-colors duration-300`}>
      <Header 
        {...themeProps}
        toggleTheme={toggleTheme} 
      />
      
      <main className="pt-20">
        <HeroSection {...themeProps} />
        
        <SkillsSection 
          skills={skills} 
          themeClasses={themeClasses} 
        />
        
        <ExperienceSection 
          experiences={experiences} 
          {...themeProps}
        />
        
        <Footer {...themeProps} />
      </main>
    </div>
  );
};

export default App;