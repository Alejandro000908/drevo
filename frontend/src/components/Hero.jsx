import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';
import { HERO } from '../data/mock';
import { useParallax } from '../hooks/useScrollAnimation';

const Hero = () => {
  const parallaxRef = useParallax(0.3);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden dark-mode-transition">
      {/* Background with parallax and overlay */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 parallax-slow">
        <img
          src={HERO.image}
          alt="Modern classroom"
          className="w-full h-full object-cover transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#414141]/95 via-[#414141]/85 to-[#009479]/70 dark:from-[#0f172a]/95 dark:via-[#1e293b]/90 dark:to-[#009479]/80 transition-colors duration-500"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl scroll-animate animate-fade-up visible">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#009479]/20 dark:bg-[#009479]/30 backdrop-blur-sm border border-[#009479]/30 dark:border-[#009479]/50 rounded-full px-6 py-2 mb-8 glow-on-hover transition-all duration-300">
            <div className="w-2 h-2 bg-[#009479] rounded-full animate-pulse"></div>
            <span className="text-white font-medium text-sm">Запись на 2026-2027 учебный год открыта</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight scroll-animate animate-fade-up stagger-delay-1 visible">
            {HERO.headline}
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-200 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed scroll-animate animate-fade-up stagger-delay-2 visible">
            {HERO.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 scroll-animate animate-fade-up stagger-delay-3 visible">
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-[#4CAF50] hover:bg-[#388E3C] dark:bg-[#009479] dark:hover:bg-[#007A64] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group button-hover ripple-effect">
              {HERO.ctaPrimary}
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-2 border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 group button-hover">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              {HERO.ctaSecondary}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl scroll-animate animate-fade-up stagger-delay-4 visible">
            <div className="text-center transition-transform duration-300 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] dark:text-[#00BFA5] mb-1 transition-colors">
                87
              </div>
              <div className="text-sm text-gray-300">Средний балл ЕГЭ</div>
            </div>
            <div className="text-center border-l border-r border-white/20 dark:border-white/10 transition-transform duration-300 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] dark:text-[#00BFA5] mb-1 transition-colors">
                97%
              </div>
              <div className="text-sm text-gray-300">Поступили в государственные вузы</div>
            </div>
            <div className="text-center transition-transform duration-300 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] mb-1">
                12
              </div>
              <div className="text-sm text-gray-300">Лет успешной работы</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>);

};

export default Hero;