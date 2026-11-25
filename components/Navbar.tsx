import Link from "next/link";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import UserMenu from "@/components/UserMenu";

// Spec: Navbar — props opcionales: searchValue, onSearchChange.
// Layout: fila [Logo | SearchBar | UserMenu]. Si no recibe buscador,
// muestra un enlace al catálogo en su lugar.
interface NavbarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const Navbar = ({ searchValue, onSearchChange }: NavbarProps) => {
  const hasSearch = searchValue !== undefined && onSearchChange !== undefined;

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:justify-between md:px-8">
        <Logo />
        {hasSearch ? (
          <SearchBar value={searchValue} onChange={onSearchChange} />
        ) : (
          <Link href="/catalog" className="text-sm font-semibold hover:underline">
            Ver catálogo
          </Link>
        )}
        <UserMenu />
      </nav>
    </header>
  );
};

export default Navbar;
