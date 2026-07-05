import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

// TikTok no existe en lucide-react; ícono propio.
export const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.11v12.26a2.5 2.5 0 1 1-1.79-2.4V9.66a5.61 5.61 0 1 0 4.9 5.56V9.01a7.35 7.35 0 0 0 4.31 1.38V7.28a4.29 4.29 0 0 1-3.25-1.46Z" />
  </svg>
);

// Redes sociales del negocio. Se usan en el Footer y en la página de Contacto.
export const socials = [
  { href: 'https://www.facebook.com/share/1Eo1vGMbSf/?mibextid=wwXIfr', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.instagram.com/essencerabinal?igsh=MWZ0azZodXc4dW1nbg%3D%3D&utm_source=qr', label: 'Instagram', Icon: Instagram },
  { href: 'https://vt.tiktok.com/ZSCbpgy4N/', label: 'TikTok', Icon: TikTokIcon },
  { href: 'https://wa.me/50238506731', label: 'WhatsApp', Icon: MessageCircle },
];
