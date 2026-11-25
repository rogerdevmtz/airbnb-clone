import Link from "next/link";
import ListingPhoto from "@/components/ListingPhoto";
import StarRating from "@/components/StarRating";
import type { Listing } from "@/types/listing";

// Spec: ListingCard — props: listing. Se reutiliza en Home y Catálogo.
// Foto arriba; debajo "Tipo en Lugar" + ★ en la misma fila, título y
// fechas en gris y "XX € noche". Toda la tarjeta enlaza al detalle.
interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link href={`/rooms/${listing.id}`} className="group flex flex-col gap-3">
      <ListingPhoto
        src={listing.image}
        alt={listing.title}
        isGuestFavorite={listing.isGuestFavorite}
      />
      <div className="text-[15px] leading-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate font-semibold">{listing.heading}</h3>
          <StarRating rating={listing.rating} />
        </div>
        <p className="truncate text-gray-500">{listing.title}</p>
        <p className="text-gray-500">{listing.dates}</p>
        <p className="mt-1">
          <span className="font-semibold">{listing.pricePerNight} €</span> noche
        </p>
      </div>
    </Link>
  );
};

export default ListingCard;
