import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const DocumentsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="documents" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 dark:bg-[#009479]/20 text-[#009479] dark:text-[#00BFA5] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            <span>ДОКУМЕНТЫ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#414141] dark:text-white mb-4">
            Нормативные документы
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Положения, распоряжения и другие официальные документы образовательной организации
          </p>
        </div>

        {/* Documents Preview Card */}
        <div className="max-w-4xl mx-auto">
          <Link to="/documents">
            <div className="group relative bg-gradient-to-br from-[#009479] to-[#00BFA5] dark:from-[#007A64] dark:to-[#009479] rounded-3xl p-1 shadow-2xl hover:shadow-[#009479]/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="bg-white dark:bg-gray-800 rounded-[22px] p-8 sm:p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#009479] rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-[#00BFA5] rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#009479] rounded-lg transform rotate-12"></div>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FileText className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#414141] dark:text-white mb-3">
                      24 официальных документа
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Устав, лицензия, положения о правах обучающихся, правила внутреннего распорядка и другие важные документы
                    </p>
                    <div className="flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Перейти к документам</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Document Icons (decorative) */}
                  <div className="hidden lg:flex flex-col gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 rounded-lg flex items-center justify-center border-2 border-[#009479]/30 group-hover:border-[#00BFA5] transition-all duration-300">
                      <FileText className="w-6 h-6 text-[#009479]" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 rounded-lg flex items-center justify-center border-2 border-[#009479]/30 group-hover:border-[#00BFA5] transition-all duration-300" style={{ animationDelay: '0.1s' }}>
                      <FileText className="w-6 h-6 text-[#009479]" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00BFA5]/20 to-[#009479]/20 rounded-lg flex items-center justify-center border-2 border-[#009479]/30 group-hover:border-[#00BFA5] transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                      <FileText className="w-6 h-6 text-[#009479]" />
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Links to Key Documents */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { title: "Устав", delay: "0s" },
            { title: "Лицензия", delay: "0.1s" },
            { title: "Правила распорядка", delay: "0.2s" },
            { title: "Положения", delay: "0.3s" }
          ].map((item, index) => (
            <Link key={index} to="/documents">
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 hover:border-[#009479] dark:hover:border-[#00BFA5]"
                style={{ animationDelay: item.delay }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#009479]/10 dark:bg-[#00BFA5]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#009479] dark:text-[#00BFA5]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#414141] dark:text-white text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Скачать PDF
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
