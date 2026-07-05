import React from 'react';
import { motion } from 'framer-motion';

/**
 * Dark image hero for inner pages (Inmersivo). Left-aligned breadcrumb +
 * title + subtitle over a Ken Burns background image with gradient overlay.
 */
function PageHero({ breadcrumb, title, subtitle, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div
        className="absolute inset-0 z-0 animate-ken-burns bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      {/* Overlays: vertical fade + extra darkening on the left where the text sits,
          so it stays legible over bright photos without muddying the whole image. */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/50 to-ink/90" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-[2] mx-auto max-w-[1340px] px-5 py-20 md:px-8 md:py-32"
      >
        {breadcrumb && (
          <div
            className="mb-3.5 font-body text-[13px] font-medium uppercase tracking-[0.16em] text-cream/80"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
          >
            {breadcrumb}
          </div>
        )}
        <h1
          className="mb-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="max-w-xl font-body text-base leading-relaxed text-cream/90 md:text-xl"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.55)' }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}

export default PageHero;
