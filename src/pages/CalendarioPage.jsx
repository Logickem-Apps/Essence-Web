import React, { useEffect } from 'react';
import Seo from '@/components/Seo.jsx';
import { Link, useLocation } from 'react-router-dom';
import { CalendarDays, ArrowRight, PartyPopper, Church, Cross, Flower2, Flame, Baby, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/immersive/PageHero.jsx';
import Reveal from '@/components/immersive/Reveal.jsx';
import SectionHeading from '@/components/immersive/SectionHeading.jsx';
import { getEventStatus } from '@/lib/calendarEvents';

// Actividades y celebraciones de Rabinal (orden cronológico del año).
// `id` mapea con lib/calendarEvents para resaltar las que están por suceder / en curso.
const events = [
  {
    id: 'san-pablo',
    title: 'Feria Patronal de San Pablo Apóstol',
    badge: '17–25 ENE',
    date: '17 al 25 de enero · Día principal: 25 de enero',
    type: 'Religiosa y cultural',
    icon: PartyPopper,
    description:
      'Durante nueve días se realizan actividades religiosas, culturales, deportivas, gastronómicas y recreativas en honor a San Pablo Apóstol. El día principal se presenta el Rabinal Achí —Patrimonio de la Humanidad— junto a danzas tradicionales como La Sierpe, Los Costeños y Los Moros, mientras las cofradías realizan procesiones con las imágenes de San Pablo y San Pedro.',
  },
  {
    id: 'semana-santa',
    title: 'Semana Santa',
    badge: 'MAR–ABR',
    date: 'Fecha variable (entre finales de marzo y finales de abril)',
    type: 'Religiosa',
    icon: Cross,
    description:
      'Inicia con el Domingo de Ramos y finaliza con el Domingo de Resurrección. Su fecha depende del calendario lunar: el Domingo de Resurrección se celebra el primer domingo después de la primera luna llena posterior al equinoccio de primavera.',
  },
  {
    id: 'santa-cruz',
    title: 'Día de la Santa Cruz',
    badge: '3 MAY',
    date: '3 de mayo',
    type: 'Religiosa',
    icon: Cross,
    description:
      'Celebración religiosa tradicional donde participan familias, comunidades y cofradías con altares, misas y actividades culturales.',
  },
  {
    id: 'corpus',
    title: 'Celebración de Corpus Christi',
    badge: 'MAY–JUN',
    date: 'Fecha variable (60 días después del Domingo de Resurrección)',
    type: 'Religiosa',
    icon: Church,
    description:
      'Solemnidad del Cuerpo y la Sangre de Cristo, celebrada después de Pentecostés y de la Santísima Trinidad. En Rabinal es una de las festividades religiosas más emblemáticas del municipio, acompañada de tradiciones como el Miércoles de Chilate.',
    image: '/images/cult-miercoles-chilate.webp',
    imageAlt: 'Miércoles de Chilate, tradición de Corpus Christi en Rabinal',
  },
  {
    id: 'todos-santos',
    title: 'Día de Todos los Santos',
    badge: '1 NOV',
    date: '1 de noviembre',
    type: 'Religiosa y familiar',
    icon: Flower2,
    description:
      'Las familias visitan el cementerio, adornan las tumbas y participan en actividades religiosas en memoria de sus seres queridos.',
  },
  {
    id: 'difuntos',
    title: 'Conmemoración de los Fieles Difuntos',
    badge: '2 NOV',
    date: '2 de noviembre',
    type: 'Religiosa y familiar',
    icon: Flame,
    description:
      'Se recuerda a los seres queridos fallecidos mediante visitas al cementerio, oraciones y celebraciones litúrgicas.',
  },
  {
    id: 'corrida-nino',
    title: 'Corrida del Niño',
    badge: '25 DIC',
    date: '25 de diciembre',
    type: 'Religiosa y tradicional',
    icon: Baby,
    description:
      'Tradición navideña propia de Rabinal, también conocida como "La Visita del Niño". La cofradía de la Natividad encabeza la festividad: cofrades y vecinos corren con la imagen del Niño Dios por las calles al ritmo del tambor, anunciando su nacimiento, entre música, gastronomía y pirotecnia.',
  },
  {
    title: 'Celebraciones de las Cofradías',
    badge: 'TODO EL AÑO',
    date: 'Durante todo el año (fechas según cada santo patrono)',
    type: 'Religiosa y ceremonial',
    icon: Users,
    description:
      'Rabinal conserva 16 cofradías tradicionales, cada una con su propia festividad dedicada a un santo patrono. Sus celebraciones son un pilar de la identidad del municipio.',
    activities: [
      'Procesiones',
      'Velaciones',
      'Marimba',
      'Música ceremonial',
      'Danzas tradicionales',
      'Gastronomía típica',
      'Ceremonias religiosas',
    ],
  },
];

function CalendarioPage() {
  const location = useLocation();

  // Al llegar desde la notificación del Home (/calendario#id), enfoca esa actividad.
  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title="Calendario de Actividades - Essence Rabinal"
        description="Conoce las actividades y celebraciones de Rabinal, Baja Verapaz: feria patronal de San Pablo, Semana Santa, Corrida del Niño, cofradías y más. Planifica tu visita según la fecha."
        path="/calendario"
      />

      <div className="flex min-h-screen flex-col bg-ink">
        <Header />

        <main className="flex-1">
          <PageHero
            breadcrumb={<>Inicio &nbsp;/&nbsp; <span className="text-gold">Calendario</span></>}
            title="Calendario de Actividades"
            subtitle="Descubre las celebraciones y tradiciones de Rabinal a lo largo del año, y planifica tu visita para vivirlas de cerca."
            image="/images/cult-mask.webp"
          />

          <section className="bg-ink py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-5 md:px-8">
              <SectionHeading
                eyebrow="Todo el año en Rabinal"
                title="Festividades y tradiciones"
                subtitle="Un municipio que celebra su fe y su cultura durante todo el año. Coincide tu visita con una de sus fiestas y vívela de cerca."
                className="mb-10 md:mb-14"
              />

              <Reveal className="mb-12 flex items-start gap-3 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.12] to-jade/[0.06] p-5">
                <CalendarDays className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <p className="font-body text-sm leading-relaxed text-cream/75">
                  Algunas festividades tienen <strong className="text-cream">fecha variable</strong> (dependen del
                  calendario litúrgico o lunar). Te recomendamos confirmar las fechas con nosotros antes de planificar tu
                  viaje.
                </p>
              </Reveal>

              <div className="relative">
                <span
                  aria-hidden
                  className="absolute bottom-4 left-[23px] top-3 w-0.5 bg-gradient-to-b from-gold/60 via-jade/30 to-transparent md:left-[27px]"
                />

                <div className="flex flex-col gap-7">
                  {events.map((ev, i) => {
                    const Icon = ev.icon;
                    const status = ev.id ? getEventStatus(ev.id) : null;
                    const nodeCls =
                      status === 'ongoing'
                        ? 'border-jade bg-jade/20 text-jade'
                        : status === 'upcoming'
                        ? 'border-gold bg-gold/20 text-gold'
                        : 'border-gold/30 bg-ink-2 text-gold';
                    const cardBorder =
                      status === 'ongoing'
                        ? 'border-jade/70'
                        : status === 'upcoming'
                        ? 'border-gold/70'
                        : 'border-white/[0.08] bg-ink-2 hover:border-gold/40';
                    const cardStyle =
                      status === 'ongoing'
                        ? { background: 'linear-gradient(135deg, rgba(63,182,139,0.30), rgba(63,182,139,0.13))' }
                        : status === 'upcoming'
                        ? { background: 'linear-gradient(135deg, rgba(224,169,84,0.30), rgba(224,169,84,0.13))' }
                        : undefined;
                    return (
                      <Reveal key={ev.title} delay={(i % 4) * 0.06} className="relative pl-[68px] md:pl-24">
                        <div
                          className={`absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_0_0_5px_var(--ink)] md:h-14 md:w-14 ${nodeCls}`}
                        >
                          <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.8} />
                          {status === 'ongoing' && (
                            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade opacity-70" />
                              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-ink bg-jade" />
                            </span>
                          )}
                        </div>

                        <article id={ev.id} className={`ez-lift scroll-mt-28 rounded-[20px] border p-6 transition-colors md:p-7 ${cardBorder}`} style={cardStyle}>
                          <div className="mb-2.5 flex flex-wrap items-center gap-2.5">
                            <span className="rounded-full bg-gold/15 px-3 py-1 font-display text-xs font-bold tracking-wide text-gold">
                              {ev.badge}
                            </span>
                            <span className="font-body text-xs font-semibold uppercase tracking-wider text-jade">
                              {ev.type}
                            </span>
                            {status === 'ongoing' && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-jade/20 px-3 py-1 font-body text-xs font-bold text-jade">
                                <span className="h-1.5 w-1.5 rounded-full bg-jade" />
                                Sucediendo ahora
                              </span>
                            )}
                            {status === 'upcoming' && (
                              <span className="rounded-full bg-gold/20 px-3 py-1 font-body text-xs font-bold text-gold">
                                Próximamente
                              </span>
                            )}
                          </div>
                          <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{ev.title}</h3>
                          <p className="mb-3 mt-1 font-body text-sm font-medium text-gold/80">{ev.date}</p>
                          <p className="font-body leading-relaxed text-cream/70">{ev.description}</p>

                          {ev.image && (
                            <img
                              src={ev.image}
                              alt={ev.imageAlt || ev.title}
                              loading="lazy"
                              className="mt-4 h-52 w-full rounded-xl border border-white/10 object-cover"
                            />
                          )}

                          {ev.activities && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {ev.activities.map((a) => (
                                <span
                                  key={a}
                                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-body text-xs font-medium text-cream/80"
                                >
                                  {a}
                                </span>
                              ))}
                            </div>
                          )}
                        </article>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              <Reveal className="mt-12 rounded-[20px] border border-gold/30 bg-gradient-to-br from-gold/[0.16] to-jade/10 p-8 text-center md:p-10">
                <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
                  ¿Quieres coincidir con una celebración?
                </h2>
                <p className="mx-auto mb-6 max-w-xl font-body leading-relaxed text-cream/80">
                  Escríbenos y te ayudamos a planificar tu visita para vivir de cerca las tradiciones de Rabinal.
                </p>
                <Link
                  to="/contacto"
                  className="btn-gold inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-body text-base font-bold transition hover:-translate-y-0.5"
                >
                  Planificar mi visita
                  <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </Link>
              </Reveal>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default CalendarioPage;
