import React, { useState, useEffect, useRef } from 'react';
import { Check, Users, Clock, Coffee, BookOpen, Sparkles, Trophy, Globe, Briefcase } from 'lucide-react';

const PricingInfographic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    { icon: Users, text: 'Малые группы до 12 учеников' },
    { icon: BookOpen, text: 'Персональный куратор с регулярной обратной связью' },
    { icon: Clock, text: 'Полный день: 9:00–16:30' },
    { icon: Coffee, text: 'Двухразовое питание (завтрак и обед)' },
    { icon: Check, text: 'Все домашние задания в школе под контролем' },
    { icon: Trophy, text: 'Подготовка к ОГЭ и ЕГЭ' },
    { icon: Globe, text: 'Английский язык с 1 класса + предметы на английском' },
    { icon: Briefcase, text: 'Проектное обучение и развитие личности' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-[#1a2332] to-gray-900"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/dyecep4g_Foto%20escuela.webp"
          alt="School building"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-[#1a2332]/80 to-[#009479]/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/70"></div>
      </div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#009479]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00BFA5]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Образование, которое формирует<br />
            <span className="bg-gradient-to-r from-[#00BFA5] to-[#009479] bg-clip-text text-transparent">
              будущее вашего ребёнка
            </span>
          </h2>
          
          {/* Price Tag */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-10 py-6 mt-8">
            <div className="text-6xl md:text-7xl font-black text-white">
              65 000 ₽
            </div>
            <div className="text-left">
              <div className="text-sm text-white/60 uppercase tracking-wider">в месяц</div>
              <div className="text-white/80 text-lg">Инвестиция в будущее</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            <Sparkles className="inline-block w-8 h-8 text-[#00BFA5] mr-3" />
            Преимущества
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00BFA5]/50 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 rounded-xl border border-[#00BFA5]/30 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-[#00BFA5]" />
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed pt-2">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="px-12 py-6 bg-gradient-to-r from-[#00BFA5] to-[#009479] text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-[#00BFA5]/50 hover:scale-105 transition-all duration-300">
            Записаться на пробный день
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default PricingInfographic;
