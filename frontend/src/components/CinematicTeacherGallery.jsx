import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Real teacher photos
const TEACHER_IMAGES = [
  {
    id: 1,
    url: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/jw2dk7pg_5364074790618075524.jpg",
    size: "large", // Hero image
    aspectRatio: "portrait"
  },
  {
    id: 2,
    url: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/s0tjaeuq_5348232421494690536.jpg",
    size: "medium",
    aspectRatio: "landscape"
  },
  {
    id: 3,
    url: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/alfaxepp_5345980621681006082.jpg",
    size: "medium",
    aspectRatio: "portrait"
  },
  {
    id: 4,
    url: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/z0ui22mw_5303056761474453987%20%281%29.jpg",
    size: "large",
    aspectRatio: "landscape"
  },
  // Placeholder images for remaining teachers (16 more to reach ~20)
  ...Array.from({ length: 16 }, (_, i) => ({
    id: i + 5,
    url: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=800&h=1000&fit=crop`,
    size: i % 3 === 0 ? "large" : i % 2 === 0 ? "medium" : "small",
    aspectRatio: i % 2 === 0 ? "portrait" : i % 3 === 0 ? "landscape" : "square"
  }))
];

const CinematicTeacherGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = TEACHER_IMAGES.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % TEACHER_IMAGES.length
      : (currentIndex - 1 + TEACHER_IMAGES.length) % TEACHER_IMAGES.length;
    setSelectedImage(TEACHER_IMAGES[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const getSizeClasses = (size, aspectRatio) => {
    const baseClasses = "relative overflow-hidden rounded-2xl cursor-pointer group";
    
    // Desktop grid positioning
    if (size === "large") {
      if (aspectRatio === "portrait") {
        return `${baseClasses} col-span-1 row-span-2 h-[600px]`;
      }
      return `${baseClasses} col-span-2 row-span-1 h-[400px]`;
    }
    
    if (size === "medium") {
      if (aspectRatio === "landscape") {
        return `${baseClasses} col-span-2 row-span-1 h-[300px]`;
      }
      return `${baseClasses} col-span-1 row-span-1 h-[400px]`;
    }
    
    // Small
    return `${baseClasses} col-span-1 row-span-1 h-[280px]`;
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#009479]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00BFA5]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Minimal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Наша команда
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00BFA5] to-transparent mx-auto"></div>
        </motion.div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          {TEACHER_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={getSizeClasses(image.size, image.aspectRatio)}
              onClick={() => openLightbox(image)}
            >
              {/* Image container */}
              <div className="relative w-full h-full">
                <img
                  src={image.url}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Cinematic vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] pointer-events-none"></div>
                
                {/* Soft glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[#00BFA5]/10 mix-blend-overlay"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Cinematic Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt=""
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Subtle film grain effect */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
              <span className="text-white text-sm font-medium">
                {TEACHER_IMAGES.findIndex(img => img.id === selectedImage.id) + 1} / {TEACHER_IMAGES.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default CinematicTeacherGallery;
