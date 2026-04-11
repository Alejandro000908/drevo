'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramModal from '@/components/ProgramModal'

const PROGRAMS_DATA = [
  {
    id: 1,
    title: "Первая ступень",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/ohbxh19l_1.jpg",
    downloadLink: "https://disk.yandex.ru/i/ODXvfrJgHAhDgg",
    color: "from-[#00BFA5] to-[#009479]"
  },
  {
    id: 2,
    title: "Вторая ступень",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/u42g6231_2.jpg",
    downloadLink: "https://disk.yandex.ru/i/xEpkg3aRnkvR0w",
    color: "from-[#009479] to-[#00796B]"
  },
  {
    id: 3,
    title: "3-я ступень",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/02a9k34g_3.jpg",
    downloadLink: "https://disk.yandex.ru/i/FcCyotn0vdaMcA",
    color: "from-[#00796B] to-[#00695C]"
  }
]

const STUDY_PLAN = {
  title: "Учебный план",
  image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/ygpo1ron_4.jpg",
  downloadLink: "https://disk.yandex.ru/i/o3CQh2POWPxTbw"
}

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<typeof PROGRAMS_DATA[0] | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | string | null>(null)

  const handleDownload = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium transition-all duration-300 group mb-8 hover:gap-3"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Вернуться на главную
          </Link>

          {/* Header */}
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-4">
              Программы обучения
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Выберите уровень образования для просмотра программы
            </p>
          </div>

          {/* 3D Staircase Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Учебный план - Top of Staircase */}
            <div 
              className="mb-20 flex justify-center animate-fadeIn"
              style={{ animationDelay: '200ms' }}
            >
              <div
                className="relative group cursor-pointer w-full max-w-2xl"
                style={{
                  transform: 'perspective(1500px) rotateX(5deg)',
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => handleDownload(STUDY_PLAN.downloadLink)}
                onMouseEnter={() => setHoveredStep('plan')}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={`relative bg-gradient-to-br from-[#00BFA5] to-[#009479] rounded-3xl p-6 shadow-2xl transition-all duration-700 ${
                  hoveredStep === 'plan' ? 'scale-110 shadow-[#009479]/60' : ''
                }`}>
                  {/* 3D depth layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#009479] to-[#00796B] rounded-3xl transform translate-y-2 -z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00796B] to-[#00695C] rounded-3xl transform translate-y-4 -z-20"></div>
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <img
                      src={STUDY_PLAN.image}
                      alt={STUDY_PLAN.title}
                      className="w-32 h-32 object-cover rounded-xl shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{STUDY_PLAN.title}</h3>
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <Download className="w-5 h-5" />
                        <span>Скачать план</span>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>

            {/* 3D Staircase Steps */}
            <div className="relative">
              {PROGRAMS_DATA.map((program, index) => {
                const stepNumber = index + 1
                const isHovered = hoveredStep === stepNumber
                
                return (
                  <div
                    key={program.id}
                    className="mb-12 animate-slideInStair"
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
                        className={`relative bg-gradient-to-br ${program.color} rounded-3xl p-6 shadow-2xl transition-all duration-700 ${
                          isHovered ? 'scale-105 shadow-[#009479]/60' : ''
                        }`}
                        style={{
                          transform: isHovered ? 'translateY(-10px) translateZ(30px)' : 'translateY(0) translateZ(0)'
                        }}
                      >
                        {/* 3D depth layers */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80 rounded-3xl transform translate-y-2 translate-x-2 -z-10`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-60 rounded-3xl transform translate-y-4 translate-x-4 -z-20`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-40 rounded-3xl transform translate-y-6 translate-x-6 -z-30`}></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-32 h-32 object-cover rounded-xl shadow-lg"
                          />
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                            <p className="text-white/90 font-medium">Нажмите для просмотра программы</p>
                          </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* SEO Content */}
          <div className="mt-20 max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Все образовательные программы частной школы «Древо Познаний» соответствуют федеральным государственным образовательным стандартам (ФГОС) и дополнены авторскими методиками для максимальной эффективности обучения.
            </p>
          </div>
        </div>
      </main>
      <Footer />

      {/* Program Modal */}
      <ProgramModal 
        program={selectedProgram} 
        onClose={() => setSelectedProgram(null)} 
      />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInStair {
          from { opacity: 0; transform: perspective(1500px) rotateX(5deg) translateY(50px); }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-slideInStair {
          opacity: 0;
          animation: slideInStair 1s ease forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .animate-slideInStair,
          .animate-slideUp {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  )
}
