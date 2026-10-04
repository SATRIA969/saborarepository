import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Footer() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <footer className="bg-ink border-t border-gold/10 px-6 lg:px-10 py-16">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-3xl text-cream tracking-wide mb-2">
              Sabora<span className="text-gold">.</span>
            </p>
            <p className="text-cream/40 text-sm font-light">{t.footer.tagline}</p>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.25em] uppercase font-light mb-4">
              {t.footer.visit}
            </h4>
            <address className="text-cream/50 text-sm font-light leading-relaxed not-italic">
              Jl. Senopati No. 88
              <br />
              Kebayoran Baru, Jakarta Selatan
              <br />
              12190
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.25em] uppercase font-light mb-4">
              {t.footer.hours}
            </h4>
            <p className="text-cream/50 text-sm font-light leading-relaxed">
              {t.footer.hoursDetail}
              <br />
              {t.footer.lastSeating}
              <br />
              {t.footer.closedMondays}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.25em] uppercase font-light mb-4">
              {t.footer.contact}
            </h4>
            <p className="text-cream/50 text-sm font-light leading-relaxed">
              +62 21 5550 0888
              <br />
              reservations@sabora.id
            </p>
          </div>
        </div>

        <div className="border-t border-gold/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs font-light text-center md:text-left">
            {t.footer.copyright}
          </p>
          <p className="text-cream/25 text-xs font-light italic">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
