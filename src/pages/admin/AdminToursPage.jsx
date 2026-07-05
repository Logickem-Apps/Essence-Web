import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Search, Pencil, Trash2, Map } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function AdminToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchTours = async () => {
    setLoading(true);
    try {
      const records = await pb.collection('tours').getFullList({
        sort: '-created',
        $autoCancel: false,
      });
      setTours(records);
    } catch (error) {
      console.error('Error fetching tours:', error);
      toast.error('Error al cargar catálogo de tours');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este tour del catálogo?')) return;
    try {
      await pb.collection('tours').delete(id, { $autoCancel: false });
      toast.success('Tour eliminado exitosamente');
      setTours(tours.filter(t => t.id !== id));
    } catch (error) {
      toast.error('Error al eliminar tour');
    }
  };

  const filteredTours = tours.filter(t => 
    (t.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
    (t.category?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <Helmet>
        <title>Catálogo de Tours | Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--admin-foreground))]">Catálogo de Tours</h1>
            <p className="text-[hsl(var(--admin-muted-foreground))] mt-1">Gestiona las experiencias y rutas ofrecidas.</p>
          </div>
          <Button onClick={() => toast('Modal de creación en desarrollo')} className="shadow-md transition-transform active:scale-[0.98]">
            <Plus className="w-4 h-4 mr-2" />
            Crear Tour
          </Button>
        </div>

        <div className="relative max-w-sm mb-2">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[hsl(var(--admin-muted-foreground))]" />
          <Input
            placeholder="Buscar tour por nombre..."
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
                  <TableHead className="w-[80px] text-[hsl(var(--admin-muted-foreground))] font-medium">Imagen</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Tour</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Categoría</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Duración</TableHead>
                  <TableHead className="text-[hsl(var(--admin-muted-foreground))] font-medium">Precio</TableHead>
                  <TableHead className="text-right text-[hsl(var(--admin-muted-foreground))] font-medium">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <TableRow key={i} className="border-[hsl(var(--admin-border))]">
                      <TableCell><Skeleton className="h-12 w-16 rounded-md" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-48 mb-2" /><Skeleton className="h-3 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-8 w-16 ml-auto" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredTours.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-48 text-center border-0">
                      <div className="flex flex-col items-center justify-center text-[hsl(var(--admin-muted-foreground))]">
                        <Map className="h-10 w-10 mb-3 opacity-20" />
                        <p>No se encontraron tours en el catálogo.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTours.map((tour) => (
                    <TableRow key={tour.id} className="border-[hsl(var(--admin-border))] hover:bg-[hsl(var(--admin-muted))/30] transition-colors">
                      <TableCell>
                        {tour.image ? (
                          <img 
                            src={pb.files.getUrl(tour, tour.image)} 
                            alt={tour.name} 
                            className="w-16 h-12 object-cover rounded-md border border-[hsl(var(--admin-border))]"
                          />
                        ) : (
                          <div className="w-16 h-12 bg-[hsl(var(--admin-muted))] rounded-md flex items-center justify-center border border-[hsl(var(--admin-border))]">
                            <Map className="w-4 h-4 text-[hsl(var(--admin-muted-foreground))] opacity-50" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-sm text-[hsl(var(--admin-foreground))]">{tour.name}</div>
                        <div className="text-xs text-[hsl(var(--admin-muted-foreground))] truncate max-w-[250px]">{tour.short_description}</div>
                      </TableCell>
                      <TableCell className="text-sm text-[hsl(var(--admin-foreground))]">
                        {tour.category ? (
                          <Badge variant="outline" className="bg-transparent border-[hsl(var(--admin-border))] text-[hsl(var(--admin-muted-foreground))] font-normal">
                            {tour.category}
                          </Badge>
                        ) : 'General'}
                      </TableCell>
                      <TableCell className="text-sm text-[hsl(var(--admin-muted-foreground))]">{tour.duration || 'N/A'}</TableCell>
                      <TableCell className="font-medium text-sm text-[hsl(var(--admin-foreground))]">{tour.price_range || 'N/A'}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => toast('Edición en desarrollo')} className="h-8 w-8 text-[hsl(var(--admin-muted-foreground))] hover:text-primary hover:bg-primary/10">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(tour.id)} className="h-8 w-8 text-[hsl(var(--admin-muted-foreground))] hover:text-destructive hover:bg-destructive/10">
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