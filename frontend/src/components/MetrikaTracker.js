import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Yandex Metrika tracker for React SPA
 * Tracks route changes automatically
 */
const MetrikaTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const sendHit = () => {
      if (typeof window.ym === 'function') {
        try {
          window.ym(94489622, 'hit', window.location.href, {
            title: document.title,
            referer: document.referrer
          });
        } catch (error) {
          // Silently handle errors to not break the app
        }
      } else {
        // Retry if Metrika not loaded yet
        setTimeout(sendHit, 500);
      }
    };

    setTimeout(sendHit, 100);
  }, [location]);

  return null;
};

export default MetrikaTracker;
