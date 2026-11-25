import CategoryButton from "@/components/CategoryButton";
import Icon from "@/components/Icon";
import type { Category } from "@/types/listing";

// Spec: CategoryBar — props: categories, activeId, onSelect.
// Fila horizontal con scroll debajo de la Navbar + botón "Filtros" (escritorio).
interface CategoryBarProps {
  categories: Category[];
  activeId: string;
  onSelect: (id: string) => void;
}

const CategoryBar = ({ categories, activeId, onSelect }: CategoryBarProps) => {
  return (
    <div className="sticky top-[69px] z-20 bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)] md:top-[89px]">
      <div className="mx-auto flex max-w-[1760px] items-center gap-6 px-6 pt-4 lg:px-10 xl:px-20">
        <div className="no-scrollbar flex flex-1 gap-8 overflow-x-auto md:gap-10">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              isActive={category.id === activeId}
              onSelect={onSelect}
            />
          ))}
        </div>
        <button
          type="button"
          className="mb-3 hidden shrink-0 items-center gap-2 rounded-xl border border-gray-300 px-4 py-3 text-xs font-semibold hover:border-gray-900 md:flex"
        >
          <Icon name="sliders" className="h-4 w-4" />
          Filtros
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
