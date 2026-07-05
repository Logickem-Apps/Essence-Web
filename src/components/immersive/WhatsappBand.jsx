import React from 'react';
import Reveal from './Reveal.jsx';

const WHATSAPP = 'https://wa.me/50238506731?text=' +
  encodeURIComponent('¡Hola, Essence Rabinal! 👋 Me interesa conocer más sobre sus tours y experiencias comunitarias en Rabinal. ¿Me pueden orientar con información y disponibilidad?');

function WhatsappBand() {
  return (
    <section className="border-y border-white/[0.06] bg-gradient-to-br from-[#141a16] to-ink-2 py-7 md:py-11">
      <Reveal className="mx-auto flex max-w-[1340px] flex-wrap items-center justify-between gap-5 px-5 md:px-8">
        <h2 className="m-0 max-w-2xl font-display text-xl font-semibold text-white md:text-3xl">
          ¿Tienes dudas o quieres reservar? <span className="text-gold">¡Contáctanos por WhatsApp!</span>
        </h2>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-7 py-3.5 font-body text-base font-bold text-[#06140b] shadow-[0_10px_26px_rgba(37,211,102,0.4)] transition hover:-translate-y-0.5 hover:brightness-105"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#06140b" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Z" />
          </svg>
          WhatsApp
        </a>
      </Reveal>
    </section>
  );
}

export default WhatsappBand;
