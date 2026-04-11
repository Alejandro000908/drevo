'use client'

import React from 'react'
import { CheckCircle, Heart, Target } from 'lucide-react'
import { ABOUT } from '@/lib/data'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#009479]/20 to-[#007A64]/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT.image}
                alt="School interior"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#414141]/50 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#009479] rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#414141] dark:text-white">Обучение с уверенностью и вдохновением</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              О ШКОЛЕ
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] dark:text-white mb-6 leading-tight">
              {ABOUT.title}
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {ABOUT.mission}
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {ABOUT.vision}
            </p>
            
            {/* Features list */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#009479] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#414141] dark:text-white mb-1">Индивидуальные образовательные траектории</h3>
                  <p className="text-gray-600 dark:text-gray-400">Персональный подход к каждому ученику</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#009479] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#414141] dark:text-white mb-1">Качественная подготовка к экзаменам</h3>
                  <p className="text-gray-600 dark:text-gray-400">ЕГЭ и ОГЭ с гарантированными результатами</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[#009479] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#414141] dark:text-white mb-1">Развитие критического мышления</h3>
                  <p className="text-gray-600 dark:text-gray-400">Подготовка к успешному будущему</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
