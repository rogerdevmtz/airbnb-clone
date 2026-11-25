import { formatEuros } from "@/lib/booking";

// Spec: PriceBreakdown — props: pricePerNight, nights.
// "120 € x 5 noches … 600 €" y la línea del total. Solo se muestra
// cuando hay noches seleccionadas.
interface PriceBreakdownProps {
  pricePerNight: number;
  nights: number;
}

const PriceBreakdown = ({ pricePerNight, nights }: PriceBreakdownProps) => {
  if (nights === 0) return null;
  const total = pricePerNight * nights;

  return (
    <dl className="flex flex-col gap-3 text-gray-700">
      <div className="flex justify-between">
        <dt className="underline">
          {formatEuros(pricePerNight)} x {nights} {nights === 1 ? "noche" : "noches"}
        </dt>
        <dd>{formatEuros(total)}</dd>
      </div>
      <div className="flex justify-between border-t border-gray-200 pt-4 font-semibold text-gray-900">
        <dt>Total</dt>
        <dd>{formatEuros(total)}</dd>
      </div>
    </dl>
  );
};

export default PriceBreakdown;
