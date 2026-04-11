'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Calendar, Camera, Award, Users, ChevronRight, Clock, ArrowRight } from 'lucide-react'
import { NEWS_CATEGORIES, SCHOOL_NEWS } from '@/lib/data'

const SchoolNews = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const sortedNews = [...SCHOOL_NEWS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const filteredNews = activeCategory === 'all' 
    ? sortedNews 
    : sortedNews.filter(news => news.category === activeCategory)

  const displayedNews = filteredNews.slice(0, 6)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      excursion: 'bg-blue-100 text-blue-700',
      achievement: 'bg-yellow-100 text-yellow-700',
      event: 'bg-purple-100 text-purple-700',
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      excursion: 'Экскурсия',
      achievement: 'Достижение',
      event: 'Мероприятие',
    }
    return labels[category] || category
  }

  const getIconComponent = (iconName: string | null) => {
    if (!iconName) return null
    const icons: Record<string, any> = {
      'Camera': Camera,
      'Award': Award,
      'Users': Users
    }
    return icons[iconName] || null
  }

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
            const IconComponent = getIconComponent(category.icon)
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
                {IconComponent && <IconComponent className="w-4 h-4" />}
                {category.label}
              </button>
            )
          })}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedNews.map((newsItem, index) => (
            <Link
              key={newsItem.id}
              href="/vida-escolar/"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
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
                  <span className="text-[#009479] hover:text-[#007A64] font-medium text-sm flex items-center gap-1 transition-colors">
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
            href="/vida-escolar/"
            className="inline-flex items-center gap-2 bg-[#009479] hover:bg-[#007A64] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
          <div className="flex justify-center gap-4 flex-wrap">
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
  )
}

export default SchoolNews