// Spec: UserMenu — sin props. Iconos de idioma + menú hamburguesa + avatar.
// En móvil se oculta (Airbnb usa la barra inferior MobileTabBar).
const UserMenu = () => {
  return (
    <div className="hidden items-center gap-2 md:flex">
      <button type="button" className="rounded-full p-3 hover:bg-gray-100" aria-label="Idioma">
        🌐
      </button>
      <button
        type="button"
        className="flex items-center gap-3 rounded-full border border-gray-300 px-3 py-2 hover:shadow-md"
        aria-label="Menú de usuario"
      >
        <span aria-hidden="true">☰</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white" aria-hidden="true">
          👤
        </span>
      </button>
    </div>
  );
};

export default UserMenu;
