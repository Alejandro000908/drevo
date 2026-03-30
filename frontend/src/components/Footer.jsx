import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { SCHOOL_INFO } from '../data/mock';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#414141] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center mr-3">
                <svg className="w-14 h-14" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Book base */}
                  <path d="M30 115 L30 125 L90 125 L90 115 L85 115 L85 110 L35 110 L35 115 Z" fill="#009479"/>
                  <path d="M40 112 L80 112 L80 115 L40 115 Z" fill="#009479" opacity="0.8"/>
                  
                  {/* Tree trunk */}
                  <path d="M55 110 L55 75 L65 75 L65 110" fill="#009479"/>
                  
                  {/* Tree crown - brain-like shape */}
                  <path d="M60 75 C 50 75 42 68 42 58 C 42 52 45 47 48 44 C 46 41 45 38 45 35 C 45 28 50 22 57 20 C 58 15 62 10 68 10 C 72 10 75 12 77 15 C 79 13 82 12 85 12 C 90 12 94 15 96 19 C 99 20 102 23 103 27 C 105 28 106 30 106 33 C 106 36 104 39 101 40 C 102 42 103 45 103 48 C 103 54 99 59 94 62 C 95 65 95 68 94 71 C 92 76 87 80 81 80 C 78 80 75 79 73 77 C 71 79 68 80 65 80 C 61 80 58 78 56 75 Z" fill="#009479"/>
                  
                  {/* Brain details */}
                  <path d="M50 50 Q 55 45 60 50 Q 65 45 70 50" stroke="#007A64" strokeWidth="2" fill="none"/>
                  <path d="M75 55 Q 78 52 81 55" stroke="#007A64" strokeWidth="2" fill="none"/>
                  <path d="M52 60 Q 56 58 60 62" stroke="#007A64" strokeWidth="1.5" fill="none"/>
                  <path d="M65 65 Q 70 63 74 67" stroke="#007A64" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">{SCHOOL_INFO.name}</h3>
                <p className="text-sm text-gray-400">{SCHOOL_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Частная школа с индивидуальным подходом. Подготовка к ЕГЭ и ОГЭ с гарантией результата.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Навигация</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О школе' },
                { id: 'courses', label: 'Курсы' },
                { id: 'results', label: 'Результаты' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#009479] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#009479] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#009479] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="text-sm text-gray-400 hover:text-[#009479] transition-colors"
                >
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#009479] flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`mailto:${SCHOOL_INFO.email}`}
                    className="text-sm text-gray-400 hover:text-[#009479] transition-colors block"
                  >
                    {SCHOOL_INFO.email}
                  </a>
                  <a
                    href={`mailto:${SCHOOL_INFO.emailSecondary}`}
                    className="text-sm text-gray-400 hover:text-[#009479] transition-colors block"
                  >
                    {SCHOOL_INFO.emailSecondary}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3 mb-6">
              <a
                href={SCHOOL_INFO.social.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#009479] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="VK"
              >
                <span className="font-bold">VK</span>
              </a>
              <a
                href={SCHOOL_INFO.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#009479] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Telegram"
              >
                <span className="font-bold">TG</span>
              </a>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2 text-sm">График работы</h5>
              <p className="text-sm text-gray-400">{SCHOOL_INFO.schedule}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} {SCHOOL_INFO.name}. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 fill-[#009479] text-[#009479]" />
              <span>для наших учеников</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
