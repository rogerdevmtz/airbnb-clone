"use client";

import { DayPicker, type DateRange } from "@daypicker/react";
import { es } from "@daypicker/react/locale";
import "@daypicker/react/style.css";

// Spec: StayCalendar — props: selected, onSelect. Calendario de rango
// (react-day-picker) en español, sin días pasados, con el rosa de la marca.
interface StayCalendarProps {
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
}

const StayCalendar = ({ selected, onSelect }: StayCalendarProps) => {
  return (
    <div className="flex justify-center rounded-lg border border-gray-200 py-2 text-sm [--rdp-accent-background-color:#ffe4e6] [--rdp-accent-color:#f43f5e] [--rdp-day-height:40px] [--rdp-day-width:40px] [--rdp-day_button-height:38px] [--rdp-day_button-width:38px]">
      <DayPicker
        mode="range"
        locale={es}
        selected={selected}
        onSelect={onSelect}
        disabled={{ before: new Date() }}
        excludeDisabled
      />
    </div>
  );
};

export default StayCalendar;
