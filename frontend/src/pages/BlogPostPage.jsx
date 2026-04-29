import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ChevronRight, Home } from 'lucide-react';
import Seo from '../components/Seo';
import { getPostBySlug, getSortedPosts } from '../blog/blogData';

const SITE_URL = 'https://drevopoznaniy.ru';

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

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-20">
        <Seo
          title="Статья не найдена — Блог «Древо Познаний»"
          description="Запрашиваемая статья не найдена. Перейдите в блог, чтобы увидеть все материалы."
        />
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#414141] dark:text-white mb-4">
            Статья не найдена
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
            Возможно, статья была перемещена или удалена. Загляните в блог — там много интересного.
          </p>
          <Link
            to="/blog"
            data-testid="blog-not-found-back"
            className="inline-flex items-center gap-2 bg-[#009479] hover:bg-[#007A64] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Вернуться в блог
          </Link>
        </div>
      </div>
    );
  }

  // Sugerencias: 2 artículos más recientes que NO sean el actual
  const related = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  // Breadcrumbs UI + structured data
  const breadcrumbs = [
    { name: 'Главная', url: `${SITE_URL}/` },
    { name: 'Блог', url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-20">
      <Seo
        title={`${post.title} — Блог «Древо Познаний»`}
        description={post.description}
        breadcrumbs={breadcrumbs}
      />

      <article className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {/* Breadcrumbs UI */}
        <nav
          aria-label="breadcrumb"
          data-testid="blog-post-breadcrumbs"
          className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-[#009479] dark:hover:text-[#00BFA5] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            Главная
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link
            to="/blog"
            className="hover:text-[#009479] dark:hover:text-[#00BFA5] transition-colors"
          >
            Блог
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-700 dark:text-gray-200 truncate max-w-[200px] sm:max-w-none">
            {post.title}
          </span>
        </nav>

        {/* Title & Meta */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#414141] dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            {post.readingTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8 shadow-md bg-gray-100 dark:bg-gray-700">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          data-testid="blog-post-content"
          className="blog-post-content prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/blog"
            data-testid="blog-post-back-link"
            className="inline-flex items-center gap-2 text-[#009479] dark:text-[#00BFA5] hover:text-[#007A64] dark:hover:text-[#009479] font-medium transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Все статьи
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#414141] dark:text-white mb-6">
              Читайте также
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  data-testid={`blog-related-${rp.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base md:text-lg font-bold text-[#414141] dark:text-white mb-2 group-hover:text-[#009479] dark:group-hover:text-[#00BFA5] transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Inline minimal styles for blog content (no global side effects) */}
      <style>{`
        .blog-post-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: #414141;
        }
        .dark .blog-post-content h2 { color: #fff; }
        .blog-post-content p { margin-bottom: 1rem; line-height: 1.7; }
        .blog-post-content ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
        .blog-post-content li { margin-bottom: 0.5rem; line-height: 1.7; }
        .blog-post-content strong { color: #009479; }
        .dark .blog-post-content strong { color: #00BFA5; }
      `}</style>
    </div>
  );
};

export default BlogPostPage;
