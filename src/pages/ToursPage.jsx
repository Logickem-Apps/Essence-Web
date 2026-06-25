import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToursHero from '@/components/ToursHero';
import ToursGrid from '@/components/ToursGrid';
import PersonalizedExperiencesSection from '@/components/PersonalizedExperiencesSection';

const toursData = [
  {
    name: "Centro Histórico",
    description: "Recorre las calles empedradas de Rabinal, visitando la imponente iglesia colonial, el mercado local y los monumentos históricos que narran siglos de historia.",
    duration: "3 - 4 horas",
    image: "https://images.unsplash.com/photo-1679100291488-bf9d9561f44c?q=80&w=1000&auto=format&fit=crop",
    includes: [
      "Guía local certificado",
      "Entrada a sitios históricos",
      "Degustación de bebida tradicional",
      "Aportación a la comunidad"
    ]
  },
  {
    name: "Artesanías Tradicionales",
    description: "Sumérgete en el arte de la alfarería y los textiles. Visita talleres de familias artesanas, aprende sus técnicas ancestrales y llévate una pieza única.",
    duration: "4 - 5 horas",
    image: "https://images.unsplash.com/photo-1596768453353-af35826c90a5?q=80&w=1000&auto=format&fit=crop",
    includes: [
      "Visita guiada a 3 talleres familiares",
      "Demostración interactiva de alfarería",
      "Materiales para crear tu propia artesanía",
      "Refrigerio local"
    ]
  },
  {
    name: "Río Negro",
    description: "Una expedición de memoria y naturaleza. Conoce la historia de la comunidad de Río Negro, disfruta del paisaje embalse de Chixoy y conecta con la resiliencia de su gente.",
    duration: "Día Completo (8 hrs)",
    image: "https://images.unsplash.com/photo-1553296527-6c03005f8d16?q=80&w=1000&auto=format&fit=crop",
    includes: [
      "Transporte desde el centro de Rabinal",
      "Traslado en lancha por el embalse",
      "Guía comunitario experto",
      "Almuerzo tradicional preparado por familias locales"
    ]
  },
  {
    name: "Experiencias Comunitarias",
    description: "Vive un día en la vida de una familia agrícola de Rabinal. Participa en la siembra o cosecha, aprende sobre plantas medicinales y comparte una comida tradicional casera.",
    duration: "5 - 6 horas",
    image: "https://images.unsplash.com/photo-1676046041939-8c920eebf2b8?q=80&w=1000&auto=format&fit=crop",
    includes: [
      "Inmersión directa con una familia anfitriona",
      "Taller de gastronomía participativa",
      "Caminata interpretativa por senderos agrícolas",
      "Almuerzo completo"
    ]
  }
];

function ToursPage() {
  return (
    <>
      <Helmet>
        <title>Tours y Experiencias - Essence Rabinal</title>
        <meta 
          name="description" 
          content="Descubre nuestros tours culturales, gastronómicos y de naturaleza en Rabinal. Experiencias auténticas con guías locales a partir de Q650." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 flex flex-col">
          <ToursHero />
          <ToursGrid tours={toursData} />
          <PersonalizedExperiencesSection />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ToursPage;