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
            <div className="w-12 h-12 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-lg flex items-center justify-center mr-3 shadow-md">
              <svg className="w-7 h-7 text-[#81C784]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C9.24 2 7 4.24 7 7c0 1.77.93 3.32 2.33 4.21C8.52 12.23 8 13.56 8 15v7h8v-7c0-1.44-.52-2.77-1.33-3.79C16.07 10.32 17 8.77 17 7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#1B5E20] leading-tight">
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
