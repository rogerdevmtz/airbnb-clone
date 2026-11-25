import Icon from "@/components/Icon";
import type { IconName } from "@/lib/icons";

// Spec: RoomHighlights — props: hostName. Tres puntos destacados con
// icono, título y descripción (bloque bajo el anfitrión en Airbnb).
interface RoomHighlightsProps {
  hostName: string;
}

const RoomHighlights = ({ hostName }: RoomHighlightsProps) => {
  const highlights: Array<{ icon: IconName; title: string; text: string }> = [
    { icon: "door", title: "Llegada autónoma", text: "Entra con un código de acceso." },
    { icon: "laptop", title: "Zona de trabajo", text: "Espacio con wifi ideal para trabajar." },
    { icon: "calendar", title: "Cancelación gratuita durante 48 horas", text: `Reserva con ${hostName} sin preocupaciones.` },
  ];

  return (
    <ul className="flex flex-col gap-6 border-b border-gray-200 py-8">
      {highlights.map((item) => (
        <li key={item.title} className="flex gap-6">
          <Icon name={item.icon} className="h-6 w-6 shrink-0" />
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-500">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RoomHighlights;
