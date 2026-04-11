'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedStatsProps {
  stats: Array<{
    value: number
    suffix?: string
    label: string
  }>
}

const AnimatedStats = ({ stats }: AnimatedStatsProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
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
      { threshold: 0.3 }
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

    const duration = 2000 // 2 seconds
    const frameRate = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameRate)

    stats.forEach((stat, index) => {
      let frame = 0
      const increment = stat.value / totalFrames

      const counter = setInterval(() => {
        frame++
        const progress = Math.min(frame / totalFrames, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.round(easeOutQuart * stat.value)
        
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = currentValue
          return newCounts
        })

        if (frame >= totalFrames) {
          clearInterval(counter)
          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = stat.value
            return newCounts
          })
        }
      }, frameRate)
    })
  }, [isVisible, stats])

  return (
    <div ref={sectionRef} className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center transition-transform duration-300 hover:scale-110"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#009479] dark:text-[#00BFA5] mb-1 transition-colors">
            {counts[index]}{stat.suffix || ''}
          </div>
          <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default AnimatedStats
