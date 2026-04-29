import { useEffect } from 'react';

/**
 * Componente SEO dinámico para SPA React.
 * Actualiza document.title y <meta name="description"> en cada página.
 * Opcionalmente actualiza og:title, og:description y twitter:* para mejor preview en redes.
 * Opcionalmente acepta `breadcrumbs` (array de {name, url}) e inyecta JSON-LD BreadcrumbList.
 */
function Seo({ title, description, breadcrumbs }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const ensureMeta = (selector, attrName, attrValue) => {
      let meta = document.head.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      return meta;
    };

    if (description) {
      const metaDesc = ensureMeta(
        "meta[name='description']",
        'name',
        'description'
      );
      metaDesc.setAttribute('content', description);

      const ogDesc = ensureMeta(
        "meta[property='og:description']",
        'property',
        'og:description'
      );
      ogDesc.setAttribute('content', description);

      const twDesc = ensureMeta(
        "meta[name='twitter:description']",
        'name',
        'twitter:description'
      );
      twDesc.setAttribute('content', description);
    }

    if (title) {
      const ogTitle = ensureMeta(
        "meta[property='og:title']",
        'property',
        'og:title'
      );
      ogTitle.setAttribute('content', title);

      const twTitle = ensureMeta(
        "meta[name='twitter:title']",
        'name',
        'twitter:title'
      );
      twTitle.setAttribute('content', title);
    }

    // BreadcrumbList JSON-LD (opcional)
    const BREADCRUMB_ID = 'seo-breadcrumb-jsonld';
    const existing = document.getElementById(BREADCRUMB_ID);
    if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: item.url,
        })),
      };
      let script = existing;
      if (!script) {
        script = document.createElement('script');
        script.id = BREADCRUMB_ID;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    } else if (existing) {
      // Si esta página NO trae breadcrumbs, removemos el JSON-LD anterior
      existing.remove();
    }
  }, [title, description, breadcrumbs]);

  return null;
}

export default Seo;
