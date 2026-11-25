// Tipos de datos principales de la aplicación.
import type { IconName } from "@/lib/icons";

/** Categoría que aparece en la fila de filtros de la Home. */
export interface Category {
  id: string;
  label: string;
  icon: IconName;
}

/** Alojamiento tal y como se muestra en una tarjeta (Home y Catálogo). */
export interface Listing {
  id: string;
  title: string;
  /** Tipo + lugar, p. ej. "Apartamento en Valencia". */
  heading: string;
  location: string;
  dates: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  categoryId: string;
  isGuestFavorite: boolean;
  /** URL de la foto principal (Unsplash). */
  image: string;
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
  icon: IconName;
  label: string;
}

/** Datos completos de una habitación para la página de detalle. */
export interface Room extends Listing {
  description: string;
  photos: string[];
  host: Host;
  amenities: Amenity[];
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export type SortOrder = "asc" | "desc";
