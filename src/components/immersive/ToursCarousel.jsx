import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { tours } from '@/lib/homeContent';
import Reveal from './Reveal.jsx';

function ToursCarousel() {
  const rowRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  // Arrows (and horizontal scroll) only make sense when the cards overflow.
  const updateCanScroll = useCallback(() => {
    const el = rowRef.current;
    if (el) setCanScroll(el.scrollWidth > el.clientWidth + 4);
  }, []);

  useEffect(() => {
    updateCanScroll();
    const el = rowRef.current;
    let ro;
    if (el && 'ResizeObserver' in window) {
      ro = new ResizeObserver(updateCanScroll);
      ro.observe(el);
    }
    window.addEventListener('resize', updateCanScroll);
    return () => {
      window.removeEventListener('resize', updateCanScroll);
      if (ro) ro.disconnect();
    };
  }, [updateCanScroll]);

  // Scroll by exactly one card (card width + gap), so each arrow click
  // advances a single tour instead of an arbitrary fraction.
  const scroll = (dir) => {
    const el = rowRef.current;
    if (!el) return;
    const card = el.querySelector('[data-tour-card]');
    const gap = 22;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="overflow-hidden bg-ink py-16 md:py-28">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4 md:mb-12">
          <div>
            <div className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Experiencias Destacadas
            </div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">Tours Populares</h2>
          </div>
          {canScroll && (
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Anterior"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.18] text-white transition hover:border-gold hover:bg-gold hover:text-gold-ink"
              >
                <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Siguiente"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.18] text-white transition hover:border-gold hover:bg-gold hover:text-gold-ink"
              >
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </button>
            </div>
          )}
        </Reveal>
      </div>

      <div
        ref={rowRef}
        className={`ez-hscroll mx-auto flex max-w-[1340px] gap-[22px] overflow-x-auto px-5 pb-3.5 pt-1.5 md:px-8 ${
          canScroll ? '' : 'justify-center'
        }`}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {tours.map((t) => (
          <div
            key={t.name}
            data-tour-card
            className="ez-card relative h-[480px] flex-[0_0_100%] overflow-hidden rounded-[20px] border border-white/[0.08] sm:h-[540px] sm:flex-[0_0_360px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="ez-zoom absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${t.image}')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,11,9,0.96)] via-[rgba(8,11,9,0.45)] to-[rgba(8,11,9,0.2)]" />
            <div
              className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-3 py-1.5 font-body text-xs font-semibold text-gold shadow-lg"
              style={{ backgroundColor: 'rgba(11, 14, 12, 0.85)' }}
            >
              <Clock className="h-3.5 w-3.5" />
              {t.duration}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="mb-2.5 font-display text-xl font-semibold leading-tight text-white md:text-2xl">{t.name}</h3>
              <p className="mb-4 font-body text-sm leading-snug text-cream/80">{t.description}</p>
              <Link
                to="/contacto"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-3 font-body text-sm font-bold transition"
              >
                Solicitar Información
                <ArrowRight className="h-[15px] w-[15px]" strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToursCarousel;
