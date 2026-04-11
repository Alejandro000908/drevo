'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { FAQ_DATA } from '@/lib/data'

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>ОТВЕТЫ НА ВОПРОСЫ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#414141] mb-3 sm:mb-4 px-2">
            Часто задаваемые вопросы
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Здесь вы найдете ответы на самые популярные вопросы о нашей школе
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                animation: 'fadeInUp 0.5s ease-out',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#009479]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-[#009479] font-bold text-xs sm:text-sm">{item.id}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#414141] pr-2 sm:pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#009479]" />
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4 pl-14 sm:px-6 sm:pb-6 sm:pl-20">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a 
            href="#contacts" 
            className="inline-block bg-[#009479] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#007d66] transition-colors duration-300"
          >
            Свяжитесь с нами
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default FAQ