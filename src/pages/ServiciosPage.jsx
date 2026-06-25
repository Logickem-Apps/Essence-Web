import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Utensils, Home, Calendar, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

function ServiciosPage() {
  const services = [
    {
      icon: Users,
      title: 'Guías Profesionales',
      description: 'Guías locales certificados con profundo conocimiento de la cultura, historia y tradiciones de Rabinal.',
    },
    {
      icon: Utensils,
      title: 'Comidas y Gastronomía',
      description: 'Degustación de platillos tradicionales preparados por familias locales. Experiencias culinarias auténticas con ingredientes de la región.',
    },
    {
      icon: Home,
      title: 'Asistencia de Alojamiento',
      description: 'Recomendaciones y coordinación de hospedaje en hoteles locales y casas de familia. Opciones para todos los presupuestos.',
    },
    {
      icon: Calendar,
      title: 'Coordinación de Grupos',
      description: 'Organización completa para grupos grandes, incluyendo escuelas, empresas y organizaciones. Itinerarios personalizados según necesidades.',
    },
    {
      icon: Sparkles,
      title: 'Experiencias Personalizadas',
      description: 'Diseñamos tours a medida según tus intereses: fotografía, artesanía, naturaleza, espiritualidad maya o combinaciones únicas.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Essence Rabinal</title>
        <meta 
          name="description" 
          content="Descubre nuestros servicios: guías profesionales, experiencias gastronómicas, alojamiento y tours personalizados en Rabinal." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative py-20 bg-gradient-to-b from-muted to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Servicios completos para hacer de tu visita a Rabinal una experiencia inolvidable
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Experiencia local:</span> Somos nativos de Rabinal con profundo conocimiento de nuestra tierra
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Turismo responsable:</span> Prácticas sostenibles que benefician a las comunidades
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Atención personalizada:</span> Grupos pequeños para experiencias más íntimas
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Flexibilidad:</span> Adaptamos los tours a tus intereses y necesidades
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Seguridad:</span> Protocolos de seguridad y guías certificados
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Autenticidad:</span> Experiencias reales, no escenificadas
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ServiciosPage;