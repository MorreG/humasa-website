// Called only from browser effects, before GSAP changes the element's styles.
export function shouldAnimateEntrance(element) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  const isHydrating = document.getElementById('root')?.hasAttribute('data-prerendered');
  const hasPainted = !window.PerformancePaintTiming ||
    performance.getEntriesByType('paint').some(entry => entry.name === 'first-contentful-paint');

  // Never hide content that has already been presented during a slow load.
  // Sections further down still get their normal scroll-triggered entrances.
  return !(isHydrating && hasPainted && element.getBoundingClientRect().top < window.innerHeight);
}
