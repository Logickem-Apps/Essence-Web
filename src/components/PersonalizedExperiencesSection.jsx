import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Sparkles, ArrowRight } from 'lucide-react';
import Reveal from '@/components/immersive/Reveal.jsx';

function PersonalizedExperiencesSection() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="relative overflow-hidden rounded-[26px] border border-gold/30 bg-gradient-to-br from-gold/[0.16] to-jade/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 opacity-[0.07]">
            <Globe className="h-64 w-64 text-cream" />
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/30 to-jade/20 text-gold">
                <Globe className="h-8 w-8" />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-[36px]">
                Experiencias Personalizadas
              </h2>
            </div>

            <div className="mb-10 space-y-5 font-body text-lg leading-relaxed text-cream/80">
              <p>
                ¿Buscas una aventura diseñada a tu medida? Al ser personalizadas, no tienen un precio fijo: todo depende
                de lo que quieras vivir. Partimos de un precio base{' '}
                <strong className="font-semibold text-gold">a partir de Q1,000 (~US$130)</strong> y lo ajustamos a tu
                itinerario, tus intereses y tu grupo.
              </p>
              <p>
                Puedes adaptar cualquiera de nuestros itinerarios o colaborar con nuestros guías locales para crear una
                ruta única basada en tus intereses: fotografía, gastronomía profunda, senderismo o inmersión cultural.
              </p>
              <p>
                <span className="mb-1 flex items-center gap-2 font-medium text-white">
                  <Sparkles className="h-4 w-4 text-gold" />
                  Turismo 100% comunitario y sostenible
                </span>
                Somos una tour operadora comunitaria: cada experiencia es guiada por y para la comunidad de Rabinal. El
                precio final varía según el grado de personalización, pero cada recorrido apoya directamente a las
                familias Achí y promueve un turismo responsable con nuestra tierra.
              </p>
            </div>

            <Link
              to="/contacto"
              state={{ interestedIn: 'Experiencia Personalizada' }}
              className="btn-gold inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-4 font-body text-base font-bold shadow-[0_12px_30px_rgba(224,169,84,0.36)] transition hover:-translate-y-0.5 sm:w-auto"
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

export default PersonalizedExperiencesSection;
