'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
]

export default function DocumentsPage() {
  const [hoveredBranch, setHoveredBranch] = useState<number | null>(null)

  const handleDownload = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium transition-all duration-300 group mb-8 hover:gap-3"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Вернуться на главную
          </Link>

          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-4">
              Документы
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Нормативные документы и положения образовательной организации
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-24 bg-gradient-to-b from-[#8B4513] to-[#654321] rounded-b-xl shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  <div className="absolute top-4 left-3 w-10 h-2 bg-black/20 rounded-full"></div>
                  <div className="absolute top-10 right-3 w-8 h-2 bg-black/20 rounded-full"></div>
                  <div className="absolute top-16 left-4 w-9 h-2 bg-black/20 rounded-full"></div>
                </div>
                
                <svg className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-12 opacity-40" viewBox="0 0 160 50">
                  <path d="M 80 0 Q 60 25, 40 50" stroke="#654321" strokeWidth="3" fill="none" className="animate-drawRoot" />
                  <path d="M 80 0 Q 70 25, 55 50" stroke="#654321" strokeWidth="2" fill="none" className="animate-drawRoot" style={{ animationDelay: '0.1s' }} />
                  <path d="M 80 0 Q 90 25, 105 50" stroke="#654321" strokeWidth="2" fill="none" className="animate-drawRoot" style={{ animationDelay: '0.2s' }} />
                  <path d="M 80 0 Q 100 25, 120 50" stroke="#654321" strokeWidth="3" fill="none" className="animate-drawRoot" style={{ animationDelay: '0.3s' }} />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {DOCUMENTS.map((doc, index) => {
                const isHovered = hoveredBranch === doc.id
                
                return (
                  <div
                    key={doc.id}
                    className="relative group animate-fadeInCard"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#654321] to-transparent animate-growDown" style={{ animationDelay: `${index * 0.05}s` }}></div>
                    
                    <div
                      className={`relative bg-white dark:bg-gray-800 rounded-2xl p-5 border-2 transition-all duration-500 cursor-pointer ${
                        isHovered 
                          ? 'border-[#00BFA5] shadow-2xl shadow-[#009479]/40 scale-105 -translate-y-2' 
                          : 'border-gray-200 dark:border-gray-700 shadow-lg hover:border-[#009479] hover:shadow-xl'
                      }`}
                      onMouseEnter={() => setHoveredBranch(doc.id)}
                      onMouseLeave={() => setHoveredBranch(null)}
                      onClick={() => handleDownload(doc.link)}
                    >
                      <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 z-10">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 ${
                          isHovered 
                            ? 'bg-gradient-to-br from-[#00BFA5] to-[#009479] scale-110' 
                            : 'bg-gradient-to-br from-[#009479]/20 to-[#00BFA5]/20'
                        }`}>
                          <FileText className={`w-6 h-6 transition-colors ${isHovered ? 'text-white' : 'text-[#009479]'}`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-[#414141] dark:text-white mb-3 leading-tight">
                            {doc.title}
                          </h3>
                          
                          <button className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                            isHovered
                              ? 'bg-gradient-to-r from-[#009479] to-[#00BFA5] text-white shadow-lg scale-105'
                              : 'bg-gray-100 dark:bg-gray-700 text-[#009479] dark:text-[#00BFA5] hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}>
                            <Download className="w-4 h-4" />
                            <span>Скачать</span>
                          </button>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00BFA5]/5 to-transparent rounded-bl-full"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#009479]/5 to-transparent rounded-tr-full"></div>

                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFA5]/10 to-[#009479]/10 transition-opacity duration-500 -z-10 blur-xl ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes growDown {
          from { height: 0; }
          to { height: 2rem; }
        }

        @keyframes drawRoot {
          from { stroke-dasharray: 100; stroke-dashoffset: 100; }
          to { stroke-dasharray: 100; stroke-dashoffset: 0; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeInCard {
          opacity: 0;
          animation: fadeInCard 0.6s ease-out forwards;
        }

        .animate-growDown {
          animation: growDown 0.8s ease-out forwards;
        }

        .animate-drawRoot {
          animation: drawRoot 1.5s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .animate-fadeInCard,
          .animate-growDown,
          .animate-drawRoot {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  )
}
