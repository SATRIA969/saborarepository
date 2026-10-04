import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import LazyImage from './LazyImage';

export default function Events() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>();
  const sigRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="events" className="relative bg-charcoal py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal max-w-3xl mb-16">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
            {t.events.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-6">
            {t.events.title}
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed font-light">
            {t.events.body}
          </p>
        </div>

        <div ref={cardRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chef's tasting card */}
          <div className="relative overflow-hidden group h-[420px] md:h-[480px]">
            <LazyImage
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
              alt="Sabora chef preparing a seasonal tasting menu with meticulous plating"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                {t.events.everyThursday}
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
                {t.events.tastingTitle}
              </h3>
              <p className="text-cream/70 text-base leading-relaxed font-light mb-4">
                {t.events.tastingBody}
              </p>
              <p className="text-gold-light text-sm font-light">
                {t.events.tastingPrice}
              </p>
            </div>
          </div>

          {/* Signature dishes intro */}
          <div ref={sigRef} className="reveal flex flex-col justify-center p-8 md:p-10 bg-stone border border-gold/10">
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
              {t.events.povEyebrow}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-cream font-light leading-tight mb-6">
              {t.events.povTitle}
            </h3>
            <p className="text-cream/60 text-lg leading-relaxed font-light mb-8">
              {t.events.povBody}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden h-48">
                <LazyImage
                  src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=85"
                  alt="Refined seafood plate with delicate plating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden h-48">
                <LazyImage
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=85"
                  alt="Artfully plated signature course with sauce detailing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
