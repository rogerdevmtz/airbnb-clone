// Spec: SearchSection — props: label, value. Bloque "Cuándo / Añade fechas"
// del buscador de escritorio, separado por una línea vertical.
interface SearchSectionProps {
  label: string;
  value: string;
}

const SearchSection = ({ label, value }: SearchSectionProps) => {
  return (
    <div className="hidden flex-col border-l border-gray-200 px-6 py-2 md:flex">
      <span className="text-xs font-semibold">{label}</span>
      <span className="text-sm whitespace-nowrap text-gray-500">{value}</span>
    </div>
  );
};

export default SearchSection;
