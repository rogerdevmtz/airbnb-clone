"use client";

import { useEffect, useState } from "react";
import ListingGrid from "@/components/ListingGrid";
import LoadingSpinner from "@/components/LoadingSpinner";
import MapPlaceholder from "@/components/MapPlaceholder";
import MobileTabBar from "@/components/MobileTabBar";
import Navbar from "@/components/Navbar";
import ResultsHeader from "@/components/ResultsHeader";
import { FAKE_LOADING_DELAY } from "@/lib/constants";
import { listings as allListings } from "@/lib/data";
import type { Listing, SortOrder } from "@/types/listing";

// Página de catálogo (/catalog): ResultsHeader + ListingGrid + MapPlaceholder.
const CatalogPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  // Simula la carga de resultados al montar la página.
  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(allListings);
      setIsLoading(false);
    }, FAKE_LOADING_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const sortedListings = [...listings].sort((a, b) =>
    sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
  );

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-24 md:flex-row md:px-8">
        <section className="md:w-3/5">
          <ResultsHeader count={listings.length} sortOrder={sortOrder} onSortChange={setSortOrder} />
          {isLoading ? (
            <LoadingSpinner message="Buscando alojamientos…" />
          ) : (
            <ListingGrid listings={sortedListings} columnsClass="md:grid-cols-2" />
          )}
        </section>
        <section className="md:w-2/5 md:pt-4" aria-label="Mapa de resultados">
          <MapPlaceholder />
        </section>
      </main>
      <MobileTabBar />
    </>
  );
};

export default CatalogPage;
