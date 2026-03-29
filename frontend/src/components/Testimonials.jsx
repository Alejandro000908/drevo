import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mock';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F6A500]/10 text-[#F6A500] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ОТЗЫВЫ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0E2A47] mb-4">
            Что говорят о нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Истории успеха наших учеников и благодарные отзывы родителей
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="grid md:grid-cols-5 gap-8 p-8 sm:p-12">
                    {/* Image */}
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-[#F6A500]/20 rounded-full blur-2xl"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
                        />
                        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#F6A500] rounded-full flex items-center justify-center shadow-lg">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 flex flex-col justify-center">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#F6A500] text-[#F6A500]" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div>
                        <h4 className="text-lg font-bold text-[#0E2A47]">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl hover:bg-[#F6A500] text-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl hover:bg-[#F6A500] text-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-[#F6A500]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
