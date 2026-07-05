import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Frosted glass surface used across the Inmersivo theme (service cards,
 * badges, stat chips). Subtle white tint + blur + hairline border.
 */
function GlassCard({ children, className, hover = false, ...rest }) {
  return (
    <div
      className={cn(
        'ez-glass rounded-2xl',
        hover && 'ez-lift hover:border-gold/50 hover:bg-white/[0.07]',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default GlassCard;
