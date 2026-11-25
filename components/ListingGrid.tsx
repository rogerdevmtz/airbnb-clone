import ListingCard from "@/components/ListingCard";
import type { Listing } from "@/types/listing";

// Spec: ListingGrid — props: listings, columnsClass (opcional).
// Mobile-first: 1 columna; se amplía con breakpoints en escritorio.
interface ListingGridProps {
  listings: Listing[];
  columnsClass?: string;
}

const ListingGrid = ({
  listings,
  columnsClass = "md:grid-cols-3 lg:grid-cols-4",
}: ListingGridProps) => {
  if (listings.length === 0) {
    return (
      <p className="py-16 text-center text-gray-600">
        No hay alojamientos que coincidan con tu búsqueda.
      </p>
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
