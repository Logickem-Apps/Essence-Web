import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export default function EventHighlight({ event, onViewRelatedTours }) {
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    if (!event?.dateObj) return;
    const diff = event.dateObj.getTime() - new Date().getTime();
    setDaysRemaining(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [event]);

  if (!event) return null;

  const EventIcon = event.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-event-surface border border-primary/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm text-sm font-medium text-event-foreground border border-border/50">
            <Calendar className="w-4 h-4 text-event-highlight" />
            <span>Próximo gran evento</span>
          </div>
          
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-6xl md:text-7xl font-bold font-display tracking-tight text-event-highlight tabular-nums">
              {daysRemaining}
            </span>
            <span className="text-lg font-medium text-event-foreground/70 uppercase tracking-wider mt-2">Días Faltantes</span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:pl-8 lg:border-l border-border/40">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-background rounded-xl shadow-sm text-event-highlight border border-border/50">
              <EventIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-event-foreground">
              {event.name}
            </h3>
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: `hsl(var(${event.category.colorVar}) / 0.1)`, color: `hsl(var(${event.category.colorVar}))` }}>
            <span>{event.category.emoji}</span>
            {event.category.label}
          </div>

          <p className="text-event-foreground/80 leading-relaxed text-lg max-w-lg">
            {event.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm font-medium text-event-foreground/70 pt-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-event-highlight" />
              <span>{event.startDay} de {MONTHS[event.startMonth]}</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-event-highlight/40" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-event-highlight" />
              <span>Rabinal, Baja Verapaz</span>
            </div>
          </div>

          <Button 
            onClick={onViewRelatedTours}
            className="mt-4 gap-2 bg-event-highlight text-white hover:bg-event-highlight/90 shadow-md transition-all duration-300 active:scale-[0.98] group"
            size="lg"
          >
            Ver tours relacionados
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}