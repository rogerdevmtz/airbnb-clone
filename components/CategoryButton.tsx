import Icon from "@/components/Icon";
import type { Category } from "@/types/listing";

// Spec: CategoryButton — props: category, isActive, onSelect.
// Icono de línea encima de la etiqueta; inactiva en gris, activa en
// negro con subrayado.
interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const CategoryButton = ({ category, isActive, onSelect }: CategoryButtonProps) => {
  const stateClasses = isActive
    ? "border-gray-900 text-gray-900"
    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900";

  return (
    <button
      type="button"
      onClick={() => onSelect(category.id)}
      aria-pressed={isActive}
      className={`flex shrink-0 flex-col items-center gap-2 border-b-2 pt-1 pb-3 text-xs font-semibold whitespace-nowrap transition ${stateClasses}`}
    >
      <Icon name={category.icon} className="h-6 w-6" />
      {category.label}
    </button>
  );
};

export default CategoryButton;
