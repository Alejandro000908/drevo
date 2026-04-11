'use client'

import React, { useEffect, useRef, useState } from 'react'

const ResultsStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

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
    {
      value: '87',
      label: 'Средний балл ЕГЭ',
      description: 'выше среднего по России на 15 баллов'
    },
    {
      value: '97%',
      label: 'Поступили в вузы',
      description: 'МГУ, МФТИ, ВШЭ, МГТУ'
    },
    {
      value: '12',
      label: 'Лет работы',
      description: 'более 500 выпускников'
    }
  ]

  return (
    <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
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
          <p className="text-xs sm:text-sm mt-2 sm:mt-3 opacity-80">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ResultsStats
