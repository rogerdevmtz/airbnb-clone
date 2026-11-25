import Icon from "@/components/Icon";

// Spec: MapPlaceholder — sin props. Recuadro gris con el texto "Mapa".
// Debajo de la lista en móvil; columna derecha fija (sticky) en escritorio.
const MapPlaceholder = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-gray-200 bg-[linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px)] bg-size-[48px_48px] text-gray-600 h-80 md:sticky md:top-28 md:h-[calc(100vh-9rem)]">
      <Icon name="map" className="h-10 w-10" />
      <span className="text-lg font-semibold">Mapa</span>
    </div>
  );
};

export default MapPlaceholder;
