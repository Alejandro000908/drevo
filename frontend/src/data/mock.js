// Mock data for school website

export const SCHOOL_INFO = {
  name: "Древо Познаний",
  tagline: "Частная школа с индивидуальным подходом",
  phone: "+7 (916) 122-21-12",
  whatsapp: "+79161222112",
  email: "Drevop@ya.ru",
  emailSecondary: "Smunin@ya.ru",
  address: "г. Раменское, Красноармейская 105",
  schedule: "Понедельник - Пятница с 8:30 до 20:00",
  mapUrl: "https://yandex.ru/maps/?text=г.%20Раменское,%20Красноармейская%20105",
  social: {
    vk: "https://vk.com/drevopoznaniy_ramenskoe",
    telegram: "https://t.me/Drevopoznaniy_ramenskoe"
  }
};

export const HERO = {
  headline: "Частная школа «Древо Познаний» — индивидуальный подход и реальные результаты",
  subtext: "Подготовка к ЕГЭ и ОГЭ с гарантированным результатом. Малые группы до 6 человек. Опытные преподаватели.",
  ctaPrimary: "Записаться на пробное занятие",
  ctaSecondary: "Узнать больше",
  image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/pyjpj7ng_n3LEFeUqka_FyO2v4FHv_ehXQKcINz2u7xDZgeRYIDL_4WLprgjm86FlIyiF2ABWYPuo3-b__VV-C2nH3Ru0UwW7.jpg"
};

export const ABOUT = {
  title: "О нашей школе",
  mission: "Мы создаем образовательную среду, где каждый ученик получает персональное внимание и поддержку. Наша цель — не просто подготовить к экзаменам, но и воспитать любовь к знаниям.",
  vision: "«Древо Познаний» — это место, где дети учатся мыслить критически, работать самостоятельно и достигать высоких результатов. Мы верим, что качественное образование доступно каждому.",
  image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/icffr31q_wfz4G9l8D1kRgXvBvLqKu6o867WaKfxzZi73rVz_u3m7wF-vAxRMpkt_3zsx7qMNonzYzz_uuGuP1eKzFrBJIWH7.jpg"
};

export const SCHOOL_LIFE = [
  {
    id: 1,
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/k43iyvwv_QkZFmUsG6pNYjG2Wz_MFmu2IvwLcIeRC74V0yMPHv_lG71IUBE7nC2i1RXSS7iaQENWbbllX4CySCz40MfreszFR.jpg",
    title: "Интерактивные занятия",
    description: "Современные методы обучения в малых группах"
  },
  {
    id: 2,
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/iw6q8w5k_La1h7dhngnixBCecqSy88rhA4Ipo-EqgQyP9iyKGcWyqlDomJO18ZIzJNv9mINdXKNfVghbU9zudh9MYwJem_FHd.jpg",
    title: "Праздники и достижения",
    description: "Отмечаем успехи каждого ученика"
  },
  {
    id: 3,
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/8t1ryxyc_KsuaN8x9fH_BROtidYdgXu5DV_dtGKFDTjSEVL4xdWMhaFl7I-GEEo7do8eRUhS3lLoZrOopEAbhG-fAvgk4d4Am.jpg",
    title: "Творческое развитие",
    description: "Раскрываем потенциал через искусство"
  },
  {
    id: 4,
    image: "https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/iwwijnqe_Y9zNG8kVgqQPLgoqMa4zH0BEkITy-YO3ylmHU0Aeueh4EME8dtLFVJcROd-bqizNrQ3dUrKZrQ7b_R_4z5pI01-7.jpg",
    title: "Практические занятия",
    description: "Учимся через творчество и эксперименты"
  }
];

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
    name: "Полина Фёдоровна",
    subject: "Математика",
    bio: "Опытный преподаватель математики. Помогает ученикам полюбить точные науки и достигать высоких результатов.",
    motto: "",
    image: null
  },
  {
    id: 2,
    name: "Михаил Иванович",
    subject: "Физика",
    bio: "Преподаватель физики с многолетним опытом. Делает сложные темы понятными и интересными.",
    motto: "",
    image: null
  },
  {
    id: 3,
    name: "Mr. Alejandro",
    subject: "Информатика и Английский язык",
    bio: "Международный преподаватель. Ведёт занятия по информатике и английскому языку, раскрывая потенциал каждого ученика.",
    motto: "",
    image: null
  },
  {
    id: 4,
    name: "Елена Анатольевна",
    subject: "Начальная школа",
    bio: "Учитель начальных классов. Тот ПЕРВЫЙ учитель, которого дети будут вспоминать с большим теплом.",
    motto: "",
    image: null
  },
  {
    id: 5,
    name: "Наталия Владимировна",
    subject: "Начальная школа",
    bio: "Учитель начальных классов. Создаёт тёплую атмосферу и помогает детям раскрыть свои способности.",
    motto: "",
    image: null
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Родитель",
    role: "Мама ученика 1 класса",
    type: "parent",
    text: "Вот и пролетел первый год в нашей школе. На одном дыхании и для нас, родителей, и для ребёнка. Интересные уроки мотивируют и завлекают. Английский с мистером Алехандро раскрыл потенциал о котором я даже не догадывалась))) а наша Елена Анатольевна, тот ПЕРВЫЙ учитель, которого дети будут вспоминать с большим теплом. Ну а сделанные в школе уроки - это бесценно)))) С огромной благодарностью ко всем учителям и администрации. Ждём осени))))",
    image: "https://images.pexels.com/photos/7683898/pexels-photo-7683898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5
  },
  {
    id: 2,
    name: "Родитель",
    role: "Мама ученика",
    type: "parent",
    text: "Потрясающая школа. Ребенок будет учиться третий год, ему очень нравится. Учителя замечательные! Атмосфера как большая семья. Обучение направлено, чтобы вызвать у детей интерес к учебе, а не как в других школах. Это огромный плюс. Ребенок с радостью посещает школу и если заболеет грустит, что пропускает учебу. Обучение в «древо познаний» это как ежедневный праздник для детей. В общем, отдав ребенка сюда вы ни на секунду не пожалеете, что сделали выбор в пользу древо познаний! Однозначно рекомендую",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHN0dWRlbnRzfGVufDB8fHx8MTc3NDgyNTc3Nnww&ixlib=rb-4.1.0&q=85",
    rating: 5
  },
  {
    id: 3,
    name: "Родитель",
    role: "Мама выпускника",
    type: "parent",
    text: "Огромное спасибо преподавателям, за один год смогли подготовить моего сына к сдаче ОГЭ. Были пробелы в знаниях, всё было успешно восстановлено. Огромная благодарность учителям Математики, Русского языка и Информатики. Сын успешно сдал все экзамены и перешёл в 10 класс. Надеюсь, что воспользуемся репетиторами для сдачи ЕГЭ",
    image: "https://images.unsplash.com/photo-1542868796-20f2ddc9d41f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzfGVufDB8fHx8MTc3NDgyNTc3Nnww&ixlib=rb-4.1.0&q=85",
    rating: 5
  },
  {
    id: 4,
    name: "Родитель",
    role: "Мама выпускника",
    type: "parent",
    text: "Сын закончил школу Древо познаний в прошлом году. Остались очень тёплые, хорошие воспоминания. Школа дала не только глубокие знания (поступил на бюджет в тот ВУЗ, в который планировал), но и сама атмосфера была очень дружелюбной, по семейному тёплой. Много разнообразных элективных занятий из которых каждый может выбрать то, что ему ближе и интереснее",
    image: "https://images.pexels.com/photos/7683898/pexels-photo-7683898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5
  },
  {
    id: 5,
    name: "Родитель",
    role: "Мама ученика 8 класса",
    type: "parent",
    text: "Сын учится в 8 классе, пришли в 6 классе. Индивидуальный подход к каждому ребенку, система образования устроена так, что предметы даются более углубленно, прекрасный преподавательский состав и административный. Директор школы Елена Александровна всегда доступна для каждого родителя. Сын и в подростковом возрасте идет с радостью каждый день. Всем у кого есть возможность рекомендую данную школу для качественного образования ребенка. Дополнительные занятия не требуются идет целенаправленная подготовка для поступления в ВУЗ. Очень довольна, что дома не надо контролировать уроки, это делают в школе. Организовано питание и досуг! 💕🌹🌹🌹",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHN0dWRlbnRzfGVufDB8fHx8MTc3NDgyNTc3Nnww&ixlib=rb-4.1.0&q=85",
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
