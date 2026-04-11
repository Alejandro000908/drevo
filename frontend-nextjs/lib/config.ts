// SEO metadata base configuration
export const siteConfig = {
  name: "Частная школа «Древо Познаний»",
  description: "Обучение с 1 по 11 класс. Подготовка к ЕГЭ и ОГЭ с гарантированным результатом. Небольшие классы до 12 человек. Опытные преподаватели.",
  url: "https://drevoznanii.ru",
  ogImage: "https://drevoznanii.ru/og-image.jpg",
  links: {
    telegram: "https://t.me/drevoznanii",
    vk: "https://vk.com/drevoznanii",
  },
  keywords: [
    "частная школа Раменское",
    "школа Древо Познаний",
    "подготовка к ЕГЭ",
    "подготовка к ОГЭ",
    "индивидуальный подход",
    "малые классы",
    "частное образование",
    "школа Раменское",
  ],
  contact: {
    phone: "+7 (916) 122-21-12",
    email: "Drevop@ya.ru",
    address: "г. Раменское, Красноармейская 105",
    whatsapp: "+79161222112",
  },
  geo: {
    region: "RU-MOS",
    placename: "Раменское",
    position: "55.564789;38.231673",
  },
}

export type SiteConfig = typeof siteConfig
