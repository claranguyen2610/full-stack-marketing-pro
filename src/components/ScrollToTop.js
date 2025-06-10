import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(
    () => {
      window.scrollTo(0, 0);

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname + window.location.search,
          page_location: window.location.href,
          page_title: document.title
        });
      }
    },
    [pathname, search]
  );

  return null;
};

export default ScrollToTop;
