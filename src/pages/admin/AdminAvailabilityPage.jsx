import React from 'react';
import { Helmet } from 'react-helmet';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import { CalendarDays } from 'lucide-react';

export default function AdminAvailabilityPage() {
  return (
    <AdminLayout>
      <Helmet>
        <title>Disponibilidad - Admin Essence</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Disponibilidad de Fechas</h1>
          <p className="text-muted-foreground mt-1">Gestiona el calendario, cupos y bloqueos de fechas.</p>
        </div>

        <div className="h-[60vh] flex flex-col items-center justify-center bg-card border rounded-2xl border-dashed">
          <CalendarDays className="w-16 h-16 text-muted-foreground opacity-20 mb-4" />
          <h2 className="text-xl font-medium">Módulo de Calendario</h2>
          <p className="text-muted-foreground text-center max-w-sm mt-2">
            El sistema interactivo de calendario (colección tour_availability) estará habilitado en la próxima actualización del dashboard.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}