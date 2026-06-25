import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryImage from '@/components/GalleryImage';

function GaleriaPage() {
  const [activeTab, setActiveTab] = useState('all');

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1678377918724-fed576b84f43?w=800&h=600&fit=crop',
      alt: 'Paisaje montañoso de Rabinal',
      category: 'Paisajes',
    },
    {
      src: 'https://images.unsplash.com/photo-1608283968556-62806ba5e78b?w=800&h=600&fit=crop',
      alt: 'Vista panorámica de Rabinal',
      category: 'Paisajes',
    },
    {
      src: 'https://images.unsplash.com/photo-1695938268873-0177bcbd5b8f?w=800&h=600&fit=crop',
      alt: 'Iglesia colonial de Rabinal',
      category: 'Iglesias',
    },
    {
      src: 'https://images.unsplash.com/photo-1679100291488-bf9d9561f44c?w=800&h=600&fit=crop',
      alt: 'Interior de iglesia histórica',
      category: 'Iglesias',
    },
    {
      src: 'https://images.unsplash.com/photo-1549970749-0119e4a5ad6e?w=800&h=600&fit=crop',
      alt: 'Danza tradicional Achi',
      category: 'Cultura',
    },
    {
      src: 'https://images.unsplash.com/photo-1559738336-4cb29b3417b3?w=800&h=600&fit=crop',
      alt: 'Artesanía tradicional',
      category: 'Cultura',
    },
    {
      src: 'https://images.unsplash.com/photo-1641897434555-720ccf02fe35?w=800&h=600&fit=crop',
      alt: 'Campos de cultivo en Rabinal',
      category: 'Tradiciones',
    },
    {
      src: 'https://images.unsplash.com/photo-1617086952064-cbc12c3a08f0?w=800&h=600&fit=crop',
      alt: 'Agricultura tradicional',
      category: 'Tradiciones',
    },
    {
      src: 'https://images.unsplash.com/photo-1701680607122-21ddff29c71a?w=800&h=600&fit=crop',
      alt: 'Platillo tradicional de Rabinal',
      category: 'Gastronomía',
    },
    {
      src: 'https://images.unsplash.com/photo-1698854632975-7e7d37ecac69?w=800&h=600&fit=crop',
      alt: 'Comida típica guatemalteca',
      category: 'Gastronomía',
    },
  ];

  const categories = ['all', 'Paisajes', 'Cultura', 'Tradiciones', 'Iglesias', 'Gastronomía'];

  const filteredImages = activeTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Galería - Essence Rabinal</title>
        <meta 
          name="description" 
          content="Explora nuestra galería de imágenes de Rabinal: paisajes, cultura, tradiciones, iglesias y gastronomía. Descubre la belleza de Baja Verapaz." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Descubre la belleza de Rabinal a través de nuestras imágenes
              </p>
            </motion.div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 lg:grid-cols-6 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    {category === 'all' ? 'Todas' : category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {filteredImages.map((image, index) => (
                    <GalleryImage
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      category={image.category}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default GaleriaPage;