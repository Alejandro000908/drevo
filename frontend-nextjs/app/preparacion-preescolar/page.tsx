import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Подготовка к школе в Раменском — курсы для дошкольников | Древо Познаний',
  description: 'Подготовка детей к школе в Раменском. Комплексные программы для дошкольников 5-7 лет: обучение чтению, математике, развитие речи. Опытные педагоги, игровые методики.',
  keywords: ['подготовка к школе Раменское', 'курсы для дошкольников', 'подготовка детей 6 лет', 'дошкольное образование'],
  alternates: { canonical: `${siteConfig.url}/preparacion-preescolar/` },
}

export default function PreschoolPrepPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-6">
              Подготовка к школе в Раменском для детей 5-7 лет
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Комплексная программа подготовки дошкольников к успешному обучению в начальной школе
            </p>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Подготовка к школе в частной школе «Древо Познаний» — это не просто обучение чтению и счёту. Мы формируем у дошкольников комплекс навыков, необходимых для успешной адаптации к школьной жизни: внимание, память, логическое мышление, усидчивость и самостоятельность. Наши курсы для детей в Раменском проводят опытные педагоги начальных классов, которые знают, как подготовить ребёнка к первому классу без стресса и перегрузок.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#009479]">Обучение грамоте</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Изучение букв и звуков</li>
                  <li>✓ Обучение чтению по слогам</li>
                  <li>✓ Развитие фонематического слуха</li>
                  <li>✓ Подготовка руки к письму</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#009479]">Математика</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Счёт в пределах 20</li>
                  <li>✓ Состав числа</li>
                  <li>✓ Решение простых задач</li>
                  <li>✓ Логические игры</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#009479]">Развитие речи</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Расширение словарного запаса</li>
                  <li>✓ Пересказ и составление рассказов</li>
                  <li>✓ Развитие связной речи</li>
                  <li>✓ Артикуляционная гимнастика</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Записаться на подготовительные курсы</h2>
              <p className="text-xl mb-6 opacity-90">Первое пробное занятие — бесплатно</p>
              <Link href="/#contacts" className="inline-block bg-white text-[#009479] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Записаться на курсы
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#414141] dark:text-white">Частые вопросы о подготовке к школе</h2>
            <div className="space-y-6">
              <details className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <summary className="font-semibold text-lg cursor-pointer">С какого возраста можно начинать подготовку?</summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300">Оптимальный возраст для начала подготовки к школе — 5-6 лет. В этом возрасте дети уже готовы к систематическим занятиям, но при этом обучение проходит в игровой форме без перегрузок.</p>
              </details>
              <details className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <summary className="font-semibold text-lg cursor-pointer">Сколько длятся занятия?</summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300">Занятия проходят 2-3 раза в неделю по 60 минут. Это оптимальная продолжительность для дошкольников, которая позволяет усваивать материал без переутомления.</p>
              </details>
              <details className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <summary className="font-semibold text-lg cursor-pointer">Нужно ли покупать учебные материалы?</summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300">Нет, все учебные пособия, рабочие тетради и материалы для занятий предоставляются школой и включены в стоимость курса.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
