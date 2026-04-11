import React, { useEffect, useRef, useState } from 'react';

const QuoteDivider = ({ quote, alignment = 'center' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (quoteRef.current) {
        const rect = quoteRef.current.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) / 20;
        setScrollY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div 
      ref={quoteRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#009479]/5 to-transparent"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#009479]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#00BFA5]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`flex flex-col ${alignmentClasses[alignment]} max-w-4xl mx-auto`}>
          {/* Decorative top line */}
          <div 
            className={`w-20 h-0.5 bg-gradient-to-r from-[#009479] to-[#00BFA5] mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transformOrigin: alignment === 'left' ? 'left' : alignment === 'right' ? 'right' : 'center' }}
          ></div>

          {/* Quote with parallax effect */}
          <blockquote 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            {/* Opening quote mark */}
            <span className="absolute -top-6 -left-4 text-7xl sm:text-8xl text-[#009479]/20 font-serif leading-none select-none">
              "
            </span>

            {/* Quote text */}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#414141] dark:text-white leading-relaxed italic px-8 sm:px-12">
              {quote}
            </p>

            {/* Closing quote mark */}
            <span className="absolute -bottom-12 -right-4 text-7xl sm:text-8xl text-[#00BFA5]/20 font-serif leading-none select-none">
              "
            </span>
          </blockquote>

          {/* Decorative bottom line */}
          <div 
            className={`w-20 h-0.5 bg-gradient-to-r from-[#00BFA5] to-[#009479] mt-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transformOrigin: alignment === 'left' ? 'left' : alignment === 'right' ? 'right' : 'center' }}
          ></div>

          {/* Glassmorphism accent card (optional, subtle) */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-gray-800/40 dark:via-gray-800/20 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDivider;
