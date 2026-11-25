// Spec: MapPlaceholder — sin props. Recuadro gris con el texto "Mapa".
// Debajo de la lista en móvil; columna derecha fija en escritorio.
const MapPlaceholder = () => {
  return (
    <div className="flex h-72 w-full items-center justify-center rounded-xl bg-gray-200 text-lg font-semibold text-gray-500 md:sticky md:top-24 md:h-[calc(100vh-8rem)]">
      🗺️ Mapa
    </div>
  );
};

export default MapPlaceholder;
