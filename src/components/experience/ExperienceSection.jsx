import ExperienceCard from './ExperienceCard';

const ExperienceSection = ({ experiences, isDark, themeClasses }) => {
  return (
    <section className="my-16">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-10 ${themeClasses.text}`}>
          Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              isDark={isDark}
              themeClasses={themeClasses}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;