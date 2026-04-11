'use client'

import React from 'react'
import { Calendar, Users, Award } from 'lucide-react'

const InteractiveStory = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] dark:text-white mb-4">
              История успеха «Древо Познаний»
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              12 лет помогаем детям раскрывать потенциал
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#009479] mb-2">2014</h3>
              <p className="text-gray-600 dark:text-gray-400">Год основания школы</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#009479] mb-2">240+</h3>
              <p className="text-gray-600 dark:text-gray-400">Выпускников поступили в ведущие вузы</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#009479] mb-2">87</h3>
              <p className="text-gray-600 dark:text-gray-400">Средний балл ЕГЭ наших выпускников</p>
            </div>
          </div>

          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              За годы работы мы создали уникальную образовательную среду, где каждый ученик 
              получает персональное внимание, качественную подготовку к экзаменам и возможность 
              развивать свои таланты. Наши выпускники успешно поступают в ведущие университеты 
              России и продолжают радовать нас своими достижениями.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveStory
