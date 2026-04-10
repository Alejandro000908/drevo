import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    number: '01',
    title: 'Ориентация на результат',
    description: 'Развиваем мышление, самостоятельность и уверенность.',
    image: 'https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/kady2jw3_1.jpg',
    imagePosition: 'object-[center_40%]'
  },
  {
    id: 2,
    number: '02',
    title: 'Домашние задания в школе',
    description: 'Наша школа высоко ценит ваше время.',
    image: 'https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/jjyhwcrf_2.jpg',
    imagePosition: 'object-center'
  },
  {
    id: 3,
    number: '03',
    title: 'Практика через реальные проекты',
    description: 'Применение знаний через реальные кейсы и задачи.',
    image: 'https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/j4roy8ua_4.jpg',
    imagePosition: 'object-center'
  },
  {
    id: 4,
    number: '04',
    title: 'Эффективная подготовка к экзаменам',
    description: 'Системная поддержка на всех этапах подготовки к ОГЭ и ЕГЭ.',
    image: 'https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/4hf80sng_3.jpg',
    imagePosition: 'object-center'
  },
  {
    id: 5,
    number: '05',
    title: 'Готовим к жизни, а не только к экзаменам',
    description: 'Формируем ответственность, самостоятельность и уверенность в будущем.',
    image: 'https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/2v7ueu64_5285284332832494100%20%281%29.jpg',
    imagePosition: 'object-[50%_30%]',
    isLast: true
  }
];

const InteractiveStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timerRef = useRef(null);
  const progressTimerRef = useRef(null);

  const currentStory = STORIES[currentIndex];
  const AUTOPLAY_DURATION = 5000; // 5 seconds

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      // Progress bar animation
      setProgress(0);
      let startTime = Date.now();
      
      progressTimerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = (elapsed / AUTOPLAY_DURATION) * 100;
        
        if (newProgress >= 100) {
          clearInterval(progressTimerRef.current);
        } else {
          setProgress(newProgress);
        }
      }, 50);

      // Auto advance
      timerRef.current = setTimeout(() => {
        goToNext();
      }, AUTOPLAY_DURATION);
    }

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressTimerRef.current);
    };
  }, [currentIndex, isPaused]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const goToNext = () => {
    const nextIndex = currentIndex === STORIES.length - 1 ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? STORIES.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-6 tracking-tight">
            Как мы учим и формируем<br />будущее учеников
          </h2>
        </div>

        {/* Interactive Story Container */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0">
              {STORIES.map((story, index) => (
                <div
                  key={story.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className={`w-full h-full object-cover ${story.imagePosition || 'object-center'} ${
                      index === currentIndex && !isPaused ? 'animate-ken-burns' : ''
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
              <div 
                className="h-full bg-[#00BFA5] transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
              {/* Number Badge */}
              <div className="self-start">
                <div 
                  key={`number-${currentIndex}`}
                  className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-white/10 leading-none select-none animate-fade-in"
                >
                  {currentStory.number}
                </div>
              </div>

              {/* Text Content - with extra bottom padding on last slide */}
              <div 
                key={`content-${currentIndex}`}
                className={`space-y-4 md:space-y-6 animate-slide-up-fade ${
                  currentStory.isLast ? 'mb-20' : ''
                }`}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                  {currentStory.title}
                </h3>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed">
                  {currentStory.description}
                </p>
              </div>

              {/* CTA Button on last slide - positioned bottom right with more space */}
              {currentStory.isLast && (
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <button className="px-10 py-5 bg-[#009479] hover:bg-[#00BFA5] text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Записаться на встречу
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Arrows (Desktop) */}
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {STORIES.map((story, index) => (
              <button
                key={story.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-[#009479]'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-[#009479]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slide-up-fade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 5s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up-fade {
          animation: slide-up-fade 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default InteractiveStory;
