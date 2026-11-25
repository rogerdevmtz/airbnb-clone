"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ListingGrid from "@/components/ListingGrid";
import ListingSkeleton from "@/components/ListingSkeleton";
import MapPlaceholder from "@/components/MapPlaceholder";
import MobileTabBar from "@/components/MobileTabBar";
import Navbar from "@/components/Navbar";
import ResultsHeader from "@/components/ResultsHeader";
import { FAKE_LOADING_DELAY } from "@/lib/constants";
import { listings as allListings } from "@/lib/data";
import type { Listing, SortOrder } from "@/types/listing";

const catalogColumns = "sm:grid-cols-2 xl:grid-cols-3";

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
      <main className="mx-auto flex w-full max-w-[1760px] flex-col gap-6 px-6 pb-24 md:flex-row md:pb-12 lg:px-10">
        <section className="md:w-[58%]">
          <ResultsHeader count={listings.length} sortOrder={sortOrder} onSortChange={setSortOrder} />
          {isLoading ? (
            <ListingSkeleton count={6} columnsClass={catalogColumns} />
          ) : (
            <ListingGrid listings={sortedListings} columnsClass={catalogColumns} />
          )}
        </section>
        <section className="md:w-[42%] md:pt-5" aria-label="Mapa de resultados">
          <MapPlaceholder />
        </section>
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
};

export default CatalogPage;
