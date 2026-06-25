import React from 'react';
import { Helmet } from 'react-helmet';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import { CreditCard, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AdminPaymentsPage() {
  return (
    <AdminLayout>
      <Helmet>
        <title>Finanzas y Pagos | Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--admin-foreground))]">Control de Pagos</h1>
          <p className="text-[hsl(var(--admin-muted-foreground))] mt-1">Conciliación, ingresos y cuentas por cobrar.</p>
        </div>

        <Card className="admin-card border-[hsl(var(--admin-border))] shadow-sm">
          <CardContent className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <div className="relative">
              <CreditCard className="w-20 h-20 text-[hsl(var(--admin-muted-foreground))] opacity-10 mb-4" />
              <DollarSign className="w-8 h-8 text-[hsl(var(--admin-muted-foreground))] opacity-30 absolute bottom-4 right-0 bg-[hsl(var(--admin-background))] rounded-full p-1" />
            </div>
            <h2 className="text-xl font-medium text-[hsl(var(--admin-foreground))] mb-2">Módulo Financiero</h2>
            <p className="text-[hsl(var(--admin-muted-foreground))] max-w-md mx-auto">
              El seguimiento detallado de transacciones se integrará próximamente. Puedes revisar el estado de pago (confirmada/pendiente) directamente en el módulo de Reservas.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}