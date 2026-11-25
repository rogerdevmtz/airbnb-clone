import Link from "next/link";
import Icon from "@/components/Icon";

// Spec: BackLink — props: href, label. Botón "←" para volver atrás.
interface BackLinkProps {
  href: string;
  label: string;
}

const BackLink = ({ href, label }: BackLinkProps) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold hover:bg-gray-100"
    >
      <Icon name="chevronLeft" className="h-4 w-4" />
      {label}
    </Link>
  );
};

export default BackLink;
