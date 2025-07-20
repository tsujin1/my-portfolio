// SkillCategory.jsx
import { useState } from 'react';

const SkillCategory = ({ title, items, themeClasses, delay = 0 }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      className={`rounded-2xl shadow-lg p-6 mb-8 ${themeClasses.cardBg} ${themeClasses.border} w-full max-w-6xl mx-auto transition-all duration-500 hover:shadow-xl`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${themeClasses.text} relative`}>
        {title}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </h3>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        {items
          .slice() // creates a shallow copy so you don't mutate the original props
          .sort((a, b) => a.name.localeCompare(b.name)) // alphabetize by name
          .map((item, index) => (
            <SkillItem
              key={`${title}-${item.name}`}
              item={item}
              index={index}
              themeClasses={themeClasses}
              isHovered={hoveredItem === index}
              onHover={() => setHoveredItem(index)}
              onLeave={() => setHoveredItem(null)}
            />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ 
  item, 
  index, 
  themeClasses, 
  isHovered, 
  onHover, 
  onLeave 
}) => {
  return (
    <div
      className="flex flex-col items-center text-center min-w-[90px] cursor-pointer group transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className={`relative overflow-hidden rounded-xl p-3 transition-all duration-300 ${
        isHovered 
          ? 'bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg scale-110' 
          : 'group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 group-hover:shadow-lg'
      }`}>
        <img
          src={item.img}
          alt={`${item.name} logo`}
          className="w-14 h-14 object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/56x56?text=?';
          }}
        />
      </div>
      
      <p className={`mt-3 text-sm md:text-base font-medium transition-all duration-300 ${themeClasses.text} ${
        isHovered ? 'font-semibold text-blue-600' : 'group-hover:font-semibold group-hover:text-blue-600'
      }`}>
        {item.name}
      </p>
    </div>
  );
};

export default SkillCategory;
