'use client'

import React from 'react'

const Stats = () => {
  const stats = [
    { value: '87', label: 'Средний балл ЕГЭ' },
    { value: '97%', label: 'Поступили в вузы' },
    { value: '12', label: 'Лет работы' }
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                opacity: 1,
                transform: 'translateY(0)'
              }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-base sm:text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats