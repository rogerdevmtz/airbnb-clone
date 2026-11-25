import type { Amenity } from "@/types/listing";

// Spec: AmenitiesGrid — props: amenities. "¿Qué ofrece este alojamiento?"
// Cuadrícula de pares icono + etiqueta (1 columna móvil, 2 escritorio).
interface AmenitiesGridProps {
  amenities: Amenity[];
}

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="border-b border-gray-200 py-6">
      <h2 className="mb-4 text-xl font-semibold">¿Qué ofrece este alojamiento?</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {amenities.map((amenity) => (
          <li key={amenity.label} className="flex items-center gap-4">
            <span className="text-2xl" aria-hidden="true">
              {amenity.icon}
            </span>
            {amenity.label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AmenitiesGrid;
