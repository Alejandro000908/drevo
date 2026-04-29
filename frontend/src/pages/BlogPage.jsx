import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import Seo from '../components/Seo';
import { getSortedPosts } from '../blog/blogData';

const formatDate = (iso) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
};

const BlogPage = () => {
  const posts = getSortedPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-20">
      <Seo
        title="Блог — Частная школа «Древо Познаний»"
        description="Полезные статьи о школьном образовании, подготовке к ЕГЭ и ОГЭ, выборе школы и жизни учеников «Древо Познаний»."
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Back to Home */}
        <Link
          to="/"
          data-testid="blog-back-home-link"
          className="inline-flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium transition-all duration-300 group mb-8 hover:gap-3"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Вернуться на главную
        </Link>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#009479]/10 text-[#009479] dark:bg-[#00BFA5]/10 dark:text-[#00BFA5] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            БЛОГ ШКОЛЫ
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414141] dark:text-white mb-4">
            Полезные статьи
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Делимся опытом, советами и наблюдениями о школьном образовании
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Пока нет статей. Скоро здесь появятся первые публикации.
          </p>
        ) : (
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
            data-testid="blog-posts-grid"
          >
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                data-testid={`blog-card-${post.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    {post.readingTime && (
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-[#414141] dark:text-white mb-2 group-hover:text-[#009479] dark:group-hover:text-[#00BFA5] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 flex-1">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#009479] dark:text-[#00BFA5] group-hover:gap-2 transition-all">
                    Читать далее
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
