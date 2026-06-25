import React from 'react';
import { motion } from 'framer-motion';

function ToursHero() {
  return (
    <section className="relative py-20 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Subtle Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <img 
          src="https://images.unsplash.com/photo-1518182170546-076616fdfaaf?q=80&w=2000&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="title-hero mb-6">
            Tours y Experiencias
          </h1>
          <p className="text-desc text-secondary-foreground/80 font-medium max-w-2xl mx-auto">
            Descubre Rabinal a través de experiencias auténticas y personalizadas. Conecta con nuestra cultura, nuestra gente y nuestros paisajes inolvidables.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ToursHero;