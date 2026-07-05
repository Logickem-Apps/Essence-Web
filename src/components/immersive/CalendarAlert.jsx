import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, PartyPopper, ArrowRight, X, CalendarDays } from 'lucide-react';
import { getCalendarHighlight, formatEventDate } from '@/lib/calendarEvents';

/**
 * Notificación del Home que solo aparece cuando se aproxima (versión 1) o está
 * en curso (versión 2) una festividad del calendario de Rabinal.
 */
// Permite previsualizar la notificación con una fecha simulada: /?fecha=2026-12-25
function resolveNow() {
  try {
    const p = new URLSearchParams(window.location.search).get('fecha');
    if (p) {
      const d = new Date(`${p}T12:00:00`);
      if (!Number.isNaN(d.getTime())) return d;
    }
  } catch {
    /* ignore */
  }
  return new Date();
}

function CalendarAlert() {
  const info = getCalendarHighlight(resolveNow());

  // Se cierra sin confirmación, pero NO se persiste: al recargar la página vuelve a aparecer.
  const [dismissed, setDismissed] = useState(false);

  if (!info || dismissed) return null;

  const close = () => setDismissed(true);

  const ongoing = info.status === 'ongoing';
  const dateLabel = formatEventDate(info.event);
  const countdown = info.daysUntil === 1 ? 'Mañana' : `Faltan ${info.daysUntil} días`;

  const Icon = ongoing ? PartyPopper : Bell;
  const eyebrow = ongoing ? 'Sucediendo ahora' : 'Próxima festividad';
  const meta = ongoing ? `Hoy · ${dateLabel}` : `${countdown} · ${dateLabel}`;

  return (
    <div className="animate-rise absolute right-4 top-20 z-30 w-[calc(100%-2rem)] max-w-[340px] md:right-6 md:top-24">
      <div
        className={`relative overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-md ${
          ongoing ? 'border-jade/50' : 'border-gold/45'
        }`}
        style={{
          background: ongoing
            ? 'linear-gradient(135deg, rgba(63,182,139,0.22), rgba(11,14,12,0.92))'
            : 'linear-gradient(135deg, rgba(224,169,84,0.22), rgba(11,14,12,0.92))',
        }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar aviso"
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-cream/60 transition-colors hover:bg-white/10 hover:text-cream"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <div
            className={`relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${
              ongoing ? 'text-jade' : 'text-gold'
            }`}
            style={{ backgroundColor: 'rgba(11,14,12,0.5)' }}
          >
            <Icon className="h-[22px] w-[22px]" strokeWidth={1.9} />
            {ongoing && (
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-jade" />
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div
              className={`mb-0.5 font-body text-[10px] font-bold uppercase tracking-[0.16em] ${
                ongoing ? 'text-jade' : 'text-gold'
              }`}
            >
              {eyebrow}
            </div>
            <h3 className="font-display text-[15px] font-semibold leading-snug text-white line-clamp-2">
              {info.event.title}
            </h3>
            <div className="mt-1 flex items-center gap-1.5 font-body text-xs font-medium text-cream/75">
              <CalendarDays className="h-3.5 w-3.5 flex-shrink-0" />
              {meta}
            </div>
          </div>
        </div>

        <Link
          to={`/calendario#${info.event.id}`}
          className="btn-gold mt-3 flex w-full items-center justify-center gap-2 rounded-full py-2.5 font-body text-[13px] font-bold transition"
        >
          {ongoing ? 'Vívelo con nosotros' : 'Ver calendario'}
          <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
        </Link>
      </div>
    </div>
  );
}

export default CalendarAlert;
