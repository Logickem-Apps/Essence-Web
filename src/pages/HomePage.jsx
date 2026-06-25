import React from 'react';
import { Helmet } from 'react-helmet';
import HomeHero from '@/components/HomeHero.jsx';
import CardGrid from '@/components/CardGrid.jsx';
import ToursGrid from '@/components/ToursGrid.jsx';

function HomePage() {
  // Featured tours for the homepage
  const featuredTours = [
    {
      name: 'Tour Histórico de Rabinal',
      description: 'Recorre las calles empedradas y descubre la rica historia colonial y precolombina de nuestro pueblo.',
      duration: '4 horas',
      image: 'https://images.unsplash.com/photo-1518182170546-076616fdca44?q=80&w=1000&auto=format&fit=crop',
      includes: ['Guía local experto', 'Entrada a museos', 'Refrigerio tradicional']
    },
    {
      name: 'Ruta de la Naturaleza',
      description: 'Explora los senderos ocultos, cascadas cristalinas y la biodiversidad única de Baja Verapaz.',
      duration: 'Día completo',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop',
      includes: ['Transporte 4x4', 'Almuerzo campestre', 'Equipo de senderismo']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Essence Rabinal - Portal Turístico de Rabinal, Guatemala</title>
        <meta name="description" content="Descubre la auténtica cultura de Rabinal, Baja Verapaz. Tours culturales, gastronómicos y de naturaleza con guías locales. Experiencias únicas en Guatemala." />
      </Helmet>

      <div className="flex flex-col min-h-screen w-full">
        {/* 1. Hero Section */}
        <HomeHero />

        <main className="flex-1">
          {/* 2. Main Navigation Cards */}
          <CardGrid />

          {/* 3. Tours and Experiences Section */}
          <div className="bg-white border-t border-secondary/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-4 text-center">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Experiencias Destacadas
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-accent">
                Tours Populares
              </h3>
            </div>
            <ToursGrid tours={featuredTours} />
          </div>

          {/* 4. Remaining sections would go here (Testimonials, Collaboration, etc.) */}
          {/* Assuming they are added later or exist in other components */}
        </main>
      </div>
    </>
  );
}

export default HomePage;