import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PersonalizedExperiencesSection() {
  return (
    <section className="py-20 md:py-28 bg-accent/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/60 relative overflow-hidden">
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Globe className="w-64 h-64 text-foreground" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-[36px] font-bold text-card-foreground tracking-tight">
                Experiencias Personalizadas
              </h2>
            </div>

            <div className="space-y-5 text-desc text-muted-foreground mb-10">
              <p>
                ¿Buscas una aventura diseñada a tu medida? Ofrecemos experiencias personalizadas a partir de <strong className="text-foreground font-semibold">Q650 (~US$85)</strong>, ideales para grupos pequeños de hasta 3 personas.
              </p>
              <p>
                Puedes adaptar cualquiera de nuestros itinerarios existentes o colaborar con nuestros guías locales para crear una ruta única basada en tus intereses específicos: ya sea fotografía, gastronomía profunda, senderismo exigente o inmersión cultural prolongada.
              </p>
              <p>
                <span className="flex items-center gap-2 text-foreground font-medium mb-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Turismo Comunitario
                </span>
                El precio final varía según el grado de personalización, pero cada recorrido apoya directamente a las familias de Rabinal. Creemos en un turismo responsable que respeta y beneficia a nuestra comunidad.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full sm:w-auto"
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-14 px-8 text-base shadow-md shadow-primary/20">
                <Link to="/contacto" state={{ interestedIn: "Experiencia Personalizada" }}>
                  Solicitar cotización personalizada
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalizedExperiencesSection;