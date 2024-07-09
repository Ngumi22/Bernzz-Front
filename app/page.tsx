"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Hero from "@/components/Hero-Section/hero";
import Week from "@/components/weekly";
import CategorySection from "@/components/category-section";
import MegaMenu from "@/components/Mega-Menu/mega-menu";
import TopNav from "@/components/Navigation/TopNav";

export default function Home() {
  return (
    <main className="">
      <ToastContainer />
      <Hero />
      {/* <Week /> */}
      <CategorySection />

      {/* <Card product={undefined} /> */}
    </main>
  );
}
