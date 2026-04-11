'use client'

import { useEffect, useRef, useState } from 'react'
import { FULL_STATS } from '@/lib/data'

const FullStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(FULL_STATS.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

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

    FULL_STATS.forEach((stat, index) => {
      let currentFrame = 0

      const interval = setInterval(() => {
        currentFrame++
        const progress = currentFrame / totalFrames
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        
        let currentValue
        if (stat.decimals) {
          currentValue = parseFloat((easeOutQuart * stat.value).toFixed(stat.decimals))
        } else {
          currentValue = Math.round(easeOutQuart * stat.value)
        }
        
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
    <section ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#414141] dark:text-white">
          Результаты, которыми мы гордимся
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Наши ученики достигают выдающихся результатов благодаря качественному образованию и индивидуальному подходу
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {FULL_STATS.map((stat, index) => (
            <div
              key={stat.id}
              className={`bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm lg:text-base opacity-90 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FullStatsSection
