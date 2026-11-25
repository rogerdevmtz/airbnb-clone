// Spec: RoomSummary — props: heading, maxGuests, bedrooms, beds, baths.
// "Alojamiento entero: villa en Marbella" + "4 viajeros · 2 dormitorios…".
interface RoomSummaryProps {
  heading: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

const RoomSummary = ({ heading, maxGuests, bedrooms, beds, baths }: RoomSummaryProps) => {
  const details = [
    `${maxGuests} viajeros`,
    `${bedrooms} ${bedrooms === 1 ? "dormitorio" : "dormitorios"}`,
    `${beds} camas`,
    `${baths} ${baths === 1 ? "baño" : "baños"}`,
  ];

  return (
    <section className="border-b border-gray-200 py-6">
      <h2 className="text-xl font-semibold">Alojamiento entero: {heading.charAt(0).toLowerCase() + heading.slice(1)}</h2>
      <p className="text-gray-700">{details.join(" · ")}</p>
    </section>
  );
};

export default RoomSummary;
