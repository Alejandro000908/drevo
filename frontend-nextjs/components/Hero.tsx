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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <MotionWrapper {...motionProps}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-4 sm:mb-6 leading-tight px-2">
              Частная школа <br className="hidden sm:inline"/>«Древо Познаний» —<br />
              <span className="bg-gradient-to-r from-[#009479] to-[#00BFA5] bg-clip-text text-transparent">
                индивидуальный подход и&nbsp;реальные результаты
              </span>
            </h1>
          </MotionWrapper>

          <MotionWrapper 
            {...(isMounted ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 }
            } : {})}
            className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Обучение с 1 по 11 класс. Подготовка к ЕГЭ и ОГЭ с гарантированным результатом. Небольшие классы до 12 человек. Опытные преподаватели.
          </MotionWrapper>

          <MotionWrapper
            {...(isMounted ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.4 }
            } : {})}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('contacts')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#009479] to-[#00BFA5] hover:from-[#007A64] hover:to-[#009479] text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-base sm:text-lg font-semibold"
            >
              <span className="block sm:inline">Записаться на пробный день</span>
            </Button>
            <Button
              onClick={() => scrollToSection('programs')}
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#009479] text-[#009479] hover:bg-[#009479] hover:text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg font-semibold"
            >
              Узнать больше
            </Button>
          </MotionWrapper>

          {/* Trust Badge */}
          <MotionWrapper
            {...(isMounted ? {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.6 }
            } : {})}
            className="mt-12 inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl"
          >
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-bold text-[#009479]">Запись на 2026-2027 учебный год открыта</span>
            </p>
          </MotionWrapper>
        </div>
      </div>

      {/* Scroll Indicator */}
      {isMounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#009479] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#009479] rounded-full mt-2"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero
