"use client";

import Icon from "@/components/Icon";

// Spec: GuestCounter — props: value, min, max, onChange.
// Botones − / + redondos; se desactivan al llegar al límite.
interface GuestCounterProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const counterButton =
  "flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-gray-900 disabled:cursor-not-allowed disabled:opacity-30";

const GuestCounter = ({ value, min, max, onChange }: GuestCounterProps) => {
  return (
    <div className="flex items-center justify-between rounded-b-lg border border-t-0 border-gray-400 px-3 py-2.5">
      <div>
        <p className="text-[10px] font-bold uppercase">Huéspedes</p>
        <p className="text-sm">
          {value} {value === 1 ? "huésped" : "huéspedes"} <span className="text-gray-500">(máx. {max})</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => onChange(value - 1)} disabled={value <= min} className={counterButton} aria-label="Quitar un huésped">
          <Icon name="minus" className="h-3.5 w-3.5" />
        </button>
        <span className="w-4 text-center" aria-live="polite">
          {value}
        </span>
        <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} className={counterButton} aria-label="Añadir un huésped">
          <Icon name="plus" className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;
