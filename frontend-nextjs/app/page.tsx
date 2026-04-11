import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Programs from '@/components/Programs'
import SchoolNews from '@/components/SchoolNews'
import TeachersCarousel from '@/components/TeachersCarousel'
import FAQ from '@/components/FAQ'
import Contacts from '@/components/Contacts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResultsStats from '@/components/ResultsStats'
import FullStatsSection from '@/components/FullStatsSection'

export const metadata: Metadata = {
  title: 'Частная школа в Раменском «Древо Познаний» — обучение с 1 по 11 класс',
  description: 'Частная школа полного дня в Раменском. Индивидуальный подход, малые классы до 12 человек, подготовка к ЕГЭ и ОГЭ. Качественное образование и гарантированные результаты. Запись на 2026-2027 учебный год.',
  keywords: [
    'частная школа Раменское',
    'обучение в Раменском',
    'Древо Познаний',
    'подготовка к ЕГЭ Раменское',
    'подготовка к ОГЭ',
    'частное образование',
    'индивидуальный подход обучение',
    'малые классы школа',
    'качественное образование Раменское',
  ],
  openGraph: {
    title: 'Частная школа «Древо Познаний» — индивидуальный подход в Раменском',
    description: 'Обучение с 1 по 11 класс. Небольшие классы до 12 человек. Запись на пробный день.',
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: 'Частная школа Древо Познаний',
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />
        
        {/* Stats Section */}
        <Stats />
        
        {/* Programs Section */}
        <section id="programs" className="scroll-mt-20">
          <Programs />
        </section>
        
        {/* About School Section - SEO Content */}
        <section className="scroll-mt-20 py-16 sm:py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-[#414141] dark:text-white px-2">
              Частная школа в Раменском с индивидуальным подходом
            </h2>
            <div className="prose prose-base sm:prose-lg max-w-none dark:prose-invert">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <strong>«Древо Познаний»</strong> — современная частная школа полного дня в городе Раменское, где каждый ребёнок получает качественное образование в комфортной атмосфере. Мы работаем с 2014 года и за это время наши выпускники показывают стабильно высокие результаты на государственных экзаменах.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#009479]">Наша методика обучения</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    В основе нашей образовательной программы лежит индивидуальный подход к каждому ученику. Классы до 12 человек позволяют преподавателям уделять внимание особенностям развития каждого ребёнка.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">✓</span>
                      Персональные образовательные траектории
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">✓</span>
                      Современные методики преподавания
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">✓</span>
                      Регулярная обратная связь родителям
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#009479]">Преимущества обучения</h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                    Частное образование в «Древо Познаний» — это не просто освоение школьной программы. Мы развиваем критическое мышление, творческие способности и готовим учеников к успешному будущему.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">✓</span>
                      Углублённая подготовка к ЕГЭ и ОГЭ
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">✓</span>
                      Дополнительные образовательные программы
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">✓</span>
                      Психологическая поддержка учеников
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Обучение в нашей частной школе в Раменском сочетает академическую строгость с творческой свободой. Мы следуем федеральным государственным образовательным стандартам (ФГОС), но дополняем программу авторскими методиками и современными образовательными технологиями. Каждый ученик получает возможность раскрыть свой потенциал через проектную деятельность, исследовательские работы и участие в олимпиадах.
              </p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="scroll-mt-20 py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-[#414141] dark:text-white px-2">
              Результаты наших учеников
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Качественная подготовка к ЕГЭ и ОГЭ в Раменском — гарантированные результаты поступления в ведущие вузы России
            </p>
            
            <ResultsStats />
          </div>
        </section>
        
        {/* School News Section */}
        <section id="news" className="scroll-mt-20 bg-gray-50 dark:bg-gray-900">
          <SchoolNews />
        </section>
        
        {/* Teachers Section */}
        <section id="teachers" className="scroll-mt-20">
          <TeachersCarousel />
        </section>
        
        {/* FAQ Section - SEO importante */}
        <section id="faq" className="scroll-mt-20 bg-gray-50 dark:bg-gray-900">
          <FAQ />
        </section>
        
        {/* Contacts Section */}
        <section id="contacts" className="scroll-mt-20">
          <Contacts />
        </section>
      </main>
      <Footer />
    </>
  )
}
