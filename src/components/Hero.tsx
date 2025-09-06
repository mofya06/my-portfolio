import { ArrowDown, Github, Mail } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mofya06', label: 'GitHub' },
    { icon: Mail, href: 'mailto:mofyachisanga06@gmail.com', label: 'Email' }
  ];

  // The unused 'scrollToAbout' function has been removed.

  return (
      // Added `overflow-hidden` to prevent scrollbars from the canvas animation
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <AnimatedBackground />
        {/* --- ✅ IMPROVEMENT: Added staggered animations for a more dynamic entry --- */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Chisanga Mofya <span className="text-blue-400">Networking Specialist, Graphic Designer and Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Networking Specialist & Full Stack Developer crafting innovative digital solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Passionate about creating efficient and scalable web applications using modern technologies.
              I specialize in React, Node.js, Python, and mobile app development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <a
                  href="#portfolio"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                  href="#contact"
                  className="border-2 border-slate-300 text-slate-300 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              {socialLinks.map(link => (
                  <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <link.icon size={24} />
                  </a>
              ))}
            </div>
        </div>

        {/* This link now handles scrolling natively via its href attribute */}
        <a
            href="#about"
            aria-label="Scroll to about section"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </section>
  );
};

export default Hero;