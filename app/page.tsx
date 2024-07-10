"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Hero from "@/components/Hero-Section/hero";
import CategorySection from "@/components/category-section";
import ShopByBrand from "@/components/shop-by-brand";
import { DiscountedProductsTabs } from "@/components/shop-by-discount";

export default function Home() {
  return (
    <main className="">
      <ToastContainer />
      <Hero />
      {/* <Week /> */}
      <CategorySection />
      <ShopByBrand />
      <DiscountedProductsTabs />
    </main>
  );
}
