import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";

// Spec: ListingPhoto — props: src, alt, isGuestFavorite.
// Foto cuadrada redondeada con: etiqueta "Favorito entre huéspedes"
// (arriba izquierda), corazón (arriba derecha) y puntos del carrusel (abajo).
interface ListingPhotoProps {
  src: string;
  alt: string;
  isGuestFavorite: boolean;
}

const ListingPhoto = ({ src, alt, isGuestFavorite }: ListingPhotoProps) => {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw"
        className="object-cover transition duration-300 group-hover:scale-105"
      />
      {isGuestFavorite && (
        <span className="absolute top-3 left-3 max-w-[calc(100%-4rem)] truncate rounded-full bg-white px-2.5 py-1 text-xs font-semibold shadow">
          Favorito entre huéspedes
        </span>
      )}
      <FavoriteButton className="absolute top-3 right-3" />
      <span className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
      </span>
    </div>
  );
};

export default ListingPhoto;
