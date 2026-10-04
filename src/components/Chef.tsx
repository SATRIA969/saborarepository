import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import LazyImage from './LazyImage';

export default function Chef() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="chef" className="relative bg-charcoal py-24 md:py-32 px-6 lg:px-10">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-2 relative">
            <div className="relative overflow-hidden h-[420px] md:h-[520px]">
              <LazyImage
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=85"
                alt={`Portrait of ${t.chef.name}, ${t.chef.role} at Sabora restaurant`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>
            {/* Decorative gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 hidden md:block" />
          </div>

          {/* Bio */}
          <div className="lg:col-span-3">
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
              {t.chef.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-2">
              {t.chef.name}
            </h2>
            <p className="text-gold-light text-lg font-light mb-6">{t.chef.role}</p>

            <p className="text-cream/60 text-lg leading-relaxed font-light mb-4">
              {t.chef.bio1}
            </p>
            <p className="text-cream/60 text-base leading-relaxed font-light mb-8">
              {t.chef.bio2}
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold/40 pl-6">
              <p className="font-serif text-2xl md:text-3xl text-cream/90 italic font-light leading-snug">
                &ldquo;{t.chef.quote}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
