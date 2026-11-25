import type { DateRange } from "@daypicker/react";
import { formatShortDate } from "@/lib/booking";

// Spec: DateRangeFields — props: range, isOpen, onToggle.
// Casillas LLEGADA / SALIDA de la tarjeta de reserva; al pulsarlas se
// abre o cierra el calendario.
interface DateRangeFieldsProps {
  range: DateRange | undefined;
  isOpen: boolean;
  onToggle: () => void;
}

const DateRangeFields = ({ range, isOpen, onToggle }: DateRangeFieldsProps) => {
  const fields = [
    { label: "Llegada", date: range?.from },
    { label: "Salida", date: range?.to },
  ];

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className={`grid w-full grid-cols-2 rounded-t-lg border text-left ${isOpen ? "border-gray-900" : "border-gray-400"}`}
    >
      {fields.map((field, index) => (
        <span key={field.label} className={`px-3 py-2.5 ${index === 0 ? "border-r border-gray-400" : ""}`}>
          <span className="block text-[10px] font-bold uppercase">{field.label}</span>
          <span className={`block text-sm ${field.date ? "text-gray-900" : "text-gray-500"}`}>
            {formatShortDate(field.date)}
          </span>
        </span>
      ))}
    </button>
  );
};

export default DateRangeFields;
