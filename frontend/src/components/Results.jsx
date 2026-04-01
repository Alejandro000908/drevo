import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, GraduationCap } from 'lucide-react';
import { STATS } from '../data/mock';

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

const Results = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    STATS.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = end;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }
      }, 16);
    });
  };

  return (
    <section
      id="results"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#414141] to-[#007A64] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#009479]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#009479]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/20 backdrop-blur-sm border border-[#009479]/30 rounded-full px-6 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-[#009479]" />
            <span className="text-[#009479] font-semibold text-sm">НАШИ ДОСТИЖЕНИЯ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Результаты, которыми мы гордимся
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Цифры говорят сами за себя — наши ученики достигают впечатляющих успехов
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#009479]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-5xl sm:text-6xl font-bold text-[#009479] mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-white text-lg font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#009479]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-3xl">
            <p className="text-xl text-white leading-relaxed">
              <span className="text-[#009479] font-bold">95%</span> наших выпускников поступают в{' '}
              <span className="font-semibold">МГУ, ВШЭ, МГТУ, СПбГУ</span> и другие ведущие вузы России на{' '}
              <span className="text-[#009479] font-bold">бюджетные места</span>
            </p>
          </div>
        </div>

        {/* Universities Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="w-5 h-5 text-[#009479]" />
              <span className="text-white">НАШИ ВЫПУСКНИКИ</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Куда поступают наши выпускники
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Престижные высшие учебные заведения России
            </p>
          </div>

          {/* University Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {UNIVERSITIES.map((university) => (
              <div
                key={university.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 w-full h-32 flex items-center justify-center"
              >
                <img
                  src={university.logo}
                  alt={university.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Experience Banner */}
        <div className="mt-16 relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 sm:p-12 overflow-hidden border border-white/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#009479]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#009479]/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid sm:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-[#009479]">100%</div>
              <div className="text-lg">Счастливых родителей</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-[#009479]">12</div>
              <div className="text-lg">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-[#009479]">240+</div>
              <div className="text-lg">Выпускников</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
