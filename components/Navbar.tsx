import Link from "next/link";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import UserMenu from "@/components/UserMenu";

// Spec: Navbar — props opcionales: searchValue, onSearchChange.
// Layout: [Logo | SearchBar | UserMenu]. Sin buscador (catálogo y detalle)
// muestra una píldora compacta que enlaza al catálogo.
interface NavbarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const Navbar = ({ searchValue, onSearchChange }: NavbarProps) => {
  const hasSearch = searchValue !== undefined && onSearchChange !== undefined;

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-[1760px] items-center gap-4 px-6 py-3 md:justify-between md:py-4 lg:px-20">
        <span className="hidden md:block">
          <Logo />
        </span>
        {hasSearch ? (
          <SearchBar value={searchValue} onChange={onSearchChange} />
        ) : (
          <Link
            href="/catalog"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold shadow-[0_3px_12px_rgba(0,0,0,0.1)] md:w-auto"
          >
            <Icon name="search" className="h-4 w-4" />
            Alojamientos en España
          </Link>
        )}
        <UserMenu />
      </nav>
    </header>
  );
};

export default Navbar;
