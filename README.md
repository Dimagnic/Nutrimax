# Nutrimax L. García — Landing

React + Vite + TypeScript. Sin librerías extra. Build: `npm run build` → carpeta `dist` (Vercel).

## Editar contenido (sin tocar componentes)
- `src/config.ts`: datos del negocio (WhatsApp, dirección, horario, redes), textos, FAQ, testimonios, videos, indicadores.
- `src/menu.json`: planes/precios (`price: null` muestra "Consultar precio") y productos.
- Todo lo marcado **POR DEFINIR** es relleno: sustitúyelo con datos reales del cliente.
- Listas vacías (`reviews`, `videos`, `stats`) ocultan su sección y su enlace de menú. Agrega solo datos reales.

## Imágenes (public/images/)
Si el archivo no existe se ve un recuadro de marca con su nombre; al copiar el archivo, aparece solo.

| Archivo | Dónde se usa |
|---|---|
| `logo.png` | Header, footer, favicon (ya incluido) |
| `hero.jpg` | Fondo del hero (horizontal, mín. 1600 px) |
| `problem-1.jpg` … `problem-4.jpg` | 4 tarjetas de "¿Cuántas veces…?" |
| `feature.jpg` | Sección oscura "Entrena. Nútrete. Repite." |
| `gallery/1.jpg` … `gallery/6.jpg` | Galería (4:3) |
| `promo.jpg` | Banner bajo los planes (21:6, opcional) |
| `team.jpg` | Sección "Acompañamiento" |

## Comportamiento
Menú fijo con resaltado por sección y menú móvil, FAQ en acordeón, formulario que arma el mensaje y abre WhatsApp, botón flotante de WhatsApp, botón de subir, animaciones al hacer scroll (respeta "reducir movimiento").

## Comandos
```
npm install
npm run dev
npm run build
```
