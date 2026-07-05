import React from 'react';
import { services } from '@/lib/homeContent';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function ServicesSection() {
  return (
    <section className="bg-ink-2 py-16 md:py-28">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <SectionHeading eyebrow="Lo que ofrecemos" title="Nuestros Servicios" className="mb-10 md:mb-13" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="ez-glass ez-lift h-full rounded-[18px] p-6 hover:border-gold/50 hover:bg-white/[0.06] md:p-8">
                <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-[14px] bg-gradient-to-br from-gold/25 to-jade/20 font-display text-lg font-bold text-gold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-2.5 font-display text-lg font-semibold text-white md:text-xl">{s.title}</h3>
                <p className="font-body text-sm leading-relaxed text-cream/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
