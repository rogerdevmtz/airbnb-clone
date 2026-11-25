# Airbnb UI Clone · Next.js 16 + React + Tailwind

Proyecto de 4Geeks Academy: clon de tres vistas de Airbnb (Home, Catálogo y Detalle de habitación), mobile-first, con Next.js 16 (App Router), TypeScript y Tailwind CSS.

👉 El brief del proyecto y las especificaciones de componentes (flujo de visión → spec) están en [`context.md`](./context.md).

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Home: buscador con filtrado en tiempo real, categorías y cuadrícula de alojamientos |
| `/catalog` | Catálogo: número de resultados, orden por precio y mapa (placeholder) |
| `/rooms/[id]` | Detalle: galería, cabecera, anfitrión, servicios y tarjeta de reserva |

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Estructura

```
app/            rutas (/, /catalog, /rooms/[id])
components/     un componente de UI por archivo
types/          interfaces de TypeScript (Listing, Room, Host…)
lib/            datos simulados y constantes
context.md      brief + especificaciones de componentes
```

## Diseño

Réplica visual de Airbnb: buscador en píldora (Dónde · Cuándo · Quién), categorías con iconos de línea, tarjetas con foto, corazón de favorito y etiqueta "Favorito entre huéspedes", carga con *skeletons*, y en el detalle la galería en cuadrícula y la tarjeta de reserva *sticky*. Fotos de [Unsplash](https://unsplash.com).

## Hooks de React usados

- `useState`: texto del buscador, categoría activa, orden de los resultados, índice de la galería, número de huéspedes y favoritos.
- `useEffect`: carga simulada de datos (con `setTimeout`) en la Home, el Catálogo y el Detalle, con un indicador de carga.
