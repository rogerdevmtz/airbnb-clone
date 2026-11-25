import Image from "next/image";
import Icon from "@/components/Icon";

// Spec: GalleryThumbnails — props: photos, activeIndex, onSelect.
// Cuadrícula 2×2 (solo escritorio) con las fotos 2–5 y el botón
// "Mostrar todas las fotos" abajo a la derecha.
interface GalleryThumbnailsProps {
  photos: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const GalleryThumbnails = ({ photos, activeIndex, onSelect }: GalleryThumbnailsProps) => {
  return (
    <div className="relative hidden h-[440px] grid-cols-2 grid-rows-2 gap-2 md:grid">
      {photos.slice(1, 5).map((photo, offset) => {
        const index = offset + 1;
        return (
          <button
            key={photo}
            type="button"
            onClick={() => onSelect(index)}
            className={`relative bg-gray-200 transition hover:brightness-90 ${activeIndex === index ? "ring-4 ring-gray-900 ring-inset" : ""}`}
            aria-label={`Ver foto ${index + 1}`}
          >
            <Image src={photo} alt="" fill sizes="25vw" className="object-cover" />
          </button>
        );
      })}
      <span className="absolute right-4 bottom-4 flex items-center gap-2 rounded-lg border border-gray-900 bg-white px-4 py-1.5 text-sm font-semibold">
        <Icon name="grid" className="h-4 w-4" />
        Mostrar todas las fotos
      </span>
    </div>
  );
};

export default GalleryThumbnails;
