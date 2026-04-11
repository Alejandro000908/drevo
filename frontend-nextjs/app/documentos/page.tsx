import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { generateBreadcrumbSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText, Download, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Документы частной школы «Древо Познаний» — лицензия, устав, правила в Раменском',
  description: 'Официальные документы частной школы Раменское: лицензия на образовательную деятельность, устав, правила внутреннего распорядка, договор обучения. Прозрачность и открытость для родителей.',
  keywords: [
    'документы школы Раменское',
    'лицензия частной школы',
    'устав школы',
    'правила школы',
    'договор обучения',
    'информация для родителей',
  ],
  openGraph: {
    title: 'Документы и лицензии | Древо Познаний',
    description: 'Лицензия, устав, правила и договор обучения. Полная прозрачность для родителей.',
    url: `${siteConfig.url}/documentos/`,
  },
  alternates: {
    canonical: `${siteConfig.url}/documentos/`,
  },
}

export default function DocumentsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Документы', url: '/documentos' },
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
              <span>Документы</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-6">
              Документы частной школы «Древо Познаний»
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              Официальные документы, лицензии и правила нашей школы в Раменском. Мы работаем абсолютно прозрачно и открыто предоставляем всю необходимую информацию для родителей
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="prose prose-lg max-w-none dark:prose-invert mb-16">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Частная школа «Древо Познаний» осуществляет образовательную деятельность на основании действующей лицензии и в полном соответствии с законодательством Российской Федерации в области образования. Мы придерживаемся принципов открытости и прозрачности, поэтому все ключевые документы школы доступны для ознакомления родителям наших учеников и всем заинтересованным лицам.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                На этой странице вы найдёте информацию об основных документах, регулирующих деятельность нашей частной школы в Раменском. Если у вас возникнут вопросы или вам потребуются дополнительные документы, вы всегда можете обратиться в администрацию школы. Мы готовы предоставить любую интересующую вас информацию о нашей образовательной организации.
              </p>
            </div>

            {/* Documents Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Лицензия */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border-2 border-[#009479] hover:shadow-2xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-2">
                      Лицензия на образовательную деятельность
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Документ подтверждает право школы на ведение образовательной деятельности</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Частная школа «Древо Познаний» имеет бессрочную лицензию на право осуществления образовательной деятельности по программам начального общего, основного общего и среднего общего образования, выданную Министерством образования Московской области.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Наличие лицензии гарантирует, что образовательный процесс в школе соответствует федеральным государственным образовательным стандартам, а наши выпускники получают документы государственного образца.
                </p>
                <Link
                  href="/#contacts"
                  className="inline-flex items-center text-[#009479] hover:text-[#007A64] font-semibold transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Запросить копию документа
                </Link>
              </div>

              {/* Устав */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-2">
                      Устав школы
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Основной документ, определяющий деятельность организации</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Устав частной школы «Древо Познаний» определяет правовой статус образовательного учреждения, цели и виды деятельности, организационную структуру, права и обязанности участников образовательного процесса, порядок управления школой и другие важные аспекты функционирования организации.
                </p>
                <Link
                  href="/#contacts"
                  className="inline-flex items-center text-[#009479] hover:text-[#007A64] font-semibold transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Ознакомиться с уставом
                </Link>
              </div>

              {/* Правила внутреннего распорядка */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-2">
                      Правила внутреннего распорядка
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Регламентируют режим работы и поведение в школе</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Правила внутреннего распорядка устанавливают режим занятий учащихся, порядок пребывания в школе, права и обязанности учеников, требования к внешнему виду, правила поведения на уроках и переменах. Документ помогает поддерживать дисциплину и создавать комфортную образовательную среду для всех участников процесса.
                </p>
                <Link
                  href="/#contacts"
                  className="inline-flex items-center text-[#009479] hover:text-[#007A64] font-semibold transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Получить правила
                </Link>
              </div>

              {/* Договор об образовании */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#414141] dark:text-white mb-2">
                      Договор об оказании образовательных услуг
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Типовой договор между школой и родителями</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Договор об оказании платных образовательных услуг заключается между школой и родителями (законными представителями) ученика при зачислении в школу. В договоре указываются права и обязанности сторон, стоимость обучения, порядок оплаты, условия расторжения договора и другие важные условия.
                </p>
                <Link
                  href="/admision"
                  className="inline-flex items-center text-[#009479] hover:text-[#007A64] font-semibold transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Ознакомиться при поступлении
                </Link>
              </div>
            </div>

            {/* Transparency Section */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-12 mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#414141] dark:text-white">
                Открытость и доступность информации
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Мы понимаем, как важно для родителей иметь полную информацию о школе, в которую они доверяют обучение своих детей. Поэтому частная школа «Древо Познаний» придерживается политики максимальной открытости и прозрачности. Все ключевые документы доступны для ознакомления, а администрация школы всегда готова ответить на ваши вопросы.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="font-semibold text-lg text-[#414141] dark:text-white mb-2">Лицензирование</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Все лицензии и разрешения в наличии</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="font-semibold text-lg text-[#414141] dark:text-white mb-2">Соответствие ФГОС</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Программы соответствуют стандартам</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="font-semibold text-lg text-[#414141] dark:text-white mb-2">Прозрачность</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Открытость для родителей</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Остались вопросы о документах школы?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Свяжитесь с нами для получения дополнительной информации
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contacts"
                  className="inline-block bg-white text-[#009479] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Связаться с администрацией
                </Link>
                <Link
                  href="/admision"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Подать заявку на обучение
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#414141] dark:text-white">
              Часто задаваемые вопросы о документах
            </h2>

            <div className="space-y-6">
              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Как получить копии документов школы?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Копии уставных и других документов школы можно получить, обратившись в администрацию лично, по телефону {siteConfig.contact.phone} или по электронной почте {siteConfig.contact.email}. Мы предоставим вам необходимые документы в электронном виде или в виде заверенных копий.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Имеет ли школа право выдавать аттестаты государственного образца?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Да, наша школа имеет лицензию на право ведения образовательной деятельности и выдаёт выпускникам аттестаты государственного образца об основном общем образовании (после 9 класса) и среднем общем образовании (после 11 класса). Эти документы признаются всеми российскими и международными образовательными учреждениями.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Какие документы нужны для заключения договора?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Для заключения договора об оказании образовательных услуг потребуются: паспорт родителя (законного представителя), свидетельство о рождении ребёнка, медицинская карта, личное дело (при переводе из другой школы). Подробный список документов для поступления вы можете найти на странице <Link href="/admision" className="text-[#009479] hover:underline">«Поступление»</Link>.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-lg text-[#414141] dark:text-white cursor-pointer">
                  Можно ли ознакомиться с документами до заключения договора?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Конечно! Мы рекомендуем всем родителям ознакомиться с уставом школы, правилами внутреннего распорядка и типовым договором ещё до принятия решения о зачислении ребёнка. Это поможет вам лучше понять принципы работы школы и избежать недопонимания в будущем.
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
