import React, { useState } from 'react';
import { Download, Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import html2pdf from 'html2pdf.js';
import { TOUR_PRICE_PER_PERSON } from '@/lib/pricingConstants.js';

function PayPalReceiptDownload({ reservation, transactionId }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEmailing, setIsEmailing] = useState(false);

  const generatePDF = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById('receipt-content');
      const opt = {
        margin: 1,
        filename: `Comprobante_Reserva_${reservation.numero_reserva}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      await html2pdf().set(opt).from(element).save();
      toast.success('Comprobante descargado exitosamente');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Error al generar el PDF');
    } finally {
      setIsDownloading(false);
    }
  };

  const sendEmail = async () => {
    setIsEmailing(true);
    try {
      await pb.collection('bookings').update(reservation.id, {
        estado: reservation.estado
      }, { $autoCancel: false });
      
      toast.success(`Comprobante enviado a ${reservation.email_cliente}`);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error al enviar el correo');
    } finally {
      setIsEmailing(false);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 pt-4">
      <Button 
        variant="outline" 
        onClick={generatePDF} 
        disabled={isDownloading}
        className="min-w-[160px]"
      >
        {isDownloading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Download className="h-4 w-4 mr-2" />}
        Descargar PDF
      </Button>
      <Button 
        variant="outline" 
        onClick={sendEmail} 
        disabled={isEmailing}
        className="min-w-[160px]"
      >
        {isEmailing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Mail className="h-4 w-4 mr-2" />}
        Enviar por Email
      </Button>
    </div>
  );
}

export default PayPalReceiptDownload;