import React from 'react';
import { Helmet } from 'react-helmet-async';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import { Truck, Navigation, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AdminLogisticsPage() {
  return (
    <AdminLayout>
      <Helmet>
        <title>Logística | Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--admin-foreground))]">Coordinación Logística</h1>
          <p className="text-[hsl(var(--admin-muted-foreground))] mt-1">Gestión de guías, transporte y asignaciones.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="admin-card border-[hsl(var(--admin-border))]">
            <CardHeader className="border-b border-[hsl(var(--admin-border))] bg-[hsl(var(--admin-muted))/30]">
              <CardTitle className="flex items-center gap-2 text-lg text-[hsl(var(--admin-foreground))]">
                <Users className="w-5 h-5 text-primary" />
                Guías Turísticos
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Users className="w-12 h-12 text-[hsl(var(--admin-muted-foreground))] opacity-20 mb-4" />
              <p className="text-[hsl(var(--admin-muted-foreground))]">Módulo de asignación de guías en desarrollo.</p>
            </CardContent>
          </Card>

          <Card className="admin-card border-[hsl(var(--admin-border))]">
            <CardHeader className="border-b border-[hsl(var(--admin-border))] bg-[hsl(var(--admin-muted))/30]">
              <CardTitle className="flex items-center gap-2 text-lg text-[hsl(var(--admin-foreground))]">
                <Truck className="w-5 h-5 text-primary" />
                Flota de Vehículos
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Navigation className="w-12 h-12 text-[hsl(var(--admin-muted-foreground))] opacity-20 mb-4" />
              <p className="text-[hsl(var(--admin-muted-foreground))]">Control de unidades y rutas en desarrollo.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}