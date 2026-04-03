import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, GraduationCap } from 'lucide-react';
import { STATS } from '../data/mock';

const UNIVERSITIES = [
  {
    id: 1,
    name: "МГУ",
    logo: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/s1mzp1nl_i.jpg"
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
      className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#009479]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00BFA5]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009479]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009479]/30 to-[#00BFA5]/30 backdrop-blur-xl border border-[#009479]/50 rounded-full px-6 py-2 mb-4 shadow-lg shadow-[#009479]/20">
            <TrendingUp className="w-4 h-4 text-[#00BFA5]" />
            <span className="text-[#00BFA5] font-semibold text-sm">НАШИ ДОСТИЖЕНИЯ И ВЫПУСКНИКИ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Результаты, которыми мы гордимся
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Цифры говорят сами за себя — наши ученики достигают впечатляющих успехов
          </p>
        </div>

        {/* Stats Grid with 3D Effect */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative"
              style={{
                transform: 'perspective(1000px)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* 3D Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#009479]/30"
                style={{
                  transform: 'rotateX(0deg) rotateY(0deg)',
                  transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateX(-5deg) rotateY(5deg) translateZ(20px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#009479]/30 via-transparent to-[#00BFA5]/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl sm:text-7xl font-black bg-gradient-to-br from-[#00BFA5] via-[#009479] to-[#00796B] bg-clip-text text-transparent mb-3 drop-shadow-lg">
                    {counts[index]}
                    {stat.suffix}
                  </div>
                  <div className="text-white text-lg font-semibold tracking-wide">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00BFA5]/50 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#009479]/50 rounded-br-3xl"></div>
                
                {/* Floating glow orb */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Universities Section with 3D Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009479]/30 to-[#00BFA5]/30 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-[#009479]/20">
              <GraduationCap className="w-5 h-5 text-[#00BFA5]" />
              <span className="text-white">НАШИ ВЫПУСКНИКИ</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-xl">
              Куда поступают наши выпускники
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Престижные высшие учебные заведения России
            </p>
          </div>

          {/* University Logos with 3D hover */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {UNIVERSITIES.map((university, index) => (
              <div
                key={university.id}
                className="group relative"
                style={{
                  transform: 'perspective(1000px)',
                  transformStyle: 'preserve-3d',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div
                  className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/30 h-32 flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFA5]/40 hover:border-[#00BFA5]/60 overflow-hidden cursor-pointer"
                  style={{
                    transform: 'translateZ(0px)',
                    transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(30px) rotateY(5deg) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(0px) rotateY(0deg) scale(1)';
                  }}
                >
                  {/* Background gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#009479]/0 via-[#00BFA5]/0 to-[#009479]/0 group-hover:from-[#009479]/20 group-hover:via-[#00BFA5]/15 group-hover:to-[#009479]/20 transition-all duration-700 rounded-2xl"></div>
                  
                  {/* University Logo */}
                  <img
                    src={university.logo}
                    alt={university.name}
                    className="relative z-10 max-w-full max-h-20 object-contain transition-all duration-500 group-hover:scale-110"
                    style={{
                      opacity: 0.95
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3)) brightness(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.95';
                      e.target.style.filter = 'none';
                    }}
                  />
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00BFA5]/40 group-hover:border-[#00BFA5]/80 rounded-tr-2xl transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#009479]/40 group-hover:border-[#009479]/80 rounded-bl-2xl transition-all duration-500"></div>
                  
                  {/* Animated glow orb */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#009479]/30 to-[#00BFA5]/30 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
