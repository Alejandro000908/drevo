import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Yandex Metrika tracker for React SPA
 * Tracks route changes automatically
 */
const MetrikaTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if Yandex Metrika is loaded
    if (typeof window.ym === 'function') {
      // Send page hit to Metrika
      window.ym(94489622, 'hit', window.location.href, {
        title: document.title,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default MetrikaTracker;
