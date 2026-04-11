'use client'

import React from 'react'
import { Check } from 'lucide-react'

const PricingInfographic = () => {
  const features = [
    "Обучение с 1 по 11 класс",
    "Классы до 12 человек",
    "Двухразовое питание",
    "Подготовка к ЕГЭ и ОГЭ",
    "Дополнительные занятия",
    "Психологическая поддержка"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#009479] to-[#00BFA5]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Инвестиция в будущее вашего ребенка
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Полный комплекс образовательных услуг
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Стоимость обучения
              </p>
              <div className="text-5xl sm:text-6xl font-bold text-[#414141] dark:text-white mb-2">
                от 35 000 ₽
              </div>
              <p className="text-gray-500 dark:text-gray-400">в месяц</p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-6">
                В стоимость включено:
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#009479] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">
                Для получения подробной информации о стоимости и возможных скидках свяжитесь с нами
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingInfographic
