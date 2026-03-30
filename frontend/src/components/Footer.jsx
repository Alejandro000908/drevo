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
                <img 
                  src="https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/jnyen9xy_diploma.jpg" 
                  alt="Древо Познаний Logo"
                  className="w-14 h-14 object-contain"
                />
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
