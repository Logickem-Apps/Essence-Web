import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '50238506731';

const TOUR_OPTIONS = [
  'Centro Histórico',
  'Artesanías Tradicionales',
  'Sitios Arqueológicos',
  'Río Negro',
  'Experiencias Comunitarias',
  'Experiencia personalizada',
  'Aún no lo sé',
];

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string().optional(),
  group_size: z.string().optional(),
  preferred_date: z.string().optional(),
  tour_interest: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

// Shared dark-theme field styles for the Inmersivo palette.
const fieldClass =
  'border-white/15 bg-white/[0.04] text-cream placeholder:text-cream/40 focus-visible:ring-gold focus-visible:ring-offset-0';
const labelClass = 'font-body text-sm font-semibold text-cream/90';

function ContactForm({ initialTourInterest = '' }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      group_size: '',
      preferred_date: '',
      tour_interest: initialTourInterest,
      message: '',
    },
  });

  // Con los datos validados, abre WhatsApp con el mensaje ya compuesto hacia el número del operador.
  const onSubmit = (v) => {
    const lines = [
      `¡Hola Essence Rabinal! Soy ${v.name}.`,
      v.tour_interest && `Me interesa: ${v.tour_interest}.`,
      v.group_size && `Somos ${v.group_size} persona(s).`,
      v.preferred_date && `Fecha tentativa: ${v.preferred_date}.`,
      `Correo: ${v.email}.`,
      v.phone && `Teléfono: ${v.phone}.`,
      v.message && `\n${v.message}`,
    ].filter(Boolean);
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join(' '))}`;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Nombre completo</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" className={fieldClass} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.com" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Teléfono / WhatsApp (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="+502 0000 0000" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="group_size"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>N.º de personas (opcional)</FormLabel>
                <FormControl>
                  <Input type="number" min="1" placeholder="Ej. 4" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferred_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Fecha tentativa (opcional)</FormLabel>
                <FormControl>
                  <Input type="date" className={`${fieldClass} [color-scheme:dark]`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tour_interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Experiencia de interés (opcional)</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Selecciona una experiencia" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-white/10 bg-ink-2 text-cream">
                  {TOUR_OPTIONS.map((tour) => (
                    <SelectItem key={tour} value={tour} className="focus:bg-white/10 focus:text-gold">
                      {tour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntanos qué te gustaría vivir en Rabinal y cualquier detalle importante..."
                  className={`min-h-[120px] ${fieldClass}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-3 font-body font-bold text-[#06140b] shadow-[0_10px_26px_rgba(37,211,102,0.4)] transition hover:-translate-y-0.5 hover:brightness-105"
        >
          <MessageCircle className="h-[18px] w-[18px]" />
          Enviar por WhatsApp
        </Button>

        <p className="pt-1 font-body text-xs leading-relaxed text-cream/55">
          Al enviar se abrirá WhatsApp con tu mensaje ya escrito para que lo confirmes. Te responderemos con la
          información y opciones para armar tu experiencia. Turismo 100% comunitario.
        </p>
      </form>
    </Form>
  );
}

export default ContactForm;
