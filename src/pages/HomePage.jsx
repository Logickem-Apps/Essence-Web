import React from 'react';
import Seo from '@/components/Seo.jsx';
import HomeHero from '@/components/HomeHero.jsx';
import CalendarAlert from '@/components/immersive/CalendarAlert.jsx';
import PortalGrid from '@/components/immersive/PortalGrid.jsx';
import ServicesSection from '@/components/immersive/ServicesSection.jsx';
import WhatsappBand from '@/components/immersive/WhatsappBand.jsx';
import ToursCarousel from '@/components/immersive/ToursCarousel.jsx';
import AboutSection from '@/components/immersive/AboutSection.jsx';
import PersonalizedSection from '@/components/immersive/PersonalizedSection.jsx';
import CtaSection from '@/components/immersive/CtaSection.jsx';

function HomePage() {
  return (
    <>
      <Seo
        title="Essence Rabinal - Turismo Comunitario en Rabinal, Baja Verapaz"
        description="Descubre la auténtica cultura de Rabinal, Baja Verapaz. Tours culturales, gastronómicos y de naturaleza con guías locales del pueblo maya Achí en Guatemala."
        path="/"
      />

      <div className="flex w-full flex-col bg-ink">
        <div className="relative">
          <HomeHero />
          <CalendarAlert />
        </div>
        <PortalGrid />
        <ServicesSection />
        <WhatsappBand />
        <ToursCarousel />
        <AboutSection />
        <PersonalizedSection />
        <CtaSection />
      </div>
    </>
  );
}

export default HomePage;
