import Icon from "@/components/Icon";
import StarRating from "@/components/StarRating";

// Spec: ListingHeader — props: title, rating, reviewCount, location.
// Título grande + acciones Compartir / Guardar (escritorio) y una fila
// con valoración, número de reseñas y ubicación.
interface ListingHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}

const ListingHeader = ({ title, rating, reviewCount, location }: ListingHeaderProps) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-semibold md:text-[26px]">{title}</h1>
        <div className="hidden shrink-0 gap-2 text-sm font-semibold md:flex">
          <span className="flex items-center gap-2 rounded-lg px-2 py-1 underline hover:bg-gray-100">
            <Icon name="share" className="h-4 w-4" /> Compartir
          </span>
          <span className="flex items-center gap-2 rounded-lg px-2 py-1 underline hover:bg-gray-100">
            <Icon name="heart" className="h-4 w-4" /> Guardar
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1 text-sm font-semibold">
        <StarRating rating={rating} reviewCount={reviewCount} />
        <span aria-hidden="true">·</span>
        <span className="underline">{location}</span>
      </div>
    </section>
  );
};

export default ListingHeader;
