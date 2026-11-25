"use client";

import { useState } from "react";
import GuestCounter from "@/components/GuestCounter";

// Spec: BookingCard — props: pricePerNight, maxGuests.
// Tarjeta con sombra: "XX € noche", casillas Llegada / Salida, contador de
// huéspedes y CTA "Reservar" en degradado rosa. Sticky en escritorio.
interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

const MIN_GUESTS = 1;

const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(MIN_GUESTS);

  return (
    <aside className="flex flex-col gap-4 rounded-xl border border-gray-200 p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] md:sticky md:top-28 md:self-start">
      <p>
        <span className="text-[22px] font-semibold underline">{pricePerNight} €</span>{" "}
        <span>noche</span>
      </p>
      <div>
        <div className="grid grid-cols-2 rounded-t-lg border border-gray-400 text-left">
          <div className="border-r border-gray-400 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase">Llegada</p>
            <p className="text-sm text-gray-500">Añade fecha</p>
          </div>
          <div className="px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase">Salida</p>
            <p className="text-sm text-gray-500">Añade fecha</p>
          </div>
        </div>
        <GuestCounter value={guests} min={MIN_GUESTS} max={maxGuests} onChange={setGuests} />
      </div>
      <button
        type="button"
        className="w-full rounded-lg bg-linear-to-r from-rose-500 to-pink-600 py-3.5 font-semibold text-white hover:from-rose-600 hover:to-pink-700"
      >
        Reservar
      </button>
      <p className="text-center text-sm text-gray-600">No se hará ningún cargo por el momento</p>
    </aside>
  );
};

export default BookingCard;
