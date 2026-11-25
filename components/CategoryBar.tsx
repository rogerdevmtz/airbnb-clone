import CategoryButton from "@/components/CategoryButton";
import type { Category } from "@/types/listing";

// Spec: CategoryBar — props: categories, activeId, onSelect.
// Fila horizontal con scroll debajo de la Navbar.
interface CategoryBarProps {
  categories: Category[];
  activeId: string;
  onSelect: (id: string) => void;
}

const CategoryBar = ({ categories, activeId, onSelect }: CategoryBarProps) => {
  return (
    <div className="no-scrollbar flex gap-6 overflow-x-auto px-4 pt-4 md:gap-10 md:px-8">
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          category={category}
          isActive={category.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
