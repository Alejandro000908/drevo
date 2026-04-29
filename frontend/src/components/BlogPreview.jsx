import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { getSortedPosts } from '../blog/blogData';

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
};

const BlogPreview = () => {
  const posts = getSortedPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      data-testid="blog-preview-section"
      className="py-16 sm:py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 max-w-6xl mx-auto">
          <div>
            <div className="inline-block bg-[#009479]/10 text-[#009479] dark:bg-[#00BFA5]/10 dark:text-[#00BFA5] px-4 py-2 rounded-full text-sm font-semibold mb-3">
              НАШ БЛОГ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#414141] dark:text-white">
              Последние статьи блога
            </h2>
          </div>
          <Link
            to="/blog"
            data-testid="blog-preview-all-link"
            className="inline-flex items-center gap-1 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-semibold text-sm group"
          >
            Все статьи
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              data-testid={`blog-preview-card-${post.slug}`}
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
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#414141] dark:text-white mb-2 group-hover:text-[#009479] dark:group-hover:text-[#00BFA5] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3 flex-1">
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
      </div>
    </section>
  );
};

export default BlogPreview;
