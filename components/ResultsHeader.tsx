import SortSelect from "@/components/SortSelect";
import type { SortOrder } from "@/types/listing";

// Spec: ResultsHeader — props: count, sortOrder, onSortChange.
// "N alojamientos" centrado en móvil + control de orden por precio.
interface ResultsHeaderProps {
  count: number;
  sortOrder: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

const ResultsHeader = ({ count, sortOrder, onSortChange }: ResultsHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-3 py-5 md:flex-row md:justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-base font-semibold">{count} alojamientos en España</h1>
        <p className="text-sm text-gray-500">Los precios incluyen todas las tarifas</p>
      </div>
      <SortSelect value={sortOrder} onChange={onSortChange} />
    </div>
  );
};

export default ResultsHeader;
