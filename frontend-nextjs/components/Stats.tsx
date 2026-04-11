'use client'

import React, { useEffect, useRef, useState } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stats = [
    { value: '87', label: 'Средний балл ЕГЭ' },
    { value: '97%', label: 'Поступили в вузы' },
    { value: '12', label: 'Лет работы' }
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
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