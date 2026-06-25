import React, { useState } from 'react';
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
import { toast } from 'sonner';
import { Loader2, MessageCircle } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  tour_interest: z.string().optional(),
});

function ContactForm({ initialTourInterest = '' }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      tour_interest: initialTourInterest,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await pb.collection('contact_submissions').create(data, { $autoCancel: false });
      
      toast.success('Mensaje enviado correctamente');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppLink = () => {
    const values = form.getValues();
    const message = `Hola, soy ${values.name}. ${values.message}${values.tour_interest ? ` Estoy interesado en: ${values.tour_interest}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/50212345678?text=${encodedMessage}`;
  };

  return (
    <div className="space-y-6 bg-card p-6 md:p-8 rounded-2xl border border-secondary/50 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-accent font-semibold">Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" className="border-secondary focus-visible:ring-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-accent font-semibold">Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.com" className="border-secondary focus-visible:ring-primary" {...field} />
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
                <FormLabel className="text-accent font-semibold">Teléfono (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="+502 1234 5678" className="border-secondary focus-visible:ring-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tour_interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-accent font-semibold">Tour de interés (opcional)</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-secondary focus-visible:ring-primary">
                      <SelectValue placeholder="Selecciona un tour" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Cultural Tour">Cultural Tour</SelectItem>
                    <SelectItem value="Gastronomic Tour">Gastronomic Tour</SelectItem>
                    <SelectItem value="Nature & Hiking Tour">Nature & Hiking Tour</SelectItem>
                    <SelectItem value="Community Experience Tour">Community Experience Tour</SelectItem>
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
                <FormLabel className="text-accent font-semibold">Mensaje</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu interés en nuestros tours..."
                    className="min-h-[120px] border-secondary focus-visible:ring-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Enviar Mensaje
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.open(generateWhatsAppLink(), '_blank')}
              className="flex-1"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contactar por WhatsApp
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;