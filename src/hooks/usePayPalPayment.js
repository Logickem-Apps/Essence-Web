import { useState, useEffect, useCallback } from 'react';
import { TOUR_PRICE_PER_PERSON } from '@/lib/pricingConstants.js';

export function usePayPalPayment(clientId) {
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.paypal) {
      setIsSdkLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;
    
    script.onload = () => {
      setIsSdkLoaded(true);
    };
    
    script.onerror = () => {
      setError('Error al cargar el SDK de PayPal');
    };

    document.body.appendChild(script);

    return () => {
      if (!window.paypal) {
        document.body.removeChild(script);
      }
    };
  }, [clientId]);

  const renderButtons = useCallback((containerId, { amount, description, onSuccess, onError, onCancel }) => {
    if (!window.paypal) return;

    // Validate amount is a multiple of the base price (basic sanity check)
    if (amount <= 0 || amount % TOUR_PRICE_PER_PERSON !== 0) {
      console.warn('Warning: Payment amount may not align with standard pricing.');
    }

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
    }

    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: description,
              amount: {
                currency_code: 'USD',
                value: amount.toString(),
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        try {
          const details = await actions.order.capture();
          onSuccess(details);
        } catch (err) {
          onError(err);
        }
      },
      onError: (err) => {
        onError(err);
      },
      onCancel: () => {
        if (onCancel) onCancel();
      }
    }).render(`#${containerId}`);
  }, []);

  return {
    isSdkLoaded,
    error,
    renderButtons
  };
}