import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { ShieldAlert, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const { login, isAdminAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (isAdminAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const from = location.state?.from?.pathname || '/admin/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!email || !password) {
      setErrorMsg('Por favor, ingresa correo y contraseña.');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      toast.success('Bienvenido al panel de control.');
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Credenciales inválidas o acceso denegado.');
      toast.error('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Acceso Restringido - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-[hsl(var(--admin-background))] font-sans relative overflow-hidden">
        {/* Brand Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-[hsl(var(--admin-muted-foreground))] hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al sitio público
          </Link>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-4 relative z-10">
          <Card className="w-full max-w-md admin-card shadow-2xl border-accent/40">
            <CardHeader className="space-y-3 text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2 shadow-sm border border-primary/20">
                <ShieldAlert className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight text-[hsl(var(--admin-foreground))]">
                Panel de Administración
              </CardTitle>
              <CardDescription className="text-[hsl(var(--admin-muted-foreground))]">
                Ingreso restringido solo para personal autorizado
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-5">
                {errorMsg && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg text-center font-medium">
                    {errorMsg}
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[hsl(var(--admin-foreground))] font-semibold">Correo Electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-[hsl(var(--admin-muted-foreground))]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@essencerabinal.com"
                      className="pl-10 admin-input border-accent/30 focus-visible:ring-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[hsl(var(--admin-foreground))] font-semibold">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-[hsl(var(--admin-muted-foreground))]" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 admin-input border-accent/30 focus-visible:ring-primary"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full h-11 text-base font-medium shadow-md transition-transform active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90" 
                  disabled={loading}
                >
                  {loading ? 'Verificando...' : 'Iniciar Sesión'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}