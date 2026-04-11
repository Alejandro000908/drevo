'use client'

import React from 'react'
import { Utensils, BookOpen, Laptop, Palette } from 'lucide-react'

const FACILITIES = [
  {
    id: 1,
    title: "Современные классы",
    description: "Оборудованные учебные кабинеты с интерактивными досками и компьютерной техникой",
    icon: Laptop
  },
  {
    id: 2,
    title: "Библиотека",
    description: "Богатая коллекция учебной и художественной литературы для всех возрастов",
    icon: BookOpen
  },
  {
    id: 3,
    title: "Столовая",
    description: "Двухразовое питание с учетом индивидуальных особенностей",
    icon: Utensils
  },
  {
    id: 4,
    title: "Творческие мастерские",
    description: "Пространства для занятий искусством, музыкой и ремеслами",
    icon: Palette
  }
]

const Facilities = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            НАША ИНФРАСТРУКТУРА
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] dark:text-white mb-4">
            Комфортные условия для обучения
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Современное оснащение и уютная атмосфера для эффективного образовательного процесса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACILITIES.map((facility) => {
            const Icon = facility.icon
            return (
              <div
                key={facility.id}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#414141] dark:text-white mb-3">
                  {facility.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Facilities
