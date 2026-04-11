import type { Metadata } from 'next'
import Contacts from '@/components/Contacts'

export const metadata: Metadata = {
  title: 'Контакты частной школы «Древо Познаний» | Связаться с нами в Раменском',
  description: 'Свяжитесь с частной школой «Древо Познаний» в Раменском. Адрес: Красноармейская 105. Телефон: +7 (916) 122-21-12. Запишитесь на пробный день или задайте вопросы через форму обратной связи.',
  keywords: 'контакты школы Раменское, телефон частной школы, адрес школы Древо Познаний, как связаться со школой, запись в школу Раменское, форма обратной связи школа',
  openGraph: {
    title: 'Контакты частной школы «Древо Познаний»',
    description: 'Свяжитесь с нами: адрес, телефон, форма обратной связи. Запишитесь на пробный день.',
    url: 'https://drevoznanii.ru/contacto/',
    type: 'website',
  },
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#009479] via-[#007d66] to-[#414141] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Мы всегда рады ответить на ваши вопросы о поступлении, программах обучения и условиях. Запишитесь на бесплатный пробный день или экскурсию по школе.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts Component */}
      <Contacts />

      {/* Дополнительная информация */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#414141] mb-6">
              Как до нас добраться
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Частная школа «Древо Познаний» находится в городе Раменское, Московская область, по адресу: <strong>Красноармейская улица, дом 105</strong>. Мы расположены в удобном месте с хорошей транспортной доступностью.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-[#414141] mb-3">🚗 На автомобиле</h3>
                <p className="text-gray-600">
                  Из Москвы: по Новорязанскому шоссе (M5) до города Раменское, затем следуйте указателям до улицы Красноармейская. Парковка доступна на территории школы.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-[#414141] mb-3">🚆 Общественным транспортом</h3>
                <p className="text-gray-600">
                  От станции метро «Котельники» или «Выхино» на автобусе или маршрутке до остановки в Раменском. Далее пешком или на такси до школы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* График работы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#009479] to-[#007d66] text-white p-8 rounded-2xl shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4">График работы</h2>
            <p className="text-xl mb-2">Понедельник - Пятница: с 8:30 до 20:00</p>
            <p className="text-white/80 text-sm">
              Выходные дни: суббота и воскресенье (по предварительной записи возможны индивидуальные встречи)
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
