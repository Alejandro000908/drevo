import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Camera, Award, Users, ChevronRight, Clock, ArrowRight } from 'lucide-react';

// Mock data - esto se puede conectar con MongoDB después
const NEWS_CATEGORIES = [
  { id: 'all', label: 'Все', icon: null },
  { id: 'excursion', label: 'Экскурсии', icon: Camera },
  { id: 'achievement', label: 'Достижения', icon: Award },
  { id: 'event', label: 'Мероприятия', icon: Users },
];

const SCHOOL_NEWS = [
  {
    id: 1,
    title: "Золотые значки ГТО",
    date: "2026-05-09",
    category: "achievement",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/0482pkat_5384152023265122379.jpg",
    description: "Ученики 11 класса успешно прошли испытания Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне», завоевав золотые значки ГТО. Данная награда дает преимущества в виде дополнительных баллов при поступлении в университет, а также повышенную государственную академическую стипендию для студентов. Поздравляем!",
    preview: "Гордимся спортивными достижениями наших выпускников"
  },
  {
    id: 2,
    title: "Экскурсия в Московский планетарий",
    date: "2026-03-25",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
    description: "Ученики 7-8 классов посетили планетарий, где познакомились с тайнами космоса и посмотрели захватывающее звездное шоу.",
    preview: "Незабываемое путешествие к звездам"
  },
  {
    id: 3,
    title: "Победа в математической олимпиаде",
    date: "2026-03-20",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&q=80",
    description: "Поздравляем наших учеников с победой в региональной математической олимпиаде! Иван Петров занял 1 место, а Мария Смирнова - 2 место.",
    preview: "Гордимся достижениями наших учеников"
  },
  {
    id: 4,
    title: "День науки в школе",
    date: "2026-03-15",
    category: "event",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    description: "В школе прошел традиционный День науки. Ученики представили свои проекты по физике, химии и биологии. Были проведены интересные эксперименты.",
    preview: "Наука - это увлекательно!"
  },
  {
    id: 5,
    title: "Посещение музея изобразительных искусств",
    date: "2026-03-10",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
    description: "Старшеклассники посетили Государственный музей изобразительных искусств, где познакомились с шедеврами мировой живописи.",
    preview: "Искусство развивает душу"
  },
  {
    id: 6,
    title: "Спортивные достижения",
    date: "2026-03-05",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    description: "Наша школьная команда по волейболу заняла 1 место в районных соревнованиях. Поздравляем победителей!",
    preview: "Спорт - это здоровье и победы"
  },
  {
    id: 7,
    title: "Театральный фестиваль",
    date: "2026-02-28",
    category: "event",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    description: "Школьный театральный кружок представил постановку 'Золушка'. Зрители были в восторге от игры юных актеров!",
    preview: "Театр объединяет и вдохновляет"
  },
  {
    id: 8,
    title: "Экскурсия в Третьяковскую галерею",
    date: "2026-04-08",
    category: "excursion",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/m52uu4z4_1%20%282%29.jpg",
    description: "Ученики 2 класса посетили знаменитую Третьяковскую галерею, где познакомились с шедеврами русской живописи и узнали о великих художниках.",
    preview: "Знакомство с сокровищами русского искусства"
  },
  {
    id: 9,
    title: "Экскурсия на съёмочные площадки",
    date: "2026-04-09",
    category: "excursion",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/5buiqpwh_2%20%282%29.jpg",
    description: "Ученики 8 класса посетили настоящие съёмочные площадки, где узнали о профессиях кино и телевидения и увидели процесс создания фильмов изнутри.",
    preview: "За кулисами киноиндустрии"
  },
  {
    id: 10,
    title: "Празднование 8 марта и 23 февраля",
    date: "2026-03-09",
    category: "event",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/va4jqj30_3%20%282%29.jpg",
    description: "В школе прошли праздничные мероприятия, посвящённые Международному женскому дню и Дню защитника Отечества. Ученики подготовили концерт и поздравления.",
    preview: "Весенние праздники в нашей школе"
  },
  {
    id: 11,
    title: "Кулинарная мастерская 6 и 7 класс",
    date: "2026-04-10",
    category: "event",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/ukgz455v_4%20%282%29.jpg",
    description: "Ученики 6 и 7 классов приняли участие в кулинарной мастерской, где научились готовить вкусные и полезные блюда под руководством профессионального повара.",
    preview: "Учимся готовить с удовольствием"
  },
  {
    id: 12,
    title: "Экскурсия в Сказочный Град Томилино",
    date: "2026-02-23",
    category: "excursion",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/xl7qaxkx_5.jpg",
    description: "Ученики 1 класса совершили волшебную поездку в Сказочный Град Томилино, где встретились с любимыми сказочными героями и приняли участие в интерактивных играх.",
    preview: "Путешествие в мир сказки"
  },
  {
    id: 13,
    title: "Творческая мастерская: Миниатюра",
    date: "2026-04-01",
    category: "achievement",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/6rotccl3_1%20%283%29.jpg",
    description: "На занятиях «Творческой мастерской» учащиеся 3-го и 4-го классов объединились для совместного творчества, представив свою работу под названием «Миниатюра».",
    preview: "Совместное творчество младших школьников"
  },
  {
    id: 14,
    title: "Макраме: Искусство плетения",
    date: "2026-04-02",
    category: "achievement",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/x9oh2ilz_2%20%283%29.jpg",
    description: "Макраме — это не просто плетение, а настоящее медитативное искусство, не требующее инструментов. Оно развивает мелкую моторику, логическое мышление, внимание и даже включает элементы математики. На занятиях ребята создают стильные подсвечники, используя «плоский» узел.",
    preview: "Медитативное искусство развивает мышление"
  }
];

const SchoolNews = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Sort all news by date first (newest first)
  const sortedNews = [...SCHOOL_NEWS].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filter by category if not 'all'
  const filteredNews = activeCategory === 'all' 
    ? sortedNews 
    : sortedNews.filter(news => news.category === activeCategory);

  // Show only latest 6 news
  const displayedNews = filteredNews.slice(0, 6);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      excursion: 'bg-blue-100 text-blue-700',
      achievement: 'bg-yellow-100 text-yellow-700',
      event: 'bg-purple-100 text-purple-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      excursion: 'Экскурсия',
      achievement: 'Достижение',
      event: 'Мероприятие',
    };
    return labels[category] || category;
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            <span>ШКОЛЬНАЯ ЖИЗНЬ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
            Новости и события
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Следите за нашими достижениями, мероприятиями и интересными событиями из жизни школы
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {NEWS_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#009479] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedNews.map((newsItem, index) => (
            <Link
              key={newsItem.id}
              to="/school-life"
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(newsItem.category)}`}>
                    {getCategoryLabel(newsItem.category)}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center gap-2 text-[#414141]">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold">
                      {new Date(newsItem.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>

                {/* Preview text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium italic">
                    {newsItem.preview}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#414141] mb-3 group-hover:text-[#009479] transition-colors duration-300">
                  {newsItem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {newsItem.description}
                </p>
                
                {/* Date Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(newsItem.date)}
                  </span>
                  <span className="text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium text-sm flex items-center gap-1 transition-colors">
                    Подробнее
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/school-life"
            className="inline-flex items-center gap-2 bg-[#009479] hover:bg-[#007A64] dark:bg-[#00BFA5] dark:hover:bg-[#009479] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Смотреть все новости
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#009479] to-[#007A64] rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Оставайтесь в курсе всех событий!</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Подписывайтесь на наши социальные сети и не пропускайте интересные новости и фотографии из жизни школы
          </p>
          <div className="flex justify-center gap-4">
            {/* VK */}
            <a
              href="https://vk.com/drevopoznaniy_ramenskoe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0077FF] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.53h-1.48c-.63 0-.82-.5-1.96-1.64-.98-.98-1.42-1.12-1.67-1.12-.34 0-.44.1-.44.58v1.5c0 .4-.13.65-1.18.65-1.75 0-3.69-.97-5.04-2.77-2.03-2.61-2.59-4.57-2.59-4.97 0-.25.1-.48.58-.48h1.48c.43 0 .6.2.76.65.85 2.35 2.28 4.41 2.87 4.41.22 0 .32-.1.32-.66v-2.56c-.07-1.13-.66-1.22-.66-1.62 0-.2.17-.4.43-.4h2.33c.36 0 .5.2.5.62v3.46c0 .36.16.5.27.5.22 0 .4-.14.82-.56 1.26-1.42 2.17-3.61 2.17-3.61.12-.25.32-.48.76-.48h1.48c.53 0 .65.27.53.62-.18.85-1.85 3.51-1.85 3.51-.19.3-.26.44 0 .77.19.25.82.8 1.24 1.29.77.88 1.36 1.62 1.52 2.13.15.52-.08.78-.61.78z"/>
              </svg>
              VK
            </a>
            
            {/* Telegram */}
            <a
              href="https://t.me/Drevopoznaniy_ramenskoe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0088cc] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              Telegram
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/drevopoznaniy_ramenskoe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolNews;
