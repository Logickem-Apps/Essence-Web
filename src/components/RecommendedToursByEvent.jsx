import React from 'react';
import { motion } from 'framer-motion';
import TourCard from '@/components/TourCard';
import { Target } from 'lucide-react';

export default function RecommendedToursByEvent({ event, tours, onTourSelect }) {
  if (!event || !tours || tours.length === 0) return null;

  // Filter tours that match the event's related tours categories
  const recommendedTours = tours.filter(tour => 
    event.relatedTours.some(related => tour.category?.includes(related) || tour.name.includes(related))
  );

  // If no direct matches, just show the first 3 tours as a fallback
  const displayTours = recommendedTours.length > 0 ? recommendedTours : tours.slice(0, 3);

  return (
    <div className="space-y-8 py-8 border-t border-border/50">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <Target className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Tours recomendados para esta temporada</h3>
          <p className="text-muted-foreground mt-1">
            Experiencias que complementan perfectamente {event.name}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTours.map((tour, index) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TourCard tour={tour} onViewDetails={onTourSelect} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}