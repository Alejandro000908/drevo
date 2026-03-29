# Проект: Сайт частной школы «Древо Познаний»

## Оригинальное техническое задание

Разработка многостраничного адаптивного landing page для частной школы с подготовкой к ЕГЭ/ОГЭ.

### Основные требования:
- Полностраничный responsive layout с вертикальными секциями
- Фиксированная верхняя навигация с плавной прокруткой
- Разделы: Hero, О школе, Преимущества, Курсы, Результаты, Преподаватели, Отзывы, Контакты, Footer
- Цветовая схема: Primary #0E2A47 (темно-синий), Accent #F6A500 (теплое золото)
- Типографика: Montserrat для заголовков, Inter для основного текста
- Интерактивные элементы: плавная прокрутка, hover-анимации, карусель отзывов, анимированные счетчики
- Контактная форма с валидацией
- Интеграция карт (Yandex Maps)

## Архитектура

**Frontend:** React + Tailwind CSS + shadcn/ui components
**Backend:** FastAPI + Python
**Database:** MongoDB
**Email Service:** Nodemailer через SMTP

## Что реализовано (27 января 2025)

### Phase 1: Frontend с mock-данными ✅

**Компоненты:**
- `/app/frontend/src/components/Header.jsx` - Адаптивная навигация с hamburger меню
- `/app/frontend/src/components/Hero.jsx` - Полноэкранный hero с градиентом и CTA
- `/app/frontend/src/components/About.jsx` - О школе с карточками преимуществ
- `/app/frontend/src/components/Advantages.jsx` - 4 преимущества в grid layout
- `/app/frontend/src/components/Courses.jsx` - Курсы с предметами и CTA banner
- `/app/frontend/src/components/Results.jsx` - Анимированные счетчики статистики
- `/app/frontend/src/components/Teachers.jsx` - Карточки преподавателей с фото
- `/app/frontend/src/components/Testimonials.jsx` - Карусель отзывов с навигацией
- `/app/frontend/src/components/Contacts.jsx` - Контактная форма + карта + инфо
- `/app/frontend/src/components/Footer.jsx` - Footer с навигацией и соцсетями

**Mock данные:**
- `/app/frontend/src/data/mock.js` - Все данные школы, курсов, преподавателей, отзывов
- Mock функция `submitContactForm()` для сохранения в localStorage

**Стили:**
- Кастомные анимации (fade-in, slide-up, pulse)
- Google Fonts: Montserrat + Inter
- Smooth scrolling, hover effects, backdrop blur
- Custom scrollbar styling

**Функционал:**
- Плавная навигация между секциями
- Адаптивное меню для mobile
- Анимированные статистические счетчики
- Работающая карусель отзывов
- Валидация формы на frontend
- Интеграция Yandex Maps
- Полная адаптивность (mobile/tablet/desktop)

**Изображения:**
- 14 профессиональных фото от Pexels/Unsplash
- Hero, About, Teachers, Testimonials sections

## Следующие задачи (Prioritized Backlog)

### P0 - Backend разработка
1. **Модель Contact Form**
   - Схема MongoDB: name, phone, email, message, timestamp
   - POST /api/contact - сохранение заявки

2. **Email Integration**
   - Настройка Nodemailer с SMTP
   - Отправка email администратору при новой заявке
   - Env variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, ADMIN_EMAIL

3. **Интеграция Frontend-Backend**
   - Заменить mock.js на реальные API calls
   - Error handling и user feedback
   - Loading states для формы

### P1 - Дополнительные функции
- Admin панель для управления контентом
- Раздел "Новости" или "Блог"
- Онлайн-расписание занятий
- Личный кабинет учеников
- Интеграция с платежной системой

### P2 - Оптимизация
- SEO оптимизация (meta tags, structured data)
- Performance optimization (lazy loading, image optimization)
- Analytics integration (Yandex Metrica)
- A/B testing для conversion optimization

## API Contracts (для Backend)

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "message": "string"
}
```

**Response (Success):**
```json
{
  "status": "submitted",
  "message": "Спасибо! Мы свяжемся с вами в ближайшее время."
}
```

**Response (Error):**
```json
{
  "detail": "Error message"
}
```

## User Personas

1. **Родитель школьника**
   - Ищет качественную подготовку к ЕГЭ/ОГЭ
   - Важны: результаты, квалификация преподавателей, цена
   - Хочет: бесплатное пробное занятие

2. **Выпускник/старшеклассник**
   - Нужна подготовка к экзаменам
   - Важны: удобное расписание, современные методы
   - Хочет: гарантированный результат

## Технические детали

**Используемые библиотеки:**
- lucide-react для иконок
- shadcn/ui components (Button, Input, Textarea, etc.)
- Google Fonts API
- Yandex Maps iframe embed

**Цветовая палитра:**
- Primary: #0E2A47 (navy)
- Accent: #F6A500 (gold)
- Background: white, #F7F9FC (light gray)
- Text: #0E2A47, gray variants

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

**Дата создания:** 27 января 2025
**Последнее обновление:** 27 января 2025
