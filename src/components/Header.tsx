import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      // Adjust offset to make the active link change a bit earlier
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // Added navItems to dependency array

  return (
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="flex-shrink-0">
              <span className="text-2xl font-bold text-slate-800">CD</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {/* --- IMPROVEMENT: Changed to `a` tags for accessibility --- */}
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                            activeSection === item.id
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                      {item.label}
                    </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {/* --- IMPROVEMENT: Changed to `a` tags for accessibility --- */}
                  {navItems.map((item) => (
                      <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                              activeSection === item.id
                                  ? 'text-blue-600 bg-blue-50'
                                  : 'text-slate-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                      >
                        {item.label}
                      </a>
                  ))}
                </div>
              </div>
          )}
        </nav>
      </header>
  );
};

export default Header;