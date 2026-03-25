export function smoothScrollTo(target, duration = 1200) {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

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
    
    window.scrollTo(0, startPosition + distance * customEase(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Ensure we explicitly hit the exact target position at the end
      window.scrollTo(0, targetPosition);
    }
  }

  requestAnimationFrame(animation);
}
