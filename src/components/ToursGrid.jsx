import React from 'react';
import TourCard from './TourCard';

function ToursGrid({ tours = [] }) {
  // Validate and filter out undefined/null/empty entries
  const validTours = Array.isArray(tours) 
    ? tours.filter(tour => tour && typeof tour === 'object' && Object.keys(tour).length > 0)
    : [];

  if (validTours.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {validTours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToursGrid;