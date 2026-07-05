import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

function ToursHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 md:py-32">
      <div
        className="absolute inset-0 z-0 animate-ken-burns bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pai-ruta-naturaleza.webp')" }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/55 to-ink/90" />
      <div className="absolute inset-0 z-[1] [background:radial-gradient(80%_70%_at_50%_50%,rgba(11,14,12,0.5)_0%,transparent_72%)]" />

      <div className="container relative z-[2] mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div
            className="ez-glass mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold"
            style={{ backgroundColor: 'rgba(11, 14, 12, 0.5)' }}
          >
            <MapPin className="h-4 w-4" />
            Rabinal, Baja Verapaz
          </div>
          <h1
            className="mb-5 font-display text-4xl font-bold tracking-tight text-white md:text-6xl"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)' }}
          >
            Tours y Experiencias
          </h1>
          <p
            className="mx-auto max-w-2xl font-body text-base leading-relaxed text-cream/90 md:text-lg"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.55)' }}
          >
            Descubre Rabinal a través de experiencias auténticas y personalizadas. Conecta con nuestra cultura,
            nuestra gente y nuestros paisajes inolvidables.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ToursHero;
