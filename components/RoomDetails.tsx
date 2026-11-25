import AmenitiesGrid from "@/components/AmenitiesGrid";
import BookingCard from "@/components/BookingCard";
import HostInfo from "@/components/HostInfo";
import ListingHeader from "@/components/ListingHeader";
import PhotoGallery from "@/components/PhotoGallery";
import RoomHighlights from "@/components/RoomHighlights";
import RoomSummary from "@/components/RoomSummary";
import type { Room } from "@/types/listing";

// Spec: RoomDetails — props: room. Compone las secciones del detalle.
// Móvil: galería a ancho completo y todo apilado. Escritorio: cabecera,
// galería en cuadrícula e info (≈60%) + BookingCard sticky (≈40%).
interface RoomDetailsProps {
  room: Room;
}

const RoomDetails = ({ room }: RoomDetailsProps) => {
  return (
    <article className="flex flex-col gap-6">
      <div className="order-2 px-6 md:order-1 md:px-0">
        <ListingHeader title={room.title} rating={room.rating} reviewCount={room.reviewCount} location={room.location} />
      </div>
      <div className="order-1 md:order-2">
        <PhotoGallery photos={room.photos} title={room.title} />
      </div>
      <div className="order-3 grid grid-cols-1 gap-12 px-6 md:grid-cols-[minmax(0,1fr)_370px] md:px-0">
        <div>
          <RoomSummary heading={room.heading} maxGuests={room.maxGuests} bedrooms={room.bedrooms} beds={room.beds} baths={room.baths} />
          <HostInfo host={room.host} />
          <RoomHighlights hostName={room.host.name} />
          <p className="border-b border-gray-200 py-8 leading-relaxed text-gray-800">{room.description}</p>
          <AmenitiesGrid amenities={room.amenities} />
        </div>
        <BookingCard pricePerNight={room.pricePerNight} maxGuests={room.maxGuests} />
      </div>
    </article>
  );
};

export default RoomDetails;
