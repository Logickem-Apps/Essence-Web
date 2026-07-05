# 📸 Inventario de imágenes — Essence Rabinal

Guía de todas las imágenes del sitio: cuáles son **placeholders de Unsplash** (reemplazar sí o sí),
cuáles son **locales** (revisar si son fotos reales de Rabinal o genéricas), y el **tamaño ideal** de cada una.

> Entrega JPG/PNG a tamaño ≥ ideal; yo las optimizo a WebP. Coloca las fotos en una carpeta
> y pásame la ruta, o dime el nombre y las cambio. Motivo centrado para heros full-bleed.

**Leyenda de prioridad:** 🔴 placeholder Unsplash (reemplazar) · 🟡 local, revisar si es real de Rabinal · 🟢 ya es de marca

---

## 1. Inicio (Home)  → `src/lib/homeContent.js`
| Slot | Imagen actual | Ideal | Prioridad |
|---|---|---|---|
| Hero fondo 1 | rabinal-panoramica.webp | 1920×1080 (16:9) | 🟢 |
| Hero fondo 2 | rabinal-achi-cultura.webp | 1920×1080 (16:9) | 🟢 |
| Hero fondo 3 | Unsplash (naturaleza) | 1920×1080 (16:9) | 🔴 |
| Portal "Explorar Rabinal" | Unsplash | 800×1000 (4:5) | 🔴 |
| Portal "Tours y Experiencias" | Unsplash | 800×1000 (4:5) | 🔴 |
| Portal "Galería Fotográfica" | Unsplash | 800×1000 (4:5) | 🔴 |
| Portal "Sobre Nosotros" | Unsplash | 800×1000 (4:5) | 🔴 |
| Portal "Contacto" | Unsplash | 800×1000 (4:5) | 🔴 |
| Tours Populares — Centro Histórico | Unsplash | 800×1100 (3:4) | 🔴 |
| Tours Populares — Río Negro | Unsplash | 800×1100 (3:4) | 🔴 |
| Tours Populares — Ruta de la Naturaleza | Unsplash | 800×1100 (3:4) | 🔴 |
| Sección "Nuestra Historia" (aboutImage) | cultura-rabinal.webp | 1200×960 (5:4) | 🟡 |
| Banda CTA final (ctaImage) | ruinas-naturaleza.webp | 1920×1080 (16:9) | 🟡 |

## 2. Tours  → `src/pages/ToursPage.jsx`
| Tarjeta de tour | Imagen actual | Ideal | Prioridad |
|---|---|---|---|
| Centro Histórico | Unsplash | 800×1100 (3:4) | 🔴 |
| Artesanías Tradicionales | Unsplash | 800×1100 (3:4) | 🔴 *(cliente ya te dio fotos)* |
| Sitios Arqueológicos (Kaj Juyub'/Chuitinamit) | ruinas-naturaleza.webp | 800×1100 (3:4) | 🟡 |
| Río Negro | Unsplash | 800×1100 (3:4) | 🔴 *(cliente ya te dio fotos)* |
| Experiencias Comunitarias | Unsplash | 800×1100 (3:4) | 🔴 |
| Hero de la página → `src/components/ToursHero.jsx` | Unsplash | 1920×1080 (16:9) | 🔴 |
| Fallback tarjeta → `src/components/TourCard.jsx` | Unsplash | 800×1100 | 🔴 (solo si falta imagen) |
| Modal detalle fallback → `src/components/TourDetailModal.jsx` | Unsplash | 1200×800 | 🔴 (solo fallback) |

## 3. Explorar  → `src/pages/ExplorarPage.jsx`
| Categoría (tarjeta + hero detalle) | Imagen actual | Ideal | Prioridad |
|---|---|---|---|
| Información de Rabinal | rabinal-panoramica.webp | 1200×800 (3:2) | 🟢 |
| Cultura | rabinal-achi-cultura.webp | 1200×800 (3:2) | 🟢 |
| Gastronomía | gastronomia-boxbol.webp | 1200×800 (3:2) | 🟡 |
| *(Opcional)* 2ª imagen dentro de cada categoría | — (no hay) | 1200×800 (3:2) | ➕ opcional |

## 4. Galería  → `src/pages/GaleriaPage.jsx`  (10 fotos, TODAS placeholder)
| # | Categoría | Ideal | Prioridad |
|---|---|---|---|
| 1 | Paisajes | 1200×800 (3:2) / mixto | 🔴 |
| 2 | Paisajes | 1200×800 | 🔴 |
| 3 | Iglesias | 800×1000 (vertical) | 🔴 |
| 4 | Iglesias | 1200×800 | 🔴 |
| 5 | Cultura | 800×1000 | 🔴 |
| 6 | Cultura | 1200×800 | 🔴 |
| 7 | Tradiciones | 1200×800 | 🔴 |
| 8 | Tradiciones | 800×1000 | 🔴 |
| 9 | Gastronomía | 1200×800 | 🔴 |
| 10 | Gastronomía | 800×1000 | 🔴 |
| Hero de la página | rabinal-achi-cultura.webp | 1920×1080 | 🟢 |

> La galería usa masonry con alturas variadas → sirven fotos verticales y horizontales mezcladas.

## 5. Sobre Nosotros  → `src/pages/SobreNosotrosPage.jsx`
| Slot | Imagen actual | Ideal | Prioridad |
|---|---|---|---|
| Hero de la página | autenticidad.webp | 1920×1080 | 🟡 |
| "Nuestra Historia" | cultura-rabinal.webp | 1200×960 (5:4) | 🟡 |
| Valor — Autenticidad | autenticidad.webp | 1000×750 (4:3) | 🟡 |
| Valor — Compromiso comunitario | comunidad.webp | 1000×750 (4:3) | 🟡 |
| Valor — Sostenibilidad | ruinas-naturaleza.webp | 1000×750 (4:3) | 🟡 |

## 6. Servicios  → `src/pages/ServiciosPage.jsx`
| Slot | Imagen actual | Ideal | Prioridad |
|---|---|---|---|
| Hero de la página | comunidad.webp | 1920×1080 | 🟡 |
| (las tarjetas usan íconos, no fotos) | — | — | — |

## 7. Contacto  → `src/pages/ContactoPage.jsx`
| Slot | Imagen actual | Ideal | Prioridad |
|---|---|---|---|
| Hero de la página | ruinas-naturaleza.webp | 1920×1080 | 🟡 |

## 8. Calendario  → `src/pages/CalendarioPage.jsx`
| Slot | Imagen actual | Ideal | Prioridad |
|---|---|---|---|
| Hero de la página | rabinal-achi-cultura.webp | 1920×1080 | 🟢 |
| *(Opcional)* imagen por evento/festividad | — (no hay) | 1200×800 | ➕ opcional |

## 9. Logo  → Header y Footer
| Slot | Imagen actual | Estado |
|---|---|---|
| Logo | logo-essence.webp (fondo blanco) | ✅ definitivo |

---

## Resumen rápido
- **🔴 Placeholders Unsplash a reemplazar: ~29** (3 hero Home no+, 5 portal, 3+5 tours, 10 galería, heros/fallbacks).
- **🟡 Locales a revisar (¿reales de Rabinal o genéricas?): 7 archivos** (autenticidad, comunidad, cultura-rabinal, gastronomia-boxbol, ruinas-naturaleza — repetidas en varios slots).
- **🟢 Ya de marca: rabinal-panoramica, rabinal-achi-cultura.**
- **Prioridad alta del cliente:** Artesanías y Río Negro (ya te dio fotos) + pedirle **videos**.

## Tamaños ideales (resumen)
- Hero fondo full-bleed: **1920×1080** (16:9)
- Tarjeta de tour: **800×1100** (3:4 vertical)
- Tarjeta de portal (Home): **800×1000** (4:5 vertical)
- "Nuestra Historia": **1200×960** (5:4)
- Tarjetas de valores: **1000×750** (4:3)
- Galería / imágenes en contenido: **1200×800** (3:2), mezcla vertical/horizontal
