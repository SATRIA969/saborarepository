import { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  /** Set to true for above-the-fold images that should load immediately */
  eager?: boolean;
}

/**
 * Image with native lazy-loading, optional IntersectionObserver
 * fade-in for below-the-fold images, and descriptive alt text.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  eager = false,
}: LazyImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`${className} transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}
