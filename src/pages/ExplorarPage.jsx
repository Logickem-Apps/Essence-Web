import React, { useState, useEffect } from 'react';
import Seo from '@/components/Seo.jsx';
import { motion } from 'framer-motion';
import { Info, Utensils, Landmark, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/immersive/PageHero.jsx';
import Reveal from '@/components/immersive/Reveal.jsx';
import CtaBand from '@/components/immersive/CtaBand.jsx';

const explorarCards = [
  {
    id: 'informacion',
    icon: Info,
    title: 'Información de Rabinal',
    blurb: 'Geografía, historia y raíces del municipio maya Achí.',
    image: '/images/sit-rabinal-panoramica.webp',
    content: {
      title: 'Rabinal, Baja Verapaz',
      description: 'Rabinal es un municipio del departamento de Baja Verapaz, en el corazón de Guatemala. Enclavado en la Sierra de Chuacús, es uno de los pueblos más antiguos y culturalmente ricos de la región, cuna del pueblo maya Achí.',
      sections: [
        {
          subtitle: 'Ubicación y geografía',
          paragraphs: [
            'Rabinal se asienta en un valle rodeado de montañas fértiles dentro de la Sierra de Chuacús, a unos 973 metros sobre el nivel del mar. Su clima es tropical (cálido y templado), lo que favorece una agricultura variada durante todo el año.',
            'El municipio abarca una extensión aproximada de 504 km² y una densidad cercana a los 89 habitantes por km². Su territorio se organiza en la cabecera municipal, 28 aldeas y unos 50 caseríos, lo que lo convierte en una zona amplia y geográficamente diversa.'
          ]
        },
        {
          subtitle: 'Historia y fundación',
          paragraphs: [
            'Con raíces prehispánicas profundas, el asentamiento maya Achí fue reorganizado durante la evangelización pacífica de las Verapaces liderada por los frailes dominicos. Rabinal fue fundado como pueblo colonial el 25 de enero de 1538 por Fray Bartolomé de las Casas y Fray Pedro de Angulo, bajo el nombre de San Pablo Rabinal.',
            'Fue uno de los primeros pueblos establecidos en la antigua "Tierra de Guerra", región que más tarde pasó a llamarse Verapaz precisamente por haberse sometido de forma pacífica.'
          ]
        },
        {
          subtitle: 'Gente, idioma y economía',
          paragraphs: [
            'Rabinal es hogar del pueblo maya Achí, con una población que supera los 45,000 habitantes. Se hablan el español y el achí, lengua maya que se mantiene viva en la vida cotidiana y en las ceremonias.',
            'Sus tierras fértiles y abundante agua sustentan cultivos de maíz, frijol y caña de azúcar, y el municipio es especialmente reconocido por sus naranjas. La artesanía es otro emblema: los rabinalenses son famosos por tallar y pintar jícaras hechas del fruto del morro (Crescentia alata), decoradas con vivos colores amarillo, negro y rojo, además de su cerámica tradicional.'
          ]
        }
      ],
      highlights: [
        'Población: más de 45,000 habitantes',
        'Extensión: aproximadamente 504 km²',
        'Altitud: 973 metros sobre el nivel del mar',
        'Idiomas: español y achí (lengua maya)',
        'Fundado el 25 de enero de 1538 como San Pablo Rabinal',
        'Organizado en 28 aldeas y unos 50 caseríos'
      ],
      imageAlt: 'Panorámica de Rabinal, Baja Verapaz'
    }
  },
  {
    id: 'cultura',
    icon: Landmark,
    title: 'Cultura',
    blurb: 'El Rabinal Achí, danzas ancestrales y cofradías vivas.',
    image: '/images/cult-rabinal-achi-cultura.webp',
    content: {
      title: 'Patrimonio Cultural de Rabinal',
      description: 'Rabinal es uno de los epicentros del folclore guatemalteco. El pueblo Achí ha preservado por siglos sus danzas, música, ceremonias y cofradías, manteniendo viva una identidad cultural única en el país.',
      sections: [
        {
          subtitle: 'El Rabinal Achí (Xajoj Tun)',
          paragraphs: [
            'El Rabinal Achí, también llamado Xajoj Tun ("baile del tun"), es un drama dinástico maya del siglo XV que combina teatro, danza de máscaras y música. Narra el conflicto entre los señoríos de los Rabinaleb\' y los K\'iche\', a través de sus protagonistas: el Rabinal Achí y el K\'iche Achí, este último capturado y juzgado por intentar raptar a los hijos de los Rabinaleb\'.',
            'La UNESCO lo proclamó Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad en 2005 y lo inscribió en la Lista Representativa del Patrimonio Cultural Inmaterial en 2008. Desde la época colonial se representa cada 25 de enero, día de San Pablo, organizado por las cofradías locales.'
          ]
        },
        {
          subtitle: 'Tierra de danzas',
          paragraphs: [
            'Rabinal es el municipio con el mayor número de danzas tradicionales de Guatemala: se han documentado alrededor de 36, aunque cerca de 17 se han ido perdiendo con el tiempo.',
            'Además del Rabinal Achí, destacan danzas como Los Negritos, la Pazca y el Baile de la Conquista. Los instrumentos ancestrales —como el tun, la chirimía y la marimba— marcan el pulso de cada celebración.'
          ]
        },
        {
          subtitle: 'Cofradías y fe',
          paragraphs: [
            'La vida ceremonial de Rabinal gira en torno a sus cofradías, que resguardan las imágenes sagradas y organizan las festividades. El municipio celebra dos grandes ferias: la de su patrono San Pablo Apóstol, el 25 de enero, y la de la Virgen del Patrocinio, el 15 de noviembre.'
          ]
        },
        {
          subtitle: 'Personajes del Rabinal Achí',
          paragraphs: [
            'La representación cobra vida a través de personajes emblemáticos, cada uno con un rol fundamental en la narrativa:'
          ],
          list: [
            { title: 'Rabinal Achí', description: 'Guerrero y héroe de los Rabinaleb\', hijo del soberano Job Toj.' },
            { title: 'K\'iche Achí', description: 'Guerrero rival de los K\'iche\', capturado por los Rabinaleb\'.' },
            { title: 'Job Toj', description: 'Soberano y señor de los Rabinaleb\'.' },
            { title: 'Ixoq Mun', description: 'Sirvienta de la corte.' },
            { title: 'Guerreros Águila y Jaguar', description: 'Guerreros ceremoniales de la corte.' }
          ]
        }
      ],
      highlights: [
        'Rabinal Achí: Patrimonio de la Humanidad (UNESCO, 2005; inscrito en 2008)',
        'Se representa cada 25 de enero, día de San Pablo',
        'Cerca de 36 danzas tradicionales documentadas',
        'Instrumentos ancestrales: tun, chirimía y marimba',
        'Rica vida ceremonial organizada por las cofradías'
      ],
      imageAlt: 'Representación del Rabinal Achí'
    }
  },
  {
    id: 'gastronomia',
    icon: Utensils,
    title: 'Gastronomía',
    blurb: 'Pinol, boxbol, chilate y los sabores de raíz maya.',
    image: '/images/gas-gastronomia-boxbol.webp',
    content: {
      title: 'Sabores Tradicionales de Rabinal',
      description: 'La cocina de Rabinal es un testimonio vivo de la herencia maya Achí: recetas ancestrales, ingredientes locales y bebidas ceremoniales que se transmiten de generación en generación.',
      sections: [
        {
          subtitle: 'Pinol (K\'aj)',
          paragraphs: [
            'El Pinol de Rabinal, o K\'aj, es un platillo prehispánico de carácter ceremonial, tradicionalmente preparado por las cofradías. Consiste en carne —usualmente pollo— cocida en un caldo espesado con maíz tostado y molido, sazonado con especias.',
            'Su valor cultural es tal que la técnica de elaboración del Pinol de Rabinal fue declarada Patrimonio Cultural Intangible de la Nación en 2015.'
          ]
        },
        {
          subtitle: 'Boxbol',
          paragraphs: [
            'El boxbol (o boshbol) es un platillo elaborado con masa de maíz envuelta en hojas tiernas de ayote (chilacayote). Se acompaña de una salsa de pepitoria (semilla de ayote molida) y miltomate, resultando en un bocado sencillo, nutritivo y profundamente tradicional.'
          ]
        },
        {
          subtitle: 'Chilate',
          paragraphs: [
            'El chilate es la bebida ceremonial por excelencia de Rabinal. Fusiona la riqueza del maíz nixtamalizado —cocido con ceniza— y el cacao ancestral, y se sirve tradicionalmente en jícara. En el municipio, cada "Miércoles de Chilate" se convierte en una ceremonia viva alrededor de esta bebida milenaria.'
          ]
        },
        {
          subtitle: 'Atoles y dulces tradicionales',
          paragraphs: [
            'La oferta se completa con una variedad de atoles y dulces heredados: el atol de tres cocimientos, los táscals de maíz endulzados con rapadura y los totopostes dulces, entre otras preparaciones artesanales.'
          ]
        }
      ],
      highlights: [
        'Pinol (K\'aj): técnica declarada Patrimonio Cultural Intangible de la Nación (2015)',
        'Boxbol: masa de maíz en hoja de ayote con pepitoria y miltomate',
        'Chilate: bebida ceremonial de maíz y cacao servida en jícara',
        'Atol de tres cocimientos, táscals y totopostes dulces',
        'Ingredientes locales y recetas de raíz maya Achí'
      ],
      imageAlt: 'Preparación tradicional de Boxbol'
    }
  }
];

function ExplorarPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  // Al alternar entre la grilla y el detalle, reinicia el scroll al inicio para que la vista no quede a medias.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCard]);

  return (
    <>
      <Seo
        title="Explorar Rabinal - Essence Rabinal"
        description="Descubre información sobre Rabinal, su cultura, gastronomía y tradiciones. Conoce la rica herencia del pueblo maya Achí en Baja Verapaz, Guatemala."
        path="/explorar"
      />

      <div className="flex min-h-screen flex-col bg-ink">
        <Header />

        <main className="flex-1">
          {!selectedCard ? (
            <>
              <PageHero
                breadcrumb={<>Inicio &nbsp;/&nbsp; <span className="text-gold">Explorar</span></>}
                title="Explora Rabinal"
                subtitle="Conoce la información, la cultura viva y la gastronomía ancestral de nuestro municipio en la Sierra de Chuacús."
                image="/images/pai-explorar-rabinal.webp"
              />

              <section className="bg-ink py-16 md:py-24">
                <div className="mx-auto max-w-[1340px] px-5 md:px-8">
                  <Reveal className="mx-auto mb-12 max-w-2xl text-center">
                    <div className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Portal Turístico
                    </div>
                    <h2 className="font-display text-3xl font-bold text-white md:text-4xl">¿Qué quieres descubrir?</h2>
                    <p className="mt-4 font-body leading-relaxed text-cream/65">
                      Elige una categoría y sumérgete en la esencia de Rabinal.
                    </p>
                  </Reveal>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {explorarCards.map((card, index) => (
                      <Reveal key={card.id} delay={index * 0.08}>
                        <button
                          type="button"
                          onClick={() => setSelectedCard(card)}
                          className="ez-card ez-lift group relative block h-[420px] w-full overflow-hidden rounded-[20px] border border-white/[0.08] text-left hover:-translate-y-1.5 hover:border-gold/50"
                        >
                          <div
                            className="ez-zoom absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('${card.image}')` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,11,9,0.96)] via-[rgba(8,11,9,0.35)] to-[rgba(8,11,9,0.15)]" />
                          <div className="ez-glass absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl text-gold">
                            <card.icon className="h-6 w-6" />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-6">
                            <h3 className="font-display text-2xl font-semibold text-white">{card.title}</h3>
                            <p className="mt-2 font-body text-sm leading-snug text-cream/75">{card.blurb}</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gold">
                              Descubre más
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
                            </span>
                          </div>
                        </button>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            </>
          ) : (
            <section className="bg-ink py-10 md:py-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-4xl px-5 md:px-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCard(null)}
                  className="mb-6 inline-flex items-center gap-2 font-body text-sm font-medium text-cream/70 transition-colors hover:text-gold"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver a Explorar
                </button>

                <div className="relative isolate h-[300px] overflow-hidden rounded-[24px] border border-white/[0.08] md:h-[420px]">
                  <img
                    src={selectedCard.content.image || selectedCard.image}
                    alt={selectedCard.content.imageAlt || selectedCard.content.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,11,9,0.95)] via-[rgba(8,11,9,0.35)] to-[rgba(8,11,9,0.1)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                    <div className="ez-glass mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-gold">
                      <selectedCard.icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                      {selectedCard.content.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-8 font-body text-xl leading-relaxed text-cream/85">
                  {selectedCard.content.description}
                </p>

                <div className="mt-10 space-y-10">
                  {selectedCard.content.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="relative pl-4 font-display text-2xl font-semibold text-white before:absolute before:bottom-1 before:left-0 before:top-1 before:w-1 before:rounded-full before:bg-gold">
                        {section.subtitle}
                      </h3>
                      {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="font-body text-lg leading-relaxed text-cream/70">{p}</p>
                      ))}
                      {section.list && (
                        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {section.list.map((item, itemIdx) => (
                            <li key={itemIdx} className="ez-glass ez-lift rounded-xl p-4 hover:border-gold/40">
                              <strong className="mb-1 block font-display font-semibold text-white">{item.title}</strong>
                              <span className="font-body text-sm leading-relaxed text-cream/65">{item.description}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {selectedCard.content.highlights && (
                  <div className="mt-10">
                    <h3 className="mb-5 font-display text-xl font-semibold text-white">Datos destacados</h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {selectedCard.content.highlights.map((h, i) => (
                        <div key={i} className="ez-glass flex items-start gap-3 rounded-xl p-4">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/20">
                            <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.6} />
                          </span>
                          <span className="font-body text-sm leading-relaxed text-cream/80">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </section>
          )}

          <CtaBand
            title="¿Quieres vivir esto de cerca?"
            subtitle="Nuestros guías locales de la comunidad Achí te llevan a descubrir Rabinal con la profundidad que solo quien lo habita puede ofrecer."
            ctaLabel="Reserva con un guía local"
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ExplorarPage;
