import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Camera, Award, Users, ArrowLeft, Clock, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';

// All news data
const NEWS_CATEGORIES = [
  { id: 'all', label: 'Все', icon: null },
  { id: 'excursion', label: 'Экскурсии', icon: Camera },
  { id: 'achievement', label: 'Достижения', icon: Award },
  { id: 'event', label: 'Мероприятия', icon: Users },
];

const ALL_SCHOOL_NEWS = [
  {
    id: 1,
    title: "Экскурсия в Московский планетарий",
    date: "2026-03-25",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
    description: "Ученики 7-8 классов посетили планетарий, где познакомились с тайнами космоса и посмотрели захватывающее звездное шоу.",
    preview: "Незабываемое путешествие к звездам",
    fullContent: "В рамках образовательной программы по астрономии, наши ученики 7-8 классов совершили увлекательную экскурсию в Московский планетарий. Ребята посетили интерактивные залы, где смогли своими руками управлять космическими симуляторами, изучить строение планет Солнечной системы и узнать о последних открытиях в области космологии."
  },
  {
    id: 2,
    title: "Победа в математической олимпиаде",
    date: "2026-03-20",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&q=80",
    description: "Поздравляем наших учеников с победой в региональной математической олимпиаде! Иван Петров занял 1 место, а Мария Смирнова - 2 место.",
    preview: "Гордимся достижениями наших учеников",
    fullContent: "В региональной математической олимпиаде приняли участие более 200 школьников из разных учебных заведений. Наши ученики показали выдающиеся результаты."
  },
  {
    id: 3,
    title: "День науки в школе",
    date: "2026-03-15",
    category: "event",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    description: "В школе прошел традиционный День науки. Ученики представили свои проекты по физике, химии и биологии.",
    preview: "Наука - это увлекательно!",
    fullContent: "Традиционный День науки собрал всех учеников школы для демонстрации научных проектов и экспериментов."
  },
  {
    id: 4,
    title: "Посещение музея изобразительных искусств",
    date: "2026-03-10",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
    description: "Старшеклассники посетили Государственный музей изобразительных искусств, где познакомились с шедеврами мировой живописи.",
    preview: "Искусство развивает душу",
    fullContent: "Экскурсия в Государственный музей изобразительных искусств им. А.С. Пушкина стала настоящим культурным событием."
  },
  {
    id: 5,
    title: "Спортивные достижения",
    date: "2026-03-05",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    description: "Наша школьная команда по волейболу заняла 1 место в районных соревнованиях. Поздравляем победителей!",
    preview: "Спорт - это здоровье и победы",
    fullContent: "В напряженной борьбе наша волейбольная команда одержала победу в районных соревнованиях среди школ."
  },
  {
    id: 6,
    title: "Театральный фестиваль",
    date: "2026-02-28",
    category: "event",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    description: "Школьный театральный кружок представил постановку 'Золушка'. Зрители были в восторге от игры юных актеров!",
    preview: "Театр объединяет и вдохновляет",
    fullContent: "Школьный театральный кружок под руководством Елены Анатольевны представил замечательную постановку сказки 'Золушка'."
  }
];

const SchoolLifePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNews, setSelectedNews] = useState(null);

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Filter news by category and search
  const filteredNews = useMemo(() => {
    return ALL_SCHOOL_NEWS.filter(news => {
      const matchesCategory = activeCategory === 'all' || news.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group news by date
  const newsByDate = useMemo(() => {
    const grouped = {};
    filteredNews.forEach(news => {
      const dateKey = news.date;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(news);
    });
    return grouped;
  }, [filteredNews]);

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Navigation
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Calendar helpers
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  // Get news for a specific date
  const getNewsForDate = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return newsByDate[dateStr] || [];
  };

  // Check if date has news
  const hasNews = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return newsByDate[dateStr] && newsByDate[dateStr].length > 0;
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      excursion: 'bg-blue-500',
      achievement: 'bg-yellow-500',
      event: 'bg-purple-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      excursion: 'Экскурсия',
      achievement: 'Достижение',
      event: 'Мероприятие',
    };
    return labels[category] || category;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Create calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium transition-colors group mb-8"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Вернуться на главную
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 dark:bg-[#009479]/20 text-[#009479] dark:text-[#00BFA5] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            <span>КАЛЕНДАРЬ СОБЫТИЙ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-4">
            Жизнь школы
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Все события и достижения в календарном формате
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск по новостям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#009479] dark:focus:border-[#00BFA5] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {NEWS_CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#009479] dark:bg-[#00BFA5] text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={goToPreviousMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#414141] dark:text-white">
                {monthNames[currentMonth]} {currentYear}
              </h2>
              <button
                onClick={goToToday}
                className="text-sm text-[#009479] dark:text-[#00BFA5] hover:underline mt-1"
              >
                Сегодня
              </button>
            </div>

            <button
              onClick={goToNextMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day headers */}
            {dayNames.map(day => (
              <div key={day} className="text-center font-semibold text-gray-600 dark:text-gray-400 py-2 text-sm">
                {day}
              </div>
            ))}

            {/* Empty cells before month starts */}
            {Array.from({ length: firstDayOfMonth }, (_, i) => (
              <div key={`empty-${i}`} className="aspect-square"></div>
            ))}

            {/* Calendar days */}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const newsForDay = getNewsForDate(day);
              const hasNewsToday = newsForDay.length > 0;
              const isToday = day === new Date().getDate() && 
                             currentMonth === new Date().getMonth() && 
                             currentYear === new Date().getFullYear();

              return (
                <button
                  key={day}
                  onClick={() => hasNewsToday && setSelectedDate(day)}
                  className={`aspect-square rounded-lg p-2 transition-all duration-300 ${
                    hasNewsToday
                      ? 'bg-[#009479]/10 dark:bg-[#009479]/20 hover:bg-[#009479]/20 dark:hover:bg-[#009479]/30 cursor-pointer border-2 border-[#009479]/30 dark:border-[#00BFA5]/30'
                      : 'bg-gray-50 dark:bg-gray-700/50'
                  } ${
                    isToday ? 'ring-2 ring-[#009479] dark:ring-[#00BFA5]' : ''
                  }`}
                  disabled={!hasNewsToday}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <span className={`text-sm font-semibold ${
                      hasNewsToday 
                        ? 'text-[#009479] dark:text-[#00BFA5]' 
                        : 'text-gray-400 dark:text-gray-600'
                    }`}>
                      {day}
                    </span>
                    {hasNewsToday && (
                      <div className="flex gap-1 mt-1">
                        {newsForDay.slice(0, 3).map(news => (
                          <div
                            key={news.id}
                            className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(news.category)}`}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Легенда:</p>
            <div className="flex flex-wrap gap-4">
              {NEWS_CATEGORIES.filter(c => c.id !== 'all').map(category => (
                <div key={category.id} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getCategoryColor(category.id)}`}></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{category.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Date News Modal */}
        {selectedDate && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDate(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between z-10">
                <h3 className="text-2xl font-bold text-[#414141] dark:text-white">
                  {selectedDate} {monthNames[currentMonth]} {currentYear}
                </h3>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {getNewsForDate(selectedDate).map(news => (
                  <div
                    key={news.id}
                    onClick={() => {
                      setSelectedNews(news);
                      setSelectedDate(null);
                    }}
                    className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(news.category)} mb-2`}>
                        {getCategoryLabel(news.category)}
                      </span>
                      <h4 className="font-bold text-[#414141] dark:text-white mb-2">{news.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{news.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* News Detail Modal */}
        {selectedNews && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNews(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(selectedNews.category)} mb-4`}>
                    {getCategoryLabel(selectedNews.category)}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {selectedNews.title}
                  </h2>
                  <p className="text-white/90 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(selectedNews.date)}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {selectedNews.fullContent}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolLifePage;

// All news data - same as SchoolNews but showing ALL items
const NEWS_CATEGORIES = [
  { id: 'all', label: 'Все', icon: null },
  { id: 'excursion', label: 'Экскурсии', icon: Camera },
  { id: 'achievement', label: 'Достижения', icon: Award },
  { id: 'event', label: 'Мероприятия', icon: Users },
];

const ALL_SCHOOL_NEWS = [
  {
    id: 1,
    title: "Экскурсия в Московский планетарий",
    date: "2026-03-25",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
    description: "Ученики 7-8 классов посетили планетарий, где познакомились с тайнами космоса и посмотрели захватывающее звездное шоу.",
    preview: "Незабываемое путешествие к звездам",
    fullContent: "В рамках образовательной программы по астрономии, наши ученики 7-8 классов совершили увлекательную экскурсию в Московский планетарий. Ребята посетили интерактивные залы, где смогли своими руками управлять космическими симуляторами, изучить строение планет Солнечной системы и узнать о последних открытиях в области космологии. Кульминацией экскурсии стало посещение звездного зала с современной проекционной системой, где дети увидели реалистичное звездное небо и совершили виртуальное путешествие по галактикам."
  },
  {
    id: 2,
    title: "Победа в математической олимпиаде",
    date: "2026-03-20",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&q=80",
    description: "Поздравляем наших учеников с победой в региональной математической олимпиаде! Иван Петров занял 1 место, а Мария Смирнова - 2 место.",
    preview: "Гордимся достижениями наших учеников",
    fullContent: "В региональной математической олимпиаде приняли участие более 200 школьников из разных учебных заведений. Наши ученики показали выдающиеся результаты: Иван Петров из 10 класса занял 1 место, решив все задачи повышенной сложности, а Мария Смирнова из 9 класса получила 2 место. Подготовка к олимпиаде велась на протяжении всего учебного года под руководством опытного преподавателя математики Полины Фёдоровны."
  },
  {
    id: 3,
    title: "День науки в школе",
    date: "2026-03-15",
    category: "event",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    description: "В школе прошел традиционный День науки. Ученики представили свои проекты по физике, химии и биологии. Были проведены интересные эксперименты.",
    preview: "Наука - это увлекательно!",
    fullContent: "Традиционный День науки собрал всех учеников школы для демонстрации научных проектов и экспериментов. Каждый класс подготовил свою презентацию: младшие школьники показали простые опыты с водой и воздухом, средние классы продемонстрировали химические реакции и физические законы, а старшеклассники представили серьезные исследовательские проекты. Особенно запомнился эксперимент с жидким азотом и создание мини-вулкана. Мероприятие показало, что наука может быть не только полезной, но и невероятно увлекательной!"
  },
  {
    id: 4,
    title: "Посещение музея изобразительных искусств",
    date: "2026-03-10",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
    description: "Старшеклассники посетили Государственный музей изобразительных искусств, где познакомились с шедеврами мировой живописи.",
    preview: "Искусство развивает душу",
    fullContent: "Экскурсия в Государственный музей изобразительных искусств им. А.С. Пушкина стала настоящим культурным событием для наших старшеклассников. Под руководством профессионального экскурсовода ребята познакомились с коллекцией античного искусства, увидели работы великих мастеров эпохи Возрождения и импрессионистов. Особое внимание было уделено картинам Рембрандта, Рубенса и Моне. После экскурсии состоялось обсуждение, где ученики делились своими впечатлениями и любимыми произведениями."
  },
  {
    id: 5,
    title: "Спортивные достижения",
    date: "2026-03-05",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    description: "Наша школьная команда по волейболу заняла 1 место в районных соревнованиях. Поздравляем победителей!",
    preview: "Спорт - это здоровье и победы",
    fullContent: "В напряженной борьбе наша волейбольная команда одержала победу в районных соревнованиях среди школ. Команда состояла из учеников 9-11 классов, которые тренировались три раза в неделю на протяжении всего года. В финальном матче против сильнейшей команды района наши спортсмены показали настоящий командный дух и волю к победе, выиграв со счетом 3:1. Особо отличились капитан команды Дмитрий Соколов и либеро Анна Васильева. Поздравляем всех участников и благодарим тренера за отличную подготовку!"
  },
  {
    id: 6,
    title: "Театральный фестиваль",
    date: "2026-02-28",
    category: "event",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    description: "Школьный театральный кружок представил постановку 'Золушка'. Зрители были в восторге от игры юных актеров!",
    preview: "Театр объединяет и вдохновляет",
    fullContent: "Школьный театральный кружок под руководством Елены Анатольевны представил замечательную постановку сказки 'Золушка'. Над спектаклем работали более 30 учеников: актеры, декораторы, костюмеры и технический персонал. Премьера состоялась в актовом зале школы перед полным залом родителей и учеников. Юные актеры продемонстрировали отличную подготовку, яркие костюмы и декорации создали сказочную атмосферу. Спектакль сопровождался живой музыкой в исполнении школьного оркестра. Зрители наградили артистов бурными аплодисментами и стоячей овацией!"
  }
];

const SchoolLifePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedNews, setSelectedNews] = useState(null);

  const filteredNews = activeCategory === 'all' 
    ? ALL_SCHOOL_NEWS 
    : ALL_SCHOOL_NEWS.filter(news => news.category === activeCategory);

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
      excursion: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      achievement: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      event: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
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

  // Sort news by date (newest first)
  const sortedNews = [...filteredNews].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium transition-colors group mb-8"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Вернуться на главную
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 dark:bg-[#009479]/20 text-[#009479] dark:text-[#00BFA5] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            <span>ИСТОРИЯ ШКОЛЫ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-4">
            Жизнь школы
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Все события, достижения и памятные моменты из жизни нашей школы
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
                    ? 'bg-[#009479] dark:bg-[#00BFA5] text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedNews.map((newsItem, index) => (
            <article
              key={newsItem.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedNews(newsItem)}
              style={{ 
                animation: 'fadeInUp 0.6s ease-out',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
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
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center gap-2 text-[#414141] dark:text-white">
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
                <h3 className="text-xl font-bold text-[#414141] dark:text-white mb-3 group-hover:text-[#009479] dark:group-hover:text-[#00BFA5] transition-colors duration-300">
                  {newsItem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {newsItem.description}
                </p>
                
                {/* Date Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(newsItem.date)}
                  </span>
                  <span className="text-[#009479] dark:text-[#00BFA5] font-medium text-sm">
                    Читать далее →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No results */}
        {sortedNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Нет новостей в этой категории
            </p>
          </div>
        )}
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scaleIn 0.3s ease-out' }}
          >
            {/* Image */}
            <div className="relative h-96 overflow-hidden rounded-t-2xl">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Close button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                ✕
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(selectedNews.category)} mb-4`}>
                  {getCategoryLabel(selectedNews.category)}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {selectedNews.title}
                </h2>
                <p className="text-white/90 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(selectedNews.date)}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {selectedNews.fullContent}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolLifePage;
