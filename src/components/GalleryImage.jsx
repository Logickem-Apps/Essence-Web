import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';

function GalleryImage({ src, alt, category }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group cursor-pointer overflow-hidden rounded-xl"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <img 
            src={src}
            alt={alt}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GalleryImage;