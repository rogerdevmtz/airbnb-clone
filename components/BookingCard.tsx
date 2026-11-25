"use client";

import { useState } from "react";
import type { DateRange } from "@daypicker/react";
import DateRangeFields from "@/components/DateRangeFields";
import GuestCounter from "@/components/GuestCounter";
import PriceBreakdown from "@/components/PriceBreakdown";
import StayCalendar from "@/components/StayCalendar";
import { countNights } from "@/lib/booking";

// Spec: BookingCard — props: pricePerNight, maxGuests.
// Tarjeta con sombra: "XX € noche", fechas de llegada / salida con
// calendario, contador de huéspedes, CTA "Reservar" en degradado rosa y
// desglose del precio total. Sticky en escritorio.
interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

const MIN_GUESTS = 1;

const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(MIN_GUESTS);
  const [range, setRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const nights = countNights(range);

  const handleSelect = (selected: DateRange | undefined) => {
    setRange(selected);
    if (countNights(selected) > 0) setIsCalendarOpen(false);
  };

  return (
    <aside className="flex flex-col gap-4 rounded-xl border border-gray-200 p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] md:sticky md:top-28 md:self-start">
      <p>
        <span className="text-[22px] font-semibold underline">{pricePerNight} €</span> <span>noche</span>
      </p>
      <div>
        <DateRangeFields range={range} isOpen={isCalendarOpen} onToggle={() => setIsCalendarOpen((open) => !open)} />
        <GuestCounter value={guests} min={MIN_GUESTS} max={maxGuests} onChange={setGuests} />
      </div>
      {isCalendarOpen && <StayCalendar selected={range} onSelect={handleSelect} />}
      <button
        type="button"
        onClick={() => nights === 0 && setIsCalendarOpen(true)}
        className="w-full rounded-lg bg-linear-to-r from-rose-500 to-pink-600 py-3.5 font-semibold text-white hover:from-rose-600 hover:to-pink-700"
      >
        {nights === 0 ? "Comprobar disponibilidad" : "Reservar"}
      </button>
      {nights > 0 && <p className="text-center text-sm text-gray-600">No se hará ningún cargo por el momento</p>}
      <PriceBreakdown pricePerNight={pricePerNight} nights={nights} />
    </aside>
  );
};

export default BookingCard;
