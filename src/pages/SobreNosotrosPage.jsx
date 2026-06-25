import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
function SobreNosotrosPage() {
  const values = [{
    title: 'Autenticidad',
    description: 'Creamos experiencias reales y significativas que reflejan la esencia viva de Rabinal, conectando a los visitantes con su cultura y su gente de forma genuina.',
    image: 'https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/a67b1fad4b41a6ef6d09fa8cb76125d5.jpg',
    imageAlt: 'Mujer en ropa tradicional Achí con ruinas mayas de fondo, mostrando autenticidad cultural y conexión con tradiciones ancestrales'
  }, {
    title: 'Compromiso comunitario',
    description: 'Trabajamos de la mano con la comunidad local, generando oportunidades y fortaleciendo el desarrollo social a través de cada experiencia.',
    image: 'https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/e168c0531fff5dada1ff7c8effc40505.jpg',
    imageAlt: 'Comunidad local trabajando juntos en actividad colaborativa, mostrando compromiso, empoderamiento y desarrollo comunitario'
  }, {
    title: 'Sostenibilidad',
    description: 'Promovemos un turismo responsable que respeta el entorno natural y cultural, asegurando su preservación para las futuras generaciones.',
    image: 'https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/709485c29196a83b83ba963ac236784b.jpg',
    imageAlt: 'Ruinas mayas en paisaje natural, mostrando preservación del patrimonio cultural y armonía con la naturaleza'
  }];
  return <>
      <Helmet>
        <title>Sobre Nosotros - Essence Rabinal</title>
        <meta name="description" content="Conoce la historia, misión y valores de Essence Rabinal. Promovemos turismo cultural auténtico y sostenible en Rabinal, Baja Verapaz." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative py-20 bg-gradient-to-b from-muted to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Conectando viajeros con la auténtica Esencia de Rabinal
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <motion.div initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }}>
                  <img src="https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/chatgpt-image-2-may-2026-03_42_11-p.m.-3hDF9.png" alt="Cultura de Rabinal" className="rounded-2xl shadow-lg w-full" />
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }} className="space-y-6">
                  <h2 className="text-3xl font-bold">Nuestra Historia</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Essence Rabinal nació del deseo de compartir la riqueza cultural y natural de nuestro territorio con el mundo. Como tour operadora local, conectamos a los viajeros con experiencias auténticas en Rabinal, en colaboración con la comunidad, promoviendo y preservando nuestras tradiciones ancestrales.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada experiencia que ofrecemos es una oportunidad para descubrir la verdadera esencia de Rabinal, desde sus tradiciones mayas hasta su exquisita gastronomía, creando conexiones auténticas que permanecen más allá del viaje.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }} className="text-center mb-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Promover un turismo cultural auténtico en Rabinal, desarrollado en conjunto con la comunidad y con un enfoque sostenible, creando experiencias significativas que conectan a los visitantes con nuestras tradiciones, generando beneficios directos para las comunidades locales y contribuyendo a la preservación y valoración de nuestro patrimonio cultural.
                  </p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Ser el principal referente en turismo cultural comunitario y sostenible en Baja Verapaz, creando experiencias auténticas que conectan a los viajeros con la esencia viva de la cultura Achí y contribuyan activamente al crecimiento y bienestar de nuestras comunidades.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Los principios que guían cada experiencia que creamos
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {values.map((value, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group">
                      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                        <img src={value.image} alt={value.imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      </div>
                      <CardContent className="pt-8 pb-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>
            </div>
          </section>

          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Compromiso con la Comunidad</h2>
                <p className="text-lg md:text-xl leading-relaxed opacity-90">
                  Trabajamos directamente con artesanos, guías comunitarios certificados y familias locales para asegurar que el turismo genere un impacto positivo real en nuestras comunidades. Cada experiencia contribuye al desarrollo económico local y a la preservación de nuestras tradiciones.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default SobreNosotrosPage;