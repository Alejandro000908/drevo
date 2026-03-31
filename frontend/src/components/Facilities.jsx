import React from 'react';
import { Building2, Sparkles } from 'lucide-react';

const FACILITIES = [
  {
    id: 1,
    title: "Здание школы",
    description: "Современное здание школы с уникальной архитектурой и комфортной территорией",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/760heqc0_XXXL.jpg"
  },
  {
    id: 2,
    title: "Зона ресепшн",
    description: "Уютная зона входа с символом нашей школы - Древом Познаний",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/6p6nx1b0_XXXL%20%282%29.webp"
  },
  {
    id: 3,
    title: "Современные классы",
    description: "Просторные классы с креативным дизайном и комфортными рабочими местами",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/0d3q6v41_XXXL%20%283%29.webp"
  },
  {
    id: 4,
    title: "Столовая",
    description: "Светлая столовая с атмосферой уюта и домашнего тепла",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/qmi9ges8_XXXL%20%285%29.webp"
  },
  {
    id: 5,
    title: "Зона отдыха",
    description: "Комфортное пространство для отдыха и общения учеников",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/0zta6bn2_XXXL%20%287%29.webp"
  },
  {
    id: 6,
    title: "Учебные аудитории",
    description: "Яркие и вдохновляющие пространства для обучения",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/soze5x7t_XXXL%20%288%29.webp"
  }
];

const Facilities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            <span>НАША ШКОЛА</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
            Современная инфраструктура
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Просторные и светлые помещения с креативным дизайном создают идеальную атмосферу для обучения
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility, index) => (
            <div
              key={facility.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#009479]/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-[#009479] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#009479]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#009479]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#414141] mb-2">Безопасность</h4>
              <p className="text-gray-600 text-sm">Видеонаблюдение и контроль доступа</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#009479]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#009479]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#414141] mb-2">Оборудование</h4>
              <p className="text-gray-600 text-sm">Современная техника и учебные материалы</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#009479]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#009479]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#414141] mb-2">Комфорт</h4>
              <p className="text-gray-600 text-sm">Кондиционеры и зоны отдыха</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
