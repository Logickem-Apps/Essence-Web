import React from 'react';
import { checkEventOverlap } from '@/lib/eventsData.js';
import { AlertCircle } from 'lucide-react';

export default function EventAlert({ date }) {
  const overlappingEvent = checkEventOverlap(date);

  if (!overlappingEvent) return null;

  return (
    <div className="mt-3 p-3 bg-primary/10 border border-primary/20 rounded-lg flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-foreground">
          {overlappingEvent.category.emoji} Evento activo: Tu viaje coincide con {overlappingEvent.name}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {overlappingEvent.desc}
        </p>
      </div>
    </div>
  );
}