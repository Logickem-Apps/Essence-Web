import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CalendarCheck, Map, CreditCard, Activity, ArrowUpRight, CalendarDays, Truck } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient.js';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import { format } from 'date-fns';

export default function AdminDashboard() {
  const { currentAdmin } = useAdminAuth();
  const [stats, setStats] = useState({
    reservations: 0,
    pendingPayments: 0,
    tours: 0,
    contacts: 0,
    loading: true
  });
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [bookingsRes, contactsRes, toursRes] = await Promise.all([
          pb.collection('bookings').getList(1, 5, { sort: '-created', $autoCancel: false }),
          pb.collection('contact_submissions').getList(1, 1, { $autoCancel: false }),
          pb.collection('tours').getList(1, 1, { $autoCancel: false })
        ]);

        // Get total pending
        const allBookings = await pb.collection('bookings').getFullList({ $autoCancel: false });
        const pending = allBookings.filter(b => b.estado === 'pendiente').length;

        setStats({
          reservations: bookingsRes.totalItems,
          pendingPayments: pending,
          tours: toursRes.totalItems,
          contacts: contactsRes.totalItems,
          loading: false
        });
        
        setRecentBookings(bookingsRes.items);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        setStats(s => ({ ...s, loading: false }));
      }
    };
    fetchDashboardData();
  }, []);

  const statCards = [
    { title: 'Total Reservas', value: stats.reservations, icon: CalendarCheck, desc: 'Histórico', link: '/admin/reservas' },
    { title: 'Contactos/Leads', value: stats.contacts, icon: Users, desc: 'Formularios web', link: '/admin/clientes' },
    { title: 'Tours Activos', value: stats.tours, icon: Map, desc: 'En catálogo', link: '/admin/tours' },
    { title: 'Pagos Pendientes', value: stats.pendingPayments, icon: CreditCard, desc: 'Requieren atención', highlight: true, link: '/admin/pagos' }
  ];

  return (
    <AdminLayout>
      <Helmet>
        <title>Dashboard | Panel de Control</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--admin-foreground))]">
            Hola, {currentAdmin?.name || 'Administrador'}
          </h1>
          <p className="text-[hsl(var(--admin-muted-foreground))] mt-1">
            Resumen general de la plataforma y métricas clave.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat, index) => (
            <Card key={index} className="admin-card overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-[hsl(var(--admin-muted-foreground))]">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.highlight && stat.value > 0 ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
                  <stat.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                {stats.loading ? (
                  <Skeleton className="h-8 w-16 mb-1" />
                ) : (
                  <div className={`text-3xl font-bold ${stat.highlight && stat.value > 0 ? 'text-destructive' : 'text-[hsl(var(--admin-foreground))]'}`}>
                    {stat.value}
                  </div>
                )}
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-[hsl(var(--admin-muted-foreground))]">
                    {stat.desc}
                  </p>
                  <Link to={stat.link} className="text-xs text-primary font-medium hover:underline flex items-center">
                    Ver más <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Activity Card */}
          <Card className="admin-card col-span-1 md:col-span-2 lg:col-span-1 border-[hsl(var(--admin-border))]">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg text-[hsl(var(--admin-foreground))]">
                <Activity className="w-5 h-5 text-primary" />
                Reservas Recientes
              </CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link to="/admin/reservas">Ver todas</Link>
              </Button>
            </CardHeader>
            <CardContent>
              {stats.loading ? (
                <div className="space-y-4">
                  {[1,2,3].map(i => <Skeleton key={i} className="h-12 w-full" />)}
                </div>
              ) : recentBookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center text-[hsl(var(--admin-muted-foreground))]">
                  <CalendarCheck className="w-10 h-10 opacity-20 mb-3" />
                  <p>No hay reservas recientes.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentBookings.map(booking => (
                    <div key={booking.id} className="flex items-center justify-between border-b border-[hsl(var(--admin-border))] pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium text-[hsl(var(--admin-foreground))] text-sm">{booking.nombre_cliente}</p>
                        <p className="text-xs text-[hsl(var(--admin-muted-foreground))] truncate max-w-[200px]">{booking.tour_name}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          booking.estado === 'confirmada' ? 'bg-success/10 text-success' :
                          booking.estado === 'cancelada' ? 'bg-destructive/10 text-destructive' :
                          'bg-amber-500/10 text-amber-600'
                        }`}>
                          {booking.estado}
                        </span>
                        <p className="text-xs text-[hsl(var(--admin-muted-foreground))] mt-1">
                          {format(new Date(booking.created), 'dd MMM yyyy')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card className="admin-card border-[hsl(var(--admin-border))]">
            <CardHeader>
              <CardTitle className="text-lg text-[hsl(var(--admin-foreground))]">Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-colors" asChild>
                <Link to="/admin/tours">
                  <Map className="w-6 h-6 text-primary" />
                  <span>Añadir Tour</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-colors" asChild>
                <Link to="/admin/calendario">
                  <CalendarDays className="w-6 h-6 text-primary" />
                  <span>Ver Calendario</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-colors" asChild>
                <Link to="/admin/pagos">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <span>Revisar Pagos</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-colors" asChild>
                <Link to="/admin/logistica">
                  <Truck className="w-6 h-6 text-primary" />
                  <span>Asignar Guías</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}