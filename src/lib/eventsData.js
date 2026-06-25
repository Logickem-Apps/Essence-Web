import { PartyPopper, Users, Calendar, Music, Church, Shield as Mask, Cross } from 'lucide-react';

export const EVENT_TYPES = {
  cultural: { id: 'cultural', label: 'Evento cultural', emoji: '🎉', colorVar: '--event-cultural' },
  religious: { id: 'religious', label: 'Celebración religiosa', emoji: '✝️', colorVar: '--event-religious' },
  tradition: { id: 'tradition', label: 'Tradición local', emoji: '🏺', colorVar: '--event-tradition' },
  representation: { id: 'representation', label: 'Representación tradicional', emoji: '🎭', colorVar: '--event-cultural' },
  community: { id: 'community', label: 'Celebración comunitaria', emoji: '👥', colorVar: '--event-community' },
  commemoration: { id: 'commemoration', label: 'Conmemoración', emoji: '🕯️', colorVar: '--event-commemoration' }
};

export const EVENTS_DATABASE = [
  { id: 'feria', name: 'Feria Patronal', startMonth: 0, startDay: 17, endMonth: 0, endDay: 25, icon: PartyPopper, type: 'fixed', category: EVENT_TYPES.community, desc: 'Celebración principal en honor a San Pablo Apóstol.', relatedTours: ['Tours culturales', 'Experiencias gastronómicas'] },
  { id: 'desfile', name: 'Desfile de Feria', startMonth: 0, startDay: 19, endMonth: 0, endDay: 19, icon: Users, type: 'fixed', category: EVENT_TYPES.cultural, desc: 'Recorrido cívico e intercultural.', relatedTours: ['Tours comunitarios'] },
  { id: 'ganadera', name: 'Feria Ganadera', startMonth: 0, startDay: 20, endMonth: 0, endDay: 22, icon: Calendar, type: 'fixed', category: EVENT_TYPES.tradition, desc: 'Exhibición ganadera y agrícola.', relatedTours: [] },
  { id: 'velada-trad', name: 'Velada Tradicional', startMonth: 0, startDay: 23, endMonth: 0, endDay: 23, icon: Music, type: 'fixed', category: EVENT_TYPES.cultural, desc: 'Noche cultural exaltando la música y danzas.', relatedTours: ['Tours culturales'] },
  { id: 'velada-relig', name: 'Velada Religiosa', startMonth: 0, startDay: 24, endMonth: 0, endDay: 24, icon: Church, type: 'fixed', category: EVENT_TYPES.religious, desc: 'Vigilia solemne y actos litúrgicos.', relatedTours: [] },
  { id: 'rabinal-achi', name: 'Danza Rabinal Achí', startMonth: 0, startDay: 25, endMonth: 0, endDay: 25, icon: Mask, type: 'fixed', category: EVENT_TYPES.representation, desc: 'Danza drama prehispánica (Patrimonio de la Humanidad).', relatedTours: ['Tours culturales'] },
  { id: 'semana-santa', name: 'Semana Santa', startMonth: 2, startDay: 25, endMonth: 3, endDay: 4, icon: Cross, type: 'variable', category: EVENT_TYPES.religious, desc: 'Elaboración de alfombras y procesiones.', relatedTours: ['Tours culturales'] },
  { id: 'cruz', name: 'Día de la Santa Cruz', startMonth: 4, startDay: 3, endMonth: 4, endDay: 3, icon: Cross, type: 'fixed', category: EVENT_TYPES.religious, desc: 'Ceremonias en los cerros sagrados.', relatedTours: ['Caminatas en la naturaleza'] },
  { id: 'corpus', name: 'Corpus Christi', startMonth: 5, startDay: 4, endMonth: 5, endDay: 4, icon: Church, type: 'variable', category: EVENT_TYPES.religious, desc: 'Danzas de moros y cristos.', relatedTours: ['Tours culturales'] },
  { id: 'asuncion', name: 'Virgen de la Asunción', startMonth: 7, startDay: 15, endMonth: 7, endDay: 15, icon: PartyPopper, type: 'fixed', category: EVENT_TYPES.community, desc: 'Festividades locales.', relatedTours: [] },
  { id: 'santos', name: 'Todos los Santos', startMonth: 10, startDay: 1, endMonth: 10, endDay: 2, icon: Church, type: 'fixed', category: EVENT_TYPES.commemoration, desc: 'Conmemoración ancestral.', relatedTours: ['Experiencias gastronómicas'] },
  { id: 'concepcion', name: 'Virgen de Concepción', startMonth: 11, startDay: 8, endMonth: 11, endDay: 8, icon: Church, type: 'fixed', category: EVENT_TYPES.religious, desc: 'Festividad de cofradías.', relatedTours: [] },
  { id: 'niño', name: 'Corrida del Niño', startMonth: 11, startDay: 25, endMonth: 11, endDay: 25, icon: Users, type: 'fixed', category: EVENT_TYPES.tradition, desc: 'Procesión navideña.', relatedTours: [] }
];

export const getUpcomingEvents = (limit = 3) => {
  const now = new Date();
  const upcoming = EVENTS_DATABASE.map(event => {
    let eventDate = new Date(now.getFullYear(), event.startMonth, event.startDay);
    if (eventDate.getTime() < now.getTime()) {
      eventDate = new Date(now.getFullYear() + 1, event.startMonth, event.startDay);
    }
    return { ...event, dateObj: eventDate, diff: eventDate.getTime() - now.getTime() };
  }).sort((a, b) => a.diff - b.diff);
  
  return upcoming.slice(0, limit);
};

export const checkEventOverlap = (targetDate) => {
  if (!targetDate) return null;
  const date = new Date(targetDate);
  const month = date.getMonth();
  const day = date.getDate();
  
  return EVENTS_DATABASE.find(e => {
    if (e.startMonth === e.endMonth) {
      return month === e.startMonth && day >= e.startDay && day <= e.endDay;
    }
    // Simplified cross-month check
    if (month === e.startMonth && day >= e.startDay) return true;
    if (month === e.endMonth && day <= e.endDay) return true;
    return false;
  });
};