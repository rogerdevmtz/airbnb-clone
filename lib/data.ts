import type { Amenity, Category, Listing, Room } from "@/types/listing";

// Datos simulados. En un proyecto real vendrían de una API.

export const categories: Category[] = [
  { id: "all", label: "Todos", icon: "🏠" },
  { id: "beach", label: "Playa", icon: "🏖️" },
  { id: "mansions", label: "Mansiones", icon: "🏰" },
  { id: "trending", label: "Tendencias", icon: "🔥" },
  { id: "countryside", label: "Campo", icon: "🌾" },
  { id: "cabins", label: "Cabañas", icon: "🛖" },
  { id: "pools", label: "Piscinas", icon: "🏊" },
  { id: "city", label: "Ciudades", icon: "🏙️" },
];

export const listings: Listing[] = [
  { id: "1", title: "Ático con vistas al mar", location: "Valencia, España", pricePerNight: 120, rating: 4.92, reviewCount: 128, categoryId: "beach", photoClass: "from-sky-300 to-blue-600", coordinates: { lat: 39.47, lng: -0.33 } },
  { id: "2", title: "Villa con piscina infinita", location: "Marbella, España", pricePerNight: 480, rating: 4.97, reviewCount: 64, categoryId: "mansions", photoClass: "from-amber-200 to-orange-500", coordinates: { lat: 36.51, lng: -4.88 } },
  { id: "3", title: "Loft en el centro histórico", location: "Madrid, España", pricePerNight: 95, rating: 4.81, reviewCount: 312, categoryId: "city", photoClass: "from-rose-200 to-rose-500", coordinates: { lat: 40.42, lng: -3.7 } },
  { id: "4", title: "Cabaña entre pinos", location: "Asturias, España", pricePerNight: 78, rating: 4.88, reviewCount: 89, categoryId: "cabins", photoClass: "from-emerald-200 to-green-700", coordinates: { lat: 43.36, lng: -5.85 } },
  { id: "5", title: "Casa blanca junto a la cala", location: "Menorca, España", pricePerNight: 210, rating: 4.95, reviewCount: 47, categoryId: "beach", photoClass: "from-cyan-200 to-teal-500", coordinates: { lat: 39.95, lng: 4.11 } },
  { id: "6", title: "Masía restaurada con viñedo", location: "La Rioja, España", pricePerNight: 160, rating: 4.9, reviewCount: 73, categoryId: "countryside", photoClass: "from-lime-200 to-yellow-600", coordinates: { lat: 42.46, lng: -2.44 } },
  { id: "7", title: "Estudio de diseño en Gràcia", location: "Barcelona, España", pricePerNight: 110, rating: 4.76, reviewCount: 205, categoryId: "trending", photoClass: "from-fuchsia-200 to-purple-600", coordinates: { lat: 41.4, lng: 2.15 } },
  { id: "8", title: "Cortijo con piscina privada", location: "Granada, España", pricePerNight: 190, rating: 4.86, reviewCount: 58, categoryId: "pools", photoClass: "from-blue-200 to-indigo-500", coordinates: { lat: 37.18, lng: -3.6 } },
  { id: "9", title: "Palacete frente al parque", location: "Sevilla, España", pricePerNight: 350, rating: 4.93, reviewCount: 36, categoryId: "mansions", photoClass: "from-orange-200 to-red-500", coordinates: { lat: 37.38, lng: -5.98 } },
  { id: "10", title: "Casa cueva bioclimática", location: "Guadix, España", pricePerNight: 85, rating: 4.89, reviewCount: 142, categoryId: "trending", photoClass: "from-stone-200 to-stone-500", coordinates: { lat: 37.3, lng: -3.14 } },
  { id: "11", title: "Bungalow a pie de playa", location: "Tarifa, España", pricePerNight: 135, rating: 4.79, reviewCount: 97, categoryId: "beach", photoClass: "from-yellow-100 to-sky-400", coordinates: { lat: 36.01, lng: -5.6 } },
  { id: "12", title: "Refugio de montaña", location: "Pirineo, España", pricePerNight: 99, rating: 4.84, reviewCount: 61, categoryId: "cabins", photoClass: "from-slate-200 to-slate-600", coordinates: { lat: 42.6, lng: 0.8 } },
];

const defaultAmenities: Amenity[] = [
  { icon: "📶", label: "Wifi" },
  { icon: "🍳", label: "Cocina" },
  { icon: "❄️", label: "Aire acondicionado" },
  { icon: "🧺", label: "Lavadora" },
  { icon: "💻", label: "Zona de trabajo" },
  { icon: "📺", label: "Televisión" },
  { icon: "🚗", label: "Aparcamiento gratuito" },
  { icon: "🔥", label: "Calefacción" },
];

const hostNames = ["Lucía", "Javier", "Marta", "Andrés", "Carmen", "Pablo"];

const photoVariants = [
  "from-rose-200 to-orange-400",
  "from-sky-200 to-indigo-500",
  "from-emerald-200 to-teal-600",
  "from-amber-100 to-amber-500",
];

/** Construye los datos completos de una habitación a partir de su tarjeta. */
export const getRoomById = (id: string): Room | undefined => {
  const listing = listings.find((item) => item.id === id);
  if (!listing) return undefined;
  const index = Number(listing.id);

  return {
    ...listing,
    description:
      "Un espacio luminoso y acogedor, perfecto para desconectar. Está a pocos minutos de restaurantes, tiendas y transporte público.",
    photos: [listing.photoClass, ...photoVariants],
    host: {
      name: hostNames[index % hostNames.length],
      yearsHosting: (index % 7) + 2,
      isSuperhost: index % 2 === 0,
    },
    amenities: defaultAmenities,
    maxGuests: (index % 4) + 2,
  };
};
