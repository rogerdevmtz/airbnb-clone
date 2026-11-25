import Icon from "@/components/Icon";
import type { Amenity } from "@/types/listing";

// Spec: AmenitiesGrid — props: amenities. "¿Qué ofrece este alojamiento?"
// Cuadrícula de pares icono + etiqueta (1 columna móvil, 2 escritorio).
interface AmenitiesGridProps {
  amenities: Amenity[];
}

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="border-b border-gray-200 py-8">
      <h2 className="mb-6 text-xl font-semibold">¿Qué ofrece este alojamiento?</h2>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        {amenities.map((amenity) => (
          <li key={amenity.label} className="flex items-center gap-4">
            <Icon name={amenity.icon} className="h-6 w-6 shrink-0" />
            {amenity.label}
          </li>
        ))}
      </ul>
      <span className="mt-8 inline-block rounded-lg border border-gray-900 px-6 py-3 font-semibold">
        Mostrar los {amenities.length} servicios
      </span>
    </section>
  );
};

export default AmenitiesGrid;
