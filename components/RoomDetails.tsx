import AmenitiesGrid from "@/components/AmenitiesGrid";
import BookingCard from "@/components/BookingCard";
import HostInfo from "@/components/HostInfo";
import ListingHeader from "@/components/ListingHeader";
import PhotoGallery from "@/components/PhotoGallery";
import type { Room } from "@/types/listing";

// Spec: RoomDetails — props: room. Compone las cinco secciones del detalle.
// Móvil: todo apilado. Escritorio: info (2/3) + BookingCard (1/3).
interface RoomDetailsProps {
  room: Room;
}

const RoomDetails = ({ room }: RoomDetailsProps) => {
  return (
    <article className="flex flex-col gap-6">
      <PhotoGallery photos={room.photos} title={room.title} />
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-0">
        <div className="md:col-span-2">
          <ListingHeader
            title={room.title}
            rating={room.rating}
            reviewCount={room.reviewCount}
            location={room.location}
          />
          <HostInfo host={room.host} />
          <p className="border-b border-gray-200 py-6 leading-relaxed text-gray-700">
            {room.description}
          </p>
          <AmenitiesGrid amenities={room.amenities} />
        </div>
        <BookingCard pricePerNight={room.pricePerNight} maxGuests={room.maxGuests} />
      </div>
    </article>
  );
};

export default RoomDetails;
