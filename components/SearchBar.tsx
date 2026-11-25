"use client";

// Spec: SearchBar — props: value, onChange. Píldora redondeada con sombra
// ("Empieza a buscar"). Ocupa todo el ancho en móvil.
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <label className="flex w-full items-center gap-3 rounded-full border border-gray-200 px-4 py-3 shadow-md md:max-w-md">
      <span aria-hidden="true">🔍</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Empieza a buscar"
        className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-700"
        aria-label="Buscar alojamientos por nombre o ubicación"
      />
    </label>
  );
};

export default SearchBar;
