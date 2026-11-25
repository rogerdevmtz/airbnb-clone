import SortSelect from "@/components/SortSelect";
import type { SortOrder } from "@/types/listing";

// Spec: ResultsHeader — props: count, sortOrder, onSortChange.
// "N alojamientos" centrado en móvil + control de orden.
interface ResultsHeaderProps {
  count: number;
  sortOrder: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

const ResultsHeader = ({ count, sortOrder, onSortChange }: ResultsHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-3 py-4 md:flex-row md:justify-between">
      <h1 className="text-lg font-semibold">{count} alojamientos</h1>
      <SortSelect value={sortOrder} onChange={onSortChange} />
    </div>
  );
};

export default ResultsHeader;
