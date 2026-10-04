import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.table, href: '#story' },
    { label: t.nav.events, href: '#events' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.chef, href: '#chef' },
    { label: t.nav.space, href: '#space' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.reservations, href: '#reservations' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(200,169,106,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20" aria-label="Main navigation">
        <a
          href="#top"
          className="font-serif text-2xl tracking-wide text-cream hover:text-gold transition-colors"
          aria-label="Sabora home"
        >
          Sabora<span className="text-gold">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-sans font-light tracking-wide text-cream/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm font-light text-cream/60 hover:text-gold transition-colors border border-gold/20 rounded-full px-3 py-1.5"
            aria-label={`Switch to ${lang === 'en' ? 'Bahasa Indonesia' : 'English'}`}
          >
            <span className={lang === 'en' ? 'text-gold' : ''}>EN</span>
            <span className="text-cream/20">/</span>
            <span className={lang === 'id' ? 'text-gold' : ''}>ID</span>
          </button>

          {/* Mobile toggle */}
          <button
            className="xl:hidden text-cream p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-ink/95 backdrop-blur-md border-t border-gold/10">
          <ul className="flex flex-col py-4 px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-cream/80 hover:text-gold transition-colors font-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
