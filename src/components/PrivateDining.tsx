import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PrivateDining() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  const capacities = [
    { label: t.privateDining.privateRoom, value: t.privateDining.privateRoomValue },
    { label: t.privateDining.wholeRestaurant, value: t.privateDining.wholeRestaurantValue },
    { label: t.privateDining.chefsTable, value: t.privateDining.chefsTableValue },
  ];

  return (
    <section id="private-dining" className="relative bg-charcoal py-24 md:py-32 px-6 lg:px-10">
      <div ref={ref} className="reveal max-w-5xl mx-auto text-center">
        <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
          {t.privateDining.eyebrow}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-6">
          {t.privateDining.title}
        </h2>
        <p className="text-cream/60 text-lg leading-relaxed font-light max-w-3xl mx-auto mb-12">
          {t.privateDining.body}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capacities.map((c) => (
            <div key={c.label} className="p-6 bg-stone border border-gold/10">
              <p className="text-gold text-xs tracking-[0.2em] uppercase font-light mb-2">
                {c.label}
              </p>
              <p className="text-cream/70 text-sm font-light leading-relaxed">{c.value}</p>
            </div>
          ))}
        </div>

        <p className="text-cream/30 text-xs font-light italic">
          {t.privateDining.sampleNote}
        </p>
      </div>
    </section>
  );
}
