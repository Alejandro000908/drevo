import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { generateBreadcrumbSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Жизнь школы «Древо Познаний» — события, экскурсии и внеклассная деятельность в Раменском',
  description: 'Насыщенная школьная жизнь в частной школе Раменское: экскурсии, творческие мероприятия, олимпиады, спортивные соревнования. Развитие каждого ученика через внеклассную деятельность и интересные проекты.',
  keywords: [
    'жизнь школы Раменское',
    'школьные мероприятия',
    'экскурсии для школьников',
    'внеклассная деятельность',
    'развитие учеников',
    'частная школа в Раменском',
    'школьные события',
  ],
  openGraph: {
    title: 'Жизнь школы — события и мероприятия | Древо Познаний',
    description: 'Экскурсии, творческие проекты, олимпиады и спортивные мероприятия. Насыщенная школьная жизнь для всестороннего развития учеников.',
    url: `${siteConfig.url}/vida-escolar/`,
  },
  alternates: {
    canonical: `${siteConfig.url}/vida-escolar/`,
  },
}

export default function SchoolLifePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Жизнь школы', url: '/vida-escolar' },
  ])

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link href="/" className="hover:text-[#009479]">Главная</Link>
              <span className="mx-2">/</span>
              <span>Жизнь школы</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-6">
              Жизнь школы «Древо Познаний» — больше чем просто уроки
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              Насыщенная событиями школьная жизнь в Раменском: экскурсии по музеям и предприятиям, творческие мастер-классы, олимпиады, спортивные соревнования и культурные мероприятия для всестороннего развития каждого ученика
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="prose prose-lg max-w-none dark:prose-invert mb-16">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                В частной школе «Древо Познаний» мы убеждены, что качественное образование — это не только академические знания, но и богатый опыт внеклассной деятельности. Наша школьная жизнь наполнена яркими событиями, которые помогают ученикам развивать таланты, находить друзей, учиться работать в команде и открывать для себя новые горизонты. Каждую неделю в нашей школе в Раменском происходят интересные мероприятия, которые делают обучение увлекательным и запоминающимся.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Развитие учеников в частной школе происходит не только на уроках, но и через участие в проектах, экскурсиях, конкурсах и творческих мастерских. Мы регулярно организуем выездные мероприятия, посещаем музеи, театры, производственные предприятия и научные лаборатории. Такой подход позволяет детям применять полученные знания на практике и видеть связь между школьной программой и реальной жизнью.
              </p>
            </div>

            {/* Activities Grid */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#414141] dark:text-white">
                Основные направления школьной жизни
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Экскурсии */}
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                    🎒
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#414141] dark:text-white">
                    Образовательные экскурсии
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Регулярные поездки в музеи, театры, на производства и научные центры. Наши ученики посещают Третьяковскую галерею, планетарий, киностудии, технопарки и другие интересные места Москвы и Подмосковья.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Минимум 2 экскурсии в месяц для каждого класса
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Подготовка и обсуждение после каждой поездки
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Связь с темами школьной программы
                    </li>
                  </ul>
                </div>

                {/* Творческие мероприятия */}
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                    🎨
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#414141] dark:text-white">
                    Творческие проекты
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Театральные постановки, художественные выставки, музыкальные концерты, литературные вечера. Каждый ученик может реализовать свой творческий потенциал и выступить перед родителями и одноклассниками.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Театральная студия с ежегодными премьерами
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Творческая мастерская и художественные проекты
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Кулинарные мастер-классы и киноклуб
                    </li>
                  </ul>
                </div>

                {/* Олимпиады и конкурсы */}
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                    🏆
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#414141] dark:text-white">
                    Олимпиады и достижения
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Участие в предметных олимпиадах, интеллектуальных турнирах, научно-практических конференциях. Поддержка одарённых детей и подготовка к серьёзным академическим соревнованиям.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Олимпиадная подготовка по всем предметам
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Участие в муниципальных и региональных турах
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Научно-исследовательские проекты учеников
                    </li>
                  </ul>
                </div>

                {/* Праздники и события */}
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                    🎉
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#414141] dark:text-white">
                    Праздники и традиции
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    День знаний, новогодние представления, праздник 8 марта и 23 февраля, выпускные балы. Школьные традиции создают особую атмосферу и объединяют учеников, учителей и родителей.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Торжественные линейки и праздничные концерты
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Тематические недели и дни здоровья
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2">•</span>
                      Семейные мероприятия с участием родителей
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* School Environment */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-12 mb-20">
              <h2 className="text-3xl font-bold mb-8 text-[#414141] dark:text-white">
                Атмосфера и среда для развития
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Школьная жизнь в «Древо Познаний» построена на принципах уважения, сотрудничества и взаимопомощи. Мы создаём безопасную и комфортную среду, где каждый ребёнок чувствует себя принятым и может свободно выражать свои идеи. Небольшие классы до 12 человек способствуют формированию крепких дружеских связей и доверительных отношений между учениками и педагогами.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Внеклассная деятельность в нашей частной школе в Раменском включает регулярные кружки по интересам: робототехника, шахматы, настольный теннис, испанский язык, интеллектуальный клуб. Эти занятия помогают ученикам найти своё призвание, развить таланты и подготовиться к будущей профессии.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#009479]">
                    Что даёт активная школьная жизнь
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Социализация</strong> — дети учатся общаться, дружить, работать в команде</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Практический опыт</strong> — применение знаний в реальных проектах</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Самооценка</strong> — успехи в творчестве и спорте повышают уверенность</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Разностороннее развитие</strong> — академические знания + таланты</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#009479] mr-2 text-xl">✓</span>
                      <span><strong>Приятные воспоминания</strong> — яркие события остаются на всю жизнь</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Станьте частью нашей школьной семьи
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Запишитесь на пробный день и убедитесь сами в насыщенной школьной жизни
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admision"
                  className="inline-block bg-white text-[#009479] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Подать заявку на обучение
                </Link>
                <Link
                  href="/programas"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Узнать о программах
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#414141] dark:text-white">
              Вопросы о школьной жизни
            </h2>

            <div className="space-y-6">
              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Как часто проводятся экскурсии и выездные мероприятия?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  В среднем каждый класс выезжает на экскурсии 2 раза в месяц. Мы стараемся планировать поездки так, чтобы они были связаны с изучаемыми темами и максимально полезны для образовательного процесса. Все экскурсии организуются школой, сопровождаются учителями и включены в общую программу обучения.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Обязательно ли участие в школьных мероприятиях?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Участие в общешкольных мероприятиях (праздники, концерты, спортивные дни) приветствуется, но не является обязательным. Однако мы рекомендуем родителям поощрять детей к активному участию в школьной жизни, так как это способствует их социализации и развитию коммуникативных навыков.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Как родители могут следить за событиями в школе?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Мы регулярно информируем родителей о всех событиях через школьные новости на нашем сайте, группы в мессенджерах и электронную рассылку. После каждого крупного мероприятия публикуются фотоотчёты. Также родители всегда могут связаться с классным руководителем для получения дополнительной информации.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Поддерживаете ли вы участие детей в олимпиадах?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Да, мы активно готовим учеников к участию в предметных олимпиадах различного уровня. В школе работают специальные кружки олимпиадной подготовки по математике, русскому языку, физике и другим предметам. Наши ученики регулярно становятся призёрами муниципальных и региональных этапов Всероссийской олимпиады школьников.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Какие дополнительные кружки и секции доступны ученикам?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  В школе работают кружки по робототехнике, программированию, шахматам, театральная студия, изобразительное искусство, кулинарная мастерская, испанский язык, киноклуб на английском языке, интеллектуальный клуб и секция настольного тенниса. Большинство кружков включены в стоимость обучения и доступны всем ученикам.
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
