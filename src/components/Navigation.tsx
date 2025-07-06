
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    'Our Services',
    'Who We Help', 
    'Calculators',
    'Learn',
    'About',
    'Commercial Investment'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90 backdrop-blur-lg'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-3 py-2 rounded-lg font-bold text-xl hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in-left">
              Flint
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 relative group animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-500 hover:scale-105 hover:from-orange-500 hover:to-pink-500 animate-fade-in-up transform-gpu" style={{animationDelay: '600ms'}}>
              CONTACT US
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 transform-gpu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transform transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col h-full pt-20 px-8 bg-gradient-to-br from-purple-50 to-pink-50">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className={`text-2xl text-gray-700 hover:text-purple-600 py-4 border-b border-gray-100 transition-all duration-500 transform hover:translate-x-2 hover:scale-105 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-full mt-8 text-xl hover:shadow-lg transition-all duration-500 hover:scale-105 transform-gpu">
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
