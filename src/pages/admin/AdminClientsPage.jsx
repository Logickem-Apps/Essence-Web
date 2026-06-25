import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';
import { Search, Users, Download, Eye, Trash2, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function AdminClientsPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchClients = async () => {
    setLoading(true);
    try {
      // Using contact_submissions as the source of leads/clients per prompt instructions
      const records = await pb.collection('contact_submissions').getFullList({
        sort: '-created',
        $autoCancel: false,
      });
      setClients(records);
    } catch (error) {
      console.error('Error fetching clients:', error);
      toast.error('Error al cargar la lista de contactos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este registro de contacto?')) return;
    try {
      await pb.collection('contact_submissions').delete(id, { $autoCancel: false });
      toast.success('Registro eliminado');
      setClients(clients.filter(c => c.id !== id));
    } catch (error) {
      toast.error('Error al eliminar registro');
    }
  };

  const handleExport = () => {
    toast.success('Descargando base de contactos...', { icon: <Download className="w-4 h-4" />});
  };

  const filteredClients = clients.filter(c => 
    (c.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
    (c.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (c.tour_interest?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <Helmet>
        <title>Contactos y Clientes | Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--admin-foreground))]">Contactos y Leads</h1>
            <p className="text-[hsl(var(--admin-muted-foreground))] mt-1">Registros de formularios de contacto e interés de tours.</p>
          </div>
          <Button onClick={handleExport} variant="outline" className="admin-btn-outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar Lista
          </Button>
        </div>

        <div className="relative max-w-md mb-2">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[hsl(var(--admin-muted-foreground))]" />
          <Input
            placeholder="Buscar por nombre, correo o tour..."
            className="pl-9 admin-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="admin-card border-[hsl(var(--admin-border))] rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <Table className="admin-table">
              <TableHeader className="bg-[hsl(var(--admin-muted))]">
                <TableRow className="border-[hsl(var(--admin-border))]">
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Nombre</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Contacto</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Interés</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Fecha de Registro</TableHead>
                  <TableHead className="text-right text-[hsl(var(--admin-muted-foreground))] font-medium">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i} className="border-[hsl(var(--admin-border))]">
                      <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-40 mb-1" /><Skeleton className="h-3 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-8 w-16 ml-auto" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredClients.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-48 text-center border-0">
                      <div className="flex flex-col items-center justify-center text-[hsl(var(--admin-muted-foreground))]">
                        <Users className="h-10 w-10 mb-3 opacity-20" />
                        <p>No se encontraron registros de contacto.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredClients.map((client) => (
                    <TableRow key={client.id} className="border-[hsl(var(--admin-border))] hover:bg-[hsl(var(--admin-muted))/30] transition-colors">
                      <TableCell className="font-medium text-sm text-[hsl(var(--admin-foreground))]">{client.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-sm text-[hsl(var(--admin-foreground))]">
                          <Mail className="w-3 h-3 text-[hsl(var(--admin-muted-foreground))]" />
                          <a href={`mailto:${client.email}`} className="hover:underline hover:text-primary">{client.email}</a>
                        </div>
                        <div className="text-xs text-[hsl(var(--admin-muted-foreground))] mt-0.5">{client.phone || 'Sin teléfono'}</div>
                      </TableCell>
                      <TableCell className="text-sm text-[hsl(var(--admin-foreground))]">
                        {client.tour_interest ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            {client.tour_interest}
                          </span>
                        ) : (
                          <span className="text-[hsl(var(--admin-muted-foreground))] italic">Consulta general</span>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-[hsl(var(--admin-muted-foreground))]">
                        {format(new Date(client.created), 'dd/MM/yyyy HH:mm')}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-[hsl(var(--admin-muted-foreground))] hover:text-primary hover:bg-primary/10" onClick={() => toast.info('Detalle del mensaje: ' + client.message)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-[hsl(var(--admin-muted-foreground))] hover:text-destructive hover:bg-destructive/10" onClick={() => handleDelete(client.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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