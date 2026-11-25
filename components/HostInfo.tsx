import Icon from "@/components/Icon";
import type { Host } from "@/types/listing";

// Spec: HostInfo — props: host. Avatar redondo (con medalla si es
// Superanfitrión) + "Anfitrión: Nombre" + años como anfitrión.
interface HostInfoProps {
  host: Host;
}

const HostInfo = ({ host }: HostInfoProps) => {
  return (
    <section className="flex items-center gap-5 border-b border-gray-200 py-6">
      <div className="relative shrink-0">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-lg font-semibold text-white"
          aria-hidden="true"
        >
          {host.name.charAt(0)}
        </div>
        {host.isSuperhost && (
          <span className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-white ring-2 ring-white">
            <Icon name="medal" className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      <div>
        <p className="font-semibold">Anfitrión: {host.name}</p>
        <p className="text-sm text-gray-500">
          {host.isSuperhost && "Superanfitrión · "}
          {host.yearsHosting} años como anfitrión
        </p>
      </div>
    </section>
  );
};

export default HostInfo;
