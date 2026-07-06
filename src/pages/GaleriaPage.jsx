import React, { useState } from 'react';
import Seo from '@/components/Seo.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryImage from '@/components/GalleryImage';
import PageHero from '@/components/immersive/PageHero.jsx';
import CtaBand from '@/components/immersive/CtaBand.jsx';

// Real client photos, categorized. aspect = orientación natural (evita recortes feos).
const galleryImages = [
  { src: '/images/pai-rabinal-paisaje.webp', alt: 'Paisaje del valle de Rabinal', category: 'Paisajes', aspect: '3/2' },
  { src: '/images/art-artesanias-tradicionales.webp', alt: 'Artesanías tradicionales de Rabinal', category: 'Artesanías', aspect: '3/2' },
  { src: '/images/cult-rabinal-achi-cultura.webp', alt: 'Cultura viva del pueblo Achí', category: 'Cultura', aspect: '3/2' },
  { src: '/images/sit-centro-historico.webp', alt: 'Centro histórico de Rabinal', category: 'Sitios históricos', aspect: '3/2' },
  { src: '/images/trad-fogata1.webp', alt: 'Tradiciones alrededor del fuego', category: 'Tradiciones', aspect: '3/4' },
  { src: '/images/gas-gastronomia-boxbol.webp', alt: 'Boxbol, platillo tradicional', category: 'Gastronomía', aspect: '4/3' },
  { src: '/images/pai-rio1.webp', alt: 'Río Negro y su naturaleza', category: 'Paisajes', aspect: '3/4' },
  { src: '/images/art-jicaras.webp', alt: 'Jícaras de morro labradas a mano', category: 'Artesanías', aspect: '3/4' },
  { src: '/images/cult-mask.webp', alt: 'Danza tradicional con máscaras', category: 'Cultura', aspect: '3/2' },
  { src: '/images/sit-rabinal-panoramica.webp', alt: 'Vista panorámica de Rabinal', category: 'Sitios históricos', aspect: '3/2' },
  { src: '/images/trad-fogata2.webp', alt: 'Noche de fogata comunitaria', category: 'Tradiciones', aspect: '3/4' },
  { src: '/images/gas-equipo.webp', alt: 'Cocina tradicional en comunidad', category: 'Gastronomía', aspect: '4/3' },
  { src: '/images/pai-rio2.webp', alt: 'Naturaleza y agua en Rabinal', category: 'Paisajes', aspect: '3/4' },
  { src: '/images/art-jicaras2.webp', alt: 'Guacales y jícaras pintadas a mano', category: 'Artesanías', aspect: '3/4' },
  { src: '/images/cult-marimba-personas.webp', alt: 'Marimba y comunidad', category: 'Cultura', aspect: '3/2' },
  { src: '/images/sit-ruinas-naturaleza.webp', alt: 'Sitios y naturaleza de Rabinal', category: 'Sitios históricos', aspect: '3/2' },
  { src: '/images/pai-rio3.webp', alt: 'Paisaje ribereño de Baja Verapaz', category: 'Paisajes', aspect: '3/4' },
  { src: '/images/art-mascaras.webp', alt: 'Alcancías y guacales de morro', category: 'Artesanías', aspect: '3/4' },
  { src: '/images/cult-miercoles-chilate.webp', alt: 'Miércoles de chilate', category: 'Cultura', aspect: '3/4' },
  { src: '/images/trad-galeria-fotografica.webp', alt: 'Vida y tradición en Rabinal', category: 'Tradiciones', aspect: '3/2' },
  { src: '/images/pai-rio4.webp', alt: 'Senderos y naturaleza', category: 'Paisajes', aspect: '3/4' },
  { src: '/images/art-chinchines.webp', alt: 'Chinchines (sonajas) artesanales', category: 'Artesanías', aspect: '3/4' },
  { src: '/images/cult-descubre-rabinal.webp', alt: 'Rabinal, cultura y tradición', category: 'Cultura', aspect: '3/2' },
  { src: '/images/art-llaveros.webp', alt: 'Llaveros artesanales de morro', category: 'Artesanías', aspect: '3/4' },
  { src: '/images/pai-explorar-rabinal.webp', alt: 'Explora los paisajes de Rabinal', category: 'Paisajes', aspect: '3/4' },
];

const categories = ['all', 'Paisajes', 'Cultura', 'Artesanías', 'Tradiciones', 'Gastronomía', 'Sitios históricos'];

function GaleriaPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = activeTab === 'all' ? galleryImages : galleryImages.filter((img) => img.category === activeTab);

  return (
    <>
      <Seo
        title="Galería - Essence Rabinal"
        description="Explora nuestra galería de Rabinal: paisajes, cultura, artesanías, tradiciones, gastronomía y sitios históricos de Baja Verapaz."
        path="/galeria"
      />

      <div className="flex min-h-screen flex-col bg-ink">
        <Header />

        <main className="flex-1">
          <PageHero
            breadcrumb={<>Inicio &nbsp;/&nbsp; <span className="text-gold">Galería</span></>}
            title="Galería"
            subtitle="Un vistazo a la belleza de Rabinal: paisajes, cultura, artesanías, tradiciones y sabores que te esperan."
            image="/images/trad-galeria-fotografica.webp"
          />

          <section className="bg-ink py-16 md:py-24">
            <div className="mx-auto max-w-[1340px] px-5 md:px-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mx-auto mb-12 flex h-auto max-w-3xl flex-wrap justify-center gap-2 bg-transparent p-0">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-body text-sm capitalize text-cream/70 transition-colors hover:text-cream data-[state=active]:border-gold data-[state=active]:bg-gold data-[state=active]:text-gold-ink data-[state=active]:shadow-none"
                    >
                      {category === 'all' ? 'Todas' : category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value={activeTab} className="mt-0">
                  <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
                    {filteredImages.map((image) => (
                      <GalleryImage
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        category={image.category}
                        aspect={image.aspect}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          <CtaBand
            title="¿Te gustaría vivirlo en persona?"
            subtitle="Cada rincón cobra vida junto a nuestros guías locales. Escríbenos y diseñamos contigo tu experiencia en Rabinal."
            ctaLabel="Reserva tu experiencia"
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default GaleriaPage;
