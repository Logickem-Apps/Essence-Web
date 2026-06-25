import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, ArrowRight, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { TOUR_PRICE_PER_PERSON } from '@/lib/pricingConstants.js';

const formSchema = z.object({
  nombre_cliente: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email_cliente: z.string().email('Correo electrónico inválido'),
  telefono_cliente: z.string().min(8, 'Número de teléfono inválido (mínimo 8 dígitos)'),
  numero_personas: z.coerce.number().min(1, 'Debe haber al menos 1 persona').max(20, 'Máximo 20 personas por reserva'),
  fecha_reserva: z.date({
    required_error: 'Debe seleccionar una fecha',
  }).refine((date) => date >= new Date(new Date().setHours(0,0,0,0)), {
    message: 'La fecha no puede estar en el pasado'
  }),
});

function BookingStep1({ initialData, onNext }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre_cliente: initialData.nombre_cliente || '',
      email_cliente: initialData.email_cliente || '',
      telefono_cliente: initialData.telefono_cliente || '',
      numero_personas: initialData.numero_personas || 1,
      fecha_reserva: initialData.fecha_reserva || null,
    },
  });

  const numeroPersonas = useWatch({
    control: form.control,
    name: 'numero_personas',
    defaultValue: initialData.numero_personas || 1
  });

  const totalCalculado = (numeroPersonas || 0) * TOUR_PRICE_PER_PERSON;

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <span className="font-medium">Precio por persona:</span>
          </div>
          <span className="text-lg font-bold text-primary">${TOUR_PRICE_PER_PERSON} USD</span>
        </div>

        <FormField
          control={form.control}
          name="nombre_cliente"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Ej. Juan Pérez" {...field} className="text-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email_cliente"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="juan@ejemplo.com" {...field} className="text-foreground" />
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
                  <Input type="tel" placeholder="+502 1234 5678" {...field} className="text-foreground" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fecha_reserva"
            render={({ field }) => (
              <FormItem className="flex flex-col pt-2">
                <FormLabel>Fecha del Tour</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal text-foreground",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Seleccionar fecha</span>
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
                      disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
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
              <FormItem className="pt-2">
                <FormLabel>Número de Personas</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={20} {...field} className="text-foreground" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="bg-muted/50 rounded-lg p-4 mt-4 flex justify-between items-center border">
          <span className="text-muted-foreground font-medium">Total Estimado:</span>
          <span className="text-xl font-bold text-foreground">${totalCalculado.toFixed(2)} USD</span>
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" className="w-full sm:w-auto">
            Siguiente <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default BookingStep1;