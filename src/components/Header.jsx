import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, LayoutDashboard, LogOut, ArrowRight, ChevronDown } from 'lucide-react';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const LOGO = '/images/logo-essence.webp';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { isAdminAuthenticated, logout } = useAdminAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary tabs stay visible; the rest live under a "Más" dropdown (desktop).
  const primaryLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/explorar', label: 'Explorar' },
    { path: '/tours', label: 'Tours' },
    { path: '/calendario', label: 'Calendario' },
    { path: '/sobre-nosotros', label: 'Nosotros' },
  ];
  const moreLinks = [
    { path: '/galeria', label: 'Galería' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/contacto', label: 'Contacto' },
  ];
  // Mobile menu shows everything.
  const allLinks = [...primaryLinks, ...moreLinks];

  const isActive = (path) => location.pathname === path;
  const isMoreActive = moreLinks.some((l) => isActive(l.path));

  const NavLink = ({ link, mobile = false }) => (
    <Link
      to={link.path}
      onClick={() => mobile && setIsOpen(false)}
      className={
        mobile
          ? `block py-4 font-display text-2xl border-b border-white/10 ${
              isActive(link.path) ? 'text-gold' : 'text-cream'
            }`
          : `ez-link font-body text-sm transition-colors ${
              isActive(link.path) ? 'text-gold font-bold' : 'text-cream/85 font-medium hover:text-gold'
            }`
      }
    >
      {link.label}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-xl' : 'bg-ink/70 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[62px] max-w-[1340px] items-center justify-between gap-4 px-5 md:h-[78px] md:px-8">
        {/* Logo */}
        <Link to="/" className="group flex flex-shrink-0 items-center">
          <img
            src={LOGO}
            alt="Essence Rabinal"
            className="h-10 w-auto rounded-[10px] transition-transform duration-500 group-hover:scale-[1.02] md:h-[52px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {primaryLinks.map((link) => (
            <NavLink key={link.path} link={link} />
          ))}

          {/* "Más" opens on hover (CSS group-hover); the pt-3 bridge keeps it open
              while moving the cursor from the trigger down to the panel. */}
          <div className="group relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1 font-body text-sm outline-none transition-colors ${
                isMoreActive ? 'text-gold font-bold' : 'text-cream/85 font-medium hover:text-gold'
              }`}
            >
              Más
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="flex min-w-[180px] flex-col gap-0.5 rounded-xl border border-white/10 bg-ink-2 p-1.5 shadow-xl">
                {moreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-lg px-3 py-2 font-body text-sm transition-colors hover:bg-white/10 hover:text-gold ${
                      isActive(link.path) ? 'text-gold' : 'text-cream/85'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Actions */}
        <div className="flex flex-shrink-0 items-center gap-3">
          {isAdminAuthenticated && (
            <div className="hidden items-center gap-2 sm:flex">
              <Button
                variant="outline"
                size="sm"
                className="h-9 rounded-full border-white/20 bg-white/5 text-xs font-medium text-cream hover:bg-white/10 hover:text-gold"
                asChild
              >
                <Link to="/admin/dashboard">
                  <LayoutDashboard className="mr-1.5 h-3.5 w-3.5" />
                  Admin Panel
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-cream/70 hover:bg-destructive/15 hover:text-destructive"
                onClick={logout}
                title="Cerrar Sesión"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Reservar CTA */}
          <Link
            to="/contacto"
            className="btn-gold hidden items-center gap-2 rounded-full px-6 py-2.5 font-body text-sm font-bold transition sm:inline-flex"
          >
            Reservar
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-white/15 text-cream hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[85vw] flex-col border-l border-white/10 bg-ink p-6 text-cream sm:w-[350px]"
            >
              <VisuallyHidden>
                <SheetTitle>Menú de Navegación</SheetTitle>
              </VisuallyHidden>

              <div className="mb-8 mt-4">
                <img src={LOGO} alt="Essence Rabinal" className="h-12 w-auto rounded-[10px]" />
              </div>

              <div className="flex-1 overflow-y-auto pr-2">
                {allLinks.map((link) => (
                  <NavLink key={link.path} link={link} mobile />
                ))}
              </div>

              <div className="mt-auto border-t border-white/10 pt-6">
                <Link
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="btn-gold mb-3 flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-bold"
                >
                  Reservar
                  <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                </Link>
                {isAdminAuthenticated && (
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl border-white/20 bg-white/5 text-cream hover:bg-white/10"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/admin/dashboard">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Panel Dashboard
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Cerrar Sesión
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
