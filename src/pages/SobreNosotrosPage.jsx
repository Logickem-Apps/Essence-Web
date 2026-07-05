import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Eye, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/immersive/PageHero.jsx';
import Reveal from '@/components/immersive/Reveal.jsx';
import SectionHeading from '@/components/immersive/SectionHeading.jsx';

const stats = [
  { value: '100%', label: 'Turismo comunitario', accent: 'gold' },
  { value: '1538', label: 'Rabinal, fundado', accent: 'cream' },
  { value: 'UNESCO', label: 'Rabinal Achí', accent: 'jade' },
  { value: '+20', label: 'Danzas vivas', accent: 'gold' },
];

const values = [
  {
    title: 'Autenticidad',
    description: 'Creamos experiencias reales y significativas que reflejan la esencia viva de Rabinal, conectando a los visitantes con su cultura y su gente de forma genuina.',
    image: '/images/cult-autenticidad.webp',
  },
  {
    title: 'Compromiso comunitario',
    description: 'Trabajamos de la mano con la comunidad local, generando oportunidades y fortaleciendo el desarrollo social a través de cada experiencia.',
    image: '/images/trad-comunidad.webp',
  },
  {
    title: 'Sostenibilidad',
    description: 'Promovemos un turismo responsable que respeta el entorno natural y cultural, asegurando su preservación para las futuras generaciones.',
    image: '/images/sit-ruinas-naturaleza.webp',
  },
];

function SobreNosotrosPage() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Essence Rabinal</title>
        <meta name="description" content="Conoce la historia, misión y valores de Essence Rabinal. Promovemos turismo cultural auténtico y sostenible en Rabinal, Baja Verapaz." />
      </Helmet>

      <div className="flex min-h-screen flex-col bg-ink">
        <Header />

        <main className="flex-1">
          <PageHero
            breadcrumb={<>Inicio &nbsp;/&nbsp; <span className="text-gold">Nosotros</span></>}
            title="Sobre Nosotros"
            subtitle="Conectando viajeros con la auténtica esencia de Rabinal."
            image="/images/cult-sobre-nosotros.webp"
          />

          {/* Historia */}
          <section className="bg-ink py-16 md:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
              <Reveal>
                <img
                  src="/images/logo-essence.webp"
                  alt="Cultura de Rabinal"
                  loading="lazy"
                  className="w-full rounded-[20px] border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                />
              </Reveal>
              <Reveal delay={0.12} className="space-y-5">
                <div className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">¿Quiénes somos?</div>
                <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                  Nuestra <span className="text-gradient">Historia</span>
                </h2>
                <p className="font-body leading-relaxed text-cream/75">
                  Essence Rabinal nació del deseo de compartir la riqueza cultural y natural de nuestro territorio con
                  el mundo. Como tour operadora local, conectamos a los viajeros con experiencias auténticas en Rabinal,
                  en colaboración con la comunidad, promoviendo y preservando nuestras tradiciones ancestrales.
                </p>
                <p className="font-body leading-relaxed text-cream/75">
                  Cada experiencia que ofrecemos es una oportunidad para descubrir la verdadera esencia de Rabinal,
                  desde sus tradiciones mayas hasta su exquisita gastronomía, creando conexiones auténticas que
                  permanecen más allá del viaje.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Impacto / datos */}
          <section className="border-y border-white/[0.06] bg-ink-2 py-14 md:py-16">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.08} className="text-center">
                    <div
                      className={`font-display text-4xl font-bold md:text-5xl ${
                        s.accent === 'jade' ? 'text-jade' : s.accent === 'cream' ? 'text-cream' : 'text-gold'
                      }`}
                    >
                      {s.value}
                    </div>
                    <div className="mt-2 font-body text-sm text-cream/60">{s.label}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Misión / Visión */}
          <section className="bg-ink py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <SectionHeading
                eyebrow="Nuestro propósito"
                title="Misión y Visión"
                className="mb-12 md:mb-16"
              />
              <div className="grid gap-6 md:grid-cols-2">
              <Reveal className="ez-glass rounded-[20px] p-8 text-center md:p-10">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-jade/20 text-gold">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">Nuestra Misión</h3>
                <p className="font-body leading-relaxed text-cream/70">
                  Promover un turismo cultural auténtico en Rabinal, desarrollado en conjunto con la comunidad y con un
                  enfoque sostenible, creando experiencias significativas que conectan a los visitantes con nuestras
                  tradiciones y generan beneficios directos para las comunidades locales.
                </p>
              </Reveal>
              <Reveal delay={0.12} className="ez-glass rounded-[20px] p-8 text-center md:p-10">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-jade/25 to-gold/20 text-jade">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">Nuestra Visión</h3>
                <p className="font-body leading-relaxed text-cream/70">
                  Ser el principal referente en turismo cultural comunitario y sostenible en Baja Verapaz, creando
                  experiencias auténticas que conectan a los viajeros con la esencia viva de la cultura Achí y
                  contribuyan al bienestar de nuestras comunidades.
                </p>
              </Reveal>
              </div>
            </div>
          </section>

          {/* Valores */}
          <section className="bg-ink-2 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <SectionHeading
                eyebrow="Lo que nos guía"
                title="Nuestros Valores"
                subtitle="Los principios que dan forma a cada experiencia que creamos."
                className="mb-12 md:mb-16"
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 0.1}>
                    <div className="ez-card group flex h-full flex-col overflow-hidden rounded-[18px] border border-white/[0.08] bg-ink">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <div className="ez-zoom h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${v.image}')` }} />
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <h3 className="mb-3 font-display text-2xl font-semibold text-white">{v.title}</h3>
                        <p className="flex-1 font-body leading-relaxed text-cream/70">{v.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Compromiso CTA band */}
          <section className="bg-gradient-to-br from-gold/[0.16] to-jade/10 py-16 md:py-24">
            <Reveal className="mx-auto max-w-3xl px-5 text-center md:px-8">
              <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl">Compromiso con la Comunidad</h2>
              <p className="font-body text-lg leading-relaxed text-cream/85">
                Trabajamos directamente con artesanos, guías comunitarios certificados y familias locales para asegurar
                que el turismo genere un impacto positivo real. Cada experiencia contribuye al desarrollo económico
                local y a la preservación de nuestras tradiciones.
              </p>
              <div className="mt-8">
                <Link
                  to="/tours"
                  className="btn-gold inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-body text-base font-bold transition hover:-translate-y-0.5"
                >
                  Descubre nuestras experiencias
                  <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </Link>
              </div>
            </Reveal>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default SobreNosotrosPage;
