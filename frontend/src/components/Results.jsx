import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { STATS } from '../data/mock';

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
      className="py-20 bg-gradient-to-br from-[#0E2A47] to-[#1a4d7a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F6A500]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F6A500]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F6A500]/20 backdrop-blur-sm border border-[#F6A500]/30 rounded-full px-6 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-[#F6A500]" />
            <span className="text-[#F6A500] font-semibold text-sm">НАШИ ДОСТИЖЕНИЯ</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#F6A500]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-5xl sm:text-6xl font-bold text-[#F6A500] mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-white text-lg font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#F6A500]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-3xl">
            <p className="text-xl text-white leading-relaxed">
              <span className="text-[#F6A500] font-bold">95%</span> наших выпускников поступают в{' '}
              <span className="font-semibold">МГУ, ВШЭ, МГТУ, СПбГУ</span> и другие ведущие вузы России на{' '}
              <span className="text-[#F6A500] font-bold">бюджетные места</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
