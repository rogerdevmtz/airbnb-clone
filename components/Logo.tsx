import Link from "next/link";

// Spec: Logo — sin props. Enlace a la Home, a la izquierda de la Navbar.
const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 text-rose-500" aria-label="Ir a la página de inicio">
      <span className="text-2xl" aria-hidden="true">
        ⌂
      </span>
      <span className="hidden text-xl font-bold tracking-tight md:inline">airbnb</span>
    </Link>
  );
};

export default Logo;
