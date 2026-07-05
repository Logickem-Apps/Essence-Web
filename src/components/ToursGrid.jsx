import React from 'react';
import TourCard from './TourCard';
import SectionHeading from './immersive/SectionHeading.jsx';

function ToursGrid({ tours = [] }) {
  const validTours = Array.isArray(tours)
    ? tours.filter((tour) => tour && typeof tour === 'object' && Object.keys(tour).length > 0)
    : [];

  if (validTours.length === 0) return null;

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <SectionHeading
          eyebrow="Nuestras Experiencias"
          title="Elige tu aventura"
          subtitle="Cada tour es guiado por locales de la comunidad Achí, para que vivas Rabinal desde adentro."
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {validTours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToursGrid;
