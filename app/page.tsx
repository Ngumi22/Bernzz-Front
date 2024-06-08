"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Hero from "@/components/Hero-Section/hero";
import Card from "@/components/card";
import Week from "@/components/weekly";
import CategoryList from "@/components/categories";
import { Product } from "@/lib/definitions";

interface HomeProps {
  product: Product; // replace ProductType with the actual type of your product
}

export default function Home({ product }: HomeProps) {
  return (
    <main className="mx-4">
      <ToastContainer />
      <Hero />
      <Week product={product} />
      <CategoryList />
    </main>
  );
}
