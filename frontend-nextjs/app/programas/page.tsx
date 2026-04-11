import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { generateBreadcrumbSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Образовательные программы — частная школа «Древо Познаний» в Раменском',
  description: 'Программы обучения с 1 по 11 класс в частной школе Раменское. Углублённое изучение предметов, подготовка к ЕГЭ и ОГЭ, дополнительные занятия. ФГОС + авторские методики.',
  keywords: [
    'образовательные программы Раменское',
    'обучение 1-11 класс',
    'программы частной школы',
    'углублённое обучение',
    'подготовка к ЕГЭ программа',
  ],
  openGraph: {
    title: 'Образовательные программы | Древо Познаний',
    description: 'Комплексные программы обучения с 1 по 11 класс. Индивидуальный подход, ФГОС и современные методики.',
    url: `${siteConfig.url}/programas/`,
  },
  alternates: {
    canonical: `${siteConfig.url}/programas/`,
  },
}

export default function ProgramsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Программы', url: '/programas' },
  ])

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link href="/" className="hover:text-[#009479]">Главная</Link>
              <span className="mx-2">/</span>
              <span>Программы</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-6">
              Образовательные программы частной школы в Раменском
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              Комплексные программы обучения с 1 по 11 класс, сочетающие федеральные образовательные стандарты с авторскими методиками и индивидуальным подходом к каждому ученику
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="prose prose-lg max-w-none dark:prose-invert mb-16">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                В частной школе «Древо Познаний» мы предлагаем полный спектр образовательных программ для детей с 1 по 11 класс. Наше обучение в Раменском построено на принципах индивидуального подхода, качественного академического образования и всестороннего развития личности. Все программы соответствуют федеральным государственным образовательным стандартам (ФГОС) и дополнены авторскими методиками наших педагогов.
              </p>
            </div>

            {/* Programs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* Начальная школа */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1-4
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#414141] dark:text-white">
                  Начальная школа
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Программа для учеников 1-4 классов. Формирование базовых навыков обучения, развитие познавательного интереса, адаптация к школьной жизни.
                </p>
                <h3 className="font-semibold text-[#009479] mb-3">Ключевые особенности:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Игровые методики обучения
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Развитие эмоционального интеллекта
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Английский язык с 1 класса
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Творческие мастер-классы
                  </li>
                </ul>
              </div>

              {/* Основная школа */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  5-9
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#414141] dark:text-white">
                  Основная школа
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Программа для 5-9 классов. Углублённое изучение предметов, подготовка к ОГЭ, профориентация, развитие критического мышления.
                </p>
                <h3 className="font-semibold text-[#009479] mb-3">Ключевые особенности:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Подготовка к ОГЭ с 8 класса
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Проектная деятельность
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Профориентационные курсы
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Олимпиадная подготовка
                  </li>
                </ul>
              </div>

              {/* Старшая школа */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  10-11
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#414141] dark:text-white">
                  Старшая школа
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Программа для 10-11 классов. Профильное обучение, интенсивная подготовка к ЕГЭ, индивидуальные образовательные траектории.
                </p>
                <h3 className="font-semibold text-[#009479] mb-3">Ключевые особенности:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Углублённая подготовка к ЕГЭ
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Профильные направления
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Пробные ЕГЭ каждый месяц
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009479] mr-2">•</span>
                    Консультации по поступлению
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-8 text-[#414141] dark:text-white">
                Что включает обучение в частной школе «Древо Познаний»
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#009479]">
                    Основная программа
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Полный курс общеобразовательных предметов согласно ФГОС с углублённым изучением математики, русского языка, английского языка и естественных наук. Программа адаптирована под индивидуальные потребности учеников.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Малые классы</strong> — до 12 человек для максимального внимания каждому ученику</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Современные учебники</strong> и цифровые образовательные ресурсы</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Регулярная диагностика</strong> знаний и прогресса</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#009479]">
                    Дополнительные программы
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Кроме основной программы, мы предлагаем широкий спектр дополнительных занятий для всестороннего развития учеников и реализации их талантов и интересов.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Робототехника</strong> и программирование</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Творческие мастерские</strong> (рисование, театр, музыка)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Спортивные секции</strong> (шахматы, настольный теннис)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Интеллектуальный клуб</strong> и киноклуб на английском</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Хотите узнать больше о наших программах?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Запишитесь на пробный день или консультацию с нашим методистом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admision"
                  className="inline-block bg-white text-[#009479] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Подать заявку на обучение
                </Link>
                <Link
                  href="/#contacts"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#414141] dark:text-white">
              Часто задаваемые вопросы об образовательных программах
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Соответствуют ли ваши программы ФГОС?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Да, все наши образовательные программы полностью соответствуют федеральным государственным образовательным стандартам. При этом мы дополняем базовую программу авторскими методиками, углублённым изучением отдельных предметов и дополнительными занятиями. Это позволяет нашим ученикам получать более качественное образование, чем в обычных школах.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Как организована подготовка к ЕГЭ и ОГЭ?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Подготовка к государственным экзаменам интегрирована в основную программу обучения. Для учеников 8-9 классов мы проводим регулярные занятия по подготовке к ОГЭ, а для 10-11 классов — углублённую подготовку к ЕГЭ. Каждый месяц проводятся пробные экзамены в формате ЕГЭ/ОГЭ, анализируются результаты и корректируется индивидуальная программа подготовки.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Можно ли выбрать профильное направление в старших классах?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Да, в 10-11 классах мы предлагаем профильное обучение по нескольким направлениям: естественно-научное (физика, химия, биология), математическое, гуманитарное и социально-экономическое. Выбор профиля происходит с учётом интересов ученика, его планов на поступление в вуз и результатов профориентационного тестирования.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Входят ли дополнительные занятия в стоимость обучения?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Большинство дополнительных занятий включены в стоимость обучения: английский клуб, математический кружок, робототехника, шахматы, театральная студия, изобразительное искусство, кулинарная мастерская, испанский язык, киноклуб на английском, интеллектуальный клуб и настольный теннис. Это делает частное образование в нашей школе особенно выгодным.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
