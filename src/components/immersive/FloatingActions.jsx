import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const WHATSAPP_NUMBER = '50238506731';
const WHATSAPP_MSG = encodeURIComponent(
  '¡Hola, Essence Rabinal! 👋 Me interesa conocer más sobre sus tours y experiencias comunitarias en Rabinal. ¿Me pueden orientar con información y disponibilidad?'
);

/**
 * Persistent floating actions (Inmersivo): WhatsApp CTA always visible,
 * plus a scroll-to-top button that appears after scrolling down.
 */
function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Z" />
        </svg>
      </a>

      {showTop && (
        <button
          type="button"
          onClick={scrollTop}
          aria-label="Volver arriba"
          className="fixed bottom-24 right-[22px] z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/90 text-ink shadow-[0_8px_22px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1"
        >
          <ArrowUp size={20} strokeWidth={2.4} />
        </button>
      )}
    </>
  );
}

export default FloatingActions;
