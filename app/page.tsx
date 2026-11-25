"use client";

import { useEffect, useState } from "react";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import ListingGrid from "@/components/ListingGrid";
import ListingSkeleton from "@/components/ListingSkeleton";
import MobileTabBar from "@/components/MobileTabBar";
import Navbar from "@/components/Navbar";
import { FAKE_LOADING_DELAY } from "@/lib/constants";
import { categories, listings as allListings } from "@/lib/data";
import type { Listing } from "@/types/listing";

// Página de inicio (/): Navbar con buscador + CategoryBar + ListingGrid.
const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Simula la carga de datos desde una API al montar la página.
  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(allListings);
      setIsLoading(false);
    }, FAKE_LOADING_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const query = searchTerm.trim().toLowerCase();
  const visibleListings = listings.filter((listing) => {
    const matchesCategory = activeCategory === "all" || listing.categoryId === activeCategory;
    const matchesSearch = [listing.title, listing.heading, listing.location].some((text) =>
      text.toLowerCase().includes(query),
    );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar searchValue={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryBar categories={categories} activeId={activeCategory} onSelect={setActiveCategory} />
      <main className="mx-auto w-full max-w-[1760px] px-6 pt-6 pb-24 md:pb-12 lg:px-10 xl:px-20">
        {isLoading ? <ListingSkeleton /> : <ListingGrid listings={visibleListings} />}
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
};

export default HomePage;
