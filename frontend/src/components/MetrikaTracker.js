import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Yandex Metrika tracker for React SPA
 * Tracks route changes automatically
 */
const MetrikaTracker = () => {
  const location = useLocation();

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 10;

    const sendHit = () => {
      attempts++;
      
      if (typeof window.ym === 'function') {
        try {
          window.ym(94489622, 'hit', window.location.href, {
            title: document.title,
            referer: document.referrer
          });
          console.log('[Metrika] ✅ Hit enviado:', window.location.pathname);
        } catch (error) {
          console.error('[Metrika] ❌ Error:', error);
        }
      } else if (attempts < maxAttempts) {
        console.warn(`[Metrika] ⏳ Esperando carga... (intento ${attempts}/${maxAttempts})`);
        setTimeout(sendHit, 500);
      } else {
        console.error('[Metrika] ❌ Script no cargó después de', maxAttempts, 'intentos');
      }
    };

    setTimeout(sendHit, 100);
  }, [location]);

  return null;
};

export default MetrikaTracker;
