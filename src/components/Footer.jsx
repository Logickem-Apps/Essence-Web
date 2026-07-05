import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { socials } from '@/lib/socials.jsx';

const LOGO = '/images/logo-essence.webp';

const exploreLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/explorar', label: 'Explorar Rabinal' },
  { to: '/tours', label: 'Tours y Experiencias' },
  { to: '/galeria', label: 'Galería' },
  { to: '/calendario', label: 'Calendario' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gold/20 bg-ink-3 text-cream">
      <div className="mx-auto max-w-[1340px] px-5 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <img src={LOGO} alt="Essence Rabinal" loading="lazy" className="mb-5 h-16 w-auto rounded-xl" />
            <p className="font-body text-[15px] leading-relaxed text-cream/65">
              Descubre la auténtica cultura y belleza de Rabinal, Baja Verapaz. Experiencias inolvidables que
              conectan con nuestras raíces.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-cream transition-colors hover:bg-gold hover:text-gold-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">Explora</h4>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-body text-[14.5px] text-cream/70 transition-colors hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">Contacto</h4>
            <ul className="flex flex-col gap-3 font-body text-[14.5px] text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>Rabinal, Baja Verapaz, Guatemala</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>+502 3850 6731</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>info@essencerabinal.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 md:flex-row">
          <span className="font-body text-[13px] text-cream/50">
            Todos los Derechos Reservados © {new Date().getFullYear()} Essence Rabinal
          </span>
          <div className="flex items-center gap-3.5">
            <Link to="/privacidad" className="font-body text-[13px] text-cream/50 transition-colors hover:text-cream">
              Privacidad
            </Link>
            <span className="text-cream/30">•</span>
            <Link to="/terminos" className="font-body text-[13px] text-cream/50 transition-colors hover:text-cream">
              Términos
            </Link>
            <span className="text-cream/30">•</span>
            <Link to="/admin/login" className="font-body text-[13px] text-cream/50 transition-colors hover:text-cream">
              Staff Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
