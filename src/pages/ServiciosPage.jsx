import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Utensils, Home, Calendar, Sparkles, MapPin, Leaf, HeartHandshake, Shield, Compass, Gem } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/immersive/PageHero.jsx';
import Reveal from '@/components/immersive/Reveal.jsx';
import SectionHeading from '@/components/immersive/SectionHeading.jsx';
import CtaBand from '@/components/immersive/CtaBand.jsx';

const services = [
  { icon: Users, title: 'Guías Profesionales', description: 'Guías locales certificados con profundo conocimiento de la cultura, historia y tradiciones de Rabinal.' },
  { icon: Utensils, title: 'Comidas y Gastronomía', description: 'Degustación de platillos tradicionales preparados por familias locales. Experiencias culinarias auténticas con ingredientes de la región.' },
  { icon: Home, title: 'Asistencia de Alojamiento', description: 'Recomendaciones y coordinación de hospedaje en hoteles locales y casas de familia. Opciones para todos los presupuestos.' },
  { icon: Calendar, title: 'Coordinación de Grupos', description: 'Organización completa para grupos grandes, incluyendo escuelas, empresas y organizaciones. Itinerarios personalizados según necesidades.' },
  { icon: Sparkles, title: 'Experiencias Personalizadas', description: 'Diseñamos tours a medida según tus intereses: fotografía, artesanía, naturaleza, espiritualidad maya o combinaciones únicas.' },
];

const reasons = [
  { icon: MapPin, title: 'Experiencia local', text: 'Somos nativos de Rabinal, con un conocimiento profundo de nuestra tierra y su gente.' },
  { icon: Leaf, title: 'Turismo responsable', text: 'Prácticas sostenibles que benefician directamente a las comunidades Achí.' },
  { icon: HeartHandshake, title: 'Atención personalizada', text: 'Grupos pequeños para vivir experiencias más íntimas y cercanas.' },
  { icon: Compass, title: 'Flexibilidad', text: 'Adaptamos cada tour a tus intereses, tiempos y necesidades.' },
  { icon: Shield, title: 'Seguridad', text: 'Protocolos de seguridad y guías comunitarios certificados.' },
  { icon: Gem, title: 'Autenticidad', text: 'Experiencias reales, vividas junto a la comunidad, no escenificadas.' },
];

function ServiciosPage() {
  return (
    <>
      <Helmet>
        <title>Servicios - Essence Rabinal</title>
        <meta name="description" content="Descubre nuestros servicios: guías profesionales, experiencias gastronómicas, alojamiento y tours personalizados en Rabinal." />
      </Helmet>

      <div className="flex min-h-screen flex-col bg-ink">
        <Header />

        <main className="flex-1">
          <PageHero
            breadcrumb={<>Inicio &nbsp;/&nbsp; <span className="text-gold">Servicios</span></>}
            title="Nuestros Servicios"
            subtitle="Servicios completos para hacer de tu visita a Rabinal una experiencia inolvidable."
            image="/images/trad-comunidad.webp"
          />

          {/* Services grid */}
          <section className="bg-ink py-16 md:py-24">
            <div className="mx-auto max-w-[1340px] px-5 md:px-8">
              <SectionHeading
                eyebrow="Lo que ofrecemos"
                title="Todo para tu experiencia"
                subtitle="Acompañamiento integral, de la mano de la comunidad Achí, en cada etapa de tu viaje."
                className="mb-12 md:mb-16"
              />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 3) * 0.08}>
                    <div className="ez-glass ez-lift group relative h-full overflow-hidden rounded-[18px] p-7 hover:border-gold/50 hover:bg-white/[0.06]">
                      <span className="absolute right-5 top-4 font-display text-5xl font-bold text-white/[0.06] transition-colors group-hover:text-gold/20">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-gold/25 to-jade/20 text-gold">
                        <s.icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-2.5 font-display text-xl font-semibold text-white">{s.title}</h3>
                      <p className="font-body text-sm leading-relaxed text-cream/65">{s.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Why us */}
          <section className="bg-ink-2 py-16 md:py-24">
            <div className="mx-auto max-w-[1340px] px-5 md:px-8">
              <SectionHeading
                eyebrow="Nuestra diferencia"
                title="¿Por qué elegirnos?"
                subtitle="Turismo 100% comunitario y sostenible, hecho por y para la comunidad de Rabinal."
                className="mb-12 md:mb-16"
              />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {reasons.map((r, i) => (
                  <Reveal key={r.title} delay={(i % 3) * 0.08}>
                    <div className="ez-lift flex h-full items-start gap-4 rounded-[18px] border border-white/[0.08] bg-ink p-6 hover:border-gold/40">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-jade/25 to-gold/20 text-jade">
                        <r.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="mb-1.5 font-display text-lg font-semibold text-white">{r.title}</h3>
                        <p className="font-body text-sm leading-relaxed text-cream/65">{r.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <CtaBand
            title="¿Listo para tu experiencia en Rabinal?"
            subtitle="Cuéntanos qué te gustaría vivir y nuestros guías locales de la comunidad se encargan del resto."
            ctaLabel="Contáctanos"
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ServiciosPage;
