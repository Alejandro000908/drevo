'use client'

import React, { useEffect, useRef, useState } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  const stats = [
    { value: 87, label: 'Средний балл ЕГЭ' },
    { value: 97, suffix: '%', label: 'Поступили в вузы' },
    { value: 12, label: 'Лет работы' }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
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

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const fps = 60
    const frameTime = 1000 / fps
    const totalFrames = Math.round(duration / frameTime)

    const intervals: NodeJS.Timeout[] = []

    stats.forEach((stat, index) => {
      let currentFrame = 0

      const interval = setInterval(() => {
        currentFrame++
        const progress = currentFrame / totalFrames
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.round(easeOutQuart * stat.value)
        
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = currentValue
          return newCounts
        })

        if (currentFrame >= totalFrames) {
          clearInterval(interval)
          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = stat.value
            return newCounts
          })
        }
      }, frameTime)

      intervals.push(interval)
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [isVisible])

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
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                {counts[index]}{stat.suffix || ''}
              </div>
              <div className="text-base sm:text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats