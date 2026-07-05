import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Check, ArrowRight } from 'lucide-react';

function TourCard({ tour = {} }) {
  if (!tour || Object.keys(tour).length === 0) return null;

  const {
    name = 'Tour no disponible',
    description = 'Descripción no disponible en este momento.',
    duration = 'Por definir',
    image = 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
    includes = [],
  } = tour;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="ez-card group flex h-full flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-ink-2 transition-colors duration-300 hover:border-gold/50"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="ez-zoom absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-2/70 via-transparent to-transparent" />
        <div
          className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-3 py-1.5 font-body text-[13px] font-semibold text-gold shadow-lg"
          style={{ backgroundColor: 'rgba(11, 14, 12, 0.92)' }}
        >
          <Clock className="h-4 w-4" />
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="mb-3 font-display text-2xl font-bold text-white">{name}</h3>
        <p className="mb-5 font-body leading-relaxed text-cream/70">{description}</p>

        {Array.isArray(includes) && includes.length > 0 && (
          <div className="mb-6">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wider text-gold">Incluye</p>
            <ul className="space-y-2">
              {includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-body text-sm text-cream/80">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-jade/15">
                    <Check className="h-3 w-3 text-jade" strokeWidth={3} />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          to="/contacto"
          state={{ interestedIn: name }}
          className="btn-gold mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-bold transition"
        >
          Solicitar información
          <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
        </Link>
      </div>
    </motion.article>
  );
}

export default TourCard;
