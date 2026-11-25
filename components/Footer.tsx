import Icon from "@/components/Icon";

// Spec: Footer — sin props. Franja gris inferior con copyright y enlaces
// legales a la izquierda, idioma y moneda a la derecha (solo escritorio).
const Footer = () => {
  return (
    <footer className="mt-auto hidden border-t border-gray-200 bg-gray-50 md:block">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between px-6 py-6 text-sm lg:px-20">
        <p className="text-gray-700">
          © 2026 Airbnb UI Clone · Privacidad · Condiciones · Mapa del sitio
        </p>
        <p className="flex items-center gap-4 font-semibold">
          <span className="flex items-center gap-2">
            <Icon name="globe" className="h-4 w-4" />
            Español (ES)
          </span>
          <span>€ EUR</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
