import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TourCard({ tour = {} }) {
  if (!tour || Object.keys(tour).length === 0) return null;

  const {
    name = 'Tour no disponible',
    description = 'Descripción no disponible en este momento.',
    duration = 'Por definir',
    image = 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000', // Fallback landscape
    includes = []
  } = tour;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative w-full h-[550px] md:h-[600px] rounded-2xl overflow-hidden hover-card-elevate isolate flex flex-col"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Dark Overlay - slightly darker at the bottom for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-accent/95 via-accent/60 to-accent/20 transition-opacity duration-500 group-hover:opacity-90"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full p-6 md:p-8 text-white justify-end">
        
        {/* Top Badges (Duration) */}
        <div className="mb-auto flex justify-end">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-secondary/50 text-small font-medium text-white/90">
            <Clock className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <h3 className="text-2xl md:text-[28px] font-bold leading-snug mb-3 drop-shadow-md text-white">
            {name}
          </h3>
          
          <p className="text-base md:text-lg leading-relaxed text-white/80 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 mb-6 drop-shadow-sm">
            {description}
          </p>

          {/* Includes List (Revealed/Expanded on hover or normally visible) */}
          {Array.isArray(includes) && includes.length > 0 && (
            <div className="mb-6 space-y-2.5">
              <p className="text-small font-semibold text-secondary uppercase tracking-wider mb-3">Incluye:</p>
              <ul className="space-y-2">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-small text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Button */}
          <Button 
            asChild 
            className="w-full sm:w-auto rounded-xl"
            size="lg"
          >
            <Link to="/contacto" state={{ interestedIn: name }}>
              Solicitar Información
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default TourCard;