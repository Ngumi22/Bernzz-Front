"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Hero from "@/components/Hero-Section/hero";
import Week from "@/components/weekly";
import CategoryList from "@/components/categories";
import { Product } from "@/lib/definitions";

export default function Home() {
  return (
    <main className="mx-4">
      <ToastContainer />
      <Hero />

      <Week />

      <CategoryList />
    </main>
  );
}
