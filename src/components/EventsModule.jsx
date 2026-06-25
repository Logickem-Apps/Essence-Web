import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getUpcomingEvents } from '@/lib/eventsData.js';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function EventBadge({ category }) {
  return (
    <span 
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ backgroundColor: `hsl(var(${category.colorVar}) / 0.1)`, color: `hsl(var(${category.colorVar}))` }}
    >
      <span>{category.emoji}</span>
      {category.label}
    </span>
  );
}

function CountdownBadge({ targetDate }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const diff = targetDate.getTime() - new Date().getTime();
    setDays(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [targetDate]);

  return (
    <div className="bg-background/80 backdrop-blur-sm border border-border/50 px-3 py-1.5 rounded-lg shadow-sm text-sm font-medium">
      Faltan <span className="text-primary font-bold">{days}</span> días
    </div>
  );
}

function EventCard({ event }) {
  const Icon = event.icon;
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <CountdownBadge targetDate={event.dateObj} />
      </div>
      <EventBadge category={event.category} />
      <h4 className="text-xl font-bold mt-3 mb-2">{event.name}</h4>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{event.desc}</p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
        <Calendar className="w-4 h-4" />
        <span>{event.startDay} de {MONTHS[event.startMonth]}</span>
      </div>
    </div>
  );
}

export default function EventsModule() {
  const upcomingEvents = useMemo(() => getUpcomingEvents(4), []);
  const nextEvent = upcomingEvents[0];

  if (!nextEvent) return null;

  return (
    <div className="w-full max-w-6xl mx-auto my-16 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Eventos Próximos en Rabinal</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Descubre las celebraciones y tradiciones que dan vida a nuestra comunidad.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.slice(1).map((event, idx) => (
          <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
            <EventCard event={event} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}