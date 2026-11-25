"use client";

import { useState } from "react";
import GuestCounter from "@/components/GuestCounter";

// Spec: BookingCard — props: pricePerNight, maxGuests.
// Tarjeta con sombra: "XX € noche", contador de huéspedes y CTA "Reservar".
// En escritorio queda fija (sticky) en la columna derecha.
interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

const MIN_GUESTS = 1;

const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(MIN_GUESTS);

  return (
    <aside className="flex flex-col gap-4 rounded-xl border border-gray-200 p-6 shadow-lg md:sticky md:top-24 md:self-start">
      <p>
        <span className="text-2xl font-semibold">{pricePerNight} €</span>{" "}
        <span className="text-gray-600">noche</span>
      </p>
      <GuestCounter value={guests} min={MIN_GUESTS} max={maxGuests} onChange={setGuests} />
      <button
        type="button"
        className="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white hover:bg-rose-600"
      >
        Reservar
      </button>
      <p className="text-center text-xs text-gray-600">No se hará ningún cargo por el momento</p>
    </aside>
  );
};

export default BookingCard;
