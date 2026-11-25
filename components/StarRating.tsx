// Spec: StarRating — props: rating, reviewCount (opcional).
// "★ 4,92" y, si se pasa, "· 128 reseñas".
interface StarRatingProps {
  rating: number;
  reviewCount?: number;
}

const StarRating = ({ rating, reviewCount }: StarRatingProps) => {
  const formatted = rating.toLocaleString("es-ES", { minimumFractionDigits: 2 });

  return (
    <span className="flex items-center gap-1 text-sm" aria-label={`Valoración ${formatted} de 5`}>
      <span aria-hidden="true">★</span>
      <span>{formatted}</span>
      {reviewCount !== undefined && (
        <span className="text-gray-600">· {reviewCount} reseñas</span>
      )}
    </span>
  );
};

export default StarRating;
