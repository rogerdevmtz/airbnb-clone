import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import type { Listing } from "@/types/listing";

// Spec: MapPopupCard — props: listing. Mini-tarjeta dentro del popup del
// mapa: foto, "Tipo en Lugar", ★ y precio. Enlaza al detalle.
interface MapPopupCardProps {
  listing: Listing;
}

const MapPopupCard = ({ listing }: MapPopupCardProps) => {
  return (
    <Link href={`/rooms/${listing.id}`} className="block w-56 text-gray-900!">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
        <Image src={listing.image} alt={listing.title} fill sizes="224px" className="object-cover" />
      </div>
      <div className="mt-2 flex items-start justify-between gap-2">
        <span className="truncate font-semibold">{listing.heading}</span>
        <StarRating rating={listing.rating} />
      </div>
      <span className="block font-semibold">{listing.pricePerNight} € noche</span>
    </Link>
  );
};

export default MapPopupCard;
