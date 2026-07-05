import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

function CompactEventCard({ event }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    if (!event?.dateObj) return;
    const diff = event.dateObj.getTime() - new Date().getTime();
    setDays(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [event]);

  return (
    <div className="flex items-center gap-4 p-4 bg-card border border-border/50 rounded-2xl hover:shadow-md transition-all duration-300 group">
      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex flex-col items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <span className="text-sm font-bold leading-none">{event.startDay}</span>
        <span className="text-xs uppercase tracking-wider">{MONTHS[event.startMonth]}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-foreground truncate">{event.name}</h4>
          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
            {event.category.emoji} {event.category.label}
          </span>
        </div>
        <p className="text-sm text-muted-foreground truncate">{event.desc}</p>
      </div>

      <div className="flex-shrink-0 text-right hidden sm:block">
        <div className="text-sm font-medium text-foreground">Faltan {days} días</div>
      </div>
    </div>
  );
}

export default function UpcomingEventsList({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="text-2xl font-bold">Eventos próximos en Rabinal</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {events.map((event) => (
          <CompactEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}