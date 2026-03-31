import React from 'react';
import { Heart, Sparkles, GraduationCap } from 'lucide-react';
import { SCHOOL_LIFE } from '../data/mock';

const UNIVERSITIES = [
  {
    id: 1,
    name: "МГУ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/23ailkew_i.jpg"
  },
  {
    id: 2,
    name: "ВШЭ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/6k8xovdj_logoSVGblueWordnoColor.svg"
  },
  {
    id: 3,
    name: "РХТУ им. Менделеева",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/govi5wbn_Mendeleev_University.jpg"
  },
  {
    id: 4,
    name: "МГТУ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/1cf9o27u_513dcc22399ddea3cf9d0e6f712c93fb.jpg"
  },
  {
    id: 5,
    name: "РГУ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/qneou6fv_rgu_3_novoe.png"
  }
];

const SchoolLife = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>ЖИЗНЬ ШКОЛЫ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
            Счастливые дети — успешные ученики
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            В «Древе Познаний» каждый день наполнен радостью открытий, творчеством и достижениями
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {SCHOOL_LIFE.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
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

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-[#009479] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Universities Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="w-5 h-5" />
              <span>НАШИ ВЫПУСКНИКИ</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#414141] mb-4">
              Выпускники нашей школы поступают в престижные высшие учебные заведения России
            </h3>
          </div>

          {/* University Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {UNIVERSITIES.map((university) => (
              <div
                key={university.id}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full h-32 flex items-center justify-center"
              >
                <img
                  src={university.logo}
                  alt={university.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="relative bg-gradient-to-r from-[#009479] to-[#007A64] rounded-2xl p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid sm:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Счастливых родителей</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">240+</div>
              <div className="text-lg opacity-90">Выпускников</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLife;
