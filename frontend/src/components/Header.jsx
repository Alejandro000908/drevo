import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const handleNavigation = (link) => {
    if (link.external) {
      // External page navigation will be handled by Link component
      setIsMenuOpen(false);
    } else {
      // Scroll to section on current page
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        window.location.href = '/#' + link.id;
      } else {
        scrollToSection(link.id);
      }
    }
  };

  const navLinks = [
    { id: 'home', label: 'Главная', external: false },
    { id: 'about', label: 'О школе', external: false },
    { id: 'programs', label: 'Программы', path: '/programs', external: true },
    { id: 'results', label: 'Результаты', external: false },
    { id: 'news', label: 'Новости', external: false },
    { id: 'vacancies', label: 'Вакансии', path: '/vacancies', external: true },
    { id: 'faq', label: 'FAQ', external: false },
    { id: 'contacts', label: 'Контакты', external: false }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 dark-mode-transition ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg dark:shadow-2xl dark:shadow-[#009479]/10'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center cursor-pointer group"
          >
            <div className="w-14 h-14 flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">
              <img 
                src="https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/jnyen9xy_diploma.jpg" 
                alt="Древо Познаний Logo"
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#009479] dark:text-[#00BFA5] leading-tight transition-colors duration-300">
                Древо Познаний
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">Частная школа</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.external ? (
                <Link
                  key={link.id}
                  to={link.path}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#009479] dark:hover:text-[#00BFA5] transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009479] dark:bg-[#00BFA5] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#009479] dark:hover:text-[#00BFA5] transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009479] dark:bg-[#00BFA5] transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+79161222112"
              className="flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span className="text-sm font-medium">+7 (916) 122-21-12</span>
            </a>
            <Button
              onClick={() => {
                if (location.pathname !== '/') {
                  window.location.href = '/#contacts';
                } else {
                  scrollToSection('contacts');
                }
              }}
              className="bg-[#009479] hover:bg-[#007A64] dark:bg-[#00BFA5] dark:hover:bg-[#009479] text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 button-hover glow-on-hover"
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
              link.external ? (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-[#009479]/10 hover:text-[#009479] rounded-lg transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link)}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-[#009479]/10 hover:text-[#009479] rounded-lg transition-colors duration-200 font-medium"
                >
                  {link.label}
                </button>
              )
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
                onClick={() => {
                  if (location.pathname !== '/') {
                    window.location.href = '/#contacts';
                  } else {
                    scrollToSection('contacts');
                  }
                }}
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
