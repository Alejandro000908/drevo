import React from 'react';
import { CheckCircle, Heart, Target } from 'lucide-react';
import { ABOUT } from '../data/mock';

const About = () => {
  // Model viewer is loaded via CDN in index.html

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* 3D Model Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              НАША ШКОЛА В 3D
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#414141] mb-4">
              Древо Познаний — символ нашей школы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Интерактивная 3D-модель нашего символа. Вращайте и исследуйте!
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#009479]/20 p-6">
              <model-viewer
                src="https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/ee3rwgo9_output_mesh_0%20%283%29.glb"
                alt="3D модель Древа Познаний"
                auto-rotate
                camera-controls
                shadow-intensity="1"
                exposure="1.2"
                environment-image="neutral"
                style={{
                  width: '100%',
                  height: '600px',
                  background: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)'
                }}
              ></model-viewer>
              
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl px-8 py-4 shadow-xl border border-gray-200">
                <p className="text-sm font-medium text-gray-700 text-center flex items-center gap-3">
                  <span className="text-2xl">🖱️</span>
                  <span>Вращайте модель мышью</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-2xl">📱</span>
                  <span>Перемещайте пальцем</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Original About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#009479]/20 to-[#007A64]/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT.image}
                alt="School interior"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#414141]/50 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#009479] rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#414141]">240+</p>
                  <p className="text-sm text-gray-600">Довольных выпускников</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              О ШКОЛЕ
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-6 leading-tight">
              {ABOUT.title}
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {ABOUT.mission}
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {ABOUT.vision}
            </p>

            {/* Features list */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#009479]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#009479]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#414141] mb-1">
                    Индивидуальный подход
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Учитываем особенности каждого ученика и создаем персональный план обучения
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#009479]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#009479]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#414141] mb-1">
                    Ориентация на результат
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Регулярное тестирование и мониторинг прогресса для достижения высоких баллов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#009479]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[#009479]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#414141] mb-1">
                    Комфортная атмосфера
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Дружелюбная среда, где ученики чувствуют себя уверенно и мотивированно
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
