// SkillItem.jsx
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
          {item.level && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
          )}
        </div>
  
        <p className={`mt-3 text-sm md:text-base font-medium transition-all duration-300 ${themeClasses.text} ${
          isHovered ? 'font-semibold text-blue-600' : 'group-hover:font-semibold group-hover:text-blue-600'
        }`}>
          {item.name}
        </p>
  
        {item.experience && (
          <span className={`text-xs ${themeClasses.textSecondary} opacity-0 group-hover:opacity-100 transition-opacity`}>
            {item.experience}
          </span>
        )}
      </div>
    );
  };
  
  export default SkillItem;
  