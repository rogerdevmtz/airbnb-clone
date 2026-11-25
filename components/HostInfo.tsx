import type { Host } from "@/types/listing";

// Spec: HostInfo — props: host. Avatar redondo + "Anfitrión: Nombre" +
// años como anfitrión (y Superanfitrión si aplica).
interface HostInfoProps {
  host: Host;
}

const HostInfo = ({ host }: HostInfoProps) => {
  return (
    <section className="flex items-center gap-4 border-b border-gray-200 py-6">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-800 text-lg font-semibold text-white"
        aria-hidden="true"
      >
        {host.name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold">Anfitrión: {host.name}</p>
        <p className="text-sm text-gray-600">
          {host.isSuperhost && "Superanfitrión · "}
          {host.yearsHosting} años como anfitrión
        </p>
      </div>
    </section>
  );
};

export default HostInfo;
