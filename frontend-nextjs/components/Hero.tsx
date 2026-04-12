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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <MotionWrapper 
            {...motionProps}
            className="inline-flex items-center gap-2 bg-[#e8f5e9] dark:bg-[#009479]/30 backdrop-blur-sm border border-[#4CAF50]/30 dark:border-[#009479]/50 rounded-full px-6 py-2 mb-8"
          >
            <svg className="w-4 h-4 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-[#4CAF50] dark:text-white font-medium text-sm">НАША ШКОЛА</span>
          </MotionWrapper>

          {/* Main Title */}
          <MotionWrapper 
            {...(isMounted ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.1 }
            } : {})}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C3E50] dark:text-white mb-6 text-center">
              Современная инфраструктура
            </h2>
          </MotionWrapper>

          {/* Subtitle */}
          <MotionWrapper 
            {...(isMounted ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 }
            } : {})}
            className="text-base text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-center leading-relaxed"
          >
            Просторные и светлые помещения, оборудованные современной техникой и мебелью
          </MotionWrapper>

          {/* Facilities Grid - 3 columns */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 */}
            <MotionWrapper
              {...(isMounted ? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 }
              } : {})}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src="/images/k43iyvwv_QkZFmUsG6pNYjG2Wz_MFmu2IvwLcIeRC74V0yMPHv_lG71IUBE7nC2i1RXSS7iaQENWbbllX4CySCz40MfreszFR.jpg"
                alt="Здание школы"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-10">
                <svg className="w-8 h-8 text-[#00BFA5] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-2">Здание школы</h3>
                <p className="text-sm text-gray-200">Современная архитектура и уютная атмосфера</p>
              </div>
            </MotionWrapper>

            {/* Card 2 */}
            <MotionWrapper
              {...(isMounted ? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 }
              } : {})}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src="/images/iw6q8w5k_La1h7dhngnixBCecqSy88rhA4Ipo-EqgQyP9iyKGcWyqlDomJO18ZIzJNv9mINdXKNfVghbU9zudh9MYwJem_FHd.jpg"
                alt="Зона ресепшн"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-10">
                <svg className="w-8 h-8 text-[#00BFA5] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-2">Зона ресепшн</h3>
                <p className="text-sm text-gray-200">Приветливая администрация и комфортная зона ожидания</p>
              </div>
            </MotionWrapper>

            {/* Card 3 */}
            <MotionWrapper
              {...(isMounted ? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.5 }
              } : {})}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src="/images/pyjpj7ng_n3LEFeUqka_FyO2v4FHv_ehXQKcINz2u7xDZgeRYIDL_4WLprgjm86FlIyiF2ABWYPuo3-b__VV-C2nH3Ru0UwW7.jpg"
                alt="Современные классы"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-10">
                <svg className="w-8 h-8 text-[#00BFA5] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-2">Современные классы</h3>
                <p className="text-sm text-gray-200">Светлые аудитории с интерактивными досками</p>
              </div>
            </MotionWrapper>
          </div>

          {/* Second Row - 3 columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 4 */}
            <MotionWrapper
              {...(isMounted ? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.6 }
              } : {})}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src="/images/8t1ryxyc_KsuaN8x9fH_BROtidYdgXu5DV_dtGKFDTjSEVL4xdWMhaFl7I-GEEo7do8eRUhS3lLoZrOopEAbhG-fAvgk4d4Am.jpg"
                alt="Столовая"
                className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
              />
              <div className="absolute top-4 right-4 z-10">
                <svg className="w-8 h-8 text-[#00BFA5] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-2">Столовая</h3>
                <p className="text-sm text-gray-200">Здоровое питание и комфортная обстановка</p>
              </div>
            </MotionWrapper>

            {/* Card 5 */}
            <MotionWrapper
              {...(isMounted ? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.7 }
              } : {})}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src="/images/icffr31q_wfz4G9l8D1kRgXvBvLqKu6o867WaKfxzZi73rVz_u3m7wF-vAxRMpkt_3zsx7qMNonzYzz_uuGuP1eKzFrBJIWH7.jpg"
                alt="Зона отдыха"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-10">
                <svg className="w-8 h-8 text-[#00BFA5] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-2">Зона отдыха</h3>
                <p className="text-sm text-gray-200">Уютное пространство для общения и отдыха</p>
              </div>
            </MotionWrapper>

            {/* Card 6 */}
            <MotionWrapper
              {...(isMounted ? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.8 }
              } : {})}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src="/images/bcls7wmy_5242233904230952884.jpg"
                alt="Зона для игр"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-10">
                <svg className="w-8 h-8 text-[#00BFA5] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-2">Зона для игр</h3>
                <p className="text-sm text-gray-200">Активные и настольные игры для досуга</p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
