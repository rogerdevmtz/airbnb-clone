import ListingCard from "@/components/ListingCard";
import type { Listing } from "@/types/listing";

// Spec: ListingGrid — props: listings, columnsClass (opcional).
// Mobile-first: 1 columna; se amplía con breakpoints en escritorio.
interface ListingGridProps {
  listings: Listing[];
  columnsClass?: string;
}

export const defaultColumns = "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5";

const ListingGrid = ({ listings, columnsClass = defaultColumns }: ListingGridProps) => {
  if (listings.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-semibold">No hay coincidencias exactas</p>
        <p className="text-gray-500">Prueba a cambiar la búsqueda o la categoría.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-x-6 gap-y-10 ${columnsClass}`}>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingGrid;
