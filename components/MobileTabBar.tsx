import Link from "next/link";
import Icon from "@/components/Icon";

// Spec: MobileTabBar — sin props. Barra fija inferior solo en móvil
// con Explorar · Catálogo · Iniciar sesión (como en la captura de 375px).
const MobileTabBar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex justify-center gap-12 border-t border-gray-200 bg-white py-2 text-[11px] md:hidden">
      <Link href="/" className="flex flex-col items-center gap-1 text-rose-500">
        <Icon name="search" className="h-6 w-6" />
        Explorar
      </Link>
      <Link href="/catalog" className="flex flex-col items-center gap-1 text-gray-500">
        <Icon name="heart" className="h-6 w-6" />
        Catálogo
      </Link>
      <button type="button" className="flex flex-col items-center gap-1 text-gray-500">
        <Icon name="user" className="h-6 w-6" />
        Iniciar sesión
      </button>
    </nav>
  );
};

export default MobileTabBar;
