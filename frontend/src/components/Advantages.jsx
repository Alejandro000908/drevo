import React from 'react';
import { Users, Award, Trophy, Lightbulb } from 'lucide-react';
import { ADVANTAGES } from '../data/mock';

const iconMap = {
  users: Users,
  award: Award,
  trophy: Trophy,
  lightbulb: Lightbulb
};

const Advantages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F6A500]/10 text-[#F6A500] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            НАШИ ПРЕИМУЩЕСТВА
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0E2A47] mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы создали идеальные условия для эффективного обучения и достижения высоких результатов
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((advantage, index) => {
            const Icon = iconMap[advantage.icon];
            return (
              <div
                key={advantage.id}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#F6A500]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#F6A500] to-[#d89200] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0E2A47] mb-3 group-hover:text-[#F6A500] transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#F6A500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
