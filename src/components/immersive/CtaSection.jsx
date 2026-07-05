import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ctaImage } from '@/lib/homeContent';
import Reveal from './Reveal.jsx';

function CtaSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  // Escritorio: el efecto lo da `md:bg-fixed` (background-attachment: fixed) — sin transform,
  // porque un transform/will-change en el elemento rompe el fondo fijo.
  // Móvil: fixed no funciona en muchos navegadores, así que ahí se hace el parallax por JS
  // (bucle rAF mientras la sección es visible), aplicando un transform al fondo.
  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const mq = window.matchMedia('(max-width: 767px)');
    let running = false;
    let raf = 0;
    let io = null;

    const frame = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const delta = rect.top + rect.height / 2 - vh / 2;
      const max = rect.height * 0.22;
      let shift = delta * -0.25;
      if (shift > max) shift = max;
      else if (shift < -max) shift = -max;
      bg.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.5)`;
      if (running) raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const setup = () => {
      if (io) {
        io.disconnect();
        io = null;
      }
      stop();
      if (mq.matches) {
        io = new IntersectionObserver((entries) => (entries[0].isIntersecting ? start() : stop()), { threshold: 0 });
        io.observe(section);
      } else {
        // Escritorio: sin transform para no romper bg-fixed.
        bg.style.transform = '';
      }
    };

    setup();
    mq.addEventListener('change', setup);
    return () => {
      mq.removeEventListener('change', setup);
      if (io) io.disconnect();
      stop();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate flex min-h-[62vh] items-center overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 z-[1] bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url('${ctaImage}')` }}
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-ink/55 via-ink/45 to-ink/85" />
      <Reveal className="relative z-[3] mx-auto max-w-[820px] px-5 py-20 text-center md:px-8 md:py-28">
        <div className="mb-3 font-body text-base font-medium text-cream/90 md:text-2xl"
             style={{ textShadow: '0 1px 12px rgba(0,0,0,0.55)' }}>Comienza tu aventura</div>
        <h2 className="text-gradient mb-7 font-display font-bold leading-[0.96] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(40px, 7.4vw, 90px)', filter: 'drop-shadow(0 3px 16px rgba(0,0,0,0.55))' }}>
          DESCUBRE RABINAL
        </h2>
        <Link
          to="/contacto"
          className="btn-gold inline-flex items-center gap-2.5 rounded-full px-9 py-4 font-body text-base font-bold shadow-[0_14px_34px_rgba(224,169,84,0.45)] transition hover:-translate-y-0.5"
        >
          Reservar ahora
          <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
        </Link>
      </Reveal>
    </section>
  );
}

export default CtaSection;
