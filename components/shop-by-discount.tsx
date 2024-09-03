import React from "react";
import { useGetProductsByDiscountQuery } from "@/lib/productsApi";
import ProductCard from "@/components/card";

export default function DiscountedProducts() {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsByDiscountQuery({
    minDiscount: 1,
    maxDiscount: 100,
    limit: 5, // Limit the number of products fetched
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <section className="container">
      <h2 className="text-2xl font-bold uppercase mb-5">Shop by Discount</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showDescription
              showPrice
              showActions
              showCategory
              showBrand
              showDiscount
            />
          ))}
      </div>
    </section>
  );
}
