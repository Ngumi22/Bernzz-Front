"use client";

import ProductsDisplay from "@/components/Products_Filter_page/Products_Display";
import FiltersSideBar from "@/components/Products_Filter_page/SideBar";

export default function ProductsPage() {
  return (
    <section className="container">
      <div className="h-10 w-full bg-black my-2"></div>
      <div className="grid grid-cols-4 gap-2">
        <FiltersSideBar />
        <ProductsDisplay />
      </div>
    </section>
  );
}
