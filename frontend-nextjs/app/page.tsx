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

export const metadata: Metadata = {
  title: 'Частная школа «Древо Познаний» — индивидуальный подход и реальные результаты в Раменском',
  description: 'Обучение с 1 по 11 класс. Подготовка к ЕГЭ и ОГЭ с гарантированным результатом. Небольшие классы до 12 человек. Опытные преподаватели. Записаться на пробный день.',
  keywords: [
    'частная школа Раменское',
    'Древо Познаний',
    'подготовка к ЕГЭ Раменское',
    'подготовка к ОГЭ',
    'индивидуальный подход',
    'малые классы',
    'опытные педагоги',
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
        
        {/* Results Section */}
        <section id="results" className="scroll-mt-20">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#414141] dark:text-white">
              Наши результаты
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-8 text-white text-center">
                <div className="text-5xl font-bold mb-2">87</div>
                <div className="text-lg opacity-90">Средний балл ЕГЭ</div>
              </div>
              <div className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-8 text-white text-center">
                <div className="text-5xl font-bold mb-2">97%</div>
                <div className="text-lg opacity-90">Поступили в государственные вузы</div>
              </div>
              <div className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-8 text-white text-center">
                <div className="text-5xl font-bold mb-2">12</div>
                <div className="text-lg opacity-90">Лет успешной работы</div>
              </div>
            </div>
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
