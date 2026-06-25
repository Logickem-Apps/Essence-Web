import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Map, 
  Users, 
  CalendarDays, 
  Truck, 
  CreditCard,
  LogOut,
  Menu,
  ShieldCheck
} from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const AdminSidebar = ({ isMobile, setIsOpen }) => {
  const location = useLocation();
  const { logout, currentAdmin } = useAdminAuth();
  const navigate = useNavigate();

  const links = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Reservas', path: '/admin/reservas', icon: CalendarCheck },
    { name: 'Clientes', path: '/admin/clientes', icon: Users },
    { name: 'Tours', path: '/admin/tours', icon: Map },
    { name: 'Logística', path: '/admin/logistica', icon: Truck },
    { name: 'Pagos', path: '/admin/pagos', icon: CreditCard },
    { name: 'Calendario', path: '/admin/calendario', icon: CalendarDays },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    if (isMobile) setIsOpen(false);
  };

  return (
    <div className="flex flex-col h-full bg-[hsl(var(--admin-sidebar))] text-[hsl(var(--admin-sidebar-foreground))] w-64 border-r border-accent/20 shadow-xl">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center font-bold text-primary-foreground shadow-sm">
            E
          </div>
          <span className="font-semibold text-lg tracking-tight">Admin Panel</span>
        </Link>
      </div>
      
      <div className="px-6 pb-4">
        <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg border border-accent/20">
          <div className="w-8 h-8 rounded-full bg-[hsl(var(--admin-sidebar-accent))] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium truncate">{currentAdmin?.name || 'Administrador'}</span>
            <span className="text-xs text-white/50 truncate">{currentAdmin?.email}</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto admin-nav">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname.startsWith(link.path);
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => isMobile && setIsOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-[hsl(var(--admin-sidebar-accent))] text-white font-medium shadow-md' 
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-accent/20">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-white/70 hover:text-white hover:bg-destructive/20 hover:text-destructive-foreground transition-colors"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin-layout flex h-screen bg-[hsl(var(--admin-background))] text-[hsl(var(--admin-foreground))] font-sans overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block z-20 relative">
        <AdminSidebar />
      </aside>

      {/* Mobile Header & Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="md:hidden flex items-center justify-between p-4 bg-[hsl(var(--admin-sidebar))] text-[hsl(var(--admin-sidebar-foreground))] border-b border-accent/20 z-20 shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground">
              E
            </div>
            <span className="font-semibold tracking-tight">Admin</span>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 border-r border-accent/20">
              <VisuallyHidden>
                <SheetTitle>Menú de Administración</SheetTitle>
                <SheetDescription>Navegación del panel de control</SheetDescription>
              </VisuallyHidden>
              <AdminSidebar isMobile setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10 admin-content">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}