import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { aboutImage, valores } from '@/lib/homeContent';
import Reveal from './Reveal.jsx';

function AboutSection() {
  return (
    <section className="bg-ink-2 py-16 md:py-28">
      <div className="mx-auto grid max-w-[1340px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-[72px]">
        <Reveal className="relative">
          <div className="aspect-[5/4] overflow-hidden rounded-[20px] border border-white/[0.08] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url('${aboutImage}')` }} />
          </div>
          <div className="ez-glass absolute -bottom-5 -right-2 max-w-[240px] rounded-2xl bg-gold/[0.92] px-6 py-5 text-gold-ink">
            <div className="font-display text-[32px] font-bold leading-none">100%</div>
            <div className="mt-1.5 font-body text-[13px] leading-snug">Operado junto a la comunidad y guías locales</div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mb-3.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            ¿Quiénes somos?
          </div>
          <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[48px]">
            Nuestra <span className="text-gradient">Historia</span>
          </h2>
          <p className="mb-6 font-body text-base leading-relaxed text-cream/80 md:text-lg">
            Essence Rabinal nació del deseo de compartir la riqueza cultural y natural de nuestro territorio con el
            mundo. Como tour operadora local, conectamos a los viajeros con experiencias auténticas en colaboración
            con la comunidad, preservando nuestras tradiciones ancestrales.
          </p>
          <div className="mb-8 flex flex-col gap-3">
            {valores.map((v) => (
              <div key={v.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-jade/20">
                  <Check className="h-3.5 w-3.5 text-jade" strokeWidth={2.6} />
                </span>
                <span className="font-body text-[15px] text-cream/90">
                  <strong className="font-semibold">{v.title}</strong> · {v.text}
                </span>
              </div>
            ))}
          </div>
          <Link
            to="/sobre-nosotros"
            className="ez-glass inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 font-body text-[15px] font-semibold text-white transition hover:bg-white/15"
          >
            Conoce más
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;
