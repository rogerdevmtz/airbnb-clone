import StarRating from "@/components/StarRating";

// Spec: ListingHeader — props: title, rating, reviewCount, location.
// Título grande + fila de valoración, reseñas y ubicación.
interface ListingHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}

const ListingHeader = ({ title, rating, reviewCount, location }: ListingHeaderProps) => {
  return (
    <section className="flex flex-col gap-2 border-b border-gray-200 pb-6">
      <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <StarRating rating={rating} reviewCount={reviewCount} />
        <span aria-hidden="true">·</span>
        <span className="font-medium underline">{location}</span>
      </div>
    </section>
  );
};

export default ListingHeader;
