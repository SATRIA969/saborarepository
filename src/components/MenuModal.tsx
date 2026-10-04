import { useEffect, useRef } from 'react';
import type { MenuItem } from '@/data/menu';
import { useLanguage } from '@/i18n/LanguageContext';

interface MenuModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function MenuModal({ item, onClose }: MenuModalProps) {
  const { t } = useLanguage();
  const tr = t.menu.items[item.id];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Trap focus + handle Esc
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"]), input, select, textarea'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${item.id}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        ref={dialogRef}
        className="modal-content relative bg-charcoal border border-gold/15 max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-cream/70 hover:text-gold bg-ink/60 hover:bg-ink/80 rounded-full transition-all"
          aria-label={t.menu.closeDish}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Large image */}
          <div className="relative h-72 md:h-full min-h-[400px]">
            <img
              src={item.image}
              alt={`${tr.name} — ${tr.tagline}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Details */}
          <div className="p-6 md:p-10 flex flex-col">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-light mb-3">
              {t.menu.categories[item.category]}
            </p>
            <h3
              id={`modal-title-${item.id}`}
              className="font-serif text-3xl md:text-4xl text-cream font-light leading-tight mb-2"
            >
              {tr.name}
            </h3>
            <p className="text-gold-light text-xl font-light mb-4">{item.price}</p>
            <p className="text-cream/50 text-sm font-light italic mb-6">{tr.tagline}</p>

            <p className="text-cream/70 text-base leading-relaxed font-light mb-6">
              {tr.description}
            </p>

            {/* Dietary tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.dietary.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 border border-gold/30 text-gold text-xs font-light tracking-wider"
                  title={t.menu.dietaryLabels[tag]}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Allergen note */}
            <div className="mb-6 p-4 bg-stone/60 border-l-2 border-gold/30">
              <p className="text-cream/40 text-xs tracking-[0.2em] uppercase mb-1">
                {t.menu.allergens}
              </p>
              <p className="text-cream/60 text-sm font-light leading-relaxed">
                {tr.allergens}
              </p>
            </div>

            {/* Pairs well with */}
            <div className="mt-auto p-4 bg-stone/60 border-l-2 border-gold/30">
              <p className="text-cream/40 text-xs tracking-[0.2em] uppercase mb-1">
                {t.menu.pairsWellWith}
              </p>
              <p className="text-cream/70 text-sm font-light leading-relaxed italic">
                {tr.pairsWellWith}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
