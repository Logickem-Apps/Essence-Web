import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Search, Inbox, Download, MoreHorizontal, FileEdit, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const records = await pb.collection('bookings').getFullList({
        sort: '-created',
        $autoCancel: false,
      });
      setReservations(records);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      toast.error('Error al cargar las reservas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await pb.collection('bookings').update(id, { estado: newStatus }, { $autoCancel: false });
      toast.success(`Estado actualizado a ${newStatus}`);
      setReservations(reservations.map(res => 
        res.id === id ? { ...res, estado: newStatus } : res
      ));
    } catch (error) {
      toast.error('Error al actualizar el estado');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta reserva? Esta acción no se puede deshacer.')) return;
    try {
      await pb.collection('bookings').delete(id, { $autoCancel: false });
      toast.success('Reserva eliminada correctamente');
      setReservations(reservations.filter(res => res.id !== id));
    } catch (error) {
      toast.error('Error al eliminar la reserva');
    }
  };

  const handleExport = () => {
    toast.success('Descargando reporte CSV...', { icon: <Download className="w-4 h-4" />});
    // Placeholder logic for export
  };

  const filteredReservations = reservations.filter(res => {
    const search = searchTerm.toLowerCase();
    const matchesSearch = 
      (res.nombre_cliente?.toLowerCase() || '').includes(search) ||
      (res.numero_reserva?.toLowerCase() || '').includes(search) ||
      (res.tour_name?.toLowerCase() || '').includes(search);
    const matchesStatus = statusFilter === 'all' || res.estado === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmada':
      case 'pagado':
        return <Badge className="bg-success/10 text-success border-success/20 hover:bg-success/20">Confirmada</Badge>;
      case 'cancelada':
        return <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">Cancelada</Badge>;
      default:
        return <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20">Pendiente</Badge>;
    }
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>Reservas | Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--admin-foreground))]">Gestión de Reservas</h1>
            <p className="text-[hsl(var(--admin-muted-foreground))] mt-1">Administra todas las reservaciones del sistema.</p>
          </div>
          <Button onClick={handleExport} variant="outline" className="admin-btn-outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar CSV
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[hsl(var(--admin-muted-foreground))]" />
            <Input
              placeholder="Buscar por cliente, tour o # reserva..."
              className="pl-9 admin-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] admin-input">
              <SelectValue placeholder="Filtrar estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los estados</SelectItem>
              <SelectItem value="pendiente">Pendiente</SelectItem>
              <SelectItem value="confirmada">Confirmada</SelectItem>
              <SelectItem value="cancelada">Cancelada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="admin-card border-[hsl(var(--admin-border))] rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <Table className="admin-table">
              <TableHeader className="bg-[hsl(var(--admin-muted))]">
                <TableRow className="border-[hsl(var(--admin-border))]">
                  <TableHead className="w-[100px] text-[hsl(var(--admin-muted-foreground))] font-medium">Reserva</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Cliente</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Tour</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Fecha Tour</TableHead>
                  <TableHead className="text-right text-[hsl(var(--admin-muted-foreground))] font-medium">Pax</TableHead>
                  <TableHead className="text-right text-[hsl(var(--admin-muted-foreground))] font-medium">Total</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Estado</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i} className="border-[hsl(var(--admin-border))]">
                      <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-32 mb-1" /><Skeleton className="h-3 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-4 w-8 ml-auto" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-4 w-16 ml-auto" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                      <TableCell><Skeleton className="h-8 w-8 rounded-md" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredReservations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-48 text-center border-0">
                      <div className="flex flex-col items-center justify-center text-[hsl(var(--admin-muted-foreground))]">
                        <Inbox className="h-10 w-10 mb-3 opacity-20" />
                        <p>No se encontraron reservas</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredReservations.map((res) => (
                    <TableRow key={res.id} className="group border-[hsl(var(--admin-border))] hover:bg-[hsl(var(--admin-muted))/30] transition-colors">
                      <TableCell className="font-mono text-xs font-medium text-[hsl(var(--admin-foreground))]">
                        {res.numero_reserva || res.id.slice(0, 8)}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-sm text-[hsl(var(--admin-foreground))]">{res.nombre_cliente}</div>
                        <div className="text-xs text-[hsl(var(--admin-muted-foreground))]">{res.email_cliente}</div>
                      </TableCell>
                      <TableCell className="text-sm text-[hsl(var(--admin-foreground))] truncate max-w-[200px]">
                        {res.tour_name}
                      </TableCell>
                      <TableCell className="text-sm text-[hsl(var(--admin-foreground))]">
                        {res.fecha_reserva ? format(new Date(res.fecha_reserva), 'dd/MM/yyyy', { locale: es }) : 'N/A'}
                      </TableCell>
                      <TableCell className="text-right text-sm text-[hsl(var(--admin-foreground))]">{res.numero_personas}</TableCell>
                      <TableCell className="text-right font-medium text-sm text-[hsl(var(--admin-foreground))]">
                        Q{res.precio_total?.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(res.estado)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="sr-only">Abrir menú</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="admin-card border-[hsl(var(--admin-border))]">
                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleStatusChange(res.id, 'confirmada')} className="cursor-pointer">
                              Marcar Confirmada
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusChange(res.id, 'pendiente')} className="cursor-pointer">
                              Marcar Pendiente
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => toast('Editar detalles en desarrollo')} className="cursor-pointer">
                              <FileEdit className="w-4 h-4 mr-2" /> Editar Reserva
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDelete(res.id)} className="text-destructive cursor-pointer focus:bg-destructive/10 focus:text-destructive">
                              <Trash2 className="w-4 h-4 mr-2" /> Eliminar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}