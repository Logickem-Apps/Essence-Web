import React from 'react';
import { Helmet } from 'react-helmet';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import { CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AdminCalendarPage() {
  return (
    <AdminLayout>
      <Helmet>
        <title>Calendario Operativo | Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--admin-foreground))]">Calendario Operativo</h1>
          <p className="text-[hsl(var(--admin-muted-foreground))] mt-1">Vista interactiva de disponibilidad y bloqueos de fechas.</p>
        </div>

        <Card className="admin-card border-[hsl(var(--admin-border))] shadow-sm">
          <CardContent className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <CalendarDays className="w-24 h-24 text-[hsl(var(--admin-muted-foreground))] opacity-10 mb-6" />
            <h2 className="text-2xl font-medium text-[hsl(var(--admin-foreground))] mb-2">Vista de Calendario Interactivo</h2>
            <p className="text-[hsl(var(--admin-muted-foreground))] max-w-md mx-auto leading-relaxed">
              La interfaz visual de calendario para gestionar la disponibilidad (tour_availability) estará disponible en la próxima versión.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}