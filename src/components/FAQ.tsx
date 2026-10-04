import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FAQ() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
            {t.faq.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight">
            {t.faq.title}
          </h2>
        </div>

        <div ref={listRef} className="reveal space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-charcoal border border-gold/10 overflow-hidden"
              >
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left text-cream font-light hover:text-gold transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="font-serif text-lg md:text-xl">{item.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`flex-shrink-0 ml-4 text-gold transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    className="accordion-content px-6 pb-5 -mt-1"
                  >
                    <p className="text-cream/50 text-base font-light leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
