import React from 'react';
import { Link } from 'react-router-dom';
import Vacancies from '../components/Vacancies';
import { ArrowLeft } from 'lucide-react';

const VacanciesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#009479] hover:text-[#007A64] font-medium transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Вернуться на главную
        </Link>
      </div>

      {/* Vacancies Component */}
      <Vacancies />

      {/* Additional Teacher-Oriented Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#414141] mb-8 text-center">
              Почему стоит работать с нами?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#009479]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-[#414141] mb-3">Современные методики</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы используем передовые образовательные технологии и предоставляем доступ к лучшим учебным материалам и ресурсам.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#009479]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-[#414141] mb-3">Гибкий график</h3>
                <p className="text-gray-600 leading-relaxed">
                  Возможность совмещения работы с личными делами. Удобное расписание и комфортные условия труда.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#009479]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-[#414141] mb-3">Небольшие классы до 12 человек</h3>
                <p className="text-gray-600 leading-relaxed">
                  До 12 учеников в классе - это позволяет уделить внимание каждому ребенку и достичь максимальных результатов.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#009479]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-[#414141] mb-3">Признание достижений</h3>
                <p className="text-gray-600 leading-relaxed">
                  Система бонусов и поощрений за успехи учеников, профессиональный рост и вклад в развитие школы.
                </p>
              </div>
            </div>

            {/* Testimonial from a Teacher */}
            <div className="bg-gradient-to-r from-[#009479] to-[#007A64] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👩‍🏫</span>
                </div>
                <div>
                  <p className="text-lg leading-relaxed italic mb-4">
                    "Работать в 'Древе Познаний' - это настоящее удовольствие! Здесь ценят профессионализм, поддерживают инициативу и создают все условия для реализации творческих идей. Дети мотивированные, родители благодарные, а коллектив - дружный и сплоченный."
                  </p>
                  <p className="font-semibold">Елена Анатольевна</p>
                  <p className="text-white/80 text-sm">Учитель начальных классов, стаж в школе 5 лет</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information for Teachers */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#414141] mb-4">
              Есть вопросы о вакансиях?
            </h2>
            <p className="text-gray-600 mb-8">
              Свяжитесь с нашим HR-отделом для получения дополнительной информации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79161222112"
                className="inline-flex items-center justify-center gap-2 bg-[#009479] hover:bg-[#007A64] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (916) 122-21-12
              </a>
              <a
                href="mailto:Drevop@ya.ru"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#009479] border-2 border-[#009479] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Написать на Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacanciesPage;
