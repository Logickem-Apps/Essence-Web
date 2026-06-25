import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarPlus as CalendarIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';

const formSchema = z.object({
  fecha_reserva: z.date({
    required_error: "La fecha es requerida",
  }).refine((date) => date >= new Date(new Date().setHours(0, 0, 0, 0)), {
    message: "La fecha debe ser futura",
  }),
  numero_personas: z.coerce.number().min(1, "Mínimo 1 persona"),
  nombre_cliente: z.string().min(2, "El nombre es requerido"),
  email_cliente: z.string().email("Email inválido"),
  telefono_cliente: z.string().min(8, "Teléfono inválido"),
});

function ReservationForm({ tour, onSuccess, onCancel }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numero_personas: 1,
      nombre_cliente: '',
      email_cliente: '',
      telefono_cliente: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const reservationData = {
        tour_id: tour.id,
        tour_name: tour.name,
        fecha_reserva: data.fecha_reserva.toISOString(),
        numero_personas: data.numero_personas,
        nombre_cliente: data.nombre_cliente,
        email_cliente: data.email_cliente,
        telefono_cliente: data.telefono_cliente,
        estado: 'pendiente',
      };

      const record = await pb.collection('reservas').create(reservationData, { $autoCancel: false });
      toast.success('Reserva creada exitosamente');
      onSuccess(record);
    } catch (error) {
      console.error('Error creating reservation:', error);
      toast.error('Error al crear la reserva. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fecha_reserva"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha del Tour</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: es })
                      ) : (
                        <span>Selecciona una fecha</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numero_personas"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Personas</FormLabel>
              <FormControl>
                <Input type="number" min="1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nombre_cliente"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email_cliente"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telefono_cliente"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="+502 1234 5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Confirmar Reserva
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ReservationForm;