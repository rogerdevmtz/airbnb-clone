"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

// Spec: FavoriteButton — props: className. Corazón blanco con relleno
// semitransparente; al pulsarlo se rellena de rosa. No navega.
interface FavoriteButtonProps {
  className?: string;
}

const FavoriteButton = ({ className = "" }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        setIsFavorite((value) => !value);
      }}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
      className={`text-white transition hover:scale-110 ${className}`}
    >
      <Icon
        name="heart"
        filled
        className={`h-6 w-6 stroke-white stroke-2 ${isFavorite ? "fill-rose-500" : "fill-black/50"}`}
      />
    </button>
  );
};

export default FavoriteButton;
