import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import LazyImage from './LazyImage';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=75',
    alt: 'Sabora dining room with warm lighting and elegant table settings',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=75',
    alt: 'Seasonal vegetable dish with colorful heirloom produce',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=600&q=75',
    alt: "Chef's plated course with refined presentation and garnish",
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80',
    thumb: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=75',
    alt: 'The Sabora lounge interior with leather seating and ambient lighting',
    span: 'md:col-span-2',
  },
];

export default function Story() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const galleryRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="story" className="relative bg-ink py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal max-w-3xl mb-16">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
            {t.story.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-6">
            {t.story.title}
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed font-light">
            {t.story.body}
          </p>
        </div>

        <div
          ref={galleryRef}
          className="reveal grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]"
        >
          {galleryImages.map((img) => (
            <div key={img.src} className={`overflow-hidden group ${img.span}`}>
              <LazyImage
                src={img.thumb}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
