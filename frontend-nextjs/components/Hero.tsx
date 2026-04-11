'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    if (typeof document === 'undefined') return
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const MotionWrapper = isMounted ? motion.div : 'div'
  const motionProps = isMounted ? {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  } : {}

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/pyjpj7ng_n3LEFeUqka_FyO2v4FHv_ehXQKcINz2u7xDZgeRYIDL_4WLprgjm86FlIyiF2ABWYPuo3-b__VV-C2nH3Ru0UwW7.jpg"
          alt="Modern classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#414141]/95 via-[#414141]/85 to-[#009479]/70 dark:from-[#0f172a]/95 dark:via-[#1e293b]/90 dark:to-[#009479]/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <MotionWrapper 
            {...motionProps}
            className="inline-flex items-center gap-2 bg-[#009479]/20 dark:bg-[#009479]/30 backdrop-blur-sm border border-[#009479]/30 dark:border-[#009479]/50 rounded-full px-6 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-[#009479] rounded-full animate-pulse"></div>
            <span className="text-white font-medium text-sm">Запись на 2026-2027 учебный год открыта</span>
          </MotionWrapper>

          {/* Main Headline */}
          <MotionWrapper 
            {...(isMounted ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.1 }
            } : {})}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Частная школа «Древо Познаний» — индивидуальный подход и реальные результаты
            </h1>
          </MotionWrapper>

          {/* Subtext */}
          <MotionWrapper 
            {...(isMounted ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 }
            } : {})}
            className="text-lg sm:text-xl text-gray-200 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Обучение с 1 по 11 класс. Подготовка к ЕГЭ и ОГЭ с гарантированным результатом. Небольшие классы до 12 человек. Опытные преподаватели.
          </MotionWrapper>

          {/* CTA Buttons */}
          <MotionWrapper
            {...(isMounted ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.3 }
            } : {})}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-[#4CAF50] hover:bg-[#388E3C] dark:bg-[#009479] dark:hover:bg-[#007A64] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Записаться на пробный день
            </Button>
            <Button
              onClick={() => scrollToSection('programs')}
              variant="outline"
              className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-2 border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Узнать больше
            </Button>
          </MotionWrapper>

          {/* Trust Indicators */}
          <MotionWrapper
            {...(isMounted ? {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.4 }
            } : {})}
            className="grid grid-cols-3 gap-6 max-w-2xl"
          >
            <div className="text-center transition-transform duration-300 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] dark:text-[#00BFA5] mb-1">87</div>
              <div className="text-sm text-gray-300">Средний балл ЕГЭ</div>
            </div>
            <div className="text-center border-l border-r border-white/20 dark:border-white/10 transition-transform duration-300 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] dark:text-[#00BFA5] mb-1">97%</div>
              <div className="text-sm text-gray-300">Поступили в вузы</div>
            </div>
            <div className="text-center transition-transform duration-300 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-[#009479] dark:text-[#00BFA5] mb-1">12</div>
              <div className="text-sm text-gray-300">Лет работы</div>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10"></div>
    </section>
  )
}

export default Hero
