'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ОТЗЫВЫ РОДИТЕЛЕЙ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] dark:text-white mb-4">
            Что говорят о нас
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Доверие родителей — наша главная ценность
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#009479]/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#009479] text-[#009479]" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-6">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#414141] dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
