import React from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll-reveal wrapper — replaces the mockup's `data-reveal` attribute.
 * Fades + rises its children into view once, when they enter the viewport.
 *
 * Props:
 *  - delay   (number) seconds to stagger the animation
 *  - y       (number) starting vertical offset in px (default 28)
 *  - as      (string) motion element tag (default 'div')
 */
function Reveal({ children, delay = 0, y = 28, as = 'div', className, style, ...rest }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
