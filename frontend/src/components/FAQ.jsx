import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

// Mock FAQ data - user will replace later
const FAQ_DATA = [
  {
    id: 1,
    question: "Учимся по четвертям или триместровая система?",
    answer: "Мы учимся по триместрам."
  },
  {
    id: 2,
    question: "Сколько учеников в классе?",
    answer: "Мы придерживаемся принципа малых групп - в наших классах обучается до 12 человек. Это позволяет преподавателям уделять максимум внимания каждому ученику, отслеживать прогресс и оперативно помогать в освоении материала."
  },
  {
    id: 3,
    question: "Предоставляете ли вы питание для учеников?",
    answer: "Да, у нас есть собственная столовая, где дети получают двухразовое питание завтрак, обед. Меню разработано с учетом возрастных потребностей и включает свежие, качественные продукты. Мы также учитываем индивидуальные особенности питания (аллергии, вегетарианство)."
  },
  {
    id: 4,
    question: "Как проходит подготовка к ЕГЭ и ОГЭ?",
    answer: "Подготовка к экзаменам начинается заранее и включает регулярные занятия по профильным предметам, пробные тестирования, разбор типовых заданий и работу над ошибками. Наши преподаватели используют проверенные методики и современные материалы. Мы также проводим психологическую подготовку к экзаменам."
  },
  {
    id: 5,
    question: "Есть ли дополнительные занятия и кружки?",
    answer: "Да, мы предлагаем широкий спектр дополнительных занятий: английский клуб, математический кружок, робототехника, шахматы, театральная студия, изобразительное искусство, кулинарную мастерскую, испанский язык, киноклуб на английском, интеллектуальный клуб, настольный теннис."
  },
  {
    id: 6,
    question: "Можно ли посетить школу перед зачислением?",
    answer: "Конечно! Мы приглашаем родителей и будущих учеников на экскурсию по школе. Вы сможете познакомиться с преподавателями, посмотреть классы, столовую и другие помещения, задать все интересующие вопросы. Для записи на экскурсию свяжитесь с нами по телефону или через форму на сайте."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>ОТВЕТЫ НА ВОПРОСЫ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Здесь вы найдете ответы на самые популярные вопросы о нашей школе
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                animation: 'fadeInUp 0.5s ease-out',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-[#009479]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#009479] font-bold text-sm">{item.id}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#414141] pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-6 h-6 text-[#009479]" />
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#414141] mb-3">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-gray-600 mb-6">
            Свяжитесь с нами, и мы с радостью ответим на все ваши вопросы
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+79161222112"
              className="inline-flex items-center gap-2 bg-[#009479] hover:bg-[#007A64] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить нам
            </a>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contacts');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#009479] border-2 border-[#009479] font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Написать нам
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
