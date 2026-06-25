import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';

import { useBookingForm } from '@/hooks/useBookingForm.js';
import BookingStep1 from './BookingStep1.jsx';
import BookingStep2 from './BookingStep2.jsx';
import BookingStep3 from './BookingStep3.jsx';
import { TOUR_PRICE_PER_PERSON } from '@/lib/pricingConstants.js';

function BookingModal({ isOpen, onClose, tour }) {
  const {
    currentStep,
    formData,
    reservationResult,
    setReservationResult,
    paymentStatus,
    setPaymentStatus,
    transactionId,
    setTransactionId,
    setPaymentError,
    nextStep,
    prevStep,
    updateFormData,
    resetForm,
    setStep,
    validateBookingData
  } = useBookingForm();

  const handleClose = () => {
    if (paymentStatus === 'processing') {
      toast.warning('Por favor espere a que se complete el pago.');
      return;
    }
    onClose();
    setTimeout(resetForm, 300);
  };

  const handleStep1Next = (data) => {
    updateFormData(data);
    nextStep();
  };

  const handlePaymentSuccess = async (details, totalAmount) => {
    setPaymentStatus('processing');
    setTransactionId(details.id);
    
    try {
      const numeroReserva = 'RES-' + Math.random().toString(36).substr(2, 6).toUpperCase();
      
      const payload = {
        nombre_cliente: formData.nombre_cliente,
        email_cliente: formData.email_cliente,
        telefono_cliente: formData.telefono_cliente,
        tour_id: tour.id,
        tour_name: tour.name,
        numero_personas: formData.numero_personas,
        fecha_reserva: formData.fecha_reserva.toISOString(), 
        precio_por_persona: TOUR_PRICE_PER_PERSON,
        precio_total: totalAmount,
        estado: `completado - TX:${details.id}`,
        numero_reserva: numeroReserva
      };

      const record = await pb.collection('bookings').create(payload, { $autoCancel: false });
      
      setReservationResult(record);
      setPaymentStatus('success');
      setStep(3);
      toast.success('Pago y reserva completados exitosamente');
    } catch (error) {
      console.error("Error saving booking after payment:", error);
      setPaymentStatus('error');
      setPaymentError('El pago fue exitoso pero hubo un error al guardar la reserva. Por favor contáctenos con su ID de transacción: ' + details.id);
      toast.error('Error al guardar la reserva.');
    }
  };

  const handlePaymentError = (err) => {
    console.error("PayPal Error:", err);
    setPaymentStatus('error');
    setPaymentError('Hubo un problema al procesar su pago con PayPal.');
    toast.error('Error en el pago. Intente nuevamente.');
  };

  if (!tour) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[750px] w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {currentStep === 3 ? 'Confirmación de Reserva' : 'Reservar Tour'}
          </DialogTitle>
          {currentStep < 3 && (
            <DialogDescription>
              Complete los pasos para reservar su espacio en <strong>{tour.name}</strong>.
            </DialogDescription>
          )}
        </DialogHeader>

        {currentStep < 3 && (
          <div className="w-full bg-muted rounded-full h-2 mt-2 mb-6 overflow-hidden">
            <div 
              className="bg-primary h-2 transition-all duration-500 ease-in-out" 
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        )}

        <div className="py-2">
          {currentStep === 1 && (
            <BookingStep1 
              initialData={formData} 
              onNext={handleStep1Next} 
            />
          )}

          {currentStep === 2 && (
            <BookingStep2 
              tour={tour}
              formData={formData}
              onBack={prevStep}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
              paymentStatus={paymentStatus}
              isValid={validateBookingData()}
            />
          )}

          {currentStep === 3 && (
            <BookingStep3 
              reservation={reservationResult}
              transactionId={transactionId}
              onClose={handleClose}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default BookingModal;