import Link from "next/link";

// Spec: Logo — sin props. Marca rosa + texto "airbnb" (texto solo en escritorio).
// Isotipo propio y simplificado (no es el logotipo oficial).
const Logo = () => {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-1 text-rose-500" aria-label="Ir a la página de inicio">
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
        <path d="M16 3c-1.6 0-2.8.9-3.7 2.6L4.6 21.2C3.2 24 4.9 28 8.6 28c2.4 0 4.6-1.6 7.4-4.6 2.8 3 5 4.6 7.4 4.6 3.7 0 5.4-4 4-6.8L19.7 5.6C18.8 3.9 17.6 3 16 3zm0 5.2 6.9 14.1c.6 1.2-.2 2.7-1.6 2.7-1.3 0-2.9-1.1-5.3-3.7 2-2.6 3.2-4.9 3.2-6.7a3.2 3.2 0 0 0-6.4 0c0 1.8 1.2 4.1 3.2 6.7-2.4 2.6-4 3.7-5.3 3.7-1.4 0-2.2-1.5-1.6-2.7z" />
      </svg>
      <span className="hidden text-2xl font-bold tracking-tight lg:inline">airbnb</span>
    </Link>
  );
};

export default Logo;
