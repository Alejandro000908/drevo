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
              {/* VK */}
              <a
                href={SCHOOL_INFO.social.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#0077FF] rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                aria-label="VK"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.53h-1.48c-.63 0-.82-.5-1.96-1.64-.98-.98-1.42-1.12-1.67-1.12-.34 0-.44.1-.44.58v1.5c0 .4-.13.65-1.18.65-1.75 0-3.69-.97-5.04-2.77-2.03-2.61-2.59-4.57-2.59-4.97 0-.25.1-.48.58-.48h1.48c.43 0 .6.2.76.65.85 2.35 2.28 4.41 2.87 4.41.22 0 .32-.1.32-.66v-2.56c-.07-1.13-.66-1.22-.66-1.62 0-.2.17-.4.43-.4h2.33c.36 0 .5.2.5.62v3.46c0 .36.16.5.27.5.22 0 .4-.14.82-.56 1.26-1.42 2.17-3.61 2.17-3.61.12-.25.32-.48.76-.48h1.48c.53 0 .65.27.53.62-.18.85-1.85 3.51-1.85 3.51-.19.3-.26.44 0 .77.19.25.82.8 1.24 1.29.77.88 1.36 1.62 1.52 2.13.15.52-.08.78-.61.78z"/>
                </svg>
              </a>
              
              {/* Telegram */}
              <a
                href={SCHOOL_INFO.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#0088cc] rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                aria-label="Telegram"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SCHOOL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
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
