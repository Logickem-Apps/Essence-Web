import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

function HomeHero() {
  return (
    <section className="relative w-full min-h-[90dvh] flex items-center justify-center overflow-hidden isolate">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518182170546-076616fdca44?q=80&w=2000&auto=format&fit=crop"
          alt="Paisaje impresionante de Rabinal, Baja Verapaz"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Brand Color Overlay (Verde Institucional #234126) */}
      <div className="absolute inset-0 z-10 bg-accent/40 mix-blend-multiply transition-opacity duration-1000"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-accent via-accent/60 to-transparent"></div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 backdrop-blur-md mb-8 text-secondary font-medium tracking-wide">
            <MapPin className="w-4 h-4" />
            <span>Rabinal, Baja Verapaz</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-md font-display">
            Descubre la Esencia de <span className="text-secondary italic font-light pr-2">Nuestra Tierra</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
            Sumérgete en la rica herencia cultural, las maravillas naturales y la calidez del pueblo Maya Achí. Tu aventura auténtica comienza aquí.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-xl px-8 py-6 text-lg" asChild>
              <Link to="/tours">
                Explorar Tours
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-accent bg-transparent" asChild>
              <Link to="/sobre-nosotros">
                Nuestra Historia
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Brand Elements */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-90 z-30"></div>
    </section>
  );
}

export default HomeHero;