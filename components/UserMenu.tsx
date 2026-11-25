import Icon from "@/components/Icon";

// Spec: UserMenu — sin props. "Hazte anfitrión" + globo + píldora con
// menú hamburguesa y avatar. Oculto en móvil (allí está MobileTabBar).
const UserMenu = () => {
  return (
    <div className="hidden shrink-0 items-center gap-1 md:flex">
      <button type="button" className="hidden rounded-full px-4 py-3 text-sm font-semibold hover:bg-gray-100 lg:block">
        Hazte anfitrión
      </button>
      <button type="button" className="rounded-full p-3 hover:bg-gray-100" aria-label="Idioma y región">
        <Icon name="globe" className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="flex items-center gap-3 rounded-full border border-gray-300 py-1.5 pr-1.5 pl-3 hover:shadow-md"
        aria-label="Menú de usuario"
      >
        <Icon name="menu" className="h-4 w-4" />
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white">
          <Icon name="user" className="h-5 w-5" filled />
        </span>
      </button>
    </div>
  );
};

export default UserMenu;
