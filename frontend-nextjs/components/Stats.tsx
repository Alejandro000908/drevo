'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Stats = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const stats = [
    { value: '87', label: 'Средний балл ЕГЭ' },
    { value: '97%', label: 'Поступили в государственные вузы' },
    { value: '12', label: 'Лет успешной работы' }
  ]

  const MotionWrapper = isMounted ? motion.div : 'div'

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <MotionWrapper
              key={index}
              {...(isMounted ? {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: index * 0.1 },
                viewport: { once: true }
              } : {})}
              className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats