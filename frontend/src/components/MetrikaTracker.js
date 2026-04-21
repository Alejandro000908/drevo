import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Yandex Metrika tracker for React SPA
 * Tracks route changes automatically
 */
const MetrikaTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait for Metrika to be fully loaded
    const sendHit = () => {
      if (typeof window.ym === 'function') {
        try {
          window.ym(94489622, 'hit', window.location.href, {
            title: document.title,
            referer: document.referrer
          });
          console.log('✅ Metrika hit sent:', window.location.href);
        } catch (error) {
          console.error('❌ Metrika error:', error);
        }
      } else {
        console.warn('⚠️ Metrika not loaded yet, retrying...');
        // Retry after 500ms if not loaded
        setTimeout(sendHit, 500);
      }
    };

    // Small delay to ensure page is ready
    setTimeout(sendHit, 100);
  }, [location]);

  return null;
};

export default MetrikaTracker;
