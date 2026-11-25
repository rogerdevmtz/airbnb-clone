import Icon from "@/components/Icon";

// Spec: StarRating — props: rating, reviewCount (opcional).
// "★ 4,92" y, si se pasa, "· 128 reseñas".
interface StarRatingProps {
  rating: number;
  reviewCount?: number;
}

const StarRating = ({ rating, reviewCount }: StarRatingProps) => {
  const formatted = rating.toLocaleString("es-ES", { minimumFractionDigits: 2 });

  return (
    <span className="flex shrink-0 items-center gap-1 text-sm" aria-label={`Valoración ${formatted} de 5`}>
      <Icon name="star" className="h-3 w-3" filled />
      <span>{formatted}</span>
      {reviewCount !== undefined && (
        <span className="font-normal">· {reviewCount} reseñas</span>
      )}
    </span>
  );
};

export default StarRating;
