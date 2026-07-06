import React from 'react';
import { Helmet } from 'react-helmet-async';

// Dominio del sitio (cámbialo aquí si el dominio final es otro).
const SITE_URL = 'https://essencerabinal.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Etiquetas SEO por página: título, descripción, canonical y Open Graph/Twitter.
 * `path` es la ruta ('/tours'); `image` es opcional (por defecto la imagen social del sitio).
 */
function Seo({ title, description, path = '', image, type = 'website' }) {
  const url = `${SITE_URL}${path}`;
  const img = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Essence Rabinal" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="es_GT" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}

export default Seo;
