import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { HERO } from '../data/mock';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO.image}
          alt="Modern classroom"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#414141]/95 via-[#414141]/85 to-[#009479]/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#009479]/20 backdrop-blur-sm border border-[#009479]/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-[#009479] rounded-full animate-pulse"></div>
            <span className="text-white font-medium text-sm">Запись на 2026-2027 учебный год открыта

            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {HERO.headline}
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            {HERO.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-[#4CAF50] hover:bg-[#388E3C] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">

              {HERO.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 group">

              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              {HERO.ctaSecondary}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] mb-1">
                87
              </div>
              <div className="text-sm text-gray-300">Средний балл ЕГЭ</div>
            </div>
            <div className="text-center border-l border-r border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] mb-1">
                95%
              </div>
              <div className="text-sm text-gray-300">Поступили в вузы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] mb-1">
                12
              </div>
              <div className="text-sm text-gray-300">Лет опыта</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>);

};

export default Hero;