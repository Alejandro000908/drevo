import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const CinematicVideoBlock = () => {
  return (
    <div className="relative mt-20 mb-12">
      {/* Premium unified container */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Unified card with gradient background */}
        <div className="relative bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-black/60 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA5]/5 via-transparent to-[#009479]/5 pointer-events-none"></div>
          
          {/* Content grid - perfectly balanced */}
          <div className="relative grid lg:grid-cols-2 gap-0">
            
            {/* Left side - Text content with matching height */}
            <div className="flex flex-col justify-center p-8 lg:p-12 space-y-6 border-b lg:border-b-0 lg:border-r border-white/10">
              
              {/* Badge with glow */}
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#009479]/20 to-[#00BFA5]/20 backdrop-blur-xl border border-[#00BFA5]/30 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg w-fit">
                <div className="relative">
                  <Play className="w-4 h-4 text-[#00BFA5]" fill="#00BFA5" />
                  <div className="absolute inset-0 blur-sm bg-[#00BFA5]/50"></div>
                </div>
                <span className="text-white">Видеообзор школы</span>
              </div>
              
              {/* Main text with elegant typography */}
              <div className="space-y-4">
                <p className="text-white/90 text-lg sm:text-xl leading-relaxed font-light">
                  Наша школа — это пространство, где раскрывается потенциал каждого ребёнка, где рост становится естественным процессом, а развитие — вдохновляющим путём.
                </p>
                
                <p className="text-[#00BFA5] text-base sm:text-lg font-medium flex items-center gap-2">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <span>Растите и развивайтесь вместе с нами</span>
                </p>
              </div>

              {/* Decorative element */}
              <div className="flex items-center gap-3 pt-4">
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#00BFA5] to-transparent"></div>
                <span className="text-white/40 text-xs uppercase tracking-wider">Смотреть видео</span>
              </div>
            </div>

            {/* Right side - Video player with matching height */}
            <div className="relative flex items-center justify-center p-8 lg:p-12">
              
              {/* Video container with premium frame */}
              <div className="relative w-full max-w-lg group">
                
                {/* Animated glow backdrop */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#009479]/30 via-[#00BFA5]/30 to-[#009479]/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Video frame */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[#00BFA5]/30">
                  
                  {/* Subtle inner shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50"></div>
                  
                  {/* Video iframe */}
                  <iframe 
                    src="https://rutube.ru/play/embed/78ed0d896b82455d1bc508ae6828d434/" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  ></iframe>

                  {/* Premium corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00BFA5]/50 rounded-tl-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#009479]/50 rounded-br-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Cinematic vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] pointer-events-none rounded-2xl"></div>
                </div>

                {/* Floating accent orb */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00BFA5] to-[#009479] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>

          </div>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFA5]/30 to-transparent"></div>
        </div>

      </div>

      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#009479]/10 via-[#00BFA5]/20 to-[#009479]/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default CinematicVideoBlock;
