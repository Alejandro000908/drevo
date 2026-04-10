import React from 'react';
import { Play } from 'lucide-react';

const CinematicVideoBlock = () => {
  return (
    <div className="relative mt-16 mb-8">
      {/* Premium container with elegant layout */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left side - Supporting content */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
              <Play className="w-3.5 h-3.5 text-[#00BFA5]" />
              <span className="text-white">Видеообзор</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Как мы готовим будущих лидеров
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
              Взгляните на атмосферу нашей школы и познакомьтесь с подходом, который формирует выдающихся выпускников
            </p>
          </div>

          {/* Right side - Premium video frame */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              {/* Decorative glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#009479]/20 to-[#00BFA5]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Video container */}
              <div className="relative w-full sm:w-[400px] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[#00BFA5]/30">
                
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                
                {/* Video iframe */}
                <iframe 
                  src="https://rutube.ru/play/embed/78ed0d896b82455d1bc508ae6828d434/" 
                  allow="autoplay; fullscreen" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                ></iframe>

                {/* Elegant corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00BFA5]/40 rounded-tl-2xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#009479]/40 rounded-br-2xl pointer-events-none"></div>

                {/* Subtle vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none rounded-2xl"></div>
              </div>

              {/* Floating decorative element */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00BFA5]/10 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default CinematicVideoBlock;
