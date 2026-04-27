import { useEffect } from 'react';

/**
 * Componente SEO dinámico para SPA React.
 * Actualiza document.title y <meta name="description"> en cada página.
 * Opcionalmente actualiza og:title, og:description y twitter:* para mejor preview en redes.
 */
function Seo({ title, description }) {
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
  }, [title, description]);

  return null;
}

export default Seo;
