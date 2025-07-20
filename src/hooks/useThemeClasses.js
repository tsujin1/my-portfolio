const useThemeClasses = (isDark) => ({
    bg: isDark ? 'bg-gray-900' : 'bg-white',
    cardBg: isDark ? 'bg-gray-800' : 'bg-gray-100',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    border: isDark ? 'border-gray-700' : 'border-gray-200',
    headerBg: isDark ? 'bg-gray-900/95' : 'bg-white/95',
  });
  
  export default useThemeClasses;
  