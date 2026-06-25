import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';
import pb from '@/lib/pocketbaseClient';

function ContactoPage() {
  const location = useLocation();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const records = await pb.collection('testimonials').getFullList({
          sort: '-created',
          $autoCancel: false,
        });
        setTestimonials(records);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const selectedTour = location.state?.selectedTour || '';

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Rabinal, Baja Verapaz, Guatemala',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+502 1234 5678',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@essencerabinal.com',
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lunes a Domingo: 8:00 AM - 6:00 PM',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Essence Rabinal</title>
        <meta 
          name="description" 
          content="Contáctanos para reservar tu tour en Rabinal. Estamos disponibles por WhatsApp, teléfono y email. Respuesta rápida garantizada." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Estamos aquí para ayudarte a planificar tu experiencia perfecta en Rabinal
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm initialTourInterest={selectedTour} />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Información de contacto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{info.title}</p>
                          <p className="text-muted-foreground">{info.content}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">¿Prefieres WhatsApp?</p>
                        <p className="opacity-90">Respuesta inmediata</p>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/50212345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-primary-foreground text-primary text-center py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
                    >
                      Abrir WhatsApp
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {testimonials.length > 0 && (
              <section className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
                  <p className="text-muted-foreground">
                    Experiencias reales de viajeros que han descubierto Rabinal con nosotros
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <TestimonialCard testimonial={testimonial} />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactoPage;