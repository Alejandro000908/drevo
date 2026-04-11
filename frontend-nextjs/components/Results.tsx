'use client'

import React from 'react'
import { TrendingUp, GraduationCap } from 'lucide-react'
import CinematicVideoBlock from '@/components/CinematicVideoBlock'

const UNIVERSITIES = [
  {
    id: 1,
    name: "МГУ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/l4ie6wy2_rus_logo_0111ff8a858158750f01898bc480af25bebeea25.jpg"
  },
  {
    id: 2,
    name: "ВШЭ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/9rhfopw4_logoSVGblueWordnoColor.svg"
  },
  {
    id: 3,
    name: "РХТУ им. Менделеева",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/lfig1zai_Mendeleev_University.jpg"
  },
  {
    id: 4,
    name: "МГТУ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/xnbb4l82_513dcc22399ddea3cf9d0e6f712c93fb.jpg"
  },
  {
    id: 5,
    name: "РГУ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/5z2rreod_rgu_3_novoe.png"
  },
  {
    id: 6,
    name: "Сеченовский Университет",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/p9nahwks_logo-sechenov-new-itog-03.png"
  }
]

const GRADUATE_PHOTOS = [
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/wv4zfn6r_5350409351434725931.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/z8gvo7l0_5474537471111982456.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/gq4jy3fv_5377591903102112432.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/pp1v51al_5350409351434725932.jpg"
]

const Results = () => {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>РЕЗУЛЬТАТЫ НАШИХ УЧЕНИКОВ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] dark:text-white mb-4">
            Наши выпускники поступают в лучшие вузы
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            97% выпускников успешно поступают в ведущие университеты России
          </p>
        </div>

        {/* Universities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-[#414141] dark:text-white mb-8">
            Куда поступают наши выпускники
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {UNIVERSITIES.map((uni) => (
              <div
                key={uni.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="max-w-full h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Video Block */}
        <CinematicVideoBlock />

        {/* Graduate Photos */}
        <div>
          <h3 className="text-2xl font-bold text-center text-[#414141] dark:text-white mb-8">
            <GraduationCap className="w-8 h-8 inline-block mr-2 text-[#009479]" />
            Наши выпускники
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GRADUATE_PHOTOS.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={photo}
                  alt={`Graduate ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
