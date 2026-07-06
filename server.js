import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const dist = path.join(__dirname, 'dist');

// Sirve los archivos estáticos generados por `npm run build`.
app.use(express.static(dist));

// Fallback SPA: cualquier ruta no encontrada devuelve index.html
// (se usa middleware en vez de app.get('*') para ser compatible con Express 4 y 5).
app.use((_req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Essence Rabinal corriendo en el puerto ${port}`);
});
