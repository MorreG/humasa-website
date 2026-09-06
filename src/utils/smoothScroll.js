let cancelActiveScroll;

export function cancelSmoothScroll() {
  cancelActiveScroll?.();
}

export function smoothScrollTo(target, duration = 1200) {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
  if (!targetElement) return;

  cancelSmoothScroll();

  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const targetPosition = Math.min(maxScroll, Math.max(0,
    targetElement.getBoundingClientRect().top + window.scrollY));
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;
  let frame;
  const inputEvents = ['wheel', 'touchstart', 'pointerdown'];
  const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];

  const cancel = () => {
    cancelAnimationFrame(frame);
    inputEvents.forEach((event) => window.removeEventListener(event, cancel));
    window.removeEventListener('keydown', handleKeyDown);
    if (cancelActiveScroll === cancel) cancelActiveScroll = undefined;
  };
  const handleKeyDown = (event) => {
    if (scrollKeys.includes(event.key)) cancel();
  };
  cancelActiveScroll = cancel;

  if (duration <= 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo({ top: targetPosition, behavior: 'instant' });
    cancel();
    return cancel;
  }

  inputEvents.forEach((event) => window.addEventListener(event, cancel, { passive: true }));
  window.addEventListener('keydown', handleKeyDown);

  // Pure ease-out curve with a gentle initial velocity.
  // This starts moving immediately but without an explosive "kick", 
  // and smoothly decelerates the entire way down.
  const customEase = (t) => {
    return t * (2 - t);
  };

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // CSS scroll-behavior: smooth must not start another animation each frame.
    window.scrollTo({ top: startPosition + distance * customEase(progress), behavior: 'instant' });

    if (timeElapsed < duration) {
      frame = requestAnimationFrame(animation);
    } else {
      cancel();
    }
  }

  frame = requestAnimationFrame(animation);
  return cancel;
}
