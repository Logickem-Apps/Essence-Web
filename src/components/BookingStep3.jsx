import React from 'react';
import { CheckCircle2, Calendar, Users, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PayPalReceiptDownload from './PayPalReceiptDownload.jsx';
import { TOUR_PRICE_PER_PERSON } from '@/lib/pricingConstants.js';

function BookingStep3({ reservation, transactionId, onClose }) {
  if (!reservation) return null;

  return (
    <div className="space-y-6 animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col items-center text-center space-y-3 py-4">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">¡Pago Completado Exitosamente!</h2>
        <p className="text-muted-foreground max-w-md">
          Su reserva ha sido confirmada. Hemos enviado un correo con los detalles.
        </p>
      </div>

      <div id="receipt-content">
        <Card className="border-2 border-primary/10 overflow-hidden">
          <div className="bg-primary/5 p-4 border-b flex justify-between items-center">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">No. de Reserva</p>
              <p className="font-mono text-lg font-bold text-primary">{reservation.numero_reserva}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Estado</p>
              <p className="font-medium text-green-600 uppercase text-sm">Pagado</p>
            </div>
          </div>
          
          <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">Datos del Cliente</h3>
                <p className="font-medium">{reservation.nombre_cliente}</p>
                <p className="text-sm text-muted-foreground">{reservation.email_cliente}</p>
                <p className="text-sm text-muted-foreground">{reservation.telefono_cliente}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">Detalles del Tour</h3>
                <p className="font-medium">{reservation.tour_name}</p>
                
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{new Date(reservation.fecha_reserva).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{reservation.numero_personas} Personas</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                  <CreditCard className="h-4 w-4" /> Detalles de Pago
                </h3>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Método:</span> 
                    <span className="font-medium">PayPal</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Transacción:</span> 
                    <span className="font-mono text-xs">{transactionId || 'N/A'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Precio por persona:</span> 
                    <span className="font-medium">${TOUR_PRICE_PER_PERSON.toFixed(2)} USD</span>
                  </li>
                  <li className="flex justify-between pt-2 border-t">
                    <span className="font-semibold">Total Pagado:</span> 
                    <span className="font-bold text-primary">${reservation.precio_total?.toFixed(2)} USD</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <PayPalReceiptDownload reservation={reservation} transactionId={transactionId} />

      <div className="flex justify-center pt-4 border-t">
        <Button onClick={onClose} className="w-full sm:w-auto min-w-[200px]">
          Finalizar y Cerrar
        </Button>
      </div>
    </div>
  );
}

export default BookingStep3;