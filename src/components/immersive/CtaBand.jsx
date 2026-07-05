import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

/**
 * Reusable conversion band (Inmersivo). Closes inspiring pages with a clear
 * call to contact/reserve — reinforcing that the experience is lived WITH the
 * local guides (the operator's value). No DIY logistics here by design.
 */
function CtaBand({
  title,
  subtitle,
  ctaLabel = 'Reserva con un guía local',
  ctaTo = '/contacto',
  className = 'bg-ink',
}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Reveal className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[26px] border border-gold/30 bg-gradient-to-br from-gold/[0.16] to-jade/10 p-8 text-center md:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full [background:radial-gradient(circle,rgba(224,169,84,0.25),transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">{title}</h2>
            {subtitle && (
              <p className="mx-auto mb-7 max-w-xl font-body leading-relaxed text-cream/80">{subtitle}</p>
            )}
            <Link
              to={ctaTo}
              className="btn-gold inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-body text-base font-bold transition hover:-translate-y-0.5"
            >
              {ctaLabel}
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default CtaBand;
