import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Essence Rabinal - Portal Turístico de Rabinal, Guatemala</title>
        <meta
          name="description"
          content="Descubre la auténtica cultura de Rabinal, Baja Verapaz. Tours culturales, gastronómicos y de naturaleza con guías locales. Experiencias únicas en Guatemala."
        />
      </Helmet>

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
