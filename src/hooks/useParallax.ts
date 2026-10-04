import { useEffect, useState } from 'react';

/**
 * Returns a vertical offset (in px) based on the element's position
 * relative to the viewport, for gentle parallax. Returns 0 when the
 * user prefers reduced motion.
 */
export function useParallax(strength: number = 0.3) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setOffset(window.scrollY * strength);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return offset;
}
