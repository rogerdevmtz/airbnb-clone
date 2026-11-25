"use client";

import { useState } from "react";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

// Spec: PhotoGallery — props: photos, title. Foto a ancho completo con
// contador "1 / N" abajo a la derecha y botones Anterior / Siguiente.
interface PhotoGalleryProps {
  photos: string[];
  title: string;
}

const navButtonClasses =
  "absolute top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold shadow hover:bg-white";

const PhotoGallery = ({ photos, title }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = photos.length;

  const showPrevious = () => setCurrentIndex((index) => (index - 1 + total) % total);
  const showNext = () => setCurrentIndex((index) => (index + 1) % total);

  return (
    <section className="relative" aria-label="Galería de fotos">
      <PhotoPlaceholder
        colorClass={photos[currentIndex]}
        label={`Foto ${currentIndex + 1} de ${title}`}
        className="aspect-4/3 w-full md:aspect-video md:rounded-xl"
      />
      <button type="button" onClick={showPrevious} className={`${navButtonClasses} left-3`}>
        ‹ Anterior
      </button>
      <button type="button" onClick={showNext} className={`${navButtonClasses} right-3`}>
        Siguiente ›
      </button>
      <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
        {currentIndex + 1} / {total}
      </span>
    </section>
  );
};

export default PhotoGallery;
