"use client";

import Icon from "@/components/Icon";
import SearchSection from "@/components/SearchSection";

// Spec: SearchBar — props: value, onChange. Píldora con sombra.
// Móvil: lupa + "Empieza a buscar". Escritorio: Dónde · Cuándo · Quién
// y botón rosa redondo con la lupa.
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex w-full items-center rounded-full border border-gray-200 bg-white py-1 pr-1 pl-4 shadow-[0_3px_12px_rgba(0,0,0,0.1)] md:max-w-3xl md:pl-0">
      <Icon name="search" className="h-4 w-4 shrink-0 md:hidden" />
      <label className="flex flex-1 flex-col px-3 py-2 md:rounded-full md:px-8 md:hover:bg-gray-100">
        <span className="hidden text-xs font-semibold md:block">Dónde</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Empieza a buscar"
          className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-gray-900 md:font-normal md:placeholder:text-gray-500"
          aria-label="Buscar alojamientos por nombre o ubicación"
        />
      </label>
      <SearchSection label="Cuándo" value="Añade fechas" />
      <SearchSection label="Quién" value="¿Cuántos?" />
      <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white md:flex">
        <Icon name="search" className="h-4 w-4" />
      </span>
    </div>
  );
};

export default SearchBar;
