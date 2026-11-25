"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import RoomDetails from "@/components/RoomDetails";
import { FAKE_LOADING_DELAY } from "@/lib/constants";
import { getRoomById } from "@/lib/data";
import type { Room } from "@/types/listing";

// Spec: RoomView — props: roomId (el id de la URL).
// Carga la habitación con useEffect + setTimeout y muestra el estado de carga.
interface RoomViewProps {
  roomId: string;
}

const RoomView = ({ roomId }: RoomViewProps) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simula la petición a la API con el id de la URL al montar el componente.
  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(getRoomById(roomId) ?? null);
      setIsLoading(false);
    }, FAKE_LOADING_DELAY);
    return () => clearTimeout(timer);
  }, [roomId]);

  if (isLoading) return <LoadingSpinner message="Cargando alojamiento…" />;

  if (!room) {
    return (
      <p className="px-4 py-16 text-center text-gray-600">No hemos encontrado este alojamiento.</p>
    );
  }

  return <RoomDetails room={room} />;
};

export default RoomView;
