import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { usePayPalPayment } from '@/hooks/usePayPalPayment.js';
import { TOUR_PRICE_PER_PERSON } from '@/lib/pricingConstants.js';

const PAYPAL_CLIENT_ID = 'AT73UALiaqahtbdueR9eleXIRfDneDbiEv4xzcIT63R43kC1uZlpIwAqPngyZmF_WZ6KcmmPz6uLVBaa';

function BookingStep2({ tour, formData, onBack, onPaymentSuccess, onPaymentError, paymentStatus, isValid }) {
  const { isSdkLoaded, error: sdkError, renderButtons } = usePayPalPayment(PAYPAL_CLIENT_ID);

  const total = formData.numero_personas * TOUR_PRICE_PER_PERSON;

  useEffect(() => {
    if (isSdkLoaded && isValid && paymentStatus === 'idle') {
      renderButtons('paypal-button-container', {
        amount: total,
        description: `Reserva: ${tour.name} - ${formData.numero_personas} personas`,
        onSuccess: (details) => {
          onPaymentSuccess(details, total);
        },
        onError: (err) => {
          onPaymentError(err);
        }
      });
    }
  }, [isSdkLoaded, isValid, paymentStatus, total, tour.name, formData.numero_personas, renderButtons, onPaymentSuccess, onPaymentError]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <Card>
          <CardHeader className="bg-muted/50 pb-4 border-b">
            <CardTitle className="text-lg">Resumen de Reserva</CardTitle>
            <CardDescription>Revisa los detalles de tu tour</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Tour:</span>
              <span className="font-medium text-right ml-4">{tour.name}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Fecha:</span>
              <span className="font-medium">
                {formData.fecha_reserva ? formData.fecha_reserva.toLocaleDateString() : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Precio por persona:</span>
              <span className="font-medium">${TOUR_PRICE_PER_PERSON.toFixed(2)} USD</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Cantidad de personas:</span>
              <span className="font-medium">{formData.numero_personas}</span>
            </div>
            
            <div className="pt-3 mt-3 border-t flex justify-between items-center">
              <span className="font-semibold">Total a Pagar:</span>
              <span className="text-xl font-bold text-primary">${total.toFixed(2)} USD</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              Pago Seguro con PayPal
            </CardTitle>
            <CardDescription>Complete su pago para confirmar la reserva</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isValid && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Por favor complete todos los datos del paso anterior correctamente.
                </AlertDescription>
              </Alert>
            )}

            {sdkError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{sdkError}</AlertDescription>
              </Alert>
            )}

            {paymentStatus === 'processing' && (
              <div className="flex flex-col items-center justify-center py-6 space-y-3">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Procesando pago y guardando reserva...</p>
              </div>
            )}

            {paymentStatus === 'error' && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Hubo un error al procesar el pago. Por favor intente nuevamente.
                </AlertDescription>
              </Alert>
            )}

            <div 
              id="paypal-button-container" 
              className={`min-h-[150px] relative z-0 ${(!isValid || paymentStatus === 'processing') ? 'opacity-50 pointer-events-none' : ''}`}
            >
              {!isSdkLoaded && isValid && paymentStatus !== 'processing' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-start pt-6 border-t">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onBack} 
          disabled={paymentStatus === 'processing'}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Atrás
        </Button>
      </div>
    </div>
  );
}

export default BookingStep2;