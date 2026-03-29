// Mock data for school website

export const SCHOOL_INFO = {
  name: "Древо Познаний",
  tagline: "Частная школа с индивидуальным подходом",
  phone: "+7 (495) 123-45-67",
  whatsapp: "+79001234567",
  email: "info@drevo-poznanii.ru",
  address: "Москва, ул. Арбат, д. 25, стр. 1",
  mapUrl: "https://yandex.ru/maps/?pt=37.593238,55.751244&z=17&l=map",
  social: {
    vk: "https://vk.com/drevpoznaniy",
    instagram: "https://instagram.com/drevo_poznaniy"
  }
};

export const HERO = {
  headline: "Частная школа «Древо Познаний» — индивидуальный подход и реальные результаты",
  subtext: "Подготовка к ЕГЭ и ОГЭ с гарантированным результатом. Малые группы до 6 человек. Опытные преподаватели.",
  ctaPrimary: "Записаться на пробное занятие",
  ctaSecondary: "Узнать больше",
  image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};

export const ABOUT = {
  title: "О нашей школе",
  mission: "Мы создаем образовательную среду, где каждый ученик получает персональное внимание и поддержку. Наша цель — не просто подготовить к экзаменам, но и воспитать любовь к знаниям.",
  vision: "«Древо Познаний» — это место, где дети учатся мыслить критически, работать самостоятельно и достигать высоких результатов. Мы верим, что качественное образование доступно каждому.",
  image: "https://images.pexels.com/photos/8423430/pexels-photo-8423430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};

export const ADVANTAGES = [
  {
    id: 1,
    title: "Малые группы",
    description: "До 6 человек в группе — преподаватель уделяет внимание каждому ученику",
    icon: "users"
  },
  {
    id: 2,
    title: "Опытные педагоги",
    description: "Наши учителя — эксперты ЕГЭ и ОГЭ с многолетним опытом и высокими результатами",
    icon: "award"
  },
  {
    id: 3,
    title: "Высокие результаты",
    description: "95% наших выпускников поступают в ведущие вузы страны",
    icon: "trophy"
  },
  {
    id: 4,
    title: "Современный подход",
    description: "Интерактивные методы обучения, цифровые технологии и актуальные материалы",
    icon: "lightbulb"
  }
];

export const COURSES = [
  {
    id: 1,
    title: "Подготовка к ЕГЭ",
    description: "Комплексная подготовка по всем предметам ЕГЭ. Индивидуальные планы обучения и регулярное тестирование.",
    icon: "graduationCap",
    subjects: ["Математика", "Русский язык", "Физика", "Химия", "История", "Обществознание"]
  },
  {
    id: 2,
    title: "Подготовка к ОГЭ",
    description: "Эффективная подготовка к ОГЭ для 9 классов. Систематизация знаний и отработка заданий.",
    icon: "bookOpen",
    subjects: ["Математика", "Русский язык", "Английский язык", "Физика", "Биология"]
  },
  {
    id: 3,
    title: "Дополнительные предметы",
    description: "Углубленное изучение предметов для школьников 5-11 классов. Ликвидация пробелов в знаниях.",
    icon: "book",
    subjects: ["Английский язык", "Программирование", "Литература"]
  },
  {
    id: 4,
    title: "Выходные интенсивы",
    description: "Тематические интенсивы по сложным темам. Решение олимпиадных задач и подготовка к конкурсам.",
    icon: "calendar",
    subjects: ["Олимпиадная математика", "Физика", "Программирование"]
  }
];

export const STATS = [
  {
    id: 1,
    value: 87,
    label: "Средний балл ЕГЭ",
    suffix: ""
  },
  {
    id: 2,
    value: 95,
    label: "Поступили в вузы",
    suffix: "%"
  },
  {
    id: 3,
    value: 12,
    label: "Лет опыта",
    suffix: ""
  },
  {
    id: 4,
    value: 240,
    label: "Выпускников",
    suffix: "+"
  }
];

export const TEACHERS = [
  {
    id: 1,
    name: "Елена Викторовна Смирнова",
    subject: "Математика, ЕГЭ",
    bio: "15 лет опыта. Кандидат педагогических наук. Средний балл учеников — 92.",
    image: "https://images.pexels.com/photos/5905753/pexels-photo-5905753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    name: "Дмитрий Александрович Петров",
    subject: "Физика, ЕГЭ и ОГЭ",
    bio: "12 лет опыта. Преподаватель МГУ. Автор методических пособий.",
    image: "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc0ODI1NzcyfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    name: "Ольга Игоревна Козлова",
    subject: "Русский язык, Литература",
    bio: "10 лет опыта. Эксперт ЕГЭ. 98% учеников сдают на 85+ баллов.",
    image: "https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc0ODI1NzcyfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    name: "Анна Сергеевна Волкова",
    subject: "Английский язык",
    bio: "8 лет опыта. Сертификат CELTA. Носитель уровня C2.",
    image: "https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc0ODI1NzcyfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 5,
    name: "Игорь Владимирович Соколов",
    subject: "Химия, Биология",
    bio: "14 лет опыта. Победитель конкурса «Учитель года». Средний балл — 89.",
    image: "https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc0ODI1NzcyfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 6,
    name: "Мария Николаевна Иванова",
    subject: "История, Обществознание",
    bio: "11 лет опыта. Эксперт ОГЭ. Автор курса по истории России.",
    image: "https://images.pexels.com/photos/5212321/pexels-photo-5212321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Мария Кузнецова",
    role: "Выпускница 2024",
    text: "Благодаря «Древу Познаний» я сдала ЕГЭ по математике на 98 баллов и поступила в МГУ на бюджет! Преподаватели объясняют сложные темы просто и понятно.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHN0dWRlbnRzfGVufDB8fHx8MTc3NDgyNTc3Nnww&ixlib=rb-4.1.0&q=85",
    rating: 5
  },
  {
    id: 2,
    name: "Ирина Степановна",
    role: "Мама ученика",
    text: "Мой сын учится в школе уже второй год. Его успеваемость значительно выросла, появилась уверенность в себе. Огромное спасибо педагогам!",
    image: "https://images.pexels.com/photos/7683898/pexels-photo-7683898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5
  },
  {
    id: 3,
    name: "Александр Новиков",
    role: "Выпускник 2023",
    text: "Лучшая подготовка к ЕГЭ! Индивидуальный подход, современные методы обучения. Сдал физику и математику на 95+ баллов.",
    image: "https://images.unsplash.com/photo-1542868796-20f2ddc9d41f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzfGVufDB8fHx8MTc3NDgyNTc3Nnww&ixlib=rb-4.1.0&q=85",
    rating: 5
  }
];

// Mock form submission
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", formData);
      localStorage.setItem(
        `contact_${Date.now()}`,
        JSON.stringify(formData)
      );
      resolve({
        success: true,
        message: "Спасибо! Мы свяжемся с вами в ближайшее время."
      });
    }, 800);
  });
};
