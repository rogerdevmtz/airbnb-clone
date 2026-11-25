import Link from "next/link";

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
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
};

export default BackLink;
