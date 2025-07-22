import { useState, useEffect } from 'react';
import useThemeClasses from './hooks/useThemeClasses';
import { Mail, FileDown, MapPin, Code, Zap } from 'lucide-react';

const HeroSection = ({ isDark, themeClasses }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = "Justin Dimaandal";

    // Typewriter effect
    useEffect(() => {
        setIsVisible(true);
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((prev) => fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, []);

    const infoCards = [
        {
            id: 'location',
            title: 'Location',
            text: 'Muzon, San Luis, Batangas, Philippines',
            Icon: MapPin,
            gradient: 'from-blue-500 to-cyan-500',
            delay: 'delay-100'
        },
        {
            id: 'focus',
            title: 'Focus',
            text: 'Web Development & Programming',
            Icon: Code,
            gradient: 'from-purple-500 to-pink-500',
            delay: 'delay-200'
        },
        {
            id: 'status',
            title: 'Status',
            text: 'Learning & Growing',
            Icon: Zap,
            gradient: 'from-green-500 to-emerald-500',
            delay: 'delay-300'
        }
    ];

    const handleContactClick = () => {
        // You can add scroll to contact section or open email client
        window.location.href = 'mailto:your.email@example.com';
    };

    const handleResumeClick = () => {
        // Add your resume download logic here
        console.log('Resume download clicked');
    };

    return (
        <section className={`${themeClasses.bg} min-h-screen flex items-center relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            {/* Floating Animation Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        {/* Developer Tag */}
                        <div className="mb-4">
                            <span className={`text-sm font-mono ${themeClasses.textSecondary} bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-full border ${themeClasses.border} hover:scale-105 transition-transform duration-300 inline-block`}>
                                &lt;developer /&gt;
                            </span>
                        </div>

                        {/* Main Title with Typewriter Effect */}
                        <h1 className={`text-5xl lg:text-7xl font-black ${themeClasses.text} mb-8 leading-tight`}>
                            Hello! I'm{' '}
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                {typedText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h1>

                        {/* Description */}
                        <div className={`relative mb-8 transition-all duration-1000 delay-300 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}>
                            <p className={`text-xl ${themeClasses.textSecondary} leading-relaxed max-w-2xl backdrop-blur-sm text-justify`}>
                                I'm a passionate developer with a strong interest in web development and programming.
                                I enjoy building responsive websites using React and Tailwind CSS, and I'm constantly
                                exploring new technologies to improve my skills. I also have foundational knowledge in
                                languages like C++, Java, Python, and VB.NET, and I'm always eager to learn more and
                                deepen my understanding.
                            </p>
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transform scale-y-0 animate-pulse delay-500"></div>
                        </div>

                        {/* Action Buttons */}
                        <div className={`flex flex-wrap gap-6 mb-12 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <button
                                onClick={handleContactClick}
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                                aria-label="Contact Justin Dimaandal"
                            >
                                <span className="relative z-10 flex items-center space-x-2">
                                    <Mail size={20} />
                                    <span>Contact Me</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <button
                                onClick={handleResumeClick}
                                className={`group relative overflow-hidden ${themeClasses.cardBg} hover:scale-105 ${themeClasses.text} px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${themeClasses.border} border-2 hover:border-blue-500/50 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/50`}
                                aria-label="Download Justin's resume"
                            >
                                <span className="flex items-center space-x-2">
                                    <FileDown size={20} className="group-hover:animate-bounce" />
                                    <span>Resume</span>
                                </span>
                            </button>
                        </div>

                        {/* Info Cards */}
                        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto lg:mx-0">
                            {infoCards.map((info, idx) => (
                                <div
                                    key={info.id}
                                    className={`group relative ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${themeClasses.border} border hover:border-opacity-50 hover:shadow-2xl animate-fadeInUp ${info.delay}`}
                                >
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <info.Icon className="text-white w-6 h-6" />
                                    </div>
                                    <h4 className={`${themeClasses.text} font-bold text-lg mb-2`}>{info.title}</h4>
                                    <p className={`${themeClasses.textSecondary} text-sm leading-relaxed`}>{info.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className={`flex-1 max-w-md lg:max-w-lg transition-all duration-1000 delay-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        <div className="relative">
                            <div className="relative group">
                            <div className={`rounded-3xl overflow-hidden shadow-2xl ${themeClasses.border} border-2 hover:shadow-blue-500/20 transition-all duration-500 group-hover:scale-105`}>
                                <img
                                    src="/images/profile.png"
                                    alt="Portrait of Justin Dimaandal, web developer"
                                    className={`w-full h-[400px] lg:h-[500px] object-cover object-center group-hover:scale-110 transition-transform duration-700 ${themeClasses.profileFilter}`}
                                    loading="lazy"
                                />
                            </div>
                                <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/30 animate-pulse scale-110"></div>
                                
                                {/* Floating Skills Tags */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                                    Aspiring Web Developer
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-1000">
                                    Always Learning
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
