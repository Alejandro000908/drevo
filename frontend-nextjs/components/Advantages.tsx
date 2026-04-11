'use client'

import React from 'react'
import { Users, Award, Trophy, Lightbulb } from 'lucide-react'
import { ADVANTAGES } from '@/lib/data'

const iconMap = {
  users: Users,
  award: Award,
  trophy: Trophy,
  lightbulb: Lightbulb
}

const Advantages = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            НАШИ ПРЕИМУЩЕСТВА
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] dark:text-white mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Мы создаем условия для успешного обучения и развития каждого ученика
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((advantage) => {
            const Icon = iconMap[advantage.icon as keyof typeof iconMap]
            return (
              <div
                key={advantage.id}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#009479]/10 to-[#00BFA5]/10 rounded-bl-[100px] -z-10"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
                
                <h3 className="text-xl font-bold text-[#414141] dark:text-white mb-3">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Advantages
