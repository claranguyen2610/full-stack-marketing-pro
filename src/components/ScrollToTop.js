import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(
    () => {
      window.scrollTo(0, 0); // Scrolls to the top of the page

      // Send Google Analytics 4 Page View event
      if (window.gtag) {
        // Check if gtag is loaded
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search, // Includes query parameters
          page_location: window.location.href, // Full URL
          page_title: document.title // Current document title
        });
      }
    },
    [pathname]
  );

  return null; // It doesn’t render anything
};

export default ScrollToTop;
