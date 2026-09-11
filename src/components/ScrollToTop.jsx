import { useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { cancelSmoothScroll, smoothScrollTo } from '../utils/smoothScroll';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    cancelSmoothScroll();
    const isNewPath = previousPath.current !== pathname;
    previousPath.current = pathname;
    // If there is a hash, we handle scrolling to it in the useEffect below
    // Let the browser preserve scroll on an initial visit or refresh.
    if (hash || !isNewPath) return;

    // Instantly jump to the top BEFORE browser paints the new route
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        let cancelScroll;
        // Wait a slight delay to allow page rendering to finish before scrolling
        const timeout = setTimeout(() => {
          cancelScroll = smoothScrollTo(element, 1200);
        }, 100);
        return () => {
          clearTimeout(timeout);
          cancelScroll?.();
        };
      }
    }
  }, [pathname, hash]);

  return null;
}
