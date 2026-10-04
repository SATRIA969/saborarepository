import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import LazyImage from './LazyImage';

export default function TheSpace() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const galleryRef = useScrollReveal<HTMLDivElement>();

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      alt: 'Sabora dining room with warm lighting, timber tables, and elegant ambiance',
      label: t.space.diningRoom,
    },
    {
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      alt: 'The Sabora bar with backlit shelves, craft cocktails, and leather bar stools',
      label: t.space.bar,
    },
    {
      src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=800&q=80',
      alt: 'Private dining room at Sabora with intimate round table and candlelit setting',
      label: t.space.privateRoom,
    },
  ];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, [images.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, [images.length]);

  // Esc + arrow keys for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    prevBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section id="space" className="relative bg-ink py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal max-w-3xl mb-16">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
            {t.space.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-6">
            {t.space.title}
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed font-light">
            {t.space.body}
          </p>
        </div>

        <div
          ref={galleryRef}
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {images.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(idx)}
              className="group relative overflow-hidden h-64 md:h-80 text-left"
              aria-label={`Open ${img.label} in lightbox`}
            >
              <LazyImage
                src={img.thumb}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-serif text-2xl text-cream font-light group-hover:text-gold transition-colors">
                  {img.label}
                </p>
                <p className="mt-1 text-gold/60 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.menu.viewDetails} →
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center modal-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={t.space.title}
        >
          <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm" />

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 w-11 h-11 flex items-center justify-center text-cream/70 hover:text-gold bg-ink/60 hover:bg-ink/80 rounded-full transition-all"
            aria-label={t.space.closeLightbox}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          <button
            ref={prevBtnRef}
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-4 md:left-8 z-20 w-12 h-12 flex items-center justify-center text-cream/60 hover:text-gold bg-ink/40 hover:bg-ink/70 rounded-full transition-all"
            aria-label={t.space.prev}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative z-10 max-w-5xl w-full px-16" onClick={(e) => e.stopPropagation()}>
            <div key={lightboxIndex} className="carousel-slide">
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <p className="text-center mt-4 font-serif text-xl text-cream font-light">
                {images[lightboxIndex].label}
              </p>
              <p className="text-center text-cream/40 text-xs mt-1">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 md:right-8 z-20 w-12 h-12 flex items-center justify-center text-cream/60 hover:text-gold bg-ink/40 hover:bg-ink/70 rounded-full transition-all"
            aria-label={t.space.next}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
