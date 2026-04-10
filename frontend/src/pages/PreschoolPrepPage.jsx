import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Users, Award, Languages, PenTool, Calculator, Book } from 'lucide-react';
import { Button } from '../components/ui/button';

const PreschoolPrepPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const courses = [
    { id: 1, name: 'Русский язык', icon: BookOpen, color: '#4CAF50' },
    { id: 2, name: 'Чтение', icon: Book, color: '#009479' },
    { id: 3, name: 'Математика', icon: Calculator, color: '#00BFA5' },
    { id: 4, name: 'Каллиграфия', icon: PenTool, color: '#388E3C' },
    { id: 5, name: 'Английский язык', icon: Languages, color: '#4CAF50' }
  ];

  const benefits = [
    { id: 1, title: 'Небольшие группы', description: 'До 8 детей в группе', icon: Users },
    { id: 2, title: 'Опытные преподаватели', description: 'Специалисты с 10+ лет опыта', icon: Award },
    { id: 3, title: 'Индивидуальный подход', description: 'К каждому ребенку', icon: BookOpen },
    { id: 4, title: 'Современные методики', description: 'Проверенные программы', icon: Clock }
  ];

  const galleryPhotos = [
    "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/f4nx0mou_IMG_5054.JPG",
    "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/9z3p8nbe_5287380238214492974.jpg",
    "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/6g6hoh1a_5388691421444905284.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 to-[#009479]/10 dark:from-[#4CAF50]/5 dark:to-[#009479]/5"></div>
        
        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#009479] bg-clip-text text-transparent">
              Подготовка к школе
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Помогаем детям 4–7 лет начать школьную жизнь уверенно и радостно
          </p>
          
          <Button
            onClick={() => scrollToSection('cta')}
            className="bg-[#4CAF50] hover:bg-[#388E3C] dark:bg-[#009479] dark:hover:bg-[#007A64] text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Записаться
          </Button>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
            Почему важна подготовка к школе?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Начало школьной жизни — важный этап для каждого ребенка. Наша программа подготовки помогает детям развить необходимые навыки, уверенность в себе и интерес к обучению.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Мы фокусируемся на комплексном развитии: интеллектуальном, социальном и эмоциональном, чтобы переход в школу был плавным и радостным.
          </p>
        </div>
      </section>

      {/* Courses Infographic */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-white">
            Наши курсы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${course.color}20` }}
                  >
                    <Icon size={40} style={{ color: course.color }} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                    {course.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Расписание
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#4CAF50]/10 to-[#009479]/10 dark:from-[#4CAF50]/20 dark:to-[#009479]/20 rounded-2xl p-10 text-center border-2 border-[#4CAF50]/30">
              <Clock size={60} className="mx-auto mb-4 text-[#4CAF50]" />
              <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">2 раза в неделю</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Оптимальная частота занятий</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#009479]/10 to-[#00BFA5]/10 dark:from-[#009479]/20 dark:to-[#00BFA5]/20 rounded-2xl p-10 text-center border-2 border-[#009479]/30">
              <Clock size={60} className="mx-auto mb-4 text-[#009479]" />
              <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">2 часа</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Продолжительность занятия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-white">
            Наши преимущества
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="text-center group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#009479] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-white">
            Наши занятия
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group aspect-square"
              >
                <img
                  src={photo}
                  alt={`Занятие ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-br from-[#4CAF50]/10 to-[#009479]/10 dark:from-[#4CAF50]/5 dark:to-[#009479]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Запишитесь на курс прямо сейчас
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Дайте вашему ребенку лучший старт в школьной жизни. Наши специалисты готовы помочь!
          </p>
          
          <Button
            onClick={() => scrollToSection('contacts')}
            className="bg-[#4CAF50] hover:bg-[#388E3C] dark:bg-[#009479] dark:hover:bg-[#007A64] text-white font-semibold px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Записаться на курс
          </Button>
        </div>
      </section>

    </div>
  );
};

export default PreschoolPrepPage;
