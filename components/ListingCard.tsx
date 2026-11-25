import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import StarRating from "@/components/StarRating";
import type { Listing } from "@/types/listing";

// Spec: ListingCard — props: listing. Se reutiliza en Home y Catálogo.
// Foto cuadrada redondeada arriba; debajo título + valoración en la misma
// fila, ubicación en gris y "XX € noche". Toda la tarjeta enlaza al detalle.
interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link href={`/rooms/${listing.id}`} className="group flex flex-col gap-2">
      <PhotoPlaceholder
        colorClass={listing.photoClass}
        label={`Foto de ${listing.title}`}
        className="aspect-square w-full rounded-xl transition group-hover:opacity-90"
      />
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-tight">{listing.title}</h3>
        <StarRating rating={listing.rating} />
      </div>
      <p className="text-sm text-gray-600">{listing.location}</p>
      <p className="text-sm">
        <span className="font-semibold">{listing.pricePerNight} €</span> noche
      </p>
    </Link>
  );
};

export default ListingCard;
