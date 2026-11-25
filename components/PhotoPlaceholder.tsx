// Spec: PhotoPlaceholder — props: colorClass, label, className.
// Sustituye a la foto real con un degradado de Tailwind.
interface PhotoPlaceholderProps {
  colorClass: string;
  label: string;
  className?: string;
}

const PhotoPlaceholder = ({ colorClass, label, className = "" }: PhotoPlaceholderProps) => {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-linear-to-br ${colorClass} ${className}`}
    >
      <span className="text-4xl opacity-60" aria-hidden="true">
        📷
      </span>
    </div>
  );
};

export default PhotoPlaceholder;
