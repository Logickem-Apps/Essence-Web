import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Info, Utensils, Landmark, Map, ArrowLeft, TreePine, Palette, HeartHandshake } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ExplorarPage() {
  const [selectedCard, setSelectedCard] = useState(null);
  
  const explorarCards = [{
    id: 'informacion',
    icon: Info,
    title: 'Información de Rabinal',
    color: 'bg-primary/10',
    content: {
      title: 'Rabinal, Baja Verapaz',
      paragraphs: [
        'Rabinal, Baja Verapaz, es un municipio ubicado en la región norte de Guatemala, a unos 28 km de la cabecera departamental (Salamá) y aproximadamente 175 km de la Ciudad de Guatemala. Se encuentra en una zona montañosa de la Sierra de Chuacús, con una altitud cercana a los 973 metros sobre el nivel del mar. Su territorio está conformado por la cabecera municipal y numerosas comunidades rurales, lo que lo convierte en una zona amplia y diversa geográficamente.',
        'Considerado uno de los pueblos con raíces históricas más antiguas de la región, Rabinal es conocido por su rica herencia cultural maya Achí y por sus tradiciones ancestrales que se mantienen vivas hasta hoy. Es un municipio profundamente rico en cultura y tradiciones, las cuales forman parte esencial de su identidad local.'
      ],
      highlights: [
        'Población aproximada: 47,283 habitantes', 
        'Altitud: 973 metros sobre el nivel del mar', 
        'Clima: Templado con temperaturas entre 18°C y 28°C', 
        'Idiomas: Español y Achi (lengua maya)', 
        'Fundación: Época precolombina, refundado en 1537'
      ],
      image: 'https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/85004050afca35c845ba1765b19b2679.png',
      imageAlt: 'Panorámica aérea de Rabinal, Baja Verapaz - vista completa con iglesia blanca, mercado colorido, montañas, atardecer y comunidad'
    }
  }, {
    id: 'cultura',
    icon: Landmark,
    title: 'Cultura',
    color: 'bg-secondary/10',
    content: {
      title: 'Patrimonio Cultural de Rabinal',
      description: 'Rabinal es hogar de una de las culturas mayas más vibrantes de Guatemala. El pueblo Achi ha preservado sus tradiciones, danzas, música y ceremonias ancestrales.',
      sections: [
        {
          subtitle: 'Danzas y Tradiciones de Rabinal',
          paragraphs: [
            'Rabinal es un pueblo con una cultura viva, donde las tradiciones ancestrales se manifiestan a través de la música y la danza. Los instrumentos tradicionales como el tambor, el pito, el tun, el adufe, la chirimía y la marimba sencilla resuenan en cada celebración, manteniendo el pulso de la identidad local.',
            'El municipio es reconocido por albergar más de 20 danzas tradicionales, cada una con su propio significado histórico, espiritual y social, convirtiendo a Rabinal en un verdadero epicentro del folclore guatemalteco.'
          ]
        },
        {
          subtitle: 'La Danza Drama Rabinal Achí o Xajoj Tum',
          paragraphs: [
            'Declarada Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO el 25 de noviembre de 2005, el Rabinal Achí es una joya invaluable de la cultura maya.',
            'Esta danza drama prehispánica narra el conflicto histórico y político entre los señoríos de los Rabinaleb y los K\'iche\', destacando temas de honor, lealtad y justicia a través de diálogos poéticos, música y movimientos coreográficos ancestrales.'
          ]
        },
        {
          subtitle: 'Personajes Principales',
          paragraphs: [
            'La representación del Rabinal Achí cobra vida a través de personajes emblemáticos, cada uno con un rol fundamental en el desarrollo de la narrativa histórica:'
          ],
          list: [
            { title: 'Rabinal Achí', description: 'Hijo del soberano Job Toj.' },
            { title: 'K\'iche Achí', description: 'Guerrero, cazador e hijo de Balam Achí.' },
            { title: 'Job Toj', description: 'Soberano de los Rabinaleb.' },
            { title: 'Ixoq Muy', description: 'Sirviente en la corte con traje cobanero.' },
            { title: 'U Chuch Q\'uq\' U Chuch Raxón', description: 'Esposa de Rabinal Achí (madre de pájaros verdes).' },
            { title: 'Guerreros Águila y Jaguar', description: 'Encargados de ejecutar a K\'iche Achí.' }
          ]
        }
      ],
      image: 'https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/3ed8487af3cb7b146bbdc008f27f7b48.jpg',
      imageAlt: 'Representación del Rabinal Achí con danzarines en trajes tradicionales coloridos, coronas de flores vibrantes y adornos dorados'
    }
  }, {
    id: 'gastronomia',
    icon: Utensils,
    title: 'Gastronomía',
    color: 'bg-accent/20',
    content: {
      title: 'Sabores Tradicionales de Rabinal',
      description: 'La gastronomía de Rabinal combina ingredientes locales con recetas ancestrales, creando una experiencia culinaria única que refleja la identidad del pueblo Achi.',
      detailedParagraph: 'La gastronomía de Rabinal es un vibrante testimonio de la herencia cultural viva de Baja Verapaz, donde cada receta narra historias ancestrales a través de sabores profundamente auténticos. Al visitar este rincón guatemalteco, el paladar se deleita con platillos emblemáticos como el reconfortante pinol, el tradicional Boxbol y la variedad de tamales y tamalitos, cuya elaboración artesanal es reflejo de una tradición transmitida de generación en generación. Esta experiencia culinaria se eleva al acompañarla con su oferta de bebidas rituales y reconfortantes, desde el emblemático chilate —la bebida ceremonial por excelencia— hasta los diversos atoles como el shuco, preparado con fermentos de maíz de colores, o el aromático atol de tres cocimientos. Degustar estos manjares es, sin duda, la forma más genuina de conectar con el corazón y la hospitalidad de la tierra de Rabinal.',
      highlights: [
        'Boxbol: Preparación ancestral envuelta en hoja de maxán, símbolo de la tradición culinaria local',
        'Pinol: Bebida nutritiva a base de maíz tostado, profundamente arraigada en la identidad Achí',
        'Chilate: Bebida ceremonial por excelencia, ligada a rituales y costumbres milenarias',
        'Atoles tradicionales: Variedad de bebidas calientes como el shuco y el de tres cocimientos, elaboradas con técnicas heredadas',
        'Tamales y tamalitos: Expresión de la cocina artesanal, transmitida de generación en generación'
      ],
      image: 'https://horizons-cdn.hostinger.com/d3fcc168-8217-40d2-89ff-4389dfaaf8fa/efeb961d1ecc28c5e45bdce748cfda86.jpg',
      imageAlt: 'Preparación tradicional de Boxbol envuelto en hoja de maxán, mostrando manos de un artesano local preparando el platillo en un ambiente comunitario con textiles tradicionales de colores vibrantes'
    }
  }];

  return (
    <>
      <Helmet>
        <title>Explorar Rabinal - Essence Rabinal</title>
        <meta name="description" content="Descubre información sobre Rabinal, su cultura, gastronomía y tours disponibles. Conoce la rica herencia del pueblo Achi." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {!selectedCard ? (
              <>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }} 
                  className="text-center mb-12"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Explora Rabinal</h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Descubre todo lo que Rabinal tiene para ofrecer a través de su cultura, historia y experiencias únicas.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {explorarCards.map((card, index) => (
                    <motion.div 
                      key={card.id} 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card 
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full" 
                        onClick={() => setSelectedCard(card)}
                      >
                        <CardHeader>
                          <div className={`w-16 h-16 ${card.color} rounded-xl flex items-center justify-center mb-4`}>
                            <card.icon className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="text-2xl">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            Descubre más información
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="max-w-4xl mx-auto"
              >
                <Button variant="ghost" onClick={() => setSelectedCard(null)} className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>

                <Card className="overflow-hidden border-none shadow-lg">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={selectedCard.content.image} 
                      alt={selectedCard.content.imageAlt || selectedCard.content.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                  <div className="p-6 sm:p-8 md:p-10">
                    <CardHeader className="px-0 pt-0">
                      <div className={`w-16 h-16 ${selectedCard.color} rounded-xl flex items-center justify-center mb-6`}>
                        <selectedCard.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
                        {selectedCard.content.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0 space-y-8">
                      
                      {selectedCard.content.paragraphs && (
                        <div className="space-y-6">
                          {selectedCard.content.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {!selectedCard.content.paragraphs && !selectedCard.content.sections && selectedCard.content.description && (
                        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                          {selectedCard.content.description}
                        </p>
                      )}

                      {selectedCard.content.detailedParagraph && (
                        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 border border-accent/10">
                          <p className="text-lg text-muted-foreground leading-relaxed italic">
                            {selectedCard.content.detailedParagraph}
                          </p>
                        </div>
                      )}

                      {selectedCard.content.sections && (
                        <div className="space-y-10 mt-8">
                          {selectedCard.content.sections.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                              <h3 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                                {section.subtitle}
                              </h3>
                              {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="text-lg text-muted-foreground leading-relaxed">
                                  {p}
                                </p>
                              ))}
                              {section.list && (
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                  {section.list.map((item, itemIdx) => (
                                    <li key={itemIdx} className="bg-muted/30 p-4 rounded-xl border border-border/50">
                                      <strong className="block text-foreground font-semibold mb-1">{item.title}</strong>
                                      <span className="text-muted-foreground text-sm leading-relaxed">{item.description}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {selectedCard.content.highlights && (
                        <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 mt-8">
                          <h3 className="text-xl font-semibold mb-6 text-foreground">Aspectos Destacados</h3>
                          <ul className="space-y-4">
                            {selectedCard.content.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                                <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ExplorarPage;