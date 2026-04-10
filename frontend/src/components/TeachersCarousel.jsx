import React, { useState, useRef, useEffect } from 'react';

// Real teacher photos
const TEACHER_PHOTOS = [
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/smd7wtab_5222205668574565459.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/3pve0no0_5303056761474453989.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/z95v2txr_5201808950486497580.jpg",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/5y4xqzeu_IMG_4814.JPG",
  "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/i3qsr102_IMG_4837.JPG"
];

const TeachersCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#009479]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00BFA5]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-xl">
            Наша команда
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00BFA5] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Профессионалы, которые формируют будущее ваших детей
          </p>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Track */}
          <div 
            ref={carouselRef}
            className={`flex gap-8 ${isPaused ? '' : 'animate-infinite-scroll'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set of images */}
            {TEACHER_PHOTOS.map((photo, index) => (
              <div
                key={`teacher-1-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[#00BFA5]/50 hover:scale-105">
                  <img
                    src={photo}
                    alt=""
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
            {TEACHER_PHOTOS.map((photo, index) => (
              <div
                key={`teacher-2-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[#00BFA5]/50 hover:scale-105">
                  <img
                    src={photo}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#00BFA5] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#009479] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}

            {/* Third set for smoother infinite loop */}
            {TEACHER_PHOTOS.map((photo, index) => (
              <div
                key={`teacher-3-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[#00BFA5]/50 hover:scale-105">
                  <img
                    src={photo}
                    alt=""
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
    </section>
  );
};

export default TeachersCarousel;
