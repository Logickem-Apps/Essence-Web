import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ReservationConfirmation({ reservation, onClose }) {
  const generateWhatsAppLink = () => {
    const phone = '50212345678'; // Replace with actual business phone
    const message = `Hola, acabo de realizar una reserva.\n\nDetalles:\nTour: ${reservation.tour_name}\nFecha: ${format(new Date(reservation.fecha_reserva), 'PPP', { locale: es })}\nPersonas: ${reservation.numero_personas}\nNombre: ${reservation.nombre_cliente}\nID Reserva: ${reservation.id}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  return (
    <div className="text-center space-y-6 py-6">
      <div className="flex justify-center">
        <CheckCircle2 className="w-16 h-16 text-[hsl(var(--success))] animate-in zoom-in duration-500" />
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-2">¡Reserva Recibida!</h3>
        <p className="text-muted-foreground">
          Tu solicitud ha sido registrada con éxito. Nos pondremos en contacto pronto para confirmar los detalles.
        </p>
      </div>

      <div className="bg-muted p-4 rounded-lg text-left space-y-2 text-sm">
        <p><span className="font-semibold">ID de Reserva:</span> {reservation.id}</p>
        <p><span className="font-semibold">Tour:</span> {reservation.tour_name}</p>
        <p><span className="font-semibold">Fecha:</span> {format(new Date(reservation.fecha_reserva), 'PPP', { locale: es })}</p>
        <p><span className="font-semibold">Personas:</span> {reservation.numero_personas}</p>
        <p><span className="font-semibold">Nombre:</span> {reservation.nombre_cliente}</p>
      </div>

      <div className="space-y-3">
        <Button 
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white"
          onClick={() => window.open(generateWhatsAppLink(), '_blank')}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Contactar por WhatsApp
        </Button>
        <Button variant="outline" className="w-full" onClick={onClose}>
          Cerrar
        </Button>
      </div>
    </div>
  );
}

export default ReservationConfirmation;