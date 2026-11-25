"use client";

import Icon from "@/components/Icon";
import type { SortOrder } from "@/types/listing";

// Spec: SortSelect — props: value, onChange. Píldora con icono de filtros
// y un <select> para ordenar por precio (ascendente / descendente).
interface SortSelectProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <label className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold hover:border-gray-900">
      <Icon name="sliders" className="h-4 w-4" />
      <span className="sr-only">Ordenar por precio</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as SortOrder)}
        className="cursor-pointer bg-transparent outline-none"
      >
        <option value="asc">Precio: de menor a mayor</option>
        <option value="desc">Precio: de mayor a menor</option>
      </select>
    </label>
  );
};

export default SortSelect;
