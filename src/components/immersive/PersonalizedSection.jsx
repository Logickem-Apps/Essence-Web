import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

function PersonalizedSection() {
  return (
    <section className="bg-ink py-14 md:py-26">
      <div className="mx-auto max-w-[960px] px-5 md:px-8">
        <Reveal className="relative overflow-hidden rounded-[26px] border border-gold/30 bg-gradient-to-br from-gold/[0.16] to-jade/10 p-8 md:p-13">
          <div className="absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full [background:radial-gradient(circle,rgba(224,169,84,0.3),transparent_70%)]" />
          <div className="relative z-[1]">
            <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-4xl">Experiencias Personalizadas</h2>
            <p className="mb-7 font-body text-base leading-relaxed text-cream/85 md:text-lg">
              ¿Buscas una aventura diseñada a tu medida? Al ser personalizadas se adaptan a lo que quieras vivir, con un
              precio base <strong className="text-gold">a partir de Q1,000</strong>. Somos una tour operadora 100%
              comunitaria y sostenible: cada recorrido apoya directamente a las familias de Rabinal.
            </p>
            <Link
              to="/contacto"
              className="btn-gold inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-body text-base font-bold shadow-[0_12px_30px_rgba(224,169,84,0.36)] transition hover:-translate-y-0.5"
            >
              Solicitar cotización personalizada
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PersonalizedSection;
