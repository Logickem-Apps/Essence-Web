import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';
import PageHero from '@/components/immersive/PageHero.jsx';
import Reveal from '@/components/immersive/Reveal.jsx';
import { socials } from '@/lib/socials.jsx';
import pb from '@/lib/pocketbaseClient';

// En Contacto no mostramos WhatsApp aquí (ya está el formulario y el botón flotante).
const socialLinks = socials.filter((s) => s.label !== 'WhatsApp');

const contactInfo = [
  { icon: MapPin, title: 'Ubicación', content: 'Rabinal, Baja Verapaz, Guatemala' },
  { icon: Phone, title: 'Teléfono', content: '+502 3850 6731', href: 'tel:+50238506731' },
  { icon: Mail, title: 'Email', content: 'info@essencerabinal.com', href: 'mailto:info@essencerabinal.com' },
  { icon: Clock, title: 'Horario', content: 'Lunes a Domingo · 8:00 AM – 6:00 PM' },
];

const trustPoints = [
  'Respuesta rápida por WhatsApp',
  'Guías locales de la comunidad Achí',
  'Turismo 100% comunitario y sostenible',
];

function ContactoPage() {
  const location = useLocation();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const records = await pb.collection('testimonials').getFullList({ sort: '-created', $autoCancel: false });
        setTestimonials(records);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  const selectedTour = location.state?.selectedTour || location.state?.interestedIn || '';

  return (
    <>
      <Helmet>
        <title>Contacto - Essence Rabinal</title>
        <meta name="description" content="Contáctanos para reservar tu tour en Rabinal. Estamos disponibles por WhatsApp, teléfono y email. Respuesta rápida garantizada." />
      </Helmet>

      <div className="flex min-h-screen flex-col bg-ink">
        <Header />

        <main className="flex-1">
          <PageHero
            breadcrumb={<>Inicio &nbsp;/&nbsp; <span className="text-gold">Contacto</span></>}
            title="Contáctanos"
            subtitle="Estamos aquí para ayudarte a planificar tu experiencia perfecta en Rabinal."
            image="/images/pai-rabinal-panoramica-alt.webp"
          />

          <section className="bg-ink py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Form */}
                <Reveal className="ez-glass rounded-[20px] p-7 md:p-9">
                  <h2 className="mb-6 font-display text-2xl font-bold text-white">Envíanos un mensaje</h2>
                  <ContactForm initialTourInterest={selectedTour} />
                </Reveal>

                {/* Info + WhatsApp */}
                <Reveal delay={0.12} className="space-y-6">
                  <div className="ez-glass rounded-[20px] p-7 md:p-9">
                    <h2 className="mb-6 font-display text-2xl font-bold text-white">Información de contacto</h2>
                    <div className="space-y-2">
                      {contactInfo.map((info) => {
                        const Row = (
                          <>
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold/25 to-jade/20 text-gold">
                              <info.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="mb-0.5 font-display font-semibold text-white">{info.title}</p>
                              <p className="font-body text-cream/70">{info.content}</p>
                            </div>
                          </>
                        );
                        return info.href ? (
                          <a
                            key={info.title}
                            href={info.href}
                            className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/[0.04]"
                          >
                            {Row}
                          </a>
                        ) : (
                          <div key={info.title} className="flex items-start gap-4 p-2">
                            {Row}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                      {trustPoints.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-jade/20 text-jade">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="font-body text-sm text-cream/75">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[20px] bg-gradient-to-br from-gold/[0.18] to-jade/10 p-7 md:p-9">
                    <p className="font-display text-lg font-semibold text-white">Síguenos en redes</p>
                    <p className="mt-1 font-body text-cream/70">
                      Fotos, novedades y las tradiciones de Rabinal en tiempo real.
                    </p>
                    <div className="mt-5 flex gap-3">
                      {socialLinks.map(({ href, label, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cream transition-colors hover:bg-gold hover:text-gold-ink"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              {testimonials.length > 0 && (
                <section>
                  <Reveal className="mb-8 text-center">
                    <h2 className="mb-4 font-display text-3xl font-bold text-white">Lo que dicen nuestros clientes</h2>
                    <p className="font-body text-cream/65">
                      Experiencias reales de viajeros que han descubierto Rabinal con nosotros
                    </p>
                  </Reveal>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                      <Reveal key={testimonial.id} delay={index * 0.1}>
                        <TestimonialCard testimonial={testimonial} />
                      </Reveal>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactoPage;
