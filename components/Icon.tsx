import { iconPaths, type IconName } from "@/lib/icons";

// Spec: Icon — props: name, className, filled. Icono SVG de línea
// (los colores y el tamaño se controlan con clases de Tailwind).
interface IconProps {
  name: IconName;
  className?: string;
  filled?: boolean;
}

const Icon = ({ name, className = "h-5 w-5", filled = false }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 1 : 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
};

export default Icon;
