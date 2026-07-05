import React from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal.jsx';

/**
 * Section eyebrow + title (Inmersivo). Centered by default; pass align="left"
 * for left-aligned section headers. Optional subtitle paragraph.
 */
function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }) {
  const centered = align === 'center';
  return (
    <Reveal
      className={cn(
        centered ? 'text-center mx-auto' : 'text-left',
        centered && 'max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <div className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="font-body text-base md:text-lg leading-relaxed text-foreground/70 mt-4">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
