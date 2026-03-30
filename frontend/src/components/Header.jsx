import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О школе' },
    { id: 'courses', label: 'Курсы' },
    { id: 'results', label: 'Результаты' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-14 h-14 flex items-center justify-center mr-3">
              <svg className="w-14 h-14" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 115 L30 125 L90 125 L90 115 L85 115 L85 110 L35 110 L35 115 Z" fill="#009479"/>
                <path d="M40 112 L80 112 L80 115 L40 115 Z" fill="#009479" opacity="0.8"/>
                <path d="M55 110 L55 75 L65 75 L65 110" fill="#009479"/>
                <path d="M60 75 C 50 75 42 68 42 58 C 42 52 45 47 48 44 C 46 41 45 38 45 35 C 45 28 50 22 57 20 C 58 15 62 10 68 10 C 72 10 75 12 77 15 C 79 13 82 12 85 12 C 90 12 94 15 96 19 C 99 20 102 23 103 27 C 105 28 106 30 106 33 C 106 36 104 39 101 40 C 102 42 103 45 103 48 C 103 54 99 59 94 62 C 95 65 95 68 94 71 C 92 76 87 80 81 80 C 78 80 75 79 73 77 C 71 79 68 80 65 80 C 61 80 58 78 56 75 Z" fill="#009479"/>
                <path d="M50 50 Q 55 45 60 50 Q 65 45 70 50" stroke="#007A64" strokeWidth="2" fill="none"/>
                <path d="M75 55 Q 78 52 81 55" stroke="#007A64" strokeWidth="2" fill="none"/>
                <path d="M52 60 Q 56 58 60 62" stroke="#007A64" strokeWidth="1.5" fill="none"/>
                <path d="M65 65 Q 70 63 74 67" stroke="#007A64" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#009479] leading-tight">
                Древо Познаний
              </h1>
              <p className="text-xs text-gray-600">Частная школа</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#2E7D32] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+79161222112"
              className="flex items-center gap-2 text-[#009479] hover:text-[#007A64] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+7 (916) 122-21-12</span>
            </a>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-[#009479] hover:bg-[#007A64] text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#0E2A47]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0E2A47]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-4 py-3 text-gray-700 hover:bg-[#009479]/10 hover:text-[#009479] rounded-lg transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+79161222112"
                className="flex items-center gap-2 px-4 py-3 text-[#009479] hover:text-[#007A64] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+7 (916) 122-21-12</span>
              </a>
              <Button
                onClick={() => scrollToSection('contacts')}
                className="w-full bg-[#009479] hover:bg-[#007A64] text-white font-medium py-3 rounded-lg shadow-md"
              >
                Записаться на занятие
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
