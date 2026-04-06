import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, GraduationCap } from 'lucide-react';
import { STATS } from '../data/mock';

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
];

const GRADUATE_PHOTOS = [
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/wv4zfn6r_5350409351434725931.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/z8gvo7l0_5474537471111982456.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/gq4jy3fv_5377591903102112432.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/pp1v51al_5350409351434725932.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/7i0eq0q4_5350409351434725921.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/aazsg4cp_5377591903102112444.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/gki4d06w_5303499907606375226.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/35xsctr2_5303499907606375283.jpg"
];

const Results = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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
      // Skip animation for text-only stats
      if (stat.isText) {
        return;
      }
      
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-4 shadow-lg">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-white font-semibold text-sm">НАШИ ДОСТИЖЕНИЯ И ВЫПУСКНИКИ</span>
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
                  {stat.isText ? (
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {stat.label}
                    </div>
                  ) : (
                    <>
                      <div className="text-6xl sm:text-7xl font-black bg-gradient-to-br from-[#00BFA5] via-[#009479] to-[#00796B] bg-clip-text text-transparent mb-3 drop-shadow-lg">
                        {counts[index]}
                        {stat.suffix}
                      </div>
                      <div className="text-white text-lg font-semibold tracking-wide">
                        {stat.label}
                      </div>
                    </>
                  )}
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

          {/* Graduate Photos Carousel - Infinite Premium Style */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-xl">
                Лица нашего успеха
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Выпускники, которые достигли выдающихся результатов
              </p>
            </div>

            {/* Infinite Carousel Container */}
            <div className="relative overflow-hidden py-8">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a2e] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a2e] to-transparent z-10 pointer-events-none"></div>

              {/* Carousel Track */}
              <div 
                ref={carouselRef}
                className={`flex gap-8 ${isPaused ? '' : 'animate-infinite-scroll'}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* First set of images */}
                {GRADUATE_PHOTOS.map((photo, index) => (
                  <div
                    key={`grad-1-${index}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[#00BFA5]/50 hover:scale-105">
                      <img
                        src={photo}
                        alt={`Выпускник ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Premium corner frames */}
                      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#00BFA5] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#009479] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for infinite scroll */}
                {GRADUATE_PHOTOS.map((photo, index) => (
                  <div
                    key={`grad-2-${index}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[#00BFA5]/50 hover:scale-105">
                      <img
                        src={photo}
                        alt={`Выпускник ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#00BFA5] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#009479] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* University Section Header - Below Carousel */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <GraduationCap className="w-5 h-5 text-white" />
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                  className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/40 h-32 flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFA5]/50 hover:border-[#00BFA5]/80 overflow-hidden cursor-pointer group"
                  style={{
                    transform: 'translateZ(0px)',
                    transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(40px) rotateY(8deg) scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(0px) rotateY(0deg) scale(1)';
                  }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#009479]/10 via-transparent to-[#00BFA5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* White background for logo */}
                  <div className="relative z-10 bg-white rounded-xl p-3 shadow-xl group-hover:shadow-2xl transition-all duration-500 w-full h-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
                    {/* Logo */}
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105"
                      style={{
                        filter: 'contrast(1.1) saturate(1.1)'
                      }}
                    />
                  </div>
                  
                  {/* Premium corner frames */}
                  <div className="absolute top-0 left-0 w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00BFA5] to-transparent"></div>
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#00BFA5] to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#009479] to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-[#009479] to-transparent"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#00BFA5]/20 via-transparent to-[#009479]/20 blur-xl"></div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Scroll Animation */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-288px * 8 - 32px * 8));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 45s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Results;
