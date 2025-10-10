import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Projects";
import Certification from "./components/Certifications";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 overflow-hidden">

      {/* ✨ Twinkling Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-500 dark:bg-gray-300 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 🌌 Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-400 via-blue-300 to-green-300 dark:from-fuchsia-600 dark:via-indigo-500 dark:to-cyan-500 opacity-20 blur-3xl animate-aurora" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Project Section */}
      <Project />

      {/* Certification Section */}
      <Certification />

      {/* Footer Section */}
      <Footer />

      {/* 🎨 Animations */}
      <style>{`
        /* Twinkling stars */
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }

        /* Aurora floating */
        @keyframes aurora {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-aurora {
          animation: aurora 15s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default App;
