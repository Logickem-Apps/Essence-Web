import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, LayoutDashboard, LogOut } from 'lucide-react';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { isAdminAuthenticated, logout } = useAdminAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const publicLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/explorar', label: 'Explorar' },
    { path: '/tours', label: 'Tours' },
    { path: '/sobre-nosotros', label: 'Nosotros' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ link, mobile = false }) => (
    <Link
      to={link.path}
      onClick={() => mobile && setIsOpen(false)}
      className={`transition-smooth flex items-center gap-2 ${
        isActive(link.path)
          ? 'text-primary font-bold'
          : 'text-accent font-medium hover:text-primary'
      } ${mobile ? 'block py-4 text-lg border-b border-secondary/30' : 'text-sm relative group'}`}
    >
      {link.label}
      {!mobile && (
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
      )}
    </Link>
  );

  return (
    <header className={`header-container ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background'}`}>
      <div className="header-inner container">
        
        {/* Logo Container explicitly aligned and styled via custom CSS */}
        <Link to="/" className="logo-wrapper group">
          <img 
            src="https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/88b6b9a1b7725753e062ebdf9d4296d6.png" 
            alt="Essence Rabinal Logo" 
            className="logo-img transition-transform duration-500 group-hover:scale-[1.02] origin-left" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          {publicLinks.map((link) => (
            <NavLink key={link.path} link={link} />
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          {isAdminAuthenticated ? (
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="outline" size="sm" className="font-medium text-xs h-9 rounded-full" asChild>
                <Link to="/admin/dashboard">
                  <LayoutDashboard className="w-3.5 h-3.5 mr-1.5" />
                  Admin Panel
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-accent hover:text-destructive hover:bg-destructive/10 transition-colors" onClick={logout} title="Cerrar Sesión">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Link to="/admin/login" className="hidden sm:block text-xs text-muted-foreground hover:text-primary font-medium transition-colors">
              Staff Login
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-accent hover:bg-secondary/20">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] p-6 flex flex-col bg-background border-l border-secondary/40">
              <VisuallyHidden>
                <SheetTitle>Menú de Navegación</SheetTitle>
              </VisuallyHidden>
              
              <div className="mb-8 mt-4">
                <img 
                  src="https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/88b6b9a1b7725753e062ebdf9d4296d6.png" 
                  alt="Essence Rabinal Logo" 
                  className="logo-img" 
                />
              </div>

              <div className="flex-1 overflow-y-auto pr-2">
                {publicLinks.map((link) => (
                  <NavLink key={link.path} link={link} mobile />
                ))}
              </div>
              
              <div className="pt-6 mt-auto border-t border-secondary/40">
                {isAdminAuthenticated ? (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Administración</p>
                    <Button variant="outline" className="w-full justify-start rounded-xl" asChild onClick={() => setIsOpen(false)}>
                      <Link to="/admin/dashboard">
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Panel Dashboard
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl" onClick={() => { logout(); setIsOpen(false); }}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Cerrar Sesión
                    </Button>
                  </div>
                ) : (
                  <Button variant="ghost" className="w-full justify-center text-accent hover:text-primary hover:bg-primary/10 rounded-xl" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/admin/login">Staff Login</Link>
                  </Button>
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