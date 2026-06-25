import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, DollarSign, CheckCircle, Activity } from 'lucide-react';
import pb from '@/lib/pocketbaseClient.js';
import BookingModal from '@/components/BookingModal.jsx';
import { TOUR_PRICE_PER_PERSON } from '@/lib/pricingConstants.js';

function TourDetailModal({ tour, open, onClose }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsBookingOpen(false);
    }
  }, [open]);

  if (!tour) return null;

  const imageUrl = tour.image 
    ? pb.files.getUrl(tour, tour.image)
    : 'https://images.unsplash.com/photo-1678377918724-fed576b84f43?w=800&h=600&fit=crop';

  const parseListField = (field) => {
    if (!field) return [];
    try {
      return JSON.parse(field);
    } catch {
      return field.split('\n').filter(item => item.trim());
    }
  };

  const itineraryItems = parseListField(tour.itinerary);
  const includedServices = parseListField(tour.included_services);
  const activities = parseListField(tour.activities);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
    onClose();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-muted">
            <img 
              src={imageUrl}
              alt={tour.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-white mb-2">{tour.name}</DialogTitle>
              <DialogDescription className="text-white/80 text-base max-w-2xl line-clamp-2">
                {tour.short_description}
              </DialogDescription>
            </div>
          </div>

          <div className="p-6 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {tour.duration && (
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <div className="bg-background p-2 rounded-lg shadow-sm">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Duración</p>
                    <p className="font-medium">{tour.duration}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                <div className="bg-background p-2 rounded-lg shadow-sm">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Precio</p>
                  <p className="font-medium text-primary">${TOUR_PRICE_PER_PERSON} USD por persona</p>
                </div>
              </div>
            </div>

            {tour.description && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Descripción General</h3>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </div>
            )}

            {itineraryItems.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-secondary" />
                  Itinerario del Tour
                </h3>
                <div className="space-y-4 pl-2 border-l-2 border-border ml-2">
                  {itineraryItems.map((item, index) => (
                    <div key={index} className="relative pl-6">
                      <span className="absolute -left-[27px] top-1 w-5 h-5 bg-background border-2 border-secondary rounded-full flex items-center justify-center text-[10px] font-bold text-secondary">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {includedServices.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  ¿Qué incluye?
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {includedServices.map((service, index) => (
                    <li key={index} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activities.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-muted-foreground">Actividades Destacadas</h3>
                <div className="flex flex-wrap gap-2">
                  {activities.map((activity, index) => (
                    <span 
                      key={index}
                      className="px-4 py-1.5 bg-accent text-accent-foreground font-medium rounded-full text-sm"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Separator className="my-4" />

            <DialogFooter className="flex-col sm:flex-row gap-3 pt-2">
              <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
                Cerrar Detalles
              </Button>
              <Button onClick={handleOpenBooking} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                Reservar Ahora
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tour={tour}
      />
    </>
  );
}

export default TourDetailModal;