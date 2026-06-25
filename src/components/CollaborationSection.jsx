import React from 'react';
import { motion } from 'framer-motion';

export default function CollaborationSection() {
  return (
    <section className="collab-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="collab-title"
        >
          En colaboración con
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-6 mb-10"
        >
          {/* Alliance Symbol - Above Logo */}
          <div className="text-5xl md:text-6xl text-primary/40 animate-pulse">
            🤝
          </div>

          {/* Logo: Rabinal Travel - Centered */}
          <a href="#" className="collab-logo-card group w-64 h-40 md:w-72 md:h-48" aria-label="Rabinal Travel">
            <img
              src="https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/ce3de71375727d41dc653aec5ad30066.jpg"
              alt="Rabinal Travel"
              className="collab-logo"
              loading="lazy"
            />
          </a>

          {/* Commitment Phrase - Below Logo */}
          <p className="text-sm md:text-base text-muted-foreground text-center max-w-2xl leading-relaxed font-medium">
            Fortaleciendo experiencias auténticas y turismo con identidad local en Rabinal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="collab-desc">
            Esta experiencia turística es fortalecida mediante alianzas locales enfocadas en cultura, identidad, desarrollo comunitario y promoción responsable del territorio.
          </p>
        </motion.div>

      </div>
    </section>
  );
}