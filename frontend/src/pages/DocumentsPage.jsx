import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';

const DOCUMENTS = [
  { id: 1, title: "Календарный учебный график", link: "https://disk.yandex.ru/i/CDdMZbxPDo8cLQ" },
  { id: 2, title: "Правила внутреннего распорядка для обучающихся образовательной организации", link: "https://disk.yandex.ru/i/t60L48GoIWG5Zg" },
  { id: 3, title: "Распоряжение о библиотеках", link: "https://disk.yandex.ru/i/XjDRCGuHuEHiMA" },
  { id: 4, title: "Положение о защите персональных данных обучающихся, их законных представителей и работников организации", link: "https://disk.yandex.ru/i/facSwX99PlC8Bw" },
  { id: 5, title: "Правила трудового распорядка для работников образовательной организации", link: "https://disk.yandex.ru/i/ommCBApaV_ZWLQ" },
  { id: 6, title: "Положение о формах обучения", link: "https://disk.yandex.ru/i/8uUwr4HiUj-Gyg" },
  { id: 7, title: "Устав", link: "https://disk.yandex.ru/i/9ghs09Q1DYhSaw" },
  { id: 8, title: "Реестровая выписка", link: "https://disk.yandex.ru/i/4NwQug1SEs7tog" },
  { id: 9, title: "Выписка из Единого государственного реестра индивидуальных предпринимателей", link: "https://disk.yandex.ru/i/lGl8tf7LggLvzw" },
  { id: 10, title: "Лицензия", link: "https://disk.yandex.ru/i/tpilNFoRsoG5Vg" },
  { id: 11, title: "Распоряжение об охране здоровья обучающихся", link: "https://disk.yandex.ru/i/CyGR-emcuJ3t3Q" },
  { id: 12, title: "Распоряжение о порядке перевода, отчисления и восстановления обучающегося", link: "https://disk.yandex.ru/i/bq0oMu3Zso_5Xw" },
  { id: 13, title: "Распоряжение о правах и обязанностях участников образовательного процесса", link: "https://disk.yandex.ru/i/Z6Vd1lVJXw45jg" },
  { id: 14, title: "Распоряжение о режиме и форме проведения занятий", link: "https://disk.yandex.ru/i/ROvkEOKPc9oHMg" },
  { id: 15, title: "Распоряжение о порядке и правилах зачисления на курсы", link: "https://disk.yandex.ru/i/r6dfjDDnGgTDrw" },
  { id: 16, title: "Распоряжение о порядке бесплатного пользования педагогическими работниками образовательными и методическими услугами учреждения", link: "https://disk.yandex.ru/i/oL9LLjcs6LsE7A" },
  { id: 17, title: "Положение о нормах профессиональной этики педагогических работников", link: "https://disk.yandex.ru/i/Iw-d_NSBG49Zfw" },
  { id: 18, title: "Распоряжение о порядке обучения по индивидуальному плану", link: "https://disk.yandex.ru/i/9Q9_woZMmNvn2w" },
  { id: 19, title: "Распоряжение о порядке создания, организации работы, принятия решений комиссией по урегулированию споров между участниками образовательных отношений и их исполнения", link: "https://disk.yandex.ru/i/mVTKdTJOxFUnyQ" },
  { id: 20, title: "Распоряжение о порядке выдачи документов подтверждающих обучение по программам дополнительного образования", link: "https://disk.yandex.ru/i/GTwjcZkIyPn-lQ" },
  { id: 21, title: "Распоряжение о порядке контроля успеваемости", link: "https://disk.yandex.ru/i/rPNnaXEf0XvvWA" },
  { id: 22, title: "Распоряжение о языке при реализации образовательных программ", link: "https://disk.yandex.ru/i/594PI_nQSaHK1Q" },
  { id: 23, title: "Положение о порядке оказания платных образовательных услуг", link: "https://disk.yandex.ru/i/WTflsizNB0O-Bw" },
  { id: 24, title: "Стоимость платных образовательных услуг в 2025/2026 учебном году", link: "https://disk.yandex.ru/d/REkzrF9qNdFusg" }
];

const DocumentsPage = () => {
  const [hoveredBranch, setHoveredBranch] = useState(null);

  const handleDownload = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  // Distribute documents across branches (left and right)
  const leftBranches = DOCUMENTS.slice(0, 12);
  const rightBranches = DOCUMENTS.slice(12, 24);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-20">
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
            Документы
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Нормативные документы и положения образовательной организации
          </p>
        </div>

        {/* Tree Visualization */}
        <div className="relative max-w-7xl mx-auto">
          {/* Tree Container */}
          <div className="relative flex justify-center items-end" style={{ minHeight: '1200px' }}>
            {/* Roots (bottom) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
              <svg className="w-full h-32 opacity-30" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid meet">
                {/* Root paths */}
                <path d="M 200 0 Q 150 50, 100 100" stroke="currentColor" strokeWidth="3" fill="none" className="text-[#009479] animate-draw-root" style={{ animationDelay: '0s' }} />
                <path d="M 200 0 Q 180 50, 140 100" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-[#009479] animate-draw-root" style={{ animationDelay: '0.1s' }} />
                <path d="M 200 0 Q 220 50, 260 100" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-[#009479] animate-draw-root" style={{ animationDelay: '0.2s' }} />
                <path d="M 200 0 Q 250 50, 300 100" stroke="currentColor" strokeWidth="3" fill="none" className="text-[#009479] animate-draw-root" style={{ animationDelay: '0.3s' }} />
              </svg>
            </div>

            {/* Main Trunk */}
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-96 bg-gradient-to-b from-[#8B4513] to-[#654321] rounded-t-full shadow-2xl relative overflow-hidden">
                {/* Trunk texture */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                <div className="absolute top-10 left-2 w-8 h-2 bg-black/20 rounded-full"></div>
                <div className="absolute top-32 right-2 w-6 h-2 bg-black/20 rounded-full"></div>
                <div className="absolute top-56 left-3 w-7 h-2 bg-black/20 rounded-full"></div>
              </div>
            </div>

            {/* Left Branches (12 documents) */}
            <div className="absolute left-0 bottom-32 w-1/2 h-[600px]">
              {leftBranches.map((doc, index) => {
                const topOffset = (index * 50) + 50;
                const horizontalOffset = 50 + (index * 15);
                
                return (
                  <div
                    key={doc.id}
                    className="absolute"
                    style={{
                      top: `${topOffset}px`,
                      right: `-${horizontalOffset}px`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Branch SVG */}
                    <svg className="absolute right-0 top-0" width={horizontalOffset + 100} height="60" style={{ transform: 'translateY(-30px)' }}>
                      <path
                        d={`M ${horizontalOffset + 100} 30 Q ${horizontalOffset + 50} 30, 0 30`}
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="text-[#654321] animate-draw-branch"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    </svg>

                    {/* Leaf (Document Card) */}
                    <div
                      className={`relative group cursor-pointer animate-fade-in-leaf`}
                      style={{ 
                        animationDelay: `${(index * 0.1) + 0.5}s`,
                        marginRight: `${horizontalOffset + 100}px`
                      }}
                      onMouseEnter={() => setHoveredBranch(doc.id)}
                      onMouseLeave={() => setHoveredBranch(null)}
                      onClick={() => handleDownload(doc.link)}
                    >
                      <div className={`bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 dark:from-[#00BFA5]/30 dark:to-[#009479]/30 backdrop-blur-sm border-2 border-[#009479]/40 rounded-2xl p-4 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#009479]/40 hover:scale-105 hover:-translate-y-2 ${
                        hoveredBranch === doc.id ? 'border-[#00BFA5] bg-gradient-to-br from-[#00BFA5]/30 to-[#009479]/30' : ''
                      }`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-[#009479] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#00BFA5] transition-colors">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-[#414141] dark:text-white line-clamp-2 mb-2">
                              {doc.title}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-[#009479] dark:text-[#00BFA5] font-medium">
                              <Download className="w-3 h-3" />
                              <span>Скачать</span>
                            </div>
                          </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Branches (12 documents) */}
            <div className="absolute right-0 bottom-32 w-1/2 h-[600px]">
              {rightBranches.map((doc, index) => {
                const topOffset = (index * 50) + 50;
                const horizontalOffset = 50 + (index * 15);
                
                return (
                  <div
                    key={doc.id}
                    className="absolute"
                    style={{
                      top: `${topOffset}px`,
                      left: `-${horizontalOffset}px`,
                      animationDelay: `${(index + 12) * 0.1}s`
                    }}
                  >
                    {/* Branch SVG */}
                    <svg className="absolute left-0 top-0" width={horizontalOffset + 100} height="60" style={{ transform: 'translateY(-30px)' }}>
                      <path
                        d={`M 0 30 Q ${horizontalOffset + 50} 30, ${horizontalOffset + 100} 30`}
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="text-[#654321] animate-draw-branch"
                        style={{ animationDelay: `${(index + 12) * 0.1}s` }}
                      />
                    </svg>

                    {/* Leaf (Document Card) */}
                    <div
                      className={`relative group cursor-pointer animate-fade-in-leaf`}
                      style={{ 
                        animationDelay: `${((index + 12) * 0.1) + 0.5}s`,
                        marginLeft: `${horizontalOffset + 100}px`
                      }}
                      onMouseEnter={() => setHoveredBranch(doc.id)}
                      onMouseLeave={() => setHoveredBranch(null)}
                      onClick={() => handleDownload(doc.link)}
                    >
                      <div className={`bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 dark:from-[#00BFA5]/30 dark:to-[#009479]/30 backdrop-blur-sm border-2 border-[#009479]/40 rounded-2xl p-4 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#009479]/40 hover:scale-105 hover:-translate-y-2 ${
                        hoveredBranch === doc.id ? 'border-[#00BFA5] bg-gradient-to-br from-[#00BFA5]/30 to-[#009479]/30' : ''
                      }`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-[#009479] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#00BFA5] transition-colors">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-[#414141] dark:text-white line-clamp-2 mb-2">
                              {doc.title}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-[#009479] dark:text-[#00BFA5] font-medium">
                              <Download className="w-3 h-3" />
                              <span>Скачать</span>
                            </div>
                          </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes draw-root {
          from { stroke-dasharray: 200; stroke-dashoffset: 200; }
          to { stroke-dasharray: 200; stroke-dashoffset: 0; }
        }

        @keyframes draw-branch {
          from { stroke-dasharray: 300; stroke-dashoffset: 300; }
          to { stroke-dasharray: 300; stroke-dashoffset: 0; }
        }

        @keyframes fade-in-leaf {
          from { opacity: 0; transform: scale(0.8) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-draw-root {
          animation: draw-root 1.5s ease-out forwards;
        }

        .animate-draw-branch {
          animation: draw-branch 1s ease-out forwards;
        }

        .animate-fade-in-leaf {
          opacity: 0;
          animation: fade-in-leaf 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DocumentsPage;
