# context.md — Clon de la interfaz de Airbnb

> Mini-brief escrito **antes** de empezar a programar. Describe qué vamos a construir, para quién y con qué piezas.

## 1. ¿Qué vamos a construir?

Una réplica de tres vistas de Airbnb hecha con **Next.js 16 (App Router)**, **React**, **TypeScript** y **Tailwind CSS**. Se diseña primero para móvil (viewport de **375px**) y se adapta a escritorio a partir de **768px** (`md:`).

| Ruta | Página | Qué muestra |
| --- | --- | --- |
| `/` | **Inicio (Home)** | Barra superior con logo, buscador y menú de usuario; una fila horizontal de categorías (Playa, Mansiones, Tendencias…) y una cuadrícula de alojamientos. El buscador filtra las tarjetas en tiempo real y la categoría seleccionada se resalta y filtra los resultados. |
| `/catalog` | **Catálogo (resultados de búsqueda)** | Cabecera con el número de resultados y un selector para ordenar por precio (ascendente / descendente), la lista de tarjetas (el mismo componente que en la Home) y un área de mapa: debajo de la lista en móvil y a la derecha en escritorio. |
| `/rooms/[id]` | **Detalle de habitación** | Galería de fotos con botones Anterior / Siguiente, cabecera (título, valoración, reseñas, ubicación), información del anfitrión, servicios (amenities) y una tarjeta de reserva con precio por noche, contador de huéspedes y botón "Reservar". Incluye un botón para volver al catálogo. |

## 2. Usuario y objetivo

El usuario es un **viajero** (una pareja, una familia o alguien que viaja por trabajo) que busca un alojamiento para unos días. Sobre todo usa el **móvil**, así que necesita encontrar rápido opciones que encajen con su destino y su presupuesto. Quiere **explorar** por tipo de alojamiento o por lugar, **comparar** precios y valoraciones de un vistazo, y **revisar** los detalles de un alojamiento concreto (fotos, anfitrión, servicios y cuántas personas caben) antes de decidirse a reservar.

## 3. Componentes principales por vista

**Compartidos:** `Navbar` (`Logo`, `SearchBar`, `UserMenu`), `MobileTabBar`, `ListingCard` (`PhotoPlaceholder`, `StarRating`), `ListingGrid`, `LoadingSpinner`.

- **Home:** `Navbar` con `SearchBar` → `CategoryBar` (`CategoryButton` × N) → `ListingGrid` (`ListingCard` × N) → `MobileTabBar`.
- **Catálogo:** `Navbar` → `ResultsHeader` (`SortSelect`) → `ListingGrid` (reutiliza `ListingCard`) → `MapPlaceholder` → `MobileTabBar`.
- **Detalle:** `Navbar` → `BackLink` → `RoomView` (carga de datos) → `RoomDetails`, que agrupa `PhotoGallery`, `ListingHeader`, `HostInfo`, `AmenitiesGrid` y `BookingCard` (`GuestCounter`).

## 4. Flujo de visión → especificación

Para cada vista se hizo una captura de la interfaz original de Airbnb (airbnb.es) a **375 × 812 px** y se adjuntó al agente de código con IA usando este prompt:

> *"Te adjunto una captura de Airbnb en un móvil de 375px. Identifica cada componente de UI visible y devuélveme una especificación con: **nombre del componente**, **props** que necesita (con tipos de TypeScript) y su **relación de layout** dentro de la página (qué contiene a qué, orden vertical/horizontal y cómo debería adaptarse a escritorio). Usa solo componentes pequeños, con una sola responsabilidad."*

Estas son las especificaciones que salieron, ya revisadas. Cada componente repite la suya en un comentario al principio de su archivo.

### 4.1 Home (`/`) — captura móvil

Lo que se ve en la captura: una píldora de búsqueda "Empieza a buscar" con sombra que ocupa todo el ancho, una fila de chips de categoría con scroll horizontal, tarjetas de alojamiento con la foto grande y redondeada, y una barra inferior fija con "Explorar · Favoritos · Iniciar sesión".

| Componente | Props | Layout |
| --- | --- | --- |
| `Navbar` | `searchValue?: string`, `onSearchChange?: (v: string) => void` | Cabecera *sticky* arriba. Fila: `Logo` · `SearchBar` (ancho completo en móvil) · `UserMenu` (solo escritorio). |
| `Logo` | — | Izquierda. En móvil solo el icono; a partir de `md` se añade el texto "airbnb". |
| `SearchBar` | `value: string`, `onChange: (v: string) => void` | Píldora redondeada con sombra e icono de lupa. |
| `UserMenu` | — | Derecha, oculto en móvil (`hidden md:flex`). |
| `CategoryBar` | `categories: Category[]`, `activeId: string`, `onSelect: (id) => void` | Debajo de la Navbar. Fila horizontal con scroll y sin barra visible. |
| `CategoryButton` | `category: Category`, `isActive: boolean`, `onSelect` | Icono encima de la etiqueta; la activa con texto oscuro y borde inferior. |
| `ListingGrid` | `listings: Listing[]`, `columnsClass?: string` | 1 columna en móvil → 3 en `md` → 4 en `lg`. |
| `ListingCard` | `listing: Listing` | Foto cuadrada redondeada; debajo, título + ★ en la misma fila, la ubicación en gris y "XX € noche". Toda la tarjeta es un `<Link>`. |
| `MobileTabBar` | — | Fija abajo, solo en móvil (`md:hidden`). |

### 4.2 Catálogo (`/catalog`) — captura móvil

Lo que se ve en la captura: arriba, la flecha atrás, la píldora "Alojamientos en Valencia" y el botón de filtros. Después el **mapa**, y encima de él una hoja con "Más de 1.000 alojamientos" centrado y las tarjetas en una sola columna. Abajo, la barra fija.

| Componente | Props | Layout |
| --- | --- | --- |
| `ResultsHeader` | `count: number`, `sortOrder: SortOrder`, `onSortChange` | Centrado en móvil (contador encima del selector); en escritorio, en una fila con `justify-between`. |
| `SortSelect` | `value: SortOrder`, `onChange` | `<select>` con las opciones Ascendente y Descendente. |
| `ListingGrid` / `ListingCard` | (los mismos de la Home) | 1 columna en móvil, 2 en escritorio. |
| `MapPlaceholder` | — | Recuadro gris con el texto "Mapa". **Debajo** de la lista en móvil; **columna derecha** *sticky* en escritorio (lista 3/5, mapa 2/5). |

*Decisión:* en Airbnb móvil el mapa queda por detrás de la lista. Aquí seguimos el brief y lo colocamos debajo de las tarjetas.

### 4.3 Detalle (`/rooms/[id]`) — captura móvil

Lo que se ve en la captura: una foto a ancho completo con un contador "1 / 83" abajo a la derecha y botones redondos (atrás, compartir, favorito). Debajo, el título, el tipo y la ubicación, la valoración "★ 4,88 · 16 evaluaciones", los aspectos destacados, la sección "¿Qué ofrece este alojamiento?" con una lista de icono + texto, y un selector de llegada y viajeros.

| Componente | Props | Layout |
| --- | --- | --- |
| `BackLink` | `href: string`, `label: string` | Arriba a la izquierda, "← Volver al catálogo". |
| `RoomView` | `roomId: string` | Carga los datos (con `useEffect`) y muestra `LoadingSpinner` o `RoomDetails`. |
| `RoomDetails` | `room: Room` | Móvil: todo apilado. Escritorio: la galería arriba y debajo un grid de 3 columnas (información en 2/3 y `BookingCard` en 1/3). |
| `PhotoGallery` | `photos: string[]`, `title: string` | Foto a ancho completo (4:3 en móvil, 16:9 en escritorio). Botones Anterior / Siguiente a los lados y contador "n / N" abajo a la derecha. |
| `ListingHeader` | `title`, `rating`, `reviewCount`, `location` | Título grande y una fila con ★, reseñas y ubicación. |
| `HostInfo` | `host: Host` | Avatar redondo + "Anfitrión: Nombre" + años como anfitrión. |
| `AmenitiesGrid` | `amenities: Amenity[]` | Título y cuadrícula de icono + etiqueta: 1 columna en móvil, 2 en escritorio. |
| `BookingCard` | `pricePerNight: number`, `maxGuests: number` | Tarjeta con sombra: precio, `GuestCounter` y CTA "Reservar". *Sticky* en escritorio. |
| `GuestCounter` | `value`, `min`, `max`, `onChange` | Botones − / + que se desactivan al llegar al mínimo o al máximo. |

## 5. Datos y tipos

Los tipos están en `types/listing.ts`: `Category`, `Listing` (alojamiento), `Room` (habitación, que extiende `Listing`), `Host`, `Amenity` y `SortOrder`.
Los datos simulados están en `lib/data.ts`. Las páginas simulan una API con `useEffect` y `setTimeout` (1 s) y muestran un indicador de carga mientras tanto.

## 6. Reglas que seguimos

- **Mobile-first:** las clases sin prefijo son para móvil; los cambios de escritorio van con `md:` y `lg:`.
- **Solo Tailwind:** nada de `style={{}}` ni librerías de componentes (shadcn, MUI, Ant Design, Chakra…).
- **Un componente por archivo** en `/components`, cada uno con una sola responsabilidad y menos de ~80 líneas. Todos son funcionales y están declarados con `const`.
- **Navegación interna solo con `<Link>`** de Next.js, sin recargar la página.
