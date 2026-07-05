import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { heroImages, heroStats } from '@/lib/homeContent';

function HomeHero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroImages.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-ink isolate min-h-[88dvh]">
      {heroImages.map((src, i) => (
        <div
          key={i}
          aria-hidden={i !== idx}
          className="absolute inset-0 z-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: `url('${src}')`, opacity: i === idx ? 1 : 0, transition: 'opacity 1400ms ease' }}
        />
      ))}

      {/* Overlays for legibility (work on bright AND dark photos):
          uniform scrim + top/bottom fade + a soft dark spotlight behind the centered text. */}
      <div className="absolute inset-0 z-[1] bg-ink/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/65 via-transparent to-ink" />
      <div className="absolute inset-0 z-[1] [background:radial-gradient(80%_66%_at_50%_44%,rgba(11,14,12,0.55)_0%,transparent_70%)]" />

      <div className="relative z-[3] flex min-h-[88dvh] flex-col items-center justify-center px-6 py-24 text-center">
        <div
          className="ez-glass mb-7 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold animate-rise"
          style={{ backgroundColor: 'rgba(11, 14, 12, 0.5)' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-jade shadow-[0_0_10px_var(--jade)] animate-pulse-dot" />
          Rabinal, Baja Verapaz
        </div>

        <h1
          className="font-display font-bold text-white leading-[0.9] tracking-[-0.03em] animate-rise"
          style={{ fontSize: 'clamp(52px, 15vw, 200px)', animationDelay: '0.1s', textShadow: '0 2px 40px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.4)' }}
        >
          RABINAL
        </h1>

        {/* Gradient subtitle (drop-shadow works on clipped-text where text-shadow can't) */}
        <div
          className="text-gradient mt-2 font-display font-medium animate-rise"
          style={{ fontSize: 'clamp(16px, 4.5vw, 30px)', letterSpacing: '0.04em', animationDelay: '0.15s', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.6))' }}
        >
          Descubre la esencia de nuestra tierra
        </div>

        <p
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-cream/90 animate-rise md:text-lg"
          style={{ animationDelay: '0.2s', textShadow: '0 1px 14px rgba(0,0,0,0.6)' }}
        >
          Sumérgete en la rica herencia cultural, las maravillas naturales y la calidez del pueblo Maya Achí.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3.5 animate-rise" style={{ animationDelay: '0.26s' }}>
          <Link
            to="/tours"
            className="btn-gold inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-body text-[15px] font-bold shadow-[0_12px_34px_rgba(224,169,84,0.4)] transition hover:-translate-y-0.5"
          >
            Explorar Tours
            <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
          </Link>
          <Link
            to="/sobre-nosotros"
            className="ez-glass inline-flex items-center rounded-full border border-white/30 px-8 py-4 font-body text-[15px] font-semibold text-white transition hover:bg-white/15"
          >
            Nuestra Historia
          </Link>
        </div>

        <div className="mt-11 flex flex-wrap justify-center gap-3 animate-rise" style={{ animationDelay: '0.32s' }}>
          {heroStats.map((s) => (
            <div key={s.label} className="ez-glass rounded-2xl px-5 py-3.5" style={{ backgroundColor: 'rgba(11, 14, 12, 0.5)' }}>
              <span
                className={`font-display font-bold ${s.accent === 'jade' ? 'text-jade text-lg' : 'text-gold text-[22px]'}`}
              >
                {s.value}
              </span>
              <span className="ml-2 font-body text-xs font-medium text-cream/70">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-[4] flex -translate-x-1/2 gap-2.5">
        {heroImages.map((_, i) => (
          <span
            key={i}
            className="h-[9px] rounded-full transition-all duration-300"
            style={{ width: i === idx ? '26px' : '9px', background: i === idx ? 'var(--gold)' : 'rgba(255,255,255,0.5)' }}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeHero;
