"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryThumbnails from "@/components/GalleryThumbnails";
import Icon from "@/components/Icon";

// Spec: PhotoGallery — props: photos, title. Foto principal con botones
// Anterior / Siguiente y contador "n / N". En escritorio, a la derecha,
// una cuadrícula 2×2 de miniaturas (como Airbnb) que cambia la foto activa.
interface PhotoGalleryProps {
  photos: string[];
  title: string;
}

const navButton =
  "absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow hover:scale-105 hover:bg-white";

const PhotoGallery = ({ photos, title }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = photos.length;

  const showPrevious = () => setCurrentIndex((index) => (index - 1 + total) % total);
  const showNext = () => setCurrentIndex((index) => (index + 1) % total);

  return (
    <section className="grid gap-2 md:grid-cols-2 md:overflow-hidden md:rounded-xl" aria-label="Galería de fotos">
      <div className="relative aspect-4/3 w-full bg-gray-200 md:aspect-auto md:h-[440px]">
        <Image
          src={photos[currentIndex]}
          alt={`${title} — foto ${currentIndex + 1}`}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <button type="button" onClick={showPrevious} className={`${navButton} left-3`} aria-label="Foto anterior">
          <Icon name="chevronLeft" className="h-4 w-4" />
        </button>
        <button type="button" onClick={showNext} className={`${navButton} right-3`} aria-label="Foto siguiente">
          <Icon name="chevronRight" className="h-4 w-4" />
        </button>
        <span className="absolute right-3 bottom-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white">
          {currentIndex + 1} / {total}
        </span>
      </div>
      <GalleryThumbnails photos={photos} activeIndex={currentIndex} onSelect={setCurrentIndex} />
    </section>
  );
};

export default PhotoGallery;
