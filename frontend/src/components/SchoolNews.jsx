import React, { useState } from 'react';
import { Calendar, Camera, Award, Users, ChevronRight, Clock } from 'lucide-react';

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
    title: "Экскурсия в Московский планетарий",
    date: "2026-03-25",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
    description: "Ученики 7-8 классов посетили планетарий, где познакомились с тайнами космоса и посмотрели захватывающее звездное шоу.",
    preview: "Незабываемое путешествие к звездам"
  },
  {
    id: 2,
    title: "Победа в математической олимпиаде",
    date: "2026-03-20",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&q=80",
    description: "Поздравляем наших учеников с победой в региональной математической олимпиаде! Иван Петров занял 1 место, а Мария Смирнова - 2 место.",
    preview: "Гордимся достижениями наших учеников"
  },
  {
    id: 3,
    title: "День науки в школе",
    date: "2026-03-15",
    category: "event",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    description: "В школе прошел традиционный День науки. Ученики представили свои проекты по физике, химии и биологии. Были проведены интересные эксперименты.",
    preview: "Наука - это увлекательно!"
  },
  {
    id: 4,
    title: "Посещение музея изобразительных искусств",
    date: "2026-03-10",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
    description: "Старшеклассники посетили Государственный музей изобразительных искусств, где познакомились с шедеврами мировой живописи.",
    preview: "Искусство развивает душу"
  },
  {
    id: 5,
    title: "Спортивные достижения",
    date: "2026-03-05",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    description: "Наша школьная команда по волейболу заняла 1 место в районных соревнованиях. Поздравляем победителей!",
    preview: "Спорт - это здоровье и победы"
  },
  {
    id: 6,
    title: "Театральный фестиваль",
    date: "2026-02-28",
    category: "event",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    description: "Школьный театральный кружок представил постановку 'Золушка'. Зрители были в восторге от игры юных актеров!",
    preview: "Театр объединяет и вдохновляет"
  }
];

const SchoolNews = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleNews, setVisibleNews] = useState(6);

  const filteredNews = activeCategory === 'all' 
    ? SCHOOL_NEWS 
    : SCHOOL_NEWS.filter(news => news.category === activeCategory);

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
          {filteredNews.slice(0, visibleNews).map((newsItem, index) => (
            <article
              key={newsItem.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(newsItem.date)}
                  </span>
                  <button className="text-[#009479] hover:text-[#007A64] font-medium text-sm flex items-center gap-1 transition-colors">
                    Подробнее
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredNews.length > visibleNews && (
          <div className="text-center">
            <button
              onClick={() => setVisibleNews(prev => prev + 3)}
              className="inline-flex items-center gap-2 bg-[#009479] hover:bg-[#007A64] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Показать больше
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#009479] to-[#007A64] rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Хотите быть в курсе всех событий?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Подписывайтесь на наши социальные сети и не пропускайте интересные новости и фотографии из жизни школы
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://vk.com/drevopoznaniy_ramenskoe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#009479] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              VK
            </a>
            <a
              href="https://t.me/Drevopoznaniy_ramenskoe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#009479] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolNews;
