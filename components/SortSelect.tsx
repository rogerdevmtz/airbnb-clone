"use client";

import type { SortOrder } from "@/types/listing";

// Spec: SortSelect — props: value, onChange. Selector de orden por precio.
interface SortSelectProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-gray-600">Ordenar por precio:</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as SortOrder)}
        className="rounded-lg border border-gray-300 px-3 py-2 font-medium"
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </label>
  );
};

export default SortSelect;
