import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const navCards = [
  {
    title: 'Explorar Rabinal',
    description: 'Descubre los lugares más hermosos',
    image: 'https://images.unsplash.com/photo-1607664287054-35064595b774?q=80&w=1000&auto=format&fit=crop',
    link: '/explorar',
    colSpan: 'lg:col-span-1'
  },
  {
    title: 'Tours y Experiencias',
    description: 'Vive experiencias inolvidables',
    image: 'https://images.unsplash.com/photo-1631079250215-525a723f6081?q=80&w=1000&auto=format&fit=crop',
    link: '/tours',
    colSpan: 'lg:col-span-1'
  },
  {
    title: 'Galería Fotográfica',
    description: 'Visualiza la belleza de Rabinal',
    image: 'https://images.unsplash.com/photo-1678377918724-fed576b84f43?q=80&w=1000&auto=format&fit=crop',
    link: '/galeria',
    colSpan: 'lg:col-span-1'
  },
  {
    title: 'Sobre Nosotros',
    description: 'Conoce nuestra historia y misión',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1000&auto=format&fit=crop',
    link: '/sobre-nosotros',
    colSpan: 'lg:col-span-1 lg:col-start-1 lg:col-end-3 xl:col-auto xl:col-span-1' 
  },
  {
    title: 'Contacto',
    description: 'Ponte en contacto con nosotros',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop',
    link: '/contacto',
    colSpan: 'lg:col-span-1 lg:col-start-3 lg:col-end-4 xl:col-auto xl:col-span-1'
  }
];

function CardGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            Portal Turístico
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Explora Rabinal
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Selecciona una de nuestras categorías para comenzar tu viaje y descubrir todo lo que nuestra hermosa tierra tiene para ofrecer.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          role="navigation"
          aria-label="Navegación principal"
        >
          {navCards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`group relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden hover-card-elevate isolate ${card.colSpan}`}
            >
              <Link to={card.link} className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="nav-card-image"
                  />
                </div>
                
                {/* Brand Overlay - Verde on hover */}
                <div className="nav-card-overlay"></div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 text-white">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-md transform transition-transform duration-300 group-hover:-translate-y-1 text-white">
                    {card.title}
                  </h4>
                  <p className="text-white/90 text-sm md:text-base font-medium drop-shadow-sm transform transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:text-primary">
                    {card.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CardGrid;