import type { Amenity, Category, Listing, Room } from "@/types/listing";

// Datos simulados. En un proyecto real vendrían de una API.
// Fotos: Unsplash (licencia gratuita de Unsplash).

const unsplash = (id: string, width = 960) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;

export const categories: Category[] = [
  { id: "all", label: "Todos", icon: "home" },
  { id: "beach", label: "Playa", icon: "beach" },
  { id: "mansions", label: "Mansiones", icon: "castle" },
  { id: "trending", label: "Tendencias", icon: "flame" },
  { id: "countryside", label: "Campo", icon: "barn" },
  { id: "cabins", label: "Cabañas", icon: "cabin" },
  { id: "pools", label: "Piscinas increíbles", icon: "pool" },
  { id: "city", label: "Ciudades", icon: "city" },
];

const raw: Array<Omit<Listing, "image"> & { photoId: string }> = [
  { id: "1", title: "Ático con vistas al mar", heading: "Apartamento en Valencia", location: "Valencia, España", dates: "7–12 dic", pricePerNight: 120, rating: 4.92, reviewCount: 128, categoryId: "beach", isGuestFavorite: true, photoId: "1721369483526-62f48a00b949", coordinates: { lat: 39.47, lng: -0.33 } },
  { id: "2", title: "Villa con piscina infinita", heading: "Villa en Marbella", location: "Marbella, España", dates: "3–8 ene", pricePerNight: 480, rating: 4.97, reviewCount: 64, categoryId: "mansions", isGuestFavorite: true, photoId: "1613977257365-aaae5a9817ff", coordinates: { lat: 36.51, lng: -4.88 } },
  { id: "3", title: "Loft en el centro histórico", heading: "Loft en Madrid", location: "Madrid, España", dates: "1–6 dic", pricePerNight: 95, rating: 4.81, reviewCount: 312, categoryId: "city", isGuestFavorite: false, photoId: "1664261421791-c25c5760f577", coordinates: { lat: 40.42, lng: -3.7 } },
  { id: "4", title: "Cabaña entre pinos", heading: "Cabaña en Asturias", location: "Asturias, España", dates: "14–19 dic", pricePerNight: 78, rating: 4.88, reviewCount: 89, categoryId: "cabins", isGuestFavorite: true, photoId: "1510798831971-661eb04b3739", coordinates: { lat: 43.36, lng: -5.85 } },
  { id: "5", title: "Casa blanca junto a la cala", heading: "Casa en Menorca", location: "Menorca, España", dates: "10–15 feb", pricePerNight: 210, rating: 4.95, reviewCount: 47, categoryId: "beach", isGuestFavorite: false, photoId: "1556320156-80774dcd94b6", coordinates: { lat: 39.95, lng: 4.11 } },
  { id: "6", title: "Masía de piedra con viñedo", heading: "Casa rural en La Rioja", location: "La Rioja, España", dates: "5–10 dic", pricePerNight: 160, rating: 4.9, reviewCount: 73, categoryId: "countryside", isGuestFavorite: true, photoId: "1776757845431-87e426f718a4", coordinates: { lat: 42.46, lng: -2.44 } },
  { id: "7", title: "Estudio de diseño en Gràcia", heading: "Apartamento en Barcelona", location: "Barcelona, España", dates: "2–7 dic", pricePerNight: 110, rating: 4.76, reviewCount: 205, categoryId: "trending", isGuestFavorite: false, photoId: "1583847268964-b28dc8f51f92", coordinates: { lat: 41.4, lng: 2.15 } },
  { id: "8", title: "Cortijo con piscina privada", heading: "Cortijo en Granada", location: "Granada, España", dates: "20–25 ene", pricePerNight: 190, rating: 4.86, reviewCount: 58, categoryId: "pools", isGuestFavorite: true, photoId: "1596178067639-5c6e68aea6dc", coordinates: { lat: 37.18, lng: -3.6 } },
  { id: "9", title: "Palacete frente al parque", heading: "Mansión en Sevilla", location: "Sevilla, España", dates: "8–13 mar", pricePerNight: 350, rating: 4.93, reviewCount: 36, categoryId: "mansions", isGuestFavorite: false, photoId: "1613490493576-7fde63acd811", coordinates: { lat: 37.38, lng: -5.98 } },
  { id: "10", title: "Casa de diseño bioclimática", heading: "Casa en Guadix", location: "Guadix, España", dates: "11–16 dic", pricePerNight: 85, rating: 4.89, reviewCount: 142, categoryId: "trending", isGuestFavorite: true, photoId: "1553661763-1bbb4b5cf599", coordinates: { lat: 37.3, lng: -3.14 } },
  { id: "11", title: "Cabaña a pie de playa", heading: "Bungalow en Tarifa", location: "Tarifa, España", dates: "4–9 abr", pricePerNight: 135, rating: 4.79, reviewCount: 97, categoryId: "beach", isGuestFavorite: false, photoId: "1499793983690-e29da59ef1c2", coordinates: { lat: 36.01, lng: -5.6 } },
  { id: "12", title: "Refugio de montaña", heading: "Cabaña en el Pirineo", location: "Pirineo, España", dates: "18–23 dic", pricePerNight: 99, rating: 4.84, reviewCount: 61, categoryId: "cabins", isGuestFavorite: true, photoId: "1475087542963-13ab5e611954", coordinates: { lat: 42.6, lng: 0.8 } },
];

export const listings: Listing[] = raw.map(({ photoId, ...listing }) => ({
  ...listing,
  image: unsplash(photoId, 720),
}));

const interiorPhotos = [
  "1758565811178-6341e9999f48",
  "1598928506311-c55ded91a20c",
  "1631049307264-da0ec9d70304",
  "1549638441-b787d2e11f14",
  "1631679706909-1844bbd07221",
].map((id) => unsplash(id));

const defaultAmenities: Amenity[] = [
  { icon: "wifi", label: "Wifi" },
  { icon: "kitchen", label: "Cocina" },
  { icon: "snowflake", label: "Aire acondicionado" },
  { icon: "washer", label: "Lavadora" },
  { icon: "laptop", label: "Zona de trabajo" },
  { icon: "tv", label: "Televisión" },
  { icon: "car", label: "Aparcamiento gratuito" },
  { icon: "thermometer", label: "Calefacción" },
];

const hostNames = ["Lucía", "Javier", "Marta", "Andrés", "Carmen", "Pablo"];

/** Construye los datos completos de una habitación a partir de su tarjeta. */
export const getRoomById = (id: string): Room | undefined => {
  const listing = listings.find((item) => item.id === id);
  if (!listing) return undefined;
  const index = Number(listing.id);

  return {
    ...listing,
    description:
      "Un espacio luminoso y acogedor, perfecto para desconectar. Está a pocos minutos de restaurantes, tiendas y transporte público, y tiene todo lo necesario para una estancia cómoda.",
    photos: [listing.image.replace("w=720", "w=1200"), ...interiorPhotos],
    host: {
      name: hostNames[index % hostNames.length],
      yearsHosting: (index % 7) + 2,
      isSuperhost: index % 2 === 0,
    },
    amenities: defaultAmenities,
    maxGuests: (index % 4) + 2,
    bedrooms: (index % 3) + 1,
    beds: (index % 3) + 2,
    baths: (index % 2) + 1,
  };
};
