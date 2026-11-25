import Link from "next/link";

// Spec: MobileTabBar — sin props. Barra fija inferior solo en móvil
// con Explorar / Catálogo / Iniciar sesión (visto en la captura de 375px).
const MobileTabBar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-around border-t border-gray-200 bg-white py-2 text-xs md:hidden">
      <Link href="/" className="flex flex-col items-center gap-1 text-rose-500">
        <span aria-hidden="true">🔍</span>
        Explorar
      </Link>
      <Link href="/catalog" className="flex flex-col items-center gap-1 text-gray-600">
        <span aria-hidden="true">🗺️</span>
        Catálogo
      </Link>
      <button type="button" className="flex flex-col items-center gap-1 text-gray-600">
        <span aria-hidden="true">👤</span>
        Iniciar sesión
      </button>
    </nav>
  );
};

export default MobileTabBar;
