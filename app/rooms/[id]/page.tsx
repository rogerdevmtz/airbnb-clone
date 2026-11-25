import BackLink from "@/components/BackLink";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RoomView from "@/components/RoomView";
import { listings } from "@/lib/data";

// Página de detalle (/rooms/[id]). Lee el id de la URL y se lo pasa a
// RoomView, que simula la carga de datos con useEffect.
export const generateStaticParams = () => listings.map((listing) => ({ id: listing.id }));

const RoomPage = async ({ params }: PageProps<"/rooms/[id]">) => {
  const { id } = await params;

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1120px] pb-16 md:px-10">
        <div className="px-6 py-3 md:px-0">
          <BackLink href="/catalog" label="Volver al catálogo" />
        </div>
        <RoomView roomId={id} />
      </main>
      <Footer />
    </>
  );
};

export default RoomPage;
