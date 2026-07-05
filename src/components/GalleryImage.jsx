import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

function GalleryImage({ src, alt, category, aspect = '4/3' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="ez-card group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/[0.08] transition-colors hover:border-gold/50"
        style={{ aspectRatio: aspect }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="ez-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

        <span
          className="absolute left-3 top-3 rounded-full border border-gold/40 px-3 py-1 font-body text-xs font-semibold text-gold shadow"
          style={{ backgroundColor: 'rgba(11, 14, 12, 0.82)' }}
        >
          {category}
        </span>

        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 text-cream opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>

        <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left font-body text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {alt}
        </span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl overflow-hidden border-white/10 bg-ink p-0">
          <VisuallyHidden>
            <DialogTitle>{alt}</DialogTitle>
          </VisuallyHidden>
          <img src={src} alt={alt} className="h-auto w-full" />
          <div className="flex items-center gap-3 border-t border-white/10 px-5 py-4">
            <span className="rounded-full bg-gold/15 px-3 py-1 font-body text-xs font-semibold text-gold">{category}</span>
            <span className="font-body text-sm text-cream/80">{alt}</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GalleryImage;
