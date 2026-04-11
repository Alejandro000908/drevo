import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Users, FileText, Calendar, MessageCircle, Phone, ArrowRight } from 'lucide-react'
import FAQ from '@/components/FAQ'
import { ADMISSION_FAQ } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Поступление в частную школу «Древо Познаний» | Как записаться и требования',
  description: 'Узнайте, как поступить в частную школу «Древо Познаний» в Раменском. Требования, процесс зачисления, необходимые документы и условия обучения. Бесплатный пробный день для знакомства со школой.',
  keywords: 'поступление в частную школу, как записаться в школу Раменское, зачисление в частную школу, требования для поступления, документы для школы, частная школа Раменское прием',
  openGraph: {
    title: 'Поступление в частную школу «Древо Познаний»',
    description: 'Процесс зачисления, требования и условия обучения. Бесплатный пробный день.',
    url: 'https://drevoznanii.ru/admision/',
    type: 'website',
  },
}

export default function AdmisionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#009479] via-[#007d66] to-[#414141] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ПОСТУПЛЕНИЕ В ШКОЛУ
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Откройте двери в мир качественного образования
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Поступление в частную школу «Древо Познаний» — это первый шаг к успешному будущему вашего ребенка. Мы создаем комфортные условия для обучения с 1 по 11 класс, обеспечиваем индивидуальный подход и гарантируем высокие результаты на ЕГЭ и ОГЭ.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#process"
                className="inline-flex items-center gap-2 bg-white text-[#009479] px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Узнать процесс поступления
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/contacto/"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#009479] transition-all duration-300"
              >
                Связаться с нами
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества поступления */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
              Почему родители выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              «Древо Познаний» — это не просто школа, а образовательная среда, где каждый ученик раскрывает свой потенциал. Мы гордимся нашими преимуществами, которые делают обучение эффективным и комфортным.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Малые классы до 12 человек',
                description: 'Индивидуальный подход к каждому ученику. Преподаватель успевает уделить внимание всем детям, отслеживать их прогресс и помогать в освоении материала.'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Высокие результаты ЕГЭ и ОГЭ',
                description: '95% наших выпускников поступают в ведущие вузы России благодаря качественной подготовке и современным методикам обучения.'
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Опытные педагоги',
                description: 'Наши учителя — эксперты ЕГЭ и ОГЭ с многолетним стажем. Они знают, как мотивировать детей и добиваться отличных результатов.'
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Гибкий график и удобство',
                description: 'Обучение по триместрам, двухразовое питание, дополнительные кружки и секции — всё для комфорта вашего ребенка.'
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: 'Поддержка и психологическое сопровождение',
                description: 'Мы помогаем детям адаптироваться, развиваем их уверенность и готовим к экзаменам не только академически, но и психологически.'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Современная материальная база',
                description: 'Светлые классы, оснащенные лаборатории, библиотека, столовая и безопасная территория создают идеальные условия для учебы.'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#009479]/10 rounded-xl flex items-center justify-center text-[#009479] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#414141] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс поступления */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
              Как поступить в «Древо Познаний»
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Процесс зачисления в нашу школу прост и прозрачен. Мы сопровождаем родителей на каждом этапе, отвечаем на вопросы и помогаем подготовить необходимые документы.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: '01',
                title: 'Первичная консультация и знакомство',
                description: 'Свяжитесь с нами по телефону +7 (916) 122-21-12, через форму на сайте или посетите школу лично. Мы расскажем о программах, ответим на ваши вопросы и назначим удобное время для экскурсии.'
              },
              {
                step: '02',
                title: 'Экскурсия по школе и встреча с педагогами',
                description: 'Вы и ваш ребенок сможете осмотреть классы, познакомиться с учителями, узнать об учебном процессе и дополнительных занятиях. Это отличная возможность оценить атмосферу школы.'
              },
              {
                step: '03',
                title: 'Бесплатный пробный день',
                description: 'Ваш ребенок может посетить занятия, познакомиться с одноклассниками и почувствовать себя частью школьного коллектива. Это помогает понять, подходит ли наша школа вашей семье.'
              },
              {
                step: '04',
                title: 'Вступительное тестирование',
                description: 'Для определения уровня знаний проводится несложное тестирование по основным предметам (математика, русский язык, чтение). Это не экзамен, а диагностика для составления индивидуального плана обучения.'
              },
              {
                step: '05',
                title: 'Подача документов и заключение договора',
                description: 'После успешного тестирования вы подаете необходимые документы (копия свидетельства о рождении, медицинская карта, личное дело). Подписываем договор, обсуждаем условия оплаты и график обучения.'
              },
              {
                step: '06',
                title: 'Добро пожаловать в «Древо Познаний»!',
                description: 'Ваш ребенок официально становится учеником нашей школы. Мы помогаем ему адаптироваться, подбираем индивидуальную программу и начинаем путь к успешному образованию.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-[#009479] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#009479] to-[#007d66] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#414141] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Необходимые документы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
                Необходимые документы для поступления
              </h2>
              <p className="text-lg text-gray-600">
                Подготовьте следующие документы для быстрого и удобного зачисления:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <ul className="space-y-4">
                {[
                  'Копия свидетельства о рождении ребенка (или паспорта для учеников старше 14 лет)',
                  'Медицинская карта формы 026/у (с актуальными прививками и заключением врача)',
                  'Личное дело из предыдущей школы (для учеников, переходящих из других учебных заведений)',
                  'Заявление от родителей или законных представителей',
                  'Копии паспортов родителей',
                  'Фотографии ребенка 3x4 (2-4 штуки)',
                  'СНИЛС ребенка (копия)'
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#009479] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-[#009479]/10 rounded-xl border border-[#009479]/20">
                <p className="text-sm text-gray-700">
                  <strong className="text-[#009479]">Примечание:</strong> Полный список документов и актуальные требования вы можете уточнить при первичной консультации. Мы поможем с оформлением и ответим на все вопросы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ секция для адмисион */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
              Часто задаваемые вопросы о поступлении
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ответы на самые популярные вопросы родителей о процессе зачисления, требованиях и условиях обучения.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {ADMISSION_FAQ.map((item, index) => (
              <details
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <summary className="cursor-pointer list-none p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#009479]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#009479] font-bold text-sm">{item.id}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#414141] pr-4 flex-1">
                      {item.question}
                    </h3>
                    <svg
                      className="w-6 h-6 text-[#009479] flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 pl-20">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#009479] to-[#007d66] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Готовы начать путь к успешному образованию?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Запишитесь на бесплатный пробный день или экскурсию по школе прямо сейчас. Мы ответим на все ваши вопросы и поможем сделать правильный выбор для будущего вашего ребенка.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto/"
              className="inline-flex items-center gap-2 bg-white text-[#009479] px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Записаться на пробный день
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+79161222112"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#009479] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Позвонить +7 (916) 122-21-12
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Полезные ссылки: <Link href="/programas/" className="underline hover:text-white">Программы обучения</Link> • <Link href="/vida-escolar/" className="underline hover:text-white">Жизнь школы</Link> • <Link href="/documentos/" className="underline hover:text-white">Документы</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
