import type { Category } from "@/types/listing";

// Spec: CategoryButton — props: category, isActive, onSelect.
// Icono encima de la etiqueta; la activa lleva texto oscuro y subrayado.
interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const CategoryButton = ({ category, isActive, onSelect }: CategoryButtonProps) => {
  const stateClasses = isActive
    ? "border-gray-900 text-gray-900"
    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-800";

  return (
    <button
      type="button"
      onClick={() => onSelect(category.id)}
      aria-pressed={isActive}
      className={`flex shrink-0 flex-col items-center gap-1 border-b-2 pb-2 text-xs font-medium transition ${stateClasses}`}
    >
      <span className="text-2xl" aria-hidden="true">
        {category.icon}
      </span>
      {category.label}
    </button>
  );
};

export default CategoryButton;
