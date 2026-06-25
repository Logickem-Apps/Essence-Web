import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import EssenceRabinalLogo from '@/components/EssenceRabinalLogo.jsx';

function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="relative bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-fg))] overflow-hidden border-t-4 border-secondary">
        
        {/* Discrete Watermark Background */}
        <div 
          className="watermark-bg watermark-size bottom-0 right-0 sm:bottom-4 sm:right-4 lg:bottom-12 lg:right-12 bg-contain bg-no-repeat bg-bottom opacity-5 mix-blend-luminosity" 
          style={{
            backgroundImage: `url('https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/4e2d078af5636413fb8de5ff244c8ec8.png')`
          }} 
          aria-hidden="true" 
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Column 1: Logo & Branding Section */}
            <div className="md:col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start mb-6 bg-white p-4 rounded-2xl shadow-md border border-secondary/30">
                <EssenceRabinalLogo className="h-24 sm:h-28 w-auto" />
              </div>
              <p className="text-[hsl(var(--footer-muted))] leading-relaxed max-w-md text-base">
                Descubre la auténtica cultura y belleza de Rabinal, Baja Verapaz. Ofrecemos experiencias inolvidables que conectan con nuestras raíces.
              </p>
              
              <div className="flex gap-4 mt-8">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-10 h-10 rounded-full border border-secondary/40 bg-transparent hover:bg-[hsl(var(--footer-accent))] hover:border-[hsl(var(--footer-accent))] transition-smooth" aria-label="Facebook">
                  <Facebook className="w-4 h-4 text-[hsl(var(--footer-fg))] group-hover:text-white transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-10 h-10 rounded-full border border-secondary/40 bg-transparent hover:bg-[hsl(var(--footer-accent))] hover:border-[hsl(var(--footer-accent))] transition-smooth" aria-label="Instagram">
                  <Instagram className="w-4 h-4 text-[hsl(var(--footer-fg))] group-hover:text-white transition-colors" />
                </a>
                <a href="https://wa.me/50238506731" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-10 h-10 rounded-full border border-secondary/40 bg-transparent hover:bg-[hsl(var(--footer-accent))] hover:border-[hsl(var(--footer-accent))] transition-smooth" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4 text-[hsl(var(--footer-fg))] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links Section */}
            <div className="md:col-span-6 lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="font-semibold text-lg mb-6 text-secondary tracking-wider uppercase">
                Explora
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-accent))] transition-colors duration-200 text-base font-medium">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/explorar" className="text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-accent))] transition-colors duration-200 text-base font-medium">
                    Explorar Rabinal
                  </Link>
                </li>
                <li>
                  <Link to="/tours" className="text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-accent))] transition-colors duration-200 text-base font-medium">
                    Tours y Experiencias
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros" className="text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-accent))] transition-colors duration-200 text-base font-medium">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-accent))] transition-colors duration-200 text-base font-medium">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Section */}
            <div className="md:col-span-6 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="font-semibold text-lg mb-6 text-secondary tracking-wider uppercase">
                Contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-[hsl(var(--footer-accent))] mt-0.5" />
                  <span className="text-[hsl(var(--footer-muted))] text-base">Rabinal, Baja Verapaz, Guatemala</span>
                </li>
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-[hsl(var(--footer-accent))]" />
                  <span className="text-[hsl(var(--footer-muted))] text-base">+502 3850 6731</span>
                </li>
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[hsl(var(--footer-accent))]" />
                  <span className="text-[hsl(var(--footer-muted))] text-base">info@essencerabinal.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="mt-16 pt-8 border-t border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[hsl(var(--footer-muted))] text-sm font-medium tracking-wide">
              Todos los Derechos Reservados © {new Date().getFullYear()} Essence Rabinal
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacidad" className="text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-fg))] transition-colors duration-200 text-sm">
                Privacidad
              </Link>
              <span className="text-[hsl(var(--footer-muted))]/50">•</span>
              <Link to="/terminos" className="text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-fg))] transition-colors duration-200 text-sm">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;