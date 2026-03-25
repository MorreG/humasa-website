import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { smoothScrollTo } from '../utils/smoothScroll';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // If there is a hash, we handle scrolling to it in the useEffect below
    if (hash) return;

    // Disable smooth scroll temporarily
    document.documentElement.style.scrollBehavior = 'auto';

    // Instantly jump to the top BEFORE browser paints the new route
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // 50ms is enough to let the DOM settle before re-enabling smooth scrolling
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a slight delay to allow page rendering to finish before scrolling
        const timeout = setTimeout(() => {
          smoothScrollTo(element, 1200); // Using 1.2s for cinematic easing
        }, 100);
        return () => clearTimeout(timeout);
      }
    }
  }, [pathname, hash]);

  return null;
}
