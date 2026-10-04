import { useLanguage } from '@/i18n/LanguageContext';
import { useParallax } from '@/hooks/useParallax';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const { t } = useLanguage();
  const parallax = useParallax(0.35);
  const revealRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="top" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Parallax hero image */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${parallax}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=90"
          alt="Flame-grilled signature dish at Sabora, with glowing embers and seared texture"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />

      {/* Content */}
      <div
        ref={revealRef}
        className="reveal relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-light mb-6">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream max-w-4xl leading-[1.1] font-light">
          {t.hero.title}
        </h1>
        <p className="mt-8 text-cream/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          {t.hero.subtitle}
        </p>
        <a
          href="#reservations"
          className="mt-10 inline-block border border-gold/60 text-gold px-8 py-3 text-sm tracking-widest uppercase font-light hover:bg-gold hover:text-ink transition-all duration-400"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 animate-pulse" />
      </div>
    </section>
  );
}
