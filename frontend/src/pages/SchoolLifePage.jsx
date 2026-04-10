import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Camera, Award, Users, ArrowLeft, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';

// News Categories
const NEWS_CATEGORIES = [
  { id: 'all', label: 'Все', icon: null },
  { id: 'excursion', label: 'Экскурсии', icon: Camera },
  { id: 'achievement', label: 'Достижения', icon: Award },
  { id: 'event', label: 'Мероприятия', icon: Users },
];

// All School News Data
const ALL_SCHOOL_NEWS = [
  {
    id: 1,
    title: "Золотые значки ГТО",
    date: "2026-05-09",
    category: "achievement",
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/0482pkat_5384152023265122379.jpg",
    description: "Ученики 11 класса успешно прошли испытания Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне», завоевав золотые значки ГТО. Данная награда дает преимущества в виде дополнительных баллов при поступлении в университет, а также повышенную государственную академическую стипендию для студентов. Поздравляем!",
    preview: "Гордимся спортивными достижениями наших выпускников",
    fullContent: "Ученики 11 класса успешно прошли испытания Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне» (ГТО), завоевав золотые значки. Комплекс ГТО включает в себя испытания по бегу, прыжкам, силовым упражнениям и другим видам физической активности. Все наши выпускники показали отличные результаты и получили заслуженные золотые значки. Данная награда дает значительные преимущества: дополнительные баллы при поступлении в университет (до 10 баллов к сумме ЕГЭ) и право на повышенную государственную академическую стипендию для студентов. Мы гордимся спортивными достижениями наших учеников и желаем им успехов в дальнейшем обучении!"
  },
  {
    id: 2,
    title: "Экскурсия в Московский планетарий",
    date: "2026-03-25",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
    description: "Ученики 7-8 классов посетили планетарий, где познакомились с тайнами космоса и посмотрели захватывающее звездное шоу.",
    preview: "Незабываемое путешествие к звездам",
    fullContent: "В рамках образовательной программы по астрономии, наши ученики 7-8 классов совершили увлекательную экскурсию в Московский планетарий. Ребята посетили интерактивные залы, где смогли своими руками управлять космическими симуляторами, изучить строение планет Солнечной системы и узнать о последних открытиях в области космологии. Кульминацией экскурсии стало посещение звездного зала с современной проекционной системой, где дети увидели реалистичное звездное небо и совершили виртуальное путешествие по галактикам."
  },
  {
    id: 3,
    title: "Победа в математической олимпиаде",
    date: "2026-03-20",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&q=80",
    description: "Поздравляем наших учеников с победой в региональной математической олимпиаде! Иван Петров занял 1 место, а Мария Смирнова - 2 место.",
    preview: "Гордимся достижениями наших учеников",
    fullContent: "В региональной математической олимпиаде приняли участие более 200 школьников из разных учебных заведений. Наши ученики показали выдающиеся результаты: Иван Петров из 10 класса занял 1 место, решив все задачи повышенной сложности, а Мария Смирнова из 9 класса получила 2 место. Подготовка к олимпиаде велась на протяжении всего учебного года под руководством опытного преподавателя математики Полины Фёдоровны."
  },
  {
    id: 4,
    title: "День науки в школе",
    date: "2026-03-15",
    category: "event",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    description: "В школе прошел традиционный День науки. Ученики представили свои проекты по физике, химии и биологии.",
    preview: "Наука - это увлекательно!",
    fullContent: "Традиционный День науки собрал всех учеников школы для демонстрации научных проектов и экспериментов. Каждый класс подготовил свою презентацию: младшие школьники показали простые опыты с водой и воздухом, средние классы продемонстрировали химические реакции и физические законы, а старшеклассники представили серьезные исследовательские проекты. Особенно запомнился эксперимент с жидким азотом и создание мини-вулкана. Мероприятие показало, что наука может быть не только полезной, но и невероятно увлекательной!"
  },
  {
    id: 5,
    title: "Посещение музея изобразительных искусств",
    date: "2026-03-10",
    category: "excursion",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
    description: "Старшеклассники посетили Государственный музей изобразительных искусств, где познакомились с шедеврами мировой живописи.",
    preview: "Искусство развивает душу",
    fullContent: "Экскурсия в Государственный музей изобразительных искусств им. А.С. Пушкина стала настоящим культурным событием для наших старшеклассников. Под руководством профессионального экскурсовода ребята познакомились с коллекцией античного искусства, увидели работы великих мастеров эпохи Возрождения и импрессионистов. Особое внимание было уделено картинам Рембрандта, Рубенса и Моне. После экскурсии состоялось обсуждение, где ученики делились своими впечатлениями и любимыми произведениями."
  },
  {
    id: 6,
    title: "Спортивные достижения",
    date: "2026-03-05",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    description: "Наша школьная команда по волейболу заняла 1 место в районных соревнованиях. Поздравляем победителей!",
    preview: "Спорт - это здоровье и победы",
    fullContent: "В напряженной борьбе наша волейбольная команда одержала победу в районных соревнованиях среди школ. Команда состояла из учеников 9-11 классов, которые тренировались три раза в неделю на протяжении всего года. В финальном матче против сильнейшей команды района наши спортсмены показали настоящий командный дух и волю к победе, выиграв со счетом 3:1. Особо отличились капитан команды Дмитрий Соколов и либеро Анна Васильева. Поздравляем всех участников и благодарим тренера за отличную подготовку!"
  },
  {
    id: 7,
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

  // Calendar helpers
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convert to Monday-start (0=Mon, 6=Sun)
  };

  // Navigation
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    setSelectedDate(null);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(null);
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  // Get news for a specific date
  const getNewsForDate = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return newsByDate[dateStr] || [];
  };

  // Check if date has news
  const hasNews = (day) => {
    const newsForDay = getNewsForDate(day);
    return newsForDay.length > 0;
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Back Button with animation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium transition-all duration-300 group mb-8 hover:gap-3"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Вернуться на главную
        </Link>

        {/* Header with 3D effect */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 dark:bg-[#009479]/20 text-[#009479] dark:text-[#00BFA5] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Calendar className="w-4 h-4" />
            <span>КАЛЕНДАРЬ СОБЫТИЙ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-4 hover:scale-105 transition-transform duration-300">
            Жизнь школы
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Все события и достижения в календарном формате
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar with 3D effect */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#009479]/20 to-[#00BFA5]/20 rounded-full blur-xl opacity-50"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по новостям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#009479] dark:focus:border-[#00BFA5] focus:outline-none focus:ring-4 focus:ring-[#009479]/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filters with 3D hover effects */}
          <div className="flex flex-wrap justify-center gap-3">
            {NEWS_CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-110 ${
                    activeCategory === category.id
                      ? 'bg-[#009479] dark:bg-[#00BFA5] text-white shadow-lg shadow-[#009479]/50 scale-105 hover:shadow-2xl'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-xl'
                  }`}
                  style={{
                    transform: activeCategory === category.id ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Calendar Card with 3D effect */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mb-8 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-[#009479]/20">
          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={goToPreviousMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#414141] dark:text-white transition-all duration-300 hover:text-[#009479] dark:hover:text-[#00BFA5]">
                {monthNames[currentMonth]} {currentYear}
              </h2>
              <button
                onClick={goToToday}
                className="text-sm text-[#009479] dark:text-[#00BFA5] hover:underline mt-1 transition-all duration-300 hover:scale-105"
              >
                Сегодня
              </button>
            </div>

            <button
              onClick={goToNextMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
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

            {/* Calendar days with animations */}
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
                  disabled={!hasNewsToday}
                  className={`aspect-square rounded-lg p-2 transition-all duration-300 transform ${
                    hasNewsToday
                      ? 'bg-gradient-to-br from-[#009479]/10 to-[#00BFA5]/20 dark:from-[#009479]/20 dark:to-[#00BFA5]/30 hover:from-[#009479]/20 hover:to-[#00BFA5]/30 dark:hover:from-[#009479]/30 dark:hover:to-[#00BFA5]/40 cursor-pointer border-2 border-[#009479]/30 dark:border-[#00BFA5]/30 hover:border-[#009479] dark:hover:border-[#00BFA5] hover:scale-110 hover:shadow-lg hover:shadow-[#009479]/30 active:scale-95'
                      : 'bg-gray-50 dark:bg-gray-700/50 cursor-not-allowed'
                  } ${
                    isToday ? 'ring-2 ring-[#009479] dark:ring-[#00BFA5] ring-offset-2 shadow-lg' : ''
                  }`}
                  style={{
                    animationDelay: `${(i + firstDayOfMonth) * 20}ms`
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <span className={`text-sm font-semibold transition-all duration-300 ${
                      hasNewsToday 
                        ? 'text-[#009479] dark:text-[#00BFA5]' 
                        : 'text-gray-400 dark:text-gray-600'
                    }`}>
                      {day}
                    </span>
                    {hasNewsToday && (
                      <div className="flex gap-0.5 mt-1">
                        {newsForDay.slice(0, 3).map((news, idx) => (
                          <div
                            key={news.id}
                            className={`w-2 h-2 rounded-full ${getCategoryColor(news.category)} shadow-md animate-pulse`}
                            style={{
                              animationDelay: `${idx * 200}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Legend with hover effects */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Легенда:</p>
            <div className="flex flex-wrap gap-4">
              {NEWS_CATEGORIES.filter(c => c.id !== 'all').map(category => (
                <div key={category.id} className="flex items-center gap-2 transition-all duration-300 hover:scale-110">
                  <div className={`w-3 h-3 rounded-full ${getCategoryColor(category.id)} shadow-sm animate-pulse`}></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{category.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Date News Modal */}
        {selectedDate && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedDate(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between z-10 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
                <h3 className="text-2xl font-bold text-[#414141] dark:text-white">
                  {selectedDate} {monthNames[currentMonth]} {currentYear}
                </h3>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {getNewsForDate(selectedDate).map((news, idx) => (
                  <div
                    key={news.id}
                    onClick={() => {
                      setSelectedNews(news);
                      setSelectedDate(null);
                    }}
                    className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg"
                    style={{
                      animationDelay: `${idx * 100}ms`
                    }}
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="flex-1">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(news.category)} mb-2 shadow-sm`}>
                        {getCategoryLabel(news.category)}
                      </span>
                      <h4 className="font-bold text-[#414141] dark:text-white mb-2 hover:text-[#009479] dark:hover:text-[#00BFA5] transition-colors">{news.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{news.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* News Detail Modal with 3D effects */}
        {selectedNews && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedNews(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(selectedNews.category)} mb-4 shadow-lg hover:scale-105 transition-transform`}>
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SchoolLifePage;
