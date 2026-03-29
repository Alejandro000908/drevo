import React from 'react';
import { GraduationCap, BookOpen, Book, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { COURSES } from '../data/mock';

const iconMap = {
  graduationCap: GraduationCap,
  bookOpen: BookOpen,
  book: Book,
  calendar: Calendar
};

const Courses = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F6A500]/10 text-[#F6A500] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ПРОГРАММЫ ОБУЧЕНИЯ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0E2A47] mb-4">
            Наши курсы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Комплексные программы подготовки для школьников разных возрастов
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {COURSES.map((course, index) => {
            const Icon = iconMap[course.icon];
            return (
              <div
                key={course.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Header with icon */}
                <div className="relative bg-gradient-to-br from-[#0E2A47] to-[#1a4d7a] p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-[#F6A500] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-semibold">
                        {course.subjects.length} предметов
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Предметы:
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-[#F6A500]/10 hover:text-[#F6A500] transition-colors duration-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContacts}
                    className="w-full bg-[#F6A500] hover:bg-[#d89200] text-white font-semibold py-3 rounded-lg group-hover:shadow-lg transition-all duration-300"
                  >
                    Узнать подробнее
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="relative bg-gradient-to-r from-[#0E2A47] to-[#1a4d7a] rounded-2xl p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6A500]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F6A500]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Первое занятие — бесплатно!
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Познакомьтесь с нашими преподавателями и оцените качество обучения
            </p>
            <Button
              onClick={scrollToContacts}
              className="bg-[#F6A500] hover:bg-[#d89200] text-white font-semibold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
