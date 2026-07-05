import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToursHero from '@/components/ToursHero';
import ToursGrid from '@/components/ToursGrid';
import PersonalizedExperiencesSection from '@/components/PersonalizedExperiencesSection';

const toursData = [
  {
    name: 'Centro Histórico',
    description: 'Recorre el corazón colonial de Rabinal: la imponente iglesia de San Pablo Apóstol, el bullicioso mercado local y el Museo Comunitario de la Memoria Histórica, donde la historia precolombina, colonial y contemporánea del pueblo Achí cobra vida entre calles empedradas.',
    duration: '3 - 4 horas',
    image: '/images/sit-centro-historico.webp',
    includes: [
      'Guía local certificado',
      'Visita a la iglesia colonial de San Pablo Apóstol',
      'Recorrido por el Museo Comunitario de la Memoria Histórica',
      'Degustación de una bebida tradicional (chilate)'
    ]
  },
  {
    name: 'Artesanías Tradicionales',
    description: 'Descubre por qué Rabinal es célebre por sus artesanías. Visita talleres familiares donde el fruto del morro se transforma en jícaras y guacales labrados y pintados a mano, y conoce la cerámica de técnicas prehispánicas y los textiles tejidos en telar de cintura.',
    duration: '4 - 5 horas',
    image: '/images/art-artesanias-tradicionales.webp',
    includes: [
      'Visita a talleres familiares de morro y jícaras',
      'Demostración de labrado y pintado tradicional (palo amarillo, achiote y hollín de ocote)',
      'Cerámica de técnica prehispánica y textiles en telar de cintura',
      'Oportunidad de adquirir piezas únicas directamente del artesano'
    ]
  },
  {
    name: 'Sitios Arqueológicos',
    description: 'Conecta con las raíces del pueblo maya Achí visitando dos sitios prehispánicos cercanos a Rabinal: el Cerro Kaj Juyub\', antigua capital de los Rabinaleb\' encaramada en la cima de un cerro, y Chuitinamit (Chwi Tinamit), "el lugar sobre el pueblo", con sus templos gemelos. Un recorrido de historia, memoria y espiritualidad maya.',
    duration: 'Día completo',
    // TODO(imagen cliente): fotos reales de Kaj Juyub' / Chuitinamit (800×1100, vertical). Placeholder local por ahora.
    image: '/images/sit-ruinas-naturaleza.webp',
    includes: [
      'Guía local con conocimiento histórico y cultural',
      'Visita al Cerro Kaj Juyub\', antigua capital de los Rabinaleb\'',
      'Visita a Chuitinamit (Chwi Tinamit) y sus templos gemelos',
      'Contexto histórico ligado al drama del Rabinal Achí',
      'Transporte y refrigerio tradicional'
    ]
  },
  {
    name: 'Río Negro',
    description: 'Un recorrido de memoria histórica y naturaleza guiado por la propia comunidad. Conoce la historia y la resiliencia de la aldea de Río Negro, visita el Centro Histórico y Educativo Riij Ib\'ooy y contempla el paisaje del embalse de la hidroeléctrica Chixoy.',
    duration: 'Día completo (8 hrs)',
    image: '/images/pai-rio-negro.webp',
    includes: [
      'Transporte desde el centro de Rabinal',
      'Traslado en lancha por el embalse de Chixoy',
      'Guía comunitario de Río Negro',
      'Visita al Centro Histórico y Educativo Riij Ib\'ooy',
      'Almuerzo tradicional preparado por familias locales'
    ]
  },
  {
    name: 'Experiencias Comunitarias',
    description: 'Vive un día junto a una familia Achí de Rabinal. Participa en labores agrícolas, aprende sobre plantas medicinales y comparte la elaboración de platillos tradicionales como el boxbol o el pinol, en una inmersión cultural auténtica.',
    duration: '5 - 6 horas',
    image: '/images/gas-equipo.webp',
    includes: [
      'Inmersión directa con una familia anfitriona',
      'Taller de gastronomía participativa (boxbol o pinol)',
      'Caminata interpretativa por senderos agrícolas',
      'Almuerzo completo'
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
          content="Descubre nuestros tours culturales, gastronómicos y de naturaleza en Rabinal: artesanías de morro, Río Negro, centro histórico y experiencias comunitarias con guías locales."
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
