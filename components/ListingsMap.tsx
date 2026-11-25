"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { divIcon, type LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import MapPopupCard from "@/components/MapPopupCard";
import type { Listing } from "@/types/listing";

// Spec: ListingsMap — props: listings. Mapa interactivo (Leaflet +
// OpenStreetMap) con un pin-píldora de precio por alojamiento, colocado
// según sus coordenadas. Al pulsar un pin se abre una mini-tarjeta.
interface ListingsMapProps {
  listings: Listing[];
}

const pricePin = (price: number) =>
  divIcon({
    className: "",
    html: `<span class="inline-block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-sm font-bold text-gray-900 shadow-[0_2px_8px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition hover:scale-110 hover:bg-gray-900 hover:text-white">${price} €</span>`,
    iconSize: [0, 0],
  });

const ListingsMap = ({ listings }: ListingsMapProps) => {
  const bounds: LatLngTuple[] = listings.map(({ coordinates }) => [coordinates.lat, coordinates.lng]);

  return (
    <div className="isolate h-80 w-full overflow-hidden rounded-xl md:sticky md:top-28 md:h-[calc(100vh-9rem)]">
      <MapContainer bounds={bounds} boundsOptions={{ padding: [40, 40] }} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listings.map((listing) => (
          <Marker
            key={listing.id}
            position={[listing.coordinates.lat, listing.coordinates.lng]}
            icon={pricePin(listing.pricePerNight)}
          >
            <Popup closeButton={false}>
              <MapPopupCard listing={listing} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ListingsMap;
