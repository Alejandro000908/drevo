import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, X, ChevronRight } from 'lucide-react';

const PROGRAMS_DATA = [
  {
    id: 1,
    level: "1 класс",
    title: "Программа для 1 класса",
    description: "Основная образовательная программа начального общего образования",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/ohbxh19l_1.jpg",
    downloadLink: "https://disk.yandex.ru/i/ODXvfrJgHAhDgg",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    level: "2-4 класс",
    title: "Программа для 2-4 классов",
    description: "Программа развития и углубленного изучения предметов",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/u42g6231_2.jpg",
    downloadLink: "https://disk.yandex.ru/i/xEpkg3aRnkvR0w",
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 3,
    level: "5-9 класс",
    title: "Программа для 5-9 классов",
    description: "Основное общее образование с подготовкой к ОГЭ",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/02a9k34g_3.jpg",
    downloadLink: "https://disk.yandex.ru/i/FcCyotn0vdaMcA",
    color: "from-teal-400 to-[#009479]"
  }
];

const STUDY_PLAN = {
  title: "Учебный план",
  description: "Полный учебный план школы на 2024-2025 учебный год",
  image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/ygpo1ron_4.jpg",
  downloadLink: "https://disk.yandex.ru/i/o3CQh2POWPxTbw"
};

const ProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleDownload = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium transition-all duration-300 group mb-8 hover:gap-3"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Вернуться на главную
        </Link>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-4">
            Программы обучения
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Выберите уровень образования для просмотра программы
          </p>
        </div>

        {/* 3D Staircase Container */}
        <div className="relative max-w-6xl mx-auto perspective-container">
          {/* Учебный план - Top of Staircase */}
          <div 
            className="mb-20 flex justify-center animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div
              className="relative group cursor-pointer"
              style={{
                transform: 'perspective(1500px) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}
              onClick={() => handleDownload(STUDY_PLAN.downloadLink)}
              onMouseEnter={() => setHoveredStep('plan')}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className={`relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl transition-all duration-700 ${
                hoveredStep === 'plan' ? 'scale-110 shadow-yellow-500/50' : ''
              }`}>
                {/* 3D depth layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl transform translate-y-2 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-2xl transform translate-y-4 -z-20"></div>
                
                <div className="relative z-10 flex items-center gap-6">
                  <img
                    src={STUDY_PLAN.image}
                    alt={STUDY_PLAN.title}
                    className="w-32 h-32 object-cover rounded-xl shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{STUDY_PLAN.title}</h3>
                    <p className="text-white/90 mb-3">{STUDY_PLAN.description}</p>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Download className="w-5 h-5" />
                      <span>Скачать план</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-300/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>

          {/* 3D Staircase Steps */}
          <div className="relative staircase-container">
            {PROGRAMS_DATA.map((program, index) => {
              const stepNumber = index + 1;
              const isHovered = hoveredStep === stepNumber;
              
              return (
                <div
                  key={program.id}
                  className="step-wrapper mb-12 animate-slide-in-stair"
                  style={{
                    animationDelay: `${(index + 1) * 200}ms`,
                    marginLeft: `${index * 80}px`,
                    transform: `perspective(1500px) rotateX(${5 - index * 2}deg) translateZ(${index * 20}px)`
                  }}
                >
                  <div
                    className="relative group cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                    onMouseEnter={() => setHoveredStep(stepNumber)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => setSelectedProgram(program)}
                  >
                    {/* Main step card */}
                    <div 
                      className={`relative bg-gradient-to-br ${program.color} rounded-2xl p-6 shadow-2xl transition-all duration-700 ${
                        isHovered ? 'scale-105 shadow-[#009479]/50' : ''
                      }`}
                      style={{
                        transform: isHovered ? 'translateY(-10px) translateZ(30px)' : 'translateY(0) translateZ(0)'
                      }}
                    >
                      {/* 3D depth layers */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80 rounded-2xl transform translate-y-2 translate-x-2 -z-10`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-60 rounded-2xl transform translate-y-4 translate-x-4 -z-20`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-40 rounded-2xl transform translate-y-6 translate-x-6 -z-30`}></div>

                      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                        {/* Step number badge */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl border-4 border-white/50 dark:border-gray-700/50">
                          <span className="text-3xl font-black bg-gradient-to-br from-[#009479] to-[#00BFA5] bg-clip-text text-transparent">
                            {stepNumber}
                          </span>
                        </div>

                        {/* Image */}
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full md:w-48 h-48 object-cover rounded-xl shadow-xl transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Content */}
                        <div className="flex-1 text-white">
                          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-3">
                            {program.level}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-3">{program.title}</h3>
                          <p className="text-white/90 mb-4">{program.description}</p>
                          <div className="flex items-center gap-2 font-semibold">
                            <span>Открыть программу</span>
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                          </div>
                        </div>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal for Program Details */}
        {selectedProgram && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProgram(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block px-4 py-2 bg-[#009479] rounded-full text-white text-sm font-semibold mb-4">
                    {selectedProgram.level}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {selectedProgram.title}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {selectedProgram.description}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-4">
                      О программе
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Образовательная программа разработана в соответствии с ФГОС и адаптирована 
                      для максимально эффективного обучения в небольших классах. Программа включает 
                      все необходимые предметы и дополнительные модули для углубленного изучения.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#414141] dark:text-white mb-3">
                      Основные направления:
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-[#009479] mt-0.5" />
                        <span>Базовые общеобразовательные предметы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-[#009479] mt-0.5" />
                        <span>Углубленное изучение математики и русского языка</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-[#009479] mt-0.5" />
                        <span>Программирование и цифровые технологии</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-[#009479] mt-0.5" />
                        <span>Иностранные языки (английский)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(selectedProgram.downloadLink)}
                    className="w-full bg-gradient-to-r from-[#009479] to-[#00BFA5] hover:from-[#007A64] hover:to-[#009479] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                  >
                    <Download className="w-6 h-6" />
                    <span>Скачать полную программу</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-in-stair {
          from {
            opacity: 0;
            transform: perspective(1500px) rotateX(20deg) translateY(50px) translateZ(-50px);
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .animate-slide-in-stair {
          opacity: 0;
          animation: slide-in-stair 1s ease-out forwards;
        }

        .perspective-container {
          perspective: 2000px;
          transform-style: preserve-3d;
        }

        .staircase-container {
          position: relative;
          padding: 40px 0;
        }

        @media (max-width: 768px) {
          .step-wrapper {
            margin-left: 0 !important;
            transform: perspective(1000px) rotateX(0deg) translateZ(0px) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgramsPage;
