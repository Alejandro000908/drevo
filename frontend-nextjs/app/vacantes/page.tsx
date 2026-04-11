import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { generateBreadcrumbSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Вакансии учителей — работа в частной школе «Древо Познаний» Раменское',
  description: 'Открытые вакансии педагогов и учителей в частной школе Раменское. Стабильная работа, достойная зарплата, комфортные условия труда. Присоединяйтесь к команде профессионалов.',
  keywords: [
    'вакансии учителей Раменское',
    'работа в частной школе',
    'работа учителем Раменское',
    'педагог вакансии',
    'учитель математики вакансия',
    'работа преподаватель',
  ],
  openGraph: {
    title: 'Вакансии — работа в частной школе | Древо Познаний',
    description: 'Открытые вакансии учителей и педагогов. Стабильная работа, достойная оплата, профессиональное развитие.',
    url: `${siteConfig.url}/vacantes/`,
  },
  alternates: {
    canonical: `${siteConfig.url}/vacantes/`,
  },
}

export default function VacanciesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Вакансии', url: '/vacantes' },
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
              <span>Вакансии</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-6">
              Вакансии учителей в частной школе «Древо Познаний»
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              Присоединяйтесь к команде профессиональных педагогов в Раменском. Мы ищем творческих, ответственных и любящих своё дело учителей для работы с небольшими классами в комфортных условиях
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#414141] dark:text-white">
              Почему стоит работать в «Древо Познаний»
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
              Работа в частной школе — это возможность реализовать свой педагогический потенциал в комфортной атмосфере
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  💰
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#414141] dark:text-white">
                  Достойная оплата труда
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Конкурентная заработная плата выше средней по Московской области, официальное трудоустройство, своевременные выплаты
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  👥
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#414141] dark:text-white">
                  Малые классы
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  До 12 учеников в классе — возможность уделить внимание каждому ребёнку и работать качественно без перегрузок
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  📚
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#414141] dark:text-white">
                  Свобода методик
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Возможность применять авторские методики преподавания, использовать современные образовательные технологии
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  🎓
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#414141] dark:text-white">
                  Профессиональный рост
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Регулярные курсы повышения квалификации, участие в конференциях, обмен опытом с коллегами
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  🏢
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#414141] dark:text-white">
                  Комфортные условия
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Современное оборудование, удобные кабинеты, методические материалы, комната отдыха для учителей
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  ☕
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#414141] dark:text-white">
                  Приятная атмосфера
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Дружный коллектив, корпоративные мероприятия, отсутствие бюрократии и лишней документации
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#414141] dark:text-white">
              Открытые вакансии учителей
            </h2>

            <div className="space-y-6">
              {/* Vacancy 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-2 md:mb-0">
                    Учитель начальных классов
                  </h3>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-1 rounded-full text-sm font-semibold">
                    Активная вакансия
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Требования: высшее педагогическое образование, опыт работы от 2 лет, любовь к детям, творческий подход к обучению
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Обязанности: обучение учеников 1-4 классов по программе ФГОС, ведение классного руководства, организация внеклассных мероприятий
                </p>
                <a 
                  href={`mailto:${siteConfig.contact.email}?subject=Отклик на вакансию: Учитель начальных классов`}
                  className="inline-flex items-center text-[#009479] hover:text-[#007A64] font-semibold transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Откликнуться на вакансию
                </a>
              </div>

              {/* Vacancy 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-2 md:mb-0">
                    Учитель математики
                  </h3>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-1 rounded-full text-sm font-semibold">
                    Активная вакансия
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Требования: высшее образование (математика/физика), опыт подготовки к ЕГЭ, умение объяснять сложные темы простым языком
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Обязанности: преподавание математики в 5-11 классах, подготовка к ОГЭ и ЕГЭ, ведение олимпиадной подготовки
                </p>
                <a 
                  href={`mailto:${siteConfig.contact.email}?subject=Отклик на вакансию: Учитель математики`}
                  className="inline-flex items-center text-[#009479] hover:text-[#007A64] font-semibold transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Откликнуться на вакансию
                </a>
              </div>

              {/* Vacancy 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-2 md:mb-0">
                    Учитель английского языка
                  </h3>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-1 rounded-full text-sm font-semibold">
                    Активная вакансия
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Требования: высшее педагогическое образование, уровень английского не ниже C1, опыт работы с детьми разных возрастов
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Обязанности: преподавание английского языка, подготовка к ЕГЭ, ведение разговорного клуба, организация языковых мероприятий
                </p>
                <a 
                  href={`mailto:${siteConfig.contact.email}?subject=Отклик на вакансию: Учитель английского языка`}
                  className="inline-flex items-center text-[#009479] hover:text-[#007A64] font-semibold transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Откликнуться на вакансию
                </a>
              </div>
            </div>

            {/* General Application */}
            <div className="mt-12 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                Не нашли подходящую вакансию?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Отправьте нам своё резюме, и мы свяжемся с вами при открытии новых позиций
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Резюме - работа учителем в Древо Познаний`}
                className="inline-flex items-center bg-white text-[#009479] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Отправить резюме
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#414141] dark:text-white">
              Вопросы о работе в школе
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Какой график работы у учителей?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Стандартный график работы — 5 дней в неделю с понедельника по пятницу. Рабочий день зависит от расписания уроков, обычно с 8:00 до 17:00. Нагрузка составляет от 18 до 24 часов в неделю плюс время на проверку работ и методическую работу.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Какие документы нужны для трудоустройства?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Для трудоустройства необходимы: паспорт, диплом о высшем образовании, трудовая книжка (при наличии), СНИЛС, ИНН, медицинская книжка, справка об отсутствии судимости. Все оформление происходит официально с полным соцпакетом.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Есть ли испытательный срок?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Да, стандартный испытательный срок составляет 3 месяца. В течение этого времени вы сможете оценить, подходит ли вам работа в частной школе, а мы — убедиться в вашем профессионализме. Оплата в период испытательного срока не снижается.
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
