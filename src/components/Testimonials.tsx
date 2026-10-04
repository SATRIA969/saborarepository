import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i <= rating ? '#c8a96a' : 'none'}
          stroke={i <= rating ? '#c8a96a' : '#c8a96a40'}
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const carouselRef = useScrollReveal<HTMLDivElement>();

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const items = t.testimonials.items;

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Auto-advance every 6s, pause on hover/focus
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goNext]);

  return (
    <section
      id="testimonials"
      className="relative bg-charcoal py-24 md:py-32 px-6 lg:px-10"
    >
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight">
            {t.testimonials.title}
          </h2>
        </div>

        <div
          ref={carouselRef}
          className="reveal relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label={t.testimonials.title}
        >
          {/* Slide */}
          <div className="overflow-hidden">
            <div key={current} className="carousel-slide">
              <div className="text-center px-4 md:px-12">
                <StarRow rating={5} />
                <blockquote className="mt-6 mb-8">
                  <p className="font-serif text-2xl md:text-3xl text-cream/90 font-light italic leading-relaxed">
                    &ldquo;{items[current].quote}&rdquo;
                  </p>
                </blockquote>
                <p className="text-gold-light text-base font-light">
                  {items[current].author}
                </p>
                <p className="text-cream/40 text-sm font-light mt-1">
                  {items[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={goPrev}
              className="w-11 h-11 flex items-center justify-center text-cream/50 hover:text-gold border border-gold/20 hover:border-gold/50 rounded-full transition-all"
              aria-label={t.testimonials.prev}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current
                      ? 'bg-gold w-8'
                      : 'bg-cream/20 hover:bg-cream/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={idx === current}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-11 h-11 flex items-center justify-center text-cream/50 hover:text-gold border border-gold/20 hover:border-gold/50 rounded-full transition-all"
              aria-label={t.testimonials.next}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
