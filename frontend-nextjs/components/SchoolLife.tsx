'use client'

import React from 'react'
import { Heart, Sparkles } from 'lucide-react'
import { SCHOOL_LIFE } from '@/lib/data'

const SchoolLife = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>ЖИЗНЬ ШКОЛЫ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] dark:text-white mb-4">
            Счастливые дети — успешные ученики
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            В «Древе Познаний» каждый день наполнен радостью открытий, творчеством и достижениями
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SCHOOL_LIFE.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${item.imagePosition || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 fill-[#009479] text-[#009479]" />
                  <span className="text-sm font-semibold text-[#009479]">Наши ученики</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolLife
