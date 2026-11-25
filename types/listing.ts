// Tipos de datos principales de la aplicación.

/** Categoría que aparece en la fila de filtros de la Home. */
export interface Category {
  id: string;
  label: string;
  icon: string;
}

/** Alojamiento tal y como se muestra en una tarjeta (Home y Catálogo). */
export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  categoryId: string;
  /** Clases de Tailwind para el degradado que hace de foto placeholder. */
  photoClass: string;
  coordinates: { lat: number; lng: number };
}

/** Anfitrión de un alojamiento. */
export interface Host {
  name: string;
  yearsHosting: number;
  isSuperhost: boolean;
}

/** Servicio o comodidad (icono + etiqueta). */
export interface Amenity {
  icon: string;
  label: string;
}

/** Datos completos de una habitación para la página de detalle. */
export interface Room extends Listing {
  description: string;
  photos: string[];
  host: Host;
  amenities: Amenity[];
  maxGuests: number;
}

export type SortOrder = "asc" | "desc";
