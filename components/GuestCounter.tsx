"use client";

// Spec: GuestCounter — props: value, min, max, onChange.
// Botones − / + redondos; se desactivan al llegar al límite.
interface GuestCounterProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const counterButton =
  "flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-lg disabled:cursor-not-allowed disabled:opacity-30";

const GuestCounter = ({ value, min, max, onChange }: GuestCounterProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-300 p-3">
      <div>
        <p className="text-sm font-semibold">Huéspedes</p>
        <p className="text-xs text-gray-600">Máximo {max}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          className={counterButton}
          aria-label="Quitar un huésped"
        >
          −
        </button>
        <span className="w-4 text-center" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          className={counterButton}
          aria-label="Añadir un huésped"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;
