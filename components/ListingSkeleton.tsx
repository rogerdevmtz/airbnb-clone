import { defaultColumns } from "@/components/ListingGrid";

// Spec: ListingSkeleton — props: count, columnsClass. Tarjetas grises
// animadas que se muestran mientras se "cargan" los datos.
interface ListingSkeletonProps {
  count?: number;
  columnsClass?: string;
}

const ListingSkeleton = ({ count = 8, columnsClass = defaultColumns }: ListingSkeletonProps) => {
  return (
    <div role="status" aria-label="Cargando alojamientos" className={`grid grid-cols-1 gap-x-6 gap-y-10 ${columnsClass}`}>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex animate-pulse flex-col gap-3">
          <div className="aspect-square w-full rounded-xl bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-1/2 rounded bg-gray-200" />
          <div className="h-4 w-1/3 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default ListingSkeleton;
