'use client'

import React from 'react'
import { Sparkles, BookOpen, Users, GraduationCap } from 'lucide-react'

const ADVANTAGES_DATA = [
  {
    id: 1,
    title: "Свобода мышления и самовыражения",
    description: "Создаём атмосферу, где каждый ученик может свободно выражать свои мысли и идеи",
    icon: Sparkles
  },
  {
    id: 2,
    title: "Персонализированный подход к каждому студенту",
    description: "Индивидуальные образовательные траектории для максимального раскрытия потенциала",
    icon: Users
  },
  {
    id: 3,
    title: "Малые группы до 12 учеников",
    description: "Максимальное внимание преподавателя каждому ребёнку",
    icon: Users
  },
  {
    id: 4,
    title: "Современная академическая среда без буллинга",
    description: "Безопасное пространство для обучения и личностного роста",
    icon: BookOpen
  },
  {
    id: 5,
    title: "Более 20 элективных курсов на выбор",
    description: "Широкий выбор дополнительных дисциплин для развития талантов",
    icon: Sparkles
  }
]

const Advantages = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1d29] via-[#252837] to-[#1a1d29] relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300BFA5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#009479]/20 text-[#00BFA5] px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-[#009479]/30">
            НАШИ ПРЕИМУЩЕСТВА
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Создаём условия для успешного обучения и всестороннего развития
          </p>
        </div>

        {/* Grid Layout - similar to reference image */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First 3 cards */}
          {ADVANTAGES_DATA.slice(0, 3).map((advantage) => {
            const Icon = advantage.icon
            return (
              <div
                key={advantage.id}
                className="group relative bg-[#2a2d3a]/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/5 hover:border-[#00BFA5]/30"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {advantage.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  {advantage.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00BFA5]/5 to-transparent rounded-tr-2xl -z-10"></div>
              </div>
            )
          })}

          {/* Large featured card - spans 2 columns on desktop */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-[#006b5a]/60 to-[#004d42]/60 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-[#00BFA5]/20 hover:border-[#00BFA5]/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <BookOpen className="w-12 h-12 text-[#00BFA5]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {ADVANTAGES_DATA[3].title}
                </h3>
                <p className="text-gray-200 leading-relaxed text-base">
                  {ADVANTAGES_DATA[3].description}
                </p>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA5]/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          </div>

          {/* Last card */}
          <div className="relative bg-[#2a2d3a]/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/5 hover:border-[#00BFA5]/30">
            <div className="mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 leading-tight">
              {ADVANTAGES_DATA[4].title}
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              {ADVANTAGES_DATA[4].description}
            </p>

            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00BFA5]/5 to-transparent rounded-tr-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#009479]/10 via-[#00BFA5]/15 to-[#009479]/10 rounded-full blur-[150px]"></div>
      </div>
    </section>
  )
}

export default Advantages
