import { useState } from 'react';
import { menuItems, type MenuItem } from '@/data/menu';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import LazyImage from './LazyImage';
import MenuModal from './MenuModal';

export default function Menu() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="menu" className="relative bg-ink py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal max-w-3xl mb-16">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
            {t.menu.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-6">
            {t.menu.title}
          </h2>
        </div>

        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {menuItems.map((item) => {
            const tr = t.menu.items[item.id];
            return (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="group text-left overflow-hidden bg-charcoal border border-gold/8 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(200,169,106,0.2)]"
                aria-label={`${t.menu.viewDetails}: ${tr.name}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <LazyImage
                    src={item.image}
                    alt={`${tr.name} — ${tr.tagline}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                  {/* Dietary badge */}
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    {item.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-ink/70 backdrop-blur-sm text-gold text-[10px] font-light tracking-wider border border-gold/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-serif text-2xl text-cream font-light mb-1 group-hover:text-gold transition-colors">
                    {tr.name}
                  </h3>
                  <p className="text-gold-light text-lg font-light mb-2">{item.price}</p>
                  <p className="text-cream/50 text-sm font-light italic">{tr.tagline}</p>
                  <p className="mt-4 text-gold/60 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.menu.viewDetails} →
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-12 text-cream/40 text-sm font-light text-center">
          {t.menu.footer}
        </p>
      </div>

      {selected && <MenuModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
