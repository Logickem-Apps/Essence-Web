import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { Search, Trash2, Inbox } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import pb from '@/lib/pocketbaseClient.js';

function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const records = await pb.collection('reservas').getList(1, 100, {
        sort: '-created',
        $autoCancel: false,
      });
      setReservations(records.items);
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
      await pb.collection('reservas').update(id, { estado: newStatus }, { $autoCancel: false });
      toast.success('Estado actualizado');
      setReservations(reservations.map(res => 
        res.id === id ? { ...res, estado: newStatus } : res
      ));
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Error al actualizar el estado');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar esta reserva?')) return;
    
    try {
      await pb.collection('reservas').delete(id, { $autoCancel: false });
      toast.success('Reserva eliminada');
      setReservations(reservations.filter(res => res.id !== id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
      toast.error('Error al eliminar la reserva');
    }
  };

  const filteredReservations = reservations.filter(res => {
    const matchesSearch = 
      res.nombre_cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.tour_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || res.estado === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmada':
        return <Badge className="bg-[hsl(var(--success))] hover:bg-[hsl(var(--success))/80]">Confirmada</Badge>;
      case 'cancelada':
        return <Badge variant="destructive">Cancelada</Badge>;
      default:
        return <Badge variant="secondary" className="bg-accent text-accent-foreground">Pendiente</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Panel de Reservas - Essence Rabinal</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Panel de Reservas</h1>
                <p className="text-muted-foreground">Gestiona las reservas de tours</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar cliente o tour..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                    <SelectItem value="confirmada">Confirmada</SelectItem>
                    <SelectItem value="cancelada">Cancelada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Tour</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Pax</TableHead>
                      <TableHead>Contacto</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                          <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                          <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                          <TableCell><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                        </TableRow>
                      ))
                    ) : filteredReservations.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="h-48 text-center">
                          <div className="flex flex-col items-center justify-center text-muted-foreground">
                            <Inbox className="h-12 w-12 mb-4 opacity-20" />
                            <p>No se encontraron reservas</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredReservations.map((res) => (
                        <TableRow key={res.id}>
                          <TableCell className="font-mono text-xs text-muted-foreground">
                            {res.id.slice(0, 8)}
                          </TableCell>
                          <TableCell className="font-medium">{res.nombre_cliente}</TableCell>
                          <TableCell>{res.tour_name}</TableCell>
                          <TableCell>
                            {format(new Date(res.fecha_reserva), 'dd/MM/yyyy')}
                          </TableCell>
                          <TableCell>{res.numero_personas}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{res.telefono_cliente}</div>
                              <div className="text-muted-foreground text-xs">{res.email_cliente}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Select 
                              value={res.estado} 
                              onValueChange={(val) => handleStatusChange(res.id, val)}
                            >
                              <SelectTrigger className="h-8 w-[130px] border-0 bg-transparent p-0 focus:ring-0">
                                {getStatusBadge(res.estado)}
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pendiente">Pendiente</SelectItem>
                                <SelectItem value="confirmada">Confirmada</SelectItem>
                                <SelectItem value="cancelada">Cancelada</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              onClick={() => handleDelete(res.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ReservationsPage;