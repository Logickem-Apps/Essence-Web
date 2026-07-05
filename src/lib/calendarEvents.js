// Fechas de las festividades de Rabinal, con soporte para fechas variables
// (Semana Santa y Corpus Christi dependen de la Pascua). Se usa para la
// notificación del Home que avisa cuando una fecha especial se acerca o está en curso.

const MONTHS = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

// Domingo de Pascua (algoritmo de Computus, Meeus/Jones/Butcher) para el calendario gregoriano.
function easterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3 = marzo, 4 = abril
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

// Normaliza a medianoche local para comparar solo por día.
function dateOnly(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

// Festividades con fecha concreta para un año dado (las de "todo el año" se omiten aquí).
function festivitiesForYear(year) {
  const easter = easterSunday(year);
  return [
    { id: 'san-pablo', title: 'Feria Patronal de San Pablo Apóstol', start: new Date(year, 0, 17), end: new Date(year, 0, 25) },
    { id: 'semana-santa', title: 'Semana Santa', start: addDays(easter, -7), end: easter },
    { id: 'santa-cruz', title: 'Día de la Santa Cruz', start: new Date(year, 4, 3), end: new Date(year, 4, 3) },
    { id: 'corpus', title: 'Corpus Christi', start: addDays(easter, 60), end: addDays(easter, 60) },
    { id: 'todos-santos', title: 'Día de Todos los Santos', start: new Date(year, 10, 1), end: new Date(year, 10, 1) },
    { id: 'difuntos', title: 'Fieles Difuntos', start: new Date(year, 10, 2), end: new Date(year, 10, 2) },
    { id: 'corrida-nino', title: 'Corrida del Niño', start: new Date(year, 11, 25), end: new Date(year, 11, 25) },
  ];
}

// Etiqueta legible de la fecha del evento.
export function formatEventDate(ev) {
  const s = ev.start;
  const e = ev.end;
  if (s.getTime() === e.getTime()) return `${s.getDate()} de ${MONTHS[s.getMonth()]}`;
  if (s.getMonth() === e.getMonth()) return `${s.getDate()} al ${e.getDate()} de ${MONTHS[s.getMonth()]}`;
  return `${s.getDate()} de ${MONTHS[s.getMonth()]} al ${e.getDate()} de ${MONTHS[e.getMonth()]}`;
}

/**
 * Estado de UNA festividad (por id) respecto a hoy:
 *  'ongoing' (en curso) | 'upcoming' (≤ windowDays para empezar) | null (normal).
 */
export function getEventStatus(id, now = new Date(), windowDays = 30) {
  const today = dateOnly(now);
  const y = today.getFullYear();
  const list = [...festivitiesForYear(y), ...festivitiesForYear(y + 1)].filter((ev) => ev.id === id);

  if (list.some((ev) => dateOnly(ev.start) <= today && today <= dateOnly(ev.end))) return 'ongoing';

  let up = null;
  for (const ev of list) {
    const start = dateOnly(ev.start);
    if (start > today) {
      const days = Math.round((start - today) / 86400000);
      if (days <= windowDays && (up === null || days < up)) up = days;
    }
  }
  return up !== null ? 'upcoming' : null;
}

/**
 * Devuelve la festividad relevante para "hoy":
 *  - { status: 'ongoing', event }        → hoy cae dentro de la festividad.
 *  - { status: 'upcoming', event, daysUntil } → falta ≤ windowDays para que empiece.
 *  - null                                 → no hay nada cerca.
 * Considera el año actual y el siguiente (para diciembre → enero).
 */
export function getCalendarHighlight(now = new Date(), windowDays = 30) {
  const today = dateOnly(now);
  const y = today.getFullYear();
  const list = [...festivitiesForYear(y), ...festivitiesForYear(y + 1)];

  // ¿Alguna en curso hoy?
  const ongoing = list.find((ev) => dateOnly(ev.start) <= today && today <= dateOnly(ev.end));
  if (ongoing) return { status: 'ongoing', event: ongoing, daysUntil: 0 };

  // La próxima dentro de la ventana.
  let best = null;
  for (const ev of list) {
    const start = dateOnly(ev.start);
    if (start > today) {
      const days = Math.round((start - today) / 86400000);
      if (days <= windowDays && (!best || days < best.daysUntil)) {
        best = { status: 'upcoming', event: ev, daysUntil: days };
      }
    }
  }
  return best;
}
