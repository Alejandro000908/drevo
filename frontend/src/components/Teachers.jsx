import React from 'react';
import { TEACHERS } from '../data/mock';

const Teachers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F6A500]/10 text-[#F6A500] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            НАША КОМАНДА
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0E2A47] mb-4">
            Преподаватели
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Опытные педагоги с подтвержденными результатами и любовью к своему делу
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher, index) => (
            <div
              key={teacher.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Subject badge */}
                <div className="absolute top-4 right-4 bg-[#F6A500] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {teacher.subject}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0E2A47] mb-2 group-hover:text-[#F6A500] transition-colors duration-300">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {teacher.bio}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-[#F6A500] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Хотите познакомиться с нашими преподавателями лично?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacts');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#F6A500] hover:bg-[#d89200] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Записаться на пробное занятие
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
