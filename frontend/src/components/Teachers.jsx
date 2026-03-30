import React from 'react';
import { User } from 'lucide-react';
import { TEACHERS } from '../data/mock';

const Teachers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            НАША КОМАНДА
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
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
              {/* Image or Placeholder */}
              <div className="relative h-80 overflow-hidden bg-gray-100 flex items-center justify-center">
                {teacher.image ? (
                  <>
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </>
                ) : (
                  <div className="w-32 h-32 bg-[#009479]/10 rounded-full flex items-center justify-center">
                    <User className="w-16 h-16 text-[#009479]" />
                  </div>
                )}
                
                {/* Subject badge */}
                <div className="absolute top-4 right-4 bg-[#009479] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {teacher.subject}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#414141] mb-2 group-hover:text-[#009479] transition-colors duration-300">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {teacher.bio}
                </p>
                
                {/* Motto - if exists */}
                {teacher.motto && teacher.motto.trim() !== '' && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-[#009479] mb-1">Девиз:</p>
                    <p className="text-sm italic text-gray-500">"{teacher.motto}"</p>
                  </div>
                )}
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-[#009479] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
            className="bg-[#009479] hover:bg-[#007A64] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Записаться на пробное занятие
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
