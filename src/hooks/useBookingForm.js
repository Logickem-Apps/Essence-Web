import { useState } from 'react';
import { TOUR_PRICE_PER_PERSON } from '@/lib/pricingConstants.js';

export function useBookingForm(initialState = {}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre_cliente: '',
    email_cliente: '',
    telefono_cliente: '',
    numero_personas: 1,
    fecha_reserva: null,
    ...initialState
  });
  
  const [reservationResult, setReservationResult] = useState(null);
  
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [transactionId, setTransactionId] = useState(null);
  const [paymentError, setPaymentError] = useState(null);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  
  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetPaymentState = () => {
    setPaymentStatus('idle');
    setTransactionId(null);
    setPaymentError(null);
  };

  const validateBookingData = () => {
    const required = ['nombre_cliente', 'email_cliente', 'telefono_cliente', 'numero_personas', 'fecha_reserva'];
    for (const field of required) {
      if (!formData[field]) return false;
    }
    if (formData.numero_personas < 1) return false;
    if (new Date(formData.fecha_reserva) < new Date(new Date().setHours(0,0,0,0))) return false;
    return true;
  };

  const calculateTotal = () => {
    return (formData.numero_personas || 1) * TOUR_PRICE_PER_PERSON;
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      nombre_cliente: '',
      email_cliente: '',
      telefono_cliente: '',
      numero_personas: 1,
      fecha_reserva: null,
      ...initialState
    });
    setReservationResult(null);
    resetPaymentState();
  };

  return {
    currentStep,
    formData,
    reservationResult,
    setReservationResult,
    paymentStatus,
    setPaymentStatus,
    transactionId,
    setTransactionId,
    paymentError,
    setPaymentError,
    nextStep,
    prevStep,
    updateFormData,
    resetForm,
    setStep: setCurrentStep,
    resetPaymentState,
    validateBookingData,
    calculateTotal
  };
}